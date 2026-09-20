import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export const ECOSYSTEM_TAGS = [
  "DeFi",
  "Payments",
  "Wallet",
  "Commerce",
  "FX",
  "Infrastructure",
  "Other",
] as const;

export const COPM_MODES = [
  "accept",
  "pay",
  "earn",
  "bridge",
  "wallet",
] as const;

export type EcosystemTag = (typeof ECOSYSTEM_TAGS)[number];
export type CopmMode = (typeof COPM_MODES)[number];

export type EcosystemContact = {
  github: string;
  telegramOrX?: string;
};

export type CopmUsage = {
  chains: string[];
  modes: CopmMode[];
  evidenceUrl: string;
  tokenAddress?: string;
};

export type EcosystemProject = {
  id: string;
  name: string;
  description: string;
  href: string;
  cta: string;
  tag: EcosystemTag;
  status: "live" | "soon";
  copmUsage: CopmUsage;
  contact: EcosystemContact;
  /** Invitation-only. Contributors must leave this unset; maintainers set it. */
  partner?: boolean;
};

const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const EVM_ADDRESS_RE = /^0x[a-fA-F0-9]{40}$/;
const HTTPS_RE = /^https:\/\//;

const ECOSYSTEM_DIR = path.join(process.cwd(), "content/ecosystem");

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function assertHttpsUrl(value: string, field: string) {
  if (!HTTPS_RE.test(value)) {
    throw new Error(`${field} must be an https URL`);
  }
}

function assertNoBannedClaims(text: string, field: string) {
  const lower = text.toLowerCase();
  if (/\bapy\s*\d/.test(lower) || /1\s*:\s*1/.test(lower)) {
    throw new Error(
      `${field} must not claim a numeric APY or a 1:1 peg (issuer docs only)`,
    );
  }
}

export function parseEcosystemProject(raw: unknown): EcosystemProject {
  if (!isRecord(raw)) {
    throw new Error("project must be a JSON object");
  }

  const {
    id,
    name,
    description,
    href,
    cta,
    tag,
    status,
    copmUsage,
    contact,
    partner,
  } = raw;

  if (!isString(id) || !ID_RE.test(id)) {
    throw new Error("id must be kebab-case (a-z, 0-9, hyphens)");
  }
  if (!isString(name) || name.trim().length < 2) {
    throw new Error("name is required");
  }
  if (!isString(description) || description.trim().length < 20) {
    throw new Error("description must be at least 20 characters");
  }
  if (description.length > 220) {
    throw new Error("description must be at most 220 characters");
  }
  assertNoBannedClaims(description, "description");

  if (!isString(href)) {
    throw new Error("href is required");
  }
  assertHttpsUrl(href, "href");

  if (!isString(cta) || cta.trim().length < 3) {
    throw new Error("cta is required");
  }
  if (HTTPS_RE.test(cta) || /digitalcop\.shop/i.test(cta)) {
    throw new Error("cta must be a verb phrase, not a URL");
  }

  if (!isString(tag) || !(ECOSYSTEM_TAGS as readonly string[]).includes(tag)) {
    throw new Error(`tag must be one of: ${ECOSYSTEM_TAGS.join(", ")}`);
  }

  if (status !== "live" && status !== "soon") {
    throw new Error('status must be "live" or "soon"');
  }

  if (!isRecord(copmUsage)) {
    throw new Error("copmUsage is required");
  }

  const { chains, modes, evidenceUrl, tokenAddress } = copmUsage;

  if (!Array.isArray(chains) || chains.length === 0 || !chains.every(isString)) {
    throw new Error("copmUsage.chains must be a non-empty string array");
  }
  if (!chains.map((c) => c.toLowerCase()).includes("celo")) {
    throw new Error('copmUsage.chains must include "celo"');
  }

  if (
    !Array.isArray(modes) ||
    modes.length === 0 ||
    !modes.every(
      (mode) =>
        isString(mode) && (COPM_MODES as readonly string[]).includes(mode),
    )
  ) {
    throw new Error(`copmUsage.modes must be from: ${COPM_MODES.join(", ")}`);
  }

  if (!isString(evidenceUrl)) {
    throw new Error("copmUsage.evidenceUrl is required");
  }
  assertHttpsUrl(evidenceUrl, "copmUsage.evidenceUrl");

  if (tokenAddress !== undefined) {
    if (!isString(tokenAddress) || !EVM_ADDRESS_RE.test(tokenAddress)) {
      throw new Error(
        "copmUsage.tokenAddress must be a full 0x + 40 hex address (never truncate)",
      );
    }
  }

  if (!isRecord(contact) || !isString(contact.github)) {
    throw new Error("contact.github is required");
  }
  assertHttpsUrl(contact.github, "contact.github");

  if (contact.telegramOrX !== undefined) {
    if (!isString(contact.telegramOrX)) {
      throw new Error("contact.telegramOrX must be a string URL");
    }
    assertHttpsUrl(contact.telegramOrX, "contact.telegramOrX");
  }

  if (partner !== undefined && typeof partner !== "boolean") {
    throw new Error("partner must be a boolean when set");
  }

  const project: EcosystemProject = {
    id,
    name: name.trim(),
    description: description.trim(),
    href,
    cta: cta.trim(),
    tag: tag as EcosystemTag,
    status,
    copmUsage: {
      chains,
      modes: modes as CopmMode[],
      evidenceUrl,
      ...(tokenAddress ? { tokenAddress } : {}),
    },
    contact: {
      github: contact.github,
      ...(isString(contact.telegramOrX)
        ? { telegramOrX: contact.telegramOrX }
        : {}),
    },
  };

  if (partner === true) {
    project.partner = true;
  }

  return project;
}

export function loadEcosystemProjects(): EcosystemProject[] {
  let files: string[];
  try {
    files = readdirSync(ECOSYSTEM_DIR).filter((file) => file.endsWith(".json"));
  } catch {
    return [];
  }

  const projects = files.map((file) => {
    const fullPath = path.join(ECOSYSTEM_DIR, file);
    const raw = JSON.parse(readFileSync(fullPath, "utf8")) as unknown;
    const project = parseEcosystemProject(raw);
    const expected = `${project.id}.json`;
    if (file !== expected) {
      throw new Error(
        `${file}: filename must match id (${expected})`,
      );
    }
    return project;
  });

  const ids = new Set<string>();
  for (const project of projects) {
    if (ids.has(project.id)) {
      throw new Error(`duplicate ecosystem id: ${project.id}`);
    }
    ids.add(project.id);
  }

  return projects.sort((a, b) => a.name.localeCompare(b.name, "en"));
}

export function liveEcosystemProjects(
  projects: EcosystemProject[] = loadEcosystemProjects(),
): EcosystemProject[] {
  return projects.filter((project) => project.status === "live");
}

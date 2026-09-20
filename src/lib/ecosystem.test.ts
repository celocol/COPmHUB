import { describe, expect, it } from "vitest";
import {
  loadEcosystemProjects,
  parseEcosystemProject,
  type EcosystemProject,
} from "./ecosystem";

const valid: EcosystemProject = {
  id: "demo-pay",
  name: "Demo Pay",
  description:
    "Acepta pagos en pesos digitales (COPm) para comercios en Colombia.",
  href: "https://example.com",
  cta: "Abrir Demo Pay",
  tag: "Payments",
  status: "live",
  copmUsage: {
    chains: ["celo"],
    modes: ["accept", "pay"],
    evidenceUrl: "https://example.com/docs/copm",
    tokenAddress: "0xFEF5A1A2b3754A2F53161EaaAcb3EB889F004d4a",
  },
  contact: {
    github: "https://github.com/example/demo-pay",
  },
};

describe("parseEcosystemProject", () => {
  it("accepts a valid project", () => {
    expect(parseEcosystemProject(valid)).toMatchObject({
      id: "demo-pay",
      tag: "Payments",
    });
  });

  it("requires celo in chains", () => {
    expect(() =>
      parseEcosystemProject({
        ...valid,
        copmUsage: { ...valid.copmUsage, chains: ["ethereum"] },
      }),
    ).toThrow(/celo/i);
  });

  it("rejects truncated token addresses", () => {
    expect(() =>
      parseEcosystemProject({
        ...valid,
        copmUsage: {
          ...valid.copmUsage,
          tokenAddress: "0xFEF5A1A2...d4a",
        },
      }),
    ).toThrow(/full 0x/i);
  });

  it("rejects URL-shaped CTAs", () => {
    expect(() =>
      parseEcosystemProject({ ...valid, cta: "https://example.com" }),
    ).toThrow(/verb/i);
  });

  it("rejects 1:1 peg claims in description", () => {
    expect(() =>
      parseEcosystemProject({
        ...valid,
        description: "COPm siempre vale 1:1 con el peso colombiano en efectivo.",
      }),
    ).toThrow(/1:1/i);
  });

  it("rejects invalid kebab ids", () => {
    expect(() => parseEcosystemProject({ ...valid, id: "Demo_Pay" })).toThrow(
      /kebab/i,
    );
  });
});

describe("loadEcosystemProjects", () => {
  it("loads and validates every JSON under content/ecosystem", () => {
    const projects = loadEcosystemProjects();
    expect(Array.isArray(projects)).toBe(true);
    for (const project of projects) {
      expect(project.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(project.href).toMatch(/^https:\/\//);
      expect(project.copmUsage.chains.map((c) => c.toLowerCase())).toContain(
        "celo",
      );
    }
  });
});

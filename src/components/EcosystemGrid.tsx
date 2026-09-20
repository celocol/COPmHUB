import { CtaLink } from "@/components/CtaLink";
import type { EcosystemProject } from "@/lib/ecosystem";

const CONTRIBUTE_URL =
  "https://github.com/celocol/COPmHUB/blob/main/CONTRIBUTING.md";

function StatusPill({ partner }: { partner?: boolean }) {
  return (
    <span
      className={
        partner
          ? "rounded-full bg-tint px-2 py-0.5 text-[10px] font-bold tracking-wide text-brand-2"
          : "rounded-full bg-[#eef8ee] px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#137211]"
      }
    >
      {partner ? "PARTNER" : "LIVE"}
    </span>
  );
}

export function EcosystemGrid({ projects }: { projects: EcosystemProject[] }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-[20px] border border-dashed border-line bg-white p-8 text-center sm:p-12">
        <p className="text-base font-semibold text-ink">
          Todavía no hay proyectos listados
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
          Si tu producto usa COPm en Celo, abre un pull request con la plantilla
          de ecosistema.
        </p>
        <CtaLink
          href={CONTRIBUTE_URL}
          label="How to list a project"
          event="outbound_click"
          section="ecosystem"
          className="mt-6 inline-flex rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white"
        >
          Cómo listar tu proyecto →
        </CtaLink>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="lift reveal flex flex-col justify-between rounded-[20px] border border-line bg-white p-6"
          style={{ animationDelay: `${index * 0.07}s` }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wide text-brand">
                {project.tag}
              </span>
              <StatusPill partner={project.partner} />
            </div>
            <h2 className="mt-4 text-xl font-extrabold tracking-tight text-ink">
              {project.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </div>
          <div className="mt-6">
            <CtaLink
              href={project.href}
              label={project.cta}
              event="product_card_click"
              section="ecosystem"
              product={project.id}
              className="text-sm font-bold text-brand"
            >
              {project.cta} →
            </CtaLink>
          </div>
        </div>
      ))}
    </div>
  );
}

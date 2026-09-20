import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { EcosystemGrid } from "@/components/EcosystemGrid";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { liveEcosystemProjects } from "@/lib/ecosystem";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { ECOSYSTEM_PAGE } from "@/lib/site";

export const metadata: Metadata = pageMetadata(ECOSYSTEM_PAGE);

const CONTRIBUTE_URL =
  "https://github.com/celocol/COPmHUB/blob/main/CONTRIBUTING.md";

export default function EcosystemPage() {
  const projects = liveEcosystemProjects();

  return (
    <main>
      <JsonLd data={webPageJsonLd(ECOSYSTEM_PAGE)} />
      <Nav />
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-wide text-brand">
            DigitalCOP
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {ECOSYSTEM_PAGE.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {ECOSYSTEM_PAGE.description}
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Solo se listan productos en producción que usan COPm. El badge{" "}
            <span className="font-semibold text-ink">PARTNER</span> es solo por
            invitación de los maintainers.
          </p>
          <div className="mt-10">
            <EcosystemGrid projects={projects} />
          </div>
          <div className="mt-12 border-t border-line pt-8">
            <h2 className="text-lg font-extrabold tracking-tight text-ink">
              ¿Quieres listar tu proyecto?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Lee la guía de contribución (en inglés) y abre un PR con la
              plantilla de ecosistema. Requisito: uso verificable de COPm en
              Celo.
            </p>
            <CtaLink
              href={CONTRIBUTE_URL}
              label="Read CONTRIBUTING.md"
              event="outbound_click"
              section="ecosystem"
              className="mt-4 inline-flex text-sm font-bold text-brand"
            >
              CONTRIBUTING.md →
            </CtaLink>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

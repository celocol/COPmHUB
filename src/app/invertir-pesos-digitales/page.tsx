import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { Disclaimer, IntentLayout } from "@/components/IntentLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { CLUSTER_PAGES, PRODUCT_URLS } from "@/lib/site";

const page = CLUSTER_PAGES[2];

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function InvertirPage() {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    about: {
      "@type": "FinancialProduct",
      name: "Rendimiento en COPm vía Neeru",
      description:
        "Producto partner para dejar COPm a rendir. El hub DigitalCOP no publica APY ni custodia fondos.",
    },
  };

  return (
    <>
      <JsonLd data={webPageJsonLd(page)} />
      <JsonLd data={productLd} />
      <IntentLayout
        eyebrow="Inversiones en pesos digitales"
        title={page.title}
        lead="Neeru es un partner del hub: puedes depositar COPm y explorar rendimiento en pesos digitales. DigitalCOP no custodia esos fondos ni publica una tasa."
      >
        <p>
          Si llegaste buscando «inversiones» o «renta fija crypto Colombia»,
          el producto relevante es Neeru, no un CDT ni un fondo de
          Bancolombia. La diferencia importa: aquí hay riesgo de token, de
          smart contract y de que el peso digital se separe del efectivo.
        </p>
        <h2 className="text-xl font-extrabold tracking-tight">Qué sí decimos</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>Neeru opera aparte; en el hub lo marcamos como partner.</li>
          <li>La tasa, el periodo y la custodia se confirman en neerufinance.xyz.</li>
          <li>Puedes llegar a COPm recargando en Cards o cambiando USD en COP By.</li>
        </ul>
        <h2 className="text-xl font-extrabold tracking-tight">Qué no prometemos</h2>
        <p>
          No hay APY en esta página porque no tenemos una cifra pública
          verificada para citar. No hay capital garantizado. «Intereses cada
          día» en un protocolo crypto no equivale a un CDT de un
          establecimiento de crédito.
        </p>
        <div className="flex flex-wrap gap-3">
          <CtaLink
            href={PRODUCT_URLS.neeru}
            label="Explorar Neeru"
            event="outbound_click"
            section="invertir"
            product="neeru"
            className="inline-flex rounded-xl bg-brand px-5 py-3 font-bold text-white"
          >
            Explorar Neeru
          </CtaLink>
          <CtaLink
            href="/que-es-copm"
            label="Qué es COPm"
            event="landing_cta_click"
            section="invertir"
            className="inline-flex rounded-xl px-5 py-3 font-bold text-brand"
          >
            Primero: qué es COPm
          </CtaLink>
        </div>
        <Disclaimer>
          Esto no es un consejo de inversión ni una oferta pública. Puedes
          perder el capital. Revisa los términos de Neeru y, si aplica, un
          asesor independiente.
        </Disclaimer>
        <RelatedLinks current={page.path} />
      </IntentLayout>
    </>
  );
}

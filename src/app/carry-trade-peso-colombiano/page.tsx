import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { Disclaimer, IntentLayout } from "@/components/IntentLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { CLUSTER_PAGES, PRODUCT_URLS } from "@/lib/site";

const page = CLUSTER_PAGES[3];

export const metadata: Metadata = pageMetadata(page);

export default function CarryTradePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(page)} />
      <IntentLayout
        eyebrow="Carry trade · peso colombiano"
        title={page.title}
        lead="Un carry clásico pide una moneda de financiación barata y una de destino que pague más. En este hub la versión de consumo es: USD → COPm (COP By) y, si eliges, rendimiento en pesos (Neeru)."
      >
        <p>
          El peso colombiano ha sido noticia por diferencial de tasas frente
          al dólar. Eso no convierte a DigitalCOP en un desk de FX. Lo que sí
          existe es un camino on-chain para quien ya está en MiniPay y quiere
          expresar esa idea con COPm.
        </p>
        <h2 className="text-xl font-extrabold tracking-tight">El mecanismo</h2>
        <ol className="list-decimal space-y-2 pl-5 text-muted">
          <li>
            Conviertes USD a COPm en{" "}
            <CtaLink
              href={PRODUCT_URLS.copby}
              label="COP By"
              event="outbound_click"
              section="carry"
              product="copby"
              className="font-bold text-brand"
            >
              COP By
            </CtaLink>
            .
          </li>
          <li>El COPm queda en MiniPay o TuCop.</li>
          <li>
            Si buscas la pata de rendimiento, revisas{" "}
            <CtaLink
              href={PRODUCT_URLS.neeru}
              label="Neeru"
              event="outbound_click"
              section="carry"
              product="neeru"
              className="font-bold text-brand"
            >
              Neeru
            </CtaLink>{" "}
            (partner), con sus propias reglas.
          </li>
        </ol>
        <h2 className="text-xl font-extrabold tracking-tight">Riesgos (léelos)</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>FX: el COP se puede apreciar o depreciar contra el USD.</li>
          <li>Token: COPm puede perder peg frente al peso en efectivo.</li>
          <li>Protocolo: un pool o contrato de rendimiento puede fallar o pausarse.</li>
          <li>Liquidez: salir de la posición puede costar spread o tiempo.</li>
        </ul>
        <p>
          Un carry institucional usa forwards, custodios y límites de riesgo.
          Esto es un flujo de mini app. Trátalo como crypto, no como un bono
          TES.
        </p>
        <div className="flex flex-wrap gap-3">
          <CtaLink
            href="/cambiar-usd-a-cop"
            label="Cambiar USD a COP"
            event="landing_cta_click"
            section="carry"
            className="inline-flex rounded-xl bg-brand px-5 py-3 font-bold text-white"
          >
            Cambiar USD a COP
          </CtaLink>
          <CtaLink
            href="/invertir-pesos-digitales"
            label="Explorar rendimiento"
            event="landing_cta_click"
            section="carry"
            className="inline-flex rounded-xl px-5 py-3 font-bold text-brand"
          >
            Explorar rendimiento
          </CtaLink>
        </div>
        <Disclaimer>
          Contenido educativo. No es una recomendación de carry trade ni una
          garantía de retorno. El capital puede bajar.
        </Disclaimer>
        <RelatedLinks current={page.path} />
      </IntentLayout>
    </>
  );
}

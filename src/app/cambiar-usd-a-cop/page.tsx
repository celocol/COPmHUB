import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { Disclaimer, IntentLayout } from "@/components/IntentLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { CLUSTER_PAGES, PRODUCT_URLS } from "@/lib/site";

const page = CLUSTER_PAGES[1];

export const metadata: Metadata = pageMetadata(page);

export default function CambiarUsdPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(page)} />
      <IntentLayout
        eyebrow="FX · MiniPay"
        title={page.title}
        lead="COP By convierte USD a pesos digitales (COPm) dentro de MiniPay. Es la pata de FX del hub DigitalCOP: no un broker de apalancamiento."
      >
        <p>
          Si buscas cambiar dólares a pesos en crypto, el flujo es: abres
          MiniPay, entras a COP By y conviertes. El tipo de cambio, el monto
          mínimo y cualquier fee se muestran ahí, en el momento de la
          operación. Este hub no fija la tasa.
        </p>
        <h2 className="text-xl font-extrabold tracking-tight">Cómo funciona</h2>
        <ol className="list-decimal space-y-2 pl-5 text-muted">
          <li>Abre MiniPay con saldo en USD o stablecoins compatibles.</li>
          <li>Entra a COP By y revisa el tipo de cambio publicado.</li>
          <li>Recibe COPm en la misma wallet y úsalo, envíalo o explora rendimiento.</li>
        </ol>
        <p>
          Cards es el camino inverso cuando partes de pesos colombianos en
          una cuenta o tarjeta: pagas en COP con Wompi (fee de plataforma 1%
          más costos de pago) y reclamas COPm on-chain.
        </p>
        <div className="flex flex-wrap gap-3">
          <CtaLink
            href={PRODUCT_URLS.copby}
            label="Abrir COP By"
            event="outbound_click"
            section="cambiar-usd"
            product="copby"
            className="inline-flex rounded-xl bg-brand px-5 py-3 font-bold text-white"
          >
            Abrir COP By
          </CtaLink>
          <CtaLink
            href="/carry-trade-peso-colombiano"
            label="Carry trade del peso"
            event="landing_cta_click"
            section="cambiar-usd"
            className="inline-flex rounded-xl px-5 py-3 font-bold text-brand"
          >
            Ver carry trade
          </CtaLink>
        </div>
        <Disclaimer>
          El FX on-chain no es una casa de cambio vigilada ni un contrato
          forward. El tipo de cambio puede moverse entre que cotizas y que
          ejecutas. No es un consejo de inversión.
        </Disclaimer>
        <RelatedLinks current={page.path} />
      </IntentLayout>
    </>
  );
}

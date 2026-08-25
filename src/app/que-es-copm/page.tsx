import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { Disclaimer, IntentLayout } from "@/components/IntentLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { CLUSTER_PAGES, PRODUCT_URLS } from "@/lib/site";

const page = CLUSTER_PAGES[0];

export const metadata: Metadata = pageMetadata(page);

export default function QueEsCopmPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(page)} />
      <IntentLayout
        eyebrow="Definición"
        title={page.title}
        lead="COPm es un peso digital que se mueve sobre la red Celo. Sirve para recargar, enviar y usar pesos en MiniPay y wallets compatibles, sin pasar necesariamente por Bitcoin."
      >
        <p>
          En el ecosistema DigitalCOP, COPm es la unidad que conecta los
          servicios: lo compras con pesos en Cards, lo recibes al cambiar USD
          en COP By, lo guardas en TuCop o MiniPay y, si quieres, lo dejas en
          Neeru.
        </p>
        <h2 className="text-xl font-extrabold tracking-tight">Para qué sirve</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>Recargar pesos digitales pagando en COP (Cards + Wompi).</li>
          <li>Cambiar dólares a pesos dentro de MiniPay (COP By).</li>
          <li>Enviar y recibir entre wallets Celo.</li>
        </ul>
        <h2 className="text-xl font-extrabold tracking-tight">Qué no es</h2>
        <p>
          COPm no es el peso en efectivo, no es un depósito en un banco
          colombiano y no es un CDT. Esta página no afirma que 1 COPm valga
          exactamente 1 peso colombiano ni nombra un emisor bancario: eso
          solo lo publicamos cuando el emisor lo documente.
        </p>
        <p>
          Como todo token, puede haber riesgo de liquidez, de contrato y de
          que el precio se separe del peso. Úsalo entendiendo que es crypto,
          no un saldo de cuenta de ahorros.
        </p>
        <CtaLink
          href={PRODUCT_URLS.cards}
          label="Comprar COPm con pesos"
          event="outbound_click"
          section="que-es-copm"
          product="cards"
          className="inline-flex rounded-xl bg-brand px-5 py-3 font-bold text-white"
        >
          Comprar COPm con pesos
        </CtaLink>
        <Disclaimer>
          DigitalCOP es un directorio. El token y cada app tienen operadores
          distintos. Esto no es asesoría financiera ni legal.
        </Disclaimer>
        <RelatedLinks current={page.path} />
      </IntentLayout>
    </>
  );
}

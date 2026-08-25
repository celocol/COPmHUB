import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { Disclaimer, IntentLayout } from "@/components/IntentLayout";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { CLUSTER_PAGES, PRODUCT_URLS } from "@/lib/site";

const page = CLUSTER_PAGES[4];

export const metadata: Metadata = pageMetadata(page);

export default function CryptoColombiaPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(page)} />
      <IntentLayout
        eyebrow="Crypto Colombia"
        title={page.title}
        lead="En Colombia mucha gente llega a crypto por Bitcoin o por un exchange. DigitalCOP cubre otra necesidad: usar pesos digitales (COPm) en Celo y MiniPay, recargando en COP."
      >
        <p>
          COPm no reemplaza a Bitcoin. Bitcoin es un activo global volátil.
          COPm está pensado para denominar valor en pesos colombianos dentro
          de wallets Celo. Sirve si quieres on-ramp local, FX a COP o
          movimientos cotidianos en MiniPay.
        </p>
        <h2 className="text-xl font-extrabold tracking-tight">
          Cómo entrar con pesos
        </h2>
        <p>
          Cards vende montos de COPm pagando en COP con Wompi. La plataforma
          cobra 1% más los costos de pago. Recibes un código y lo reclamas en
          la wallet Celo que elijas. No es un exchange de libros de órdenes.
        </p>
        <h2 className="text-xl font-extrabold tracking-tight">Legalidad</h2>
        <p>
          Los criptoactivos no son moneda de curso legal en Colombia. Usarlos
          no está, por sí solo, prohibido, pero hay reglas de reporte, de
          impuestos y de proveedores de servicios virtuales que cambian.
          DigitalCOP no es un VASP registrado que se presente como tal en
          esta página: es un hub que enlaza productos. Esto no es asesoría
          legal ni tributaria.
        </p>
        <div className="flex flex-wrap gap-3">
          <CtaLink
            href={PRODUCT_URLS.cards}
            label="Comprar COPm con pesos"
            event="outbound_click"
            section="crypto-colombia"
            product="cards"
            className="inline-flex rounded-xl bg-brand px-5 py-3 font-bold text-white"
          >
            Comprar COPm con pesos
          </CtaLink>
          <CtaLink
            href="/que-es-copm"
            label="Qué es COPm"
            event="landing_cta_click"
            section="crypto-colombia"
            className="inline-flex rounded-xl px-5 py-3 font-bold text-brand"
          >
            Qué es COPm
          </CtaLink>
        </div>
        <Disclaimer>
          Consulta la DIAN, la Superintendencia Financiera y un profesional
          antes de operar. Las normas de 2026 sobre reporte de criptoactivos
          pueden aplicarte aunque uses MiniPay.
        </Disclaimer>
        <RelatedLinks current={page.path} />
      </IntentLayout>
    </>
  );
}

import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { IntentLayout } from "@/components/IntentLayout";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { CLUSTER_PAGES, LEGAL_PAGES, PRODUCT_URLS } from "@/lib/site";

const page = LEGAL_PAGES[0];

export const metadata: Metadata = pageMetadata(page);

export default function NosotrosPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(page)} />
      <IntentLayout
        eyebrow="DigitalCOP"
        title="Quiénes somos"
        lead="DigitalCOP es el hub que reúne servicios de pesos digitales (COPm) sobre Celo para Colombia. No somos un banco."
      >
        <p>
          Operamos digitalcop.shop como directorio y punto de entrada: explicamos
          qué es COPm, cómo recargar en pesos, cómo cambiar USD y cómo
          explorar rendimiento, y enlazamos a las apps que ya están en
          producción.
        </p>
        <p>
          En este sitio no publicamos una razón social distinta de la marca
          DigitalCOP. Cada producto tiene su operador:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>TuCop Wallet — {PRODUCT_URLS.tucop}</li>
          <li>Cards (on-ramp) — {PRODUCT_URLS.cards}</li>
          <li>COP By (FX en MiniPay) — {PRODUCT_URLS.copby}</li>
          <li>Neeru (partner de rendimiento) — {PRODUCT_URLS.neeru}</li>
        </ul>
        <p>
          El canal de Telegram que aparece en el footer es la comunidad Celo
          Colombia, no una mesa de soporte de DigitalCOP. Si tienes un
          problema de pago, claim o yield, usa el soporte de esa app.
        </p>
        <h2 className="text-xl font-extrabold tracking-tight">Aprender</h2>
        <ul className="space-y-2">
          {CLUSTER_PAGES.map((item) => (
            <li key={item.path}>
              <CtaLink
                href={item.path}
                label={item.navLabel}
                event="nav_click"
                section="nosotros"
                className="font-semibold text-brand"
              >
                {item.navLabel} →
              </CtaLink>
            </li>
          ))}
        </ul>
      </IntentLayout>
    </>
  );
}

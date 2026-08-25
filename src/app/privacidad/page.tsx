import type { Metadata } from "next";
import { IntentLayout } from "@/components/IntentLayout";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { LEGAL_PAGES } from "@/lib/site";

const page = LEGAL_PAGES[2];

export const metadata: Metadata = pageMetadata(page);

export default function PrivacidadPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(page)} />
      <IntentLayout
        eyebrow="Legal"
        title="Privacidad"
        lead="El hub digitalcop.shop es un sitio informativo. No pedimos crear una cuenta en esta web."
      >
        <p>
          Esta página no tiene formulario de registro. Si activamos
          analítica (por ejemplo Google Analytics, cuando exista
          NEXT_PUBLIC_GA_ID), esa herramienta puede registrar páginas
          vistas, clics de CTA y profundidad de scroll. Los eventos se
          diseñaron sin incluir montos, correos ni wallets.
        </p>
        <p>
          Si haces clic a Cards, TuCop, COP By o Neeru, esas apps pueden
          recolectar datos según su propia política (correo de compra,
          wallet de claim, KYC de pago, etc.). Lee su aviso antes de pagar
          o conectar una wallet.
        </p>
        <p>
          No vendemos listas de visitantes del hub. No publicamos un DPO ni
          una razón social adicional en este documento porque no está
          definida en el copy del sitio: cuando exista, se actualizará aquí.
        </p>
        <p>
          Cookies: el sitio puede usar cookies técnicas de Next.js y, si se
          configura, cookies de analítica. Puedes bloquearlas en el
          navegador.
        </p>
      </IntentLayout>
    </>
  );
}

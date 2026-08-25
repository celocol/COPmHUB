import { CtaLink } from "@/components/CtaLink";
import { PRODUCT_URLS } from "@/lib/site";

export function MiniPayStrip() {
  return (
    <section className="px-6 pb-20 sm:pb-28">
      <div className="reveal relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[20px] border border-line bg-white px-6 py-8 sm:flex-row sm:items-center sm:px-10">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-wide text-brand">
            MiniPay
          </p>
          <h2 className="mt-2 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            ¿Ya estás en MiniPay? Cambia dólares a pesos
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            COP By convierte dólares a pesos digitales dentro de MiniPay. El
            tipo de cambio se muestra en la app al convertir.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <CtaLink
            href={PRODUCT_URLS.copby}
            label="Cambiar dólares a pesos"
            event="landing_cta_click"
            section="minipay"
            product="copby"
            className="lift inline-flex rounded-xl bg-navy px-5 py-3 font-bold text-white"
          >
            Cambiar dólares a pesos →
          </CtaLink>
          <CtaLink
            href="/cambiar-usd-a-cop"
            label="Cómo funciona COP By"
            event="landing_cta_click"
            section="minipay"
            product="copby"
            className="text-sm font-semibold text-muted hover:text-ink"
          >
            Cómo funciona
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

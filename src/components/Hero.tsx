import { CtaLink } from "@/components/CtaLink";
import { HeroLandscape } from "@/components/HeroLandscape";
import { PRODUCT_URLS } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <HeroLandscape />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-44 sm:pb-52 md:pb-56 lg:flex lg:min-h-[calc(100svh-4.5rem)] lg:items-start lg:px-6 lg:pt-16 lg:pb-8">
        <div className="reveal w-full max-w-xl">
          <span className="inline-block rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted">
            Pesos digitales · Colombia
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Hub de pesos digitales en Colombia.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Billetera, marketplace y rendimiento en pesos digitales. Elige la
            app y entra.
          </p>
          <div className="mt-8 flex max-w-md flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CtaLink
              href={PRODUCT_URLS.tucop}
              label="Abrir TuCop"
              event="landing_cta_click"
              section="hero"
              product="tucop"
              className="lift inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-3 font-bold text-white sm:w-auto"
            >
              Abrir TuCop
            </CtaLink>
            <CtaLink
              href={PRODUCT_URLS.cards}
              label="Comprar pesos"
              event="landing_cta_click"
              section="hero"
              product="cards"
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold text-ink transition-colors hover:text-brand sm:justify-start"
            >
              Comprar pesos →
            </CtaLink>
          </div>
          <p className="mt-6 text-xs font-medium tracking-wide text-muted">
            LIVE en Colombia
          </p>
        </div>
      </div>
    </section>
  );
}

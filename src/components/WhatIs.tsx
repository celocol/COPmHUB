import { CtaLink } from "@/components/CtaLink";

export function WhatIs() {
  return (
    <section id="que-es" className="border-t border-line px-6 py-20 sm:py-24">
      <div className="reveal relative z-10 mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Qué es DigitalCOP
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            DigitalCOP es el hub de apps para tus pesos digitales. Aquí eliges
            billetera, marketplace o rendimiento; no operamos esas apps.
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            No emitimos el peso colombiano ni prometemos paridad 1:1 en esta
            página. Cada servicio tiene su propia operación, fees y riesgos.
          </p>
          <CtaLink
            href="/que-es-copm"
            label="Aprende más sobre los pesos digitales"
            event="landing_cta_click"
            section="que-es"
            className="mt-6 inline-flex font-bold text-brand"
          >
            Aprende más →
          </CtaLink>
        </div>
        <dl className="grid flex-1 gap-3 sm:grid-cols-2">
          {[
            ["Qué", "Hub de apps de pesos digitales."],
            ["Dónde", "Colombia."],
            ["Para quién", "Quien quiere guardar, comprar o rendir pesos digitales."],
            ["Qué no es", "Banco, CDT, casa de bolsa ni asesoría."],
          ].map(([term, def]) => (
            <div
              key={term}
              className="rounded-[20px] border border-line bg-white p-5"
            >
              <dt className="text-xs font-bold uppercase tracking-wide text-brand">
                {term}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

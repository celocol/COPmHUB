export function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Comprar",
      body: "En el marketplace pagas en pesos con tarjeta, recibes un código y lo reclamas en tu billetera. Fee de plataforma 1% más costos de pago.",
    },
    {
      n: "2",
      title: "Guardar en TuCop",
      body: "Tus pesos digitales quedan en TuCop u otra billetera compatible. No es un saldo bancario.",
    },
    {
      n: "3",
      title: "Explorar rendimiento",
      body: "Neeru, un partner, permite poner tus pesos digitales a rendir. El rendimiento no está garantizado y el capital puede bajar.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="border-t border-line bg-celo-sand px-6 py-20 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Cómo funciona
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Tres puertas, en orden. DigitalCOP no custodia tu dinero: cada app
          opera por su cuenta.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.n}
              className="reveal rounded-[20px] border border-line bg-white p-6"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <span className="text-sm font-bold text-brand">{step.n}</span>
              <h3 className="mt-2 text-lg font-extrabold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">
          DigitalCOP no es un banco, un CDT ni un consejo de inversión. Los
          pesos digitales pueden perder valor frente al peso en efectivo.
          Revisa fees y riesgos en cada producto antes de mover dinero.
        </p>
      </div>
    </section>
  );
}

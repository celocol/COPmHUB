import { CtaLink } from "@/components/CtaLink";
import { CLUSTER_PAGES, LEGAL_PAGES, PRODUCT_URLS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-tint">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-[18px] w-[18px] rounded bg-brand" />
            <span className="font-bold text-white">DigitalCOP</span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-tint/80">
            Apps para guardar, comprar y hacer rendir pesos digitales en
            Colombia. Cada producto tiene su propio operador.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-white">
            Aprender
          </p>
          <ul className="mt-3 space-y-2 text-xs">
            {CLUSTER_PAGES.map((page) => (
              <li key={page.path}>
                <CtaLink
                  href={page.path}
                  label={page.navLabel}
                  event="nav_click"
                  section="footer"
                  className="transition-colors hover:text-white"
                >
                  {page.navLabel}
                </CtaLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-white">
            Apps
          </p>
          <ul className="mt-3 space-y-2 text-xs">
            <li>
              <CtaLink
                href={PRODUCT_URLS.tucop}
                label="TuCop"
                event="outbound_click"
                section="footer"
                product="tucop"
                className="hover:text-white"
              >
                TuCop (billetera)
              </CtaLink>
            </li>
            <li>
              <CtaLink
                href={PRODUCT_URLS.cards}
                label="Comprar pesos"
                event="outbound_click"
                section="footer"
                product="cards"
                className="hover:text-white"
              >
                Comprar pesos
              </CtaLink>
            </li>
            <li>
              <CtaLink
                href={PRODUCT_URLS.neeru}
                label="Neeru"
                event="outbound_click"
                section="footer"
                product="neeru"
                className="hover:text-white"
              >
                Neeru (partner)
              </CtaLink>
            </li>
            <li>
              <CtaLink
                href={PRODUCT_URLS.copby}
                label="COP By"
                event="outbound_click"
                section="footer"
                product="copby"
                className="hover:text-white"
              >
                COP By
              </CtaLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-white">
            Legal y contacto
          </p>
          <ul className="mt-3 space-y-2 text-xs">
            {LEGAL_PAGES.map((page) => (
              <li key={page.path}>
                <CtaLink
                  href={page.path}
                  label={page.title}
                  event="nav_click"
                  section="footer"
                  className="hover:text-white"
                >
                  {page.title}
                </CtaLink>
              </li>
            ))}
            <li>
              <CtaLink
                href={PRODUCT_URLS.communityTelegram}
                label="Comunidad Celo Colombia"
                event="outbound_click"
                section="footer"
                className="hover:text-white"
              >
                Comunidad Celo Colombia
              </CtaLink>
            </li>
          </ul>
          <p className="mt-4 text-[11px] leading-relaxed text-tint/70">
            Telegram es un canal de comunidad, no el soporte de DigitalCOP. Para
            un producto, usa el canal de esa app.
          </p>
        </div>
      </div>
    </footer>
  );
}

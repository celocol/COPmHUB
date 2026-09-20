import { CtaLink } from "@/components/CtaLink";
import {
  CLUSTER_PAGES,
  COMMUNITY,
  ECOSYSTEM_PAGE,
  LEGAL_PAGES,
  PRODUCT_URLS,
} from "@/lib/site";

const COMMUNITY_LINKS = [
  { href: COMMUNITY.web, label: "Web" },
  { href: COMMUNITY.twitter, label: "X" },
  { href: COMMUNITY.instagram, label: "Instagram" },
  { href: COMMUNITY.tiktok, label: "TikTok" },
  { href: COMMUNITY.telegram, label: "Telegram" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-tint">
      <div className="celo-strip h-2 w-full" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-label="Colombia"
              className="co-flag h-[18px] w-[18px] rounded ring-1 ring-white/20"
            />
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
            <li>
              <CtaLink
                href={ECOSYSTEM_PAGE.path}
                label={ECOSYSTEM_PAGE.title}
                event="nav_click"
                section="footer"
                className="hover:text-white"
              >
                {ECOSYSTEM_PAGE.title}
              </CtaLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-white">
            Legal
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
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-tint/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-celo-yellow"
            />
            <span>
              Mantenido por la comunidad{" "}
              <CtaLink
                href={COMMUNITY.web}
                label={COMMUNITY.name}
                event="outbound_click"
                section="footer"
                className="font-semibold text-white hover:underline"
              >
                {COMMUNITY.name}
              </CtaLink>
              .
            </span>
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {COMMUNITY_LINKS.map((link) => (
              <li key={link.href}>
                <CtaLink
                  href={link.href}
                  label={`Celo Colombia ${link.label}`}
                  event="outbound_click"
                  section="footer"
                  className="hover:text-white"
                >
                  {link.label}
                </CtaLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

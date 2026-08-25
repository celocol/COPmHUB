import { CtaLink } from "@/components/CtaLink";
import { NAV_LINKS, PRODUCT_URLS } from "@/lib/site";

export function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <CtaLink
          href="/"
          label="DigitalCOP"
          event="nav_click"
          section="nav"
          className="flex items-center gap-2 font-extrabold tracking-tight text-ink"
        >
          <span
            aria-label="Colombia"
            className="co-flag h-6 w-6 rounded-md ring-1 ring-black/5"
          />
          DigitalCOP
        </CtaLink>
        <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 text-sm font-medium text-muted">
          {NAV_LINKS.map((link) => (
            <CtaLink
              key={link.href}
              href={link.href}
              label={link.label}
              event="nav_click"
              section="nav"
              className="hidden transition-colors hover:text-ink sm:inline"
            >
              {link.label}
            </CtaLink>
          ))}
          <CtaLink
            href={PRODUCT_URLS.tucop}
            label="Abrir TuCop"
            event="landing_cta_click"
            section="nav"
            product="tucop"
            className="lift rounded-xl bg-brand px-4 py-2 text-sm font-bold text-white"
          >
            Abrir TuCop
          </CtaLink>
        </div>
      </div>
    </nav>
  );
}

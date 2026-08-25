import { CtaLink } from "@/components/CtaLink";
import { CLUSTER_PAGES } from "@/lib/site";

export function RelatedLinks({ current }: { current: string }) {
  const others = CLUSTER_PAGES.filter((page) => page.path !== current);

  return (
    <div className="border-t border-line pt-6">
      <p className="text-sm font-bold text-ink">Sigue leyendo</p>
      <ul className="mt-3 space-y-2">
        {others.map((page) => (
          <li key={page.path}>
            <CtaLink
              href={page.path}
              label={page.navLabel}
              event="nav_click"
              section="related"
              className="text-sm font-semibold text-brand"
            >
              {page.navLabel} →
            </CtaLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

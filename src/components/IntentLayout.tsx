import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export function IntentLayout({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <main>
      <Nav />
      <article className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-wide text-brand">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p>
          <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-ink">
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-2xl border border-line bg-bg p-4 text-sm text-muted">
      {children}
    </p>
  );
}

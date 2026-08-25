"use client";

import { useEffect } from "react";
import { destinationOf, track } from "@/lib/analytics";

const SCROLL_MARKS = [25, 50, 75, 100];

export function AnalyticsListener() {
  useEffect(() => {
    const seen = new Set<number>();

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-track]");
      if (!el) return;

      const name = el.getAttribute("data-track");
      if (!name) return;

      const href = el.getAttribute("href");
      track(name, {
        cta_label: el.getAttribute("data-label") ?? el.textContent?.trim() ?? "",
        section: el.getAttribute("data-section") ?? "",
        destination:
          el.getAttribute("data-destination") ?? destinationOf(href),
        product: el.getAttribute("data-product") ?? "",
        target_id: el.getAttribute("data-target") ?? "",
      });
    }

    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const percent = Math.round((window.scrollY / max) * 100);
      for (const mark of SCROLL_MARKS) {
        if (percent >= mark && !seen.has(mark)) {
          seen.add(mark);
          track("scroll_depth", { percent: mark });
        }
      }
    }

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}

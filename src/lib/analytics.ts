export type AnalyticsProps = {
  cta_label?: string;
  section?: string;
  destination?: string;
  product?: string;
  target_id?: string;
  percent?: number;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, props: AnalyticsProps = {}) {
  if (typeof window === "undefined") return;

  const payload = { event, ...props };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, props);
  }
}

export function destinationOf(href: string | null) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  return href;
}

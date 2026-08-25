import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Hub de servicios de pesos digitales (COPm) sobre Celo en Colombia.",
    parentOrganization: {
      "@type": "Organization",
      name: "Celo Colombia",
      url: "https://celocolombia.org",
      sameAs: [
        "https://x.com/Celo_Col",
        "https://www.instagram.com/celocolombia/",
        "https://www.tiktok.com/@celocol",
        "https://t.me/CeloCol",
      ],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "es-CO",
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "es-CO",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

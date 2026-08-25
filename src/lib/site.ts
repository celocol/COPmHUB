export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://digitalcop.shop";

export const SITE_NAME = "DigitalCOP";

export const DEFAULT_TITLE =
  "DigitalCOP | Apps de pesos digitales en Colombia";

export const DEFAULT_DESCRIPTION =
  "Hub de apps de pesos digitales en Colombia: billetera TuCop, marketplace para comprar pesos y rendimiento con Neeru.";

export const PRODUCT_URLS = {
  tucop: "https://tucop.xyz",
  cards: "https://cards.digitalcop.shop",
  copby: "https://copby.digitalcop.shop",
  neeru: "https://neerufinance.xyz",
} as const;

export const COMMUNITY = {
  name: "Celo Colombia",
  web: "https://celocolombia.org",
  twitter: "https://x.com/Celo_Col",
  instagram: "https://www.instagram.com/celocolombia/",
  telegram: "https://t.me/CeloCol",
} as const;

export const NAV_LINKS = [
  { href: "/#servicios", label: "Apps", event: "nav_click" },
  { href: "/#como-funciona", label: "Cómo funciona", event: "nav_click" },
  { href: "/#faq", label: "FAQ", event: "nav_click" },
] as const;

export const CLUSTER_PAGES = [
  {
    path: "/que-es-copm",
    navLabel: "Qué son los pesos digitales",
    title: "Qué es COPm, el peso digital sobre Celo",
    description:
      "COPm es un peso digital que se mueve en Celo y MiniPay. Qué es, para qué sirve y qué no es.",
  },
  {
    path: "/cambiar-usd-a-cop",
    navLabel: "Cambiar USD a COP",
    title: "Cambia USD a pesos (COP) desde MiniPay",
    description:
      "Convierte dólares a pesos digitales (COPm) con COP By, directo en MiniPay.",
  },
  {
    path: "/invertir-pesos-digitales",
    navLabel: "Invertir en pesos digitales",
    title: "Invierte en pesos digitales: rendimiento en COPm",
    description:
      "Explora rendimiento en pesos digitales (COPm) con Neeru. No es un CDT ni un consejo de inversión.",
  },
  {
    path: "/carry-trade-peso-colombiano",
    navLabel: "Carry trade COP",
    title: "Carry trade COP: de dólares a rendimiento en pesos",
    description:
      "Cómo armar un carry en peso colombiano con crypto: USD a COPm y rendimiento en pesos. Riesgos incluidos.",
  },
  {
    path: "/crypto-colombia",
    navLabel: "Pesos digitales en Colombia",
    title: "Crypto en Colombia con pesos, no solo con Bitcoin",
    description:
      "Usa crypto en Colombia con pesos digitales (COPm): recarga en COP, MiniPay y Celo.",
  },
] as const;

export const LEGAL_PAGES = [
  {
    path: "/nosotros",
    title: "Quiénes somos",
    description:
      "DigitalCOP es el hub de servicios de pesos digitales (COPm) sobre Celo en Colombia.",
  },
  {
    path: "/terminos",
    title: "Términos",
    description:
      "Términos de uso del hub DigitalCOP. Cada producto tiene sus propias condiciones.",
  },
  {
    path: "/privacidad",
    title: "Privacidad",
    description:
      "Cómo trata el hub DigitalCOP la información cuando visitas digitalcop.shop.",
  },
] as const;

export const INDEXABLE_PATHS = [
  "/",
  ...CLUSTER_PAGES.map((page) => page.path),
  ...LEGAL_PAGES.map((page) => page.path),
] as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return new URL(path, SITE_URL).toString();
}

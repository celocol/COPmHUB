"""One-off: applies the mechanical edits of this branch. Removed before merge."""


def sub(path, old, new):
    s = open(path).read()
    assert old in s, (path, old[:40])
    open(path, "w").write(s.replace(old, new, 1))


# --- split OfframpFlow into types, ui primitives and the flow -------------
p = "src/components/offramp/OfframpFlow.tsx"
L = open(p).read().split("\n")


def seg(a, b):
    return L[a - 1 : b]


types = seg(17, 53)
api = seg(55, 61)
steps = seg(63, 81)
classes = seg(83, 90)
ui = seg(92, 164)
rest = seg(166, len(L))


def export(lines, names):
    out = []
    for line in lines:
        for n in names:
            if line.startswith(n):
                line = "export " + line
        out.append(line)
    return out


open("src/components/offramp/types.ts", "w").write(
    "\n".join(export(types, ["type Destination", "type Offramp", "type State", "type Status"])) + "\n"
)

ui_file = [
    'import type { ReactNode } from "react";',
    'import type { State } from "@/components/offramp/types";',
    "",
]
ui_file += export(steps, ["function stepIndex"]) + [""]
ui_file += export(classes, ["const "]) + [""]
ui_file += export(ui, ["function Stepper", "function StatusLine", "function Field"])
open("src/components/offramp/ui.tsx", "w").write("\n".join(ui_file) + "\n")

head = [
    '"use client";',
    "",
    'import { useCallback, useEffect, useRef, useState } from "react";',
    'import { track } from "@/lib/analytics";',
    "import {",
    "  DOCUMENT_TYPES,",
    "  GENERIC_ERROR,",
    "  SESSION_EXPIRED_CODE,",
    "  offrampErrorMessage,",
    '} from "@/lib/offramp/messages";',
    'import { markOfframpPopupSeen } from "@/components/offramp/popupStorage";',
    "import {",
    "  readSessionToken,",
    "  writeSessionToken,",
    '} from "@/components/offramp/session";',
    'import type { Status } from "@/components/offramp/types";',
    "import {",
    "  Field,",
    "  StatusLine,",
    "  Stepper,",
    "  headingClass,",
    "  inputClass,",
    "  primaryClass,",
    "  secondaryClass,",
    "  stepIndex,",
    '} from "@/components/offramp/ui";',
    "",
]
open(p, "w").write("\n".join(head + api + [""] + rest))

# --- FAQ ------------------------------------------------------------------
sub(
    "src/lib/faq.ts",
    "export const HOME_FAQ",
    '''/** Shown on the home page only while the off-ramp is enabled. */
export const OFFRAMP_FAQ: FaqItem = {
  question: "¿Puedo retirar a pesos en mi cuenta bancaria?",
  answer:
    "Sí, con el off-ramp a llaves Bre-B que opera TuCOP. Verificas tu identidad una vez, registras una llave Bre-B a tu nombre y recibes una dirección de liquidación propia. Este hub solo aloja el formulario: no custodia fondos ni guarda tus datos. La comisión y el mínimo por envío se muestran al activar.",
};

export const HOME_FAQ''',
)
sub("src/components/Faq.tsx", 'import { HOME_FAQ } from "@/lib/faq";', 'import type { FaqItem } from "@/lib/faq";')
sub("src/components/Faq.tsx", "export function Faq() {", "export function Faq({ items }: { items: FaqItem[] }) {")
sub("src/components/Faq.tsx", "{HOME_FAQ.map(", "{items.map(")
sub("src/app/page.tsx", 'import { HOME_FAQ } from "@/lib/faq";', 'import { HOME_FAQ, OFFRAMP_FAQ } from "@/lib/faq";')
sub(
    "src/app/page.tsx",
    """export default function HomePage() {
  return (""",
    """export default function HomePage() {
  const offramp = isOfframpEnabled();
  const faq = offramp ? [...HOME_FAQ, OFFRAMP_FAQ] : HOME_FAQ;
  return (""",
)
sub("src/app/page.tsx", "faqJsonLd(HOME_FAQ)", "faqJsonLd(faq)")
sub("src/app/page.tsx", "<Faq />", "<Faq items={faq} />")
sub("src/app/page.tsx", "{isOfframpEnabled() ? <OfframpPopup /> : null}", "{offramp ? <OfframpPopup /> : null}")

# --- terms ----------------------------------------------------------------
t = "src/app/terminos/page.tsx"
sub(
    t,
    'import { pageMetadata, webPageJsonLd } from "@/lib/seo";',
    'import { isOfframpEnabled, offrampConfig } from "@/lib/offramp/config";\nimport { pageMetadata, webPageJsonLd } from "@/lib/seo";',
)
sub(
    t,
    """export default function TerminosPage() {
  return (""",
    """export default function TerminosPage() {
  const offramp = isOfframpEnabled() ? offrampConfig() : null;
  return (""",
)
sub(
    t,
    """        <p>
          El contenido sobre FX,""",
    """        {offramp ? (
          <p>
            El off-ramp a llaves Bre-B lo opera {offramp.dataController}, no
            DigitalCOP. Este sitio solo aloja el formulario: la verificación
            de identidad y los pagos los procesa Bridge, y aplican los
            términos de ambos. La dirección de liquidación solo acepta USDC
            en la red Celo; lo que envíes en otro token o por otra red se
            puede perder.
          </p>
        ) : null}
        <p>
          El contenido sobre FX,""",
)

# --- privacy: the service is active now -----------------------------------
v = "src/app/privacidad/page.tsx"
sub(
    v,
    """        tuya, prestarte el servicio de off-ramp cuando se active y avisarte
        por correo de su activación.""",
    """        tuya, prestarte el servicio de off-ramp y enviarte por correo tu
        dirección de liquidación.""",
)
sub(v, "Preinscripción al off-ramp a llaves Bre-B", "Off-ramp a llaves Bre-B")
sub(
    v,
    """        La preinscripción al off-ramp es la única parte de este sitio que
        pide datos personales.""",
    """        El registro al off-ramp es la única parte de este sitio que pide
        datos personales.""",
)
sub(
    v,
    "Solo pedimos datos personales si te preinscribes al off-ramp a llaves Bre-B.",
    "Solo pedimos datos personales si te registras al off-ramp a llaves Bre-B.",
)
sub(
    v,
    '"Fuera de la preinscripción al off-ramp, este sitio no tiene formulario de registro."',
    '"Fuera del off-ramp, este sitio no tiene formulario de registro."',
)

# --- llms.txt -------------------------------------------------------------
m = "src/app/llms.txt/route.ts"
sub(
    m,
    """import {
  CLUSTER_PAGES,""",
    """import { isOfframpEnabled, OFFRAMP_PATH } from "@/lib/offramp/config";
import {
  CLUSTER_PAGES,""",
)
sub(
    m,
    """  const body = `""",
    """  const offramp = isOfframpEnabled()
    ? `- Off-ramp to Bre-B keys (operated by TuCOP, KYC and payouts by Bridge; the hub only hosts the form): ${SITE_URL}${OFFRAMP_PATH}\\n`
    : "";

  const body = `""",
)
sub(
    m,
    """- Neeru (yield partner): https://neerufinance.xyz
""",
    """- Neeru (yield partner): https://neerufinance.xyz
${offramp}""",
)

# --- README and .env.example ----------------------------------------------
r = "README.md"
sub(
    r,
    "    offramp/              Bre-B off-ramp pre-registration form (feature-flagged)",
    "    offramp/              Bre-B off-ramp registration and activation (feature-flagged)",
)
sub(r, "## Bre-B off-ramp pre-registration (optional, off by default)", "## Bre-B off-ramp (feature-flagged)")
sub(
    r,
    "complete KYC and terms on Bridge's hosted pages, and register their own Bre-B key. It only collects the pre-registration; withdrawals are not built.",
    "complete KYC and terms on Bridge's hosted pages, and register their own Bre-B key. Once the key is confirmed the page shows the person's liquidation address, which only accepts USDC on Celo and pays out in pesos to that key.",
)
sub(
    r,
    "src/app/offramp/          the pre-registration page\nsrc/components/offramp/   form, promo card, one-time pop-up",
    "src/app/offramp/          the off-ramp page\nsrc/components/offramp/   flow, UI primitives, promo card, one-time pop-up",
)
sub(
    r,
    "The hub origin must be listed in TuCOPRamp's `CORS_ORIGINS`.",
    "The hub origin must be listed in TuCOPRamp's `CORS_ORIGINS`. Only the apex origin is allowed, so `next.config.ts` redirects `www` to it.\n\nThe flag is off in a fresh checkout and on in production.",
)
sub(
    r,
    "## Deploy",
    """## Security headers

`next.config.ts` sets a Content-Security-Policy, HSTS, `X-Frame-Options: DENY` and related headers on every route. `connect-src` allows the `OFFRAMP_API_URL` origin and Google Analytics. If the site starts calling a new origin from the browser, add it there.

## CI

`.github/workflows/ci.yml` runs lint, tests and the production build on every pull request and on pushes to `main`. `main` is protected: changes land through a pull request with a green `ci` check.

## Deploy""",
)
sub(
    r,
    "Set `NEXT_PUBLIC_SITE_URL` in the environment for correct canonical URLs, sitemap, and OG tags. Defaults to `https://digitalcop.shop`.",
    "Set `NEXT_PUBLIC_SITE_URL` in the environment for correct canonical URLs, sitemap, and OG tags. Defaults to `https://digitalcop.shop`. Set `NEXT_PUBLIC_GA_ID` to turn on Google Analytics; without it the tracked events go nowhere.",
)
e = ".env.example"
sub(
    e,
    "NEXT_PUBLIC_SITE_URL=https://digitalcop.shop\n",
    "NEXT_PUBLIC_SITE_URL=https://digitalcop.shop\n\n# Google Analytics measurement ID (G-XXXXXXXXXX). Leave empty to keep\n# analytics off: events are still pushed to dataLayer but sent nowhere.\nNEXT_PUBLIC_GA_ID=\n",
)
sub(e, "# --- Bre-B off-ramp pre-registration (optional) ---", "# --- Bre-B off-ramp (optional) -------------------")

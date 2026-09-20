# Contributing to COPmHUB

Thank you for helping grow the DigitalCOP hub (`digitalcop.shop`).

This repo is the public landing for pesos digitales (COPm) on Celo in Colombia. Community projects that **use COPm** can be listed on the `/ecosystem` page by opening a pull request.

## What can be listed

Your product must:

1. Be **live and publicly reachable** (HTTPS URL returns a working product, not only a waitlist).
2. **Use COPm** on Celo in at least one clear way: accept, pay, earn, bridge, or hold in a wallet.
3. Provide **verifiable evidence** (docs, explorer page, or public repo) that shows COPm usage.
4. Follow the copy rules below (no invented peg or APY).

## What will be rejected

- Vaporware / "coming soon" only
- Mentions of Celo or Colombia without actual COPm integration
- Phishing, impersonation of DigitalCOP / TuCop / Cards / COP By / Neeru
- Truncated EVM addresses or incomplete evidence links
- Self-assigned `partner: true` (see Partner badge)

## Partner badge (invitation only)

The `partner` field and the PARTNER pill are **maintainer-invitation only**.

- Contributors: leave `partner` unset.
- Maintainers: set `partner: true` only after an explicit invitation.

Do not request Partner status in a listing PR. Ask maintainers separately if invited.

## How to add a project

1. Fork [celocol/COPmHUB](https://github.com/celocol/COPmHUB) and create a branch:
   `ecosystem/<your-id>`
2. Add one JSON file:
   `content/ecosystem/<your-id>.json`
   - Filename must equal `id` + `.json`
   - `id` must be kebab-case (`my-app`, not `My_App`)
3. Open a pull request and choose the **Ecosystem project listing** template.
4. Wait for review. Maintainers verify COPm evidence before merge.

### Schema

```json
{
  "id": "my-app",
  "name": "My App",
  "description": "Spanish copy for the landing (max ~220 chars). Explain what users do with COPm.",
  "href": "https://my-app.example",
  "cta": "Abrir My App",
  "tag": "Payments",
  "status": "live",
  "copmUsage": {
    "chains": ["celo"],
    "modes": ["accept", "pay"],
    "evidenceUrl": "https://my-app.example/docs/copm",
    "tokenAddress": "0xFEF5A1A2b3754A2F53161EaaAcb3EB889F004d4a"
  },
  "contact": {
    "github": "https://github.com/org/my-app",
    "telegramOrX": "https://x.com/myapp"
  }
}
```

### Field rules

| Field | Rules |
| --- | --- |
| `id` | kebab-case; unique; matches filename |
| `name` | Public product name |
| `description` | **Spanish** (matches the rest of the hub). No numeric APY. No "1:1" peg claim |
| `href` | HTTPS product URL |
| `cta` | Verb phrase in Spanish (e.g. `Abrir My App`), never a raw URL |
| `tag` | One of: `DeFi`, `Payments`, `Wallet`, `Commerce`, `FX`, `Infrastructure`, `Other` |
| `status` | `live` to appear on `/ecosystem`; `soon` is ignored by the public grid |
| `copmUsage.chains` | Must include `celo` |
| `copmUsage.modes` | One or more of: `accept`, `pay`, `earn`, `bridge`, `wallet` |
| `copmUsage.evidenceUrl` | HTTPS docs, explorer, or repo proving COPm use |
| `copmUsage.tokenAddress` | Optional. Full `0x` + 40 hex chars. **Never truncate** |
| `contact.github` | HTTPS GitHub URL for the project or org |
| `partner` | **Do not set.** Invitation only |

### Evidence tips

Acceptable evidence:

- Docs page that states how the app moves or holds COPm
- Block explorer link for the token or integration contract (full address)
- Public repo README with integration details

Not enough: a logo, a tweet, or "we plan to add COPm".

## Updating an existing listing

Same flow: edit `content/ecosystem/<id>.json` and open a PR with the ecosystem template (select "Update existing project").

## Local checks

```bash
npm install
npm test
npm run lint
npm run build
```

`npm test` validates every JSON file under `content/ecosystem/`.

## Core apps vs ecosystem

The four core doors (TuCop, Cards, COP By, Neeru) live in `src/lib/services.ts` and are maintained by the hub operators. Community listings go only under `content/ecosystem/`.

## Questions

Open a GitHub issue or reach the Celo Colombia community channels linked from the site footer. Product support for a listed app stays with that app's operator.

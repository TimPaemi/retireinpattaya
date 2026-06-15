# Retire in Pattaya — Phase 0 Blueprint

*The plan, the decisions, and why. Written for a smart non-coder. Last updated: 14 June 2026.*

---

## 1. The four decisions you locked

| Decision | Choice | What it means |
|---|---|---|
| **Brand name** | **Retire in Pattaya** | Clear, trustworthy, strong exact-match SEO for the exact phrase people search. |
| **Domain** | *Recommended:* `retireinpattaya.com` | Register it (see §9). Until you do, the site builds and previews on a placeholder — you change **one line** later. |
| **Tech** | **Astro** (static) | The best fit for a content + SEO + speed site you maintain alone. Justified below. |
| **Look & feel** | **Calm coastal** | Soft blues, warm sand, teal. Mature, premium, distances us from the neon stereotype. |

### Backup domains (in case the first is taken)
`retiringinpattaya.com` · `retireinpattaya.co` · `pattayaretirement.com` · `theretireinpattaya.com`.
Pick a **.com** if at all possible — your audience trusts it most. Avoid hyphens and odd spellings.

---

## 2. Why Astro (the honest trade-off)

You asked me to choose and commit. **Astro**, because:

- **You add a guide by writing a Markdown file** — no code. Drop a `.md` file in a folder, fill in the fields, done. That's the whole point for a one-person operation.
- **It ships static HTML.** No live AI calls, no server, no database, no API keys, no running bill. Exactly your core architectural principle. Heavy AI work happens when *you* generate content; the site just serves finished files.
- **Fastest possible pages + clean SEO.** Astro sends almost no JavaScript by default. Google's health/money/legal (YMYL) bar rewards fast, well-structured pages.
- **"Islands" for the calculators.** The interactive tools are dropped into otherwise-static pages, so they're fast and self-contained.
- **Schema validation built in.** Your content fields are *enforced* — a guide literally won't publish without a "last reviewed" date and an author. That discipline is what keeps a trust brand trustworthy.

**The trade-off vs the alternatives:** Next.js is more mainstream but heavier and more fiddly for a solo non-coder (more moving parts, more JavaScript). Eleventy/Hugo are simpler still but make the interactive tools more hand-wired. Astro sits in the sweet spot: content-first like Hugo, component power like Next, friendlier than both. **Committed.**

**Hosting:** Cloudflare Pages (free, fast, global, no keys). Netlify or Vercel are equally fine — all three auto-deploy when you save to GitHub. Walkthrough in `README.md`.

---

## 3. Site architecture (pillar-and-cluster)

The whole site is **hubs and spokes**, which is how authority sites rank and how readers navigate:

```
Homepage
├── Start Here                         (curated 5-step path for newcomers)
├── 10 Pillar Hubs   /<pillar>/        (overview + links to its guides)
│     └── Cluster guides /<pillar>/<guide>/   (the deep, sourced articles)
├── Tools            /tools/           (interactive calculators)
├── Trust pages      /about/ /editorial-standards/ /methodology/ /disclaimer/ ...
└── (later) FAQ hub, Glossary, Author pages
```

Internal linking flows **guide → hub → related guides → tool**, concentrating authority and guiding the reader toward the lead-generating tools.

### The 10 pillars (URL = `/slug/`)
1. `healthcare` — Healthcare & Insurance *(highest priority — the money-maker and the deciding factor)*
2. `visas` — Visas & Immigration
3. `money` — Money, Pensions & Tax
4. `cost-of-living` — Cost of Living
5. `housing` — Housing
6. `daily-life` — Daily Life & Community
7. `safety-scams` — Safety & Scams *(protective hub)*
8. `getting-settled` — Getting Settled
9. `legal-end-of-life` — Legal & End-of-Life
10. `reality-checks` — Honest Reality Checks

---

## 4. Full sitemap / URL plan

| URL | Type | Status |
|---|---|---|
| `/` | Homepage | ✅ built |
| `/start-here/` | Curated path | ✅ built |
| `/<pillar>/` ×10 | Pillar hubs | ✅ built (all 10) |
| `/visas/thailand-retirement-visa-options/` | Example deep guide | ✅ built |
| `/<pillar>/<guide>/` | Cluster guides | ▶ add via Markdown |
| `/tools/` | Tools hub | ✅ built |
| `/tools/can-i-afford-to-retire-in-pattaya/` | Flagship calculator | ✅ built |
| `/embed/affordability/` | Embeddable calculator | ✅ built |
| `/about/` `/editorial-standards/` `/methodology/` `/disclaimer/` `/privacy/` `/contact/` | Trust + legal | ✅ built |
| `/sitemap-index.xml`, `/robots.txt` | SEO plumbing | ✅ auto |
| `/faq/`, `/glossary/`, `/authors/<name>/` | Hubs + bios | ◻ next phase |
| 4 more tools | Calculators | ◻ next phase |

**URL rules:** lowercase, hyphenated, trailing slash, nested under pillar. Never change a published URL (set up a redirect instead) — it costs you SEO.

---

## 5. The content model (your editable "database")

Defined in `src/content/config.ts`. Three collections; you only ever edit Markdown files:

- **guides** — the articles. Required fields enforce trust: `title`, `description`, `pillar`, `author`, `publishDate`, **`lastReviewed`**, plus `sources[]`, optional `reviewer`, `faq[]`, `verifyPending`, `draft` (defaults to **true** so nothing publishes by accident).
- **pillars** — the hub pages: `title`, `description`, `intro`, `lastReviewed`.
- **authors** — real credibility (E-E-A-T): `name`, `role`, `credentials[]`, `sameAs[]`.

> **The guardrail in action:** if you forget the `lastReviewed` date or the author, the build *fails with a clear message*. On a money/health/legal site, that's a feature. The example guide also shows the `⟨VERIFY⟩` convention — every visa figure is a marked placeholder, never an invented number.

---

## 6. Tool logic (client-side, no keys)

All five tools run **entirely in the browser**. Numbers never leave the reader's device — a genuine privacy promise you can advertise.

**Flagship — "Can I afford to retire in Pattaya?" (built):**
- *Inputs:* currency, monthly income, savings, editable FX rate, lifestyle tier (lean/comfortable/premium or custom), age band → insurance estimate.
- *Maths:* `monthly surplus = income − (living costs + insurance)`. If positive → savings are a buffer (and grow). If negative → savings runway in years/months.
- *Output:* plain-English verdict, a breakdown table, and a 25-year savings-projection chart (drawn in SVG, no chart library).
- *Honesty built in:* explicitly ignores inflation/investment growth and says so; benchmarks are clearly-flagged placeholders in `src/data/benchmarks.ts`.
- *Shareable URL* (encodes inputs) + *embeddable* version for other sites.

**Next four** (built on the same shared pattern): visa eligibility checker, health-insurance estimator (the big earner — feeds insurance leads), cost-of-living budget builder, pension/FX tool.

---

## 7. Design system (calm coastal)

One file controls the whole look: `src/styles/tokens.css`.
- **Colour:** deep sea blue (`#0e4d64`), teal accents, warm sand, clay CTA — calm and credible.
- **Type:** serif headings (authority/warmth) + system sans body (max legibility). No web-font downloads = fast.
- **Accessibility as a feature** (audience skews 50+): 19px base text, generous spacing, WCAG-AA+ contrast, visible focus rings, big tap targets, "skip to content", reduced-motion support.
- Reusable components: cards, callouts, comparison tables, the topic-aware disclaimer, sourced-references list, "last reviewed" byline.

---

## 8. Trust & monetization (why this niche is special)

**E-E-A-T system (built):** About, Editorial Standards, How-We-Research (Methodology), full Disclaimer, visible "last reviewed" dates, cited sources, schema.org on every page, topic-tailored disclaimers (financial/medical/visa/legal).

**Monetization (wire up in Phase 4):** health & travel insurance leads (primary — integrates with the insurance estimator), visa/legal services, Wise (money transfer), real-estate leads, funeral/repatriation, pet relocation; later display ads. Lead magnets (Honest Starter Kit PDF, checklists) → email list → pre-written nurture sequence. **No predatory advertisers, ever** — it's both ethics and brand moat.

---

## 9. What to do next (your move)

1. **Register the domain** (`retireinpattaya.com` or a backup), then change the one line in `astro.config.mjs`.
2. **Preview the site locally** — copy-paste steps in `README.md`.
3. **Start generating content** with the prompt library in `docs/CONTENT-PROMPT-LIBRARY.md`.
4. Tell me **"continue"** and I'll go deeper: the FAQ hub, glossary, author pages, the next tools, the full Visa pillar batch, and the lead-capture + email setup.

---

## 10. Folder map

```
retire-in-pattaya/
├── astro.config.mjs        ← the ONE line for your domain lives here
├── package.json
├── README.md               ← preview + deploy + "how to add a page"
├── docs/
│   ├── 00-BLUEPRINT.md            (this file)
│   └── CONTENT-PROMPT-LIBRARY.md  (your AI content factory)
├── public/                 ← favicon, robots.txt, images go here
└── src/
    ├── site.config.ts      ← brand, nav, pillars (edit me, not code)
    ├── data/benchmarks.ts  ← the calculator's numbers (verify before publishing)
    ├── styles/             ← tokens.css (theme) + base.css
    ├── content/            ← YOUR CONTENT: guides/, pillars/, authors/ (Markdown)
    ├── components/         ← header, footer, calculator, trust components
    ├── layouts/            ← page templates
    └── pages/              ← routes (most pages come from content/ automatically)
```

---

## Progress log — build expanded (14 June 2026)

The site now builds to **42 pages**, all green. Beyond the original foundation:

**All 5 interactive tools are live** (client-side, private, no keys):
- `/tools/can-i-afford-to-retire-in-pattaya/` — flagship affordability calculator (+ chart, shareable link, embed)
- `/tools/health-insurance-cost-estimator/` — premium ranges by age/cover + lead capture *(primary earner)*
- `/tools/cost-of-living-budget-builder/` — itemised budget, presets, shareable link
- `/tools/retirement-visa-eligibility-checker/` — route recommendations + checklist + official links
- `/tools/pension-fx-tool/` — exchange-rate sensitivity table

**12 deep guides published** across Visas (5), Healthcare (3), Money (2), Safety (1) and Reality Checks (1), every volatile figure gated behind `⟨VERIFY⟩`.

**New content types & infrastructure:** FAQ hub (`/faq/`), Glossary (`/glossary/`), Author bio pages with Person schema (`/authors/…/`), and a richer reading experience on every article — sticky table of contents, reading time, related guides, author card, newsletter CTA, and revenue placement (insurance lead) on healthcare/money pages.

**Lead-gen plumbing (no backend):** newsletter signup + insurance lead components wired to `FORMS.*` in `site.config.ts`; affiliate links via `AFFILIATES.*`; lead-magnet definitions ready.

**Still ahead (say "continue"):** remaining pillar content batches (housing, cost-of-living, daily-life, getting-settled, legal/end-of-life), the lead-magnet PDFs themselves, an email nurture sequence, privacy-friendly analytics, real imagery, and a full pre-launch YMYL + accessibility audit.

---

## Progress log — deep build #2 (14 June 2026)

Site now builds to **61 pages**, audit **100% clean** (0 issues, 0 broken links across 2,205 checked).

- **29 deep guides** across all ten pillars (was 12) — every volatile figure gated behind `⟨VERIFY⟩`.
- **4 real branded lead-magnet PDFs** in `/public/downloads/` (starter kit, insurance & visa checklists, budget worksheet) + a `/resources/` page.
- **Full 7-email nurture sequence** written in brand voice (`docs/EMAIL-NURTURE-SEQUENCE.md`).
- **Branded visual system** — dignified calm-coastal SVG art per pillar + homepage, and a generated 1200×630 social share image (no clichéd or seedy imagery).
- **404 page, RSS feed (29 items), privacy-friendly analytics** hook (off until you set it).
- **Automated pre-launch audit** (`npm run audit`) checking titles, meta, h1, lang, alt, canonical, schema, and every internal link — plus a manual YMYL/accessibility/legal checklist in `docs/LAUNCH-AUDIT.md`.

**Genuinely remaining before a public launch:** replace all `⟨VERIFY⟩` figures with sourced values, swap in real named authors, wire your ESP + affiliate URLs, and run the manual checklist. The machine is built; it now needs your real-world facts and accounts.

---

## Progress log — deep build #3 (14 June 2026)

Site builds to **62 pages**, audit **clean**, and now genuinely feature-rich:

- **Client-side search** — a build-time JSON index over 49 guides/hubs/tools/pages, with a live fuzzy `/search/` page (highlighted matches, scoring, URL-synced) and a header search entry. Zero backend, zero dependencies.
- **Per-guide generative hero art** — each guide gets a distinct, deterministic calm-coastal SVG banner (varied by slug, tinted by pillar).
- **Sourced "Key Facts" boxes** — structured, scannable fact panels rendered from front-matter, with inline `verify` flags and source links. Demonstrated on the flagship visa, extension, insurance and frozen-pension guides.
- **HowTo structured data** — checklist guides emit `HowTo` schema from front-matter steps (227 valid JSON-LD blocks site-wide, 0 invalid).
- **Audit v2** — now also validates **every JSON-LD block** and reports **performance** (shipped JS/CSS, page weights).
- **Production hardening** — Cloudflare `_headers` (CSP, nosniff, referrer/permissions policy, long-cache for assets; the embed stays frameable), `_redirects` (friendly short links + a moved-URL template), a **print stylesheet**, and **prefers-contrast** support.

**Measured performance:** 0 KB shared JavaScript, ~24 KB total CSS, average page ~19 KB. That's about as fast as a content site can be — exactly the YMYL/Core-Web-Vitals profile Google rewards.

---

## Progress log — deep build #4 (14 June 2026)

Site builds to **64 pages**, audit **clean** (0 issues, 0 broken links across 2,469, 234 valid JSON-LD blocks).

- **MDX upgrade** — guides can now be `.md` (simple) *or* `.mdx` (rich), in the same collection. MDX guides embed components inline: `<Callout>`, `<CompareTable>`, `<ContentCTA>`. Shipped a full demo: *Thailand vs Portugal for Retirement*.
- **Per-page social images** — a build script generates a unique, branded 1200×630 image for **every guide and pillar** (40 images), wired into each page's `<head>` so every share looks designed.
- **Destination comparison tool** (`/compare/`) — sortable, filterable side-by-side of Pattaya vs other Thai cities and countries across eight factors plus an honest downside. Client-side, accessible (keyboard-sortable headers), data-driven.
- **Two new reusable content components** (`CompareTable`, `ContentCTA`) for authoring.

The performance profile holds: **0 KB shared JS, ~24 KB CSS, ~20 KB average page** even with the new tools.

### How to author a rich guide (MDX)
Create `src/content/guides/your-slug.mdx`, add the normal front-matter, then at the top of the body import what you need and use it inline:
```mdx
import Callout from '../../components/Callout.astro';
import CompareTable from '../../components/CompareTable.astro';

<Callout variant="warn" title="Rules change">Always verify current figures.</Callout>
<CompareTable headers={["A","B"]} rows={[["x","y"]]} />
```
Plain `.md` still works exactly as before for everyday guides.

---

## Progress log — deep build #5 (14 June 2026)

Site builds to **68 pages**, audit **clean** including new accessibility depth.

- **Automatic glossary cross-linking** — a custom remark plugin links the first mention of each glossary term in any guide to its definition (e.g. *TM30*, *seasoning*, *Non-Immigrant O*). Zero manual effort; works in `.md` and `.mdx`.
- **"In short" key-takeaways boxes** — scannable TL;DR at the top of a guide, from front-matter; added to six flagship guides.
- **Advanced structured data** — `WebSite` `SearchAction` (enables Google's sitelinks search box), `ItemList` on every pillar hub, and `Speakable` on articles. 261 valid JSON-LD blocks site-wide, 0 invalid.
- **Sixth interactive tool** — "Which Pattaya area suits you?" — a four-question matcher that ranks Jomtien, Pratumnak, Bang Saray, Naklua and Central with reasons.
- **Three new guides** — bringing pets, shipping belongings, and Pattaya weather / best time to move (now 33 guides).
- **Audit v3** — added heading-order, duplicate-id and form-label checks. It immediately caught a skipped heading level on five pages and a genuinely unlabeled input in the calculator (two controls were sharing one `<label>`). All fixed; audit clean.

Performance unchanged: **0 KB shared JS, ~25 KB CSS, ~20 KB average page**.

---

## Progress log — deep build #6 (14 June 2026)

Reader-experience and accessibility round (audit still **clean**, 68 pages):

- **Glossary hover tooltips** — the auto-linked terms now show their definition in an accessible tooltip on hover/focus (backed by a `/glossary-index.json` endpoint), with the link still working without JavaScript.
- **Reading-progress bar + back-to-top** on every guide, for long-read comfort.
- **One-click "Print / Save as PDF"** on guides, using the dedicated print stylesheet — handy for an audience that likes paper.
- **Reader text-size control** (A / A+ / A++) in the header, applied before paint and remembered between visits — accessibility as a first-class feature for the 50+/70+ reader.
- **"Most useful to start with"** featured-guides section on the homepage, driven by front-matter.

Everything still ships **0 KB of shared JavaScript** (all enhancements are tiny inline islands); CSS ~27 KB; average page ~23 KB.

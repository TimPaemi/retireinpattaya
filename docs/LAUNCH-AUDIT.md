# Pre-Launch Audit & Checklist

*Last run: 14 June 2026. Re-run anytime with `npm run build && npm run audit`.*

## Automated audit — ✅ CLEAN

The `scripts/audit.mjs` crawler checks every built page. Latest result:

```
Pages crawled:          61
Pages with issues:      0
Total issues:           0
Internal links checked: 2205
Broken internal links:  0
✅ CLEAN — no issues found.
```

**What it checks automatically (and re-checks on every build):**
- `<html lang>` and viewport meta present (accessibility / mobile)
- `<title>` present and not over-long; meta description 50–165 chars
- Exactly one `<h1>` per page
- Canonical URL and JSON-LD structured data on every indexable page
- Every `<img>` has an `alt` attribute
- **All 2,205 internal links resolve to a real page** (no 404s)
- Utility pages (`/404/`, `/embed/`) are correctly excluded from SEO checks

**Measured performance (latest build):** 0 KB shared JavaScript · ~24 KB total CSS · ~19 KB average page. The audit also validates every JSON-LD block (227 valid, 0 invalid) and reports the heaviest pages.

> Run this before every deploy. If you add a page with a bad link or a missing field, it'll tell you.

---

## Manual checklist — what a script CAN'T verify

These are on you (or a reviewer) before launch. They're the difference between "builds fine" and "trustworthy".

### YMYL accuracy (the non-negotiables)
- [ ] **Every `⟨VERIFY⟩` placeholder replaced** with a sourced, current figure (use Prompt A in the prompt library). Search the repo for `VERIFY` and `verifyPending: true`.
- [ ] Every money/health/visa/legal figure has an **official source link** and an **accessed date**.
- [ ] Replace the **placeholder benchmark numbers** in `src/data/benchmarks.ts`, `insurance.ts`, `budget.ts` with researched values.
- [ ] Swap the **template author** (`james-whitfield`) and the editorial-team note for **real named people with real, verifiable credentials**.
- [ ] Confirm hospital names/details and any named facilities are current.

### Accessibility (extra rigorous — audience skews 50+)
- [ ] **Keyboard-only pass**: tab through nav, the calculators, and forms — everything reachable and operable, visible focus throughout.
- [ ] **Screen-reader spot check** (VoiceOver/NVDA) on the homepage, a guide, and the affordability tool.
- [ ] **Zoom to 200%** — layout holds, nothing clips, text reflows.
- [ ] Confirm colour contrast on any new colours (tokens are AA+, but verify custom additions).

### SEO & sharing
- [ ] Set your real domain in `astro.config.mjs` **and** `src/site.config.ts`.
- [ ] Test an Open Graph preview (the `/og-default.png` image) on a social/share debugger.
- [ ] Submit `sitemap-index.xml` in Google Search Console once live.
- [ ] Validate a couple of pages in Google's Rich Results test (Article, FAQ, Breadcrumb).

### Legal & trust
- [ ] Have the **Privacy Policy** and **Disclaimer** reviewed for your jurisdiction.
- [ ] Confirm the **affiliate disclosure** wording is accurate to your actual partners.
- [ ] Cookie/consent: Plausible/Umami need no banner; if you add anything that sets cookies, add consent.

### Operations (wire up revenue + list)
- [ ] Paste your ESP form URL into `FORMS.newsletterAction` (turns on every sign-up form).
- [ ] Set `FORMS.insuranceLeadAction` and `AFFILIATES.*` to your real partner links.
- [ ] Load the email nurture sequence (`docs/EMAIL-NURTURE-SEQUENCE.md`) into your ESP.
- [ ] Switch on analytics in `ANALYTICS` (`site.config.ts`).

### Performance
- [ ] Run Lighthouse on the homepage, a guide, and a tool page (the static build should score very well; confirm after adding real images).
- [ ] Compress any real photos you add (WebP/JPG, < 200 KB) before committing.

---

## Re-running the audit

```bash
npm run build        # produces dist/
npm run audit        # crawls dist/ and reports
```

Add it to your routine: build, audit, then push. A clean audit + a completed manual checklist above = ready to launch.

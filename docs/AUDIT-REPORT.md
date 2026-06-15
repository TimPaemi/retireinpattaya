# Full Site Audit — Retire in Pattaya

*Run on the live code in `C:\Projects\retireinpattaya`, 15 June 2026. Re-run the technical half anytime with `npm run build && npm run audit`.*

## Verdict

**Technically the site is launch-grade and clean.** Build passes, zero broken links, valid structured data everywhere, fast pages, accessibility checks pass. What stands between "live test site" and "trustworthy money-making site" is **content verification and real-world accounts** — not engineering. Details below, prioritised.

---

## 1. Automated technical audit — ✅ PASS (everything green)

```
Pages crawled:          68
Pages with issues:      0
Total issues:           0
Internal links checked: 2667   → 0 broken
JSON-LD structured data: 261 blocks → 0 invalid
Shipped JavaScript:     0 KB shared   (tiny inline islands only)
CSS:                    27 KB total
Average page weight:    ~23 KB        (excellent for Core Web Vitals)
```
Also verified present and correct: `robots.txt`, `sitemap-index.xml`, `_headers` (security + caching), `_redirects`, `og-default.png`, and a unique social image for **all 43** guides + pillars. Accessibility structure (one H1/page, heading order, form labels, image alt, lang, viewport, canonical) all pass.

## 2. Live deployment — ✅ UP

`https://retireinpattaya.pages.dev` is live and serving every page, nav, hub and footer correctly, with full SEO meta, Open Graph and schema.

> **Note:** the header/hero layout fix from our last step is in the code but only goes live once you **push** it (the screenshot you sent was the pre-fix version). Push, then hard-refresh.

---

## 3. 🔴 BLOCKERS — do these before promoting the site or letting Google index it

1. **Unverified figures (YMYL).** 64 `⟨VERIFY⟩` placeholders across 18 guides; **15 guides are flagged `verifyPending`** (they display a visible "figures being verified" note). These contain placeholder numbers for visas, tax, insurance, costs. **Replace with real, sourced figures** using *Prompt A* in `CONTENT-PROMPT-LIBRARY.md` before driving traffic. This is the single biggest item.
2. **Real authors (E-E-A-T).** `James Whitfield` is a clearly-marked **template** author, and the rest is a generic "Editorial Team." For a money/health/legal site, Google and readers reward *named experts with verifiable credentials*. Replace with at least one real named author/reviewer.
3. **Cite the high-stakes guides.** 22 guides have empty `sources: []`. Lifestyle ones (loneliness, hobbies) are fine without, but the **YMYL ones must cite sources** — especially: `thai-tax-on-foreign-income`, `buying-property-foreign-ownership-rules`, `wills-in-thailand-and-home`, `what-happens-if-you-die-in-thailand`.

## 4. 🟠 SHOULD-FIX — around launch

4. **Connect your domain.** Canonical tags and `robots.txt` point to `www.retireinpattaya.com`, but the site is on `pages.dev`. Either connect the domain (GO-LIVE Step 6) **or**, if staying on pages.dev for now, temporarily set `SITE_URL` in `astro.config.mjs` to the pages.dev URL so canonicals match.
5. **Wire revenue + email.** `FORMS.newsletterAction` is empty (sign-up shows "coming soon") and `AFFILIATES.insurance` is `#` (the insurance CTA falls back to the guide). Paste your ESP form URL and affiliate links into `src/site.config.ts` to start capturing leads/income.
6. **Push the header/hero fix** (item in §2).
7. **Turn on analytics.** `ANALYTICS` is empty — add Plausible or Umami so you can measure from day one.
8. **Legal review.** Privacy Policy and Disclaimer are solid templates — have them checked for your jurisdiction before full launch.

## 5. 🟢 NICE-TO-HAVE — later

- Add real photography over time (current abstract coastal art is tasteful and brand-safe, so no rush).
- Add citations to more qualitative guides where a stat is used.
- After verification: submit the sitemap in Google Search Console + Bing.
- Expand thin pillars (getting-settled, daily-life) with more guides.

---

## 6. Strong points worth keeping (don't regress these)

- **Zero render-blocking JS, ~23 KB pages** — the performance profile Google rewards for YMYL.
- **261 valid structured-data blocks** (Article/MedicalWebPage, FAQ, HowTo, Breadcrumb, ItemList, Person, Organization, WebSite+SearchAction).
- **0 broken internal links across 2,667** — and an `npm run audit` gate to keep it that way every deploy.
- Full trust system: About, Editorial Standards, Methodology, Disclaimer, per-page "last reviewed", topic-tailored disclaimers, auto glossary cross-linking + tooltips, search, accessibility text-size control.

## 7. Your immediate next actions

1. `git add . && git commit -m "layout fix" && git push` to deploy the header/hero fix.
2. Decide: connect the domain now, or set `SITE_URL` to the pages.dev address for a soft launch.
3. Start replacing `⟨VERIFY⟩` figures (begin with the 4 highest-traffic guides: visa options, retirement extension, health insurance by age, realistic monthly budget).
4. Add one real author; wire your email + insurance affiliate links.

Nothing here is a code emergency — the machine is sound. This is the editorial + accounts work that turns a clean site into a trusted, earning one.

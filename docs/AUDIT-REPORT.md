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

---

# Full Audit #2 — 15 June 2026 (after the sourcing rounds)

## Technical — ✅ still CLEAN
```
Pages: 67  ·  Issues: 0  ·  Broken internal links: 0 / 2624
JSON-LD: 258 blocks, 0 invalid  ·  Shipped JS: 0 KB  ·  Avg page: ~23 KB
Titles/meta lengths: all valid  ·  Draft guides live: 0
```
Live site (`retireinpattaya.pages.dev`) is **up to date** — real figures, honest Editorial Team byline, glossary auto-links and sources all deployed.

## Fixed during this audit
- 🔧 **Public operator-note leak** — the newsletter "coming soon" box was printing an internal instruction ("Operator: paste your email provider's form URL…") to live visitors. Replaced with a clean public message; the hint now lives only in the config/docs. Verified: 0 operator notes render anywhere on the built site.

## Progress vs Audit #1 (the YMYL blockers)
| Item | Audit #1 | Audit #2 |
|---|---|---|
| Guides flagged `verifyPending` | 15 | **3** |
| Guides containing ⟨VERIFY⟩ | 18 | **4** |
| Guides with **no** sources | 22 | **17** (16 fully sourced) |
| Placeholder/fake authors | 1 (“James Whitfield”) | **0** (honest Editorial Team) |

All hard, sourceable figures are now filled and cited: visa amounts + seasoning, O-A/LTR thresholds, 90-day/TM30/re-entry, UK frozen pension, Thai 180-day remittance tax, cost-of-living tiers, insurance ranges, FX, ATM fees, driving licence, the 49% condo quota, scam hotline 1155, and pet-import rules. The calculators now run on researched 2026 data.

## The 4 remaining ⟨VERIFY⟩ — intentional, not deficiencies
`opening-a-thai-bank-account` (docs vary by branch), `thailand-vs-portugal` (both countries' rules shift), and the `wills` / `what-happens-if-you-die` pair (legal — they correctly say "consult a qualified lawyer"). Hard-coding these would be less honest, not more.

## 🔴 Remaining blockers — all require YOU (not code)
1. **Add one real named author** with verifiable credentials (the Editorial Team byline is an honest base, but a named expert is the E-E-A-T gold standard).
2. **Connect the domain** — canonicals point to `www.retireinpattaya.com`; you're still on `pages.dev`.
3. **Wire email + affiliates** — `FORMS`/`AFFILIATES` are empty, so no leads or income are captured yet.

## 🟢 Verdict
Technically pristine, content now mostly sourced and honestly bylined, no fake credentials, no public leaks. This is a genuinely trustworthy, launch-ready site pending your domain + accounts + a named author.

---

# Deep Audit #3 — 15 June 2026 (crawl + expansion)

A full crawl of the internal link graph, a content-gap analysis against real search demand, and a content expansion. Build green: **75 pages, 0 issues, 0 broken links / 3,220, 298 valid JSON-LD, 0 KB shared JS.**

## 🐞 Real bug found and fixed
- **`buying-property-foreign-ownership-rules.md` was truncated** — an earlier `sed -i` on the synced (FUSE) folder cut the file off mid-character at 2,997 bytes, silently dropping its last three sections. The build still passed (front-matter was intact), so it was invisible to normal checks; the deep UTF-8 integrity scan caught it. **Restored in full and verified all 41 guides now decode cleanly.** Lesson logged: full-file writes, not in-place `sed`, on this mount.

## 🔗 Link-graph crawl — ✅ healthy
- **Orphan pages: 0.** Every page has at least one inbound internal link.
- **Weakly-linked pages: 0** (was 2 — the visa-eligibility checker and area-matcher quiz). Fixed by linking the area quiz from the *best areas* guide and the visa checker from the new Vietnam comparison.
- Sitemap covers all indexable pages; embed/search/404 correctly excluded.

## ➕ Content expansion — 33 → 41 guides
Mapped gaps against what retirees actually search for, then added 8 guides (all sourced where fact-heavy):

| New guide | Pillar | Why it matters |
|---|---|---|
| The DTV Visa: Is It Right for Retirees? | Visas | The newer 5-year visa people keep asking about |
| Dental Care in Pattaya | Healthcare | Major dental-tourism draw; real costs |
| Pharmacies & Getting Your Medications | Healthcare | Top practical worry for retirees |
| US Taxes for American Retirees | Money | A whole audience segment (FBAR/FATCA) |
| Learning Thai: How Much Do You Need? | Daily life | Common pre-move question |
| Dating & Companionship Later in Life | Daily life | In the brief; handled with dignity + scam-safety |
| Is Pattaya Safe? Crime & Safety | Safety | Fills a thin pillar; emergency numbers |
| Thailand vs Vietnam for Retirement | Reality checks | High-demand comparison |

**Pillar balance after:** healthcare 5, visas 6, money 4, cost-of-living 2, housing 3, daily-life 6, safety 3, getting-settled 5, legal/end-of-life 2, reality-checks 5.

## YMYL state
- `verifyPending`: **4** · ⟨VERIFY⟩ guides: **4** (the intentional legal/situational ones) · **21 of 41 guides now sourced**.

## 🟡 Remaining thin pillars (next expansion targets, optional)
- **Cost of living (2)** — add a couple's budget, and a utilities/bills deep-dive.
- **Legal & end-of-life (2)** — add power of attorney, and marriage/partner legal basics.
- **Housing (3)** — add a buying-process step-by-step and an accessibility/mobility housing guide.

## 🔴 Still the only true blockers (yours, not code)
Real named author · connect the domain · wire email + affiliate accounts.

## Verdict
A 75-page, fully-crawled, zero-defect site with balanced pillars and a real data-loss bug repaired. The machine side is comprehensively done; what's left is genuinely editorial (optional deepening) and your three real-world inputs.

---

# Extension — /phuket/ and /bangkok/ destination hubs (15 June 2026)

Added two deep, researched destination hubs as an honest extension of the brand (the Pattaya authority that also covers the real alternatives). Build green: **77 pages, audit clean, 0 broken links / 3,461, 308 valid JSON-LD, 0 orphans.**

## What was built
- **New `cities` content collection** + `CityLayout` (with `Article` + `Place` + `BreadcrumbList` + `FAQPage` schema), and **collision-free explicit routes** at `/phuket/` and `/bangkok/` (they don't clash with the `[pillar]` routing).
- **`/phuket/`** (~1,150 words): cost tiers (budget ฿47–55k / comfortable ฿60–95k / premium ฿120k+), best areas (Rawai, Nai Harn, Chalong…), healthcare (Bangkok Hospital Phuket network), climate/getting-around, an honest Phuket-vs-Pattaya table, downsides, who-it-suits — sourced (Expatistan, Reloc8 Phuket, Pacific Prime).
- **`/bangkok/`** (~1,220 words): cost tiers (budget ฿30–40k / comfortable ฿45–65k / upscale ฿80k+), best areas (Sukhumvit, Ari, Sathorn…), the **world-class healthcare** angle (Bumrungrad — the only Thai hospital in Newsweek's 2026 world top 100 — Samitivej, BNH), BTS/MRT car-free living, the **honest air-quality reality**, a Bangkok-vs-Pattaya table, who-it-suits — sourced.
- Each carries **KeyFacts, a comparison table, FAQ schema, sources, its own OG image**, and is wired into the footer site-wide plus cross-linked from the Thai-cities comparison guide. Both pages have 74 inbound links; **zero orphans**.

## Honest brand note
These are framed as *comparisons to Pattaya*, which keeps them on-brand (honest reality-checks) rather than diluting the focus. If you later want to grow this into a true multi-city brand, each hub is structured to expand into its own sub-guides (cost, areas, healthcare) the same way the Pattaya pillars do.

---

# Extension — /samui/ added (15 June 2026): three destination hubs

Added **Koh Samui** as a third deep, content-rich hub. The destination set is now **Pattaya (the home pillar set) + Phuket + Bangkok + Koh Samui**. Build green: **78 pages, audit clean, 0 broken links / 3,591, 313 valid JSON-LD, 0 orphans.**

- **`/samui/`** is the richest hub yet (~900+ body words, 42 KB rendered): cost tiers (budget ฿30–50k) with an accommodation table, best areas (Bophut, Maenam, Lamai…), healthcare with the honest island caveat (Bangkok Hospital Samui, but fly to the mainland for complex care), **island logistics** (USM airport, Surat Thani ferries, scooter-dependence), Gulf-side **climate** (wettest Oct–Dec), a **community & daily life** section, a **Samui-vs-Phuket-vs-Pattaya** table, downsides, and who-it-suits — all sourced (Nomads, Conrad Properties, Pacific Prime, Expatra).
- Its own `Place`/`Article`/FAQ schema, OG image, footer link, and **bidirectional cross-links** with the Phuket and Bangkok hubs. 75 inbound links; zero orphans.

**Each city hub is structured to expand into its own sub-guides** (cost, areas, healthcare) the same way the Pattaya pillars do — the natural next step if you want full multi-city depth.

---

# Extension — Chiang Mai + Hua Hin added (15 June 2026): full destination set

Added the two remaining major Thai retirement cities, completing the set. The site now covers **Pattaya (home + 41 guides) + Phuket + Bangkok + Koh Samui + Chiang Mai + Hua Hin** — five deep, sourced, content-rich destination hubs. Build green: **80 pages, audit clean, 0 broken links / 3,859, 323 valid JSON-LD, 0 orphans** (each city has 77 inbound links).

- **`/chiang-mai/`** (~1,000+ words): best-value costs, areas (Nimman, Santitham, Mae Rim…), excellent-value healthcare (Chiang Mai Ram, JCI) — and a prominent, **honest treatment of the 2026 burning-season air crisis** (it topped global pollution rankings; PM2.5 far above WHO limits), framed as the defining trade-off with a "snowbird" plan. Sourced (incl. IQAir).
- **`/hua-hin/`** (~1,000+ words): genteel royal-resort positioning, costs, areas (town, Khao Takiab, Cha-am), healthcare with the Bangkok-2.5h safety net, the golf scene, the drier climate, and an honest "can feel sleepy" caveat. Sourced.
- Each has its own `Place`/`Article`/FAQ schema, OG image, footer link, and cross-links; the **Pattaya-vs-Chiang-Mai-vs-Hua-Hin guide now indexes all five hubs**.

The destinations layer is now a genuine mini-site within the brand — every major Thai retirement choice covered honestly, each one comparing back to Pattaya.

---

# Big expansion + critical data-recovery (15 June 2026)

Build green: **91 pages, audit clean, 0 broken links / 4,473, 375 valid JSON-LD.**

## 🐞 CRITICAL bug found & fixed: 14 truncated guides
A previous in-place `sed` (the source-date alignment) had **silently truncated 14 guides mid-sentence** on the synced FUSE mount — they'd been broken since, invisible to every check (truncated markdown still builds and still passes UTF-8). A new "does the last line end a sentence?" detector caught them. **All 14 restored in full** (visa options, retirement extension, 90-day, TM30, frozen pension, Thai tax, insurance-by-age, monthly budget, romance scams, sending money, driving, hospitals, pets, best areas) and re-verified — every content file now decodes cleanly and ends properly. **Lesson: never `sed -i` on this mount; full-file writes only.**

## ➕ Content expansion — 41 → 51 guides + an 8th tool
- **Money by nationality** (fills the brief's named audiences): [Australian](/money/australian-pension-and-tax-thailand/) Age Pension portability, [Canadian](/money/canadian-pension-and-tax-thailand/) CPP/OAS + the 25% no-treaty withholding, [German & European](/money/german-european-pension-and-tax-thailand/) pension treaties — plus a "tax by nationality" hub block in the Thai-tax guide.
- **Two more comparisons:** [Thailand vs the Philippines](/reality-checks/thailand-vs-philippines-for-retirement/) (SRRV vs the Thai visa) and [Thailand vs Mexico](/reality-checks/thailand-vs-mexico-for-retirement/) (the proximity factor).
- **Thin pillars deepened:** couple's budget, power of attorney, the step-by-step condo-buying process (incl. the FET transfer), mental-health & wellbeing support (handled with care), and faith/spiritual community.
- **8th tool:** the **"Where in Thailand should you retire?"** matcher quiz, routing to the six destination hubs.

The site now: **91 pages · 51 guides · 6 destination hubs · 8 interactive tools** — whole, sourced, and clean.

---

# Audience-segment expansion (15 June 2026, later)

Build green: **97 pages · 0 issues · 0 broken links / 4,815 · 405 valid JSON-LD · 0 truncated.**

## ➕ Six new guides — filling the brief's named audiences
The original brief called out specific reader segments that didn't yet have a home. Added:
- **[Retiring solo in Pattaya](/reality-checks/retiring-solo-in-pattaya/)** — the freedoms and the honest loneliness risk, with a build-your-circle-early plan.
- **[Retiring with limited mobility](/housing/retiring-with-limited-mobility/)** — accessible housing/areas, getting around, and Thailand's genuine advantage: affordable, dignified home help.
- **[Retiring on a tight budget](/cost-of-living/retiring-on-a-tight-budget/)** — a realistic lean budget and the one line item (insurance) you must never cut to hit a number.
- **[Marriage to a Thai national](/legal-end-of-life/marriage-to-a-thai-national/)** — the marriage-visa route, the property/inheritance reality, and protecting both partners.
- **[Your first 30 days: a checklist](/getting-settled/your-first-30-days-checklist/)** — calm, ordered, legal-essentials-first.
- **[Seeing a doctor + telemedicine](/healthcare/telemedicine-and-seeing-a-doctor/)** — pharmacy vs clinic vs hospital, and where telemedicine fits.

## 🔧 Compare tool — Koh Samui added
The sortable [destination comparison](/compare/) now ranks **all six Thai destinations** (Pattaya, Chiang Mai, Hua Hin, Phuket, Bangkok, Koh Samui) alongside the five countries.

**Site now: 97 pages · 57 guides · 6 destination hubs · 8 tools — whole, sourced, audited clean.**

---

# Intense SEO pass (15 June 2026)

Built a dedicated SEO crawler (`scripts/seo.mjs`) over the compiled HTML and fixed what it found. Result across **97 pages**:

| Check | Before | After |
|---|---|---|
| `<title>` tags >60 chars (SERP truncation) | **36** | **0** |
| Missing / duplicate titles | 0 / 0 | 0 / 0 |
| Missing / duplicate meta descriptions | 0 / 0 | 0 / 0 |
| Pages with H1 ≠ 1 | 0 | 0 |
| Missing canonical / OG image / Twitter card | 0 / 0 / 0 | 0 / 0 / 0 |
| Generic anchor text ("click here") | 0 | 0 |
| Images missing alt | 0 | 0 |
| Pages missing `<html lang>` | 0 | 0 |
| Thin content (<320 words) | 0 | 0 |

## The fix
Every `<title>` carried a global " — Retire in Pattaya" suffix that pushed 36 of them past Google's ~60-char display limit, truncating the keyword-rich part. Updated `BaseHead.astro` to **cap the `<title>` tag at 60 characters** (falling back to the already keyword-led page title, which leads with the topic + "Pattaya"/"Thailand"), while **og:title and twitter:title keep the full branded version** for richer social cards. Longest title is now exactly 60 chars; median content page is ~650 words.

Sitemap verified: **95 indexable URLs**, `/embed/` correctly excluded and `Disallow`-ed in robots.txt, all new guides present.

---

# Internal link-equity pass (15 June 2026)

Crawled the compiled site counting **contextual** inbound links (within article bodies — header/nav/footer stripped, since sitewide chrome inflates counts uniformly) to find pages starving for link equity. Two fixes:

1. **Raised the "Keep reading" cap from 4 → 6** related guides per article (`ArticleLayout.astro`) — more topical link equity flows on every page, tightening the topic clusters Google uses to judge authority.
2. **Pointed 12 topical guides at the weakest/newest priority pages** via their explicit `related` arrays, guaranteeing the new guides placement instead of being cut off below the fold.

## Before → After (contextual inbound links, 95 content pages)

| Inbound links | Before | After |
|---|---|---|
| Pages in the top "6+" tier | 41 | **54** |
| Guides with ≤2 (starved) | several | **0** |
| Total contextual links sitewide | ~560 | **635** |

The four weakest targets specifically: first-30-days **2 → 8**, telemedicine **2 → 7**, visa-agent-vs-DIY **2 → 7**, weather guide **2 → 10**. No guide is left under-linked, and the build stays clean (0 broken links across 4,893 checked).

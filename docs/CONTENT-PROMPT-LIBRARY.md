# The Content Factory — Prompt Library & Workflow

*Your repeatable system for mass-producing honest, on-brand, sourced content with ChatGPT / Claude / Perplexity / Firefly. Copy-paste ready.*

---

## The golden rule

**Research and verify the facts FIRST (Perplexity). Then draft (ChatGPT/Claude). Never let the writing AI invent a visa number, tax rule, insurance figure or legal fact.** If a figure isn't verified, it stays a `⟨VERIFY: … + source⟩` placeholder. This is the whole reason readers will trust you.

## The 4-step workflow for every page

1. **Research & verify** → run *Prompt A* in Perplexity. Collect figures + official source links + the date.
2. **Draft** → run the matching generator prompt (B–G) in ChatGPT/Claude, pasting in your verified facts.
3. **QA** → run the checklist at the bottom. Fix anything flagged.
4. **Publish** → save the Markdown file into `src/content/guides/` (or `pillars/`), set `draft: false`, and the site rebuilds. Done.

---

## The Brand Voice Card  *(paste this at the top of every drafting prompt)*

```
BRAND VOICE — Retire in Pattaya
- Audience: Western retirees and near-retirees, ~50+ (and their adult children), weighing a life-changing move. Cautious, detail-hungry, risk-aware.
- Tone: mature, warm, calm, credible. A trusted, knowledgeable friend who lives there — NOT a travel blogger, NOT a salesperson.
- Radically honest: always cover the downsides plainly (costs that rise with age, insurance gaps, isolation, scams, money running out, rule changes). Honesty is the brand.
- Never overpromise, never fearmonger. Balanced and practical.
- Distance from the seedy-nightlife stereotype. Show the real retiree life: quiet beaches, community, healthcare, value, sunshine.
- Plain English, generous and clear. Short paragraphs. UK or US spelling consistent per article.
- Information only — never personal financial/legal/medical/immigration advice. Point to qualified professionals.
- NEVER invent figures. Volatile facts must be written as ⟨VERIFY: what + needs a source⟩ unless I give you a verified number and source.
```

---

## Prompt A — Research & Verify  *(run in Perplexity, before writing)*

```
You are a meticulous fact-checker for a money/health/legal (YMYL) website about retiring in Pattaya, Thailand. The audience makes life-changing decisions on this, so accuracy and recency are critical.

TOPIC: <e.g. "Thai retirement visa financial requirements (800k deposit / 65k monthly income) for 2026">

For each fact below, give me:
1. The current figure or rule, as of today's date.
2. The PRIMARY/OFFICIAL source (government body, official portal) with a direct URL. Prefer the original source over summaries.
3. The date the source was last updated, if shown.
4. A confidence note: is this stable, or does it change often / vary by office or nationality?
5. Any important caveat a retiree must know (e.g. "money must be seasoned for X months", "applied at officer discretion").

FACTS TO VERIFY:
- <list each number/rule you need>

Rules: If sources disagree, say so and show both. If you cannot find an official source, say "NOT VERIFIED" — do not guess. Output as a table I can paste into my notes, followed by the list of source URLs.
```

> Save the output. You'll paste the verified figures into the drafting prompt, and the source URLs into the article's `sources:` list.

---

## Prompt B — Deep Guide (cluster article)  *(ChatGPT / Claude)*

```
<PASTE THE BRAND VOICE CARD HERE>

TASK: Write a deep, genuinely helpful guide for Retire in Pattaya.
TITLE/TOPIC: <topic>
PILLAR: <one of: healthcare | visas | money | cost-of-living | housing | daily-life | safety-scams | getting-settled | legal-end-of-life | reality-checks>
TARGET LENGTH: 1,500–2,200 words.

VERIFIED FACTS (use ONLY these for any figure; everything else stays a ⟨VERIFY⟩ placeholder):
<paste your Perplexity results, with source URLs>

STRUCTURE:
- A warm, honest opening that frames the real stakes (no hype).
- Clear H2/H3 sections. Use a comparison table where it helps.
- Cover the DOWNSIDES explicitly in their own section.
- A short "who this suits / who should think twice" section.
- A plain "bottom line" conclusion.
- 4–6 FAQ pairs at the end (real questions people search).

OUTPUT FORMAT: Return a single Markdown file with this exact frontmatter filled in, then the body. Keep description to 50–165 characters. Put every official source in `sources:`. Use ⟨VERIFY: …⟩ for any figure I did not supply.

---
title: "<≤75 chars>"
description: "<50–165 chars>"
pillar: "<pillar slug>"
author: "editorial-team"
publishDate: <YYYY-MM-DD>
lastReviewed: <YYYY-MM-DD>
draft: true
ymyl: true
contentType: "guide"
tags: ["", ""]
verifyPending: true
sources:
  - label: ""
    url: ""
    publisher: ""
    accessed: "<YYYY-MM-DD>"
faq:
  - q: ""
    a: ""
---

<body in Markdown>
```

---

## Prompt C — Pillar Hub page

```
<BRAND VOICE CARD>
TASK: Write the hub/overview page for the "<pillar name>" pillar of Retire in Pattaya.
GOAL: Orient a newcomer, set the honest tone for this topic, and make them want to read the detailed guides.
LENGTH: 250–450 words. No invented figures — keep it qualitative, or use ⟨VERIFY⟩.
OUTPUT: Markdown with this frontmatter then the intro body:
---
title: "<SEO H1>"
navLabel: "<short>"
description: "<50–165 chars>"
order: <number>
intro: "<one strong lead sentence>"
lastReviewed: <YYYY-MM-DD>
---
<2–3 short paragraphs>
```

---

## Prompt D — Comparison article  *(e.g. Pattaya vs Chiang Mai, Thailand vs Portugal)*

```
<BRAND VOICE CARD>
TASK: Write an even-handed comparison for the "reality-checks" pillar: <A> vs <B> for retirement.
Be genuinely balanced — name who each option suits and where each loses. Include a comparison table across: cost, healthcare, visa ease, climate, community/loneliness risk, getting around, downsides.
Use ⟨VERIFY⟩ for any cost/visa figure unless I provide it.
OUTPUT: same Markdown + frontmatter format as the deep-guide prompt, contentType: "comparison".
```

---

## Prompt E — FAQ entries  *(for the FAQ hub or to enrich a guide)*

```
<BRAND VOICE CARD>
TASK: Write <N> FAQ pairs about <topic> for retirees considering Pattaya.
Each answer: 2–4 sentences, plain, honest, and where a figure is involved, either use my verified number or ⟨VERIFY⟩.
OUTPUT: a YAML list of {q, a} I can paste into a guide's `faq:` field.
```

---

## Prompt F — Glossary term

```
<BRAND VOICE CARD>
TASK: Define this term for a retiree audience in 2–4 plain sentences: "<term>" (e.g. "TM30", "Non-O visa", "remitted income").
Say why it matters to them and link-worthy related terms. No jargon without explaining it.
OUTPUT: { term, short_definition, why_it_matters }.
```

---

## Prompt G — Scam-protection article  *(sensitive — extra care)*

```
<BRAND VOICE CARD>
TASK: Write a protective guide for the "safety-scams" pillar about <scam type> targeting retirees (e.g. romance scams, fake investment schemes, property cons, dishonest visa "agents").
TONE: calm, non-judgemental, protective. The reader may be a target right now. No shaming, no fearmongering.
INCLUDE: how it typically works, the specific red flags, what to do if it's happening, and where to get help (⟨VERIFY official contacts⟩).
OUTPUT: same Markdown + frontmatter format, pillar: "safety-scams".
```

---

## Image pipeline (Firefly / stock)

**Brief for every image:** dignified, real-feeling mature people (50s–70s+) enjoying ordinary good life — calm coastal palette, natural light, warm and authentic. **Never** clichéd stock-grin, **never** anything seedy or nightlife.

**Firefly prompt template:**
```
Editorial photograph, two relaxed Western retirees in their 60s <doing X: walking a quiet Jomtien beach at golden hour / sharing coffee at a calm café / chatting with a local market vendor>, natural soft light, warm and authentic, calm coastal colours (soft blue, sand, teal), candid not posed, shallow depth of field, no text. Respectful and dignified. --ar 16:9
```
Variations to generate per topic: a **hero** (16:9, 1600×900), a **card** (4:3, 800×600), and a **social/OG** crop (1200×630).

**Sizing & saving:** export web-optimised (WebP/JPG, <200 KB), drop into `public/images/<pillar>/`, reference as `/images/<pillar>/<file>.webp`.

**Alt text rule (always):** describe the image factually for a screen-reader user in one sentence; no keyword stuffing. e.g. *"A retired couple walking along a quiet beach at sunset."*

---

## QA checklist (run before `draft: false`)

- [ ] **Every figure** is either verified-with-a-source or a visible `⟨VERIFY⟩` placeholder. No naked numbers.
- [ ] `sources:` has the official links; `accessed:` date set.
- [ ] `lastReviewed` is today; `description` is 50–165 chars; `title` ≤ 75 chars.
- [ ] The **downsides** are covered honestly, not buried.
- [ ] No personal advice — points to professionals where decisions are made.
- [ ] Reads in the brand voice (warm, calm, honest). Read it aloud once.
- [ ] Internal links: to the pillar hub, 1–2 related guides, and a relevant tool.
- [ ] Tasteful, dignified imagery with real alt text.
- [ ] If it contains any `⟨VERIFY⟩`, set `verifyPending: true` (the page shows an honest "being verified" note).
- [ ] Spelling consistent (UK or US) throughout.

---

## Putting a finished page live

1. Save the AI's Markdown as `src/content/guides/<url-slug>.md` (slug = the file name = the URL).
2. Make sure `pillar:` matches one of the ten slugs.
3. When verified, set `draft: false` (and clear `⟨VERIFY⟩` + `verifyPending`).
4. Save → the site rebuilds → the guide appears on its pillar hub automatically. No code.

# Retire in Pattaya — Operator Manual

Everything you need to run this site yourself. No coding required for day-to-day work. Written for a non-coder.

> **New here? Read these first:** `docs/00-BLUEPRINT.md` (the plan & decisions) and `docs/CONTENT-PROMPT-LIBRARY.md` (how to mass-produce content with AI).

---

## A) Preview the site on your own computer (10 minutes, one time setup)

1. **Install Node.js** (the engine that runs the site) — get the "LTS" version from <https://nodejs.org> and install it.
2. **Open a terminal** in this folder:
   - Windows: open the folder, type `cmd` in the address bar, press Enter.
   - Mac: right-click the folder → "New Terminal at Folder".
3. **Install the building blocks** (one time): type this and press Enter:
   ```
   npm install
   ```
4. **Start the preview:**
   ```
   npm run dev
   ```
5. Open the link it shows (usually <http://localhost:4321>) in your browser. Edit a file, save, and the page updates instantly.
6. Press `Ctrl + C` in the terminal to stop.

That's it. You never *need* to touch code — but you can preview everything before it goes live.

---

## B) The ONE thing to change when your domain is ready

Open `astro.config.mjs` and change this line to your real domain:
```js
const SITE_URL = 'https://www.retireinpattaya.com';
```
Also update `url:` in `src/site.config.ts` to match. Save. Done — every link, sitemap entry and share preview updates automatically.

---

## C) Add a new guide (no coding)

1. In `src/content/guides/`, create a file named after the URL you want, e.g. `opening-a-thai-bank-account.md`.
2. Generate it with **Prompt B** in `docs/CONTENT-PROMPT-LIBRARY.md` — it outputs the file ready-made.
3. Make sure `pillar:` is one of the ten pillar slugs. Keep `draft: true` until it's checked.
4. When verified, set `draft: false`. Save. The guide appears on its pillar hub automatically.

**Add a new author** (do this — real named authors build trust): copy `src/content/authors/editorial-team.md` to a new file and fill in real details.

---

## D) Change the look or the brand

- **Colours / fonts / spacing:** `src/styles/tokens.css` (change values once, whole site re-themes).
- **Brand name, navigation, pillars, disclaimer:** `src/site.config.ts`.
- **Calculator numbers:** `src/data/benchmarks.ts` — ⚠ replace the placeholder figures with researched, sourced numbers before relying on them publicly.

---

## E) Put it on the internet — free — with auto-updates (Cloudflare Pages)

You'll connect this folder to **GitHub** (free file storage for code) and **Cloudflare Pages** (free hosting). After setup, you just save changes and the live site updates itself.

**One-time setup:**
1. Make a free account at <https://github.com> and at <https://dash.cloudflare.com>.
2. Install **GitHub Desktop** (<https://desktop.github.com>) — the no-terminal way to use GitHub.
3. In GitHub Desktop: **File → Add Local Repository →** choose this folder → **"create a repository"** → **Publish** (you can keep it private).
4. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git →** pick your new repo.
5. When it asks for build settings, enter exactly:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy.** A minute later your site is live on a free `*.pages.dev` address.
7. **Add your domain:** in the Pages project → **Custom domains** → add `retireinpattaya.com` and follow the steps.

**From then on:** edit a file → in GitHub Desktop click **Commit** then **Push** → Cloudflare rebuilds and your live site updates in ~1 minute. That's your entire publishing workflow.

---

## F) Handy commands

| Command | What it does |
|---|---|
| `npm run dev` | Live preview on your computer |
| `npm run build` | Build the final site into `dist/` |
| `npm run preview` | Preview the built site exactly as it'll go live |

---

## G) Where things live

- **Your content:** `src/content/` (guides, pillars, authors — Markdown)
- **Brand & nav:** `src/site.config.ts`
- **Theme:** `src/styles/tokens.css`
- **The calculator's numbers:** `src/data/benchmarks.ts`
- **The plan:** `docs/00-BLUEPRINT.md`
- **The AI content system:** `docs/CONTENT-PROMPT-LIBRARY.md`

> **Current build:** 68 pages — 5 live tools, 12 deep guides, FAQ, glossary, author pages, full trust core. Run `npm run dev` to explore it.

> **Now includes:** site search (`/search/`), per-guide hero art, sourced Key Facts boxes, HowTo schema, an RSS feed, a 404 page, and a pre-launch audit (`npm run audit`). Production headers/redirects live in `public/_headers` and `public/_redirects`.

> **Also now:** MDX support for rich guides, a destination-comparison tool (`/compare/`), and an auto-generated social image for every guide and pillar (`/public/og/`).

> **Reader features:** glossary hover-tooltips, reading-progress bar, back-to-top, one-click Print/Save-as-PDF on guides, and a remembered A/A+/A++ text-size control.

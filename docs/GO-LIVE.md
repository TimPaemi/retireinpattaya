# Go Live — Step by Step (no terminal needed)

This takes about **30–40 minutes**. Everything is **free** except the domain (**~$10–12/year**). You will **not** need to use a command line or write any code.

**The plan:** put your project on **GitHub** (free file storage for websites) → connect **Cloudflare Pages** (free hosting) → point your **domain** at it. After that, the site updates itself every time you save a change.

---

## ⚠️ Before you promote it: a 60-second read

This is a money / health / visa (YMYL) site. The guides currently contain clearly-marked `⟨VERIFY⟩` placeholders instead of made-up figures. You have two honest options:

- **Soft launch (recommended first):** deploy now to the free Cloudflare web address (e.g. `retire-in-pattaya.pages.dev`) to see it live and test everything — but **don't submit it to Google or drive traffic yet**, and don't connect the real domain until the figures are verified.
- **Full launch:** first replace the `⟨VERIFY⟩` figures with real sourced numbers (use **Prompt A** in `CONTENT-PROMPT-LIBRARY.md`) and add real named authors, **then** connect your domain and tell Google.

You can do the whole technical setup below today either way. Just hold off on **Step 8 (Tell Google)** and the custom domain until your figures are verified.

---

## Step 1 — Register your domain

1. Decide your domain. Recommended: **retireinpattaya.com** (backups: retiringinpattaya.com, pattayaretirement.com).
2. Register it at any registrar. Simplest options:
   - **Cloudflare** (you'll host there anyway — one login for everything), or
   - **Porkbun** or **Namecheap** (cheap, reputable).
3. Buy just the domain. You do **not** need their website builder, email, or add-ons. (Pricing changes — expect roughly **$10–12/year** for a .com.)

> Don't have the domain yet but want to see the site today? Skip this and use the free `.pages.dev` address from Step 5. You can add the domain anytime later (Step 6).

---

## Step 2 — Put your domain in the code (two lines)

Open the project folder on your computer and edit two files with any text editor (even Notepad):

1. **`astro.config.mjs`** — change line 12:
   ```js
   const SITE_URL = 'https://www.retireinpattaya.com';
   ```
   to your real domain (keep the `https://` and the quotes).

2. **`src/site.config.ts`** — change the `url:` line near the top to the same domain.

Save both. That's the only code you ever *have* to touch. (If you skip this, the site still works — links just point at the placeholder domain.)

---

## Step 3 — Create two free accounts

1. **GitHub** — sign up at <https://github.com> (free).
2. **Cloudflare** — sign up at <https://dash.cloudflare.com> (free).

Use a password manager and turn on 2-factor on both — this is your business now.

---

## Step 4 — Put the project on GitHub (the easy, no-terminal way)

1. Download and install **GitHub Desktop**: <https://desktop.github.com> (it's the friendly, click-based way to use GitHub — no commands).
2. Open GitHub Desktop and sign in with your GitHub account.
3. Menu: **File → Add local repository…** and choose your project folder
   (the one containing `package.json`, `src`, `public`, `docs`).
4. It will say "this directory is not a Git repository" — click **"create a repository"**.
5. Leave the defaults and click **Create repository**.
6. Click **Publish repository** (top bar). You can tick **"Keep this code private"** — that's fine. Click **Publish**.

Your whole project is now safely on GitHub. ✅

> Prefer not to install anything? Alternative: on github.com click **New repository**, then on the repo page use **Add file → Upload files** and drag your project folder in. GitHub Desktop is smoother for updates later, though.

---

## Step 5 — Deploy on Cloudflare Pages

1. In the Cloudflare dashboard, open **Workers & Pages**.
2. Click **Create application** → the **Pages** tab → **Import an existing Git repository** → **Connect to GitHub** and authorise it.
3. Pick your `retire-in-pattaya` repository → **Begin setup**.
4. Enter these **build settings exactly**:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Open **Environment variables** and add one (prevents a common build error on older Node):
   - **Variable name:** `NODE_VERSION`  **Value:** `20`
6. Click **Save and Deploy**.

Wait ~1–2 minutes. Cloudflare installs everything and builds your site. When it finishes you'll get a live address like **`https://retire-in-pattaya.pages.dev`** — open it. **That's your site, live on the internet.** 🎉

---

## Step 6 — Connect your custom domain

*(Do this once your figures are verified, or now if soft-launching is fine for you.)*

1. In your new Pages project, go to the **Custom domains** tab → **Set up a custom domain**.
2. Type your domain (e.g. `www.retireinpattaya.com`) and follow the prompts.
   - If you registered the domain **at Cloudflare**, it's basically automatic.
   - If you registered **elsewhere**, Cloudflare shows you DNS records to add at your registrar (copy-paste them). It can take from a few minutes up to a day for the domain to start working — that's normal.
3. Also add the "naked" domain `retireinpattaya.com` and let Cloudflare redirect it to the `www` version (or vice-versa).

---

## Step 7 — Turn on email capture & affiliate income (anytime)

These don't block launch. When ready, edit `src/site.config.ts`:

- **Email sign-ups:** create a free account with an email provider (ConvertKit / MailerLite / Beehiiv), copy your form's submit URL, and paste it into `FORMS.newsletterAction`. Load the ready-made flow from `EMAIL-NURTURE-SEQUENCE.md`.
- **Insurance & other income:** join your affiliate/lead programmes and paste the links into `AFFILIATES` (insurance is your main earner).
- Save → commit → push (Step 9) and they go live.

---

## Step 8 — Tell Google (ONLY after your figures are verified)

1. Go to **Google Search Console** (<https://search.google.com/search-console>), add your domain and verify it (Cloudflare makes this easy).
2. Submit your sitemap: enter **`sitemap-index.xml`** in the Sitemaps section.
3. Optionally do the same at **Bing Webmaster Tools**.

Don't do this step until the `⟨VERIFY⟩` figures are real — you don't want Google indexing placeholder numbers on a trust site.

---

## Step 9 — How you update the site forever (your whole workflow)

1. Edit or add a file on your computer (e.g. drop a new guide `.md` into `src/content/guides/`).
2. Open **GitHub Desktop** → it shows your changes → type a short summary → click **Commit to main** → click **Push origin**.
3. Cloudflare automatically rebuilds and your live site updates in ~1 minute. Done.

Before each push, it's good practice to check things still build cleanly (optional, needs Node installed locally): `npm run build` then `npm run audit`.

---

## Troubleshooting

- **Build failed on Cloudflare:** make sure the `NODE_VERSION = 20` environment variable from Step 5 is set, then **Retry deployment**.
- **Site shows but looks unstyled / links 404:** confirm **Build output directory** is exactly `dist`.
- **Custom domain not working yet:** DNS can take time to propagate (minutes to ~24h). Re-check later; it usually "just starts working".
- **Social shares show no image:** make sure the `public/og/` folder and `public/og-default.png` were included in the GitHub upload.
- **Want to undo a change:** in GitHub Desktop, History lets you revert; Cloudflare keeps every past deployment and lets you roll back with one click.

---

## Final go-live checklist

- [ ] Domain registered and set in `astro.config.mjs` + `src/site.config.ts`
- [ ] Project on GitHub, deployed on Cloudflare Pages (live `.pages.dev` works)
- [ ] `⟨VERIFY⟩` figures replaced with sourced numbers (see `LAUNCH-AUDIT.md`)
- [ ] Real named authors added
- [ ] Email provider URL in `FORMS`; affiliate links in `AFFILIATES`
- [ ] Custom domain connected and loading over `https://`
- [ ] `npm run audit` clean (links, schema, accessibility)
- [ ] Sitemap submitted to Google Search Console
- [ ] Privacy Policy & Disclaimer reviewed for your jurisdiction

When these are ticked, you're properly live. Welcome to the internet. 🌴

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkGlossary from './src/plugins/remark-glossary.mjs';

// ─────────────────────────────────────────────────────────────────────────────
// THE ONE LINE YOU CHANGE WHEN YOUR DOMAIN IS LIVE.
// Until then this placeholder is fine — the whole site builds and previews.
// Recommended domain: https://www.retireinpattaya.com  (register it, then paste here)
// ─────────────────────────────────────────────────────────────────────────────
const SITE_URL = 'https://www.retireinpattaya.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/embed/') && !page.includes('/thank-you/'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkGlossary],
  },
  build: {
    format: 'directory',
  },
});

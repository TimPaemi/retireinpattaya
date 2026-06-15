/* ============================================================================
   CONTENT COLLECTIONS = your editable content model.
   These Zod schemas are guardrails: a guide will REFUSE to build if it's
   missing a "last reviewed" date or author. That discipline is what keeps a
   money/health/legal (YMYL) site trustworthy. Add a page = add a Markdown file
   in the right folder with these fields. No code required.
============================================================================ */
import { defineCollection, reference, z } from 'astro:content';

const sourceSchema = z.object({
  label: z.string(),                 // e.g. "Thai Immigration Bureau"
  url: z.string().url(),             // official/primary source link
  publisher: z.string().optional(),
  accessed: z.string().optional(),   // ISO date you verified it, e.g. "2026-06-13"
});

const faqItem = z.object({
  q: z.string(),
  a: z.string(),                     // plain text (also feeds FAQPage schema)
});

/* ---- GUIDES: the cluster articles that do the heavy lifting ---- */
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(75, 'Keep titles tight for search results.'),
    description: z.string().min(50).max(165, 'Meta description: 50–165 chars.'),
    pillar: z.enum([
      'healthcare', 'visas', 'money', 'cost-of-living', 'housing',
      'daily-life', 'safety-scams', 'getting-settled',
      'legal-end-of-life', 'reality-checks',
    ]),
    author: reference('authors'),
    reviewer: reference('authors').optional(),  // optional second set of eyes (E-E-A-T)
    publishDate: z.coerce.date(),
    lastReviewed: z.coerce.date(),              // REQUIRED — shown on page, in schema
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(true),           // safe default: nothing publishes by accident
    featured: z.boolean().default(false),
    ymyl: z.boolean().default(true),            // money/health/legal → extra disclaimer + schema
    contentType: z.enum(['guide', 'comparison', 'checklist', 'explainer']).default('guide'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    sources: z.array(sourceSchema).default([]),
    // Set true while the draft still contains ⟨VERIFY⟩ placeholders. Build will
    // warn (see scripts) so unverified YMYL facts never go live by accident.
    verifyPending: z.boolean().default(false),
    faq: z.array(faqItem).default([]),
    related: z.array(z.string()).default([]),   // slugs of related guides
    // Optional sourced 'Key Facts' box (renders above the article body).
    // TL;DR bullets shown in an 'In short' box at the top of the guide.
    takeaways: z.array(z.string()).default([]),
    keyFacts: z.array(z.object({
      label: z.string(),
      value: z.string(),
      verify: z.boolean().default(false),
      sourceUrl: z.string().url().optional(),
    })).default([]),
    // Optional HowTo steps (adds HowTo schema for checklist-style guides).
    steps: z.array(z.object({ name: z.string(), text: z.string() })).default([]),
  }),
});

/* ---- PILLARS: hub pages that organise and interlink each cluster ---- */
const pillars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),               // SEO/H1
    navLabel: z.string().optional(),
    description: z.string().min(50).max(165),
    order: z.number().default(99),
    intro: z.string(),               // hub intro paragraph
    lastReviewed: z.coerce.date(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
  }),
});

/* ---- AUTHORS: real credibility signals (E-E-A-T) ---- */
const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),                // e.g. "Editor" / "Healthcare researcher"
    shortBio: z.string(),            // one line, used in bylines
    credentials: z.array(z.string()).default([]),
    avatar: z.string().optional(),
    email: z.string().optional(),
    sameAs: z.array(z.string().url()).default([]), // LinkedIn etc. for Person schema
  }),
});

export const collections = { guides, pillars, authors };

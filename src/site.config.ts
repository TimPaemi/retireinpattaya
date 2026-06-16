/* ============================================================================
   SITE CONFIG — edit brand, navigation, and the pillar taxonomy here.
   Almost everything global (header, footer, schema, SEO defaults) reads from
   this file, so you rarely need to touch code to change the site.
============================================================================ */

export const SITE = {
  name: 'Retire in Pattaya',
  shortName: 'Retire in Pattaya',
  // Keep in sync with `site` in astro.config.mjs when your domain goes live.
  url: 'https://www.retireinpattaya.com',
  tagline: 'The honest guide to retiring well in Pattaya.',
  description:
    'Calm, candid, carefully-sourced guidance on retiring in Pattaya — visas, healthcare, money, housing and the downsides others skip. Information only, not advice.',
  locale: 'en',
  // Used by Organization schema + footer. Update as the brand grows.
  email: 'hello@retireinpattaya.com',
  founded: '2026',
  sameAs: [] as string[], // social profile URLs, when you create them
  // Default social share image (place a 1200x630 file at /public/og-default.png later)
  defaultOgImage: '/og-default.png',
} as const;

/* ----------------------------------------------------------------------------
   PILLARS — the content taxonomy. Each becomes a hub page at /<slug>/ and
   articles live at /<slug>/<article>/. Order here = order in nav + homepage.
   `priority` reflects editorial focus (healthcare & visas lead).
---------------------------------------------------------------------------- */
export interface Pillar {
  slug: string;
  title: string;       // nav label
  hubTitle: string;    // H1 on the hub page
  summary: string;     // one-line description
  icon: string;        // simple emoji marker (replace with SVG later if desired)
  priority: number;    // 1 = highest editorial priority
}

export const PILLARS: Pillar[] = [
  { slug: 'healthcare', title: 'Healthcare & Insurance', hubTitle: 'Healthcare & Insurance for Retirees in Pattaya', summary: 'Hospitals, costs, and honest guidance on health insurance as you age.', icon: '🩺', priority: 1 },
  { slug: 'visas', title: 'Visas & Immigration', hubTitle: 'Retirement Visas & Immigration for Pattaya', summary: 'Retirement visa routes, financial requirements, 90-day reporting and more.', icon: '🛂', priority: 1 },
  { slug: 'money', title: 'Money, Pensions & Tax', hubTitle: 'Money, Pensions & Tax for Retiring in Thailand', summary: 'Transferring pensions, the UK frozen-pension issue, Thai tax, FX and scams.', icon: '💷', priority: 1 },
  { slug: 'cost-of-living', title: 'Cost of Living', hubTitle: 'The Real Cost of Living in Pattaya', summary: 'Honest monthly budgets at lean, comfortable and premium tiers.', icon: '🧾', priority: 2 },
  { slug: 'housing', title: 'Housing', hubTitle: 'Housing: Renting & Buying in Pattaya', summary: 'Rent vs buy, foreign-ownership rules, and the quieter retiree areas.', icon: '🏠', priority: 2 },
  { slug: 'daily-life', title: 'Daily Life & Community', hubTitle: 'Daily Life & Community in Pattaya', summary: 'Clubs, friendship, faith, hobbies — and an honest look at loneliness.', icon: '🤝', priority: 2 },
  { slug: 'safety-scams', title: 'Safety & Scams', hubTitle: 'Safety & Scam Protection for Retirees', summary: 'A protective hub: the scams that target retirees, and how to stay safe.', icon: '🛡️', priority: 1 },
  { slug: 'getting-settled', title: 'Getting Settled', hubTitle: 'Getting Settled in Pattaya', summary: 'Bank accounts, SIM cards, driving licences, pets and shipping your life over.', icon: '🧳', priority: 3 },
  { slug: 'legal-end-of-life', title: 'Legal & End-of-Life', hubTitle: 'Legal & End-of-Life Planning Abroad', summary: 'Wills, power of attorney, and sparing your family stress. Handled with care.', icon: '📜', priority: 2 },
  { slug: 'reality-checks', title: 'Honest Reality Checks', hubTitle: 'Honest Reality Checks: Is Pattaya Right for You?', summary: 'Who should not retire here, first-year mistakes, and fair comparisons.', icon: '⚖️', priority: 2 },
];

/* ----------------------------------------------------------------------------
   TOOLS — interactive, client-side. Listed for nav + homepage.
---------------------------------------------------------------------------- */
export const TOOLS = [
  { slug: 'can-i-afford-to-retire-in-pattaya', title: 'Can I Afford to Retire in Pattaya?', summary: 'Your income, savings and lifestyle → monthly surplus and how long your money lasts.', status: 'live' },
  { slug: 'retirement-visa-eligibility-checker', title: 'Retirement Visa Eligibility Checker', summary: 'Your nationality, age and finances → likely visa route and a requirements checklist.', status: 'live' },
  { slug: 'health-insurance-cost-estimator', title: 'Health Insurance Cost Estimator', summary: 'Age band and coverage level → realistic premium ranges and what to watch for.', status: 'live' },
  { slug: 'cost-of-living-budget-builder', title: 'Cost-of-Living Budget Builder', summary: 'Build an itemised monthly budget in ฿ and your home currency.', status: 'live' },
  { slug: 'pension-fx-tool', title: 'Pension & Exchange-Rate Tool', summary: 'See how exchange-rate swings change your baht income month to month.', status: 'live' },
  { slug: 'which-pattaya-area', title: 'Which Pattaya Area Suits You?', summary: 'Answer four questions to find your best-fit neighbourhood, with reasons.', status: 'live' },
  { slug: 'where-in-thailand', title: 'Where in Thailand Should You Retire?', summary: 'Six questions match you to Pattaya, Phuket, Bangkok, Samui, Chiang Mai or Hua Hin.', status: 'live' },
] as const;

/* ----------------------------------------------------------------------------
   PRIMARY NAV — what shows in the header. Keep it short; depth lives in hubs.
---------------------------------------------------------------------------- */
export const PRIMARY_NAV = [
  { label: 'Start Here', href: '/start-here/' },
  { label: 'Visas', href: '/visas/' },
  { label: 'Healthcare', href: '/healthcare/' },
  { label: 'Money', href: '/money/' },
  { label: 'Cost of Living', href: '/cost-of-living/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'About', href: '/about/' },
];

/* ----------------------------------------------------------------------------
   GLOBAL DISCLAIMER — shown site-wide. The brand's ethical core.
---------------------------------------------------------------------------- */
export const GLOBAL_DISCLAIMER =
  'Information only — not financial, tax, legal, immigration, or medical advice. Visa, tax, insurance and legal rules change often; always verify with official sources and a licensed professional before acting.';

export const FOOTER_LEGAL_LINKS = [
  { label: 'About Us', href: '/about/' },
  { label: 'Editorial Standards', href: '/editorial-standards/' },
  { label: 'How We Research (Methodology)', href: '/methodology/' },
  { label: 'Full Disclaimer', href: '/disclaimer/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Contact', href: '/contact/' },
];

/* ----------------------------------------------------------------------------
   FORMS & MONETIZATION (no backend).
   Email capture posts directly to your email provider (ConvertKit / MailerLite /
   Buttondown / Beehiiv). Paste the form "action" URL from your provider here.
   Lead/affiliate links go out to partners. Nothing runs on a server of ours.
---------------------------------------------------------------------------- */
export const FORMS = {
  // Your ESP form-submit URL. Until set, the form shows a friendly "coming soon".
  newsletterAction: '',          // e.g. 'https://app.convertkit.com/forms/123456/subscriptions'
  newsletterHiddenFields: {} as Record<string, string>,
  // Where the insurance estimator sends a lead (an affiliate/partner form or your ESP).
  insuranceLeadAction: '',
};

export const AFFILIATES = {
  // Replace with your real referral links once you join each programme.
  wise: 'https://wise.com',
  insurance: '#',     // primary earner — your health-insurance partner
  visaService: '#',
  realEstate: '#',
};

export const LEAD_MAGNETS = [
  { id: 'starter-kit', title: 'The Honest Retire-in-Pattaya Starter Kit', blurb: 'A no-hype PDF covering the five things to get right first.', file: '/downloads/honest-starter-kit.pdf' },
  { id: 'insurance-checklist', title: 'Health Insurance Checklist', blurb: 'The questions to ask before you buy — and the traps to avoid.', file: '/downloads/insurance-checklist.pdf' },
  { id: 'visa-checklist', title: 'Retirement Visa Document Checklist', blurb: 'Everything you need for a retirement extension, in order.', file: '/downloads/visa-checklist.pdf' },
  { id: 'budget-worksheet', title: 'Monthly Budget Worksheet', blurb: 'A printable worksheet to build your honest monthly number, line by line.', file: '/downloads/budget-worksheet.pdf' },
];

/* ----------------------------------------------------------------------------
   ANALYTICS (privacy-friendly, off by default). Set provider + domain to switch
   on. No cookie banner needed for Plausible/Umami. Nothing loads until you set it.
---------------------------------------------------------------------------- */
export const ANALYTICS = {
  provider: '' as '' | 'plausible' | 'umami',
  domain: '',   // plausible: your site domain · umami: your website-id
  src: '',      // umami only: your script src URL
};

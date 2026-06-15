/* ============================================================================
   AFFORDABILITY BENCHMARKS — the only place to edit the calculator's numbers.
   Researched against reputable cost-of-living sources (ExpatDen, Wise, Numbeo)
   and live FX rates. Last reviewed: 2026-06-15. Ranges still vary a lot by
   person and lifestyle, and FX moves daily — the tool lets users override.
============================================================================ */

export const BENCHMARKS_META = {
  lastReviewed: '2026-06-15',
  sourceNote:
    'Monthly tiers from 2026 Pattaya cost-of-living research (ExpatDen, Wise). FX rates are mid-market as of June 2026 — users should set today’s rate. Re-check before relying on these.',
  currency: 'THB',
};

/* Monthly living cost by lifestyle tier, in Thai baht (THB), EXCLUDING health
   insurance (handled separately because it depends heavily on age).
   Research (2026, single person): lean ~35–45k, comfortable ~60–100k, premium 100k+. */
export interface Tier {
  id: 'lean' | 'comfortable' | 'premium';
  label: string;
  monthlyTHB: number;
  blurb: string;
  includes: string;
}

export const TIERS: Tier[] = [
  {
    id: 'lean',
    label: 'Lean',
    monthlyTHB: 40000,
    blurb: 'Careful, local-style living.',
    includes: 'Modest condo a little back from the beach, mostly Thai food and local markets, scooter or public transport, simple social life.',
  },
  {
    id: 'comfortable',
    label: 'Comfortable',
    monthlyTHB: 70000,
    blurb: 'The sweet spot most retirees aim for.',
    includes: 'Nice condo with a pool, a mix of Western and Thai dining, a car or regular taxis, an active social life and travel within Thailand.',
  },
  {
    id: 'premium',
    label: 'Premium',
    monthlyTHB: 130000,
    blurb: 'Spacious and worry-light.',
    includes: 'Larger condo or house, frequent Western dining, car, domestic help, regular international travel and a generous buffer.',
  },
];

/* Rough monthly health-insurance benchmark by age band, in THB. Based on 2026
   expat-insurance research (comprehensive cover ~US$80–700/mo by age). Varies
   hugely by insurer and health history — always get a real quote. */
export interface AgeBand {
  id: string;
  label: string;
  insuranceMonthlyTHB: number;
  note?: string;
}

export const AGE_BANDS: AgeBand[] = [
  { id: 'u60', label: 'Under 60', insuranceMonthlyTHB: 4000 },
  { id: '60s', label: '60–69', insuranceMonthlyTHB: 10000 },
  { id: '70s', label: '70–79', insuranceMonthlyTHB: 18000, note: 'Premiums rise sharply; pre-existing conditions are often excluded.' },
  { id: '80p', label: '80+', insuranceMonthlyTHB: 28000, note: 'Many insurers will not offer NEW cover at this age. Plan for this.' },
];

/* Exchange rates (THB per 1 unit), mid-market as of June 2026. FX moves daily —
   the tool lets the user type today's rate. */
export interface Currency {
  code: string;
  symbol: string;
  thbPerUnit: number;
}

export const CURRENCIES: Currency[] = [
  { code: 'GBP', symbol: '£', thbPerUnit: 44 },
  { code: 'USD', symbol: '$', thbPerUnit: 33 },
  { code: 'EUR', symbol: '€', thbPerUnit: 38 },
  { code: 'AUD', symbol: 'A$', thbPerUnit: 23 },
  { code: 'CAD', symbol: 'C$', thbPerUnit: 24 },
  { code: 'THB', symbol: '฿', thbPerUnit: 1 },
];

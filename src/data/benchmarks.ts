/* ============================================================================
   AFFORDABILITY BENCHMARKS — the only place to edit the calculator's numbers.
   ─────────────────────────────────────────────────────────────────────────
   ⚠ THESE ARE ILLUSTRATIVE PLACEHOLDER DEFAULTS so the tool works out of the box.
   Before you rely on them publicly, replace each with a researched, SOURCED
   figure (use the Perplexity research prompt in the prompt library), and update
   `lastReviewed` + `sourceNote`. The tool always lets the user override them.
============================================================================ */

export const BENCHMARKS_META = {
  lastReviewed: '2026-06-14',
  sourceNote:
    'Placeholder defaults pending verification. Replace with sourced figures (cost-of-living surveys, current FX, real insurance quotes) before publishing as fact.',
  currency: 'THB',
};

/* Monthly living cost by lifestyle tier, in Thai baht (THB), EXCLUDING health
   insurance (handled separately because it depends heavily on age). */
export interface Tier {
  id: 'lean' | 'comfortable' | 'premium';
  label: string;
  monthlyTHB: number;          // ⟨VERIFY⟩ illustrative placeholder
  blurb: string;
  includes: string;
}

export const TIERS: Tier[] = [
  {
    id: 'lean',
    label: 'Lean',
    monthlyTHB: 45000,
    blurb: 'Careful, local-style living.',
    includes: 'Modest condo a little back from the beach, mostly Thai food and local markets, scooter or public transport, simple social life.',
  },
  {
    id: 'comfortable',
    label: 'Comfortable',
    monthlyTHB: 75000,
    blurb: 'The sweet spot most retirees aim for.',
    includes: 'Nice condo with a pool, a mix of Western and Thai dining, a car or regular taxis, an active social life and travel within Thailand.',
  },
  {
    id: 'premium',
    label: 'Premium',
    monthlyTHB: 140000,
    blurb: 'Spacious and worry-light.',
    includes: 'Larger condo or house, frequent Western dining, car, domestic help, regular international travel and a generous buffer.',
  },
];

/* Rough monthly health-insurance placeholder by age band, in THB. Insurance
   varies enormously by person, insurer and health history — these are only a
   starting nudge. Always get a real quote (see the insurance estimator). */
export interface AgeBand {
  id: string;
  label: string;
  insuranceMonthlyTHB: number;  // ⟨VERIFY⟩ illustrative placeholder midpoint
  note?: string;
}

export const AGE_BANDS: AgeBand[] = [
  { id: 'u60', label: 'Under 60', insuranceMonthlyTHB: 5000 },
  { id: '60s', label: '60–69', insuranceMonthlyTHB: 9000 },
  { id: '70s', label: '70–79', insuranceMonthlyTHB: 18000, note: 'Premiums rise sharply; pre-existing conditions are often excluded.' },
  { id: '80p', label: '80+', insuranceMonthlyTHB: 30000, note: 'Many insurers will not offer NEW cover at this age. Plan for this.' },
];

/* Default exchange rates (THB per 1 unit of currency). FX moves daily — these
   are placeholders; the tool lets the user type today's rate. */
export interface Currency {
  code: string;
  symbol: string;
  thbPerUnit: number;          // ⟨VERIFY⟩ update to a recent rate
}

export const CURRENCIES: Currency[] = [
  { code: 'GBP', symbol: '£', thbPerUnit: 44 },
  { code: 'USD', symbol: '$', thbPerUnit: 35 },
  { code: 'EUR', symbol: '€', thbPerUnit: 38 },
  { code: 'AUD', symbol: 'A$', thbPerUnit: 23 },
  { code: 'CAD', symbol: 'C$', thbPerUnit: 25 },
  { code: 'THB', symbol: '฿', thbPerUnit: 1 },
];

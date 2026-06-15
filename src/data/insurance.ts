/* Health-insurance premium BENCHMARK RANGES (THB/month). Researched against 2026
   expat-insurance pricing (Pacific Prime, ExpatDen, insurance-thailand.com):
   comprehensive cover runs roughly US$80–200/mo under 60, rising to US$300–700/mo
   for 65–80. Converted at ~33 THB/USD. Insurance is intensely personal — these
   are orientation only; always get a real quote. Last reviewed 2026-06-15. */
export const INSURANCE_META = {
  lastReviewed: '2026-06-15',
  note: 'Researched ranges (2026). Real premiums depend on insurer, plan and health history — get a quote.',
};

export interface CoverageLevel {
  id: string;
  label: string;
  blurb: string;
  ranges: Record<string, [number, number]>; // [low, high] monthly THB by age band
}

export const COVERAGE_LEVELS: CoverageLevel[] = [
  {
    id: 'local', label: 'Local (Thailand only)',
    blurb: 'Inpatient cover at Thai hospitals. Cheapest; limited outside Thailand.',
    ranges: { u60: [2000, 4000], '60s': [4000, 8000], '70s': [8000, 14000], '80p': [14000, 24000] },
  },
  {
    id: 'standard', label: 'Standard (regional inpatient)',
    blurb: 'Broader inpatient cover across the region. A common middle choice.',
    ranges: { u60: [3000, 7000], '60s': [7000, 13000], '70s': [13000, 22000], '80p': [22000, 38000] },
  },
  {
    id: 'comprehensive', label: 'Comprehensive (international)',
    blurb: 'In- and out-patient, wide network, often worldwide. The most complete — and priciest.',
    ranges: { u60: [4000, 9000], '60s': [9000, 16000], '70s': [16000, 26000], '80p': [26000, 45000] },
  },
];

export const INSURANCE_AGE_BANDS = [
  { id: 'u60', label: 'Under 60' },
  { id: '60s', label: '60–69' },
  { id: '70s', label: '70–79', warn: 'Premiums rise sharply and pre-existing conditions are commonly excluded.' },
  { id: '80p', label: '80+', warn: 'Many insurers will not offer NEW cover at this age; some (e.g. Pacific Cross) accept to ~75. Securing cover earlier matters.' },
];

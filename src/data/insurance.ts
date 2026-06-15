/* Health-insurance premium BENCHMARK RANGES (THB/month). ⚠ ILLUSTRATIVE PLACEHOLDERS.
   Replace with researched ranges from real quotes/brokers before publishing as fact.
   Insurance is intensely personal — these are only a rough orientation. */
export const INSURANCE_META = {
  lastReviewed: '2026-06-14',
  note: 'Placeholder ranges pending verification with real broker quotes.',
};

export interface CoverageLevel {
  id: string;
  label: string;
  blurb: string;
  // [low, high] monthly THB by age band id (u60, 60s, 70s, 80p)
  ranges: Record<string, [number, number]>;
}

export const COVERAGE_LEVELS: CoverageLevel[] = [
  {
    id: 'local', label: 'Local (Thailand only)',
    blurb: 'Inpatient cover at Thai hospitals. Cheapest; limited outside Thailand.',
    ranges: { u60: [2500, 5000], '60s': [5000, 10000], '70s': [12000, 22000], '80p': [25000, 45000] },
  },
  {
    id: 'standard', label: 'Standard (regional inpatient)',
    blurb: 'Broader inpatient cover across the region. A common middle choice.',
    ranges: { u60: [5000, 10000], '60s': [10000, 20000], '70s': [22000, 40000], '80p': [45000, 80000] },
  },
  {
    id: 'comprehensive', label: 'Comprehensive (international)',
    blurb: 'In- and out-patient, wide network, often worldwide. The most complete — and priciest.',
    ranges: { u60: [10000, 20000], '60s': [20000, 40000], '70s': [45000, 80000], '80p': [90000, 160000] },
  },
];

export const INSURANCE_AGE_BANDS = [
  { id: 'u60', label: 'Under 60' },
  { id: '60s', label: '60–69' },
  { id: '70s', label: '70–79', warn: 'Premiums rise sharply and pre-existing conditions are commonly excluded.' },
  { id: '80p', label: '80+', warn: 'Many insurers will not offer NEW cover at this age. Securing cover earlier matters.' },
];

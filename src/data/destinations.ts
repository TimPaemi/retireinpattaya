/* Destination comparison data. Scores are ILLUSTRATIVE editorial ratings (1–5),
   meant as orientation, not precise facts. Higher = more favourable for a retiree.
   'warmth' = warmer climate; treat as a preference, not a verdict. */
export const DIMENSIONS = [
  { key: 'afford', label: 'Affordability' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'visa', label: 'Visa ease' },
  { key: 'warmth', label: 'Warm climate' },
  { key: 'english', label: 'English spoken' },
  { key: 'community', label: 'Expat community' },
  { key: 'safety', label: 'Everyday safety' },
  { key: 'proximity', label: 'Near UK/Europe' },
] as const;

export interface Destination {
  name: string; group: 'Thailand' | 'Country';
  afford: number; healthcare: number; visa: number; warmth: number;
  english: number; community: number; safety: number; proximity: number;
  downside: string;
}

export const DESTINATIONS: Destination[] = [
  { name: 'Pattaya (Thailand)', group: 'Thailand', afford: 4, healthcare: 4, visa: 4, warmth: 5, english: 4, community: 5, safety: 4, proximity: 2, downside: 'Choose your area to avoid the busy central strip.' },
  { name: 'Chiang Mai (Thailand)', group: 'Thailand', afford: 5, healthcare: 4, visa: 4, warmth: 4, english: 4, community: 5, safety: 4, proximity: 2, downside: 'Seasonal "burning season" air pollution.' },
  { name: 'Hua Hin (Thailand)', group: 'Thailand', afford: 4, healthcare: 3, visa: 4, warmth: 4, english: 3, community: 3, safety: 4, proximity: 2, downside: 'Quieter — some find it sleepy.' },
  { name: 'Phuket (Thailand)', group: 'Thailand', afford: 3, healthcare: 4, visa: 4, warmth: 5, english: 4, community: 4, safety: 4, proximity: 2, downside: 'Pricier and very touristy in parts.' },
  { name: 'Bangkok (Thailand)', group: 'Thailand', afford: 3, healthcare: 5, visa: 4, warmth: 5, english: 4, community: 5, safety: 3, proximity: 2, downside: 'Big-city pace, traffic and pollution.' },
  { name: 'Portugal', group: 'Country', afford: 3, healthcare: 4, visa: 3, warmth: 3, english: 4, community: 4, safety: 5, proximity: 5, downside: 'Cooler and pricier than SE Asia.' },
  { name: 'Spain', group: 'Country', afford: 3, healthcare: 5, visa: 3, warmth: 3, english: 3, community: 4, safety: 4, proximity: 5, downside: 'Higher cost; non-EU visa hurdles.' },
  { name: 'Vietnam', group: 'Country', afford: 5, healthcare: 3, visa: 2, warmth: 4, english: 3, community: 3, safety: 4, proximity: 2, downside: 'Visas are less retiree-friendly.' },
  { name: 'Philippines', group: 'Country', afford: 4, healthcare: 3, visa: 4, warmth: 5, english: 5, community: 4, safety: 3, proximity: 2, downside: 'Healthcare and safety vary by area.' },
  { name: 'Mexico', group: 'Country', afford: 4, healthcare: 4, visa: 3, warmth: 4, english: 3, community: 4, safety: 3, proximity: 4, downside: 'Safety varies greatly by region.' },
];

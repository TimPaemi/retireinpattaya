/* Data for the "Which Pattaya area suits you?" matcher. Editorial orientation. */
export const AREAS: Record<string, string> = {
  'Jomtien': 'A long, swimmable beach, a big expat community and a relaxed-but-lively pace — the most popular all-rounder for retirees.',
  'Pratumnak Hill': 'Leafy, residential and calm, tucked between the two beaches — quiet without being far from everything.',
  'Bang Saray': 'A laid-back former fishing village with a gentle, village pace and strong value — calm over convenience.',
  'Central Pattaya': 'Lively and ultra-convenient, never dull — best if you actively want the buzz and walkable everything.',
  'Naklua': 'Quieter and more local, just north of the busy centre — calm with the city still close by.',
};

// Each answer option contributes points to areas.
export const QUESTIONS = [
  { id: 'pace', q: 'What pace do you want day to day?', options: [
    { label: 'Lively and buzzing', pts: { 'Central Pattaya': 3, 'Jomtien': 1 } },
    { label: 'Relaxed but social', pts: { 'Jomtien': 3, 'Naklua': 1, 'Central Pattaya': 1 } },
    { label: 'Quiet and residential', pts: { 'Pratumnak Hill': 3, 'Naklua': 2, 'Bang Saray': 1 } },
    { label: 'Very quiet, village calm', pts: { 'Bang Saray': 3, 'Pratumnak Hill': 1 } },
  ]},
  { id: 'priority', q: "What matters most?", options: [
    { label: 'Beach life', pts: { 'Jomtien': 3, 'Central Pattaya': 1, 'Bang Saray': 1 } },
    { label: 'Community & social scene', pts: { 'Jomtien': 3, 'Central Pattaya': 2 } },
    { label: 'Value for money', pts: { 'Bang Saray': 3, 'Jomtien': 1 } },
    { label: 'Peace & calm', pts: { 'Pratumnak Hill': 3, 'Bang Saray': 2, 'Naklua': 2 } },
  ]},
  { id: 'budget', q: 'Your housing budget?', options: [
    { label: 'Lean', pts: { 'Bang Saray': 2, 'Jomtien': 1 } },
    { label: 'Comfortable', pts: { 'Jomtien': 2, 'Pratumnak Hill': 1, 'Naklua': 1 } },
    { label: 'Premium', pts: { 'Pratumnak Hill': 2, 'Naklua': 2 } },
  ]},
  { id: 'walk', q: 'Need everything within walking distance?', options: [
    { label: 'Yes, that matters to me', pts: { 'Jomtien': 2, 'Central Pattaya': 2, 'Naklua': 1 } },
    { label: 'Not essential', pts: { 'Bang Saray': 2, 'Pratumnak Hill': 1 } },
  ]},
];

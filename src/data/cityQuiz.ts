/* Data for the "Where in Thailand should you retire?" matcher. Editorial scoring. */
export interface CityInfo { name: string; url: string; blurb: string; }
export const CITIES: CityInfo[] = [
  { name: 'Pattaya', url: '/', blurb: 'A lively city-by-the-sea with strong healthcare, good value and a huge expat scene — plus calmer beach areas like Jomtien and Bang Saray.' },
  { name: 'Phuket', url: '/phuket/', blurb: 'Thailand’s scenic beach-and-resort island — international and beautiful, a bit pricier and spread out.' },
  { name: 'Bangkok', url: '/bangkok/', blurb: 'World-class healthcare and car-free city living with culture on tap — but pollution, heat and no beach.' },
  { name: 'Koh Samui', url: '/samui/', blurb: 'A relaxed Gulf island with good value and a tight community — more remote, with the mainland for complex care.' },
  { name: 'Chiang Mai', url: '/chiang-mai/', blurb: 'The best-value, cultured mountain city with a huge community — but a serious burning season (Feb–Apr).' },
  { name: 'Hua Hin', url: '/hua-hin/', blurb: 'A genteel, drier royal-resort town with golf, calm and Bangkok close by — quiet by design.' },
];

export const QUESTIONS = [
  { id: 'priority', q: 'What matters most to you?', options: [
    { label: 'Beaches & the sea', pts: { Phuket: 3, 'Koh Samui': 3, Pattaya: 2, 'Hua Hin': 2 } },
    { label: 'World-class healthcare', pts: { Bangkok: 3, Pattaya: 1, Phuket: 1 } },
    { label: 'Lowest cost / best value', pts: { 'Chiang Mai': 3, Pattaya: 1, 'Koh Samui': 1 } },
    { label: 'Culture & a cooler climate', pts: { 'Chiang Mai': 3, Bangkok: 1 } },
  ]},
  { id: 'pace', q: 'What pace suits you?', options: [
    { label: 'Big-city buzz', pts: { Bangkok: 3, Pattaya: 1 } },
    { label: 'Lively but relaxed', pts: { Pattaya: 3, Phuket: 2 } },
    { label: 'Quiet & genteel', pts: { 'Hua Hin': 3, 'Chiang Mai': 1, Pattaya: 1 } },
    { label: 'Island calm', pts: { 'Koh Samui': 3, Phuket: 1 } },
  ]},
  { id: 'health', q: 'How important is being near top hospitals?', options: [
    { label: 'Essential', pts: { Bangkok: 3, Pattaya: 1, 'Hua Hin': 1 } },
    { label: 'Nice to have', pts: { Phuket: 1, 'Chiang Mai': 1, Pattaya: 1 } },
    { label: "I'll travel for serious care", pts: { 'Koh Samui': 2, 'Chiang Mai': 1 } },
  ]},
  { id: 'air', q: 'How sensitive are you to air quality?', options: [
    { label: 'Very — I must avoid smoke/pollution', pts: { Pattaya: 2, 'Hua Hin': 2, Phuket: 2, 'Koh Samui': 2, 'Chiang Mai': -3, Bangkok: -1 } },
    { label: "Not a big concern", pts: { 'Chiang Mai': 2, Bangkok: 1 } },
  ]},
  { id: 'beach', q: 'Do you want a beach?', options: [
    { label: 'Must have', pts: { Phuket: 2, 'Koh Samui': 2, Pattaya: 2, 'Hua Hin': 1 } },
    { label: "Don't mind either way", pts: { Bangkok: 2, 'Chiang Mai': 2 } },
  ]},
  { id: 'budget', q: 'Your budget?', options: [
    { label: 'Tight', pts: { 'Chiang Mai': 2, Pattaya: 1, 'Koh Samui': 1, 'Hua Hin': 1 } },
    { label: 'Comfortable', pts: { Pattaya: 1, Phuket: 1, Bangkok: 1, 'Hua Hin': 1 } },
    { label: 'Generous', pts: { Phuket: 1, Bangkok: 1, 'Koh Samui': 1 } },
  ]},
];

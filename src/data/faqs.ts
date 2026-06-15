/* Site-wide FAQs for the /faq/ hub. Keep answers honest and plain.
   Volatile figures must stay ⟨VERIFY⟩ until sourced. */
export interface Faq { q: string; a: string; category: string; }

export const SITE_FAQS: Faq[] = [
  { category: 'Money', q: 'How much money do you really need to retire in Pattaya?', a: 'It depends heavily on your lifestyle and your health-insurance costs, which rise with age. We publish honest lean, comfortable and premium benchmarks and a free calculator so you can test your own numbers. Treat any single headline figure with suspicion.' },
  { category: 'Visas', q: 'Can I actually get a retirement visa for Thailand?', a: 'For most people aged 50 or over who meet a financial requirement, yes — there is a well-established legal route. The exact figures and paperwork change, so verify the current requirements before you rely on them.' },
  { category: 'Healthcare', q: 'Is healthcare in Pattaya any good?', a: 'Private hospitals in and near Pattaya provide care to international standards, often faster and cheaper than back home. The harder question is insurance as you age — which is why we treat it as the most important topic on the site.' },
  { category: 'Healthcare', q: 'What happens if I can’t get health insurance when I’m older?', a: 'This is the honest risk nobody likes to discuss. Cover gets pricier and harder to obtain with age and pre-existing conditions. Everyone considering a move should have a clear plan for this scenario before they commit.' },
  { category: 'Safety', q: 'Is Pattaya safe for retirees?', a: 'For most retirees, day-to-day life is safe and relaxed. The bigger risk is targeted scams — romance, investment and property cons aimed at older newcomers — which is why we run a dedicated protective section.' },
  { category: 'Lifestyle', q: 'Will I be lonely?', a: 'You can be, especially if you move alone or lose a partner — it is one of the most common reasons people return home. It is also very preventable. There is a large, active expat community, and we cover honestly how people build a real social life here.' },
  { category: 'Money', q: 'Will Thailand tax my pension?', a: 'Thailand’s rules on taxing income remitted into the country have been evolving. Whether and how your pension is affected depends on the current rules and your personal situation — ⟨VERIFY⟩ and take professional advice.' },
  { category: 'General', q: 'Who should NOT retire in Pattaya?', a: 'Anyone who depends on guaranteed affordable healthcare late in life and can’t plan for insurance gaps, anyone who would be isolated without nearby family, and anyone banking on rules and exchange rates never changing. We’d rather you find that out now.' },
];

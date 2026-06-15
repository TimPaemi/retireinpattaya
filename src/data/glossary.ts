/* Glossary terms. Add as many as you like — one object each. Rendered at /glossary/.
   Keep definitions plain and honest. Mark any volatile figure with ⟨VERIFY⟩. */
export interface GlossaryTerm {
  term: string;
  slug: string;
  category: 'Visas' | 'Money' | 'Healthcare' | 'Housing' | 'General';
  definition: string;
  whyItMatters?: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'Non-Immigrant O visa', slug: 'non-o-visa', category: 'Visas', definition: 'A category of long-stay visa that retirees commonly enter Thailand on before applying, inside the country, to extend their stay for retirement.', whyItMatters: 'It is the usual starting point for the most popular retirement route.' },
  { term: 'Retirement extension', slug: 'retirement-extension', category: 'Visas', definition: 'Permission to stay granted inside Thailand for the purpose of retirement, renewed each year, based on meeting an age and a financial requirement.', whyItMatters: 'This annual renewal is how most retirees stay long-term.' },
  { term: 'O-A visa', slug: 'o-a-visa', category: 'Visas', definition: 'A long-stay retirement visa applied for from your home country before travelling, which has carried a mandatory health-insurance requirement.', whyItMatters: 'The insurance condition can be a deciding factor for older applicants.' },
  { term: 'O-X visa', slug: 'o-x-visa', category: 'Visas', definition: 'A longer multi-year retirement visa open to a limited set of nationalities, with a higher financial bar.', whyItMatters: 'Fewer renewals, but not available to everyone.' },
  { term: 'LTR visa', slug: 'ltr-visa', category: 'Visas', definition: 'The Long-Term Resident visa, including a track for "wealthy pensioners" offering a long stay with less annual admin in exchange for a higher income threshold.', whyItMatters: 'Can mean far less yearly paperwork if your income qualifies.' },
  { term: '90-day report', slug: '90-day-report', category: 'Visas', definition: 'A requirement to notify immigration of your current address periodically while on a long stay.', whyItMatters: 'Missing it causes avoidable hassle and fines.' },
  { term: 'TM30', slug: 'tm30', category: 'Visas', definition: 'The notification of a foreigner’s address, usually filed by a landlord or hotel, that immigration may ask to see.', whyItMatters: 'A missing TM30 can hold up other immigration tasks.' },
  { term: 'Re-entry permit', slug: 're-entry-permit', category: 'Visas', definition: 'A permit obtained before leaving Thailand that preserves your existing extension of stay when you return.', whyItMatters: 'Leaving without one can cancel your permission to stay.' },
  { term: 'Seasoning (of funds)', slug: 'seasoning', category: 'Money', definition: 'The period a required sum must sit in a Thai bank account before (and sometimes after) a visa application.', whyItMatters: 'Money moved over too late will not count.' },
  { term: 'Remitted income', slug: 'remitted-income', category: 'Money', definition: 'Income you bring into Thailand, which is the focus of Thailand’s evolving rules on personal income tax for residents.', whyItMatters: 'It affects whether and how your money may be taxed locally — ⟨VERIFY current rules⟩.' },
  { term: 'Frozen pension', slug: 'frozen-pension', category: 'Money', definition: 'A UK State Pension that does not receive annual increases because the recipient lives in certain countries, including Thailand.', whyItMatters: 'Over years it can meaningfully erode a British retiree’s income.' },
  { term: 'IPMI', slug: 'ipmi', category: 'Healthcare', definition: 'International Private Medical Insurance — health cover designed for expatriates, often broader (and pricier) than local Thai policies.', whyItMatters: 'The type of policy shapes what — and where — you are covered.' },
  { term: 'Pre-existing condition', slug: 'pre-existing-condition', category: 'Healthcare', definition: 'A health condition you already have when applying for insurance, which insurers often exclude, load, or refuse to cover.', whyItMatters: 'It is the single biggest factor in what cover you can get later in life.' },
  { term: 'Foreign quota (condos)', slug: 'foreign-quota', category: 'Housing', definition: 'The share of a condominium building that may be foreign-owned (freehold), as opposed to Thai-owned.', whyItMatters: 'It determines whether you can legally own a particular unit outright.' },
];

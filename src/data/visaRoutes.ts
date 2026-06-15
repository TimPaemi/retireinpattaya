/* Visa route reference for the eligibility checker. Qualitative only —
   all figures are ⟨VERIFY⟩ by design and confirmed on the official sources. */
export const VISA_OFFICIAL = {
  immigration: 'https://www.immigration.go.th',
  ltr: 'https://ltr.boi.go.th',
  evisa: 'https://www.thaievisa.go.th',
};

export const VISA_CHECKLIST = [
  'Passport valid well beyond your intended stay',
  'Proof of funds: bank deposit (seasoned) and/or monthly income — ⟨VERIFY current amounts⟩',
  'A Thai bank account (for the deposit route)',
  'Health insurance meeting any required minimum — ⟨VERIFY by route⟩',
  'TM30 address notification on file',
  'Plan for 90-day reporting and a re-entry permit before any travel',
];

/* Visa route reference for the eligibility checker. Qualitative by design —
   we point to the official sources for current amounts rather than publish
   figures that can go stale on a live immigration site. */
export const VISA_OFFICIAL = {
  immigration: 'https://www.immigration.go.th',
  ltr: 'https://ltr.boi.go.th',
  evisa: 'https://www.thaievisa.go.th',
};

export const VISA_CHECKLIST = [
  'Passport valid well beyond your intended stay',
  'Proof of funds: a seasoned Thai bank deposit and/or monthly pension income — current amounts for your route are published on immigration.go.th',
  'A Thai bank account (for the deposit route)',
  'Health insurance to the minimum for your route (required for the O-A route) — confirm current cover on immigration.go.th',
  'TM30 address notification on file',
  'Plan for 90-day reporting and a re-entry permit before any travel',
];

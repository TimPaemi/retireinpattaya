/* Cost-of-living line items (THB/month). ⚠ ILLUSTRATIVE PLACEHOLDERS — verify & source.
   Each item has lean / comfortable / premium presets the user can override. */
export const BUDGET_META = { lastReviewed: '2026-06-15' };

export interface BudgetItem { id: string; label: string; hint?: string; lean: number; comfortable: number; premium: number; }

export const BUDGET_ITEMS: BudgetItem[] = [
  { id: 'rent', label: 'Housing / rent', hint: 'condo or house', lean: 12000, comfortable: 22000, premium: 48000 },
  { id: 'utilities', label: 'Utilities + internet', hint: 'electric, water, wifi', lean: 2500, comfortable: 4000, premium: 7000 },
  { id: 'groceries', label: 'Groceries', lean: 8000, comfortable: 13000, premium: 20000 },
  { id: 'dining', label: 'Eating out', lean: 5000, comfortable: 12000, premium: 26000 },
  { id: 'transport', label: 'Transport', hint: 'scooter, taxis, car', lean: 2000, comfortable: 5500, premium: 13000 },
  { id: 'insurance', label: 'Health insurance', hint: 'rises with age', lean: 5000, comfortable: 9000, premium: 18000 },
  { id: 'phone', label: 'Mobile', lean: 400, comfortable: 700, premium: 1200 },
  { id: 'leisure', label: 'Leisure + travel', lean: 3000, comfortable: 8000, premium: 22000 },
  { id: 'visa', label: 'Visa + admin', hint: 'monthly average', lean: 1000, comfortable: 1500, premium: 2500 },
  { id: 'buffer', label: 'Misc + buffer', hint: 'the bit people forget', lean: 4000, comfortable: 7000, premium: 15000 },
];

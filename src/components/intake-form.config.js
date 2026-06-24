// Intake form configuration — all brand/client content lives here.
// Edit this file per project; the IntakeForm component stays generic.

// Company identity. Used in the submit-error fallback message.
export const BRAND = { name: 'Edison Association Management', phone: '(407) 317-5252' };

// Call-tracking integration (WhatConverts). Any intent id listed in `intents`
// renders the tracked form id (`formId`); all others use 'intake-form'.
export const TRACKING = { formId: 'lead-form', intents: ['proposal'] };

// Intents drive the multi-step picker, the per-intent fields, and routing copy.
export const INTENTS = [
  {
    id: 'proposal', label: 'Request a proposal', icon: 'building', tone: 'teal', hot: true,
    blurb: 'Our board is exploring new management.', forWho: 'HOA & condo boards',
    routeTo: 'Edison’s leadership team', fields: [
      { key: 'company', label: 'Community / association name', type: 'text', required: true, placeholder: 'e.g. Heathrow Master Association', col: 2 },
      { key: 'communityType', label: 'Community type', type: 'select', required: true, options: ['HOA (single-family)', 'Townhome', 'Condominium', 'Master / mixed'] },
      { key: 'units', label: 'Approx. units', type: 'select', required: false, options: ['Under 100', '100–299', '300–599', '600+'] },
      { key: 'timeline', label: 'Timeline', type: 'radio', required: true, options: ['ASAP', '1–3 months', 'Just exploring'], col: 2 },
    ],
  },
  {
    id: 'service', label: 'Resident or board request', icon: 'wrench', tone: 'navy',
    blurb: 'I’m in an Edison-managed community and need something handled.', forWho: 'Current communities',
    routeTo: 'your community manager', fields: [
      { key: 'company', label: 'Community name', type: 'text', required: true, placeholder: 'Your association', col: 2 },
      { key: 'category', label: 'About', type: 'select', required: true, options: ['Account / payment', 'Maintenance / common area', 'Covenant / ARC', 'Documents / portal access', 'Other'] },
      { key: 'urgency', label: 'Urgency', type: 'radio', required: true, options: ['Routine', 'Urgent'], col: 2 },
    ],
  },
  {
    id: 'general', label: 'General question', icon: 'chat', tone: 'gold',
    blurb: 'Something else — just reaching out.', forWho: 'Anyone',
    routeTo: 'the Edison front desk', fields: [],
  },
];

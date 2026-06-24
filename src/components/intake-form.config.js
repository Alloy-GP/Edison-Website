// Intake form configuration — all brand/client content lives here.
// Edit this file per project; the IntakeForm component stays generic.

// Company identity. Used in the submit-error fallback message.
export const BRAND = { name: 'Edison Association Management', phone: '(407) 317-5252' };

// Call-tracking integration (e.g. WhatConverts). Any intent id listed in
// `intents` renders the tracked form id (`formId`); all others use 'intake-form'.
export const TRACKING = { formId: 'lead-form', intents: ['proposal'] };

// Intents drive the multi-step picker, the per-intent fields, and routing copy.
export const INTENTS = [
  {
    id: 'proposal', label: 'Request a proposal', icon: 'building', tone: 'teal',
    blurb: 'I’m interested in working with you.', forWho: 'Prospective clients',
    routeTo: 'our team', fields: [
      { key: 'company', label: 'Company / organization', type: 'text', required: true, placeholder: 'e.g. Acme Co.', col: 2 },
      { key: 'projectType', label: 'What do you need?', type: 'select', required: true, options: ['New project', 'Ongoing service', 'Not sure yet'] },
      { key: 'timeline', label: 'Timeline', type: 'radio', required: true, options: ['ASAP', '1–3 months', 'Just exploring'], col: 2 },
    ],
  },
  {
    id: 'service', label: 'Service request', icon: 'wrench', tone: 'sage',
    blurb: 'I’m a current client and need something handled.', forWho: 'Current clients',
    routeTo: 'your account manager', fields: [
      { key: 'reference', label: 'Account / reference', type: 'text', required: true, placeholder: 'e.g. account # or name', col: 2 },
      { key: 'category', label: 'Category', type: 'select', required: true, options: ['Billing', 'Technical', 'General', 'Other'] },
      { key: 'urgency', label: 'Urgency', type: 'radio', required: true, options: ['Routine', 'Urgent'], col: 2 },
    ],
  },
  {
    id: 'general', label: 'General question', icon: 'chat', tone: 'gold',
    blurb: 'Something else — just reaching out.', forWho: 'Anyone',
    routeTo: 'our front desk', fields: [],
  },
];

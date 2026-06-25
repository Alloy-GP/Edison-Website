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
    id: 'bid', label: 'Submit a bid', icon: 'hardhat', tone: 'sage',
    blurb: 'I’m a vendor who wants to work with you.', forWho: 'Contractors & service vendors',
    routeTo: 'Edison’s operations team', fields: [
      { key: 'company', label: 'Company', type: 'text', required: true, placeholder: 'Your company name', col: 2 },
      { key: 'trade', label: 'Trade / service', type: 'text', required: true, placeholder: 'e.g. landscaping, roofing' },
      { key: 'serviceArea', label: 'Service area', type: 'text', required: false, placeholder: 'Counties / cities served' },
    ],
  },
  {
    id: 'general', label: 'General question', icon: 'chat', tone: 'gold',
    blurb: 'Something else — just reaching out.', forWho: 'Anyone',
    routeTo: 'our front desk', fields: [],
  },
];

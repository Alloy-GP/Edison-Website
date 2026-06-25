// Intake form configuration — all brand/client content lives here.
// Edit this file per project; the IntakeForm component stays generic.

// Company identity. Used in the submit-error fallback message.
export const BRAND = { name: 'Edison Association Management', phone: '(407) 317-5252' };

// Call-tracking integration (e.g. WhatConverts). Any intent id listed in
// `intents` renders the tracked form id (`formId`); all others use 'intake-form'.
export const TRACKING = { formId: 'lead-form', intents: ['proposal'] };

// Intents drive the multi-step picker, the per-intent fields, and routing copy.
// Audience-led: each option speaks to WHO the visitor is, not the action.
// An intent with a `redirect` URL skips the form and sends them straight there
// (e.g. a vendor portal / software) when picked.
export const INTENTS = [
  {
    id: 'proposal', label: 'I’m on an HOA or condo board', icon: 'users', tone: 'teal', hot: true,
    blurb: 'We’re exploring new management and want a proposal.', forWho: 'Boards & directors',
    routeTo: 'Edison’s leadership team', fields: [
      { key: 'company', label: 'Community / association name', type: 'text', required: true, placeholder: 'e.g. Heathrow Master Association', col: 2 },
      { key: 'communityType', label: 'Community type', type: 'select', required: true, options: ['HOA (single-family)', 'Townhome', 'Condominium', 'Master / mixed'] },
      { key: 'timeline', label: 'Timeline', type: 'radio', required: true, options: ['ASAP', '1–3 months', 'Just exploring'], col: 2 },
    ],
  },
  {
    id: 'vendor', label: 'I’m a vendor', icon: 'hardhat', tone: 'sage',
    blurb: 'I want to work with Edison’s communities.', forWho: 'Contractors & service vendors',
    // TODO: replace with the real vendor software / registration URL
    redirect: 'https://edisonassociationmanagement.com/vendors',
  },
  {
    id: 'homeowner', label: 'I’m a homeowner', icon: 'home', tone: 'ocean',
    blurb: 'I have a question about my account.', forWho: 'Residents & owners',
    routeTo: 'your community team', fields: [
      { key: 'community', label: 'Community or address', type: 'text', required: false, placeholder: 'Helps us find your account', col: 2 },
    ],
  },
  {
    id: 'general', label: 'Something else', icon: 'chat', tone: 'gold',
    blurb: 'Just reaching out — general contact.', forWho: 'Anyone',
    routeTo: 'the Edison front desk', fields: [],
  },
];

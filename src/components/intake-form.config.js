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
    id: 'proposal', label: 'I’m on a board', icon: 'users', tone: 'teal', hot: true,
    blurb: 'We’re exploring new management and want a proposal.', forWho: 'Boards & directors',
    routeTo: 'Edison’s leadership team', fields: [
      { key: 'company', label: 'Association / community name', type: 'text', required: true, placeholder: 'e.g. Wynbrook HOA', col: 2 },
      { key: 'units', label: 'Number of units', type: 'select', required: true, options: ['1–50', '51–150', '151–400', '400+'] },
      { key: 'propertyType', label: 'Property type', type: 'select', required: true, options: ['HOA', 'Condominium', 'Townhome', 'Master-planned', 'Commercial / mixed-use', 'Rental property'] },
      { key: 'situation', label: 'Current situation', type: 'select', required: true, options: ['Self-managed today', 'Unhappy with current manager', 'Contract ending soon', 'Just exploring'], col: 2 },
      { key: 'timeline', label: 'Decision timeline', type: 'radio', required: true, options: ['ASAP', '1–3 months', 'Just researching'], col: 2 },
    ],
  },
  {
    id: 'vendor', label: 'I’m a vendor', icon: 'hardhat', tone: 'sage',
    blurb: 'I want to work with Edison’s communities.', forWho: 'Contractors & service vendors',
    routeTo: 'Edison’s operations team', fields: [
      { key: 'company', label: 'Company', type: 'text', required: true, placeholder: 'Company name', col: 2 },
      { key: 'trade', label: 'Trade / service', type: 'text', required: true, placeholder: 'e.g. landscaping, roofing' },
      { key: 'serviceArea', label: 'Service area', type: 'text', required: false, placeholder: 'Counties / cities served' },
    ],
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

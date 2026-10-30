// Intake form configuration — all brand/client content lives here.
// Edit this file per project; the IntakeForm component stays generic.
//
// ⚠️  THE PROPOSAL FORM IS CANONICAL ACROSS ALL AGP SITES.
// Its field SET (which fields, their labels, order, types, and the 3-step
// wizard) is fixed inside IntakeForm.jsx and must stay identical on every
// site. Per site you customize ONLY:
//   • PROPOSAL_OPTIONS / PROPOSAL_V2 — the dropdown / chip choices (these vary)
//   • PROPOSAL_COPY    — the proposal intent's brand voice
//   • the --if-* theme vars in src/styles/intake-form.theme.css (brand colors/fonts)
//   • EXTRA_INTENTS    — any non-proposal request types
// Do NOT add/remove/rename proposal fields. See "Syncing the proposal form
// from the starter" in CLAUDE.md.
//
// Edison moved from the classic single-step proposal to the canonical wizard on
// 2026-10-30. The old "Service level of interest" question has no canonical
// field; the service-levels pages now link with ?context=Service%20level%3A%20…,
// which the wizard shows as a note and sends as the "Context" answer.

// Company identity. Used in the submit-error fallback message.
export const BRAND = { name: 'Edison Association Management', phone: '(407) 317-5252' };

// Call-tracking integration (e.g. WhatConverts). Any intent id listed in
// `intents` renders the tracked form id (`formId`); all others use 'intake-form'.
export const TRACKING = { formId: 'lead-form', intents: ['proposal'] };

// ── Proposal options (VARY per site) — used by the classic v1 form only ──
export const PROPOSAL_OPTIONS = {
  propertyType: ['HOA', 'Condominium', 'Townhome', 'Master-planned', 'Commercial / mixed-use', 'Rental property'],
  situation:    ['Self-managed today', 'Unhappy with current manager', 'Contract ending soon', 'Just exploring'],
  timeline:     ['ASAP', '1–3 months', 'Just researching'],
};

// ── Proposal intent copy (brand voice — NOT the field set) ───────────────
export const PROPOSAL_COPY = {
  blurb:   'We’re a board exploring new management.',
  forWho:  'Boards & HOA / condo directors — not for residents',
  routeTo: 'Edison’s leadership team',
};

// ── Proposal form VERSION ────────────────────────────────────────────────
// 1 = the classic single-step proposal. 2 = the guided 3-step wizard
// (You → Your community → What you need) with held partial-lead capture.
export const PROPOSAL_FORM_VERSION = 2;

// ── Proposal v2 option lists (VARY per site) ─────────────────────────────
// The v2 field SET + step order are canonical (locked in IntakeForm.jsx).
// Only these choice lists + multi-select chips change per site.
export const PROPOSAL_V2 = {
  // 'Property owner / resident' comes FIRST: step 1 opens with this question so a
  // homeowner who picked the proposal form by mistake is offered the resident form
  // before typing anything (the rest of step 1 locks until they Continue or change
  // role). Most "Started (incomplete)" proposals were exactly these people.
  roles: ['Property owner / resident', 'Board President', 'Vice President', 'Treasurer', 'Secretary', 'Board Member', 'Other'],
  // Roles that mean "I'm not a board decision-maker". Picking one locks the
  // contact fields and Continue goes to `residentIntent` (an EXTRA_INTENTS id;
  // default 'resident', else 'general'). Remove residentRoles to turn the exit off.
  residentRoles: ['Property owner / resident'],
  residentIntent: 'homeowner',
  // OPTIONAL off-ramp: if set, when step 1's role is one of these the wizard
  // shows a soft nudge to the resident intent (proposals are for boards). Needs
  // a matching EXTRA_INTENT id `resident` to route to. Omit (as below) to
  // disable the nudge entirely — the canonical wizard stays inert without it.
  // residentRoles: ['Property owner / resident'],
  communityType: ['Single-family HOA', 'Townhomes', 'Condominium', 'Master-planned', 'High-rise', 'Mixed-use'],
  managementStatus: ['Self-managed by the board', 'Switching from another manager', 'New construction / developer-controlled', 'Other'],
  // How often the association bills its dues. Pairs with the free-text "Dues per
  // unit" box on step 2 (both optional — many board members don't know offhand).
  collectionCycle: ['Monthly', 'Quarterly', 'Semi-annually', 'Annually'],
  amenities: ['Community pool', 'Clubhouse', 'Fitness center', 'Gated entry', 'Walking trails', 'Tennis / pickleball', 'Playground', 'Elevators', 'Controlled access / security', 'Common-area landscaping'],
  services: ['Full financial management', 'Vendor coordination', 'Compliance & insurance', 'Board meeting support', 'Resident communication', 'Collections / delinquency', 'Reserve planning', 'After-hours emergency', 'Maintenance coordination'],
  painPoints: [
    'Slow communication — missed calls, no follow-through',
    'Delinquency creeping up — collections aren’t working',
    'Manager turnover — constant relationship rebuilding',
    'Financial opacity — we don’t see our own books',
    'Reactive maintenance — problems only fixed after they escalate',
    'Worried about disruption when switching providers',
    'Volunteer burden — the board is burning out',
    'Compliance pressure — fair housing, fiduciary, state law',
    'Dated tech — no real portal or app',
    'Homeowner apathy — no one sees the HOA’s value',
  ],
  budget: ['Open — looking for the right fit, not the cheapest', 'Cost-sensitive — need a lean option', 'Financial management only to start', 'Premium — full service expected'],
  timeline: ['Immediately', 'Within 60 days', 'This quarter', 'Just exploring'],
};

// ── Extra intents (FULLY customizable per site) ──────────────────────────
// Everything beyond the canonical proposal. Add / remove / edit freely.
// Field shape: { key, label, type:'text'|'select'|'radio', required,
//   options?, placeholder?, inputMode?, maxLength?, col? }  (col:2 = full width)
export const EXTRA_INTENTS = [
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
    // The wizard's resident off-ramp lands here (PROPOSAL_V2.residentIntent).
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

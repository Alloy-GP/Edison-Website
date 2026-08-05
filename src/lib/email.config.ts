// src/lib/email.config.ts
// The only file you edit per client for email setup.
// All API routes (contact.ts, lead.ts, subscribe.ts) read from here.

export const EMAIL_CONFIG = {

  // ── Client brand identity. Used in headings, signatures, and links. ──
  brand: {
    name: 'Edison Association Management',
    url:  'https://edisonassociationmanagement.com',
    team: 'The Edison team',
  },

  // ── Both addresses must be from a domain verified in Resend. ──
  from: {
    notifications: 'Edison Association Management <notifications@edisonassociationmanagement.com>',
    hello:         'Edison Association Management <hello@edisonassociationmanagement.com>',
  },

  // ── Replies to our emails route to this monitored inbox. ──
  replyTo: 'admin@edison-mgmt.com',

  // ── Default inbox — used by unknown/unrouted intents (fallback). ──
  notify: [
    'admin@edison-mgmt.com',
  ],

  // ── Failure-alert inbox. Handlers send the email-fallback alert here
  // when a notification send fails (see form-alert.ts). ──
  alertsTo: [
    'admin@edison-mgmt.com',
  ],

  // ── TEMPORARY: CC'd on every lead notification (Alloy monitoring).
  // Remove this when no longer needed. ──
  ccAll: ['admin@alloygp.co'],

  // ── Per-intent routing. The intake form sends an `intent`; /api/lead routes
  // the staff notification to the matching list (falls back to `notify`).
  // Proposals → Tracy; everything else → the admin inbox. ──
  routes: {
    proposal:  ['tdurham@edison-mgmt.com'],
    vendor:    ['admin@edison-mgmt.com'],
    homeowner: ['admin@edison-mgmt.com'],
    general:   ['admin@edison-mgmt.com'],
    // Newsletter "Ask Edison" questions (/api/newsletter-ask).
    // TODO(Edison): confirm the inbox that owns the 1-business-day reply promise.
    newsletter: ['admin@edison-mgmt.com'],
  } as Record<string, string[]>,

  mailchimp: {
    enabled:     true,      // set false if client has no Mailchimp
    defaultTags: ['website-lead'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // PER-INTENT EMAIL CONTENT  (intake form → /api/lead)
  // Each intent key matches the form's intent id (proposal | service | general).
  // `default` is the fallback for any unknown intent.
  // ───────────────────────────────────────────────────────────────────────────
  intents: {
    proposal: {
      label: 'Proposal Request',
      notifySubject: (who: string) => `New proposal request — ${who}`,
      confirmSubject: 'We received your proposal request — Edison Association Management',
      confirmBody: () =>
        `<p>Thank you for reaching out to Edison Association Management.</p>
        <p>We've received your request and a Senior member of our team will review your community's details and follow up within one business day to talk through what management with Edison would look like.</p>
        <p>If it's urgent, call us anytime at (407) 317-5252.</p>
        <p>Have a BRIGHT day!</p>
        <p>Sincerely,<br>The Edison Team</p>`,
    },
    vendor: {
      label: 'Vendor Bid',
      notifySubject: (who: string) => `New vendor bid — ${who}`,
      confirmSubject: 'We received your information — Edison Association Management',
      confirmBody: () =>
        `<p>Thanks for your interest in working with Edison Association Management.</p>
        <p>We've received your information and our operations team will review it. If your services are a fit for the communities we manage, we'll be in touch.</p>
        <p>Have a BRIGHT day!</p>
        <p>Sincerely,<br>The Edison Team</p>`,
    },
    homeowner: {
      label: 'Homeowner Question',
      notifySubject: (who: string) => `New homeowner question — ${who}`,
      confirmSubject: 'We received your question — Edison Association Management',
      confirmBody: () =>
        `<p>Thanks for reaching out.</p>
        <p>Your question has been logged and routed to your community team. Someone will follow up with you within one business day.</p>
        <p>Need something urgently? Call us at (407) 317-5252.</p>
        <p>Have a BRIGHT day!</p>
        <p>Sincerely,<br>The Edison Team</p>`,
    },
    general: {
      label: 'General Question',
      notifySubject: (who: string) => `New general inquiry — ${who}`,
      confirmSubject: 'We received your message — Edison Association Management',
      confirmBody: () =>
        `<p>Thanks for getting in touch with Edison Association Management.</p>
        <p>We've received your message and will make sure it reaches the right person. Expect to hear back within one business day.</p>
        <p>Have a BRIGHT day!</p>
        <p>Sincerely,<br>The Edison Team</p>`,
    },
    default: {
      label: 'Inquiry',
      notifySubject: (who: string) => `New inquiry — ${who}`,
      confirmSubject: 'We received your message — Edison Association Management',
      confirmBody: () =>
        `<p>Thanks for getting in touch with Edison Association Management.</p>
        <p>We've received your message and a member of our team will follow up within one business day.</p>
        <p>Have a BRIGHT day!</p>
        <p>Sincerely,<br>The Edison Team</p>`,
    },
  } as Record<string, {
    label: string;
    notifySubject: (who: string) => string;
    confirmSubject: string;
    confirmBody: (firstName: string, siteUrl: string) => string;
  }>,

  // ── Confirmation copy for the contact + subscribe forms.
  // (contact.ts / subscribe.ts read these — keep both keys.) ──
  copy: {
    contact: {
      confirmSubject: 'We received your message',
      confirmBody: (name: string, _siteUrl: string) =>
        `<p>Hi ${name},</p>
        <p>Thanks for reaching out. We typically respond within one business day.</p>
        <p>Have a BRIGHT day!</p>
        <p>Sincerely,<br>The Edison Team</p>`,
    },
    subscribe: {
      confirmSubject: "You're on the list",
      confirmBody: (name: string) =>
        `<p>Hi${name ? ` ${name}` : ''},</p>
        <p>Thanks for subscribing. We'll be in touch soon.</p>
        <p>Have a BRIGHT day!</p>
        <p>Sincerely,<br>The Edison Team</p>`,
    },
    // Newsletter "Ask Edison" form (/api/newsletter-ask).
    newsletterAsk: {
      notifySubject: (who: string) => `New newsletter question — ${who}`,
      confirmSubject: 'We received your question — Edison Association Management',
      confirmBody: (name: string) =>
        `<p>Hi${name ? ` ${name}` : ''},</p>
        <p>Thanks for your question. A licensed manager will reply directly — usually within one business day.</p>
        <p>If it's urgent, call us anytime at (407) 317-5252.</p>
        <p>Have a BRIGHT day!</p>
        <p>Sincerely,<br>The Edison Team</p>`,
    },
  },
};

// src/pages/api/newsletter-ask.ts
// Handles the /newsletter "Ask Edison" form.
// Two jobs, in order:
//   1. Upsert the asker into Mailchimp (non-fatal — logged and skipped on error).
//   2. Email the actual question to Edison (fatal — a human seeing it is the
//      whole point, so we only return 200 when this send succeeds).
// A confirmation to the asker is sent last, best-effort.
//
// DO NOT edit routing/copy here per client — update src/lib/email.config.ts.
// Reuses the site's global settings: MAILCHIMP_AUDIENCE_ID, Resend, EMAIL_CONFIG.

import type { APIRoute } from 'astro';
import crypto from 'node:crypto';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { Resend } from 'resend';
import { EMAIL_CONFIG } from '~/lib/email.config';
import { sendWithAlert } from '~/lib/form-alert';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const FORM_ALERT_SLACK_URL = import.meta.env.FORM_ALERT_SLACK_URL;

if (EMAIL_CONFIG.mailchimp.enabled) {
  mailchimp.setConfig({
    apiKey: import.meta.env.MAILCHIMP_API_KEY,
    server: import.meta.env.MAILCHIMP_SERVER_PREFIX,
  });
}

const esc = (s: string) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));

    // Honeypot — bots fill hidden fields, humans don't.
    if (body.website) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    const FNAME = (body.FNAME ?? '').toString().trim();
    const LNAME = (body.LNAME ?? '').toString().trim();
    const email = (body.EMAIL ?? '').toString().trim().toLowerCase();
    const COMMUNITY = (body.COMMUNITY ?? '').toString().trim();
    const ROLE = (body.ROLE ?? '').toString().trim();
    const QUESTION = (body.QUESTION ?? '').toString().trim();
    const issueSlug = (body.issueSlug ?? '').toString().trim();
    const issueLabel = (body.issueLabel ?? '').toString().trim();
    const subscribe = body.subscribe === true || body.subscribe === 'on';

    if (!FNAME || !email.includes('@') || !QUESTION) {
      return new Response(JSON.stringify({ error: 'Name, a valid email, and a question are required.' }), {
        status: 400,
      });
    }

    // ── 1. Upsert the contact (non-fatal). PUT-by-hash never errors on an
    //       existing member, and status_if_new only applies to new contacts, so
    //       an existing subscriber who unchecks the box is never downgraded.
    if (EMAIL_CONFIG.mailchimp.enabled) {
      try {
        const hash = crypto.createHash('md5').update(email).digest('hex');
        const merge_fields: Record<string, string> = { FNAME, LNAME };
        if (COMMUNITY) merge_fields.COMMUNITY = COMMUNITY;
        if (ROLE) merge_fields.ROLE = ROLE;
        await mailchimp.lists.setListMember(import.meta.env.MAILCHIMP_AUDIENCE_ID, hash, {
          email_address: email,
          status_if_new: subscribe ? 'subscribed' : 'transactional',
          merge_fields,
          tags: issueSlug ? [`asked-${issueSlug}`] : undefined,
        });
      } catch (err: any) {
        // Missing COMMUNITY/ROLE merge fields or a "looks fake" verdict land
        // here — log and still email the question. A manager can reply by hand.
        console.error('[newsletter-ask] Mailchimp upsert failed:', err?.response?.body ?? err);
      }
    }

    // ── 2. Email the question to Edison (fatal). sendWithAlert re-throws on
    //       failure, so a bad send falls through to the 502 below.
    const who = `${FNAME} ${LNAME}`.trim() || email;
    const to = EMAIL_CONFIG.routes.newsletter ?? EMAIL_CONFIG.notify;
    const notifyHtml =
      `<h2 style="color:#1B2A4A;margin:0 0 12px">New newsletter question — ${esc(issueLabel || 'Ask Edison')}</h2>` +
      `<p style="font-size:16px;line-height:1.6"><strong>Question:</strong><br>${esc(QUESTION).replace(/\n/g, '<br>')}</p>` +
      `<hr style="border:none;border-top:1px solid #E5E7EB;margin:18px 0">` +
      `<p><strong>Name:</strong> ${esc(who)}</p>` +
      `<p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>` +
      (COMMUNITY ? `<p><strong>Community/association:</strong> ${esc(COMMUNITY)}</p>` : '') +
      (ROLE ? `<p><strong>Role:</strong> ${esc(ROLE)}</p>` : '') +
      `<p><strong>Issue:</strong> ${esc(issueLabel)} ${issueSlug ? `(${esc(issueSlug)})` : ''}</p>` +
      `<p style="color:#6B7280;font-size:13px">Subscribed to newsletter: ${subscribe ? 'yes' : 'no'}</p>`;

    await sendWithAlert(
      {
        client: EMAIL_CONFIG.brand.name,
        formName: 'Newsletter Ask form',
        slackWebhookUrl: FORM_ALERT_SLACK_URL,
        alertEmail: {
          apiKey: import.meta.env.RESEND_API_KEY,
          to: EMAIL_CONFIG.alertsTo,
          from: EMAIL_CONFIG.from.notifications,
        },
      },
      () =>
        resend.emails.send({
          from: EMAIL_CONFIG.from.notifications,
          to,
          cc: EMAIL_CONFIG.ccAll,
          replyTo: email, // reply goes straight to the person who asked
          subject: EMAIL_CONFIG.copy.newsletterAsk.notifySubject(who),
          html: notifyHtml,
        })
    );

    // ── 3. Confirmation to the asker (best-effort). ──
    try {
      await resend.emails.send({
        from: EMAIL_CONFIG.from.hello,
        to: email,
        replyTo: EMAIL_CONFIG.replyTo,
        subject: EMAIL_CONFIG.copy.newsletterAsk.confirmSubject,
        html: EMAIL_CONFIG.copy.newsletterAsk.confirmBody(FNAME),
      });
    } catch (err) {
      console.error('[newsletter-ask] asker confirmation failed:', err);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('[newsletter-ask] error:', err);
    return new Response(JSON.stringify({ error: "That didn't go through. Please try again." }), {
      status: 502,
    });
  }
};

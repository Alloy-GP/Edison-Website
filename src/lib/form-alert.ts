// src/lib/form-alert.ts
//
// Submission-side failure alerting for client form handlers.
//
// The Resend→Slack webhook already catches DELIVERY-side problems (bounced,
// complained, delayed, failed) — those happen AFTER Resend accepts the email.
// This helper covers the OTHER failure mode: when the send call to Resend
// never succeeds at all (bad API key, Resend outage, network error, malformed
// request). In that case no webhook event is ever created, so without this the
// failure is completely silent.
//
// Usage: wrap your existing resend.emails.send(...) call with sendWithAlert().
// On any thrown error OR error-shaped response, it fires every configured alert
// channel (Slack + email fallback), then re-throws so your handler logic is
// unchanged.
//
// In this starter, all three API routes (contact/lead/subscribe) read env via
// import.meta.env, so they pass slackWebhookUrl explicitly. The process.env
// default below remains as a fallback for other runtimes.

interface SendAlertOptions {
  client: string;           // e.g. "Acme Co" — shows in the alert
  formName?: string;        // e.g. "Contact form" — optional context
  slackWebhookUrl?: string; // defaults to process.env.FORM_ALERT_SLACK_URL
  // Email fallback alert — fires alongside Slack so alerting works even when no
  // Slack webhook is configured. Sent via Resend's REST API directly (no SDK).
  // Note: a TOTAL Resend outage/auth failure will also block this email, so
  // Slack remains the only channel guaranteed to survive that case.
  alertEmail?: {
    apiKey: string;
    to: string | string[];
    from: string;
  };
}

// Post a submission-failure message to Slack. Never throws — alerting must not
// break the request flow.
async function postFailureToSlack(
  opts: SendAlertOptions,
  errorMessage: string,
  detail?: string
): Promise<void> {
  const url = opts.slackWebhookUrl ?? process.env.FORM_ALERT_SLACK_URL;
  if (!url) {
    console.error('FORM_ALERT_SLACK_URL not set — cannot post form failure alert');
    return;
  }

  const blocks = [
    {
      type: 'header',
      text: { type: 'plain_text', text: `🚨 Form send failed — ${opts.client}` },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Client:*\n${opts.client}` },
        { type: 'mrkdwn', text: `*Form:*\n${opts.formName ?? '—'}` },
        { type: 'mrkdwn', text: `*Error:*\n${errorMessage}` },
        { type: 'mrkdwn', text: `*When:*\n${new Date().toISOString()}` },
      ],
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text:
            'Submission-side failure: the email was never accepted by Resend, ' +
            'so no delivery webhook will fire for this.' +
            (detail ? `\n\`${detail}\`` : ''),
        },
      ],
    },
  ];

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🚨 Form send failed — ${opts.client}: ${errorMessage}`,
        blocks,
      }),
    });
  } catch (err) {
    // Last resort: log it. Don't let alerting throw inside the request.
    console.error('Failed to post form-failure alert to Slack:', err);
  }
}

// Email fallback alert via Resend's REST API. Never throws.
async function postFailureToEmail(
  opts: SendAlertOptions,
  errorMessage: string,
  detail?: string
): Promise<void> {
  const cfg = opts.alertEmail;
  if (!cfg || !cfg.apiKey) return;
  const to = Array.isArray(cfg.to) ? cfg.to : [cfg.to];
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${cfg.apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: cfg.from,
        to,
        subject: `🚨 Form send failed — ${opts.client}${opts.formName ? ` (${opts.formName})` : ''}`,
        html:
          `<h2 style="color:#c01452">A form submission failed to send</h2>` +
          `<p><strong>Client:</strong> ${opts.client}</p>` +
          `<p><strong>Form:</strong> ${opts.formName ?? '—'}</p>` +
          `<p><strong>Error:</strong> ${errorMessage}</p>` +
          (detail ? `<p><strong>Detail:</strong> ${detail}</p>` : '') +
          `<p><strong>When:</strong> ${new Date().toISOString()}</p>` +
          `<hr><p style="color:#888;font-size:13px">A visitor submitted a form but the notification email could not be sent — the lead may be lost. ` +
          `Check the Resend dashboard and Vercel function logs. If this repeats, the API key, sending domain, or a recipient address is likely the cause.</p>`,
      }),
    });
  } catch (err) {
    console.error('Failed to post form-failure alert email:', err);
  }
}

// Fire every configured alert channel. Never throws.
async function alertFailure(
  opts: SendAlertOptions,
  errorMessage: string,
  detail?: string
): Promise<void> {
  await Promise.all([
    postFailureToSlack(opts, errorMessage, detail),
    postFailureToEmail(opts, errorMessage, detail),
  ]);
}

/**
 * Wrap a Resend send call. Pass a function that performs the send and returns
 * the Resend SDK result. If the send throws, or returns an `{ error }` shape,
 * we fire every alert channel and then re-throw so the caller's existing error
 * handling (e.g. returning a 500 to the form) still runs unchanged.
 *
 * Example:
 *   const result = await sendWithAlert(
 *     { client: "Acme Co", formName: "Contact form" },
 *     () => resend.emails.send({ from, to, subject, html })
 *   );
 */
export async function sendWithAlert<T extends { error?: unknown }>(
  opts: SendAlertOptions,
  send: () => Promise<T>
): Promise<T> {
  let result: T;
  try {
    result = await send();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await alertFailure(opts, message);
    throw err; // preserve existing behavior
  }

  // The Resend SDK returns { data, error } rather than throwing on some errors.
  if (result && result.error) {
    const errObj = result.error as { message?: string; name?: string };
    const message = errObj.message ?? 'Unknown Resend error';
    await alertFailure(opts, message, errObj.name);
    // Re-throw so callers that only check try/catch still see the failure.
    throw new Error(`Resend send failed: ${message}`);
  }

  return result;
}

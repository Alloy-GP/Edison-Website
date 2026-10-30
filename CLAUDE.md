# AGP Astro Client Site

This is an Alloy Growth Partners client website project built on the AGP Astro starter template.

## When asked to "kick off" a client

Run `scripts/kickoff.py` in non-interactive mode. Do not ask what deliverable they want — the kickoff script handles everything.

Steps:
1. Check `exports/` for a Screaming Frog CSV (`sf_*.csv`) — auto-detected
2. Check `_client/` for a master brief (`master_brief.*`) — auto-detected
3. If either is missing, ask the user before proceeding
4. Ahrefs API key: `3myKzF_dndiUi6Es5w9gHwukKT1Ygw0pZcpBTWRN`
5. Run the script via bash:

```bash
cd /path/to/repo && python3 scripts/kickoff.py \
  --name "CLIENT NAME" \
  --domain "clientdomain.com" \
  --owner "Skyler" \
  --twitter "@handle" \
  --phone "(XXX) XXX-XXXX" \
  --city "City" \
  --state "ST" \
  --description "Meta description here" \
  --tagline "Short tagline here" \
  --notify "notify@email.com" \
  --ahrefs-api-key "KEY_FROM_MEMORY" \
  --yes
```

Pass `--sf-export` and/or `--brief` flags if those files were found or provided.

## What kickoff.py does

1. Generates `_build/{slug}_seo_tracker.xlsx`
2. Generates `_build/{slug}_launch_readiness.html` (with Ahrefs backlink data)
3. Copies master brief to `_build/` if present
4. Updates `astro.config.mjs`, `src/config/site.ts`, `src/lib/email.config.ts`, `package.json`
5. Writes `.env` with integration keys

## Project structure

```
exports/          ← Drop Screaming Frog CSV here before kickoff (gitignored)
_client/          ← Drop master brief here before kickoff
_build/           ← Generated outputs (gitignored)
scripts/
  kickoff.py      ← Main entry point — run this for every new client
  setup.py        ← Called by kickoff.py
  build_launch_checker.py
  build_seo_tracker.py
src/
  config/site.ts  ← All SEO + org defaults
  lib/email.config.ts
```

## After kickoff — what still needs human hands

- Add logo → `public/assets/logo.svg`
- Add OG image → `public/assets/og.png` (1200×630px)
- Add favicon → `public/assets/favicon.png`
- Set up Resend DNS for the client domain
- Add env vars to Vercel (copy from `.env`, set `PUBLIC_ENV=production` on prod project)
- Add `CRON_SECRET` to Vercel (any long random string, Production + Preview) so the daily form health check can run — see "Daily form health check" below.
- **Held partials** — create a PRIVATE Vercel Blob store named `edison-form-partials` (already created and connected on 2026-10-30) and connect it to the project (Storage → Blob → Private → Connect; this sets `BLOB_READ_WRITE_TOKEN`). Without it, started-but-unfinished proposals are emailed to support at once instead of being held — see "Started, not finished" below.

## Started, not finished — the hold on partial proposals

The proposal wizard's contact step used to email staff (and, where configured, create a CRM deal) the
moment it was completed. In practice most started-but-never-finished forms are current homeowners who
picked the wrong form, and a real prospect who paused produced two notifications. Two things, both
canonical (synced from the starter):

1. **Role first.** Step 1 opens with "Your role" (required); "Property owner / resident" is the first option.
   Picking it locks name/email/phone and **Continue** goes to the resident intent (`PROPOSAL_V2.residentIntent`)
   — a homeowner never types a thing into the proposal. Config: `PROPOSAL_V2.roles` / `residentRoles` /
   `residentIntent` in `intake-form.config.js`.
2. **The hold.** When the contact step is completed, `/api/lead` (stage=partial) does not email anyone:
   `holdPartial()` in `src/lib/partials.ts` writes the answers to a PRIVATE Vercel Blob
   (`partials/<email-hash>-<ref>.json`, token `BLOB_READ_WRITE_TOKEN`) and Slack gets a ⏳ line saying when
   the hold ends. Then one of two things happens:
   - The full form arrives (same email, any case, or the same ref): `/api/lead` releases the held partial
     after the staff email is out. One 📬 post, one staff email, one deal. The 📬 footer says "replaced the
     started form".
   - Nothing arrives: `/api/partial-sweep` (Vercel cron, every 5 minutes, same `CRON_SECRET` auth as
     `/api/form-health`) emails everything older than `PARTIAL_HOLD_MINUTES` (default 10) to
     `partialRoutes.proposal` = `admin@edison-mgmt.com` (the general inbox where homeowner questions already go), tags the contact `proposal-incomplete` in Mailchimp, posts 📬 to
     Slack, deletes the blob. No CRM deal. The email tells support what it usually is and that sales hears
     separately if the form is ever finished.
   A send that fails stays for the next sweep; after 24 hours it is dropped with a ⚠️ post. Without a store
   (no `BLOB_READ_WRITE_TOKEN` — local dev, or a site with no store connected) the partial is sent at once to
   the partial route, still no deal. The store must be created as **private** (Vercel → Storage → Blob →
   Private): a public store rejects private writes and the hold falls back to send-now; the lead API's
   response says so (`held: false, reason: …`).

Testing on stg: preview deployments have `PARTIAL_HOLD_MINUTES=2`, and Vercel crons run only on production,
so run the sweep by hand: `curl -H "Authorization: Bearer $CRON_SECRET" https://edisonassociationmanagement.com/api/partial-sweep`.
Offline test of the hold, release, sweep timing and the support email: `npm run test:partials`.

## Daily form health check — `/api/form-health`

Nobody should have to wonder whether the forms work. A Vercel cron (`vercel.json`) calls
`/api/form-health` at 13:00 UTC (8am Central) and posts one line to the forms Slack channel
(`FORM_SLACK_WEBHOOK`, falling back to `FORM_ALERT_SLACK_URL`): ✅ when everything passes, 🚨 with the
failures when not. No line in the morning = the cron is not running.

What it checks: that Resend accepts a real email from `notifications@` — sent to Resend's
simulated-delivery inbox `delivered+form-health@resend.dev` with the same key and endpoint the forms
use, so a ✓ means key + verified domain + send path, and nobody receives it (one email a day against the
quota; the Resend→Slack relay ignores sent/delivered events) — the Slack webhook, the Mailchimp
credentials when `mailchimp.enabled` is true, and that the lead route has somewhere to send. A
Sending-access Resend key is enough; nothing here lists domains.

Vercel sends `CRON_SECRET` as a bearer token; the same header works by hand:
`curl -H "Authorization: Bearer $CRON_SECRET" https://edisonassociationmanagement.com/api/form-health`
Without `CRON_SECRET` the route only answers Vercel's cron user-agent, so it works on day one; set the
secret so nobody else can trigger it. `src/lib/resend-probe.ts` is shared with every AGP site — do not
edit it per client. Offline test of every probe path: `npm run test:forms`.

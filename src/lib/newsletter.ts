// src/lib/newsletter.ts
// Data layer for the /newsletter landing page.
//
// The CURRENT issue and the ARCHIVE both derive from the latest sent campaigns
// in the Mailchimp folder named "Edison Newsletter" (its id is
// MAILCHIMP_NEWSLETTER_FOLDER_ID). Newest sent campaign = current issue; the
// rest = archive rows. Editorial fields Mailchimp cannot know (hero image,
// "in this issue" list, and the whole ask block) come from
// src/data/newsletter/current.json and overlay the campaign data.
//
// This runs at BUILD time (newsletter.astro is prerendered) — never per page
// view — so it respects Mailchimp's rate limits. A campaign-sent webhook
// triggers a rebuild; see src/pages/api/newsletter-webhook.ts.
//
// Graceful degradation: if the folder id / API key is unset, or the fetch
// fails, or no campaign has been sent yet, the page falls back to the seed in
// current.json and an empty archive. It always builds.

import editorial from '~/data/newsletter/current.json';

const MC_BASE = `https://${import.meta.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0`;

function authHeader(): string {
  return 'Basic ' + Buffer.from(`anystring:${import.meta.env.MAILCHIMP_API_KEY}`).toString('base64');
}

export interface AskConfig {
  title: string;
  body: string;
  prompts: string[];
  questionLabel: string;
  questionPlaceholder: string;
  submitLabel: string;
}

export interface Issue {
  slug: string;
  issueLabel: string;
  title: string;
  dek: string;
  heroImg: string;
  heroAlt: string;
  archiveUrl: string;
  inThisIssue: string[];
  ask: AskConfig;
}

export interface ArchiveItem {
  slug: string;
  issueLabel: string;
  title: string;
  blurb: string;
  url: string;
}

export interface NewsletterData {
  current: Issue;
  archive: ArchiveItem[];
}

interface MailchimpCampaign {
  send_time: string;
  long_archive_url?: string;
  settings?: { title?: string; subject_line?: string; preview_text?: string };
}

// "2026-08-14T13:00:00+00:00" -> "August 2026", pinned to Eastern so the
// month label never drifts across the UTC boundary.
function monthLabel(sendTime: string): string {
  return new Date(sendTime).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'America/New_York',
  });
}

async function fetchCampaigns(): Promise<MailchimpCampaign[]> {
  const folderId = import.meta.env.MAILCHIMP_NEWSLETTER_FOLDER_ID;
  const apiKey = import.meta.env.MAILCHIMP_API_KEY;
  const prefix = import.meta.env.MAILCHIMP_SERVER_PREFIX;

  // Blockers not resolved yet (folder created / keys in env) → fall back cleanly.
  if (!folderId || !apiKey || !prefix) {
    console.warn('[newsletter] Mailchimp folder id / keys not set — using seed content only');
    return [];
  }

  const params = new URLSearchParams({
    status: 'sent',
    type: 'regular',
    folder_id: folderId,
    sort_field: 'send_time',
    sort_dir: 'DESC',
    count: '24',
    fields:
      'campaigns.send_time,campaigns.long_archive_url,campaigns.settings.title,campaigns.settings.subject_line,campaigns.settings.preview_text',
  });

  try {
    const res = await fetch(`${MC_BASE}/campaigns?${params}`, {
      headers: { Authorization: authHeader() },
    });
    if (!res.ok) {
      console.error(`[newsletter] campaigns fetch failed: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = (await res.json()) as { campaigns?: MailchimpCampaign[] };
    return (data.campaigns ?? []).filter((c) => c.send_time);
  } catch (err) {
    console.error('[newsletter] campaigns fetch error:', err);
    return [];
  }
}

export async function getNewsletterData(): Promise<NewsletterData> {
  const seed = editorial.current as Issue;
  const campaigns = await fetchCampaigns();

  // Pre-send / no data → seed is the whole story, archive empty.
  if (!campaigns.length) {
    return { current: seed, archive: [] };
  }

  const [latest, ...rest] = campaigns;
  const currentSlug = seed.slug || latest.send_time.slice(0, 7);

  const current: Issue = {
    ...seed,
    slug: currentSlug,
    issueLabel: monthLabel(latest.send_time),
    title: latest.settings?.title || latest.settings?.subject_line || seed.title,
    // Editorial dek wins (it's richer); fall back to the campaign preview text.
    dek: seed.dek || latest.settings?.preview_text || '',
    archiveUrl: latest.long_archive_url || seed.archiveUrl || '',
  };

  const archive: ArchiveItem[] = rest
    .map((c) => ({
      slug: c.send_time.slice(0, 7),
      issueLabel: monthLabel(c.send_time),
      title: c.settings?.title || c.settings?.subject_line || 'Newsletter',
      blurb: c.settings?.preview_text || '',
      url: c.long_archive_url || '',
    }))
    .filter((i) => i.slug !== current.slug && i.url);

  return { current, archive };
}

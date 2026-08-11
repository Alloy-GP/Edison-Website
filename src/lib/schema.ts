// src/lib/schema.ts
// ─────────────────────────────────────────────────────────────────────────────
// Reusable JSON-LD schema builder functions.
//
// Usage in a .astro page:
//
//   import { breadcrumbSchema, faqSchema, serviceSchema } from '~/lib/schema';
//   import { SITE } from '~/config/site';
//
//   const breadcrumb = breadcrumbSchema([
//     { name: 'Home',     url: SITE.url + '/' },
//     { name: 'Services', url: SITE.url + '/services' },
//     { name: 'SEO',      url: SITE.url + '/services/seo' },
//   ]);
//
//   const faq = faqSchema([
//     { q: 'What do you do?', a: 'We do great things.' },
//   ]);
//
//   Then pass to BaseLayout:
//   <BaseLayout pageSchema={[breadcrumb, faq]} ...>
// ─────────────────────────────────────────────────────────────────────────────

import { SITE } from '~/config/site';

// ── Organization ─────────────────────────────────────────────────────────────
// Already rendered by BaseLayout on every page. Import this only if you need
// to reference the org object inside another schema (e.g. Article publisher).

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': SITE.org.type,
    name: SITE.name,
    url: SITE.url,
    logo: SITE.org.logo,
    telephone: SITE.org.telephone,
    email: SITE.org.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.org.addressLocality,
      addressRegion: SITE.org.addressRegion,
      addressCountry: SITE.org.addressCountry,
    },
    areaServed: SITE.org.areaServed,
    priceRange: SITE.org.priceRange,
  };
}

// ── BreadcrumbList ────────────────────────────────────────────────────────────
// items: ordered array from Home → current page.

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── FAQPage ───────────────────────────────────────────────────────────────────
// faqs: array of question/answer pairs.
// Keep answers identical to the on-page text — Google penalises mismatches.

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// ── Service ───────────────────────────────────────────────────────────────────

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': SITE.org.type,
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: opts.areaServed ?? SITE.org.areaServed,
    ...(opts.image ? { image: opts.image } : {}),
  };
}

// ── Article ───────────────────────────────────────────────────────────────────
// Use for blog posts, resource articles, guides. ogType="article" on the route.

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;   // ISO 8601: '2026-05-13'
  dateModified?: string;
  image?: string;
  about?: string[];        // topic names
  /** Named human author. Omit for an Organization byline. Strong E-E-A-T signal. */
  author?: {
    name: string;
    jobTitle?: string;
    url?: string;
    /** e.g. ['PCAM', '2025 CAI Central Florida Chapter President'] */
    credentials?: string[];
  };
  articleSection?: string; // e.g. 'Financial Management'
  keywords?: string[];
  wordCount?: number;
}) {
  const author = opts.author
    ? {
        '@type': 'Person',
        name: opts.author.name,
        ...(opts.author.jobTitle ? { jobTitle: opts.author.jobTitle } : {}),
        ...(opts.author.url ? { url: opts.author.url } : {}),
        ...(opts.author.credentials?.length
          ? {
              hasCredential: opts.author.credentials.map((c) => ({
                '@type': 'EducationalOccupationalCredential',
                name: c,
              })),
            }
          : {}),
        worksFor: { '@type': 'Organization', name: SITE.name, url: SITE.url },
      }
    : { '@type': 'Organization', name: SITE.name, url: SITE.url };

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author,
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: SITE.org.logo },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    url: opts.url,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    ...(opts.image ? { image: opts.image } : {}),
    ...(opts.articleSection ? { articleSection: opts.articleSection } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(', ') } : {}),
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    ...(opts.about
      ? { about: opts.about.map((name) => ({ '@type': 'Thing', name })) }
      : {}),
  };
}

// ── HowTo ─────────────────────────────────────────────────────────────────────
// Use on step-by-step guides. Google retired HowTo rich results, but the markup
// still gives answer engines (AI Overviews, ChatGPT, Perplexity) a clean,
// unambiguous step sequence to extract and cite. Steps must mirror the on-page
// ordered list exactly.

export function howToSchema(opts: {
  name: string;
  description: string;
  url: string;
  steps: Array<{ name: string; text: string }>;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    inLanguage: 'en-US',
    ...(opts.image ? { image: opts.image } : {}),
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${opts.url}#how-to-prepare-step-by-step`,
    })),
  };
}

// ── CollectionPage ────────────────────────────────────────────────────────────
// Use on resource hubs and article indexes. The ItemList gives answer engines an
// explicit, ordered inventory of what the hub contains.

export function collectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  items: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

// ── Course ────────────────────────────────────────────────────────────────────

export function courseSchema(opts: {
  name: string;
  description: string;
  url: string;
  free?: boolean;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    isAccessibleForFree: opts.free ?? true,
    inLanguage: 'en-US',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}

// ── LocalBusiness ─────────────────────────────────────────────────────────────
// Use on the Contact or About page when you want the full local business card.

export function localBusinessSchema(opts?: { description?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.url,
    logo: SITE.org.logo,
    telephone: SITE.org.telephone,
    email: SITE.org.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.org.addressLocality,
      addressRegion: SITE.org.addressRegion,
      addressCountry: SITE.org.addressCountry,
    },
    areaServed: SITE.org.areaServed,
    priceRange: SITE.org.priceRange,
    ...(opts?.description ? { description: opts.description } : {}),
  };
}

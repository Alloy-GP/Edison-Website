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
import { REVIEWS } from '~/data/reviews';

// ── areaServed ────────────────────────────────────────────────────────────────
// SITE.org.areaServed is a list of cities/counties. Emit each as a Place so the
// geographic signal is machine-readable instead of one ambiguous string.

export function areaServedLd(area: string | readonly string[] = SITE.org.areaServed) {
  const list = typeof area === 'string' ? [area] : area;
  return list.map((name) => ({ '@type': 'Place', name }));
}

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
    areaServed: areaServedLd(),
    priceRange: SITE.org.priceRange,
  };
}

// ── AggregateRating ───────────────────────────────────────────────────────────
// Sitemap v3.2 puts this on the homepage, both pillars, and the testimonials
// page. Numbers come from src/data/reviews.ts, the same source the visible
// review badge renders — schema and on-page must not disagree.

export function aggregateRatingSchema(opts?: { rating?: number; count?: number }) {
  return {
    '@context': 'https://schema.org',
    '@type': SITE.org.type,
    name: SITE.name,
    url: SITE.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(opts?.rating ?? REVIEWS.rating),
      reviewCount: String(opts?.count ?? REVIEWS.count),
      bestRating: '5',
      worstRating: '1',
    },
  };
}

// ── Geo (city) page ───────────────────────────────────────────────────────────
// Sitemap v3.2 spec for /services/hoa-management/[city]/:
// "LocalBusiness (with serviceArea) + Service".

export function geoPageSchema(opts: {
  city: string;
  /** e.g. 'Orange County, FL' — rendered alongside the city in serviceArea. */
  region?: string;
  url: string;
  description: string;
}) {
  const area = opts.region ? [`${opts.city}, FL`, opts.region] : [`${opts.city}, FL`];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE.name,
      url: opts.url,
      logo: SITE.org.logo,
      telephone: SITE.org.telephone,
      email: SITE.org.email,
      description: opts.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.org.addressLocality,
        addressRegion: SITE.org.addressRegion,
        addressCountry: SITE.org.addressCountry,
      },
      areaServed: areaServedLd(area),
      priceRange: SITE.org.priceRange,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(REVIEWS.rating),
        reviewCount: String(REVIEWS.count),
        bestRating: '5',
        worstRating: '1',
      },
    },
    serviceSchema({
      name: `HOA Management in ${opts.city}, FL`,
      serviceType: 'HOA Management',
      description: opts.description,
      url: opts.url,
      areaServed: area,
    }),
  ];
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
  /** Override the site-wide service area — e.g. a single city on a geo page. */
  areaServed?: string | readonly string[];
  /** Service type, e.g. 'HOA Management'. Helps disambiguate sibling services. */
  serviceType?: string;
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
      telephone: SITE.org.telephone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.org.addressLocality,
        addressRegion: SITE.org.addressRegion,
        addressCountry: SITE.org.addressCountry,
      },
    },
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    areaServed: areaServedLd(opts.areaServed),
    ...(opts.image ? { image: opts.image } : {}),
  };
}

// ── Article ───────────────────────────────────────────────────────────────────
// Use for blog posts, resource articles, guides. ogType="article" on the route.

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  /** ISO 8601: '2026-05-13'. Omit on evergreen pages that aren't dated posts. */
  datePublished?: string;
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
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ?? opts.datePublished
      ? { dateModified: opts.dateModified ?? opts.datePublished }
      : {}),
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

// ── AboutPage / Person / WebPage / Review ─────────────────────────────────────
// Rounds out the sitemap v3.2 "schema by page type" table.

export function aboutPageSchema(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    about: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle: string;
  url: string;
  credentials?: string[];
  description?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: opts.name,
    jobTitle: opts.jobTitle,
    url: opts.url,
    worksFor: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.image ? { image: opts.image } : {}),
    ...(opts.credentials?.length
      ? {
          hasCredential: opts.credentials.map((c) => ({
            '@type': 'EducationalOccupationalCredential',
            name: c,
          })),
        }
      : {}),
  };
}

export function webPageSchema(opts: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  };
}

// Testimonials page: the org node carries the rating, with each quote as a
// nested Review. Reviewer names must match what's visible on the page.
export function reviewPageSchema(opts: {
  url: string;
  reviews: Array<{ quote: string; attribution: string; rating: number }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': SITE.org.type,
    name: SITE.name,
    url: SITE.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(REVIEWS.rating),
      reviewCount: String(REVIEWS.count),
      bestRating: '5',
      worstRating: '1',
    },
    review: opts.reviews.map((r) => ({
      '@type': 'Review',
      reviewBody: r.quote,
      author: { '@type': 'Person', name: r.attribution },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      itemReviewed: { '@type': SITE.org.type, name: SITE.name, url: SITE.url },
    })),
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
    areaServed: areaServedLd(),
    priceRange: SITE.org.priceRange,
    ...(opts?.description ? { description: opts.description } : {}),
  };
}

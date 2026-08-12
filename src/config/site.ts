/**
 * src/config/site.ts
 * Single source of truth for site-wide SEO defaults.
 * Edit this file for each client, never hardcode these values elsewhere.
 */

export const SITE = {
  /** Canonical base URL, no trailing slash. Must match astro.config.mjs site: */
  url: 'https://edisonassociationmanagement.com',

  /** Display name, used in og:site_name, JSON-LD, email footer */
  name: 'Edison Association Management',

  /** Twitter/X handle, include the @ */
  twitterHandle: '',

  /** og:locale */
  locale: 'en_US',

  /** Fallback <title> if a page doesn't pass its own */
  defaultTitle: 'Edison Association Management, Lighting The Way',

  /** Fallback meta description */
  defaultDescription: 'Boutique HOA and condo association management in Orlando, FL. Edison Association Management delivers full-service community management across Central Florida.',

  /**
   * Default OG image, place the file at public/assets/og.png
   * Dimensions: 1200×630px PNG, under 300KB
   */
  defaultOgImage: '/assets/og.png',
  ogImageWidth:  '1200',
  ogImageHeight: '630',

  /** Organization JSON-LD, emitted on every page */
  org: {
    type: 'LocalBusiness',         // or 'ProfessionalService', 'Organization', etc.
    telephone: '+1-407-317-5252',
    email: 'contact@edisonassociationmanagement.com',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    addressCountry: 'US',
    /**
     * Cities and counties Edison actually manages in. Emitted as a schema.org
     * Place list, a national 'United States' value tells search engines nothing
     * about the Orlando metro this business competes in.
     */
    areaServed: [
      'Orlando, FL',
      'Winter Garden, FL',
      'Kissimmee, FL',
      'Clermont, FL',
      'Lake Mary, FL',
      'Altamonte Springs, FL',
      'Oviedo, FL',
      'Brevard County, FL',
      'Central Florida',
    ],
    priceRange: '$$',
    logo: 'https://edisonassociationmanagement.com/assets/logo.svg',
  },
} as const;

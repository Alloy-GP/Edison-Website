// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ── STEP 1: update to client's live domain ────────────────────
  site: 'https://edisonassociationmanagement.com',

  output: 'server',
  adapter: vercel(),
  trailingSlash: 'never',

  integrations: [
    react(),
    sitemap(), // auto-generates /sitemap-index.xml on every build — no manual sitemap.xml needed
  ],

  prefetch: { prefetchAll: true },

  // Prevents CSRF errors when testing on vercel.app before custom domain is live
  security: { checkOrigin: false },

  build: {
    // Embeds all CSS as inline <style> tags — eliminates render-blocking stylesheet request
    inlineStylesheets: 'always',
  },

  redirects: {
    // Legacy URL redirects (301) — mapped from the pre-rebuild Screaming Frog crawl.
    // Trailing-slash variants are normalized to these by src/middleware.ts.
    '/education-and-resources': '/edison-education',
    '/services/hoa-enforcement': '/services/covenant-enforcement',
    '/services/property-types': '/services/hoa-management',
    '/services/property-types/single-family-hoa-management': '/services/hoa-management/single-family',
    '/services/property-types/condominum-management': '/services/condo-management',
    // NOTE: do not add mixed-case legacy URLs here (e.g. '/Services'). On Vercel that
    // rule collides with the lowercase page route and /services starts serving the 404
    // page. Case-only legacy redirects live in vercel.json instead.
    '/locations': '/services/hoa-management',
    '/locations/florida': '/services/hoa-management',
    '/locations/florida/orlando': '/services/hoa-management/orlando',
    '/blog/hoa-bylwas-vs-ccrs': '/blog/hoa-bylaws-vs-ccrs',
    '/blog/hoa-reserve-study-guide-florida': '/blog/hoa-reserve-study-guide',
    '/blog/tag/[...slug]': '/blog',
    '/blog/category/[...slug]': '/blog',
  },
});

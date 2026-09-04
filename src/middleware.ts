import { defineMiddleware } from 'astro:middleware';

// Canonical URL shape: lowercase, no trailing slash.
//
// Platform caveat (Vercel): unmatched paths only reach this middleware through
// the adapter's 404 catch-all route, and Vercel forces that route's status to
// 404, so a redirect issued here for e.g. /About is served as a 404 with a
// Location header. Trailing slashes are already handled by Vercel's own 308,
// and known mixed-case legacy URLs (/Services) are redirected in vercel.json.
// This logic is still correct in dev and on hosts that route unmatched paths
// straight to the server. Static files, API routes, and Astro internals are
// left untouched.
const PASSTHROUGH = /^\/(api|_astro|_image|_server-islands|assets|fonts|social-media)\//;

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  if (pathname === '/' || PASSTHROUGH.test(pathname) || pathname.includes('.')) return next();

  let clean = pathname;
  if (clean.endsWith('/')) clean = clean.slice(0, -1);
  if (/[A-Z]/.test(clean)) clean = clean.toLowerCase();

  if (clean !== pathname) {
    // Relative Location on purpose: inside the Vercel function context.url's
    // host is "localhost", so an absolute URL would send visitors there.
    return context.redirect(`${clean || '/'}${context.url.search}`, 301);
  }
  return next();
});

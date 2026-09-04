import { defineMiddleware } from 'astro:middleware';

// Canonical URL shape: lowercase, no trailing slash.
//
// Legacy links to the pre-rebuild site used mixed case (e.g. /Services) and
// those URLs still hold rankings in Google; without normalisation they 404.
// Static files, API routes, and Astro internals are left untouched.
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

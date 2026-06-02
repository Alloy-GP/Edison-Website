import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  if (pathname !== '/' && pathname.endsWith('/')) {
    const clean = new URL(context.url);
    clean.pathname = pathname.slice(0, -1);
    return Response.redirect(clean.toString(), 301);
  }
  return next();
});

import type { APIRoute } from 'astro';
import { REVIEWS } from '../../data/reviews';

/* ============================================================
   GET /api/reviews  →  { rating, count, source, updatedAt }

   Pulls Edison's live Google rating + review count from the Google
   Places API. Edge-cached for 24h (s-maxage) so the upstream Places
   call happens at most ~once/day regardless of traffic; a daily Vercel
   Cron (see vercel.json) keeps that cache warm.

   Activation: set GOOGLE_PLACES_API_KEY in the Vercel project env.
   Optional: set GOOGLE_PLACE_ID to skip the name lookup (recommended).
   With no key, it returns the committed fallback in src/data/reviews.ts.
   ============================================================ */
export const prerender = false;

const PLACES = 'https://maps.googleapis.com/maps/api/place';

function json(body: unknown, cacheable: boolean) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      // Daily edge cache; serve stale while revalidating for resilience.
      'Cache-Control': cacheable
        ? 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400'
        : 'public, max-age=0, s-maxage=300',
    },
  });
}

// Google "see all reviews" deep link for a given Place ID.
const reviewsLink = (placeId: string) =>
  `https://search.google.com/local/reviews?placeid=${placeId}`;
// Used when no Place ID is available (opens the listing rather than a blank map).
const SEARCH_FALLBACK = 'https://www.google.com/maps/search/?api=1&query=Edison%20Association%20Management%20Orlando%20FL';

export const GET: APIRoute = async ({ url }) => {
  const debug = url.searchParams.get('debug') === '1';
  const key = import.meta.env.GOOGLE_PLACES_API_KEY;
  const fallback = {
    rating: REVIEWS.rating, count: REVIEWS.count,
    placeId: null as string | null, reviewsUrl: SEARCH_FALLBACK,
    source: 'fallback', updatedAt: REVIEWS.updatedAt,
  };

  if (!key) return json(debug ? { ...fallback, _debug: { keyPresent: false } } : fallback, false);

  try {
    // Resolve the Place ID (env override preferred; otherwise look up by name).
    let placeId = import.meta.env.GOOGLE_PLACE_ID as string | undefined;
    const placeIdFromEnv = !!placeId;
    if (!placeId) {
      const findUrl = `${PLACES}/findplacefromtext/json?input=${encodeURIComponent('Edison Association Management Orlando FL')}&inputtype=textquery&fields=place_id&key=${key}`;
      const found = await fetch(findUrl).then((r) => r.json());
      placeId = found?.candidates?.[0]?.place_id;
    }
    if (!placeId) return json(fallback, false);

    const detUrl = `${PLACES}/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${key}`;
    const det = await fetch(detUrl).then((r) => r.json());
    const rating = det?.result?.rating;
    const count = det?.result?.user_ratings_total;

    if (typeof rating === 'number' && typeof count === 'number') {
      return json({ rating, count, placeId, reviewsUrl: reviewsLink(placeId), source: 'live', updatedAt: new Date().toISOString() }, true);
    }
    if (debug) {
      return json({ ...fallback, placeId, reviewsUrl: reviewsLink(placeId),
        _debug: { keyPresent: true, placeIdFromEnv, detailsStatus: det?.status, detailsError: det?.error_message, hasResult: !!det?.result } }, false);
    }
    // Details missing numbers but we have a Place ID — still return a working reviews link.
    return json({ ...fallback, placeId, reviewsUrl: reviewsLink(placeId) }, false);
  } catch {
    return json(fallback, false);
  }
};

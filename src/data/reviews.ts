/* ============================================================
   Single source of truth for Google review rating + count.
   - SSR/build reads these committed values (always renders something).
   - /api/reviews refreshes the live numbers daily (edge-cached); the
     client script in BaseLayout updates the displayed values in place.
   Update `count`/`rating` here only as a manual fallback — the live
   pull keeps the displayed numbers current.
   ============================================================ */
export interface ReviewStats {
  rating: number;
  count: number;
  updatedAt: string; // ISO date of last manual edit / known-good value
}

export const REVIEWS: ReviewStats = {
  rating: 4.9,
  count: 130,
  updatedAt: '2026-06-25',
};

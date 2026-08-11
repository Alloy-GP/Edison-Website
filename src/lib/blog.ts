// src/lib/blog.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for "what are the newest posts?".
//
// Derives the list from BLOG_CONTENT rather than a hand-maintained array, so
// publishing a post (add the BLOG_CONTENT entry + the page directory) surfaces
// it automatically everywhere this helper is used. Nothing to remember to
// update afterwards.
//
// Import from .astro pages only — it pulls in the whole BLOG_CONTENT module,
// which should never ship to the browser. Pass the small result into islands as
// props instead.
//
//   ---
//   import { getLatestPosts } from '../lib/blog.ts';
//   const latestPosts = getLatestPosts(2);
//   ---
//   <HomePage latestPosts={latestPosts} client:load />
// ─────────────────────────────────────────────────────────────────────────────

import { BLOG_CONTENT } from '../content/blog-content.jsx';

const CONTENT = BLOG_CONTENT as Record<string, any>;

/**
 * Slugs with a real route at src/pages/blog/<slug>/index.astro.
 *
 * BLOG_CONTENT carries entries that aren't published pages — e.g.
 * "hoa-reserve-study-guide-florida", which only exists as a redirect target.
 * Globbing the routes keeps those out instead of relying on a manual denylist.
 */
const LIVE_SLUGS = new Set(
  Object.keys(import.meta.glob('../pages/blog/*/index.astro'))
    .map((path) => path.split('/').at(-2))
    .filter((slug): slug is string => Boolean(slug))
);

/**
 * Posts carry either an ISO `datePublished` or a display `date` that may be
 * full ("August 5, 2026") or month-only ("March 2026"). Parse the precise one
 * first; month-only values land on the 1st, which is the right relative
 * ordering for a coarse date.
 */
function publishedAt(post: any): number {
  const raw = post.datePublished ?? post.date;
  if (!raw) return 0;
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

export interface LatestPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
  readTime: string;
}

/** Every live post, newest first. */
export function getAllPostsByDate(): LatestPost[] {
  return Object.entries(CONTENT)
    .filter(([slug]) => LIVE_SLUGS.has(slug))
    .sort(([, a], [, b]) => publishedAt(b) - publishedAt(a))
    .map(([slug, post]) => ({
      slug,
      category: post.category ?? '',
      title: post.title ?? '',
      // metaDescription is the tightest one-liner a post has; summary/dek are
      // the longer on-page forms.
      excerpt: post.metaDescription ?? post.summary ?? post.dek ?? '',
      image: post.heroImage ?? '',
      href: `/blog/${slug}`,
      date: post.date ?? '',
      readTime: post.readTime ?? '',
    }));
}

/** The newest `count` live posts. */
export function getLatestPosts(count = 2): LatestPost[] {
  return getAllPostsByDate().slice(0, count);
}

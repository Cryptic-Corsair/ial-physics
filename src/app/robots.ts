import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/* Replaces the old static public/robots.txt so the Sitemap line can
   read SITE_URL (the one source of the site's address) at build time.

   Policy unchanged: every crawler may crawl everything. The indexing
   discipline lives on the pages themselves — / is the canonical
   indexed homepage (the desk), and the room catch-all
   (src/app/[...room]/page.tsx) carries a meta noindex (its rooms
   render client-side from localStorage). A robots.txt block on the
   rooms would only hide the meta noindex from Google — they must
   stay crawlable to be obeyed. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

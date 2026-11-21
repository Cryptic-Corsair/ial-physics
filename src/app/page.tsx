import type { Metadata } from "next";
import ClubApp from "@/components/club/club-app";

/* THE homepage — the desk. The showcase landing (the old front door)
   and the middleware that rotated first-time visitors through it are
   retired; the workspace itself is the site now, and its desk — the
   homepage for members — is the main page every visitor gets, first
   visit or hundredth. The room addresses moved with it: every room
   lives at the root (/notes/wph11-t02/24, /spec, /wph11 …) through
   src/app/[...room]/page.tsx, and every /club/… address from the
   showcase era folds permanently onto the same room (next.config.ts
   redirects — old bookmarks, share links and the alternate doors'
   exit buttons all keep working).

   It is its own room — the workspace renders client-side from
   localStorage, so nothing here can leak into or out of the static
   showcase leaves. Unlike the retired showcase, this page is the
   canonical homepage and is indexed. Old /portal links redirect
   here (next.config.ts). */
export const metadata: Metadata = {
  /* absolute — the root layout's title template is for new leaf
     pages, not the front door's full brand line. No openGraph here:
     a child openGraph replaces the layout's wholesale (Next merges
     top-level fields only), which would drop og:image/og:type — the
     layout's OG already carries the front-door copy and image. */
  title: {
    absolute: "IAL PHYSICS — revision notes, written the way they're taught",
  },
  description:
    "Statement-by-statement revision notes for the Pearson Edexcel International A Level Physics spec (WPH11) — Mechanics and Materials, and revision packs built from the spec points you tick.",
};

export default function HomePage() {
  return <ClubApp />;
}

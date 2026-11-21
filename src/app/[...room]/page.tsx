import type { Metadata } from "next";
import ClubApp from "@/components/club/club-app";

/* The workspace rooms — an OPTIONAL catch-all: every root path that
   is not the desk's own / and not one of the static showcase leaves
   (/candy, /lumen, /twilight) serves this one client-side shell. The
   component owns the address bar (see club-app.tsx's URL↔room
   bridge): the room writes its path (/notes/wph11-t02/24, /spec,
   /wph11 …) and a path or legacy ?v= deep link lands in its room, so
   every room has an accurate, shareable, back-button friendly URL.
   The desk at / and the rooms share one shell, one localStorage
   state and one URL bridge; /club/… addresses from the showcase era
   redirect here (next.config.ts).

   Deliberately kept out of the indexes for ALL path variants: / is
   the canonical homepage (src/app/page.tsx), and the rooms render
   client-side from localStorage — the meta noindex below covers
   every room address. Deep links still land straight in a room. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ room?: string[] }>;
}): Promise<Metadata> {
  const { room } = await params;
  /* absolute — the root layout's title template is for new leaf
     pages, not the workspace's own brand line. No openGraph here:
     a child openGraph replaces the layout's wholesale. */
  return {
    title: { absolute: "IAL PHYSICS — the workspace" },
    description:
      "The revision workspace: WPH11's two notes — Mechanics and Materials — plus the notes reader, the spec index and the pack bench for Edexcel International A Level Physics (WPH11).",
    robots: { index: false, follow: true },
    /* a noindexed page still owes the crawlers a self-canonical —
       inheriting the layout's canonical ("/") would point every
       room at the homepage */
    alternates: { canonical: `/${(room ?? []).join("/")}` },
  };
}

export default function RoomPage() {
  return <ClubApp />;
}

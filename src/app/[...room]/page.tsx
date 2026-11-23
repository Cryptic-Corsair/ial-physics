import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClubApp from "@/components/club/club-app";
import { UNITS } from "@/lib/spectra/units";

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

   NOT every path is a room, though. When the workspace moved from
   /club to the root, the catch-all gained the whole host under it —
   and without a gate it served the workspace shell (status 200,
   full HTML) for ANY address: /_vercel/insights/script.js came back
   as HTML and broke the analytics snippet, typo'd addresses and
   crawler junk got 200s instead of 404s, and every not-found hint
   vanished. So the page validates the path against the same room
   grammar the bridge accepts (below — kept deliberately in step
   with club-app's viewFromPath; scripts/url-routing-test.mjs walks
   both sides) and calls notFound() for anything that is not one.

   Deliberately kept out of the indexes for ALL room path variants:
   / is the canonical homepage (src/app/page.tsx), and the rooms
   render client-side from localStorage — the meta noindex below
   covers every room address. Deep links still land straight in a
   room. */

function isRoomPath(segs: string[]): boolean {
  const [a, b, c] = segs;
  const key = (a ?? "").toLowerCase();
  if (key === "notes") return segs.length >= 1 && segs.length <= 3;
  if (key === "topic")
    return (
      segs.length === 3 &&
      /^t\d{2}$/i.test(c ?? "") &&
      UNITS.some((u) => u.code.toLowerCase() === (b ?? "").toLowerCase())
    );
  if (segs.length === 1)
    return (
      ["spec", "pack", "sticker", "legal"].includes(key) ||
      UNITS.some((u) => u.code.toLowerCase() === key)
    );
  return false;
}

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
      "The revision workspace: WPH11's five notes — Forces, Moments and momentum, Work energy and power, Density upthrust and viscosity, Hooke's law stress and strain — plus the notes reader, the spec index and the pack bench for Edexcel International A Level Physics (WPH11).",
    robots: { index: false, follow: true },
    /* a noindexed page still owes the crawlers a self-canonical —
       inheriting the layout's canonical ("/") would point every
       room at the homepage */
    alternates: { canonical: `/${(room ?? []).join("/")}` },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ room?: string[] }>;
}) {
  const { room } = await params;
  if (!isRoomPath(room ?? [])) notFound();
  return <ClubApp />;
}

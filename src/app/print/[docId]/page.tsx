import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNotes } from "@/lib/spectra/notes";
import { NOTES_META, getNotesMeta } from "@/lib/spectra/notes-meta";
import { getUnit } from "@/lib/spectra/units";
import { NotePaper } from "@/components/print/note-paper";

/* ═══════════════════════════════════════════════════════════════
   IAL PHYSICS · the print room — the note set as a PDF paper.

   Not a room a visitor walks: this is the sheet
   scripts/gen-note-pdfs.mjs photographs into public/pdf/<docId>.pdf,
   the file the reader's Download PDF button (password-gated) hands
   out. The route deliberately dresses in nothing of its own — the
   sheet (components/print/note-paper.tsx + print-paper.css) is the
   whole page — and it stands behind a noindex so the paper never
   leaks into the index. The card index (NOTES_META) decides who
   exists; the full doc rides the same content the readers read.
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "PDF paper",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return NOTES_META.map((m) => ({ docId: m.id }));
}

export default async function PrintRoomPage({
  params,
}: {
  params: Promise<{ docId: string }>;
}) {
  const { docId } = await params;
  const meta = getNotesMeta(docId);
  if (!meta) notFound();
  const doc = getNotes(docId);
  const unit = getUnit(meta.unitCode);
  if (!doc || !unit) notFound();

  /* the note's own name for itself — the reader's exact logic: the
     unit's label when the topic joined the list, the revised
     fallback when it is an alternate note for a listed topic */
  const topic = unit.topics.find((t) => t.id === meta.topicId);
  const topicNo = Number(meta.topicId.replace(/r$/, "").slice(1));
  const topicLabel =
    topic?.label ??
    (meta.topicId.endsWith("r")
      ? `Topic ${topicNo} · revised`
      : `Topic ${topicNo}`);
  /* the revised note reads at its base topic's pace */
  const minutes =
    topic?.minutes ??
    unit.topics.find((t) => t.id === meta.topicId.slice(0, -1))?.minutes;

  return (
    <NotePaper
      doc={doc}
      unit={unit}
      topicLabel={topicLabel}
      minutes={minutes}
    />
  );
}

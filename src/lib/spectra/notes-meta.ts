import type { UnitCode } from "./types";

/* ═══════════════════════════════════════════════════════════════
   the notes card index — who has a note, where

   The shell (club-app) needs to know *that* a topic has a revision
   note — its id, unit, topic, title and spec range — long before it
   needs the note itself. This index carries exactly that, so the
   full docs (notes.ts, ~half a megabyte of source) never land in
   the first-paint bundle; they ride in the lazy reader chunk.

   Kept in step with notes.ts by hand (the mechanics note became
   four docs in the 2026-11-22 split): id, kicker, title and source
   must match the NOTES_DOCS entry exactly — notes.ts asserts it in
   dev, so drift is loud, not silent.
   ═══════════════════════════════════════════════════════════════ */

export interface NotesMeta {
  /** note doc id, e.g. "wph11-t02" */
  id: string;
  unitCode: UnitCode;
  /** topic id inside the unit, e.g. "t02" */
  topicId: string;
  kicker: string;
  title: string;
  source: string;
  /** first → last spec number covered, e.g. "2.2 → 2.16" */
  specRange: string;
}

export const NOTES_META: NotesMeta[] = [
  {
    id: "wph11-t01",
    unitCode: "WPH11",
    topicId: "t01",
    kicker: "Physics Unit 1 · Forces — the WPH11 note, statement by statement",
    title: "Forces",
    source:
      "the WPH11 Forces note — built from the Pearson Edexcel IAL Physics specification (2018, Issue 3), WPH11/01 question papers, mark schemes and Principal Examiners' reports, 2019–2026",
    specRange: "1 → 11",
  },
  {
    id: "wph11-t01r",
    unitCode: "WPH11",
    topicId: "t01r",
    kicker: "Physics Unit 1 · Topic 1 revised — the WPH11 note, statement by statement",
    title: "Topic 1 revised",
    source:
      "the WPH11 Topic 1 revised note — built from the Pearson Edexcel IAL Physics specification (2018, Issue 3), WPH11/01 question papers, mark schemes and Principal Examiners' reports, 2019–2026",
    specRange: "1 → 11",
  },
  {
    id: "wph11-t02",
    unitCode: "WPH11",
    topicId: "t02",
    kicker: "Physics Unit 1 · Moments and momentum — the WPH11 note, statement by statement",
    title: "Moments and momentum",
    source:
      "the WPH11 Moments and momentum note — built from the Pearson Edexcel IAL Physics specification (2018, Issue 3), WPH11/01 question papers, mark schemes and Principal Examiners' reports, 2019–2026",
    specRange: "12 → 16",
  },
  {
    id: "wph11-t03",
    unitCode: "WPH11",
    topicId: "t03",
    kicker: "Physics Unit 1 · Work, energy and power — the WPH11 note, statement by statement",
    title: "Work, energy and power",
    source:
      "the WPH11 Work, energy and power note — built from the Pearson Edexcel IAL Physics specification (2018, Issue 3), WPH11/01 question papers, mark schemes and Principal Examiners' reports, 2019–2025",
    specRange: "17 → 22",
  },
  {
    id: "wph11-t04",
    unitCode: "WPH11",
    topicId: "t04",
    kicker: "Physics Unit 1 · Density, upthrust and viscosity — the WPH11 note, statement by statement",
    title: "Density, upthrust and viscosity",
    source:
      "the WPH11 fluids note — built from the Pearson Edexcel IAL Physics specification (2018, Issue 3), WPH11/01 question papers, mark schemes and Principal Examiners' reports, 2019–2025",
    specRange: "23 → 26",
  },
  {
    id: "wph11-t05",
    unitCode: "WPH11",
    topicId: "t05",
    kicker: "Physics Unit 1 · Hooke's law, stress and strain — the WPH11 note, statement by statement",
    title: "Hooke's law, stress and strain",
    source:
      "the WPH11 solid-materials note — built from the Pearson Edexcel IAL Physics specification (2018, Issue 3), WPH11/01 question papers, mark schemes and Principal Examiners' reports, 2020–2024",
    specRange: "27 → 32",
  },
];

export function getNotesMeta(docId: string): NotesMeta | undefined {
  return NOTES_META.find((m) => m.id === docId);
}

export function getNotesMetaForTopic(
  unitCode: string,
  topicId: string,
): NotesMeta | undefined {
  return NOTES_META.find((m) => m.unitCode === unitCode && m.topicId === topicId);
}

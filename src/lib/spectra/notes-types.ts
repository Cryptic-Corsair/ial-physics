import type { UnitCode } from "./types";

/* ═══════════════════════════════════════════════════════════════
   spec-by-spec revision notes
   A full revision note (verbatim from the source document) cut
   into one section per specification point, with the official
   spec statement stated above each section.
   Inline markup: **bold** · *em* · ==highlight== · ~sub~ · ^sup^
   — rendered by <Fmt/>.
   ═══════════════════════════════════════════════════════════════ */

export type FigureKind =
  | "ph-motion-graphs"
  | "ph-dt-graph"
  | "ph-vt-graph"
  | "ph-at-graph"
  | "ph-graph-conversion"
  | "ph-area-strips"
  | "ph-curved-slide"
  | "ph-resolve-draw"
  | "ph-vector-triangle"
  | "ph-projectile"
  | "ph-projectile-journey"
  | "ph-launch-types"
  | "ph-fbd-gallery"
  | "ph-vectors"
  | "ph-freebody"
  | "ph-terminal"
  | "ph-cp1-setups"
  | "ph-moments"
  | "ph-force-extension"
  | "ph-stress-strain"
  | "ph-falling-ball"
  | "ph-young-rig"
  | "ph-springs-combo"
  | "ph-unloading-set"
  | "ph-hysteresis-loop"
  | "ph-energy-strip"
  | "ph-two-materials"
  | "ph-concrete-sides";

export type NotesBlock =
  | { k: "p"; text: string }
  | { k: "h"; text: string }
  | { k: "bullets"; items: string[] }
  | { k: "note"; label: string; text: string }
  | { k: "def"; term: string; text: string }
  | { k: "eq"; eq: string; note?: string }
  | { k: "table"; head: string[]; rows: string[][]; caption?: string }
  | {
      k: "worked";
      title: string;
      question: string;
      /** one marking point per step; a "\n" inside a step breaks the
          line, and a line that is a single $...$ span is typeset as
          its own ruled working line (KaTeX) */
      steps: string[];
      answer: string;
      /** optional verbatim examiner-report / mark-scheme note, shown
          after the steps and before the answer */
      ms?: { label: string; text: string };
    }
  | { k: "steps"; caption?: string; items: { title: string; text: string; icon?: string }[] }
  | { k: "figure"; kind: FigureKind; caption?: string }
  | { k: "wow"; text: string };

export interface SpecSection {
  /** spec number, e.g. "2.6" */
  spec: string;
  /** the official statement, verbatim — stated above the section */
  statement: string;
  /** short direct title for the section */
  title: string;
  blocks: NotesBlock[];
}

export interface NotesDoc {
  id: string;
  unitCode: UnitCode;
  topicId: string;
  kicker: string;
  title: string;
  source: string;
  intro: NotesBlock[];
  sections: SpecSection[];
  outro?: NotesBlock[];
}

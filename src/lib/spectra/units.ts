import type { Unit, Topic } from "./types";
import { WPH11_TOPICS } from "./content/wph11";

/* ═══════════════════════════════════════════════════════════════
   The units of the IAL physics course — each wearing its own
   candy colour across the site, labelled everywhere by its plain
   number. WPH11 (Unit 1) is live; WPH12–WPH16 join one unit at a
   time, research-first, as the notes are built.
   ═══════════════════════════════════════════════════════════════ */

export const UNITS: Unit[] = [
  {
    code: "WPH11",
    index: 1,
    stage: "IAS",
    title: "Physics — Mechanics and Materials",
    shortTitle: "Physics: mechanics & materials",
    topicRange: "Physics 1.3 & 1.4",
    paper: {
      duration: "1 h 30 m",
      marks: 80,
      stageWeight: "AS 40%",
      ialWeight: "IAL 20%",
    },
    candy: { main: "#339AF0" },
    blurb:
      "The first physics unit, WPH11/01: the whole of Mechanics — motion, vectors, projectiles, Newton's laws, momentum, moments, work, energy and power — and the whole of Materials — density, upthrust, Stokes' law and viscosity, then Hooke's law, stress, strain and the Young modulus — in five notes built from the specification, past papers, mark schemes and examiner reports.",
    topics: WPH11_TOPICS,
  },
];

/* ————— helpers ————— */

export function getUnit(code: string): Unit | undefined {
  return UNITS.find((u) => u.code === code);
}

export function getTopic(code: string, topicId: string): Topic | undefined {
  return getUnit(code)?.topics.find((t) => t.id === topicId);
}

export const TOTALS = (() => {
  const topics = UNITS.reduce((n, u) => n + u.topics.length, 0);
  const minutes = UNITS.reduce(
    (n, u) => n + u.topics.reduce((m, t) => m + t.minutes, 0),
    0
  );
  let examples = 0;
  let tables = 0;
  for (const u of UNITS)
    for (const t of u.topics)
      for (const b of t.blocks) {
        if (b.k === "ex") examples += 1;
        if (b.k === "table") tables += 1;
      }
  return { topics, minutes, examples, tables };
})();

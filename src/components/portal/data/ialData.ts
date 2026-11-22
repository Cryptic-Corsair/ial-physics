/* The portal's two dresses are the club's own labs, renamed honestly:
   'dune' is the workspace's chocolate room (html.dune in globals.css —
   the factory dress) and 'light' is the daylight cream lab. The toggle
   in the portal navbar re-dresses the page between the two rooms. */
import { UNITS as CLUB_UNITS, TOTALS } from '@/lib/spectra/units';

export type SiteTheme = 'dune' | 'light';
/* The hero's workbench preview dots try the club's four labs on the
   stage — same ids as the workspace's lab names, same palettes. */
export type PreviewThemeId = 'night' | 'light' | 'dune' | 'classic';

export interface GlobalMetrics {
  units: number;
  topics: number;
  hoursLabel: string;
  totalMinutes: number;
  workedExamples: number;
}

export interface IalUnit {
  code: 'WPH11';
  shortLabel: string;
  levelTag: string;
  title: string;
  topicsCount: number;
  minutes: number;
  scope: string;
  sampleTopics: string[];
}

export interface SpecChip {
  id: string;
  code: string;
  label: string;
  unitCode: IalUnit['code'];
  minutes: number;
  pages: number;
}

/* The code-to-colour pairing is the club's signature and lives in the
   workspace's units.ts and nowhere else — so the portal looks the unit
   colours up there instead of carrying a second copy of the pairing. */
export function unitCandy(code: string): string {
  return CLUB_UNITS.find((u) => u.code === code)?.candy.main ?? '#339AF0';
}

export interface SearchEntry {
  id: string;
  kind: 'unit' | 'topic';
  code: string;
  title: string;
  unitCode: IalUnit['code'];
  unitTitle: string;
  category: string;
  minutes: number;
  targetAnchor: string;
  keywords: string[];
}

export interface PreviewThemeTokens {
  id: PreviewThemeId;
  label: string;
  bg: string;
  surface: string;
  surfaceElevated: string;
  ink: string;
  inkMuted: string;
  border: string;
  accent: string;
}

/* ————— the hero's notes-reader preview —————
   The workbench stage no longer shows an invented app mock: it
   reproduces the real notes reader, clause by clause, with the
   club's actual revision notes — real spec numbers, the official
   statements verbatim, and the notes' own key definitions,
   displayed equations and worked examples. Inline markup rides the
   club's Fmt dialect (**bold** · ==highlight== · ~sub~ · ^sup^);
   the hero renders it with a tiny local formatter. */
export type NotePreviewBlock =
  | { kind: 'def'; term: string; text: string }
  | { kind: 'eq'; eq: string }
  | {
      kind: 'worked';
      title: string;
      question: string;
      steps: number;
      answer: string;
    };

export interface NotePreviewClause {
  spec: string;
  title: string;
  /** the official statement, verbatim */
  statement: string;
  blocks: NotePreviewBlock[];
}

export interface NotePreviewDoc {
  id: string;
  unitCode: IalUnit['code'];
  topicLabel: string;
  title: string;
  specRange: string;
  sectionsTotal: number;
  readMinutes: number;
  clauses: NotePreviewClause[];
}

export interface WorkflowChapter {
  id: 'pinpoint' | 'assemble' | 'retain';
  index: string;
  label: string;
  summary: string;
  detail: string;
}

/* The course facts are read straight off the workspace's registry —
   one source of truth, zero drift (the same numbers the club's own
   home ticker and footer show). */
export const GLOBAL_METRICS: GlobalMetrics = {
  units: CLUB_UNITS.length,
  topics: TOTALS.topics,
  hoursLabel: `≈${Math.max(Math.round(TOTALS.minutes / 60), 1)} Hours`,
  totalMinutes: TOTALS.minutes,
  workedExamples: TOTALS.examples,
};

const WPH11 = CLUB_UNITS[0];

export const IAL_UNITS: readonly IalUnit[] = [
  {
    code: 'WPH11',
    shortLabel: 'Unit 1 · IAS',
    levelTag: 'IAS',
    title: WPH11.title,
    topicsCount: WPH11.topics.length,
    minutes: WPH11.topics.reduce((m, t) => m + t.minutes, 0),
    scope:
      'Physics 1.3 & 1.4: Mechanics — motion graphs, SUVAT, vectors, projectiles, Newton\'s laws, momentum, moments, work, energy, power — and Materials — fluids, Stokes\' law, Hooke\'s law, the Young modulus.',
    sampleTopics: WPH11.topics.map((t) => `${t.label} · ${t.title}`),
  },
];

export const SPEC_CHIPS: readonly SpecChip[] = [
  {
    id: 'spec-1',
    code: '1',
    label: '1 · The equations of motion',
    unitCode: 'WPH11',
    minutes: 16,
    pages: 5,
  },
  {
    id: 'spec-24',
    code: '24',
    label: '24 · Upthrust and flotation',
    unitCode: 'WPH11',
    minutes: 14,
    pages: 5,
  },
  {
    id: 'spec-28',
    code: '28',
    label: '28 · Stress, strain and the Young modulus',
    unitCode: 'WPH11',
    minutes: 16,
    pages: 6,
  },
];

export const SEARCH_ITEMS: readonly SearchEntry[] = [
  ...IAL_UNITS.map((unit) => ({
    id: `unit-${unit.code}`,
    kind: 'unit' as const,
    code: unit.code,
    title: unit.title,
    unitCode: unit.code,
    unitTitle: unit.shortLabel,
    category: unit.levelTag,
    minutes: unit.minutes,
    targetAnchor: '#units',
    keywords: [unit.scope, ...unit.sampleTopics],
  })),
  {
    id: 'topic-1',
    kind: 'topic',
    code: 'Topic 1',
    title: 'Topic 1 · Forces',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'IAS Topic',
    minutes: 37,
    targetAnchor: '#units',
    keywords: ['suvat', 'motion graphs', 'projectile', 'vector', 'newton', 'terminal velocity', 'free-body', 'core practical'],
  },
  {
    id: 'topic-2',
    kind: 'topic',
    code: 'Topic 2',
    title: 'Topic 2 · Moments and momentum',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'IAS Topic',
    minutes: 18,
    targetAnchor: '#units',
    keywords: ['momentum', 'conservation of momentum', 'third law', 'moment', 'centre of gravity', 'principle of moments'],
  },
  {
    id: 'topic-3',
    kind: 'topic',
    code: 'Topic 3',
    title: 'Topic 3 · Work, energy and power',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'IAS Topic',
    minutes: 22,
    targetAnchor: '#units',
    keywords: ['work done', 'kinetic energy', 'gravitational potential', 'conservation of energy', 'power', 'efficiency'],
  },
  {
    id: 'topic-4',
    kind: 'topic',
    code: 'Topic 4',
    title: 'Topic 4 · Materials — fluids, viscosity and elasticity',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'IAS Topic',
    minutes: 66,
    targetAnchor: '#units',
    keywords: ['upthrust', 'stokes', 'viscosity', 'hooke', 'young modulus', 'stress', 'strain'],
  },
  {
    id: 'topic-suvat',
    kind: 'topic',
    code: '1',
    title: 'The equations of uniformly accelerated motion',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'Spec 1',
    minutes: 4,
    targetAnchor: '#units',
    keywords: ['suvat', 'v = u + at', 'show that', 'displacement', 'acceleration'],
  },
  {
    id: 'topic-upthrust',
    kind: 'topic',
    code: '24',
    title: 'Upthrust and flotation',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'Spec 24',
    minutes: 14,
    targetAnchor: '#units',
    keywords: ['upthrust', 'flotation', 'archimedes', 'displaced', 'floating', 'free-body'],
  },
  {
    id: 'topic-young',
    kind: 'topic',
    code: '28',
    title: 'Stress, strain and the Young modulus',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'Spec 28',
    minutes: 16,
    targetAnchor: '#units',
    keywords: ['young modulus', 'stress', 'strain', 'wire', 'core practical 3', 'gradient'],
  },
];

/* The workbench preview tries the club's four labs on its stage — the
   palettes are the workspace's own token values (globals.css), not an
   homage: Night is the plum-charcoal dusk, Light the daylight cream,
   Dune the chocolate room, Classic the espresso-room signature. */
export const PREVIEW_THEMES: Record<PreviewThemeId, PreviewThemeTokens> = {
  night: {
    id: 'night',
    label: 'Night',
    bg: '#17131d',
    surface: '#30263d',
    surfaceElevated: '#40344f',
    ink: '#f5eff7',
    inkMuted: '#c7bacd',
    border: 'rgba(245, 239, 247, 0.14)',
    accent: '#d7b5e7',
  },
  light: {
    id: 'light',
    label: 'Light',
    bg: '#fff6ea',
    surface: '#fffdf7',
    surfaceElevated: '#fdf3e0',
    ink: '#3d2b1f',
    inkMuted: '#7c6454',
    border: 'rgba(61, 43, 31, 0.14)',
    accent: '#ff6b6b',
  },
  dune: {
    id: 'dune',
    label: 'Dune',
    bg: '#1e1b16',
    surface: '#2e2820',
    surfaceElevated: '#38322a',
    ink: '#f6f0e6',
    inkMuted: '#c9bfb0',
    border: 'rgba(246, 240, 230, 0.16)',
    accent: '#d9a05e',
  },
  classic: {
    id: 'classic',
    label: 'Classic',
    bg: '#2c2013',
    surface: '#4a3c2b',
    surfaceElevated: '#574834',
    ink: '#fff6ea',
    inkMuted: '#cdb894',
    border: 'rgba(255, 246, 234, 0.2)',
    accent: '#f59f00',
  },
};

/* Four real notes from the workspace's own corpus (NOTES_META in
   src/lib/spectra/notes-meta.ts — same ids, same titles, same spec
   ranges, the real per-topic reading minutes), each cut down to a
   handful of its actual specification sections. Every statement,
   definition, equation and worked example below is lifted verbatim
   from the notes docs in src/lib/spectra/notes.ts. */
export const NOTE_PREVIEW_DOCS: readonly NotePreviewDoc[] = [
  {
    id: 'wph11-t01',
    unitCode: 'WPH11',
    topicLabel: 'Topic 1',
    title: 'Forces',
    specRange: '1 → 11',
    sectionsTotal: 11,
    readMinutes: 37,
    clauses: [
      {
        spec: '1',
        title: 'The equations of uniformly accelerated motion',
        statement:
          'be able to use the equations for uniformly accelerated motion in one dimension: s = (u + v)t/2, v = u + at, s = ut + ½at², v² = u² + 2as',
        blocks: [
          {
            kind: 'eq',
            eq: '$v = u + at$        $s = ut + \\tfrac{1}{2}at^2$        $v^2 = u^2 + 2as$        $s = \\tfrac{1}{2}(u + v)t$',
          },
          {
            kind: 'worked',
            title: 'Worked example · a dart thrown at a dartboard',
            question:
              'A dart is thrown with a velocity of 15.6 m s⁻¹ at an angle of 5.0° to the horizontal, and it travels a horizontal distance D to the dartboard. Just before the dart hits the dartboard the vertical component of its velocity is zero. The air resistance acting on the dart is negligible. (a) Show that the time taken to reach the dartboard is about 0.14 s. (3) (b) Calculate D. (2)',
            steps: 4,
            answer: '(a) t = 0.139 s · (b) D = 2.2 m',
          },
        ],
      },
      {
        spec: '2',
        title: 'Reading and drawing motion graphs',
        statement:
          'be able to draw and interpret displacement-time, velocity-time and acceleration-time graphs',
        blocks: [
          {
            kind: 'def',
            term: 'The gradient test',
            text: 'The gradient of a displacement–time graph is the velocity. The gradient of a velocity–time graph is the acceleration. The area under a velocity–time graph is the displacement. Explain a graph through the graph: name its gradient, an area, an intercept or a shape.',
          },
          {
            kind: 'worked',
            title: 'Worked example · the platform diver',
            question:
              'A man dives from a platform into a swimming pool, 12 m above the water surface. The graph shows his vertical displacement after leaving the platform. (a)(i) State how the graph shows that the man\'s initial vertical velocity is zero. (1) (a)(ii) Determine the vertical velocity of the man as he enters the water. (2) (b) Draw the velocity-time graph for the man. (2)',
            steps: 4,
            answer: '(a)(ii) 14 m s⁻¹ downwards · (b) straight from 0 to −14 m s⁻¹ at 1.5 s, then straight back to 0 at 2.1 s',
          },
        ],
      },
    ],
  },
  {
    id: 'wph11-t02',
    unitCode: 'WPH11',
    topicLabel: 'Topic 2',
    title: 'Moments and momentum',
    specRange: '12 → 16',
    sectionsTotal: 5,
    readMinutes: 18,
    clauses: [
      {
        spec: '13',
        title: 'Momentum',
        statement: 'understand that momentum is defined as p = mv',
        blocks: [
          {
            kind: 'def',
            term: 'Momentum',
            text: 'The product of mass and velocity, **p = mv** — a ==vector== in the direction of the velocity, measured in ==kg m s\u207b\u00b9== (equivalently N s).',
          },
          {
            kind: 'eq',
            eq: 'p = mv        1 N s = 1 kg m s\u207b\u00b9',
          },
        ],
      },
      {
        spec: '16',
        title: 'Centre of gravity and the principle of moments',
        statement:
          'be able to use the concept of centre of gravity of an extended body and apply the principle of moments to an extended body in equilibrium',
        blocks: [
          {
            kind: 'def',
            term: 'Equilibrium',
            text: 'A body is in equilibrium when there is ==no resultant force on it== ==and no resultant moment about any point==. Two marks, two sentences \u2014 *clockwise moment = anticlockwise moment* alone is not sufficient, because it omits the forces half.',
          },
        ],
      },
    ],
  },
  {
    id: 'wph11-t03',
    unitCode: 'WPH11',
    topicLabel: 'Topic 3',
    title: 'Work, energy and power',
    specRange: '17 → 22',
    sectionsTotal: 6,
    readMinutes: 22,
    clauses: [
      {
        spec: '17',
        title: 'Work done',
        statement:
          'be able to use the equation for work \u0394W = F\u0394s, including calculations when the force is not along the line of motion',
        blocks: [
          {
            kind: 'def',
            term: 'Work done by a force',
            text: '**\u0394W = F\u0394s** \u2014 force \u00d7 the distance moved ==in the direction of the force==. When the force is not along the motion, use the component along it. Unit: the joule, 1 J = 1 N m.',
          },
          {
            kind: 'eq',
            eq: '\u0394W = F\u0394s        \u0394W = F\u0394s cos \u03b8        work done against gravity = mg\u0394h',
          },
        ],
      },
      {
        spec: '22',
        title: 'Efficiency',
        statement:
          'be able to use the equations efficiency = useful energy output / total energy input and efficiency = useful power output / total power input',
        blocks: [
          {
            kind: 'eq',
            eq: 'efficiency = useful energy output \u00f7 total energy input        efficiency = useful power output \u00f7 total power input',
          },
        ],
      },
    ],
  },
  {
    id: 'wph11-t04',
    unitCode: 'WPH11',
    topicLabel: 'Topic 4',
    title: 'Materials \u2014 fluids, viscosity and elasticity',
    specRange: '23 → 32',
    sectionsTotal: 10,
    readMinutes: 66,
    clauses: [
      {
        spec: '23',
        title: 'Density',
        statement: 'be able to use the equation density \u03c1 = m/V',
        blocks: [
          {
            kind: 'eq',
            eq: '\u03c1 = m/V',
          },
          {
            kind: 'eq',
            eq: 'V = (4/3)\u03c0r\u00b3',
          },
        ],
      },
      {
        spec: '24',
        title: 'Upthrust and flotation',
        statement:
          'understand how to use the relationship upthrust = weight of fluid displaced',
        blocks: [
          {
            kind: 'def',
            term: 'Upthrust',
            text: 'The upward force a fluid exerts on an object placed in the fluid. Upthrust is caused by the ==displacement of the fluid==: the upthrust on an object = the weight of the fluid the object displaces.',
          },
          {
            kind: 'eq',
            eq: 'U = \u03c1~fluid~ \u00d7 V~disp~ \u00d7 g',
          },
        ],
      },
      {
        spec: '28',
        title: 'Stress, strain and the Young modulus',
        statement:
          'understand how to use the relationships (tensile or compressive) stress = force/cross-sectional area, (tensile or compressive) strain = change in length/original length, Young modulus = stress/strain',
        blocks: [
          {
            kind: 'eq',
            eq: '\u03c3 = F/A        \u03b5 = \u0394x/x        E = \u03c3/\u03b5',
          },
        ],
      },
    ],
  },
];

export const WORKFLOW_CHAPTERS: readonly WorkflowChapter[] = [
  {
    id: 'pinpoint',
    index: '01',
    label: 'Find',
    summary: 'Search the spec, statement by statement.',
    detail: 'Type a code like 24, a core practical, or just a topic name — nothing to dig through.',
  },
  {
    id: 'assemble',
    index: '02',
    label: 'Build',
    summary: 'Tick the points, get one pack.',
    detail: 'The statements you tick become a single continuous read, with the reading time already worked out.',
  },
  {
    id: 'retain',
    index: '03',
    label: 'Track',
    summary: 'Watch each unit fill in.',
    detail: 'Minutes read, topics finished, weekly pace — kept privately in your own browser.',
  },
];

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
      'Physics 1.3 & 1.4: Mechanics — motion graphs, SUVAT, vectors, projectiles, Newton\'s laws, momentum, moments, work, energy, power — and Materials — density, upthrust, Stokes\' law and viscosity.',
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
    minutes: 56,
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
    title: 'Topic 4 · Density, upthrust and viscosity',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'IAS Topic',
    minutes: 45,
    targetAnchor: '#units',
    keywords: ['density', 'upthrust', 'flotation', 'stokes', 'viscosity', 'terminal velocity', 'laminar', 'core practical 2'],
  },
  {
    id: 'topic-5',
    kind: 'topic',
    code: 'Topic 5',
    title: 'Topic 5 · Hooke\'s law, stress and strain',
    unitCode: 'WPH11',
    unitTitle: 'WPH11 · Unit 1',
    category: 'IAS Topic',
    minutes: 81,
    targetAnchor: '#units',
    keywords: ['hooke', 'stiffness', 'young modulus', 'stress', 'strain', 'force-extension', 'stress-strain', 'elastic limit', 'yield point', 'elastic strain energy', 'core practical 3'],
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

/* Five real notes from the workspace's own corpus (NOTES_META in
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
    readMinutes: 56,
    clauses: [
      {
        spec: '12',
        title: 'Newton\'s third law \u2014 the force-pair rules',
        statement:
          'know and understand Newton\'s third law of motion and know the properties of pairs of forces in an interaction between two bodies',
        blocks: [
          {
            kind: 'def',
            term: 'Newton\'s third law pair',
            text: 'When body A exerts a force on body B, body B exerts a force on body A \u2014 ==equal in magnitude, opposite in direction, of the same type, acting on the other body, at the same time==. Two forces failing any one property are not a pair.',
          },
        ],
      },
      {
        spec: '14',
        title: 'Conservation of momentum',
        statement:
          'know the principle of conservation of linear momentum, understand how to relate this to Newton\'s laws of motion and understand how to apply this to problems in one dimension',
        blocks: [
          {
            kind: 'def',
            term: 'The principle of conservation of linear momentum',
            text: '==Total momentum before a collision = total momentum after it==, ==provided no external resultant force acts on the system== \u2014 the sum and the condition, a mark each.',
          },
          {
            kind: 'eq',
            eq: 'm\u2081u\u2081 + m\u2082u\u2082 = m\u2081v\u2081 + m\u2082v\u2082        one direction positive, the other negative',
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
            term: 'Centre of gravity',
            text: '==The point through which the weight of the object may be taken to act== \u2014 not where the weight *is* or where the mass *is concentrated*; the printed wording is *may be considered to act*.',
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
    title: 'Density, upthrust and viscosity',
    specRange: '23 → 26',
    sectionsTotal: 4,
    readMinutes: 45,
    clauses: [
      {
        spec: '23',
        title: 'Density',
        statement: 'be able to use the equation density \u03c1 = m/V',
        blocks: [
          {
            kind: 'eq',
            eq: '$\\rho = \\dfrac{m}{V}$        $V = \\tfrac{4}{3}\\pi r^3$',
          },
          {
            kind: 'worked',
            title: 'Worked example · a steel sphere for a Newton\'s cradle',
            question:
              'Each sphere of a Newton\'s cradle has a radius of 7.0 \u00d7 10\u207b\u00b3 m. Calculate the mass of one sphere. density of steel = 7.8 \u00d7 10\u00b3 kg m\u207b\u00b3 (3)',
            steps: 2,
            answer: 'm = 1.1 \u00d7 10\u207b\u00b2 kg',
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
            text: 'The upward force a fluid exerts on an object placed in it. Either printed wording scores — ==displacement== is the word that carries the mark (WPH11 October 2023, Q17(a)).',
          },
          {
            kind: 'worked',
            title: 'Worked example · the sphere lowered into water',
            question:
              'A sphere hangs from a thread and is lowered into a beaker of water on a balance; the reading rises from 0.315 kg to 0.465 kg. (a) Draw the free-body force diagram of the sphere. (3) (b)(i) Explain the increase in the reading, with a reference to Newton\'s third law. (3) (b)(ii) Determine the mass of the sphere. density of water = 1000 kg m\u207b\u00b3, density of sphere = 2000 kg m\u207b\u00b3 (4) (b)(iii) The water is replaced by the same mass of oil, of lower density \u2014 what happens to the final reading? (2)',
            steps: 7,
            answer: '(b)(ii) 0.30 kg \u00b7 (b)(iii) final reading < 465 g',
          },
        ],
      },
      {
        spec: '25',
        title: "Viscosity, Stokes' law and terminal velocity",
        statement:
          "a be able to use the equation for viscous drag (Stokes' Law), F = 6\u03c0\u03b7rv. b understand that this equation applies only to small spherical objects moving at low speeds with laminar flow (or in the absence of turbulent flow) and that viscosity is temperature dependent",
        blocks: [
          {
            kind: 'eq',
            eq: '$F = 6\\pi\\eta r v$        $W = U + D$',
          },
          {
            kind: 'worked',
            title: 'Worked example · the steel ball bearing in water',
            question:
              'A sphere falls through water at a constant speed of 0.50 m s\u207b\u00b9. Assess whether Stokes\' law can be applied to the falling sphere, with calculations. diameter = 6.0 \u00d7 10\u207b\u00b3 m, mass = 9.1 \u00d7 10\u207b\u2074 kg, upthrust = 1.1 \u00d7 10\u207b\u00b3 N, viscosity of water = 8.9 \u00d7 10\u207b\u2074 Pa s (5)',
            steps: 5,
            answer: 'D = 7.8 \u00d7 10\u207b\u00b3 N, F = 2.5 \u00d7 10\u207b\u2075 N \u2014 Stokes\' law does not apply',
          },
        ],
      },
      {
        spec: '26',
        title: 'Core Practical 2 \u2014 falling-ball viscometer',
        statement:
          'CORE PRACTICAL 2: Use a falling-ball method to determine the viscosity of a liquid',
        blocks: [
          {
            kind: 'eq',
            eq: '$\\eta = (W - U) \\div 6\\pi r v$',
          },
        ],
      },
    ],
  },
  {
    id: 'wph11-t05',
    unitCode: 'WPH11',
    topicLabel: 'Topic 5',
    title: 'Hooke\'s law, stress and strain',
    specRange: '27 → 32',
    sectionsTotal: 6,
    readMinutes: 81,
    clauses: [
      {
        spec: '27',
        title: 'Hooke\'s law and stiffness',
        statement:
          'be able to use the Hooke\'s law equation, ΔF = kΔx, where k is the stiffness of the object',
        blocks: [
          {
            kind: 'def',
            term: 'Stiffness',
            text: 'The stiffness k of an object = the force per unit extension it produces, $k = \\Delta F \\div \\Delta x$. The unit of k is **N m⁻¹**. The stiffness belongs to the ==object== — a longer wire of the same material has a smaller stiffness, and a thinner wire has a smaller stiffness too.',
          },
          {
            kind: 'eq',
            eq: '$\\Delta F = k \\Delta x$',
          },
        ],
      },
      {
        spec: '29',
        title: 'Force-extension graphs and the limit points',
        statement:
          'a be able to draw and interpret force-extension and force-compression graphs b understand the terms limit of proportionality, elastic limit, yield point, elastic deformation and plastic deformation and be able to apply them to these graphs',
        blocks: [
          {
            kind: 'def',
            term: 'Elastic limit',
            text: 'It\'s the force / stress beyond which the cable does not return to its original length ==when the force / stress is removed== (WPH11 June 2022, Q12(a)) — that clause carries the mark.',
          },
        ],
      },
      {
        spec: '32',
        title: 'Elastic strain energy',
        statement:
          'be able to calculate the elastic strain energy Eel in a deformed material sample, using the equation ΔEel = ½ FΔx, and from the area under the force-extension graph',
        blocks: [
          {
            kind: 'eq',
            eq: '$\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\Delta x$        $\\Delta E_{\\text{el}} = \\tfrac{1}{2} k \\Delta x^2$',
          },
          {
            kind: 'worked',
            title: 'Worked example · the bungee jumper',
            question:
              'A student bungee-jumps from a bridge on an elastic rope. The river is reached if the rope stretches to a total length of 35 m. Deduce whether the student reaches the river. mass of student = 65 kg, original rope length = 17 m, rope stiffness constant = 250 N m⁻¹ (4)',
            steps: 5,
            answer: '40 500 J > 22 300 J — the river is not reached',
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

import type { Topic } from "../types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Mechanics and Materials
   Topics 1.3 (Mechanics) and 1.4 (Materials) of the Pearson
   Edexcel International Advanced Level Physics specification
   (2018, Issue 3) — statements 1–32, taught in four pages:
   Forces · Moments and momentum · Work, energy and power ·
   Density, upthrust and viscosity. The mechanics split follows
   the owner's three-way cut (2026-11-22); the fluids statements
   (23–26) were rebuilt from scratch as the owner's new Topic 4
   (2026-11-23), the elasticity statements (27–32) to follow.
   ═══════════════════════════════════════════════════════════════ */

export const WPH11_TOPICS: Topic[] = [
  {
    id: "t01",
    no: "01",
    label: "Topic 1",
    title: "Forces",
    summary:
      "The opening of WPH11 mechanics — the equations of motion and the three motion graphs, vectors resolved and combined, projectiles with their two independent columns, free-body diagrams, Newton's first and second laws with terminal velocity, weight and Core Practical 1 — statement by statement, written the way the mark schemes mark it.",
    /* minutes recalibrated after the from-scratch rebuild (2026-11-22,
       scripts/minutes-check.ts): 8812 w at the mechanics rate — the
       rebuilt note is cut shorter and wider apart, same statements */
    minutes: 37,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "Forces opens WPH11's mechanics: the ==equations of motion==, the ==three motion graphs==, ==vectors== resolved and combined, ==projectiles== on their two independent columns, ==free-body diagrams==, ==Newton's laws== with ==terminal velocity==, ==weight== and ==Core Practical 1==. Every section teaches ==the way the mark schemes mark it==: the equation stated first, the working symbols =, ×, <, > inside the sentences, and every force named with its owner and direction.",
      },
      {
        k: "def",
        term: "Resultant force",
        text: "The (vector) sum of all the forces acting on an object — or, in the mark scheme's words, ==the single force that would have the same effect as all the other forces acting together==. Write **resultant force** in definitions: one printed scheme rejects *net force* as a synonym there, even though it accepts the swap inside calculations.",
      },
      {
        k: "def",
        term: "Terminal velocity",
        text: "The constant, maximum velocity reached when the drag force (plus upthrust, in a fluid) has grown until it balances the weight — the resultant force is zero, so by ==Newton's first law== the velocity stops changing.",
      },
      {
        k: "eq",
        title: "The four equations the paper prints for you",
        eq: "$v = u + at$        $s = ut + \\tfrac{1}{2}at^2$        $v^2 = u^2 + 2as$        $s = \\tfrac{1}{2}(u + v)t$",
        note: "All four appear on the WPH11 data sheet. The marks are never for remembering them — they are for choosing the right one, converting units, and finishing with a comparison and a conclusion when the command word is *deduce*.",
      },
      {
        k: "p",
        text: "Each situation — a dart at a dartboard, two cars racing, the scales in a lift — is ==a worked example card==: the question as the paper sets it, with the paper and question number on it, one marking point per step, the workings set out line by line, and the answer sealed underneath. The mark schemes' ==rejected wordings== are quoted inside the cards.",
      },
      {
        k: "tips",
        items: [
          "A 3-mark explanation almost always needs **3 distinct points** — the examiners' reports say exactly this.",
          "*Show that X ≈ 300 N* means quote **at least one more significant figure** than 300 — 281 N or 296 N, never 300 exactly.",
          "After a show-that, **use the given value** in later parts — ecf protects you, and the question expects it.",
          "g = 9.81 (9.8 is accepted). Using 10 costs one mark, once per paper. Missing units cost the final calculation mark.",
        ],
      },
      {
        k: "recap",
        items: [
          "The equations of motion only when acceleration is constant — on a curved slide, switch to energy conservation.",
          "Projectiles: two columns, horizontal a = 0, vertical a = g, time is the bridge.",
          "ΣF = ma with the *resultant* force — draw the free-body diagram first.",
          "Deduce questions end with a number, a comparison (<, >, =, ≈) and a sentence.",
        ],
      },
    ],
  },
  {
    id: "t02",
    no: "02",
    label: "Topic 2",
    title: "Moments and momentum",
    summary:
      "Newton's third law and the five properties of a force pair, momentum and its conservation in one dimension, then the turning effects — the moment of a force, the centre of gravity and the principle of moments, from a loft ladder to a crane's counterweight — statement by statement, written the way the mark schemes mark it.",
    /* minutes recalibrated for the split (2026-11-22): statements
       12–16 at the mechanics words-per-minute rate, the third-law
       rules leading straight into momentum as the papers pair them */
    minutes: 18,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "The force-pair rules lead this topic because the papers keep asking for them inside momentum questions — *state how Newton's third law applies during the collision* is a printed sub-part of a conservation question. From the pairs, ==momentum== and its ==conservation in one dimension==; from the turning effects, the ==moment of a force==, the ==centre of gravity== and the ==principle of moments==. The situations — two gliders that stick, a spaceship's separating modules, a loft ladder on a hinge, a crane and its counterweight, a bridge on two supports — are all worked example cards: the question as the paper sets it, the marking points as steps, the answer sealed.",
      },
      {
        k: "def",
        term: "Momentum",
        text: "Mass in motion: **p = mv** — a ==vector==, in the direction of the velocity, measured in ==kg m s⁻¹== (equivalently N s). The direction is what the conservation sums lean on: opposite directions carry opposite signs.",
      },
      {
        k: "def",
        term: "Moment of a force",
        text: "The turning effect of a force about an axis: **moment = Fx**, with x the ==perpendicular distance== from the axis to the force's ==line of action==. Unit: **N m**.",
      },
      {
        k: "eq",
        title: "The equations this topic turns on",
        eq: "p = mv        m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂        moment = Fx",
        note: "Assign + and − to the two directions ==before== substituting into the conservation equation, and state which way is positive; in the moment equation take x ==perpendicular== to the force — or use the component of the force along the lever. Both habits are the marks the schemes keep awarding.",
      },
      {
        k: "p",
        text: "The mark schemes' ==rejected wordings== are quoted inside the cards — the *equal and opposite reaction* slogan that scores nothing on its own, the momentum answers that never mention forces — and the Not accepted notes collect the general traps.",
      },
      {
        k: "tips",
        items: [
          "The conservation principle is **two marks in one sentence**: ==total momentum before = total momentum after==, ==provided no external resultant force acts on the system== — say both halves when the question asks for the principle in words.",
          "A third-law pair is checked on **five properties at once**: equal magnitude · opposite directions · same type of force · acting on different bodies · acting at the same time.",
          "A moments question is a table, not an inspiration: choose the ==pivot==, mark the ==centre of gravity==, list each force's turning direction, write moment = Fx for each, balance.",
          "The ==limiting case== (toppling, lifting, on the point of sliding) is where the final mark sits: state the comparison first, then the verdict.",
        ],
      },
      {
        k: "recap",
        items: [
          "Momentum is conserved in a closed system; say *total*, say *system*, say the condition.",
          "Moment = Fx with the ==perpendicular== distance — or F cos θ × d with the force at θ to the lever.",
          "A uniform beam's weight acts at its ==middle==; the centre of gravity is where the weight *may be taken to act*.",
          "Starred momentum questions chain: pair rule → resultant → momentum change, with so / because joining the sentences.",
        ],
      },
    ],
  },
  {
    id: "t03",
    no: "03",
    label: "Topic 3",
    title: "Work, energy and power",
    summary:
      "The calculation engine of WPH11 — work done at and against the motion, kinetic and gravitational potential energy, the conservation of energy in full chains, power and efficiency, closing with the standing marking rules every WPH11 mark scheme prints — statement by statement, written the way the mark schemes mark it.",
    /* minutes recalibrated for the split (2026-11-22): statements
       17–22 at the mechanics words-per-minute rate, carrying the
       closing "marking rules that never change" group */
    minutes: 22,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "The recurring WPH11 calculation lives here: ==work done== at and against the motion, ==kinetic energy== and ==gravitational potential energy==, ==conservation of energy== chains — a curved slide, a bungee jump, a skydiver's whole fall — then ==power== and ==efficiency==. The question the series keep asking is the same one: ==which number is the useful output==, ==which the total input==, and what happened to the difference. Each situation is a worked example card — the question as the paper sets it, with the paper and question number on it, the marking points as steps and the answer sealed underneath.",
      },
      {
        k: "def",
        term: "Work done",
        text: "ΔW = FΔs — the energy transferred when a force moves through a displacement. Only the component ==along the line of motion== counts: at θ to the movement, ΔW = F cos θ × Δs. Unit: **J**.",
      },
      {
        k: "eq",
        title: "The energy set on the data sheet",
        eq: "ΔW = FΔs        Ek = ½mv²        ΔEgrav = mgΔh        P = E/t = W/t        efficiency = useful ÷ total",
        note: "All printed — the marks are in ==choosing==, converting units, and finishing a *deduce* with a comparison and a sentence. The conservation chains add the accounting: the energy lost by one store ==equals== the energy gained by the others.",
      },
      {
        k: "p",
        text: "The topic closes with ==the marking rules that never change== — the standing rules printed in every WPH11 mark scheme across the series: *use of* marks, ecf, the show-that significant figures, the unit penalty, g = 9.81, the shape of a *deduce* answer and the starred-question structure bands.",
      },
      {
        k: "tips",
        items: [
          "Efficiency is a plain decimal (0.28) or a ==percentage== (28 %) — the % symbol is required in percentage form, and an answer above 100 % is an accounting error.",
          "The waste = (1 − efficiency) × the ==total input==, and the total input = the useful output + the waste — neither goes in the numerator.",
          "Power is a ==rate==: P = E/t with E in J and t in s. When a force and a speed are both in play, P = Fv.",
          "*Time from a power* is the rearrangement the papers set — divide the energy by the power, ==don't multiply==.",
        ],
      },
      {
        k: "recap",
        items: [
          "Conservation chains: name the stores, set the losses ==equal== to the gains — a curved slide's speed from height needs no acceleration.",
          "ΔW = FΔs with the force ==along the motion==; at an angle, F cos θ × Δs.",
          "Efficiency: useful output ÷ total input — ==which number is the useful one== is the mark.",
          "Deduce questions end with a number, a comparison and a sentence — always.",
        ],
      },
    ],
  },
  {
    id: "t04",
    no: "04",
    label: "Topic 4",
    title: "Density, upthrust and viscosity",
    summary:
      "The fluids half of WPH11's Materials, rebuilt from scratch in the breathing register — density from mass and volume, upthrust as the weight of fluid displaced, floating and the fraction rule, Stokes' law with its four conditions, terminal velocity as a three-force balance, and the falling-ball viscometer — statement by statement, written the way the mark schemes mark it.",
    /* minutes recalibrated after the polish pass (2026-11-23,
       scripts/minutes-check.ts): 11574 w at the mechanics rate —
       the scenario sections came back, so the read grew */
    minutes: 48,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "Density, upthrust and viscosity close Unit 1 — and the mark schemes ask for the ==same sentences== every series: ==an upwards force caused by the displacement of fluid==, ==upthrust = weight of fluid displaced==, ==a small spherical object moving at low speed with laminar flow==. Every section teaches ==the way the mark schemes mark it==: the equation stated first, the working symbols =, ×, <, > inside the sentences, and every force named with its owner and direction.",
      },
      {
        k: "def",
        term: "Upthrust",
        text: "The upward force a fluid exerts on an object in it — ==the weight of the fluid the object displaces==. A floating object floats because upthrust ==equals== weight, not because it is greater — the examiner reports call that swap the clearest misconception of the series.",
      },
      {
        k: "def",
        term: "Terminal velocity",
        text: "The constant, maximum velocity of an object falling through a fluid: the point where the drag has grown until ==upthrust + drag = weight== and the resultant force is zero.",
      },
      {
        k: "eq",
        title: "The three equations this topic turns on",
        eq: "$\\rho = \\dfrac{m}{V}$        $U = \\rho_{\\text{fluid}} V_{\\text{disp}} g$        $F = 6\\pi\\eta r v$",
        note: "Stokes' law is printed on the data sheet — its ==conditions== are not: small, spherical, low speed, laminar flow. Those two marks appear in nearly every paper.",
      },
      {
        k: "p",
        text: "Each situation — a sphere lowered into water on a balance, a submarine in less salty water, a hollow brass cylinder 63% submerged, an iceberg, a hydrometer, a Cartesian diver, a Galilean thermometer, a sinking foram, a falling-ball viscometer — is ==described first==, in its own subsection, the way it behaves. The ==worked example cards== then sit together at the end of each section, ==folded to one row==: a click opens the question as the paper sets it, with the paper and question number on it, one marking point per step, the workings line by line, and the answer sealed underneath.",
      },
      {
        k: "tips",
        items: [
          "Write the falling balance as ==one equation==: W = U + D. The examiner reports warn that *weight = drag and upthrust* reads as two separate equalities.",
          "Halve the diameter ==before== cubing: the calliper measures d, Stokes' law wants r.",
          "Convert cm³ to m³ by ÷ 10⁶ — the power-of-ten slip the reports keep recording.",
          "A *deduce whether Stokes' law applies* answer = two computed drags, a comparison, and a sentence.",
        ],
      },
      {
        k: "recap",
        items: [
          "Floating: upthrust = weight — a floater displaces its own weight of fluid.",
          "Fraction submerged = ρ(object) ÷ ρ(fluid) — ice in sea water sits 89% below the surface.",
          "Terminal velocity: W = U + D with D = 6πηrv — then solve for v.",
          "Warmer liquid, lower viscosity, faster terminal fall; colder and deeper water, slower.",
        ],
      },
    ],
  },
];

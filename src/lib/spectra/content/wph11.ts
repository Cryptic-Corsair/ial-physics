import type { Topic } from "../types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Mechanics and Materials
   Topics 1.3 (Mechanics) and 1.4 (Materials) of the Pearson
   Edexcel International Advanced Level Physics specification
   (2018, Issue 3) — statements 1–32, taught in four pages:
   Forces · Moments and momentum · Work, energy and power ·
   Materials. The mechanics split follows the owner's three-way
   cut (2026-11-22): the flat 22-statement note divided into the
   motion-and-laws run (1–11), the pairs-momentum-moments run
   (12–16) and the work-energy-power run (17–22), every statement
   byte-identical where it stood.
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
    title: "Materials — fluids, viscosity and elasticity",
    summary:
      "The second half of WPH11: density and upthrust, Stokes' law and the falling-ball viscometer, then Hooke's law, stress, strain and the Young modulus — every graph feature defined, both core practicals in full, and the real questions examiners keep asking.",
    /* minutes scaled with the register rebuild and the paper-gap
       closure (2026-11-22): the wording notes, kept derivations
       and the drag-direction, measuring and unloading corrections
       add a small reading step */
    minutes: 66,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "Materials is the half of Unit 1 where the marks are most predictable. Since 2019 almost every paper has carried a ==falling-ball viscosity question== and a ==Young modulus graph question==, and the mark schemes ask for the same sentences each time: ==upthrust equals the weight of fluid displaced==, ==small sphere at low speed with laminar flow==, ==the point where the weight may be taken to act==. Learn the wording once, bank the marks every series.",
      },
      {
        k: "def",
        term: "Upthrust",
        text: "An upward force on an object in a fluid, caused by the ==displacement== of the fluid — equal to the weight of the fluid displaced. A floating object floats because upthrust *equals* weight, not because it is less than it — the examiner reports call that swap the clearest misconception of the series.",
      },
      {
        k: "def",
        term: "Young modulus",
        text: "The ratio of tensile stress to tensile strain, E = σ/ε — a property of the *material* alone, and the ==gradient of the linear part== of its stress–strain graph. Twice the stiffness for the same shape; unchanged when the wire is doubled over or recast.",
      },
      {
        k: "eq",
        title: "The materials set on the data sheet",
        eq: "ρ = m/V        F = 6πηrv        ΔF = kΔx        ΔEel = ½FΔx        E = σ/ε",
        note: "Stokes' law is printed — but the *conditions* are not: small spherical object, low speed, laminar (non-turbulent) flow. Those two marks appear in nearly every paper.",
      },
      {
        k: "p",
        text: "The note now teaches the ropes before the scenarios: every statement opens on its ==equation stated first== and unpacked in a sentence, works the central balance or derivation step by step, names ==who owns each variable==, and closes the traps the examiner reports keep recording — the rejected wordings flagged as Not accepted notes. The scenarios keep their build-ups: one logical step per bullet, cause before effect.",
      },
      {
        k: "p",
        text: "The recurring traps are written down by the examiners themselves: using the ==diameter as the radius==, forgetting ==cm³ to m³ is ×10^−6^==, reading the 'v' in Stokes' law as a volume, and stopping at a value when the question says *deduce*. Every one of those is a mark you can simply refuse to lose.",
      },
      {
        k: "tips",
        items: [
          "Strain has **no unit** (a percentage is fine); stress is Pa = N m^−2^; viscosity is Pa s. Marks are lost for bare numbers.",
          "The area under a **force–extension** graph is energy in joules; the area under a **stress–strain** graph is energy *per unit volume* — ==proportional== to the energy, not equal to it, exactly as the examiner reports warn.",
          "Limit of proportionality (end of the straight line) is not the elastic limit (last point of full recovery), and neither is the yield point (sudden plastic flow) — the examiners like all three in one multiple-choice item.",
          "Gradient technique: use **more than half the drawn line**, and quote to one more significant figure than the question's value.",
        ],
      },
      {
        k: "recap",
        items: [
          "Terminal velocity in a fluid: weight = upthrust + drag, then solve with Stokes.",
          "“Does Stokes' law apply?” — calculate the drag it predicts, compare with the real drag, conclude.",
          "Hotter liquid, lower viscosity, faster terminal fall (liquids; gases are the opposite way round).",
          "Young modulus from a graph: gradient × (length ÷ area), or E = Fl/(AΔx) straight off the data.",
          "Deduce questions end with a number, a comparison and a sentence — always.",
        ],
      },
    ],
  },
];

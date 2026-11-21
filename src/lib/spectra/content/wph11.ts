import type { Topic } from "../types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Mechanics and Materials
   Topics 1.3 (Mechanics) and 1.4 (Materials) of the Pearson
   Edexcel International Advanced Level Physics specification
   (2018, Issue 3) — statements 1–32, taught in two pages:
   Forces, motion and energy · Materials.
   ═══════════════════════════════════════════════════════════════ */

export const WPH11_TOPICS: Topic[] = [
  {
    id: "t01",
    no: "01",
    label: "Topic 1",
    title: "Forces, motion and energy",
    summary:
      "The whole of WPH11 mechanics — motion graphs and the equations of motion, vectors and projectiles, Newton's laws and terminal velocity, momentum, moments, work, energy and power — statement by statement, written the way the mark schemes mark it.",
    /* minutes scaled with the register rebuild (2026-11-22): the
       scenario chains add depth per statement, same as t02's step */
    minutes: 60,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "Unit 1 of IAL Physics is the scenario paper: every session wraps the same specification statements in a fresh context — a bungee jump, a crane, a submarine, a shot put, a bascule bridge. The physics never changes; the dressing does. This note teaches each statement ==the way the mark schemes mark it==: the ==equation stated first== and unpacked in a sentence, the working symbols — =, ×, >, < — inside the sentences, and ==every force named with its owner and direction==.",
      },
      {
        k: "def",
        term: "Resultant force",
        text: "The (vector) sum of all the forces acting on an object — the single force that would have the same effect as all the others acting together. Treat as a synonym of *net force* in your head, but write **resultant**: mark schemes credit the physics either way, examiners read it faster.",
      },
      {
        k: "def",
        term: "Terminal velocity",
        text: "The constant, maximum velocity reached when the drag force (plus upthrust, in a fluid) has grown until it balances the weight — the resultant force is zero, so by ==Newton's first law== the velocity stops changing.",
      },
      {
        k: "eq",
        title: "The four equations the paper prints for you",
        eq: "v = u + at        s = ut + ½at²        v² = u² + 2as        s = ½(u + v)t",
        note: "All four appear on the WPH11 data sheet. The marks are never for remembering them — they are for choosing the right one, converting units, and finishing with a comparison and a conclusion when the command word is *deduce*.",
      },
      {
        k: "p",
        text: "Each situation — a rocket lifting off, a ball sinking towards terminal velocity, a bridge balanced on two supports — is built up as ==its own short section==, one logical step per bullet, cause before effect. The mark schemes' ==rejected wordings== are flagged as Not accepted notes: the slogan that scores nothing, the cosine that was never needed, the energy story in a forces question.",
      },
      {
        k: "tips",
        items: [
          "A 3-mark explanation almost always needs **3 distinct points** — the examiners' reports say exactly this.",
          "*Show that X ≈ 300 N* means quote **at least one more significant figure** than 300 — 281 N or 296 N, never 300 exactly. Reverse working caps you at 2 of 3 marks.",
          "After a show-that, **use the given value** in later parts — ecf protects you, and the question expects it.",
          "g = 9.81 (or 9.8). Using 10 costs one mark per question. Missing units cost the final calculation mark.",
        ],
      },
      {
        k: "recap",
        items: [
          "The equations of motion only when acceleration is constant — on a curved slide, switch to energy conservation.",
          "Projectiles: two columns, horizontal a = 0, vertical a = g, time is the bridge.",
          "ΣF = ma with the *resultant* force — draw the free-body diagram first.",
          "Momentum is conserved in a closed system; say *total*, say *system*, say the condition.",
          "Deduce questions end with a number, a comparison (<, >, =, ≈) and a sentence.",
        ],
      },
    ],
  },
  {
    id: "t02",
    no: "02",
    label: "Topic 2",
    title: "Materials — fluids, viscosity and elasticity",
    summary:
      "The second half of WPH11: density and upthrust, Stokes' law and the falling-ball viscometer, then Hooke's law, stress, strain and the Young modulus — every graph feature defined, both core practicals in full, and the real questions examiners keep asking.",
    /* minutes scaled with the register rebuild (2026-11-22):
       the mark-scheme wording and examiner-report notes and the
       kept derivations add a reading step, without the ropes
       duplication */
    minutes: 65,
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

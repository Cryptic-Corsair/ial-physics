import type { Topic } from "../types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Mechanics and Materials
   Topics 1.3 (Mechanics) and 1.4 (Materials) of the Pearson
   Edexcel International Advanced Level Physics specification
   (2018, Issue 3) — statements 1–32, taught in five pages:
   Forces · Moments and momentum · Work, energy and power ·
   Density, upthrust and viscosity · Hooke's law, stress and
   strain. The mechanics split follows the owner's three-way cut
   (2026-11-22); the fluids statements (23–26) were rebuilt from
   scratch as the owner's new Topic 4 (2026-11-23); the elasticity
   statements (27–32) were built the same day as the owner's
   Topic 5, from the 2020–2024 papers and mark schemes.
   ═══════════════════════════════════════════════════════════════ */

export const WPH11_TOPICS: Topic[] = [
  {
    id: "t01",
    no: "01",
    label: "Topic 1",
    title: "Forces",
    summary:
      "Forces, statement by statement: the SUVAT equations and the three motion graphs, vectors resolved and combined, projectiles on their two independent columns, free-body diagrams, Newton's first and second laws with terminal velocity, weight and Core Practical 1. Every section ends with worked examples from the papers, one marking point at a time.",
    /* minutes recalibrated after the plain-style rewrite (2026-11-24,
       scripts/minutes-check.ts): 13916 w at the mechanics rate */
    minutes: 58,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "Forces opens WPH11's mechanics: the ==equations of motion==, the ==three motion graphs==, ==vectors== resolved and combined, ==projectiles== on their two independent columns, ==free-body diagrams==, ==Newton's laws== with ==terminal velocity==, ==weight== and ==Core Practical 1==. Every section teaches the equation first, the condition it needs, and ends with its worked examples.",
      },
      {
        k: "def",
        term: "Resultant force",
        text: "The single force that would have the same effect as all the other forces acting together. Write **resultant force** in definitions: one printed scheme rejects *net force* there, even though it accepts the swap inside calculations.",
      },
      {
        k: "def",
        term: "Terminal velocity",
        text: "The constant, maximum velocity reached when the drag force (plus upthrust, in a fluid) has grown until it balances the weight. The resultant force is then zero, so by ==Newton's first law== the velocity stops changing.",
      },
      {
        k: "eq",
        title: "The four equations the paper prints for you",
        eq: "$v = u + at$        $s = ut + \\tfrac{1}{2}at^2$        $v^2 = u^2 + 2as$        $s = \\tfrac{1}{2}(u + v)t$",
        note: "All four appear on the WPH11 data sheet. The marks are never for remembering them. They are for choosing the right one, converting units, and finishing a deduce answer with a comparison and a conclusion.",
      },
      {
        k: "p",
        text: "The situations from the papers (a dart at a dartboard, two cars racing, the scales in a lift) appear as worked examples: the question as the paper sets it, worked one marking point at a time, with the answer at the end. The mark schemes' rejected wordings are quoted inside the cards.",
      },
      {
        k: "tips",
        items: [
          "A 3-mark explanation almost always needs **3 distinct points**. The examiners' reports say exactly this.",
          "*Show that X ≈ 300 N* means quote **at least one more significant figure** than 300: 281 N or 296 N, never 300 exactly.",
          "After a show-that, **use the given value** in the later parts.",
          "g = 9.81 (9.8 is accepted). Using 10 costs one mark, once per paper. Missing units cost the final calculation mark.",
        ],
      },
      {
        k: "recap",
        items: [
          "The equations of motion need constant acceleration. On a curved slide, use energy conservation instead.",
          "Projectiles: two columns, horizontal a = 0, vertical a = g, time is the bridge.",
          "ΣF = ma with the *resultant* force. Draw the free-body diagram first.",
          "A deduce answer needs a number, a comparison (<, >, =, ≈) and a sentence.",
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
    /* minutes recalibrated (2026-11-25): the Topic 2 rebuild
       (notes-ph02r-a/b/c) lifted the note to 13592 words at the
       mechanics rate — 56.4 min by minutes-check.ts */
    minutes: 56,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "The force-pair rules lead this topic because the papers keep asking for them inside momentum questions — *state how Newton's third law applies during the collision* is a printed sub-part of a conservation question. From the pairs, ==momentum== and its ==conservation in one dimension==; from the turning effects, the ==moment of a force==, the ==centre of gravity== and the ==principle of moments==. Every situation from the papers — the cable car's weight, the person on the chair, the ejecting rocket, the child on the skateboard, the separating spaceship, the popping kernel, the pedal at an angle, the parasol in the wind, the stone on the step, the bridge with the lorry, the crane and its counterweight, the loft ladder, the coat hook, the book overhanging a shelf — is ==described first==, in its own subsection, then carried by a worked example card — the question as the paper sets it, the marking points as steps, the answer sealed.",
      },
      {
        k: "def",
        term: "Momentum",
        text: "Mass in motion — **p = mv**, a ==vector== in the direction of the velocity, measured in ==kg m s⁻¹== (equivalently N s). Opposite directions carry opposite signs.",
      },
      {
        k: "def",
        term: "Moment of a force",
        text: "The turning effect of a force about an axis: **moment = Fx**, with x the ==perpendicular distance== from the axis to the force's ==line of action==. The unit is **N m**.",
      },
      {
        k: "eq",
        title: "The equations this topic turns on",
        eq: "p = mv        m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂        moment = Fx",
        note: "Assign + and − to the two directions ==before== substituting into the conservation equation, and state which way is positive; in the moment equation take x ==perpendicular== to the force, or use the component of the force perpendicular to the lever.",
      },
      {
        k: "p",
        text: "The mark schemes' ==rejected wordings== are quoted inside the cards, and the Not accepted notes collect the traps — the third-law slogan on its own, the momentum answers that never mention forces.",
      },
      {
        k: "tips",
        items: [
          "The conservation principle is **two marks in one sentence** — ==total momentum before = total momentum after==, ==provided no external resultant force acts on the system==. Say both halves when the question asks for the principle in words.",
          "A third-law pair is checked on **five properties at once** — equal magnitude · opposite directions · same type of force · acting on different bodies · acting at the same time.",
          "A moments question is a table — choose the ==pivot==, mark the ==centre of gravity==, list each force's turning direction, write moment = Fx for each, balance.",
          "The ==limiting case== (toppling, lifting, on the point of sliding) carries the final mark — state the comparison first, then the verdict.",
        ],
      },
      {
        k: "recap",
        items: [
          "Momentum is conserved in a closed system; say *total*, say *system*, say the condition.",
          "Moment = Fx with the ==perpendicular== distance — or F cos θ × d with the force at θ to the lever.",
          "A uniform beam's weight acts at its ==middle==; the centre of gravity is where the weight *may be taken to act*.",
          "Starred momentum questions chain — the pair rule, then the resultant force, then the momentum change, with so / because joining the sentences.",
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
        text: "The recurring WPH11 calculation lives here: ==work done== at and against the motion, ==kinetic energy== and ==gravitational potential energy==, ==conservation of energy== chains — a curved slide, a bungee jump, a skydiver's whole fall — then ==power== and ==efficiency==. The question the series keep asking is the same one — ==which number is the useful output==, ==which the total input==, and what happened to the difference. Each situation is a worked example card — the question as the paper sets it, with the paper and question number on it, the marking points as steps and the answer sealed underneath.",
      },
      {
        k: "def",
        term: "Work done",
        text: "ΔW = FΔs — the energy transferred when a force moves through a displacement. Only the component ==along the line of motion== counts — at θ to the movement, ΔW = F cos θ × Δs. The unit is **J**.",
      },
      {
        k: "eq",
        title: "The energy set on the data sheet",
        eq: "ΔW = FΔs        Ek = ½mv²        ΔEgrav = mgΔh        P = E/t = W/t        efficiency = useful ÷ total",
        note: "All printed — the marks are in ==choosing==, converting units, and finishing a *deduce* with a comparison and a sentence. The conservation chains are the accounting — the energy lost by one store ==equals== the energy gained by the others.",
      },
      {
        k: "p",
        text: "The topic closes with ==the marking rules that never change== — the standing rules printed in every WPH11 mark scheme across the series, from *use of* marks and ecf to the show-that significant figures, the unit penalty, g = 9.81, what a *deduce* answer needs and the starred-question structure bands.",
      },
      {
        k: "tips",
        items: [
          "Efficiency is a plain decimal (0.28) or a ==percentage== (28 %) — the % symbol is required in percentage form, and an answer above 100 % is an accounting error.",
          "The waste = (1 − efficiency) × the ==total input==, and the total input = the useful output + the waste — the numerator is always the ==useful output==.",
          "Power is a ==rate==, P = E/t with E in J and t in s. When a force and a speed are both in play, P = Fv.",
          "*Time from a power* is the rearrangement the papers set — divide the energy by the power, ==don't multiply==.",
        ],
      },
      {
        k: "recap",
        items: [
          "Conservation chains — name the stores, set the losses ==equal== to the gains; a curved slide's speed from height needs no acceleration.",
          "ΔW = FΔs with the force ==along the motion==; at an angle, F cos θ × Δs.",
          "Efficiency = useful output ÷ total input — ==which number is the useful one== is the mark.",
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
    /* minutes recalibrated after the independent-bullet pass
       (2026-11-23, scripts/minutes-check.ts): 12390 w at the
       mechanics rate — the owner's density teaching moved in
       verbatim, which stretches the reading time */
    minutes: 52,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "Density, upthrust and viscosity are the fluids half of WPH11's Materials — and the mark schemes ask for the ==same sentences== every series: ==an upwards force caused by the displacement of fluid==, ==upthrust = weight of fluid displaced==, ==a small spherical object moving at low speed with laminar flow==. Every section teaches ==the way the mark schemes mark it==: the equation stated first, and every force named with its owner and direction.",
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
        text: "Each situation — the balance, the hydrometer, the two submarines, the diver, the thermometer, the ballast tanks, the iceberg, the sinking foram — is ==described first==, in its own subsection, the way it behaves. The ==worked example cards== then sit together at the end of each section, ==folded to one row==: a click opens the question as the paper sets it, one marking point per step, the workings line by line, the answer sealed underneath.",
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
  {
    id: "t05",
    no: "05",
    label: "Topic 5",
    title: "Hooke's law, stress and strain",
    summary:
      "The solid-materials close of WPH11's Materials, built from the 2020–2024 papers — Hooke's law and stiffness as properties of the object, stress, strain and the Young modulus as properties of the material, the force-extension and stress-strain graphs with their limit points read the way the mark schemes mark them, Core Practical 3 from the rig to the graph, and the elastic strain energy as the area under the graph — statement by statement.",
    /* minutes calibrated after the build (2026-11-23,
       scripts/minutes-check.ts): 8459 w at the mechanics rate */
    minutes: 35,
    ao: ["AO1", "AO2", "AO3"],
    blocks: [
      {
        k: "p",
        text: "Hooke's law, stress and strain close Unit 1 — and the mark schemes ask for the ==same sentences== every series: ==the ratio of stress to strain for a material==, ==the force/stress beyond which the sample does not return to its original length when the load is removed==, ==a sudden or large plastic deformation==. Every section teaches ==the way the mark schemes mark it==: the equation stated first, the working symbols (=, ×, ÷, >, <) inside the sentences, and every quantity named with its owner — the ==stiffness of the object==, the ==Young modulus of the material==.",
      },
      {
        k: "def",
        term: "Stiffness",
        text: "The force per unit extension of an ==object==, k = ΔF/Δx, in N m⁻¹. Longer wire, thinner wire — smaller stiffness. It changes with the object's shape; the Young modulus does not.",
      },
      {
        k: "def",
        term: "Young modulus",
        text: "The ratio of stress to strain for a ==material==, E = σ/ε, in Pa. The papers print it as GPa for fibres and rope. It never changes when the sample is made longer or thinner — the examiner reports call that the property that survives the dimension change.",
      },
      {
        k: "eq",
        title: "The equations this topic turns on",
        eq: "$\\Delta F = k\\Delta x$        $\\sigma = \\dfrac{F}{A}$        $\\varepsilon = \\dfrac{\\Delta x}{x}$        $E = \\dfrac{\\sigma}{\\varepsilon}$        $\\Delta E_{\\text{el}} = \\tfrac{1}{2}F\\Delta x$",
        note: "All but k = EA/x are printed on the data sheet — the stiffness-Young-modulus relation appears ==inside the question== when the paper wants it used. The marks are in the definitions (the elastic limit's ==when the load is removed==), the large-triangle gradients and the final comparisons.",
      },
      {
        k: "p",
        text: "Each situation — an elastic cord on an air track, a nylon rope in a pulley system, a spring loaded past its elastic limit, a steel cable at its elastic limit, a metal rod under compression, spider silk against steel, two Young modulus experiments — is ==a worked example card==: the question as the paper sets it, with the paper and question number on it, one marking point per step, the workings set out line by line, and the answer sealed underneath.",
      },
      {
        k: "tips",
        items: [
          "Strain carries ==no unit== — a ratio of two lengths. Give it as a decimal or a percentage; the examiner reports say fraction answers do not score.",
          "The gradient of a stress-strain graph is E; the gradient of a force-extension graph is k — swap them and every mark after the first goes.",
          "Use a ==large triangle== for a graph gradient — the schemes give one mark only when the points cover less than half the drawn line.",
          "A definition of the elastic limit without ==when the load is removed== scores nothing — the examiner reports flag it every series.",
        ],
      },
      {
        k: "recap",
        items: [
          "Hooke's law — ΔF = kΔx up to the limit of proportionality; the gradient of the force-extension graph is the stiffness.",
          "σ = F/A, ε = Δx/x, E = σ/ε — the Young modulus belongs to the material, the stiffness to the object.",
          "Limit of proportionality — the force stops being proportional to the extension. Elastic limit — the sample stops returning to its original length when the load is removed. Yield point — a sudden or large ==plastic== deformation.",
          "ΔEel = ½FΔx = the area under the force-extension graph — count squares when the graph curves, and subtract the unloading area when heating occurs.",
        ],
      },
    ],
  },
];

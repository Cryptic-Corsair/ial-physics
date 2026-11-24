import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces · Part B (statements 4–6)
   Scalars and vectors, resolving, resultants. Teaching first,
   worked examples at the end of each section, in the owner's
   plain style. The spec 4 cards are built from the printed
   questions (June 2023 Q1, January 2020 Q1, June 2026 01A Q11).
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01F_B: SpecSection[] = [
  {
    spec: "4",
    statement:
      "understand scalar and vector quantities and know examples of each type of quantity and recognise vector notation",
    title: "Scalars and vectors",
    blocks: [
      {
        k: "def",
        term: "Scalar",
        text: "A quantity with magnitude only: distance, speed, mass, energy, work done, power, density, time, temperature.",
      },
      {
        k: "def",
        term: "Vector",
        text: "A quantity with magnitude ==and direction==: displacement, velocity, acceleration, force, weight, tension, momentum.",
      },
      {
        k: "bullets",
        items: [
          "A multiple choice on this appears in almost every paper. It asks which quantity is the vector, or which table row is correct, or which unit belongs to a vector.",
          "The options come from the same short list every time, so the table below covers every quantity that has appeared.",
        ],
      },
      {
        k: "table",
        caption: "Every quantity that has appeared as an option in these questions",
        head: ["Vector (magnitude and direction)", "Scalar (magnitude only)"],
        rows: [
          ["displacement", "distance"],
          ["velocity", "speed"],
          ["force, weight, tension, thrust", "mass"],
          ["momentum", "kinetic energy"],
          ["moment of a force", "work done"],
          ["gravitational field strength", "density, time, temperature"],
          ["acceleration", "pressure, electric charge"],
          ["—", "efficiency, power, energy, viscosity, strain, Young modulus"],
        ],
      },
      {
        k: "bullets",
        items: [
          "The last row matters: efficiency, power and energy are all scalars, yet they appear beside vectors in the wrong options.",
          "The pairs most often confused: moment of a force (vector) beside work done (scalar), momentum beside kinetic energy, weight beside mass.",
        ],
      },
      { k: "h", text: "Which quantity has this unit?" },
      {
        k: "bullets",
        items: [
          "N, N s and N m all belong to direction-bearing quantities.",
          "J, kg and W do not settle it. The harder version offers J, kg, N and W, and the answer is the ==newton==.",
          "Acceleration's unit can be written two ways: $\\text{m s}^{-2}$ ==and== $\\text{N kg}^{-1}$. The 2026 01A paper offered both and credited $\\text{N kg}^{-1}$.",
        ],
      },
      { k: "h", text: "Speed and velocity on a curve" },
      {
        k: "bullets",
        items: [
          "A car on a roundabout at constant speed has a ==changing velocity==. The direction changes, and velocity carries the direction.",
          "Same fact from the other end: a change of direction alone is a change of velocity, so an acceleration exists even at steady speed.",
        ],
      },
      { k: "h", text: "Base units" },
      {
        k: "table",
        caption: "The same units rebuilt from the SI base units",
        head: ["Quantity", "Unit", "In SI base units"],
        rows: [
          ["force, weight, tension", "N", "kg m s⁻²"],
          ["momentum", "kg m s⁻¹", "kg m s⁻¹"],
          ["work done, energy", "J", "kg m² s⁻²"],
          ["power", "W", "kg m² s⁻³"],
        ],
      },
      {
        k: "bullets",
        items: [
          "Derive them by substitution: $1\\ \\text{N} = 1\\ \\text{kg m s}^{-2}$, so $1\\ \\text{J} = 1\\ \\text{N m} = 1\\ \\text{kg m}^2\\ \\text{s}^{-2}$.",
        ],
      },
      { k: "h", text: "Vector notation" },
      {
        k: "bullets",
        items: [
          "In print a vector is written bold ($\\mathbf{F}$) or with an arrow above the letter; its magnitude is plain italic ($F$).",
          "An equilibrium written as one vector sentence — $\\mathbf{W} + \\mathbf{T}_1 + \\mathbf{T}_2 = \\mathbf{0}$ — is a statement about arrows.",
          "Three vectors of different lengths, added nose-to-tail, close back on themselves.",
          "Added as bare numbers the sentence is false, because the three forces point in different directions. The equilibrium option is credited only when the forces are added as vectors.",
        ],
      },
      { k: "h", text: "The change in a vector" },
      {
        k: "bullets",
        items: [
          "The change in any vector is itself a vector.",
          "Subtract with signs: $\\Delta v = v_{\\text{final}} - v_{\\text{initial}}$.",
          "A car travelling north that slows from $+50\\ \\text{m s}^{-1}$ to $+20\\ \\text{m s}^{-1}$ has changed its velocity by $-30\\ \\text{m s}^{-1}$.",
          "The change points south, opposite to the motion (WPH11 October 2020, Q4).",
          "Drawn as arrows, the change runs from the tip of the initial arrow to the tip of the final one (WPH11 January 2020, Q3).",
          "The same signed subtraction returns in the momentum sums of Topic 2.",
        ],
      },
      {
        k: "worked",
        title: "Spotting the vector",
        question:
          "Which of the following is a vector quantity?  A efficiency · B kinetic energy · C power · D weight — *WPH11 June 2023, Q1*",
        steps: [
          "Weight has magnitude and direction, so it is the vector. Option D.",
          "The other three have magnitude only: efficiency is a ratio, kinetic energy is $\\tfrac{1}{2}mv^2$, and power is energy per second.",
        ],
        answer: "D — weight",
        ms: {
          label: "Mark scheme",
          text: "A is incorrect because *efficiency is not a vector quantity* · B is incorrect because *energy is not a vector quantity* · C is incorrect because *power is not a vector quantity*.",
        },
      },
      {
        k: "worked",
        title: "Base units of a quantity",
        question:
          "Which of the following quantities has the SI base units kg m² s⁻³?  A force · B momentum · C power · D work done — *WPH11 January 2020, Q1*",
        steps: [
          "Write each unit in base units.\nForce is $\\text{N} = \\text{kg m s}^{-2}$. Momentum is $\\text{kg m s}^{-1}$. Work done is $\\text{J} = \\text{N m} = \\text{kg m}^2\\ \\text{s}^{-2}$.",
          "Power is energy per second, and $1\\ \\text{W} = 1\\ \\text{J s}^{-1}$:\n$\\text{W} = \\frac{\\text{kg m}^2\\ \\text{s}^{-2}}{\\text{s}} = \\text{kg m}^2\\ \\text{s}^{-3}$\nOption C.",
        ],
        answer: "C — power",
        ms: {
          label: "Mark scheme",
          text: "*A is not the correct answer as units would be kg m s-2* · *B is not the correct answer as units would be kg m s-1* · *D is not the correct answer as units would be kg m2 s-2*.",
        },
      },
      {
        k: "worked",
        title: "Constant speed, changing velocity",
        question:
          "A man drives his car along a road at a constant speed. The road has many bends. Explain how the speed of the car can be constant but the velocity of the car changes. (2) — *WPH11 June 2026 01A, Q11*",
        steps: [
          "Velocity is a vector and speed is a scalar. Velocity has magnitude and direction; speed has magnitude only.",
          "The bends keep changing the direction of the car, so the direction of the velocity changes while its magnitude, the speed, stays constant.",
        ],
        answer: "velocity is a vector with direction; the direction changes along the bends, so the velocity changes",
        ms: {
          label: "Mark scheme",
          text: "*velocity is a vector (but speed is a scalar)* Or *velocity has magnitude/speed and direction (but speed does not have direction)* (1) · *Direction is changing (so velocity changes)* (1).",
        },
      },
    ],
  },
  {
    spec: "5",
    statement:
      "be able to resolve a vector into two components at right angles to each other by drawing and by calculation",
    title: "Resolving a vector into components",
    blocks: [
      {
        k: "eq",
        eq: "$F_{\\parallel} = F\\cos\\theta$        $F_{\\perp} = F\\sin\\theta$",
        note: "One component along the reference direction, one at right angles to it. The sanity check: at $\\theta = 0^{\\circ}$ the whole vector lies along the reference direction, and $\\cos 0^{\\circ} = 1$, so the parallel component is the full $F$.",
      },
      {
        k: "figure",
        kind: "ph-vectors",
        caption:
          "Left: resolving a force at 35° into horizontal and vertical components. Right: the same forces added nose-to-tail to find a resultant.",
      },
      { k: "h", text: "Resolving by drawing" },
      {
        k: "bullets",
        items: [
          "The spec says ==by drawing== as well as by calculation, and the drawing route carries its own marks when a question asks for it.",
          "Choose a scale that makes the longest arrow at least 6 cm: 1 cm = 1 km, or 1 cm = 10 N. Write the scale on the diagram.",
          "Draw the reference direction first (the horizontal, or north), measure the angle from it with a protractor, then draw the vector.",
          "The two components are the projections along your chosen axes: drop dashed lines from the tip, measure them against the scale, convert back.",
          "A 10 km walk at $53^{\\circ}$ above horizontal draws as 6 cm east and 8 cm north on a 1 cm = 1 km grid. The components are measured, not guessed.",
        ],
      },
      {
        k: "figure",
        kind: "ph-resolve-draw",
        caption:
          "Resolving by drawing on a grid: the 10 km displacement at 53° projects onto 6 km east and 8 km north. Measure, convert through the scale, and state both.",
      },
      { k: "h", text: "How the angle decides the function" },
      {
        k: "bullets",
        items: [
          "$\\theta$ measured ==from the horizontal==: horizontal $= F\\cos\\theta$, vertical $= F\\sin\\theta$.",
          "$\\theta$ measured ==from the vertical==: the roles swap. Vertical $= F\\cos\\theta$, horizontal $= F\\sin\\theta$.",
          "Read the reference line off the diagram before choosing the function.",
          "As the launch angle $\\theta$ decreases, $\\sin\\theta$ decreases, so the launch speed needed for a fixed height increases. The June 2019 question asked for a sketch of exactly this: $u = \\frac{u_{\\text{V}}}{\\sin\\theta}$, which rises steeply at small $\\theta$ (WPH11 June 2019, Q14).",
        ],
      },
      {
        k: "worked",
        title: "Traffic lights on a wire",
        question:
          "Traffic lights of weight W hang in equilibrium from a wire, and each side of the wire makes an angle $\\theta$ with the horizontal. Which expression gives the tension in the wire?  A $2W\\sin\\theta$ · B $\\frac{W}{2\\sin\\theta}$ · C $2W\\cos\\theta$ · D $\\frac{W}{2\\cos\\theta}$ — *WPH11 January 2025, Q10*",
        steps: [
          "The two sides share the weight; each pulls up with the vertical component of its tension:\n$2T\\sin\\theta = W$",
          "$T = \\frac{W}{2\\sin\\theta}$\nOption B.",
        ],
        answer: "B — $T = \\frac{W}{2\\sin\\theta}$",
        ms: {
          label: "Mark scheme",
          text: "C and D use $T\\cos\\theta$ — and *T cos θ is the horizontal component of tension T*.",
        },
      },
      {
        k: "worked",
        title: "A bird on a wire",
        question:
          "A string is stretched between two vertical posts, and a bird of weight W stands at the middle of the string. The string makes an angle of $80^{\\circ}$ with each post, and the tension in each side is T. Which expression gives T?  A $\\frac{W}{2\\sin 80^{\\circ}}$ · B $W \\times 2\\sin 80^{\\circ}$ · C $\\frac{W}{2\\cos 80^{\\circ}}$ · D $W \\times 2\\cos 80^{\\circ}$ — *WPH11 January 2024, Q6*",
        steps: [
          "The $80^{\\circ}$ is measured from the posts, which are vertical. So the angle is ==from the vertical==.",
          "The vertical component of each tension is $T\\cos 80^{\\circ}$:\n$2T\\cos 80^{\\circ} = W$\n$T = \\frac{W}{2\\cos 80^{\\circ}}$\nOption C.",
        ],
        answer: "C — $T = \\frac{W}{2\\cos 80^{\\circ}}$",
        ms: {
          label: "Mark scheme",
          text: "*the components of T acting vertically should be cos and should form the denominator*.",
        },
      },
      {
        k: "worked",
        title: "A painting on a peg",
        question:
          "A painting of mass 1.8 kg hangs from a peg on two identical wires, each at $25^{\\circ}$ below the horizontal. Calculate the tension in one wire. (2) — *WPH11 June 2026 01A, Q12*",
        steps: [
          "Weight first:\n$W = mg = 1.8 \\times 9.81 = 17.7\\ \\text{N}$",
          "The vertical components share the weight, and the angle is from the ==horizontal==, so sine carries the vertical part:\n$2T\\sin 25^{\\circ} = 17.7$",
          "$T = \\frac{17.7}{2\\sin 25^{\\circ}} = 21\\ \\text{N}$",
        ],
        answer: "$T \\approx 21\\ \\text{N}$",
      },
      {
        k: "worked",
        title: "A skier on a slope",
        question:
          "A person on skis slides down a slope at $14^{\\circ}$ to the horizontal with an initial speed of $7.1\\ \\text{m s}^{-1}$. Resistive forces are negligible. Calculate the speed of the skier after moving 15 m down the slope. (3) — *WPH11 January 2025, Q12*",
        steps: [
          "With friction absent, the acceleration along the slope comes from the weight's component along it:\n$a = g\\sin\\theta = 9.81 \\times \\sin 14^{\\circ} = 2.37\\ \\text{m s}^{-2}$",
          "Keep the initial speed in the equations of motion:\n$v^2 = u^2 + 2as = 7.1^2 + 2(2.37)(15) = 122$\n$v = 11\\ \\text{m s}^{-1}$",
          "The energy route agrees, worked in full. The vertical drop is $15\\sin 14^{\\circ} = 3.6\\ \\text{m}$, so\n$\\tfrac{1}{2}m(7.1)^2 + mg(3.6) = \\tfrac{1}{2}mv^2$\nDivide by $m$ and multiply by 2:\n$v^2 = 7.1^2 + 2(9.81)(3.6) = 121$ — same answer, mass cancelled.",
        ],
        answer: "$v \\approx 11\\ \\text{m s}^{-1}$",
        ms: {
          label: "Examiner's report",
          text: "*A large number of candidates either failed to take account of the initial velocity of the person or used a component of the initial velocity, and therefore ended up with an incorrect answer.*",
        },
      },
    ],
  },
  {
    spec: "6",
    statement:
      "be able to find the resultant of two coplanar vectors at any angle to each other by drawing, and at right angles to each other by calculation",
    title: "Finding a resultant",
    blocks: [
      {
        k: "bullets",
        items: [
          "*At any angle* means a ==scaled vector drawing==; *at right angles* means ==calculation== with Pythagoras.",
          "Drawing questions expect the longest arrow to be at least 6 cm long.",
          "On a drawing question the construction itself is marked. A value obtained by calculation alone does not score the drawing marks (WPH11 January 2019, Q15(a)).",
        ],
      },
      {
        k: "steps",
        caption: "The scaled vector diagram",
        items: [
          {
            title: "Choose a scale",
            text: "Big enough that the longest force is a long arrow — at least 6 cm. State the scale.",
          },
          {
            title: "Draw tip-to-tail",
            text: "The second vector starts from the tip of the first, at the true angle between them. Label each arrow with the force it represents, never with its drawn length in cm.",
          },
          {
            title: "Close the triangle",
            text: "The resultant runs from the tail of the first arrow to the tip of the last. Measure its length and convert back through the scale; measure the angle with a protractor and state the direction.",
          },
        ],
      },
      {
        k: "figure",
        kind: "ph-vector-triangle",
        caption:
          "The sailing-boat triangle from October 2025, drawn tip-to-tail at the true 120° angle and closed by the 380 N resultant at 68° from north.",
      },
      { k: "h", text: "Two equal forces" },
      {
        k: "bullets",
        items: [
          "Two ==equal== forces $F$ with an angle $\\theta$ ==between== them give a resultant of $2F\\cos(\\tfrac{\\theta}{2})$.",
          "It acts along the bisector of the angle, so halve the angle in the question before applying the cosine.",
          "Two 1200 N zip-line tensions meeting at $144^{\\circ}$: $R = 2 \\times 1200 \\times \\cos 72^{\\circ} = 741.6\\ \\text{N} \\approx 740\\ \\text{N}$ (WPH11 June 2024, Q19).",
          "The equilibrium questions in statement 5 use the same trigonometry in reverse: $2T\\cos(\\tfrac{\\theta}{2}) = W$ with $\\theta$ the angle between the two tensions.",
        ],
      },
      {
        k: "worked",
        title: "A sailing boat's two forces",
        question:
          "A sailing boat is moving through water. The force of the wind on the boat is 350 N towards north. The force of the water on the boat is 410 N at an angle of $120^{\\circ}$ from north. Determine the magnitude and direction of the resultant force on the boat using a scaled vector diagram. (4) — *WPH11 October 2025, Q12*",
        steps: [
          "Draw north on the page. The wind force runs along it, 350 N to your scale.\nSay the scale: $1\\ \\text{cm} = 100\\ \\text{N}$ makes both arrows long.",
          "From the wind arrow's tip, draw the water force at $120^{\\circ}$ ==from north==, 410 N to the same scale.\nThe angle is measured from the north line, not from the first arrow.",
          "Close the triangle: the resultant runs from the start to the tip of the second arrow.\nLabel it with the force's name, never its length.",
          "Measure and convert back:\n$R \\approx 380\\ \\text{N}$ at $68^{\\circ}$ from north\nPrinted tolerances: 370 N to 390 N, and $66^{\\circ}$ to $70^{\\circ}$.",
          "Check by calculation:\n$R^2 = 350^2 + 410^2 + 2(350)(410)\\cos 120^{\\circ} = 147\\,100$\n$R = 384\\ \\text{N}$, inside the tolerance. In the exam the drawing is what gets marked, so the calculation is only a check.",
        ],
        answer: "$R \\approx 380\\ \\text{N}$ at $68^{\\circ}$ from north (370–390 N, 66°–70°)",
        ms: {
          label: "Mark scheme",
          text: "*Magnitude of resultant force = 380 N* · *Angle of resultant force from north = 68*.",
        },
      },
      {
        k: "worked",
        title: "A ladder leaning on a smooth wall",
        question:
          "A uniform ladder of weight 120 N leans against a wall. The wall exerts a normal contact force $F_{\\text{w}}$ on the ladder. The ground exerts a force $F_{\\text{g}}$ on the ladder at an angle $\\theta$ to the vertical. Determine the magnitude of $F_{\\text{g}}$ when $\\theta = 15^{\\circ}$, using a scaled vector diagram. (4) — *WPH11 June 2026, Q20(a)*",
        steps: [
          "The ladder is in equilibrium, so the three forces close a triangle: weight 120 N straight down, $F_{\\text{w}}$ horizontal, $F_{\\text{g}}$ closing at $15^{\\circ}$ from the vertical.",
          "Draw the 120 N arrow at least 6 cm, ==labelled W, mg, weight or 120 N==. The scheme credits any of those labels.",
          "Complete the triangle with two sides labelled and the $15^{\\circ}$ angle between weight and $F_{\\text{g}}$.",
          "All three arrows go in the correct relative directions: the weight down, the wall force away from the wall, the ground force up towards the ladder.",
          "Measure:\n$F_{\\text{g}} = 124\\ \\text{N}$\nPrinted range: 120 N to 128 N. The June 2026 paper listed a protractor in the equipment for this question, so take one into the exam.",
          "Calculation agrees: $F_{\\text{g}} = \\frac{120}{\\cos 15^{\\circ}} = 124\\ \\text{N}$. Use it to check the drawing, not to replace it.",
        ],
        answer: "$F_{\\text{g}} \\approx 124\\ \\text{N}$ (120–128 N), drawn to scale",
        ms: {
          label: "Mark scheme",
          text: "*vector triangle of correct shape drawn with at least two sides labelled* · *allow answers in the range 120 N to 128N*.",
        },
      },
      {
        k: "worked",
        title: "A submarine's resultant force",
        question:
          "The diagram shows a submarine. The engine produces a horizontal force of 70 N forwards. The drag force on the submarine is 43 N, directed backwards and downwards at $25^{\\circ}$ to the horizontal. Determine the magnitude and direction of the resultant force on the submarine using a scaled vector diagram. (5) — *WPH11 January 2025, Q18*",
        steps: [
          "Draw the 70 N arrow to scale, then the 43 N drag from its tip, at $25^{\\circ}$ below the backwards direction.\nLabel each arrow with the force it represents.",
          "Close the triangle: the resultant runs from the tail of the first arrow to the tip of the last.",
          "Measure and convert back through the scale:\n$R \\approx 36\\ \\text{N}$ at $\\approx 30^{\\circ}$ below the horizontal\nPrinted tolerances: 34 N to 38 N, and $\\pm 2^{\\circ}$.",
          "Check by calculation:\n$70 - 43\\cos 25^{\\circ} = 31.0\\ \\text{N}$\n$43\\sin 25^{\\circ} = 18.2\\ \\text{N}$\n$R = \\sqrt{31.0^2 + 18.2^2} = 36\\ \\text{N}$ at $\\tan^{-1}\\!\\left(\\frac{18.2}{31.0}\\right) = 30^{\\circ}$\nOn a drawing question the calculation gains the answer mark, but the construction marks belong to the triangle, so the triangle must be drawn as well.",
        ],
        answer: "$R \\approx 36\\ \\text{N}$ at $30^{\\circ}$ below the horizontal",
        ms: {
          label: "Examiner's report",
          text: "*Many candidates drew a free-body force diagram rather than a scaled vector diagram.* · *Many candidates labelled their vectors with the length of the arrow they had drawn, rather than with the size or description of the force that each arrow represented.* · *It was not uncommon for candidates who drew an appropriate triangle to draw the resultant force vector pointing in the wrong direction.*",
        },
      },
      {
        k: "worked",
        title: "Perpendicular resultants",
        question:
          "Two perpendicular forces act on an object: a force of 2300 N horizontally and a force of 1200 N vertically. Determine the magnitude of the resultant force using a scaled vector diagram. (2) — *WPH11 October 2024, Q11*",
        steps: [
          "Draw the triangle tip-to-tail, all three arrows in the correct relative directions.",
          "$R = \\sqrt{2300^2 + 1200^2} = 2594 \\approx 2600\\ \\text{N}$\nPrinted range: 2550 N to 2650 N. Pythagoras gains the answer mark even on a drawing question.",
        ],
        answer: "$R = 2600\\ \\text{N}$ (2550 N to 2650 N)",
        ms: {
          label: "Examiner's report",
          text: "*Most candidates scored at least one mark but less than half gained both marks. Whichever method candidates used to arrive at the correct answer, marking point 2 was scored.*",
        },
      },
    ],
  },
];

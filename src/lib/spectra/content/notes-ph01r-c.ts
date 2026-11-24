import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 revised · Part C (statements 6–8)
   Finding a resultant, projectiles, free-body force diagrams.
   Same register and the same scenario guardrails as Part A —
   see the header of notes-ph01r-a.ts for the full list, and
   research/wph11/scenario-register-guardrails.md for the owner's
   own wording: situation-named sections, the owner's template
   spine (situation → force/law → one consequence per line, each
   growing out of the last → contrast → keyword reason →
   "Therefore" + the full conclusion in one sentence), one spoken
   sentence per line, plain verbs (never grows/shrinks — always
   increases, decreases or reduces), the owner's connectives only,
   exam keywords exact, no mark-scheme talk in the teaching lines.
   Mark schemes' wordings quoted verbatim in the three note labels,
   no session tags in the teaching body, worked cards folded
   together at the end of each section with their citations. The
   reading time is checked by scripts/minutes-check.ts and the
   register by scripts/t01r-guardrail-check.ts.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01R_C: SpecSection[] = [
  {
    spec: "6",
    statement:
      "be able to find the resultant of two coplanar vectors at any angle to each other by drawing, and at right angles to each other by calculation",
    title: "Finding a resultant",
    blocks: [
      {
        k: "bullets",
        items: [
          "The resultant of two forces is the one force that has the same effect as both together.",
          "At any angle between the forces, the resultant comes from a ==scaled drawing==.",
          "At right angles, the resultant comes from ==calculation==.",
        ],
      },
      {
        k: "steps",
        caption: "The scaled vector diagram",
        items: [
          {
            title: "Choose a scale",
            text: "Big enough that the longest force draws as a long arrow — at least 6 cm.\nState the scale on the diagram.",
          },
          {
            title: "Draw tip-to-tail",
            text: "The second vector starts from the tip of the first, at the true angle between them.\nLabel each arrow with the force's name, never with its drawn length in cm.",
          },
          {
            title: "Close the triangle",
            text: "The resultant runs from the tail of the first arrow to the tip of the last.\nMeasure its length and convert back through the scale.\nMeasure the angle with a protractor and state the direction.",
          },
        ],
      },
      {
        k: "figure",
        kind: "ph-vector-triangle",
        caption:
          "The sailing-boat triangle drawn tip-to-tail at the true 120° angle, closed by the 380 N resultant at 68° from north.",
      },
      { k: "h", text: "Two forces on a sailing boat" },
      {
        k: "bullets",
        items: [
          "A sailing boat is pushed by two forces at the same time.",
          "The wind pushes it north with 350 N.",
          "The water pushes it with 410 N at $120^{\\circ}$ from north.",
          "The boat moves as if ==one== force acted on it.",
          "That one force is the resultant of the two.",
          "The angle between the forces is not $90^{\\circ}$, so the resultant comes from a drawing.",
          "Draw the 350 N arrow to scale along north.",
          "From its tip, draw the 410 N arrow at $120^{\\circ}$ from north.",
          "The angle is measured from the north line, not from the first arrow.",
          "The resultant closes the triangle, from the start to the tip of the last arrow.",
          "Measuring and converting back gives about 380 N at $68^{\\circ}$ from north.",
          "Therefore, two forces at any angle add tip-to-tail on a scaled drawing, and the resultant closes the triangle.",
        ],
      },
      { k: "h", text: "Two perpendicular forces" },
      {
        k: "bullets",
        items: [
          "Two forces act on an object at right angles to each other.",
          "One pushes horizontally with 2300 N.",
          "The other pushes vertically with 1200 N.",
          "The two arrows make a right-angled triangle with the resultant.",
          "So ==Pythagoras== gives the magnitude of the resultant.",
          "$R = \\sqrt{2300^2 + 1200^2} = 2600\\ \\text{N}$",
          "The direction comes from the ==tangent== of the angle.",
          "$\\tan\\theta = \\frac{1200}{2300}$",
          "A drawing works here too, but the calculation is exact.",
          "Therefore, perpendicular forces add by Pythagoras, and the angle comes from their tangent.",
        ],
      },
      { k: "h", text: "The drawing is the answer" },
      {
        k: "bullets",
        items: [
          "When the question says ==by drawing==, the diagram itself carries the marks.",
          "A resultant found by calculation alone does not score the drawing marks.",
          "So draw the triangle first, and use the calculation only to check.",
          "Label each arrow with the force's name, not with its length in cm.",
        ],
      },
      { k: "h", text: "Two equal forces" },
      {
        k: "bullets",
        items: [
          "Two ==equal== forces $F$ with an angle $\\theta$ between them give a resultant of $2F\\cos(\\tfrac{\\theta}{2})$.",
          "It acts along the bisector of the angle.",
          "So halve the angle in the question before applying the cosine.",
          "Two 1200 N zip-line tensions meeting at $144^{\\circ}$ give $R = 2 \\times 1200 \\times \\cos 72^{\\circ} = 740\\ \\text{N}$.",
          "The hanging-weight questions use the same trigonometry in reverse: $2T\\cos(\\tfrac{\\theta}{2}) = W$, with $\\theta$ the angle between the two tensions.",
          "Therefore, two equal forces give a resultant along the bisector, of size $2F\\cos(\\tfrac{\\theta}{2})$.",
        ],
      },
      { k: "h", text: "Worked examples" },
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
          "Measure:\n$F_{\\text{g}} = 124\\ \\text{N}$\nPrinted range: 120 N to 128 N. The paper listed a protractor in the equipment for this question, so take one into the exam.",
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
  {
    spec: "7",
    statement:
      "understand how to make use of the independence of vertical and horizontal motion of a projectile moving freely under gravity",
    title: "Projectiles",
    blocks: [
      {
        k: "def",
        term: "Projectile",
        text: "Any object moving ==freely under gravity==, with weight as its only force.",
      },
      { k: "h", text: "A ball kicked at an angle" },
      {
        k: "bullets",
        items: [
          "A ball is kicked at an angle and moves freely through the air.",
          "Air resistance is ignored, so weight is the only force on the ball.",
          "Weight pulls ==downwards== and in no other direction.",
          "So weight can only change the vertical motion of the ball.",
          "Nothing acts on the ball horizontally.",
          "So the horizontal velocity of the ball never changes.",
          "The vertical motion and the horizontal motion are ==independent==.",
          "So each column is solved on its own, with its own equation.",
          "The one quantity the two columns share is the ==time==.",
          "Air resistance would break the split, because it opposes the motion in ==both== planes.",
          "So the question says ==ignore air resistance== or ==in a vacuum==.",
          "Therefore, the two motions of a projectile are worked out separately, and only time joins them.",
        ],
      },
      {
        k: "table",
        caption: "The two columns",
        head: ["Horizontal", "Vertical"],
        rows: [
          ["$a = 0$", "$a = g$, downwards"],
          ["velocity constant", "the SUVAT equations apply"],
          ["$s = v_{\\text{H}}t$", "$s = u_{\\text{V}}t + \\tfrac{1}{2}at^2$"],
        ],
      },
      {
        k: "eq",
        eq: "$v_{\\text{H}} = v\\cos\\theta$        $u_{\\text{V}} = v\\sin\\theta$",
        note: "Set the two columns up before touching the calculator.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Teaching students to set calculations out in two columns would help them to keep horizontal and vertical components clearly separated*.",
      },
      {
        k: "figure",
        kind: "ph-projectile",
        caption:
          "A launch at 40°: the horizontal velocity never changes, the vertical velocity loses g every second, and only time belongs to both columns.",
      },
      {
        k: "figure",
        kind: "ph-projectile-journey",
        caption:
          "The whole journey on one picture: launch, top, landing. The horizontal arrows match at every point; the vertical arrow decreases to nothing at the top and returns reversed at the bottom.",
      },
      { k: "h", text: "A stone thrown horizontally from a cliff" },
      {
        k: "bullets",
        items: [
          "A stone is thrown horizontally from a cliff, above the sea.",
          "It starts with a horizontal velocity and no vertical velocity.",
          "So the vertical column starts from rest, with $u_{\\text{V}} = 0$.",
          "The fall time depends on the height only: $t = \\sqrt{2h \\div g}$.",
          "The horizontal speed does not change the fall time.",
          "The horizontal distance is the steady speed times the fall time.",
          "A stone thrown with a bigger horizontal speed lands further out.",
          "The only difference is the landing distance, because the fall time is the same.",
          "Therefore, a horizontally thrown stone falls in a time set by the height, and lands a distance set by its horizontal speed.",
        ],
      },
      { k: "h", text: "At the top of the flight" },
      {
        k: "bullets",
        items: [
          "A ball thrown at an angle rises, slows and reaches its highest point.",
          "The vertical velocity is ==zero== at the top.",
          "The horizontal velocity is unchanged, because nothing acts horizontally.",
          "The vertical acceleration is still $g$, downwards, at the top.",
          "Zero velocity does not mean zero acceleration.",
          "Therefore, at the top of a flight the vertical velocity is zero and the acceleration is still $g$ downwards.",
        ],
      },
      { k: "h", text: "Three ways a projectile is launched" },
      {
        k: "figure",
        kind: "ph-launch-types",
        caption:
          "Vertical, horizontal, angled — the same two columns, but each launch changes what you put in them before you start.",
      },
      {
        k: "bullets",
        items: [
          "A ball ==thrown straight up== uses one column only.",
          "$u_{\\text{V}}$ is the whole velocity, and $a = -g$ for the whole flight.",
          "The vertical velocity is zero at the top.",
          "The flight time is $2u_{\\text{V}} \\div g$.",
          "A ball ==launched horizontally== starts its vertical column from rest.",
          "So the drop time is $\\sqrt{2h \\div g}$, and the horizontal speed does not enter it.",
          "A ball ==launched at an angle== is resolved first into $u\\cos\\theta$ and $u\\sin\\theta$.",
          "Then both columns run, joined by the shared time.",
          "When the projectile lands at its launch height, the flight time is twice the time to the top.",
          "When it lands higher or lower, the full quadratic gives the true time.",
          "Therefore, the launch direction decides what goes into each column before you start.",
        ],
      },
      { k: "h", text: "Answering a deduce question" },
      {
        k: "bullets",
        items: [
          "A deduce answer has three parts.",
          "The calculated value, the comparison against the value in the question, and a closing sentence that answers the question.",
          "Compare in the direction the question asks: a distance against 200 m, a time against 3.15 s, a height against 3.0 m.",
          "End with words: *so yes, the rider lands on the other side*.",
          "A bare number loses the conclusion mark.",
          "Choose one route through the comparison, carry it through, and end with the conclusion.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "A dart thrown at a dartboard",
        question:
          "A dart is thrown with a velocity of $15.6\\ \\text{m s}^{-1}$ at an angle of $5.0^{\\circ}$ to the horizontal, and it travels a horizontal distance D to the dartboard. Just before the dart hits the dartboard the vertical component of its velocity is zero. The air resistance acting on the dart is negligible. **(a)** Show that the time taken to reach the dartboard is about 0.14 s. (3) **(b)** Calculate D. (2) — *WPH11 January 2024, Q12*",
        steps: [
          "(a) The vertical column carries this part. Resolve the launch velocity:\n$u_{\\text{V}} = 15.6 \\times \\sin 5.0^{\\circ} = 1.36\\ \\text{m s}^{-1}$",
          "At the board the vertical velocity is zero, so use $v = u + at$:\n$0 = 1.36 - 9.81t$",
          "$t = \\frac{1.36}{9.81} = 0.139\\ \\text{s}$\nOne more significant figure than the *about 0.14 s* the question states.",
          "(b) The horizontal column has $a = 0$, so the distance is steady speed × time:\n$D = 15.6 \\times \\cos 5.0^{\\circ} \\times 0.139 = 2.2\\ \\text{m}$",
        ],
        answer: "(a) t = 0.139 s · (b) D = 2.2 m",
        ms: {
          label: "Examiner's report",
          text: "*It was reasonably common for students to incorrectly round their calculated answer to 0.138 s instead of 0.139 s. Students who made this error only scored 2 marks in part (a).*",
        },
      },
      {
        k: "worked",
        title: "A stone thrown from a cliff",
        question:
          "A stone is projected horizontally from a cliff with an initial horizontal velocity of $3.8\\ \\text{m s}^{-1}$, from a height of 12 m above the sea. Calculate the horizontal distance travelled by the stone before it lands. (3) — *WPH11 January 2023, Q11*",
        steps: [
          "Vertical column first, with $u_{\\text{V}} = 0$:\n$12 = \\tfrac{1}{2}(9.81)t^2$\n$t = 1.56\\ \\text{s}$",
          "Horizontal column, with $a = 0$:\n$s = v_{\\text{H}}t = 3.8 \\times 1.56 = 5.9\\ \\text{m}$",
        ],
        answer: "$s = 5.9\\ \\text{m}$",
        ms: {
          label: "Examiner's report",
          text: "*Others used a = g in the horizontal plane, or u = 3.8 m s⁻¹ in the vertical plane. Teaching students to set calculations out in two columns would help them to keep horizontal and vertical components clearly separated.*",
        },
      },
      {
        k: "worked",
        title: "A ball thrown at a wall",
        question:
          "A boy throws a ball at a wall 5.00 m away. The top of the wall is 3.00 m above the release point, and the ball is thrown with an initial velocity of $9.70\\ \\text{m s}^{-1}$ at $49.0^{\\circ}$ to the horizontal. **(a)** Show that the ball travelled the distance to the wall in about 0.8 s. (3) **(b)** Deduce whether the ball went over the wall. (4) — *WPH11 October 2022, Q15*",
        steps: [
          "(a) Horizontal column first, with $a = 0$:\n$v_{\\text{H}} = 9.70\\cos 49.0^{\\circ} = 6.36\\ \\text{m s}^{-1}$\n$t = \\frac{5.00}{6.36} = 0.786\\ \\text{s}$\nOne more significant figure than the *about 0.8 s* asked.",
          "(b) Vertical column:\n$u_{\\text{V}} = 9.70\\sin 49.0^{\\circ} = 7.32\\ \\text{m s}^{-1}$\n$s = u_{\\text{V}}t + \\tfrac{1}{2}at^2 = (7.32)(0.786) - (4.905)(0.786)^2$",
          "$s = 2.72\\ \\text{m}$\nKeep the unit on every height; candidates lost marks here for leaving units off.",
          "Compare:\n$2.72\\ \\text{m} < 3.00\\ \\text{m}$\nSo the ball does not go over the wall. The comparison is the final marking point.",
        ],
        answer: "(a) t = 0.786 s · (b) no — 2.72 m < 3.00 m, the ball does not clear the wall",
        ms: {
          label: "Examiner's report",
          text: "*Many candidates lost marks by neglecting units for their values of height.*",
        },
      },
      {
        k: "worked",
        title: "A golfer's ball",
        question:
          "A golfer hit a golf ball into the air at a speed of $52\\ \\text{m s}^{-1}$ and an angle of $41^{\\circ}$ to the horizontal. The ball landed on the ground near a hole, and the ground was 11 m higher than the starting point of the ball. **(a)** Show that the vertical component of the ball's initial velocity was about 30 m s⁻¹. (2) **(b)** Show that the time taken by the ball to reach the ground was about 7 s. You should ignore the effects of air resistance. (3) **(c)** The hole is a horizontal distance of 250 m from the starting point of the ball. Deduce whether the ball landed within 5.0 m of the hole. (3) — *WPH11 June 2022, Q18*",
        steps: [
          "(a) Resolve the launch velocity:\n$u_{\\text{V}} = 52\\sin 41^{\\circ} = 34.1\\ \\text{m s}^{-1}$\nCarry 34.1 into (b), because it is one more significant figure than the *about 30* in the question.",
          "(b) The ground is 11 m ==above== the launch point, so the full quadratic is needed:\n$11 = 34.1t - 4.905t^2$\n$4.905t^2 - 34.1t + 11 = 0$",
          "$t = 6.62\\ \\text{s}$\nThe other root, 0.34 s, is the ball passing the 11 m height on the way up.",
          "(c) Horizontal column:\n$v_{\\text{H}} = 52\\cos 41^{\\circ} = 39.2\\ \\text{m s}^{-1}$\n$\\text{range} = 39.2 \\times 6.62 = 260\\ \\text{m}$",
          "Compare:\n$260\\ \\text{m} > 255\\ \\text{m}$\nSo the ball lands beyond the 5.0 m window — no.",
          "Doubling the time to maximum height works only when the projectile lands at its launch height. This ground is higher, so it does not apply here.",
        ],
        answer: "(a) 34.1 m s⁻¹ · (b) t = 6.62 s · (c) no — 260 m > 255 m",
        ms: {
          label: "Examiner's report",
          text: "*The most common incorrect approach was to find the time to maximum height and double it, giving a time that is too long.*",
        },
      },
      {
        k: "worked",
        title: "Impact speed and angle",
        question:
          "An athlete of weight 680 N runs horizontally and clears the bar with kinetic energy of 409 J. After clearing the bar he falls 1.4 m vertically before landing. Calculate the magnitude of the athlete's landing velocity and its direction as an angle from the vertical. (4) — *WPH11 October 2024, Q15*",
        steps: [
          "The horizontal speed comes from the kinetic energy. The mass first:\n$m = \\frac{W}{g} = \\frac{680}{9.81} = 69.3\\ \\text{kg}$\n$v_{\\text{H}} = \\sqrt{\\frac{2 \\times 409}{69.3}} = 3.44\\ \\text{m s}^{-1}$",
          "Vertical column, falling from rest:\n$v_{\\text{V}} = \\sqrt{2 \\times 9.81 \\times 1.4} = 5.24\\ \\text{m s}^{-1}$\nThe equations of motion or $\\Delta E_{\\text{grav}} = \\Delta E_{\\text{k}}$ both score the mark.",
          "Recombine the columns:\n$v = \\sqrt{3.44^2 + 5.24^2} = 6.3\\ \\text{m s}^{-1}$\n$\\tan\\theta = \\frac{3.44}{5.24}$",
          "$\\theta = 33^{\\circ}$ from the vertical.\nA larger launch speed leaves $v_{\\text{V}}$ unchanged and increases $v_{\\text{H}}$, so the landing gets shallower.",
        ],
        answer: "$v = 6.3\\ \\text{m s}^{-1}$ at $33^{\\circ}$ from the vertical",
      },
      {
        k: "worked",
        title: "A projectile from a mountain",
        question:
          "Scientists launched a projectile from a mountain. The launch site was 2.0 km above sea level, and the projectile initially moved with a speed of $500\\ \\text{m s}^{-1}$ at an angle of $22^{\\circ}$ to the horizontal. A ship was a horizontal distance of 15 km from the launch site, and the projectile passed over the ship. Determine the height above sea level of the projectile as it passed over the ship. You should ignore the effects of air resistance. (4) — *WPH11 January 2025, Q19*",
        steps: [
          "Time to the ship comes from the horizontal column:\n$u_{\\text{H}} = 500\\cos 22^{\\circ} = 464\\ \\text{m s}^{-1}$\n$t = \\frac{15000}{464} \\approx 32\\ \\text{s}$",
          "Vertical column:\n$u_{\\text{V}} = 500\\sin 22^{\\circ} = 187\\ \\text{m s}^{-1}$\n$s = u_{\\text{V}}t - \\tfrac{1}{2}gt^2 = (187)(32) - (4.905)(32)^2 = 961\\ \\text{m}$",
          "That height is measured from the ==launch point==. The question asks from sea level:\n$961 + 2000 = 2961 \\approx 3.0 \\times 10^3\\ \\text{m}$",
          "Two slips to avoid: forgetting the launch height altogether, and computing the maximum height when the question asks the height at a stated point.",
        ],
        answer: "$\\approx 3.0 \\times 10^3\\ \\text{m}$ above sea level ($2.96 \\times 10^3$ m)",
      },
    ],
  },
  {
    spec: "8",
    statement:
      "be able to draw and interpret free-body force diagrams to represent forces on a particle or on an extended but rigid body using the concept of centre of gravity of an extended body",
    title: "Free-body force diagrams and centre of gravity",
    blocks: [
      {
        k: "def",
        term: "Free-body force diagram",
        text: "A diagram showing ==only the forces acting on the one chosen object==, never the forces it exerts on anything else.",
      },
      {
        k: "steps",
        caption: "The three drawing rules",
        items: [
          {
            title: "One body, free of its surroundings",
            text: "Draw the body on its own, with the slope, the rope and the wall gone.\nOnly the forces that ==other things exert on it== remain.",
          },
          {
            title: "Arrows from the body",
            text: "Every arrow starts ==on the body== (at its centre for a particle, at the centre of gravity for an extended one) and points the way the force acts.\nLabel each arrow with the force's name: weight, normal contact force, drag, tension.",
          },
          {
            title: "Arrow lengths that match the forces",
            text: "Arrow length is ==proportional== to the force's magnitude.\nA 15 000 N weight draws twice a 7500 N thrust.",
          },
        ],
      },
      {
        k: "figure",
        kind: "ph-freebody",
        caption:
          "A block held stationary on a slope: weight from the centre of gravity, normal contact force perpendicular to the surface, drag along it.",
      },
      {
        k: "figure",
        kind: "ph-fbd-gallery",
        caption:
          "Four bodies the papers have asked for: the accelerating car, the hung painting, the sphere at terminal velocity, and the ball that accelerates upwards. Watch the relative arrow lengths.",
      },
      { k: "h", text: "A car accelerating along a road" },
      {
        k: "bullets",
        items: [
          "A car accelerates along a horizontal road.",
          "Three forces act on it: the forward force, the weight, and the normal contact force.",
          "The weight acts downwards and the normal contact force acts upwards.",
          "The car does not accelerate vertically, so those two forces balance.",
          "So the normal contact force ==equals== the weight, and their arrows draw equal.",
          "The forward force is the only horizontal force, so it is the ==resultant force==.",
          "Its arrow starts on the car, points along the motion, and draws shorter.",
          "No other force belongs on the diagram.",
          "Therefore, the accelerating car draws as three arrows from one dot, with the two vertical arrows equal.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Arrows for forward force, weight and normal contact force with labels, all starting from the dot* · *Weight arrow and normal contact force arrows equal, and twice length of forward force arrow* · *Do not allow more than three arrows*.",
      },
      { k: "h", text: "A ball-bearing falling at terminal velocity" },
      {
        k: "bullets",
        items: [
          "A ball-bearing falls through a liquid at its terminal velocity.",
          "The drag on it is already drawn on the diagram.",
          "Two forces complete the diagram: the weight downwards and the upthrust upwards.",
          "At terminal velocity the acceleration is zero, so the resultant force is zero.",
          "So the three forces balance: $W = \\text{drag} + \\text{upthrust}$.",
          "So the weight arrow equals the drag arrow plus the upthrust arrow.",
          "Both new arrows start at the centre of the ball-bearing.",
          "Label the weight as weight, $W$ or $mg$.",
          "Therefore, the completed diagram shows three balanced forces acting through the centre.",
        ],
      },
      { k: "h", text: "How the diagram is marked" },
      {
        k: "bullets",
        items: [
          "A diagram question carries marks for the arrows and for their lengths.",
          "Name the forces as the schemes do: weight (or $W$ or $mg$), normal contact force, tension, drag, upthrust.",
          "The schemes cap the count: *Do not allow more than three arrows*.",
          "One scheme took one mark off for each extra force over three.",
          "It also took one mark off for an arrow that did not touch the dot.",
          "And one mark off for an arrow that was not close to vertical.",
          "So keep every arrow starting on the body, named, and drawn to its true relative length.",
        ],
      },
      { k: "h", text: "Centre of gravity" },
      {
        k: "bullets",
        items: [
          "The ==centre of gravity== is the point through which the weight of an extended body ==appears to act==.",
          "The mass of an extended body is spread through all of it.",
          "So the weight appears to act at one single point.",
          "On a free-body diagram of an extended body, the weight arrow starts ==at the centre of gravity==.",
          "For a uniform body, the centre of gravity is at its midpoint.",
          "Ladders, beams and signs are drawn this way.",
          "Therefore, an extended body carries its weight arrow from its centre of gravity.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The point at / through which the weight of the object / beam appears to act* (1).",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "An engine pushing a truck",
        question:
          "An engine pushes a truck along horizontal rails at constant velocity, exerting a horizontal force of $1.2 \\times 10^5\\ \\text{N}$ on the truck. The diagram shows the free-body force diagram of the engine, with its weight and the normal contact force from the rails already drawn. Complete the free-body force diagram for the engine. (4) — *WPH11 October 2022, Q18*",
        steps: [
          "Constant velocity means the resultant force on the engine is zero, so the horizontal forces must balance.",
          "By Newton's third law the truck pushes back on the engine with $1.2 \\times 10^5\\ \\text{N}$ to the left.\nThe rails push the engine forwards with $1.5 \\times 10^5\\ \\text{N}$ to the right.",
          "The balance is short by $0.3 \\times 10^5\\ \\text{N}$ to the left:\n$1.5 \\times 10^5 - 1.2 \\times 10^5 = 3.0 \\times 10^4\\ \\text{N}$\nSo air resistance acts to the left with $3.0 \\times 10^4\\ \\text{N}$. The weights are vertical and already balance.",
          "Draw the arrows so the total length to the left ==equals== the total to the right.",
        ],
        answer: "force from truck $1.2 \\times 10^5$ N left · air resistance $3.0 \\times 10^4$ N left · rails $1.5 \\times 10^5$ N right, lengths balanced",
        ms: {
          label: "Examiner's report",
          text: "*Many students failed to notice that an additional backwards force from air resistance was required to bring the engine into equilibrium.* · *The arrows in a free-body force diagram should have lengths proportional to the magnitudes of the forces. This was very rarely seen.*",
        },
      },
      {
        k: "worked",
        title: "A ball falling at terminal velocity",
        question:
          "A student carried out an experiment using a data logger to record the motion of a ball-bearing as it fell through a liquid. The ball-bearing is falling at terminal velocity, and the drag force has already been drawn on the free-body diagram. Complete the free-body force diagram for the ball-bearing. (2) — *WPH11 October 2023, Q18*",
        steps: [
          "Two arrows complete the diagram: weight downwards and upthrust upwards, both starting from the ball's centre.",
          "At terminal velocity the three forces balance:\n$W = \\text{drag} + \\text{upthrust}$\nSo the weight arrow's length equals the drag arrow's plus the upthrust arrow's.",
        ],
        answer: "weight down and upthrust up, drawn from the centre; $W$ = drag + upthrust",
        ms: {
          label: "Examiner's report",
          text: "*Some students labelled weight as G, which is incorrect.* · *Some students appeared not to appreciate that the length of the arrow represents the size of the force.*",
        },
      },
      {
        k: "worked",
        title: "The diagram when the object accelerates",
        question:
          "An object moves through a fluid. The upthrust on it is 90 N upwards and its weight is 49 N downwards. The object has a mass of 5.0 kg and accelerates upwards at $4.0\\ \\text{m s}^{-2}$. Which expression gives the magnitude of the drag force on the object?  A $5.0 \\times 4.0$ · B $90 - 49$ · C $90 - 49 - (5.0 \\times 4.0)$ · D $90 - 49 + (5.0 \\times 4.0)$ — *WPH11 January 2025, Q9*",
        steps: [
          "The object accelerates, so the diagram is ==not== in equilibrium and the arrows are drawn deliberately unequal:\n$\\Sigma F = ma = 5.0 \\times 4.0 = 20\\ \\text{N}$ upwards",
          "Balance along the motion:\n$90 - 49 - \\text{drag} = 20$\n$\\text{drag} = 21\\ \\text{N}$ downwards\nOption C.",
        ],
        answer: "C — drag = 21 N downwards",
        ms: {
          label: "Mark scheme",
          text: "A *this gives the resultant force*; B *the resultant force is not zero*; D *this assumes that the object is accelerating downwards*.",
        },
      },
    ],
  },
];

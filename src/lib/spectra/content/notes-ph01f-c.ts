import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces · Part C (statements 7–8)
   Projectiles and free-body diagrams. Teaching first, worked
   examples at the end of each section, in the owner's plain
   style. The dart card (January 2024 Q12) lives here because it
   is a two-column projectile question.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01F_C: SpecSection[] = [
  {
    spec: "7",
    statement:
      "understand how to make use of the independence of vertical and horizontal motion of a projectile moving freely under gravity",
    title: "Projectiles",
    blocks: [
      {
        k: "def",
        term: "Projectile",
        text: "Any object moving ==freely under gravity==. The only force on it is its weight. The horizontal and vertical motions are worked out separately, and the one quantity they share is the time.",
      },
      { k: "h", text: "Why two columns" },
      {
        k: "bullets",
        items: [
          "Gravity pulls ==downwards== and in no other direction, so it can only change the vertical motion.",
          "Nothing horizontal acts, so the horizontal velocity stays exactly as launched. That is the independence the statement asks you to make use of.",
          "Air resistance breaks the split: it opposes the velocity in ==both== planes, so the two motions affect each other and the SUVAT equations fail.",
          "The vacuum-chamber question tests the same idea: two objects leave with the same speed, one thrown down. Same acceleration $g$, same speed at the floor, but ==different velocities== because the directions differ (WPH11 June 2021, Q7).",
          "When a January 2024 question ignored air resistance, the real fall took ==longer== and arrived ==slower== than the calculation claimed (WPH11 January 2024, Q5).",
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
        note: "Set the two columns up before touching the calculator. The examiner report's own advice: *teaching students to set calculations out in two columns would help them to keep horizontal and vertical components clearly separated*.",
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
      { k: "h", text: "At the top of the flight" },
      {
        k: "bullets",
        items: [
          "The vertical velocity is ==zero== at the highest point.",
          "The horizontal velocity never changes, so the horizontal column has no top-of-flight event at all.",
          "The vertical acceleration is still $g$, downwards. The 2025 01A multiple choice offered 0, $-3.0$, $+9.8$ and $-9.8$, and only $-9.8\\ \\text{m s}^{-2}$ was credited.",
          "The launch-speed show thats build on that fact: $u_{\\text{V}} = \\sqrt{2g\\Delta h}$, then $u = u_{\\text{V}} \\div \\sin\\theta$.",
          "A ball kicked so that it reaches 5.0 m at $35^{\\circ}$: $u_{\\text{V}} = \\sqrt{2 \\times 9.81 \\times 5.0} = 9.90\\ \\text{m s}^{-1}$, so $u = 9.90 \\div \\sin 35^{\\circ} = 17\\ \\text{m s}^{-1}$ (WPH11 January 2021, Q13).",
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
          "==Thrown straight up==: one column only. $u_{\\text{V}}$ is the whole velocity, $a = -g$ throughout, $v = 0$ at the top, and the flight time is $2u_{\\text{V}} \\div g$.",
          "==Launched horizontally==: the vertical column starts at $u_{\\text{V}} = 0$, so the drop time is $\\sqrt{2h \\div g}$. The horizontal speed never influences it.",
          "==Launched at an angle==: resolve first ($u\\cos\\theta$, $u\\sin\\theta$), then run both columns. The shared time is what joins them.",
          "When the projectile lands at its launch height, the flight time is twice the time to the top. When it lands higher or lower, that shortcut fails and the quadratic gives the true time (the golfer question below shows it).",
        ],
      },
      { k: "h", text: "Answering a deduce question" },
      {
        k: "bullets",
        items: [
          "A deduce answer has three parts: the calculated value, the comparison against the value in the question, and a closing sentence that answers the question. All three are needed.",
          "Compare in the direction the question asks: a distance against 200 m, a time against 3.15 s, a height against 3.0 m.",
          "End with words: *so yes, the rider lands on the other side*. A bare number loses the conclusion mark.",
          "Some schemes credit more than one route through the comparison. Choose one route, carry it through, and end with the conclusion.",
        ],
      },
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
    title: "Free-body diagrams and centre of gravity",
    blocks: [
      {
        k: "def",
        term: "Free-body force diagram",
        text: "A diagram showing ==only the forces acting on the one chosen object==, never the forces it exerts on anything else. Every arrow starts on the body, carries the name of the force it represents, and has a length ==proportional to the magnitude==.",
      },
      {
        k: "steps",
        caption: "The three drawing rules",
        items: [
          {
            title: "One body, free of its surroundings",
            text: "Draw the body on its own, with the slope, the rope and the wall gone. Only the forces that ==other things exert on it== remain.",
          },
          {
            title: "Arrows from the body",
            text: "Every arrow starts ==on the body== (at its centre for a particle, at the centre of gravity for an extended one) and points the way the force acts. Label each arrow with the force's name: weight, normal contact force, drag, tension.",
          },
          {
            title: "Arrow lengths that match the forces",
            text: "Arrow length is ==proportional== to the force's magnitude. A 15 000 N weight draws twice a 7500 N thrust. The examiner report found doing this *very rarely seen*.",
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
          "Four bodies the papers have asked for: the accelerating car (January 2026), the hung painting, the sphere at terminal velocity, and the ball that accelerates upwards. Watch the relative arrow lengths, because they are part of what gets marked.",
      },
      { k: "h", text: "How the diagram is marked" },
      {
        k: "bullets",
        items: [
          "The 2026 car diagram carried two marks: arrows for forward force, weight and normal contact force ==with labels, all starting from the dot==, and then the lengths: *weight arrow and normal contact force arrows equal, and twice length of forward force arrow*.",
          "The schemes cap the count: *Do not allow more than three arrows*. An extra invented force costs a mark.",
          "One scheme took one mark off for each extra force over three, for an arrow that did not touch the dot, and for an arrow that was not close to vertical.",
          "Name the forces as the scheme does: weight (or $W$ or $mg$), normal contact force, tension, drag, upthrust. *Some students labelled weight as G, which is incorrect.*",
          "Vertical balance sets the lengths: on the accelerating car the normal contact force ==equals== the weight even while the car speeds up horizontally.",
        ],
      },
      { k: "h", text: "Centre of gravity" },
      {
        k: "bullets",
        items: [
          "The ==centre of gravity== is the point through which the weight of an extended body ==appears to act==.",
          "The schemes print it as: *The point at / through which the weight of the object / beam appears to act (1)*. *Appears to act* is the phrase, because the mass is spread through the body.",
          "On a free-body diagram of an extended body, a ladder, a beam or a sign, the weight arrow starts ==at the centre of gravity==, not at an end.",
          "For a uniform body the centre of gravity is the midpoint. The 2026 ladder questions use that fact before any moments are taken.",
          "The definition is worth 1 mark in its own right, most often as the opening part of a moments question, so it is worth learning the exact wording.",
        ],
      },
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

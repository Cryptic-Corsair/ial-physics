import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 4 · Part C (statement 26)
   Core Practical 2, the falling-ball viscometer — polished after
   the owner's review (2026-11-23): the free-body diagram section
   restored to the teaching half, plain subheadings throughout, and
   the worked example cards grouped at the end of the section,
   collapsed until clicked. Same register as Parts A and B; quotes
   verified by scripts/t04-quotes.ts, numbers by
   scripts/t04-numbers.ts.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH04_C: SpecSection[] = [
  {
    spec: "26",
    statement: "CORE PRACTICAL 2: Use a falling-ball method to determine the viscosity of a liquid",
    title: "Core Practical 2 — falling-ball viscometer",
    blocks: [
      {
        k: "figure",
        kind: "ph-falling-ball",
        caption: "The falling-ball method for measuring the viscosity of a liquid.",
      },
      { k: "h", text: "The principle" },
      {
        k: "bullets",
        items: [
          "A small ball is released into a tall tube of liquid and falls until it reaches terminal velocity.",
          "At terminal velocity the balance holds: $W = U + D$.",
          "Stokes' law supplies the drag: $D = 6\\pi\\eta r v$.",
          "Rearranged, the viscosity follows from measured quantities only: $\\eta = (W - U) \\div 6\\pi r v$.",
          "The method assumes the ball has reached ==terminal velocity before the timing starts==, and that the Stokes' law conditions hold during the timed fall.",
          "The upthrust comes from the ==displaced liquid== — use the density of the liquid, never the density of the ball.",
        ],
      },
      {
        k: "table",
        caption: "The printed viscometer equation, term by term",
        head: ["Term", "It is"],
        rows: [
          ["$(4/3)\\pi r^3 \\rho_{\\text{s}} g$", "the weight of the solid sphere"],
          ["$(4/3)\\pi r^3 \\rho_{\\text{o}} g$", "the weight of oil displaced by the sphere — the upthrust"],
          ["$6\\pi r \\eta v$", "the viscous drag"],
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Weight of (solid) sphere* · *Weight of oil displaced (by the sphere ) Or upthrust* · *Viscous drag or viscous force* (WPH11 October 2020, Q15(b)).",
      },
      { k: "h", text: "The measurements" },
      {
        k: "bullets",
        items: [
          "The mass of the ball, for its weight ($W = mg$).",
          "The diameter of the ball, with a micrometer, for the radius and the volume ($V = \\tfrac{4}{3}\\pi r^3$).",
          "The density of the liquid, for the upthrust ($U = \\rho V g$).",
          "The time to fall between two fixed marks, for the terminal velocity ($v = s \\div t$).",
          "The temperature of the liquid, because the viscosity depends on it.",
          "*One other measurement* questions expect the ==mass of the ball== (its weight is accepted); the density of the liquid is accepted too (WPH11 June 2025, Q16(a)).",
        ],
      },
      { k: "h", text: "The method" },
      {
        k: "bullets",
        items: [
          "Fill a tall measuring cylinder with the liquid and wrap rubber bands around it as markers.",
          "The top marker sits far enough below the surface that the ball has reached terminal velocity before the timing begins.",
          "Measure the distance between the markers with a metre rule, and the time between them with a stopwatch.",
          "Repeat the timing and average.",
          "Better: time several different distances and take the ==gradient of a distance-time graph== — the gradient is the terminal velocity.",
          "A data logger or motion sensor can record the fall automatically: on a displacement-time graph, the terminal velocity = ==the gradient of the straight section==, not a single point.",
        ],
      },
      { k: "h", text: "Design choices" },
      {
        k: "bullets",
        items: [
          "The tube is wide and the ball is small, so the flow around the ball stays laminar and the ball never falls near the walls: the Stokes' law condition.",
          "The top marker sits well below the surface, so the speed has stopped changing before the timing begins: the $W = U + D$ condition.",
          "The fall is timed over a long distance, which cuts the percentage uncertainty in the velocity.",
        ],
      },
      { k: "h", text: "The free-body diagram of the falling ball" },
      {
        k: "bullets",
        items: [
          "Draw the weight of the ball downwards, the upthrust of the liquid on it upwards and the drag of the liquid on it upwards, all starting from the centre of the ball.",
          "The arrow for the weight is equal in length to the arrows for the upthrust and the drag combined.",
          "Label the forces clearly: W or mg for the weight, U for the upthrust.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Upwards arrow labelled upthrust or U, and downward arrow labelled weight or W or mg; both arrows start from the dot* · *length of weight arrow ≈ length of drag arrow + length of upthrust arrow* (WPH11 October 2019, Q15(b)(i)).",
      },
      { k: "h", text: "Errors and validity" },
      {
        k: "bullets",
        items: [
          "Timing that begins too early catches the ball still speeding up: the computed viscosity comes out ==too large==.",
          "A measured viscosity lower than the accepted value can come from: the liquid warmer than stated, the diameter measured too small, the time measured too short, or the marker distance measured too large (WPH11 October 2020, Q15(b)(iv)).",
          "A larger sphere has a greater terminal velocity, so the time between the markers is shorter; the stopwatch uncertainty stays the same, so the percentage uncertainty is greater.",
          "Keep the temperature of the liquid constant during the measurement: the viscosity of a liquid depends on it (WPH11 June 2022, Q19(a)).",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*The temperature of the room* — the temperature of the ==oil== is what changed. *The flow around the sphere is turbulent* and *the densities used were incorrect* are both printed rejections (WPH11 October 2020, Q15(b)(iv)).",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The vegetable oil",
        question:
          "A student uses a falling-ball method to determine the viscosity of vegetable oil. The ball-bearing reaches terminal velocity and takes 1.3 s to fall 20.0 cm. The student has already calculated a value of $5.6 \\times 10^{-5}$ N for the viscous drag on the ball-bearing. **(a)** The diameter of the ball-bearing was measured. Give one other measurement needed to determine the viscosity of the oil. (1) **(b)** Calculate the viscosity of the oil. diameter of ball-bearing $= 1.24$ mm (3) — *WPH11 June 2025, Q16*",
        steps: [
          "(a) The ==mass of the ball-bearing== — its weight is accepted, and so are the mass, volume or density of a known amount of the oil.\nThe diameter is already given, and the temperature of the oil is rejected as an answer here.",
          "(b) The terminal velocity:\n$v = \\dfrac{0.200}{1.3} = 0.154\\ \\text{m s}^{-1}$",
          "Stokes' law rearranged, with $r = 6.2 \\times 10^{-4}\\ \\text{m}$:\n$\\eta = \\dfrac{D}{6\\pi r v} = \\dfrac{5.6 \\times 10^{-5}}{6\\pi \\times 6.2 \\times 10^{-4} \\times 0.154} = 0.031\\ \\text{Pa s}$",
        ],
        answer: "(a) mass of the ball-bearing · (b) $\\eta = 0.031\\ \\text{Pa s}$",
        ms: {
          label: "Mark scheme",
          text: "*Mass of the ball-bearing* — *allow weight of ball-bearing* · *allow mass / weight of (a known volume of) oil* · *allow volume of (a known mass of) oil* · *allow density of oil* · *ignore radius / diameter / volume of ball-bearing* · *ignore temperature of oil*.",
        },
      },
      {
        k: "worked",
        title: "Where to start timing",
        question:
          "A student determines the terminal velocity of a ball bearing as it falls through oil. He releases the ball bearing at point V, near the top of the tube, and measures the time taken to fall between two of the marked points V, W, X, Y, Z, from top to bottom. Which two points should he use?  A V and Y · B W and Y · C X and Y · D W and Z — *WPH11 January 2021, Q7*",
        steps: [
          "The timed distance must begin ==after== the ball bearing has reached terminal velocity.",
          "W is too early: the bearing is still speeding up there.\nX sits far enough down the tube, so X and Y is the printed answer.",
        ],
        answer: "C — X and Y",
        ms: {
          label: "Mark scheme",
          text: "*B is incorrect because the ball bearing has not reached terminal velocity at W* · *D is incorrect because the ball bearing has not reached terminal velocity at W*.",
        },
      },
      {
        k: "worked",
        title: "The washing-up liquid",
        question:
          "A student determines the viscosity of washing-up liquid by releasing a small solid sphere into a large measuring cylinder and timing its fall between rubber bands. **(a)(i)** Describe a method the student could use to determine an accurate value for the terminal velocity of the sphere. (5) **(a)(ii)** Explain why the use of a larger sphere would increase the percentage uncertainty in the calculated value of the terminal velocity. (4) **(b)(i)** Complete the free-body force diagram for the sphere when travelling at terminal velocity. (3) **(b)(ii)** The student obtains a value of $0.160\\ \\text{m s}^{-1}$ for the terminal velocity. Calculate the viscosity $\\eta$ of the washing-up liquid. radius of sphere $= 4.8 \\times 10^{-3}\\ \\text{m}$, weight of sphere $= 3.5 \\times 10^{-2}$ N, density of washing-up liquid $= 1.1 \\times 10^{3}\\ \\text{kg m}^{-3}$ (4) — *WPH11 October 2019, Q15*",
        steps: [
          "(a)(i) Place two or more rubber bands on the cylinder as markers.\nThe top band sits far enough below the surface for terminal velocity to have been reached.",
          "Measure the distance between the markers with the metre rule, and the time between them with the stopwatch.\nRepeat and average: the terminal velocity = distance between markers ÷ average time.",
          "Or: time several different distances and take the gradient of a distance-time graph.",
          "(a)(ii) A larger sphere falls with a greater terminal velocity, so the time of falling between the markers is less.",
          "The absolute uncertainty in the time — the stopwatch resolution, the reaction time — stays the same.\nA smaller time carries that same uncertainty as a ==greater percentage==.",
          "(b)(i) Three forces: the weight of the sphere downwards; the upthrust of the liquid on the sphere upwards; the drag of the liquid on the sphere upwards.\nAt terminal velocity, the length of the weight arrow = the lengths of the upthrust and drag arrows combined.",
          "(b)(ii) The volume and the upthrust:\n$V = \\tfrac{4}{3}\\pi \\times (4.8 \\times 10^{-3})^3 = 4.63 \\times 10^{-7}\\ \\text{m}^3$\n$U = \\rho V g = 1.1 \\times 10^3 \\times 4.63 \\times 10^{-7} \\times 9.81 = 5.00 \\times 10^{-3}\\ \\text{N}$",
          "The balance gives the drag:\n$D = W - U = 3.5 \\times 10^{-2} - 5.00 \\times 10^{-3} = 3.0 \\times 10^{-2}\\ \\text{N}$",
          "$\\eta = \\dfrac{D}{6\\pi r v} = \\dfrac{3.0 \\times 10^{-2}}{6\\pi \\times 4.8 \\times 10^{-3} \\times 0.160} = 2.07\\ \\text{Pa s}$",
        ],
        answer:
          "(a) markers below the surface, repeats, or a distance-time gradient · (b)(ii) $\\eta = 2.1\\ \\text{Pa s}$",
        ms: {
          label: "Mark scheme",
          text: "*Place two or more rubber bands or markers (on the cylinder)* · *The top band should be far enough below the surface for terminal velocity to have been reached* · *Measure time for the sphere to fall a given distance (using the stopwatch) and measure distance fallen (using the metre rule)* · *Upthrust/U up* · *Drag/friction/D up* · *Weight/W/mg down* · *η = 2.1 (Pa s)*.",
        },
      },
    ],
  },
];

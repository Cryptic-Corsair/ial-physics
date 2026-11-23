import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 4 · Part C (statement 26)
   Register pass (2026-11-23): the prose is rewritten in the same
   register as the Topic 2 Materials note — full sentences, the
   working symbols inside the sentences, one logical step per
   bullet joined with "so", and no rhetorical asides. The worked
   questions are set out the way the papers print them and their
   text is unchanged; the mark scheme and examiner-report wordings
   stay quoted verbatim (scripts/t04-quotes.ts; every number
   re-computed by scripts/t04-numbers.ts).
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
          "At terminal velocity the forces balance, $W = U + D$, and Stokes' law gives the drag, $D = 6\\pi\\eta r v$.",
          "Rearranged, the viscosity follows from measured quantities only, $\\eta = (W - U) \\div 6\\pi r v$.",
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
          "The mass of the ball, to calculate its weight ($W = mg$).",
          "The diameter of the ball, measured with a micrometer, for the radius and the volume ($V = \\tfrac{4}{3}\\pi r^3$).",
          "The density of the liquid, to calculate the upthrust ($U = \\rho V g$).",
          "The time to fall between two fixed marks, for the terminal velocity ($v = s \\div t$), and the temperature of the liquid, because the viscosity depends on it.",
          "*One other measurement* questions expect the ==mass of the ball== (its weight is accepted); the density of the liquid is accepted too.",
        ],
      },
      { k: "h", text: "The method" },
      {
        k: "bullets",
        items: [
          "Fill a tall measuring cylinder with the liquid and wrap rubber bands around it as markers.",
          "The top marker sits far enough below the surface that the ball has reached terminal velocity before the timing begins.",
          "Measure the distance between the markers with a metre rule; time the fall with a stopwatch; repeat and average.",
          "A better method — time the fall over several different distances and take the ==gradient of a distance-time graph==; the gradient is the terminal velocity.",
          "A data logger or motion sensor can record the fall. On a displacement-time graph the terminal velocity = ==the gradient of the straight section==, not a single point.",
        ],
      },
      { k: "h", text: "Design choices" },
      {
        k: "bullets",
        items: [
          "The tube is wide and the ball is small, so the flow around the ball stays laminar and the ball never falls close to the wall of the tube — the Stokes' law condition holds.",
          "The top marker sits well below the surface, so the speed has stopped changing before the timing begins, as the balance $W = U + D$ requires.",
          "The fall is timed over a long distance, which reduces the percentage uncertainty in the velocity.",
        ],
      },
      { k: "h", text: "The free-body diagram of the falling ball" },
      {
        k: "bullets",
        items: [
          "Draw the weight downwards, the upthrust of the liquid upwards and the drag of the liquid upwards, all starting from the centre of the ball.",
          "The weight arrow's length equals the upthrust and drag arrows combined.",
          "Label the forces clearly — W or mg for the weight, U for the upthrust.",
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
          "If the timing begins too early, the ball is still speeding up, so the computed viscosity comes out ==too large==.",
          "A measured viscosity lower than the accepted value has several possible causes. The liquid was warmer than stated, the diameter was measured too small, the time was measured too short, or the marker distance was measured too large.",
          "A larger sphere falls faster, so the time between the markers is shorter; the stopwatch uncertainty stays the same, so the percentage uncertainty is greater.",
          "Keep the temperature of the liquid constant during the measurement. The viscosity of a liquid depends on it.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*The temperature of the room* is rejected — the temperature that matters is the temperature of the ==oil==. *The flow around the sphere is turbulent* and *the densities used were incorrect* (WPH11 October 2020, Q15(b)(iv)) are both printed rejections.",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The vegetable oil",
        question:
          "A student used a falling-ball method to determine the viscosity of vegetable oil. He measured the diameter of a ball-bearing. He dropped the ball-bearing into a measuring cylinder containing vegetable oil, as shown. The ball-bearing reached terminal velocity. The student then measured the time taken for the ball-bearing to fall 20.0 cm.\n**(a)** Give one other measurement needed to determine the viscosity of the oil. (1)\n**(b)** The diameter of the ball-bearing was 1.24 mm. The time taken to fall 20.0 cm was 1.3 s. The student calculated a value of $5.6 \\times 10^{-5}$ N for the viscous drag on the ball-bearing.\nCalculate the viscosity of the oil. (3)\n*WPH11 June 2025, Q16*",
        steps: [
          "(a) The ==mass of the ball-bearing== — its weight is accepted, and so are the mass, volume or density of a known amount of the oil.\nThe diameter is already given, and the temperature of the oil is rejected as an answer here.",
          "(b) The terminal velocity.\n$v = \\dfrac{0.200}{1.3} = 0.154\\ \\text{m s}^{-1}$",
          "Stokes' law rearranged, with $r = 6.2 \\times 10^{-4}\\ \\text{m}$.\n$\\eta = \\dfrac{D}{6\\pi r v} = \\dfrac{5.6 \\times 10^{-5}}{6\\pi \\times 6.2 \\times 10^{-4} \\times 0.154} = 0.031\\ \\text{Pa s}$",
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
          "A student determines the terminal velocity of a ball bearing as it falls through oil. He releases the ball bearing at point V and measures the time taken for it to fall a measured distance.\nWhich two points should he use for the measured distance?\nA V and Y\nB W and Y\nC X and Y\nD W and Z\n*WPH11 January 2021, Q7*",
        steps: [
          "The timed distance must begin ==after== the ball bearing has reached terminal velocity.",
          "W is too early — the bearing is still speeding up there.\nX sits far enough down the tube, so X and Y is the printed answer.",
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
          "A student carried out an experiment to determine the viscosity of washing up liquid using the apparatus shown.\n**(a)(i)** Describe a method that the student could use to determine an accurate value for the terminal velocity of the sphere. You may add to the diagram above. (5)\n**(a)(ii)** Explain why the use of a larger sphere would increase the percentage uncertainty in the calculated value of the terminal velocity. (4)\n**(b)(i)** Complete the free-body force diagram for the sphere when travelling at terminal velocity. (3)\n**(b)(ii)** The student obtained a value of $0.160\\ \\text{m s}^{-1}$ for the terminal velocity of the sphere. Calculate the viscosity $\\eta$ of the washing up liquid in Pa s.\nradius of sphere $= 4.8 \\times 10^{-3}\\ \\text{m}$, weight of sphere $= 3.5 \\times 10^{-2}$ N, density of washing up liquid $= 1.1 \\times 10^{3}\\ \\text{kg m}^{-3}$ (4)\n*WPH11 October 2019, Q15*",
        steps: [
          "(a)(i) Place two or more rubber bands on the cylinder as markers.\nThe top band sits far enough below the surface for terminal velocity to have been reached.",
          "Measure the distance between the markers with the metre rule, and the time between them with the stopwatch.\nRepeat and average. The terminal velocity = distance between markers ÷ average time.",
          "Or time several different distances and take the gradient of a distance-time graph.",
          "(a)(ii) A larger sphere falls with a greater terminal velocity, so the time of falling between the markers is less.",
          "The absolute uncertainty in the time — the stopwatch resolution, the reaction time — stays the same.\nA smaller time carries that same uncertainty as a ==greater percentage==.",
          "(b)(i) Three forces — the weight of the sphere downwards; the upthrust of the liquid on the sphere upwards; the drag of the liquid on the sphere upwards.\nAt terminal velocity, the length of the weight arrow = the lengths of the upthrust and drag arrows combined.",
          "(b)(ii) The volume and the upthrust.\n$V = \\tfrac{4}{3}\\pi \\times (4.8 \\times 10^{-3})^3 = 4.63 \\times 10^{-7}\\ \\text{m}^3$\n$U = \\rho V g = 1.1 \\times 10^3 \\times 4.63 \\times 10^{-7} \\times 9.81 = 5.00 \\times 10^{-3}\\ \\text{N}$",
          "The balance gives the drag.\n$D = W - U = 3.5 \\times 10^{-2} - 5.00 \\times 10^{-3} = 3.0 \\times 10^{-2}\\ \\text{N}$",
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

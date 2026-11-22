import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces · Part A (statements 1–6)
   The rebuilt Forces note (2026-11-22): written from scratch
   against the 2020–2024 mark schemes, replacing notes-ph01-a/b on
   the t01 page. The register is the owner's — short sentences, one
   idea per bullet, at most two linked facts per line, workings set
   out line by line and typeset in KaTeX ($…$). Mark scheme and
   examiner-report wordings are quoted verbatim (verified against
   research/wph11/txt and the digests by scripts/forces-quotes.ts;
   every number re-computed by scripts/forces-numbers.ts). The old
   part files are kept untouched on disk, no longer imported.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01F_A: SpecSection[] = [
  {
    spec: "1",
    statement:
      "be able to use the equations for uniformly accelerated motion in one dimension: s = (u + v)t/2, v = u + at, s = ut + ½at², v² = u² + 2as",
    title: "The equations of uniformly accelerated motion",
    blocks: [
      {
        k: "eq",
        eq: "$v = u + at$        $s = ut + \\tfrac{1}{2}at^2$        $v^2 = u^2 + 2as$        $s = \\tfrac{1}{2}(u + v)t$",
        note: "All four are printed on the data sheet, so the marks are never for recall. Each equation links four of the five quantities s, u, v, a, t and leaves out the fifth. Pick the equation that does not contain the quantity you are not asked about.",
      },
      {
        k: "bullets",
        items: [
          "List what the question gives, and note which of s, u, v, a, t is missing.",
          "Use the equation without the missing quantity.",
          "Convert units before substituting: mm to m is ÷ 1000, km h⁻¹ to m s⁻¹ is ÷ 3.6.",
          "Substitute first, calculate once, round at the end — and write the unit.",
        ],
      },
      {
        k: "table",
        caption: "Choosing the equation",
        head: ["You know", "You want", "Use"],
        rows: [
          ["u, a, t", "v", "$v = u + at$"],
          ["u, a, t", "s", "$s = ut + \\tfrac{1}{2}at^2$"],
          ["u, v, s — no time", "a", "$v^2 = u^2 + 2as$"],
          ["u, v, t — no acceleration", "s", "$s = \\tfrac{1}{2}(u + v)t$"],
          ["starts from rest", "—", "put $u = 0$ and the equations simplify"],
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Final answers must be correctly rounded, not truncated, and truncated values in multi-stage calculations will not generally yield the required value for the final mark. It is advisable that students should use calculators to retain all significant figures for values carried forward and only round answers for the final line.*",
      },
      {
        k: "bullets",
        items: [
          "A *show that* answer carries one more significant figure than the value in the question.",
          "Reverse working scores both marks on a two-mark show that, but only two of the three on a three-mark one.",
          "Once a value is shown, use the given value in the later parts — ecf protects your own answer.",
        ],
      },
      {
        k: "worked",
        title: "A dart thrown at a dartboard",
        question:
          "A dart is thrown with a velocity of $15.6\\ \\text{m s}^{-1}$ at an angle of $5.0^{\\circ}$ to the horizontal, and it travels a horizontal distance D to the dartboard. Just before the dart hits the dartboard the vertical component of its velocity is zero. The air resistance acting on the dart is negligible. **(a)** Show that the time taken to reach the dartboard is about 0.14 s. (3) **(b)** Calculate D. (2) — *WPH11 January 2024, Q12*",
        steps: [
          "(a) The vertical column carries this part. Resolve the launch velocity — the printed first mark:\n$u_{\\text{V}} = 15.6 \\times \\sin 5.0^{\\circ} = 1.36\\ \\text{m s}^{-1}$",
          "At the board the vertical velocity is zero, so use $v = u + at$ — any valid suvat method is credited:\n$0 = 1.36 - 9.81t$",
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
        title: "Two cars and a finish line",
        question:
          "Two cars, A and B, are racing along a track. At a particular instant car A is 9 m ahead of car B, and car A is 100 m from the finish line. Car A has a constant velocity of $93\\ \\text{m s}^{-1}$. At this instant car B also has a velocity of $93\\ \\text{m s}^{-1}$, and car B is accelerating with a constant acceleration of $14\\ \\text{m s}^{-2}$. **(a)** Show that car A and car B are side by side after a time of about 1.1 s. (3) **(b)** Deduce whether car A reaches the finish line before car B. (3) — *WPH11 June 2024, Q13*",
        steps: [
          "Both cars travel at $93\\ \\text{m s}^{-1}$, so equal speeds cover equal distances.\nThe 9 m gap is closed by car B's extra distance alone — B accelerates from rest, $u = 0$:\n$s = ut + \\tfrac{1}{2}at^2 = \\tfrac{1}{2}(14)t^2 = 7t^2$",
          "Side by side when the extra distance equals the gap:\n$9.0 = 7t^2$\n$t = \\sqrt{\\frac{9.0}{7.0}} = 1.13\\ \\text{s} \\approx 1.1\\ \\text{s}$\nAny valid constant-acceleration route reaches the same value.",
          "(b) Car A needs 100 m at steady speed:\n$t_{\\text{A}} = \\frac{100}{93} = 1.075\\ \\text{s}$",
          "Car B must cover 109 m:\n$109 = 93t + 7t^2$\n$t_{\\text{B}} = 1.084\\ \\text{s}$",
          "The comparison is the final marking point:\n$1.075\\ \\text{s} < 1.084\\ \\text{s}$\nSo car A reaches the finish line first. A *deduce* verdict needs the numbers and the comparison — never a bare value.",
        ],
        answer: "(a) 1.13 s ≈ 1.1 s · (b) yes — car A first, 1.075 s < 1.084 s",
      },
      {
        k: "worked",
        title: "On Mars",
        question:
          "A rock falls from rest through a small distance s to the surface of Mars, and hits Mars with velocity $v_{\\text{M}}$. Another rock falls from rest through the same distance s to the surface of Earth, and hits Earth with velocity $v_{\\text{E}}$. Calculate the ratio $v_{\\text{M}} \\div v_{\\text{E}}$. Acceleration due to gravity on Mars $= 0.38g$. (3) — *WPH11 June 2023, Q11*",
        steps: [
          "Only $g$ changes: on Mars $a = 0.38g$. The equations of motion do not.",
          "Both rocks fall from rest, so $v^2 = u^2 + 2as$ gives:\n$v_{\\text{M}}^2 = 2(0.38g)s$\n$v_{\\text{E}}^2 = 2gs$",
          "The two situations share $s$, so take a ratio and it cancels:\n$\\left(\\frac{v_{\\text{M}}}{v_{\\text{E}}}\\right)^2 = \\frac{0.38gs}{gs} = 0.38$\n$\\frac{v_{\\text{M}}}{v_{\\text{E}}} = \\sqrt{0.38} = 0.62$",
        ],
        answer: "$v_{\\text{M}} \\div v_{\\text{E}} = 0.62$",
      },
    ],
  },
  {
    spec: "2",
    statement:
      "be able to draw and interpret displacement-time, velocity-time and acceleration-time graphs",
    title: "Reading and drawing motion graphs",
    blocks: [
      {
        k: "bullets",
        items: [
          "The gradient of a displacement–time graph is the velocity.",
          "The gradient of a velocity–time graph is the acceleration.",
          "The area under a velocity–time graph is the displacement.",
          "Explain a graph through the graph: name its gradient, an area, an intercept or a shape.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Most candidates scored no marks on this question. The most common reason for this was that the answers did not often refer to the graph, and therefore could not explain the shape of the graph.*",
      },
      {
        k: "figure",
        kind: "ph-motion-graphs",
        caption:
          "One journey, three graphs: uniform acceleration from rest. Read across the dotted time lines to move between them.",
      },
      {
        k: "table",
        caption: "What each graph feature means",
        head: ["Graph feature", "Means"],
        rows: [
          ["s–t: straight line", "constant velocity (gradient = v)"],
          ["s–t: curve steepening", "velocity increasing — a falling ball"],
          ["s–t: curve flattening", "velocity decreasing towards zero"],
          ["v–t: straight line", "constant acceleration (gradient = a)"],
          ["v–t: horizontal line", "constant velocity, a = 0"],
          ["v–t: curve levelling off", "acceleration falling to zero — approaching terminal velocity"],
          ["a–t: any value above zero", "velocity still increasing, even while the acceleration itself falls"],
        ],
      },
      { k: "h", text: "Building one graph from another" },
      {
        k: "steps",
        caption: "The conversion method",
        items: [
          {
            title: "Pick the direction",
            text: "s–t to v–t, and v–t to a–t, read ==gradients==. v–t to s–t, and a–t to v–t, read ==areas==. Going s–t to a–t needs both steps, through the v–t graph.",
          },
          {
            title: "Split the journey into phases",
            text: "Cut the source graph where its shape changes. Each phase gives one segment of the target graph, and the phase boundaries must agree on both.",
          },
          {
            title: "Read each phase",
            text: "Find the gradient (or the area) of each phase ==with its sign==. Constant acceleration on the source graph gives a straight segment on the target.",
          },
          {
            title: "Plot and join",
            text: "Plot one point per phase boundary, join the segments in order, and label both axes with the quantity and the unit.",
          },
        ],
      },
      {
        k: "worked",
        title: "The platform diver",
        question:
          "A man dives from a platform into a swimming pool. The platform is 12 m above the water surface. The graph shows the vertical displacement of the man from the water surface, after leaving the platform. **(a)(i)** State how the graph shows that the man's initial vertical velocity is zero. (1) **(a)(ii)** Determine the vertical velocity of the man as he enters the water. (2) **(b)** Before entering the water, the man has a constant vertical acceleration. After entering the water, the man has a constant vertical deceleration. Draw the velocity-time graph for the man on the axes below. (2) — *WPH11 June 2023, Q12*",
        steps: [
          "(a)(i) The gradient at $t = 0$ is zero — the tangent is horizontal at the start.\nThe gradient of a displacement–time graph is the velocity.",
          "(a)(ii) Draw the tangent where the displacement crosses zero, at the water surface, and read its gradient:\n$v = \\frac{\\Delta s}{\\Delta t} = 14\\ \\text{m s}^{-1}$ downwards\nThe printed answer is *(−)14 ± 1 m s⁻¹ by graphical method*. A suvat calculation with the height read from the graph and $a = \\pm g$ scores the same two marks.",
          "(b) Before the water the acceleration is constant (free fall), so the v–t graph is a straight line:\nfrom $0$ at $t = 0$ to $-14\\ \\text{m s}^{-1}$ at $t = 1.5\\ \\text{s}$\nIts gradient is $g$, downwards.",
          "In the water the deceleration is constant, so a second straight line carries the velocity back to zero at $t = 2.1\\ \\text{s}$.\nLines drawn beyond 2.1 s are ignored.",
        ],
        answer: "(a)(ii) 14 m s⁻¹ downwards · (b) straight from 0 to −14 m s⁻¹ at 1.5 s, then straight back to 0 at 2.1 s",
        ms: {
          label: "Mark scheme",
          text: "*straight line from 0 to (1.5, − magnitude from (a)(ii)); second straight line from end of first line to (2.1, 0.0)*",
        },
      },
      { k: "h", text: "A ball that bounces" },
      {
        k: "bullets",
        items: [
          "At a bounce the velocity reverses in a negligible time.",
          "So the v–t line jumps between the two sides of the time axis, almost vertically.",
          "The area on each side is the displacement of that phase.",
          "Equal areas return the ball to its starting height; unequal areas leave it higher or lower (WPH11 October 2020, Q9).",
          "Straight segments on the s–t graph would claim constant velocity — a ball in free flight never has that (WPH11 October 2020, Q10).",
        ],
      },
      { k: "h", text: "A ball thrown straight up" },
      {
        k: "bullets",
        items: [
          "The velocity is zero at the highest point.",
          "The acceleration is still $g$, downwards, for the whole flight.",
          "So the a–t graph of the flight is one flat line below the time axis (WPH11 January 2023, Q7).",
        ],
      },
      { k: "h", text: "A ball falling through a liquid" },
      {
        k: "bullets",
        items: [
          "At the start the only force is the weight, so the v–t gradient is close to $g$.",
          "As the velocity grows the drag grows, the resultant force falls, and the curve flattens.",
          "When drag + upthrust = weight the acceleration is zero: the graph becomes a horizontal line at ==terminal velocity==.",
          "A sketch drawn from rest joins its two shapes smoothly: a curve through the origin, then a straight horizontal line above the axis.",
        ],
      },
      { k: "h", text: "Drawing graphs" },
      {
        k: "bullets",
        items: [
          "Axes labelled with the quantity and the unit.",
          "A scale that spreads the points over more than half of each axis.",
          "Points plotted to within 1 mm.",
          "A thin continuous best-fit line — a sketch graph earns shape marks, not point-by-point accuracy.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "An answer that never mentions a gradient, an area, an intercept or a shape is not an answer about the graph. On a terminal-velocity sketch: the final horizontal line floats ==above== the time axis (the velocity is not zero), and the join must be ==continuous== where the acceleration changes.",
      },
    ],
  },
  {
    spec: "3",
    statement:
      "know the physical quantities derived from the slopes and areas of displacement-time, velocity-time and acceleration-time graphs, including cases of non-uniform acceleration and understand how to use the quantities",
    title: "Slopes and areas — including non-uniform acceleration",
    blocks: [
      {
        k: "bullets",
        items: [
          "When the graph is a curve, the gradient of a ==tangent== gives the instantaneous value.",
          "The area under the curve still gives the accumulated quantity.",
          "Count areas square by square, or in trapezium strips.",
        ],
      },
      {
        k: "table",
        caption: "Slopes and areas",
        head: ["Graph", "Slope gives", "Area gives"],
        rows: [
          ["displacement–time", "velocity (tangent = instantaneous)", "—"],
          ["velocity–time", "acceleration (tangent = instantaneous)", "displacement (below the axis counts negative)"],
          ["acceleration–time", "rate of change of acceleration (not examined)", "change in velocity"],
        ],
      },
      { k: "h", text: "Tangent or chord" },
      {
        k: "bullets",
        items: [
          "A tangent touches at one time and gives the ==instantaneous== value.",
          "A chord joining two times gives the ==average== over that interval.",
          "Average velocity = displacement ÷ time taken (WPH11 October 2024, Q3).",
          "Average acceleration = change in velocity ÷ time taken (WPH11 January 2024, Q16).",
        ],
      },
      {
        k: "worked",
        title: "A tangent at 70 s",
        question:
          "The graph shows the vertical velocity of a deep-sea diver against time; the diver is at the surface when the dive begins and is at the surface again 82 s later. Determine the vertical acceleration of the diver at 70 s. (3) — *WPH11 October 2024, Q19*",
        steps: [
          "Draw the tangent ==at the exact time asked== — the tangent itself is the first marking point.",
          "Read two well-separated points on your own tangent. Close points amplify the drawing error.",
          "$a = \\frac{\\Delta v}{\\Delta t} = \\frac{-0.50}{65} = -0.008\\ \\text{m s}^{-2}$\nPrinted range: $-0.007$ to $-0.01\\ \\text{m s}^{-2}$.",
          "The sign carries the physics: the diver rises with velocity upwards while the acceleration acts downwards.",
        ],
        answer: "$a \\approx -0.008\\ \\text{m s}^{-2}$ (−0.007 to −0.01)",
        ms: {
          label: "Examiner's report",
          text: "*Most candidates who drew a tangent scored well. However, many candidates just read a value of velocity at 70s and divided one by the other. This approach scored no marks.*",
        },
      },
      {
        k: "worked",
        title: "Areas on the same graph",
        question:
          "The same graph shows the diver's vertical velocity against time. Explain how the graph shows that the diver is at the surface again 82 s after the dive began. (2) — *WPH11 October 2024, Q19*",
        steps: [
          "The area between the line and the time axis ==represents displacement== — the first marking point.",
          "The diver is back at the surface when the area below the time axis ==equals== the area above it.\nThen the total displacement is zero.",
        ],
        answer: "areas below and above the time axis cancel — zero displacement, so the diver is back at the surface",
        ms: {
          label: "Examiner's report",
          text: "*Many candidates did not mention the areas on the graph, with many responses referring to either the final velocity being zero, or to the gradient of the graph.*",
        },
      },
    ],
  },
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
        k: "table",
        caption: "The scalar and vector pairs",
        head: ["Vector (magnitude and direction)", "Scalar partner"],
        rows: [
          ["displacement", "distance"],
          ["velocity", "speed"],
          ["force, weight, tension, thrust", "mass"],
          ["momentum", "kinetic energy"],
          ["moment of a force", "work done"],
          ["gravitational field strength", "density, time, temperature"],
        ],
      },
      { k: "h", text: "The unit test" },
      {
        k: "bullets",
        items: [
          "N, N s and N m all belong to direction-bearing quantities.",
          "J, kg and W do not settle it — the harder version offers J, kg, N and W and wants the ==newton==.",
          "The pairs most often confused: moment of a force (vector) beside work done (scalar); momentum beside kinetic energy; weight beside mass.",
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
          "*Which of the following quantities has the SI base units kg m² s⁻³?* — power (WPH11 January 2020, Q1).",
        ],
      },
      { k: "h", text: "Vector notation" },
      {
        k: "bullets",
        items: [
          "In print a vector is written bold ($\\mathbf{F}$) or with an arrow above the letter; its magnitude is plain italic ($F$).",
          "An equilibrium written as one vector sentence — $\\mathbf{W} + \\mathbf{T}_1 + \\mathbf{T}_2 = \\mathbf{0}$ — is a statement about arrows.",
          "Three vectors of different lengths, added nose-to-tail, close back on themselves.",
          "Added as bare numbers the sentence is false: the three forces point in different directions.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The equilibrium item is credited only when the forces are added as vectors — the options that add the tensions as bare numbers are rejected, because the direction is the whole distinction.",
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
        note: "One component along the reference direction, one at right angles to it. The sanity check: at $\\theta = 0^{\\circ}$ the whole vector lies along the reference direction, and $\\cos 0^{\\circ} = 1$ — so the parallel component is the full $F$.",
      },
      {
        k: "figure",
        kind: "ph-vectors",
        caption:
          "Left: resolving a force at 35° into horizontal and vertical components. Right: the same forces added nose-to-tail to find a resultant.",
      },
      { k: "h", text: "How the angle decides the function" },
      {
        k: "bullets",
        items: [
          "$\\theta$ measured ==from the horizontal==: horizontal $= F\\cos\\theta$, vertical $= F\\sin\\theta$.",
          "$\\theta$ measured ==from the vertical==: the roles swap — vertical $= F\\cos\\theta$, horizontal $= F\\sin\\theta$.",
          "Read the reference line off the diagram before choosing the function.",
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
          "The $80^{\\circ}$ is measured from the posts — from the ==vertical==.",
          "So the vertical component of each tension is $T\\cos 80^{\\circ}$:\n$2T\\cos 80^{\\circ} = W$\n$T = \\frac{W}{2\\cos 80^{\\circ}}$\nOption C.",
        ],
        answer: "C — $T = \\frac{W}{2\\cos 80^{\\circ}}$",
        ms: {
          label: "Mark scheme",
          text: "*the components of T acting vertically should be cos and should form the denominator*",
        },
      },
      {
        k: "worked",
        title: "A skier on a slope",
        question:
          "A person on skis slides down a slope at $14^{\\circ}$ to the horizontal with an initial speed of $7.1\\ \\text{m s}^{-1}$. Resistive forces are negligible. Calculate the speed of the skier after moving 15 m down the slope. (3) — *WPH11 January 2025, Q12*",
        steps: [
          "With friction absent the acceleration along the slope comes from the weight's component along it:\n$a = g\\sin\\theta = 9.81 \\times \\sin 14^{\\circ} = 2.37\\ \\text{m s}^{-2}$",
          "Keep the initial speed in the equations of motion:\n$v^2 = u^2 + 2as = 7.1^2 + 2(2.37)(15) = 122$\n$v = 11\\ \\text{m s}^{-1}$",
          "The energy route agrees: the vertical drop is $15\\sin 14^{\\circ} = 3.6\\ \\text{m}$, and $\\tfrac{1}{2}mv^2 = mg\\Delta h$ — the mass cancels.",
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
          "Drawing questions want arrows at least 6 cm long for the longest force.",
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
            text: "The second vector starts from the tip of the first, at the true angle between them. Label each arrow with the force it represents — never with its drawn length in cm.",
          },
          {
            title: "Close the triangle",
            text: "The resultant runs from the tail of the first arrow to the tip of the last. Measure its length and convert back through the scale; measure the angle with a protractor and state the direction.",
          },
        ],
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
          "Check by calculation:\n$70 - 43\\cos 25^{\\circ} = 31.0\\ \\text{N}$\n$43\\sin 25^{\\circ} = 18.2\\ \\text{N}$\n$R = \\sqrt{31.0^2 + 18.2^2} = 36\\ \\text{N}$ at $\\tan^{-1}\\!\\left(\\frac{18.2}{31.0}\\right) = 30^{\\circ}$\nOn a drawing question the calculation still scores the answer mark — but the construction marks belong to the triangle, so draw the triangle as well.",
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
          "Draw the triangle tip-to-tail, all three arrows in the correct relative directions — the construction is marking point 1.",
          "$R = \\sqrt{2300^2 + 1200^2} = 2594 \\approx 2600\\ \\text{N}$\nPrinted tolerance: 2550 N to 2650 N. Pythagoras scores the answer mark even on a drawing question.",
        ],
        answer: "$R = 2600\\ \\text{N}$ (2550 N to 2650 N)",
        ms: {
          label: "Examiner's report",
          text: "*Most candidates scored at least one mark but less than half gained both marks. Whichever method candidates used to arrive at the correct answer, marking point 2 was scored.*",
        },
      },
      { k: "h", text: "Two equal forces" },
      {
        k: "bullets",
        items: [
          "Two ==equal== forces $F$ with an angle $\\theta$ ==between== them give a resultant of $2F\\cos(\\tfrac{\\theta}{2})$.",
          "It acts along the bisector of the angle — halve the printed angle before applying the cosine.",
          "Two 1200 N zip-line tensions meeting at $144^{\\circ}$: $R = 2 \\times 1200 \\times \\cos 72^{\\circ} = 741.6\\ \\text{N} \\approx 740\\ \\text{N}$ (WPH11 June 2024, Q19).",
          "The equilibrium cards in statement 5 run the same trigonometry in reverse: $2T\\cos(\\tfrac{\\theta}{2}) = W$ with $\\theta$ the angle between the two tensions.",
        ],
      },
    ],
  },
];

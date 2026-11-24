import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 revised · Part B (statements 3–5)
   Slopes and areas, scalars and vectors, resolving. Same register
   and the same scenario guardrails as Part A — see the header of
   notes-ph01r-a.ts for the full list: situation-named sections,
   the owner's template spine (situation → force/law → one
   consequence per line → contrast → keyword reason → "Therefore"
   closer), one spoken sentence per line, plain verbs, the owner's
   connectives only, exam keywords exact, no mark-scheme talk in
   the teaching lines. Mark schemes' wordings quoted verbatim in
   the three note labels, no session tags in the teaching body,
   worked cards folded together at the end of each section. The
   reading time is checked by scripts/minutes-check.ts.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01R_B: SpecSection[] = [
  {
    spec: "3",
    statement:
      "know the physical quantities derived from the slopes and areas of displacement-time, velocity-time and acceleration-time graphs, including cases of non-uniform acceleration and understand how to use the quantities",
    title: "Slopes and areas, including non-uniform acceleration",
    blocks: [
      {
        k: "bullets",
        items: [
          "When the graph is a curve, the gradient of a ==tangent== gives the instantaneous value.",
          "The area under the curve still gives the total quantity.",
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
          "A tangent touches the curve at one time and gives the ==instantaneous== value.",
          "A chord joining two times gives the ==average== value over that interval.",
          "Average velocity = displacement ÷ time taken.",
          "Average acceleration = change in velocity ÷ time taken.",
          "Joining two points on a curve does not give the speed at either point.",
          "It gives the average over the interval between them.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Most candidates who drew a tangent scored well. However, many candidates just read a value of velocity at 70s and divided one by the other. This approach scored no marks.*",
      },
      { k: "h", text: "Reading a gradient from a printed graph" },
      {
        k: "bullets",
        items: [
          "When the gradient comes from a printed line, read both points off the line itself.",
          "Choose two places far apart along the line.",
          "Two readings close together push the reading error into the gradient.",
          "The mark scheme grants no tolerance for them.",
          "A tangent you drew yourself is read the same way.",
          "Take two well-separated points on your own tangent, not two nearby ones.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*No tolerance if readings taken at 4 s and 16 s*.",
      },
      {
        k: "table",
        caption: "The quantity each slope and area gives, with its unit",
        head: ["Reading", "From", "It gives", "Unit"],
        rows: [
          ["slope", "displacement-time", "velocity", "m s⁻¹"],
          ["slope", "velocity-time", "acceleration", "m s⁻²"],
          ["area", "velocity-time", "displacement", "m"],
          ["area", "acceleration-time", "change in velocity", "m s⁻¹"],
        ],
      },
      { k: "h", text: "Areas under curves" },
      {
        k: "figure",
        kind: "ph-area-strips",
        caption:
          "The counting method: split the area into strips wide enough to read, treat each as a trapezium, add them, then count the leftover squares.",
      },
      {
        k: "bullets",
        items: [
          "Split the area into strips between whole squares.",
          "Four to six strips is plenty.",
          "Each strip is a trapezium.",
          "$\\text{area} = \\tfrac{1}{2}(\\text{left height} + \\text{right height}) \\times \\text{width}$",
          "Add the strips together.",
          "Count the leftover half-squares.",
          "Carry the unit through the sum.",
          "The answer is a displacement, in metres.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "A tangent at 70 s",
        question:
          "The graph shows the vertical velocity of a deep-sea diver against time; the diver is at the surface when the dive begins and is at the surface again 82 s later. Determine the vertical acceleration of the diver at 70 s. (3) — *WPH11 October 2024, Q19*",
        steps: [
          "Draw the tangent at the exact time asked. Drawing the tangent is itself the first marking point.",
          "Read two well-separated points on your own tangent. Close points amplify the drawing error.",
          "$a = \\frac{\\Delta v}{\\Delta t} = \\frac{-0.50}{65} = -0.008\\ \\text{m s}^{-2}$",
          "The negative sign makes sense: the diver is rising, so the velocity is upwards, while the acceleration acts downwards.",
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
          "The area between the line and the time axis ==represents displacement==. This is the first marking point.",
          "The diver is back at the surface when the area below the time axis ==equals== the area above it.\nThen the total displacement is zero.",
        ],
        answer: "areas below and above the time axis cancel — zero displacement, so the diver is back at the surface",
        ms: {
          label: "Examiner's report",
          text: "*Many candidates did not mention the areas on the graph, with many responses referring to either the final velocity being zero, or to the gradient of the graph.*",
        },
      },
      {
        k: "worked",
        title: "The steepest gradient on a printed line",
        question:
          "The velocity-time graph for part of a bicycle ride is shown: the velocity rises from 1.8 m s⁻¹ at 4 s to 5.0 m s⁻¹ at 16 s, along the steepest straight stretch of the line. Determine the maximum acceleration of the person on the bicycle. (3) — *WPH11 June 2025, Q12(b)*",
        steps: [
          "Read two pairs of corresponding values from the printed line, far apart along it.\nReadings at 4 s and 16 s carry ==no tolerance==; readings from other points allow ± half a small square.",
          "The maximum acceleration is the gradient of the steepest stretch:\n$a = \\frac{5.0 - 1.8}{16 - 4} = \\frac{3.2}{12}$",
          "$a = 0.27\\ \\text{m s}^{-2}$",
        ],
        answer: "$a = 0.27\\ \\text{m s}^{-2}$",
        ms: {
          label: "Mark scheme",
          text: "*Two pairs of corresponding values of velocity and time read from* graph (1) · *Calculates gradient of the line between 4 s and 16 s* (1) · *Maximum acceleration = 0.27 m s−2* (1).",
        },
      },
      {
        k: "worked",
        title: "How high did the elevator go",
        question:
          "The graph shows how the velocity of an elevator changes when moving to a higher floor: it rises to $2.6\\ \\text{m s}^{-1}$ in 1.4 s, stays at $2.6\\ \\text{m s}^{-1}$ for 3.4 s, then decelerates to rest in 2.8 s. **(a)** Determine the maximum acceleration of the elevator. (2) **(b)** The floors are evenly spaced, 3.5 m apart, and the elevator was on floor 6 at $t = 0$. Determine the highest floor reached. (3) — *WPH11 June 2026, Q15*",
        steps: [
          "(a) The steepest part of the rise is the first stretch. Draw a tangent there and read its gradient:\n$a = \\frac{2.6}{1.4} \\approx 1.9\\ \\text{m s}^{-2}$",
          "(b) The distance up is the ==area== under the whole velocity-time graph, in three pieces:\n$\\tfrac{1}{2}(1.4)(2.6) + (2.6)(3.4) + \\tfrac{1}{2}(2.8)(2.6)$",
          "$= 1.82 + 8.84 + 3.64 = 14.3\\ \\text{m}$\nThe printed range is 13.5 m to 14.5 m, wide enough to absorb small reading errors.",
          "Floors gained:\n$\\frac{14.3}{3.5} \\approx 4\\ \\text{floors}$\nRound to a whole number.",
          "Highest floor:\n$6 + 4 = 10$",
        ],
        answer: "(a) ≈ 1.9 m s⁻² · (b) floor 10 (14.3 m ÷ 3.5 m ≈ 4 floors above floor 6)",
        ms: {
          label: "Mark scheme",
          text: "*draw a tangent at the steepest point of the curve (1)* · *(maximum) acceleration is the gradient of the tangent (1)* · *Allow a distance in the range 13.5 m to 14.5 m* · *Uses 3.5 m to determine number of floors moved by elevator* · *Highest floor reached = 10 (answer must be an integer)*.",
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
        k: "bullets",
        items: [
          "A multiple choice on this appears in almost every paper.",
          "It asks which quantity is the vector, or which table row is correct, or which unit belongs to a vector.",
          "The options come from the same short list every time.",
          "The table below covers every quantity that has appeared.",
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
          "The last row matters.",
          "Efficiency, power and energy are all scalars.",
          "They still appear beside vectors in the wrong options.",
          "The pairs most often confused are moment of a force (vector) beside work done (scalar), momentum beside kinetic energy, and weight beside mass.",
        ],
      },
      { k: "h", text: "Which quantity has this unit?" },
      {
        k: "bullets",
        items: [
          "N, N s and N m all belong to direction-bearing quantities.",
          "J, kg and W do not settle it.",
          "The harder version offers J, kg, N and W.",
          "The answer is the ==newton==.",
          "Acceleration's unit can be written two ways.",
          "It is $\\text{m s}^{-2}$ ==or== $\\text{N kg}^{-1}$.",
          "They are the same unit.",
          "A force of $1\\ \\text{N}$ on a mass of $1\\ \\text{kg}$ gives an acceleration of $1\\ \\text{m s}^{-2}$.",
          "A multiple choice can offer either spelling, so read the unit before picking the quantity.",
        ],
      },
      { k: "h", text: "A car at constant speed on a bending road" },
      {
        k: "bullets",
        items: [
          "A car moves along a bending road at constant speed.",
          "The speedometer reading never changes, so the speed is constant.",
          "But the direction of the car keeps changing.",
          "Velocity is a vector quantity, so it has magnitude ==and direction==.",
          "So a change of direction alone is a change of velocity.",
          "The velocity of the car is changing, even though its speed is not.",
          "Acceleration is the rate of change of velocity.",
          "So the car is accelerating, even at constant speed.",
          "Speed is a scalar, so it has no direction to change.",
          "Therefore, a car at constant speed on a bending road has a changing velocity and an acceleration.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*velocity is a vector (but speed is a scalar) Or velocity has magnitude/speed and direction (but speed does not have direction)* (1) · *Direction is changing (so velocity changes)* (1).",
      },
      { k: "h", text: "Distance against displacement" },
      {
        k: "bullets",
        items: [
          "Distance is the ==length of the path== travelled.",
          "Displacement is the ==straight line== from the start to the end, with its direction.",
          "On a curved path, the straight line is always shorter than the path.",
          "So the magnitude of the displacement is less than the distance travelled.",
          "Distance is a scalar and displacement is a vector, so a direction or a sign is part of every displacement answer.",
        ],
      },
      { k: "h", text: "A runner completes one lap" },
      {
        k: "bullets",
        items: [
          "A runner completes one full lap of a track and finishes back at the start.",
          "The start and the finish are the same point.",
          "Displacement is the straight line from start to end.",
          "So the displacement is zero.",
          "Distance is the length of the path travelled.",
          "So the distance is the whole lap.",
          "Therefore, one full lap gives a distance equal to the lap and a displacement of zero.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Displacement is a straight line (from start to end)* (1) · *(Whereas) distance is the length of the path* (1) — the printed allows include *the path is not a straight line*, and the fallback is *displacement is a vector but distance is a scalar*.",
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
          "Derive them by substitution.",
          "$1\\ \\text{N} = 1\\ \\text{kg m s}^{-2}$",
          "So $1\\ \\text{J} = 1\\ \\text{N m} = 1\\ \\text{kg m}^2\\ \\text{s}^{-2}$.",
        ],
      },
      { k: "h", text: "Vector notation" },
      {
        k: "bullets",
        items: [
          "In print, a vector is written bold ($\\mathbf{F}$) or with an arrow above the letter.",
          "Its magnitude is written plain and italic ($F$).",
          "An equilibrium written as one vector sentence — $\\mathbf{W} + \\mathbf{T}_1 + \\mathbf{T}_2 = \\mathbf{0}$ — is a statement about arrows.",
          "Three vectors of different lengths, added nose-to-tail, close back on themselves.",
          "Added as bare numbers, the sentence is false.",
          "The three forces point in different directions.",
          "The equilibrium option is credited only when the forces are added as vectors.",
        ],
      },
      { k: "h", text: "The change in a vector" },
      {
        k: "bullets",
        items: [
          "The change in any vector is itself a vector.",
          "Subtract with signs: $\\Delta v = v_{\\text{final}} - v_{\\text{initial}}$.",
          "You will use the same signed subtraction again in the momentum sums of Topic 2.",
        ],
      },
      { k: "h", text: "A car slowing down while travelling north" },
      {
        k: "bullets",
        items: [
          "A car travels north at $+50\\ \\text{m s}^{-1}$.",
          "The car slows to $+20\\ \\text{m s}^{-1}$, still travelling north.",
          "The change in velocity is ==final velocity minus initial velocity==.",
          "$\\Delta v = v_{\\text{final}} - v_{\\text{initial}}$",
          "So $\\Delta v = (+20) - (+50) = -30\\ \\text{m s}^{-1}$",
          "The minus sign means the change points south, opposite to the motion.",
          "Acceleration is the rate of change of velocity: $a = \\frac{\\Delta v}{\\Delta t}$.",
          "Since the change in velocity is negative, the acceleration is negative as well.",
          "Drawn as arrows, the change runs from the tip of the initial arrow to the tip of the final one.",
          "Therefore, the change of velocity is $-30\\ \\text{m s}^{-1}$, a $30\\ \\text{m s}^{-1}$ change pointing south.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*B is the correct answer* · *A is not the correct answer as this would give a final velocity of 80 m s-1 N* · *C is not the correct answer as this would give a final velocity of 120 m s-1 N* · *D is not the correct answer as this would give a final velocity of 20 m s-1 S* — the wrong options add or subtract the magnitudes as bare numbers.",
      },
      { k: "h", text: "Worked examples" },
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
          text: "*velocity is a vector (but speed is a scalar) Or velocity has magnitude/speed and direction (but speed does not have direction)* (1) · *Direction is changing (so velocity changes)* (1).",
        },
      },
      {
        k: "worked",
        title: "The change of velocity",
        question:
          "A car travels north with a velocity of +50 m s⁻¹. While still travelling north, the car slows to a velocity of +20 m s⁻¹. Which of the following is the change of velocity of the car?  A +30 m s⁻¹ · B −30 m s⁻¹ · C +70 m s⁻¹ · D −70 m s⁻¹ — *WPH11 October 2020, Q4*",
        steps: [
          "The change in a vector is final minus initial, signs carried:\n$\\Delta v = (+20) - (+50) = -30\\ \\text{m s}^{-1}$",
          "The minus sign says the change points south, opposite to the motion. Option B.",
          "The wrong options treat the velocities as bare numbers: A subtracts in the wrong order without the sign, and C and D add the magnitudes.",
        ],
        answer: "B — Δv = −30 m s⁻¹, a 30 m s⁻¹ change directed south",
        ms: {
          label: "Mark scheme",
          text: "*B is the correct answer* · *A is not the correct answer as this would give a final velocity of 80 m s-1 N* · *C is not the correct answer as this would give a final velocity of 120 m s-1 N* · *D is not the correct answer as this would give a final velocity of 20 m s-1 S*.",
        },
      },
      {
        k: "worked",
        title: "The curved path",
        question:
          "A person follows a curved path from a start point to an end point. At the end of the path, the magnitude of the displacement from the start is less than the distance travelled by the person. Describe why the displacement is less than the distance travelled by the person. (2) — *WPH11 June 2025, Q12(a)*",
        steps: [
          "Displacement is the straight line from the start to the end, with its direction.",
          "Distance is the ==length of the path== travelled. The path curves, so it is longer than the straight line that closes the journey.",
        ],
        answer: "displacement is the straight line from start to end; distance is the length of the curved path, which is longer",
        ms: {
          label: "Mark scheme",
          text: "*Displacement is a straight line (from start to end)* (1) · *(Whereas) distance is the length of the path* (1) — allow *the path is not a straight line*; if no other mark scored, allow 1 mark for *displacement is a vector but distance is a scalar*.",
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
          "The spec asks for ==by drawing== as well as by calculation.",
          "Drawing carries its own marks when the question asks for it.",
          "Choose a scale that makes the longest arrow at least 6 cm.",
          "For example, 1 cm = 1 km, or 1 cm = 10 N.",
          "Write the scale on the diagram.",
          "Draw the reference direction first — the horizontal, or north.",
          "Measure the angle from it with a protractor.",
          "Then draw the vector.",
          "Drop dashed lines from the tip of the arrow onto your axes.",
          "Measure each component against the scale.",
          "Convert the lengths back through the scale.",
          "A 10 km walk at $53^{\\circ}$ above horizontal draws as 6 cm east and 8 cm north on a 1 cm = 1 km grid.",
          "The components are measured, not guessed.",
          "Check the pair with Pythagoras before moving on.",
          "The two components must rebuild the original magnitude.",
          "Here $\\sqrt{6^2 + 8^2} = 10$ km.",
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
          "$\\theta$ measured ==from the vertical==: the roles swap.",
          "Vertical $= F\\cos\\theta$, and horizontal $= F\\sin\\theta$.",
          "Read the reference line off the diagram before choosing the function.",
        ],
      },
      { k: "h", text: "A ball launched at different angles" },
      {
        k: "bullets",
        items: [
          "A ball is launched at angle $\\theta$ and speed $u$, and it must reach a fixed height.",
          "The height is decided by the vertical component of the launch velocity.",
          "The vertical component is $u_{\\text{V}} = u\\sin\\theta$.",
          "So $u_{\\text{V}}$ is fixed, because the height is fixed.",
          "A smaller $\\theta$ gives a smaller $\\sin\\theta$.",
          "So the launch speed $u$ must increase to keep $u\\sin\\theta$ at the fixed value.",
          "$u = \\frac{u_{\\text{V}}}{\\sin\\theta}$",
          "At $\\theta = 90^{\\circ}$, $\\sin\\theta = 1$.",
          "So the launch speed is at its minimum there, $u = u_{\\text{V}}$.",
          "As $\\theta$ decreases, the launch speed increases.",
          "The increase is steepest at small $\\theta$.",
          "As $\\theta$ approaches $0^{\\circ}$, $\\sin\\theta$ approaches $0$.",
          "Dividing by something closer and closer to zero makes $u$ increase without limit.",
          "So the curve gets closer and closer to the vertical axis but never touches it.",
          "Therefore, the smaller the launch angle, the bigger the launch speed needed to reach the same height.",
        ],
      },
      { k: "h", text: "Choosing the axes" },
      {
        k: "bullets",
        items: [
          "The components depend on the axes you choose.",
          "The question's motion decides the best axes.",
          "For an object on a slope, choose the axes ==along== and ==perpendicular to== the slope.",
          "The motion then runs along one axis only.",
          "So the SUVAT equations describe it in one dimension.",
          "For a weight hanging from a wire, choose horizontal and vertical, because the balance to solve is vertical.",
          "The two components at right angles are independent.",
          "Changing one does not move the other.",
          "That is why each axis can be solved on its own.",
        ],
      },
      { k: "h", text: "A weight hanging on a wire" },
      {
        k: "bullets",
        items: [
          "A weight hangs from the middle of a wire, and the wire sags on both sides.",
          "Each side of the wire pulls along itself.",
          "So each tension acts at an angle, with a vertical part and a horizontal part.",
          "The weight hangs at the middle, so the two sides share the load equally.",
          "The two horizontal components point opposite ways, so they cancel.",
          "Only the vertical direction is left to balance.",
          "In equilibrium, the two vertical components together carry the weight.",
          "$2T\\sin\\theta = W$ when $\\theta$ is measured from the horizontal.",
          "$2T\\cos\\theta = W$ when $\\theta$ is measured from the vertical post.",
          "A flatter wire gives each tension a smaller vertical fraction.",
          "So the same weight needs a larger tension.",
          "As the wire approaches the horizontal, the tension increases without limit.",
          "Therefore, a flatter wire must pull with a larger tension to carry the same weight.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "A wrong option resolved onto the wrong axis: *T cos θ is the horizontal component of tension T*. The printed guard: *the components of T acting vertically should be cos and should form the denominator*.",
      },
      { k: "h", text: "A weight on a slope" },
      {
        k: "bullets",
        items: [
          "A weight slides down a slope at angle $\\theta$ to the horizontal.",
          "Friction and drag are negligible.",
          "The weight splits into two components: $mg\\sin\\theta$ along the slope and $mg\\cos\\theta$ perpendicular to it.",
          "The perpendicular component presses the object into the slope.",
          "The surface pushes straight back, so the two of them balance.",
          "So the perpendicular component causes no acceleration.",
          "Only the along-slope component is left unbalanced.",
          "So the acceleration down the slope is $a = g\\sin\\theta$.",
          "The slope keeps the motion in one straight line.",
          "So the SUVAT equations run along the slope with $a = g\\sin\\theta$.",
          "Therefore, the steeper the slope, the bigger $g\\sin\\theta$, and the faster the object speeds up.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*A large number of candidates either failed to take account of the initial velocity of the person or used a component of the initial velocity, and therefore ended up with an incorrect answer.*",
      },
      { k: "h", text: "Worked examples" },
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
];

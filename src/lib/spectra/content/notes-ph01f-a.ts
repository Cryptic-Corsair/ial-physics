import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces · Part A (statements 1–3)
   The SUVAT equations, the three motion graphs, slopes and areas.
   Written in the owner's plain style: short sentences, one idea
   per line, the teaching first, and every worked example collected
   at the end of its section. Mark-scheme facts are stated plainly;
   verbatim quotes live only inside the cards' ms blocks.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01F_A: SpecSection[] = [
  {
    spec: "1",
    statement:
      "be able to use the equations for uniformly accelerated motion in one dimension: s = (u + v)t/2, v = u + at, s = ut + ½at², v² = u² + 2as",
    title: "The SUVAT equations",
    blocks: [
      {
        k: "bullets",
        items: [
          "The equations of motion are four equations which describe any object moving with constant acceleration. They are called the SUVAT equations because of the variables they contain.",
          "$s$ = displacement (m)",
          "$u$ = initial velocity (m s⁻¹)",
          "$v$ = final velocity (m s⁻¹)",
          "$a$ = acceleration (m s⁻²)",
          "$t$ = time taken (s)",
        ],
      },
      {
        k: "eq",
        eq: "$s = \\tfrac{1}{2}(u + v)t$        $v = u + at$        $s = ut + \\tfrac{1}{2}at^2$        $v^2 = u^2 + 2as$",
        note: "All four are printed on the data sheet. Every variable apart from $t$ is a vector quantity, so each one is positive or negative depending on its direction.",
      },
      {
        k: "bullets",
        items: [
          "For the SUVAT equations, the acceleration must always be constant.",
          "When the only force on an object is gravity, $a = g$, and $g$ is constant near the Earth's surface.",
          "Therefore, SUVAT equations apply whenever an object is in constant acceleration, or when air resistance is negligible or ignored.",
          "We cannot use SUVAT equations for an object with varying acceleration.",
          "At that time, we use GPE = KE, which becomes $mgh = \\tfrac{1}{2}mv^2$.",
          "A curved slide is the example. The gradient changes from point to point, so the acceleration is not constant, and the energy equation replaces the equations of motion (WPH11 January 2024, Q14).",
        ],
      },
      {
        k: "figure",
        kind: "ph-curved-slide",
        caption:
          "A student slides down a curved slide. The gradient changes from point to point, so the acceleration is not constant and the equations of motion cannot be used here.",
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
      { k: "h", text: "Advice" },
      {
        k: "bullets",
        items: [
          "For a show that question, your answer should be one more significant figure than the value in the question.",
          "A rebound changes the direction of velocity, so it changes the sign as well.",
          "However, a rebound does not change the sign of acceleration.",
          "Reverse working scores both marks on a two-mark show that, but only two of the three on a three-mark one.",
        ],
      },
      {
        k: "worked",
        title: "When the equations must not be used",
        question:
          "A student of mass 24 kg slides down a slide. The slide is curved, so its gradient changes along the length. The student starts from rest at the top and the vertical drop is 1.7 m. **(a)(i)** Explain why the equations of motion must not be used to find the speed at the bottom. **(a)(ii)** Calculate the speed at the bottom. — *WPH11 January 2024, Q14*",
        steps: [
          "(a)(i) On a curved slide the gradient changes from point to point, so the acceleration changes too. There is no single $a$ to substitute, so the equations of motion cannot be used.",
          "(a)(ii) Use the energy equation instead. Gravitational potential energy at the top becomes kinetic energy at the bottom:\n$mg\\Delta h = \\tfrac{1}{2}mv^2$",
          "$\\Delta E_{\\text{grav}} = 24 \\times 9.81 \\times 1.7 = 400\\ \\text{J}$",
          "$400 = \\tfrac{1}{2}(24)v^2$\n$v = \\sqrt{\\frac{2 \\times 400}{24}} = 5.8\\ \\text{m s}^{-1}$",
        ],
        answer: "(a)(i) acceleration is not constant · (a)(ii) $v = 5.8\\ \\text{m s}^{-1}$ by energy",
        ms: {
          label: "Mark scheme",
          text: "*The equations of motion require a constant acceleration* (1) · *Do not accept use of equations of motion.*",
        },
      },
      {
        k: "worked",
        title: "Choosing between the four equations",
        question:
          "A car travels with a velocity of $3\\ \\text{m s}^{-1}$. The car accelerates uniformly in a straight line for a distance of 15 m. The final velocity of the car is $5\\ \\text{m s}^{-1}$. Which of the following expressions gives the acceleration of the car in m s⁻²?  A $\\frac{5-3}{15}$ · B $\\frac{5-3}{2 \\times 15}$ · C $\\frac{5^2 - 3^2}{15}$ · D $\\frac{5^2 - 3^2}{2 \\times 15}$ — *WPH11 June 2023, Q7*",
        steps: [
          "What the question gives: $u = 3\\ \\text{m s}^{-1}$, $v = 5\\ \\text{m s}^{-1}$, $s = 15\\ \\text{m}$. The quantity that appears nowhere is $t$.",
          "So the equation is the one without time: $v^2 = u^2 + 2as$.",
          "Rearrange for $a$:\n$a = \\frac{v^2 - u^2}{2s} = \\frac{5^2 - 3^2}{2 \\times 15}$\nOption D.",
          "The wrong options come from slips: A and B subtract the velocities without squaring them, and C leaves out the 2 in $2as$.",
        ],
        answer: "D — $a = \\frac{25 - 9}{30} = 0.53\\ \\text{m s}^{-2}$",
        ms: {
          label: "Mark scheme",
          text: "A is incorrect because *15 is not the time taken*; C is incorrect because *the displacement has not been doubled*.",
        },
      },
      {
        k: "worked",
        title: "A drop on the Moon",
        question:
          "An object on the Moon falls a vertical distance of 0.32 m, from rest, in a time of 0.63 s. Which of the following expressions gives the acceleration due to gravity on the Moon in m s⁻²?  A $\\frac{0.32}{2 \\times 0.63}$ · B $\\frac{0.32}{2 \\times 0.63^2}$ · C $\\frac{2 \\times 0.32}{0.63^2}$ · D $\\frac{2 \\times 0.32}{0.63}$ — *WPH11 January 2026 01A, Q6*",
        steps: [
          "The object falls from rest, so $s = \\tfrac{1}{2}at^2$.",
          "Rearrange for $a$:\n$s = \\tfrac{1}{2}at^2 \\Rightarrow a = \\frac{2s}{t^2}$",
          "$a = \\frac{2 \\times 0.32}{0.63^2}$\nOption C.",
          "The value works out at $1.6\\ \\text{m s}^{-2}$, which is the Moon's $g$. The lunar projectile question in the same paper uses $1.63\\ \\text{m s}^{-2}$ as the acceleration.",
        ],
        answer: "C — $g_{\\text{Moon}} = \\frac{2 \\times 0.32}{0.63^2} \\approx 1.6\\ \\text{m s}^{-2}$",
      },
      {
        k: "worked",
        title: "Two cars and a finish line",
        question:
          "Two cars, A and B, are racing along a track. At a particular instant car A is 9 m ahead of car B, and car A is 100 m from the finish line. Car A has a constant velocity of $93\\ \\text{m s}^{-1}$. At this instant car B also has a velocity of $93\\ \\text{m s}^{-1}$, and car B is accelerating with a constant acceleration of $14\\ \\text{m s}^{-2}$. **(a)** Show that car A and car B are side by side after a time of about 1.1 s. (3) **(b)** Deduce whether car A reaches the finish line before car B. (3) — *WPH11 June 2024, Q13*",
        steps: [
          "Both cars travel at $93\\ \\text{m s}^{-1}$, so equal speeds cover equal distances.\nThe 9 m gap is closed by car B's extra distance alone, and car B gains that extra distance from its acceleration, starting from $u = 0$:\n$s = \\tfrac{1}{2}at^2 = \\tfrac{1}{2}(14)t^2 = 7t^2$",
          "Side by side when the extra distance equals the gap:\n$9.0 = 7t^2$\n$t = \\sqrt{\\frac{9.0}{7.0}} = 1.13\\ \\text{s}$\n$1.13\\ \\text{s}$ is one more significant figure than the *about 1.1 s* the question states.",
          "(b) Car A covers 100 m at steady speed:\n$t_{\\text{A}} = \\frac{100}{93} = 1.075\\ \\text{s}$",
          "Car B must cover 109 m:\n$109 = 93t + 7t^2$\n$t_{\\text{B}} = 1.084\\ \\text{s}$",
          "Compare:\n$1.075\\ \\text{s} < 1.084\\ \\text{s}$\nCar A reaches the finish line first. A deduce answer needs the two values, the comparison and the conclusion.",
        ],
        answer: "(a) 1.13 s ≈ 1.1 s · (b) yes — car A first, 1.075 s < 1.084 s",
      },
      {
        k: "worked",
        title: "On Mars",
        question:
          "A rock falls from rest through a small distance s to the surface of Mars, and hits Mars with velocity $v_{\\text{M}}$. Another rock falls from rest through the same distance s to the surface of Earth, and hits Earth with velocity $v_{\\text{E}}$. Calculate the ratio $v_{\\text{M}} \\div v_{\\text{E}}$. Acceleration due to gravity on Mars $= 0.38g$. (3) — *WPH11 June 2023, Q11*",
        steps: [
          "Only $g$ changes: on Mars $a = 0.38g$. The equations themselves do not change.",
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
    title: "Motion graphs",
    blocks: [
      { k: "h", text: "Displacement-time graphs" },
      {
        k: "bullets",
        items: [
          "The gradient of a displacement-time graph is the velocity.",
          "A straight line means constant velocity. A steeper line means a faster object.",
          "A curve that steepens means the object is speeding up. A curve that flattens means it is slowing down.",
          "A horizontal line means the object is stationary.",
          "A negative gradient means the object is moving the other way.",
          "Displacement is measured from the zero line, not from the furthest point or from where the object started.",
          "When the line curves, the gradient of the tangent at a point gives the velocity at that instant.",
          "The area under a displacement-time graph has no use, so no question asks for it.",
        ],
      },
      {
        k: "figure",
        kind: "ph-dt-graph",
        caption:
          "One journey on a displacement-time graph: fast, then slower, then stopped, then back past the start. Every phase change shows up as a gradient change.",
      },
      { k: "h", text: "Velocity-time graphs" },
      {
        k: "bullets",
        items: [
          "The gradient of a velocity-time graph is the acceleration.",
          "The area between the line and the time axis is the displacement.",
          "Area below the time axis counts as negative, because the object is moving the other way. The two areas then cancel.",
          "The intercept on the velocity axis is the initial velocity. A line that starts above zero did not start from rest.",
          "A horizontal line means constant velocity. The resultant force is zero and the acceleration is zero.",
          "When the line curves, the gradient of the tangent gives the acceleration at that instant.",
        ],
      },
      {
        k: "figure",
        kind: "ph-vt-graph",
        caption:
          "One object with positive velocity and then negative. The gradient changes once; the areas on the two sides of the axis point in opposite directions.",
      },
      { k: "h", text: "Acceleration-time graphs" },
      {
        k: "bullets",
        items: [
          "A flat line means constant acceleration, which is the condition the SUVAT equations need.",
          "The area under an acceleration-time graph is the change in velocity, not the velocity itself. Add it to the starting velocity.",
          "A ball thrown upwards and caught has $a = -g$ for the whole flight, drawn as one flat line below the axis. Even at the top, where $v = 0$, the acceleration is still $g$ downwards.",
          "A rocket accelerates while its engines burn, then the acceleration drops to $-g$ when the fuel runs out. The step comes exactly where the forces change.",
          "The gradient of an acceleration-time graph is the rate of change of acceleration. It is not examined, but it appears as a wrong option.",
        ],
      },
      {
        k: "figure",
        kind: "ph-at-graph",
        caption:
          "Left: the throw, one flat line below the axis for the whole flight. Right: a burning rocket, whose acceleration steps down the moment the fuel runs out.",
      },
      { k: "h", text: "Changing between graphs" },
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
        k: "figure",
        kind: "ph-graph-conversion",
        caption:
          "The conversion with the numbers showing: four phases on the displacement-time graph, each gradient written out, each gradient landing on its segment of the velocity-time graph.",
      },
      {
        k: "bullets",
        items: [
          "Work the figure through: 0 to 2 s covers 6 m so the velocity is $6 \\div 2 = 3\\ \\text{m s}^{-1}$; 2 to 4 s covers 12 m so $6\\ \\text{m s}^{-1}$; then a flat 2 s gives zero; then $-8$ m in 2 s gives $-4\\ \\text{m s}^{-1}$.",
          "Each gradient is one horizontal step on the velocity-time graph, drawn at the time where that phase ends.",
          "The velocity-time graph's own gradient is zero almost everywhere, so it tells you nothing about acceleration. This is why s–t to a–t goes through the v–t graph in two steps.",
        ],
      },
      {
        k: "figure",
        kind: "ph-motion-graphs",
        caption:
          "One continuous acceleration from rest, read across all three graphs at once. The dotted time lines carry each event from graph to graph.",
      },
      { k: "h", text: "Falling through a liquid" },
      {
        k: "bullets",
        items: [
          "At the start the only force is the weight, so the gradient of the velocity-time graph is close to $g$.",
          "As the velocity increases, the drag increases. The resultant force falls, so the gradient falls and the curve flattens.",
          "When drag + upthrust = weight, the acceleration is zero. The graph becomes a horizontal line at ==terminal velocity==.",
          "The June 2025 skydiver sketch asked for down as negative. The mark scheme accepts: *Curved line starting at zero with negative gradient decreasing in magnitude* · *Horizontal line after 12 seconds* · *Line should not be along the x-axis*.",
          "A sketch drawn from rest joins the two shapes smoothly: a curve through the origin, then a straight horizontal line above the axis, or below it if down is negative.",
        ],
      },
      { k: "h", text: "A ball that bounces" },
      {
        k: "bullets",
        items: [
          "At a bounce the velocity reverses in a negligible time.",
          "So the velocity-time line jumps between the two sides of the time axis, almost vertically.",
          "The area on each side is the displacement of that phase.",
          "Equal areas return the ball to its starting height. Unequal areas leave it higher or lower (WPH11 October 2020, Q9).",
          "Straight segments on the displacement-time graph would mean constant velocity, and a ball in free flight never has that (WPH11 October 2020, Q10).",
        ],
      },
      { k: "h", text: "Describing motion from a graph" },
      {
        k: "bullets",
        items: [
          "The 6-mark describe questions give 4 marks for the physics points and 2 marks for the structure of the answer.",
          "Build each sentence on the one before it: state a feature of the graph, then say what it means for the motion.",
          "Name the gradient and say what it gives. Do the same for each intercept and each change of shape.",
          "Cover the whole time axis. The later parts of the graph carry marking points too.",
          "Keep the answer about the graph itself. An answer that never mentions a gradient, an area, an intercept or a shape is not an answer about the graph.",
        ],
      },
      { k: "h", text: "Drawing graphs" },
      {
        k: "bullets",
        items: [
          "Axes labelled with the quantity and the unit.",
          "A scale that spreads the points over more than half of each axis.",
          "Points plotted to within 1 mm.",
          "A thin continuous best-fit line. On a sketch graph it is the shape that is marked, not point-by-point accuracy.",
          "Read graph values precisely, and say which two points you used for a gradient.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "On a terminal-velocity sketch, the final horizontal line sits ==above== the time axis, because the velocity is not zero, and the join must be ==continuous== where the acceleration changes.",
      },
      {
        k: "worked",
        title: "The student who walks for 6 seconds",
        question:
          "A student walks for 6 seconds. The displacement-time graph for the student is shown: a straight line from $-1$ m at $t = 0$ to $+2$ m at $t = 6$ s. Which row of the table shows the final displacement and velocity of the student?  A 2.0 m, 0.5 m s⁻¹ · B 3.0 m, 0.5 m s⁻¹ · C 5.0 m, 2.0 m s⁻¹ · D 3.0 m, 2.0 m s⁻¹ — *WPH11 January 2022, Q1*",
        steps: [
          "The final displacement is read where the line ends: $+2.0\\ \\text{m}$, measured from the zero line.\nOptions B and D come from measuring from the start of the walk, $-1\\ \\text{m}$. Displacement is measured from the zero line, not from where the object started.",
          "The line is straight, so the velocity is the gradient:\n$v = \\frac{\\Delta s}{\\Delta t} = \\frac{2 - (-1)}{6} = \\frac{3}{6} = 0.5\\ \\text{m s}^{-1}$",
          "Options C and D divide the other way round, $6 \\div 3$, putting time under distance instead of distance under time.",
        ],
        answer: "A — 2.0 m and 0.5 m s⁻¹",
        ms: {
          label: "Mark scheme",
          text: "B is incorrect because *final displacement is measured from 0, not −1*; C and D are incorrect because *velocity is 3 m ÷ 6 s, not 6 m ÷ 3 s*.",
        },
      },
      {
        k: "worked",
        title: "Describe the acceleration",
        question:
          "The graph shows how the velocity of an object varies with time: it rises linearly from 0 to $+14\\ \\text{m s}^{-1}$ at 9 s, then falls linearly through zero at 12 s to $-30\\ \\text{m s}^{-1}$ at 17.5 s, and stays there. Describe how the acceleration of the object varies with time. Your answer should include calculations. (3) — *WPH11 January 2019, Q11*",
        steps: [
          "First segment: constant gradient, so constant acceleration.\n$a = \\frac{v - u}{t} = \\frac{14 - 0}{9} = 1.6\\ \\text{m s}^{-2}$",
          "At 9 s the gradient changes, so the acceleration becomes negative.",
          "Second segment:\n$a = \\frac{-30 - 14}{17.5 - 9} = \\frac{-44}{8.5} = -5.2\\ \\text{m s}^{-2}$\nConstant, negative, and steeper than the first.",
          "Between 9 s and 12 s the velocity is positive and the acceleration is negative, so the object is decelerating.",
          "From 12 s the velocity is negative and the acceleration is still negative: the object is accelerating while moving in the opposite direction.",
        ],
        answer: "+1.6 m s⁻² for 9 s, then constant −5.2 m s⁻² (−4.9 to −5.2 accepted) — decelerating to 12 s, then speeding up backwards",
        ms: {
          label: "Mark scheme",
          text: "*At 9 s the acceleration becomes negative* · *From 12 s to 17.5 seconds the object is accelerating while moving in the opposite direction* · accepted values *1.6 m s⁻² Or see (−)4.9 to (−)5.2 m s⁻²*.",
        },
      },
      {
        k: "worked",
        title: "A train journey in letters",
        question:
          "The velocity-time graph for a train journey is shown: it starts at $2v$, decelerates steadily to $v$ at time $t$, then stays at $v$ until time $2t$. Which of the following expressions gives the distance travelled by the train in time 2t?  A $4vt$ · B $5vt$ · C $\\frac{3vt}{2}$ · D $\\frac{5vt}{2}$ — *WPH11 January 2025, Q8*",
        steps: [
          "Distance is the area under a velocity-time graph. Split the journey where the shape changes.",
          "First trapezium, 0 to $t$: the parallel sides are $2v$ and $v$, the width is $t$:\n$\\text{area} = \\tfrac{1}{2}(2v + v)t = \\tfrac{3vt}{2}$",
          "Second rectangle, $t$ to $2t$: height $v$, width $t$:\n$\\text{area} = vt$",
          "Add them:\n$\\tfrac{3vt}{2} + \\tfrac{2vt}{2} = \\tfrac{5vt}{2}$\nOption D.",
        ],
        answer: "D — $\\frac{5vt}{2}$",
      },
      {
        k: "worked",
        title: "Velocity from an acceleration-time graph",
        question:
          "A rocket accelerates from rest. The acceleration-time graph is flat at $a_{\\text{max}}$ from $t = 0$ to $t_1$, then flat at a lower value — zero — from $t_1$ to $t_2$. Which expression gives the velocity of the rocket at time $t_2$? — *WPH11 June 2026, Q6*",
        steps: [
          "The rocket starts from rest, so the velocity at $t_2$ is the change in velocity. That change is the whole area under the acceleration-time line up to $t_2$.",
          "Split the area into two shapes: a triangle from 0 to $t_1$, and a rectangle from $t_1$ to $t_2$.",
          "Add them:\n$v(t_2) = \\tfrac{1}{2}t_1 a_{\\text{max}} + (t_2 - t_1) a_{\\text{max}}$",
          "The wrong options come from doubling the triangle or swapping the rectangle, so take the two shapes one at a time.",
        ],
        answer: "$v(t_2) = \\tfrac{1}{2}t_1 a_{\\text{max}} + (t_2 - t_1) a_{\\text{max}}$",
        ms: {
          label: "Mark scheme",
          text: "*the area of the triangle should be (½(t₁ × a_max)) and the area of the rectangle should be (t₂ − t₁) × a_max*.",
        },
      },
      {
        k: "worked",
        title: "The platform diver",
        question:
          "A man dives from a platform into a swimming pool. The platform is 12 m above the water surface. The graph shows the vertical displacement of the man from the water surface, after leaving the platform. **(a)(i)** State how the graph shows that the man's initial vertical velocity is zero. (1) **(a)(ii)** Determine the vertical velocity of the man as he enters the water. (2) **(b)** Before entering the water, the man has a constant vertical acceleration. After entering the water, the man has a constant vertical deceleration. Draw the velocity-time graph for the man on the axes below. (2) — *WPH11 June 2023, Q12*",
        steps: [
          "(a)(i) The gradient at $t = 0$ is zero, so the tangent is horizontal at the start.\nThe gradient of a displacement-time graph is the velocity.",
          "(a)(ii) Draw the tangent where the displacement crosses zero, at the water surface, and read its gradient:\n$v = \\frac{\\Delta s}{\\Delta t} = 14\\ \\text{m s}^{-1}$ downwards\nA suvat calculation with the height read from the graph and $a = \\pm g$ gains the same two marks.",
          "(b) Before the water the acceleration is constant (free fall), so the velocity-time graph is a straight line:\nfrom $0$ at $t = 0$ to $-14\\ \\text{m s}^{-1}$ at $t = 1.5\\ \\text{s}$\nIts gradient is $g$, downwards.",
          "In the water the deceleration is constant, so a second straight line carries the velocity back to zero at $t = 2.1\\ \\text{s}$.\nLines drawn beyond 2.1 s are ignored.",
        ],
        answer: "(a)(ii) 14 m s⁻¹ downwards · (b) straight from 0 to −14 m s⁻¹ at 1.5 s, then straight back to 0 at 2.1 s",
        ms: {
          label: "Mark scheme",
          text: "*straight line from 0 to (1.5, − magnitude from (a)(ii)); second straight line from end of first line to (2.1, 0.0)*",
        },
      },
      {
        k: "worked",
        title: "The 6-mark levels question",
        question:
          "The box is placed on a different track in the factory. The sketch graph shows how the displacement of the box varies with time: a straight line from the origin to 10 s, then a curve that flattens and peaks just after 20 s, then turns slightly downwards towards 30 s. Explain what the graph shows about the velocity and acceleration of the box. (6) — *WPH11 January 2026, Q17(b)* (starred)",
        steps: [
          "Take the points in the order the mark scheme lists them.\nPoint 1: *Gradient of the graph represents velocity* — with the straight first section, *initial velocity (up to 10 s) is constant* and *initial acceleration is zero*.",
          "Point 2: *From 10 s to 20 s the gradient decreases so velocity decreases* — the curve flattening is a shrinking gradient.",
          "Point 3: velocity decreasing means the box decelerates, and the acceleration is negative.",
          "Point 4: *At 20 s velocity = 0* — the peak of a displacement-time graph is a stationary instant.",
          "Point 5: *After 20 s the velocity / motion of the box is in the opposite / backwards direction because gradient is negative*.",
          "The last two marks are for structure. *Coherent and logical structure with linkages and fully sustained lines of reasoning demonstrated throughout* is the wording for the top band, so link each sentence to the one before it and keep coming back to the gradient.",
        ],
        answer: "constant v to 10 s → gradient falls, v decreases → v = 0 at the 20 s peak → negative gradient after 20 s, motion backwards",
        ms: {
          label: "Mark scheme",
          text: "6 indicative content points carry 4 marks, and the last 2 marks are the structure band.",
        },
      },
    ],
  },
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
          "The area under the curve still gives the accumulated quantity.",
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
          "Average velocity = displacement ÷ time taken (WPH11 October 2024, Q3).",
          "Average acceleration = change in velocity ÷ time taken (WPH11 January 2024, Q16).",
          "The October 2024 question rejects the claim that joining two points on a curve gives the instantaneous speed. A chord gives the average over the interval.",
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
          "Split the area into strips between whole squares. Four to six strips is plenty.",
          "Each strip is a trapezium: $\\text{area} = \\tfrac{1}{2}(\\text{left height} + \\text{right height}) \\times \\text{width}$.",
          "Add the strips, count the leftover half-squares, and carry the unit through the sum.",
          "The answer is a displacement, in metres.",
        ],
      },
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
];

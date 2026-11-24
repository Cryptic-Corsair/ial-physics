import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 revised · Part A (statements 1–2)
   The SUVAT equations and the three motion graphs, written in the
   owner's dictated register.

   THE SCENARIO GUARDRAILS (owner-dictated 2026-11-25 — do not drift):
   1. A scenario section is named after the physical situation
      ("A ball falling through the air"), never after the exam
      topic or with meta words ("When air resistance matters" is
      banned).
   2. Build every scenario on the owner's template spine: the
      situation → the force or law that runs it → one consequence
      per line, each following from the previous line → the
      contrast → the keyword reason → "Therefore," + the full
      conclusion in one sentence.
   3. One line = one spoken sentence, 8–16 words, the way you
      would say it to a student across a table. No fragments
      ("The curve flattens."), no double-barrelled lines.
   4. Plain words and plain verbs: gives, makes, means, increases,
      decreases, reduces, same, different, obviously. Banned:
      grows, shrinks (owner ruling 2026-11-25 — always say
      increases, decreases or reduces), consequently,
      furthermore, thus, "is determined by", "represents",
      "corresponds to", "fixes", "utilize", "possess", "note that",
      "the exam's version of this".
   5. Connectives only from the owner's set: So, Since, As, But,
      Then, That's why, The only difference is that, Therefore.
   6. Keep the physics keywords exact (weight, resultant force,
      acceleration, g, kinetic energy, velocity, vector, scalar,
      magnitude, direction, terminal velocity, component).
   7. No talk about marks or mark schemes inside the teaching
      lines; mark-scheme wording lives only in the note blocks.
   8. One sentence per bullet; a bullet may carry one "\n" (two
      linked lines), never more.

   The mark schemes' wordings are quoted verbatim in Mark scheme
   wording / Examiner's report / Not accepted notes beside the
   teaching, and the teaching body carries no session tags — the
   worked cards keep their citations and sit together at the end
   of each section. The user-dictated SUVAT condition bullets are
   carried verbatim; the reading time is checked by
   scripts/minutes-check.ts.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01R_A: SpecSection[] = [
  {
    spec: "1",
    statement:
      "be able to use the equations for uniformly accelerated motion in one dimension: s = (u + v)t/2, v = u + at, s = ut + ½at², v² = u² + 2as",
    title: "The SUVAT equations",
    blocks: [
      {
        k: "bullets",
        items: [
          "The equations of motion are four equations for an object moving with constant acceleration.",
          "They are called the SUVAT equations because of the variables they contain.",
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
        ],
      },
      { k: "h", text: "A student slides down a curved slide" },
      {
        k: "bullets",
        items: [
          "A student slides down a curved slide from rest.",
          "The gradient of the slide changes from point to point.",
          "So the acceleration changes as the student moves along.",
          "The SUVAT equations need one constant acceleration.",
          "So they cannot be used here.",
          "The energy equation steps in instead.",
          "Gravitational potential energy at the top becomes kinetic energy at the bottom: $mg\\Delta h = \\tfrac{1}{2}mv^2$.",
          "Therefore, on a curved slide the speed at the bottom comes from energy, not from the equations of motion.",
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
      { k: "h", text: "Free fall near the Earth's surface" },
      {
        k: "bullets",
        items: [
          "Free fall is motion under gravity alone.",
          "The acceleration is then $g$, directed downwards.",
          "Near the Earth's surface, $g = 9.81\\ \\text{m s}^{-2}$.",
          "In free fall, the SUVAT equations work with $a$ replaced by $g$.",
          "When up is the positive direction, the acceleration is $-g$.",
          "An object dropped from rest has $u = 0$, so $v = gt$ and $s = \\tfrac{1}{2}gt^2$.",
          "An object thrown upwards slows at $g$ on the way up.",
          "It is instantaneously at rest at the top.",
          "It speeds up at $g$ on the way down.",
          "At the top of the flight, the velocity is zero.",
          "The acceleration is still $g$ downwards.",
          "Zero velocity does not mean zero acceleration.",
        ],
      },
      { k: "h", text: "Two objects thrown in a vacuum in different directions" },
      {
        k: "bullets",
        items: [
          "In a vacuum, two objects are thrown in different directions with the same initial speed from the same height.",
          "Weight is the only force that acts on an object in a vacuum.",
          "So both objects have the same acceleration, $g$ downwards, for the whole fall.",
          "There are no other forces acting on either object.",
          "Both objects start with the same speed, so they start with the same kinetic energy.",
          "They fall from the same height, so gravity adds the same kinetic energy to each.",
          "Both objects reach the floor with the same kinetic energy.",
          "The only difference is that the two objects have different velocities.",
          "Velocity is a vector quantity, so it has magnitude ==and direction==.",
          "Speed and kinetic energy are scalar quantities, so they have no direction.",
          "So two objects thrown in different ==directions== will obviously have different ==velocities==.",
          "Acceleration is a vector too, but both accelerations have the same magnitude and the same downward direction.",
          "Therefore, two objects thrown from the same height with the same initial speed in a vacuum have the same acceleration and the same kinetic energy, but different velocities.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*B is the correct answer* · *A is incorrect because the acceleration is g which has constant magnitude and direction*.",
      },
      { k: "h", text: "A ball falling through the air" },
      {
        k: "bullets",
        items: [
          "The equations of motion apply only when air resistance is negligible or ignored.",
          "The question tells you this with ==in a vacuum== or ==ignoring air resistance==.",
          "A student drops a table tennis ball and calculates the fall with the equations of motion.",
          "The calculation treats the weight as the only force.",
          "In reality, the ball drags the air with it as it falls.",
          "Air resistance always pushes opposite to the motion.",
          "So the resultant force is less than the weight.",
          "So the acceleration stays below $g$.",
          "A smaller acceleration means the ball takes ==longer== to fall.",
          "It also reaches the ground with a ==smaller== speed than the calculation predicts.",
          "Therefore, the actual time is greater than calculated, and the actual velocity is less than calculated.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*C is the correct answer* · *A is not correct because air resistance would increase the time taken to fall* · *B is not correct because air resistance would increase the time taken to fall and cause the final velocity to be less than calculated* · *D is not correct because air resistance would cause the final velocity to be less than calculated*.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Air resistance causes the time taken to fall to increase, so the velocity just before hitting the ground is less than that calculated*.",
      },
      { k: "h", text: "A car braking to a stop" },
      {
        k: "bullets",
        items: [
          "A car is travelling at speed $u$ and brakes hard to a stop.",
          "The brakes apply a constant braking force.",
          "A constant force gives a constant deceleration.",
          "So the equations of motion can describe the stop.",
          "The car ends at rest, so $v = 0$.",
          "Then $v^2 = u^2 + 2as$ becomes $s = \\frac{u^2}{2a}$.",
          "The deceleration comes from the braking force and the mass of the car.",
          "Neither of them changes from one speed to another.",
          "So $a$ is fixed, and $s$ depends only on $u^2$.",
          "So the braking distance is proportional to the square of the speed.",
          "Doubling the speed multiplies the braking distance by four.",
          "Therefore, the car at double the speed needs four times the distance to stop.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The only correct answer is C (4x)* · *A is not correct because x ∝ v2*.",
      },
      { k: "h", text: "A ball that rebounds" },
      {
        k: "bullets",
        items: [
          "A ball hits the floor and rebounds upwards.",
          "The direction of the velocity reverses at the bounce.",
          "So the sign of the velocity changes too.",
          "But the acceleration is $g$ downwards before, during and after the bounce.",
          "So a rebound does not change the sign of the acceleration.",
          "Therefore, only the velocity flips sign at a rebound, and the acceleration keeps pointing down.",
        ],
      },
      { k: "h", text: "Show that answers" },
      {
        k: "bullets",
        items: [
          "For a show that question, your answer should be one more significant figure than the value in the question.",
          "Reverse working scores both marks on a two-mark show that.",
          "On a three-mark show that, it scores two of the three.",
        ],
      },
      { k: "h", text: "Worked examples" },
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
      {
        k: "worked",
        title: "The table tennis ball",
        question:
          "A student dropped a table tennis ball. The ball fell for time t and had velocity v just before it hit the ground. The student used the equations of motion to calculate t and v. These equations ignore air resistance. Which row of the table shows how the actual values compared with the student's calculated values for t and v? — *WPH11 January 2024, Q5*",
        steps: [
          "The equations of motion treat the weight as the only force, so the calculation follows a fall at a full $g$ for the whole distance.",
          "In reality the drag on a light ball increases as it speeds up, so the resultant force falls below the weight and the acceleration stays below $g$.",
          "A smaller acceleration means the ball takes ==longer== to fall than calculated and arrives with ==less== speed than calculated.",
        ],
        answer: "C — the actual t is greater than calculated, the actual v is less than calculated",
        ms: {
          label: "Mark scheme",
          text: "*C is the correct answer* · *A is not correct because air resistance would increase the time taken to fall* · *B is not correct because air resistance would increase the time taken to fall and cause the final velocity to be less than calculated* · *D is not correct because air resistance would cause the final velocity to be less than calculated*.",
        },
      },
      {
        k: "worked",
        title: "Two objects in a vacuum chamber",
        question:
          "Two objects with the same initial speed fall from the same height in a vacuum chamber, as shown. The arrows in the diagram show initial directions of travel of the objects. Which of the following quantities are not the same for both objects?  A The accelerations of the objects during the fall. · B The velocities of the objects as they reach the floor. · C The increase in the speeds of the objects during the fall. · D The kinetic energies of the objects as they reach the floor. — *WPH11 June 2021, Q7*",
        steps: [
          "In a vacuum the only force on either object is its weight, so both accelerate at $g$ for the whole fall. The accelerations are the same.",
          "Both start with the same speed and both gain the same speed $gt$, so the increases in speed are the same, and the same drop height gives the same kinetic energy gain.",
          "Velocity is a vector. The two objects travel in different directions, so their velocities as they reach the floor point different ways even though their speeds match.",
        ],
        answer: "B — the velocities differ, because velocity carries direction",
        ms: {
          label: "Mark scheme",
          text: "*B is the correct answer* · *A is incorrect because the acceleration is g which has constant magnitude and direction* · *C is incorrect because the objects gain the same k.e. for the same drop height* · *D is incorrect because both objects start with the same k.e. and gain the same k.e.*.",
        },
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
          "A straight line means constant velocity.",
          "A steeper line means a faster object.",
          "A curve that steepens means the object is speeding up.",
          "A curve that flattens means it is slowing down.",
          "A horizontal line means the object is stationary.",
          "A negative gradient means the object is moving the other way.",
          "Displacement is measured from the zero line.",
          "It is not measured from the furthest point, or from where the object started.",
          "When the line curves, the gradient of the tangent at a point gives the velocity at that instant.",
          "The area under a displacement-time graph is not a physics quantity.",
          "So no question ever asks for it.",
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
          "Area below the time axis counts as negative, because the object is moving the other way.",
          "The two areas then cancel.",
          "The intercept on the velocity axis is the initial velocity.",
          "A line that starts above zero did not start from rest.",
          "A horizontal line means constant velocity.",
          "The resultant force is zero.",
          "The acceleration is zero too.",
          "When the line curves, the gradient of the tangent gives the acceleration at that instant.",
        ],
      },
      {
        k: "figure",
        kind: "ph-vt-graph",
        caption:
          "One object with positive velocity and then negative. The gradient changes once; the areas on the two sides of the axis point in opposite directions.",
      },
      { k: "h", text: "Constant deceleration on a velocity-time graph" },
      {
        k: "bullets",
        items: [
          "Braking at a steady rate is constant deceleration.",
          "On the graph it is one straight line with a negative gradient.",
          "The line runs down to the time axis.",
          "The line meets the time axis when the car stops.",
          "The velocity is zero there, not the displacement.",
          "A straight line falling to zero is the only shape that shows constant deceleration.",
          "A horizontal line shows constant velocity.",
          "A curve shows varying deceleration.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The only correct answer is B* · *A is not correct because this shows constant velocity not constant deceleration* · *C is not correct because this shows varying deceleration* · *D is not correct because this shows varying deceleration*.",
      },
      { k: "h", text: "Acceleration-time graphs" },
      {
        k: "bullets",
        items: [
          "A flat line means constant acceleration.",
          "Constant acceleration is the condition the SUVAT equations need.",
          "The area under an acceleration-time graph is the change in velocity, not the velocity itself.",
          "Add it to the starting velocity.",
          "A ball thrown upwards and caught has $a = -g$ for the whole flight.",
          "Its graph is one flat line below the axis.",
          "Even at the top, where $v = 0$, the acceleration is still $g$ downwards.",
          "A rocket accelerates while its engines burn.",
          "When the fuel runs out, the acceleration drops to $-g$.",
          "The step comes exactly where the forces change.",
          "The gradient of an acceleration-time graph is the rate of change of acceleration.",
          "It is not examined, but it appears as a wrong option.",
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
            title: "Read gradients",
            text: "s–t to v–t, and v–t to a–t, read ==gradients==.",
          },
          {
            title: "Read areas",
            text: "v–t to s–t, and a–t to v–t, read ==areas==.",
          },
          {
            title: "Chain when needed",
            text: "Going s–t to a–t needs both steps, through the v–t graph.",
          },
          {
            title: "Split the journey into phases",
            text: "Cut the source graph where its shape changes.",
          },
          {
            title: "Give each phase its segment",
            text: "Each phase gives one segment of the target graph, and the phase boundaries must agree on both.",
          },
          {
            title: "Read each phase",
            text: "Find the gradient (or the area) of each phase ==with its sign==.",
          },
          {
            title: "Expect the straight segments",
            text: "Constant acceleration on the source graph gives a straight segment on the target.",
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
          "Work the figure through phase by phase.",
          "0 to 2 s covers 6 m, so the velocity is $6 \\div 2 = 3\\ \\text{m s}^{-1}$.",
          "2 to 4 s covers 12 m, so the velocity is $6\\ \\text{m s}^{-1}$.",
          "The next 2 s are flat, so the velocity is zero.",
          "The last 2 s cover $-8$ m, so the velocity is $-4\\ \\text{m s}^{-1}$.",
          "Each gradient is one horizontal step on the velocity-time graph, drawn at the time where that phase ends.",
          "The velocity-time graph's own gradient is zero almost everywhere.",
          "So it tells you nothing about acceleration.",
          "This is why s–t to a–t goes through the v–t graph in two steps.",
        ],
      },
      {
        k: "figure",
        kind: "ph-motion-graphs",
        caption:
          "One continuous acceleration from rest, read across all three graphs at once. The dotted time lines carry each event from graph to graph.",
      },
      { k: "h", text: "A ball falling through a liquid" },
      {
        k: "bullets",
        items: [
          "A ball is released from rest in a liquid.",
          "Three forces act on it: the weight downwards, the drag upwards, and the upthrust upwards.",
          "At the start the ball is not moving, so the drag is zero.",
          "The weight is bigger than the upthrust, so there is a resultant force downwards.",
          "So the ball accelerates downwards, and the line starts at its steepest.",
          "As the velocity increases, the drag increases.",
          "The resultant force is the weight minus the upthrust minus the drag: $RF = W - U - D$.",
          "So as the drag increases, the resultant force decreases.",
          "Since $F = ma$, as the resultant force decreases, the acceleration decreases.",
          "So the line gets less and less steep.",
          "When drag + upthrust = weight, the resultant force is zero.",
          "So the acceleration is zero.",
          "The object reaches its ==terminal velocity==.",
          "The graph becomes a horizontal line.",
          "The line sits above the time axis, because the terminal velocity is not zero.",
          "Therefore, the sketch from rest is a curve through the origin that flattens into a horizontal line.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "A sketch drawn with down as negative: *Curved line starting at zero with negative gradient decreasing in magnitude* · *Horizontal line after 12 seconds* · *Line should not be along the x-axis*.",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "On a terminal-velocity sketch, the final horizontal line sits ==above== the time axis. The velocity there is not zero. The join must be ==continuous== where the acceleration changes.",
      },
      { k: "h", text: "A ball that bounces" },
      {
        k: "bullets",
        items: [
          "A ball is dropped, hits the floor, and bounces back up.",
          "At a bounce the velocity reverses in a very short time.",
          "So the velocity-time line jumps between the two sides of the time axis, almost vertically.",
          "The area on each side is the displacement of that phase.",
          "Displacement is the straight line from start to end.",
          "We could say that displacement is the difference between the starting position and the final position.",
          "If the areas are equal, the displacement is 0.",
          "That is, the object has returned to its starting height.",
          "If the areas are unequal, the ball has bounced higher or lower than its starting height.",
          "In free flight the acceleration is $g$ downwards the whole time.",
          "So the velocity-time segments are straight, and the displacement-time graph is curved.",
          "Therefore, straight segments never appear on the displacement-time graph of a bouncing ball.",
        ],
      },
      { k: "h", text: "Describing motion from a graph" },
      {
        k: "bullets",
        items: [
          "The 6-mark describe questions give 4 marks for the physics points and 2 marks for the structure of the answer.",
          "Build each sentence on the one before it.",
          "State a feature of the graph first.",
          "Then say what it means for the motion.",
          "Name the gradient and say what it gives.",
          "Do the same for each intercept and each change of shape.",
          "Cover the whole time axis.",
          "The later parts of the graph carry marking points too.",
          "Keep the answer about the graph itself.",
          "An answer that never mentions a gradient, an area, an intercept or a shape is not an answer about the graph.",
        ],
      },
      { k: "h", text: "Drawing graphs" },
      {
        k: "bullets",
        items: [
          "Axes labelled with the quantity and the unit.",
          "A scale that spreads the points over more than half of each axis.",
          "Points plotted to within 1 mm.",
          "A thin continuous best-fit line.",
          "On a sketch graph it is the shape that is marked, not point-by-point accuracy.",
          "Read graph values precisely, and say which two points you used for a gradient.",
        ],
      },
      { k: "h", text: "Worked examples" },
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
        title: "Braking to a stop",
        question:
          "A driver applies the brakes to stop a car. The car has a constant deceleration. Which of the following shows the velocity-time graph for the car as the brakes are applied? — *WPH11 January 2026, Q6*",
        steps: [
          "Constant deceleration is a constant negative gradient, so the velocity-time graph is one straight line falling to the time axis.",
          "A horizontal line would be constant velocity, and a curved line would be varying deceleration, so the other three graphs fail.",
        ],
        answer: "B — one straight line with a negative gradient, reaching zero velocity",
        ms: {
          label: "Mark scheme",
          text: "*The only correct answer is B* · *A is not correct because this shows constant velocity not constant deceleration* · *C is not correct because this shows varying deceleration* · *D is not correct because this shows varying deceleration*.",
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
];

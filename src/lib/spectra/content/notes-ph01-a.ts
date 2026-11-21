import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces, motion and energy · Part A
   Spec statements 1–7: the equations of motion, motion graphs,
   scalars and vectors, components, resultants, projectiles.

   The approved physics register (the t02 specimen): the named
   equation is stated first in an equation band, then unpacked in a
   sentence; the working symbols (=, ×, >, <) sit inside the
   sentences; one bullet = one mark-earning sentence; scenarios are
   built up as their own headed groups, one logical step per bullet;
   rejected wordings live in "Not accepted" notes; no arrows, no
   session citations — the evidence trail lives in research/wph11/.
   This supersedes the earlier worked-example register at the
   owner's direction (handover Phase E).
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01_A: SpecSection[] = [
  {
    spec: "1",
    statement:
      "be able to use the equations for uniformly accelerated motion in one dimension: s = (u + v)t/2, v = u + at, s = ut + ½at², v² = u² + 2as",
    title: "The equations of uniformly accelerated motion",
    blocks: [
      {
        k: "eq",
        eq: "v = u + at        s = ut + ½at²        v² = u² + 2as        s = ½(u + v)t",
        note: "All four are printed on the WPH11 data sheet, so no mark is ever awarded for recalling them. Each equation links four of the five quantities s, u, v, a, t: v = u + at has no s · s = ut + ½at² has no v · v² = u² + 2as has no t · s = ½(u + v)t has no a. ==The equation to use is the one that does not contain the missing quantity==.",
      },
      {
        k: "bullets",
        items: [
          "List what the question gives you, note which of s, u, v, a, t is missing, and pick the equation that does not contain it.",
          "Convert every unit before substituting — mm to m by dividing by 1 000, km h⁻¹ to m s⁻¹ by dividing by 3.6.",
          "Substitute first, calculate once, round at the end — keep all the digits in the calculator and write the rounded value only on the final line.",
          "The standing instruction printed in every examiner report: final answers must be correctly ==rounded, not truncated==, and ==truncated values in multi-stage calculations will not generally yield the required value for the final mark==.",
          "Finish every calculation with the ==unit== and a sensible number of significant figures — normally the same count as the data in the question.",
        ],
      },
      {
        k: "table",
        caption: "Choosing the equation — what the question gives you",
        head: ["You know", "You want", "Use"],
        rows: [
          ["u, a, t", "v", "v = u + at"],
          ["u, a, t", "s", "s = ut + ½at²"],
          ["u, v, s (no time)", "a or v²", "v² = u² + 2as"],
          ["u, v, t (no acceleration)", "s", "s = ½(u + v)t"],
          ["starts from rest", "—", "set u = 0 and the equations simplify"],
        ],
      },
      { k: "h", text: "Show-that questions" },
      {
        k: "bullets",
        items: [
          "The mark schemes print the same three rules in every series. **One:** quote a show-that answer to ==at least one more significant figure== than the given value — for *show that t ≈ 0.14 s* you write 0.139 s; writing 0.14 s exactly scores nothing for that marking point.",
          "**Two:** reverse working — starting from the given answer and going backwards — earns both marks on a 2-mark show-that, but only 2 of the 3 marks on a 3-mark one.",
          "**Three:** once shown, use the rounded given value in the later parts. The examiner reports penalise candidates who persist in using their own unrounded value when the question handed them one to use.",
        ],
      },
      { k: "h", text: "When the equations do not apply" },
      {
        k: "bullets",
        items: [
          "The equations require ==constant acceleration==. On a curved slide the gradient varies from point to point, so the acceleration is not constant — the route is energy conservation instead, and the mark scheme prints *Do not accept use of equations of motion*.",
          "A dropped ball with air resistance still falls with roughly constant g at low speed, but the real time is *greater* and the real landing speed *less* than the SUVAT prediction, because drag opposes the motion.",
          "On another planet, substitute the local acceleration into the equations — for Mars, a = 0.38g — and take a ==ratio== of two equations when two situations share the same variables: the unknown g cancels.",
          "Questions with ==two objects== are solved by the shared quantity: write one equation per object and set the times equal, or set the distances equal at the passing moment.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "SUVAT on a curved slide — the acceleration is not constant, and the mark scheme rejects the equations outright. And *truncated* values (0.139 written as 0.1, 417 × 10⁶ written as 410 × 10⁶) — round, never truncate.",
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
          "Three graphs describe the same journey: the ==gradient== of a displacement–time graph is velocity, the gradient of a velocity–time graph is acceleration, and the ==area== under a velocity–time graph is displacement.",
          "Graph explanations are marked against what the *graph* shows. The examiner report on the worst-answered graph question records that the answers ==did not often refer to the graph==, and most candidates ==scored no marks==.",
        ],
      },
      {
        k: "figure",
        kind: "ph-motion-graphs",
        caption:
          "One journey, three graphs: uniform acceleration from rest. The s–t curve steepens, the v–t line climbs at a constant gradient, the a–t graph sits still. Read across the dotted time lines to move between them.",
      },
      {
        k: "table",
        caption: "What each graph feature means",
        head: ["Graph feature", "Means"],
        rows: [
          ["s–t: straight line", "constant velocity (gradient = v)"],
          ["s–t: curve steepening", "velocity increasing (accelerating) — a falling ball"],
          ["s–t: curve flattening", "velocity decreasing towards zero"],
          ["v–t: straight line", "constant acceleration (gradient = a)"],
          ["v–t: horizontal line", "constant velocity, a = 0 — terminal velocity"],
          ["v–t: curve levelling to horizontal", "acceleration falling to zero — approaching terminal velocity"],
          ["a–t: any value above zero", "velocity still increasing — even while acceleration itself falls"],
        ],
      },
      { k: "h", text: "Explaining a graph's shape" },
      {
        k: "bullets",
        items: [
          "Name the feature first, then explain the physics behind it: *the gradient starts at zero because the ball starts from rest*, then the forces that make the gradient change.",
          "The fall through a liquid, step by step: the gradient of the v–t graph = the acceleration; at the start the only force is the weight, so the gradient is steep, close to g; as the velocity grows the drag on the ball grows, the resultant force falls, so the curve flattens — and when the drag + upthrust = the weight, the acceleration is zero and the graph becomes a horizontal line: ==terminal velocity==.",
          "The mark schemes allow the points in any order, but every sentence must ==refer to the graph== — a gradient, an area, an intercept or a shape.",
        ],
      },
      { k: "h", text: "Drawing a graph" },
      {
        k: "bullets",
        items: [
          "The mark schemes carry the same drawing rules in every series: axes ==labelled with the quantity and the unit==.",
          "A scale that spreads the plotted points ==over more than half of each axis==, and is not awkward — never multiples of 3 or 7.",
          "Points plotted ==to within 1 mm== of the true values.",
          "The best-fit line is *a thin continuous line* — a sketch graph earns shape marks: a curve through the origin with increasing gradient for constant acceleration from rest, joining a straight line smoothly once the acceleration reaches zero.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "An answer that never mentions a gradient, an area, an intercept or a shape is not an answer about the graph — the examiner report records such answers as scoring ==no marks==. On a terminal-velocity sketch: the final horizontal line floats ==above the time axis== (the velocity is not zero), and the gradient must be ==continuous== where the acceleration changes.",
      },
    ],
  },
  {
    spec: "3",
    statement:
      "know the physical quantities derived from the slopes and areas of displacement-time, velocity-time and acceleration-time graphs, including cases of non-uniform acceleration and understand how to use the quantities",
    title: "Slopes and areas — including when the acceleration is not uniform",
    blocks: [
      {
        k: "p",
        text: "The motion-graph rules still work when the acceleration is not uniform. When the graph is a curve, the gradient of a ==tangent== gives the instantaneous quantity, and the area under the curve — counted square by square or by trapezium strips — still gives the accumulated one. The specification names the two skills: ==using the slope of a tangent to a curve as a measure of rate of change==, and ==realising the physical significance of the area that has been determined==.",
      },
      {
        k: "table",
        caption: "Slopes and areas",
        head: ["Graph", "Slope gives", "Area gives"],
        rows: [
          ["displacement–time", "velocity (tangent = instantaneous velocity)", "no physical quantity"],
          ["velocity–time", "acceleration (tangent = instantaneous acceleration)", "displacement (areas below the axis count negative)"],
          ["acceleration–time", "rate of change of acceleration (not examined)", "change in velocity — not the final velocity unless u = 0"],
        ],
      },
      { k: "h", text: "The tangent method" },
      {
        k: "bullets",
        items: [
          "Draw the tangent ==at the exact time== asked — the first marking point of the printed scheme is the tangent itself, ==drawn at the stated time==.",
          "Read two ==well-separated== points on your own tangent and find the gradient: Δv ÷ Δt. Close points amplify your drawing error.",
          "The answer carries the sign: a diver rising through water has velocity upwards and acceleration downwards, so the gradient is negative.",
        ],
      },
      { k: "h", text: "Areas under a curve" },
      {
        k: "bullets",
        items: [
          "**Counting squares** on a printed grid — each square is worth its width × height in unit quantities.",
          "**Trapezium strips** when the velocity changes in straight segments: a fall from 2v to v over time t gives ½(2v + v)t, then a rectangle vt underneath.",
          "**Equality of areas** as a physics statement: a diver returns to the surface because the area below the time axis ==equals== the area above it — the total displacement is zero.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Reading the velocity at the point and dividing it by the time — the examiner report records that this approach scored no marks: v ÷ t at a point is not a gradient, a ==tangent== is. And *the final velocity is zero* or *the gradient is zero* as an explanation of returning to the start — zero displacement means the ==areas== cancel.",
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
        text: "A quantity with ==magnitude only==: distance, speed, mass, energy, work done, power, density, time, temperature.",
      },
      {
        k: "def",
        term: "Vector",
        text: "A quantity with magnitude ==and direction==: displacement, velocity, acceleration, force, weight, tension, thrust, momentum, moment of a force, gravitational field strength.",
      },
      {
        k: "table",
        caption: "The scalar and vector pairs",
        head: ["Vector (magnitude *and* direction)", "Scalar partner (magnitude only)"],
        rows: [
          ["displacement", "distance"],
          ["velocity, acceleration", "speed"],
          ["force, weight, tension, thrust", "mass"],
          ["momentum", "kinetic energy"],
          ["moment of a force (it has a direction of turning)", "work done"],
          ["gravitational field strength", "density, time, temperature"],
          ["—", "strain, stress, Young modulus"],
        ],
      },
      {
        k: "p",
        text: "==Vector notation==: in print a vector is written in bold (**F**) or with a small arrow above the letter, while its magnitude is plain italic (F). An equilibrium condition written as one vector sentence — **W** + **T**₁ + **T**₂ = **0** — is a statement about arrows: three vectors of different lengths, added nose-to-tail, closing back on themselves. Written as bare numbers it is false, because W, T₁ and T₂ point in different directions; the vector-equation multiple-choice item is exactly this test, and only the form that sums to **0** is the credited answer.",
      },
      {
        k: "bullets",
        items: [
          "The unit is a quick test: N, N s and N m all belong to direction-bearing quantities. The hard version offers J, kg, N and W and wants the ==newton==, the unit of a vector.",
          "The pairs most often confused: the **moment of a force** is a vector (it has a turning direction — clockwise or anticlockwise), **work done** is not; **momentum** is a vector, **kinetic energy** is not; **weight** is a vector, **mass** is not.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Speed* written for *velocity*, or *distance* for *displacement* — the direction is the whole distinction, and the multiple-choice options rely on it.",
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
        eq: "F~parallel~ = F cos θ        F~perpendicular~ = F sin θ",
        note: "The component ==along== a reference direction and the component ==at right angles== to it. Which function is which depends entirely on where θ is measured from — and one sanity check settles it every time: at θ = 0° the vector lies entirely along the reference direction, so the parallel component must be the full F, and cos 0° = 1.",
      },
      {
        k: "figure",
        kind: "ph-vectors",
        caption:
          "Left: resolving a force at 35° into horizontal and vertical components. Right: the same forces added nose-to-tail to find a resultant — the two skills are inverses of each other.",
      },
      { k: "h", text: "Which function applies" },
      {
        k: "bullets",
        items: [
          "θ measured ==from the horizontal==: the horizontal component is F cos θ and the vertical component is F sin θ.",
          "θ measured ==from the vertical==: the roles swap — the vertical component is F cos θ and the horizontal component is F sin θ.",
          "A weight hanging from a wire passing over two supports, each side at θ to the horizontal: each tension pulls up with T sin θ, and two sides share the weight (**2T sin θ = W**), so **T = W ÷ (2 sin θ)**.",
          "The identical physics with the angle measured from the vertical instead: the vertical component of each tension is T cos θ, so **2T cos θ = W** and **T = W ÷ (2 cos θ)** — same equilibrium, one different measured angle.",
        ],
      },
      { k: "h", text: "Where components are used again" },
      {
        k: "bullets",
        items: [
          "**On a slope**: the component of g along a 14° incline is g sin 14° = 2.4 m s⁻², fed straight into v² = u² + 2as; with friction absent the acceleration along any slope is ==a = g sin θ==.",
          "**At an angle to the motion**: work done = F cos θ × d — only the component along the displacement does work (statement 17).",
          "**In a projectile** the launch velocity splits into v cos θ horizontally and v sin θ vertically (statement 7).",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "sin used where the angle is measured from the vertical — the printed rejected option explains that the vertical components ==should be cos and should form the denominator==. Ask which reference line θ is measured from before choosing the function.",
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
        k: "p",
        text: "Two skills, and the wording tells you which one is wanted: *at any angle* means a ==scaled vector drawing==; *at right angles* means ==calculation== with Pythagoras. On the scale-diagram question the examiner report records that many candidates ==drew a free-body force diagram rather than a scaled vector diagram==.",
      },
      {
        k: "steps",
        caption: "The scaled vector diagram",
        items: [
          {
            title: "Choose a scale",
            text: "Big enough that the smallest force is still a long line — the mark schemes demand arrows *at least 6 cm* (sometimes 8 cm) representing the longest force, so a scale like 1 cm : 100 N. State the scale.",
          },
          {
            title: "Draw tip-to-tail",
            text: "First vector as an arrow; second vector starting from the *tip* of the first, at the true angle between them. Label each arrow with the force it represents (F, or 70 N, or *wind 350 N*) — never with its drawn length in cm.",
          },
          {
            title: "Close the triangle",
            text: "The resultant runs from the *tail of the first* vector to the *tip of the last*, and its arrow points that way round. Measure its length and convert back through the scale; measure the angle with a protractor and state the direction (*30° above the horizontal*).",
          },
        ],
      },
      { k: "h", text: "Perpendicular vectors — by calculation" },
      {
        k: "bullets",
        items: [
          "Horizontal and vertical components combine by Pythagoras: **R = √(F~x~² + F~y~²)**, with the direction from **tan θ = F~y~ ÷ F~x~**.",
          "Worked magnitude: 2300 N horizontal with 1200 N vertical gives R = √(2300² + 1200²) ≈ 2600 N — drawn answers are judged against printed tolerances, calculated answers against the usual significant-figure rules.",
          "Where the components pull ==against== each other on one axis, subtract before squaring: 15 000 kg m s⁻¹ east with 14 500 kg m s⁻¹ west leaves 500 kg m s⁻¹ east, and a 200 kg m s⁻¹ north component makes the resultant √(500² + 200²).",
          "If you do the calculation on a *drawing* question, the answer mark still scores — but the construction marks belong to the triangle, so draw the triangle as well.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "A free-body force diagram offered as the scaled vector diagram — a free-body shows all the forces on one object from one point; the triangle chains them ==tip-to-tail==. Labelling arrows with their drawn length in cm. A resultant drawn from the tip of the first arrow to the tail of the last — it points the wrong way.",
      },
    ],
  },
  {
    spec: "7",
    statement:
      "understand how to make use of the independence of vertical and horizontal motion of a projectile moving freely under gravity",
    title: "Projectiles — the two independent motions",
    blocks: [
      {
        k: "def",
        term: "Projectile",
        text: "Any object moving ==freely under gravity==: the only force on it is its weight. Its two motions run on separate clocks that share one reading — the ==horizontal== motion has constant velocity (a = 0), the ==vertical== motion has constant acceleration (a = g downwards).",
      },
      {
        k: "eq",
        eq: "Horizontal: a = 0, s = v~H~t        Vertical: a = −9.81 m s⁻², s = u~V~t + ½at²        v~H~ = v cos θ, u~V~ = v sin θ",
        note: "Time is the bridge: the flight time computed from the vertical column is the same time the horizontal column must use. Set the two columns up before touching the calculator — the examiners' own advice is to ==set calculations out in two columns== so the horizontal and vertical components stay clearly separated.",
      },
      {
        k: "figure",
        kind: "ph-projectile",
        caption:
          "The path of a projectile launched at 40°: the horizontal velocity never changes, the vertical velocity loses g every second, and only time belongs to both columns.",
      },
      { k: "h", text: "The two-column method" },
      {
        k: "bullets",
        items: [
          "**Column 1 — vertical.** Resolve the launch velocity: u~V~ = v sin θ. List what the column knows (u~V~, a = −9.81, s or t) and pick the SUVAT equation that avoids the unknown.",
          "**Column 2 — horizontal.** a = 0 always, so s = v~H~t with v~H~ = v cos θ — no SUVAT needed, the velocity never changes.",
          "When the time is the unknown, take it from the column that has enough data — a horizontal launch from a height of 12 m gives 12 = ½ × 9.81 × t², then the horizontal distance is v~H~ × t.",
          "The ==time== is the only quantity both columns share — never move a velocity between columns.",
        ],
      },
      { k: "h", text: "Deduce questions" },
      {
        k: "bullets",
        items: [
          "*Does it clear the wall?* Compute the height at the wall: the horizontal column gives the time (t = distance ÷ v~H~), the vertical column gives the height at that time.",
          "Then finish with the explicit comparison and the verdict in words: the height at the wall = 2.7 m, the wall's top = 3.0 m, 2.7 < 3.0 — the ball does not clear the wall.",
          "Stopping at the computed height earns nothing — ==the comparison== is the final marking point.",
        ],
      },
      { k: "h", text: "Angled launches — impact speed and angle" },
      {
        k: "bullets",
        items: [
          "At the top of the path the ==vertical== velocity is zero; the horizontal velocity never changed.",
          "At any instant the two components recombine by Pythagoras: landing speed = √(v~V~² + v~H~²), at the angle tan⁻¹(v~V~ ÷ v~H~) to the horizontal.",
          "The vertical component at landing comes from the drop: v~V~ = √(2 × 9.81 × Δh) when the launch is horizontal.",
          "A larger launch speed leaves v~V~ unchanged and grows v~H~, so tan(impact angle) = v~V~ ÷ v~H~ falls — the ball meets the ground at a ==shallower== angle.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Finding the time to maximum height and ==doubling it== — that works only when the projectile lands at its launch height; a golfer landing 11 m below the launch point needs the full quadratic. Forgetting to ==add the launch height== above sea level. Using a = g in the horizontal column, or u = v~H~ in the vertical column — the two-column layout prevents both, which is why the examiners recommend it.",
      },
    ],
  },
];

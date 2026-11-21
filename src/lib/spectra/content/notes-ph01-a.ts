import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Mechanics · Part A (statements 1–7)
   The formula-first register, as approved for t02: the named
   equation is stated first in an equation band, then unpacked in
   a sentence; the working symbols (=, ×, >, <) sit inside the
   sentences; one bullet = one marking point; each situation from
   the papers is built up as its own headed group, one logical
   step per bullet. Mark scheme wordings and examiner report lines
   are quoted verbatim in "Mark scheme wording" and "Examiner's
   report" notes, from the WPH11 papers held in research/wph11.
   Rejected wordings live in "Not accepted" notes.
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
          "List what the question gives, note which of s, u, v, a, t is missing, and pick the equation that does not contain it.",
          "Convert every unit before substituting: mm to m by dividing by 1000, km h⁻¹ to m s⁻¹ by dividing by 3.6.",
          "Substitute first, calculate once, round at the end — keep all the digits in the calculator and write the rounded value only on the final line.",
          "Quote a ==show that== answer to **one more significant figure** than the value in the question: *show that t ≈ 0.14 s* asks for 0.139 s — 0.14 s exactly is rejected.",
          "Reverse working scores both marks on a two-mark show that, but only two of the three marks on a three-mark one.",
          "Once the value is shown, ==use the given value== in the later parts.",
          "Finish every calculation with the ==unit==, and quote to the same number of significant figures as the data in the question.",
        ],
      },
      {
        k: "table",
        caption: "Choosing the equation",
        head: ["You know", "You want", "Use"],
        rows: [
          ["u, a, t", "v", "v = u + at"],
          ["u, a, t", "s", "s = ut + ½at²"],
          ["u, v, s (no time)", "a or v²", "v² = u² + 2as"],
          ["u, v, t (no acceleration)", "s", "s = ½(u + v)t"],
          ["starts from rest", "—", "set u = 0 and the equations simplify"],
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Final answers must be correctly rounded, not truncated, and truncated values in multi-stage calculations will not generally yield the required value for the final mark. It is advisable that students should use calculators to retain all significant figures for values carried forward and only round answers for the final line.*",
      },
      { k: "h", text: "A dart thrown at a dartboard" },
      {
        k: "bullets",
        items: [
          "A dart is thrown at 15.6 m s⁻¹ at 5.0° to the horizontal, and the vertical component of its velocity reaches zero just before it hits the board.",
          "Vertical column: u~V~ = 15.6 × sin 5.0° = 1.36 m s⁻¹, and 0 = 1.36 − 9.81t.",
          "t = 1.36 ÷ 9.81 = **0.139 s** — quoted to one more significant figure than the *about 0.14 s* asked.",
          "Horizontal column: a = 0, so D = 15.6 × cos 5.0° × 0.139 = **2.2 m**.",
          "The (a) value 0.139 s feeds (b) — a wrong (a) does not have to sink (b), because the later marks are re-marked with your value.",
        ],
      },
      { k: "h", text: "Two cars and a finish line" },
      {
        k: "bullets",
        items: [
          "Car A moves at a constant 93 m s⁻¹ with 100 m left; car B, 9.0 m behind A, moves at 93 m s⁻¹ and accelerates at 14 m s⁻².",
          "Both cars cover the same 93 m s⁻¹ of shared distance — what closes the 9.0 m gap is B's extra accelerating motion, starting from rest.",
          "s = ut + ½at² with u = 0 and a = 14 m s⁻² gives s = 7t².",
          "Level when the extra distance = the gap: 9.0 = 7t², so t = √(9.0 ÷ 7.0) = **1.13 s ≈ 1.1 s** — any valid constant-acceleration route reaches the same value.",
          "The finish: A needs 100 ÷ 93 = 1.08 s; B needs to cover 109 m, 109 = 93t + 7t², so t = 1.08 s — A still crosses first, 1.08 s < 1.08 s is a comparison that needs both numbers.",
        ],
      },
      { k: "h", text: "On Mars" },
      {
        k: "bullets",
        items: [
          "Substitute the local acceleration into the equations: on Mars, a = 0.38g = 3.7 m s⁻².",
          "Take a ==ratio== of two equations when two situations share the same variables: the unknown g cancels.",
          "Worked ratio: the same drop from the same height gives v² = 2g~E~h on Earth and v² = 2 × 0.38g~E~ × h on Mars, so v~Mars~ ÷ v~Earth~ = √0.38 ≈ 0.62 — the landing speed is about 0.62 of the Earth value.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "The equations of motion applied to a curved slide — the acceleration varies from point to point, and the mark scheme prints *Do not accept use of equations of motion* (statement 20 carries the energy route). And a ==show that== answer quoted to the given value: 0.14 s written for *about 0.14 s* is rejected.",
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
          "Explain a graph ==through the graph==: name the gradient, an area, an intercept or a shape, then give the forces behind it.",
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
      { k: "h", text: "A ball falling through a liquid" },
      {
        k: "bullets",
        items: [
          "The gradient of the v–t graph = the acceleration; at the start the only force is the weight, so the gradient is steep, close to g.",
          "As the velocity grows the drag on the ball grows, the resultant force falls, so the curve flattens.",
          "When the drag + upthrust = the weight, the acceleration is zero and the graph becomes a horizontal line: ==terminal velocity==.",
          "A sketch drawn from rest joins its two shapes ==smoothly==: a curve through the origin with increasing gradient, then a straight horizontal line above the time axis.",
        ],
      },
      { k: "h", text: "Drawing graphs" },
      {
        k: "bullets",
        items: [
          "Axes ==labelled with the quantity and the unit==.",
          "A scale that spreads the plotted points ==over more than half of each axis==, avoiding awkward multiples such as 3 or 7.",
          "Points plotted ==to within 1 mm== of the true values.",
          "The best-fit line is ==a thin continuous line== — a sketch graph earns shape marks, not point-by-point accuracy.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "An answer that never mentions a gradient, an area, an intercept or a shape is not an answer about the graph — the examiner report quoted above records those answers as scoring no marks. On a terminal-velocity sketch: the final horizontal line floats ==above the time axis== (the velocity is not zero), and the gradient must be ==continuous== where the acceleration changes.",
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
      { k: "h", text: "Tangents to a curve" },
      {
        k: "bullets",
        items: [
          "Draw the tangent ==at the exact time== asked — the first marking point of the printed scheme is the tangent itself, ==drawn at the stated time==.",
          "Read two ==well-separated== points on your own tangent and find the gradient: Δv ÷ Δt. Close points amplify your drawing error.",
          "Worked tangent: the diver's v–t curve, tangent at 70 s reading Δv ≈ −0.50 m s⁻¹ across Δt = 65 s, gives a ≈ −0.008 m s⁻² (printed range −0.007 to −0.010).",
          "The answer carries the sign: a diver rising through water has velocity upwards and acceleration downwards, so the gradient is negative.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Most candidates who drew a tangent scored well. However, many candidates just read a value of velocity at 70 s and divided one by the other. This approach scored no marks.*",
      },
      { k: "h", text: "Areas under a curve" },
      {
        k: "bullets",
        items: [
          "**Counting squares** on a printed grid — each square is worth its width × height in unit quantities.",
          "**Trapezium strips** when the velocity changes in straight segments: a fall from 2v to v over time t gives ½(2v + v)t, then a rectangle vt underneath — a total of 5vt ÷ 2.",
          "**Equality of areas** as a physics statement: a diver returns to the surface because the area below the time axis ==equals== the area above it — the total displacement is zero.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Reading the velocity at the point and dividing it by the time — v ÷ t at a point is not a gradient, a ==tangent== is; the report quoted above scores such answers nothing. And *the final velocity is zero* or *the gradient is zero* offered as an explanation of returning to the start — zero displacement means the ==areas== cancel.",
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
        text: "==Vector notation==: in print a vector is written in bold (**F**) or with a small arrow above the letter, while its magnitude is plain italic (F). An equilibrium condition written as one vector sentence — **W** + **T**₁ + **T**₂ = **0** — is a statement about arrows: three vectors of different lengths, added nose-to-tail, closing back on themselves. Written as bare numbers it is false, because W, T₁ and T₂ point in different directions.",
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
        label: "Mark scheme wording",
        text: "The equilibrium item is credited only when the forces are added as vectors: *W + T₁ + T₂ = 0* — the options that add the tensions as bare numbers are rejected, because the direction is the whole distinction.",
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
        note: "The component ==along== a reference direction and the component ==at right angles== to it. One sanity check settles which function is which: at θ = 0° the vector lies entirely along the reference direction, so the parallel component must be the full F, and cos 0° = 1.",
      },
      {
        k: "figure",
        kind: "ph-vectors",
        caption:
          "Left: resolving a force at 35° into horizontal and vertical components. Right: the same forces added nose-to-tail to find a resultant — the two skills are inverses of each other.",
      },
      { k: "h", text: "How the angle decides the function" },
      {
        k: "bullets",
        items: [
          "θ measured ==from the horizontal==: the horizontal component is F cos θ and the vertical component is F sin θ.",
          "θ measured ==from the vertical==: the roles swap — the vertical component is F cos θ and the horizontal component is F sin θ.",
          "Ask which reference line θ is measured from before choosing the function; the diagram shows it.",
        ],
      },
      { k: "h", text: "A bird on a wire" },
      {
        k: "bullets",
        items: [
          "Traffic lights of weight W hang from a wire whose two sides each make θ with the horizontal: each tension pulls up with T sin θ, and the two sides share the weight, **2T sin θ = W**, so **T = W ÷ (2 sin θ)**.",
          "A bird of weight W stands at the middle of a string whose sides make 80° with the two vertical posts: the vertical component of each tension is T cos 80°, so **2T cos 80° = W** and **T = W ÷ (2 cos 80°)**.",
          "Same equilibrium, one different measured angle — the two questions are the same trap set twice.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "On the 80° version the rejected options are explained as *the components of T acting vertically should be cos and should form the denominator* — the wording names both slips at once.",
      },
      { k: "h", text: "A trolley on a slope" },
      {
        k: "bullets",
        items: [
          "With friction absent, the acceleration along any slope is ==a = g sin θ==: on a 14° incline, a = 9.81 × sin 14° = 2.4 m s⁻².",
          "Feed the component straight into the equations of motion: a trolley starting at 7.1 m s⁻¹ and running 15 m down a 14° slope reaches v² = 7.1² + 2 × 2.37 × 15 = 122, so v ≈ 11 m s⁻¹.",
          "The energy route reaches the same 11 m s⁻¹: the vertical drop is 15 × sin 14° = 3.6 m, and ½mv² = mgΔh — the mass cancels.",
          "The ==initial velocity== stays in the chain: v² = u² + 2as keeps the u term, and dropping it (or resolving it) gives the wrong speed.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "sin used where the angle is measured from the vertical — the printed rejected option explains that the vertical components ==should be cos and should form the denominator==.",
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
        text: "Two skills, and the wording tells you which one is wanted: *at any angle* means a ==scaled vector drawing==; *at right angles* means ==calculation== with Pythagoras. On the drawing question the printed scheme demands arrows ==at least 6 cm== long for the longest force — a scale such as 1 cm : 100 N.",
      },
      {
        k: "steps",
        caption: "The scaled vector diagram",
        items: [
          {
            title: "Choose a scale",
            text: "Big enough that the longest force is still a long arrow — at least 6 cm, sometimes 8 cm. State the scale.",
          },
          {
            title: "Draw tip-to-tail",
            text: "Second vector starting from the *tip* of the first, at the true angle between them. Label each arrow with the force it represents (F, or 70 N, or *wind 350 N*) — never with its drawn length in cm.",
          },
          {
            title: "Close the triangle",
            text: "The resultant runs from the *tail of the first* vector to the *tip of the last*, and its arrow points that way round. Measure its length and convert back through the scale; measure the angle with a protractor and state the direction (*30° below the horizontal*).",
          },
        ],
      },
      { k: "h", text: "A submarine's resultant force" },
      {
        k: "bullets",
        items: [
          "A submarine's engine produces a horizontal force of 70 N forwards; the drag force is 43 N, directed backwards and downwards at 25° to the horizontal.",
          "Draw the 70 N forward arrow to scale (at least 3.5 cm for this question), then the 43 N drag from its tip at 25° below the backwards direction.",
          "The resultant closes the triangle: length measured back through the scale gives ==36 N== (printed tolerance 34 N to 38 N), at ==30°== below the horizontal (tolerance ± 2°).",
          "Check by calculation: horizontally 70 − 43 cos 25° = 31.0 N, vertically 43 sin 25° = 18.2 N, so R = √(31.0² + 18.2²) ≈ 36 N at tan⁻¹(18.2 ÷ 31.0) ≈ 30°.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Many candidates drew a free-body force diagram rather than a scaled vector diagram.* · *Many candidates labelled their vectors with the length of the arrow they had drawn, rather than with the size or description of the force that each arrow represented.* · *It was not uncommon for candidates who drew an appropriate triangle to draw the resultant force vector pointing in the wrong direction.*",
      },
      { k: "h", text: "Perpendicular resultants" },
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
        note: "Set the two columns up before touching the calculator — the examiner report's own advice is that *teaching students to set calculations out in two columns would help them to keep horizontal and vertical components clearly separated*.",
      },
      {
        k: "figure",
        kind: "ph-projectile",
        caption:
          "The path of a projectile launched at 40°: the horizontal velocity never changes, the vertical velocity loses g every second, and only time belongs to both columns.",
      },
      { k: "h", text: "A ball thrown at a wall" },
      {
        k: "bullets",
        items: [
          "A ball is thrown at 9.70 m s⁻¹ and 49.0° to the horizontal, at a wall 5.00 m away whose top is 3.00 m above the release point.",
          "Vertical column: u~V~ = 9.70 × sin 49.0° = 7.32 m s⁻¹.",
          "Horizontal column: a = 0, so t = 5.00 ÷ (9.70 × cos 49.0°) = **0.786 s** — one more significant figure than the *about 0.8 s* asked.",
          "Back to the vertical column: s = 7.32 × 0.786 − 4.905 × 0.786² = 2.72 m at the wall.",
          "The ==comparison== is the final marking point: 2.72 m < 3.00 m, so ==the ball does not clear the wall==. Stopping at 2.72 m earns nothing.",
        ],
      },
      { k: "h", text: "A stone thrown from a cliff" },
      {
        k: "bullets",
        items: [
          "A stone is projected horizontally at 3.8 m s⁻¹ from a cliff top 12 m above the sea.",
          "Vertical column first (u~V~ = 0): 12 = ½ × 9.81 × t², so t = 1.56 s.",
          "Horizontal column (a = 0): s = v~H~t = 3.8 × 1.56 = **5.9 m**.",
          "The two-column layout prevents the classic slips — using a = g in the horizontal plane, or u = 3.8 m s⁻¹ in the vertical plane.",
        ],
      },
      { k: "h", text: "A golfer's ball" },
      {
        k: "bullets",
        items: [
          "A golfer's ball leaves the club with a vertical component of 34.1 m s⁻¹ and lands 11 m below the launch point.",
          "The full quadratic is needed: 11 = 34.1t − 4.91t², so t = 6.62 s — the other root, 0.34 s, is the pass through height 11 m on the way up.",
          "Horizontal column: the range = 39.2 × 6.62 ≈ 260 m, and the question's carry of 255 m falls short, so the ball ==clears the carry== — the verdict needs the comparison, not just 260 m.",
          "Doubling the time to maximum height works ==only when the projectile lands at its launch height== — 11 m below is not that case.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*The most common incorrect approach was to find the time to maximum height and double it, giving a time that is too long.*",
      },
      { k: "h", text: "Impact speed and angle" },
      {
        k: "bullets",
        items: [
          "At the top of the path the ==vertical== velocity is zero; the horizontal velocity never changed.",
          "At any instant the two components recombine by Pythagoras: landing speed = √(v~V~² + v~H~²), at the angle tan⁻¹(v~V~ ÷ v~H~) to the horizontal.",
          "Worked landing: an athlete crossing the bar at 3.44 m s⁻¹ horizontally then falling 1.4 m gains v~V~ = √(2 × 9.81 × 1.4) = 5.24 m s⁻¹, so the landing velocity is √(5.24² + 3.44²) ≈ 6.3 m s⁻¹ at tan⁻¹(5.24 ÷ 3.44) ≈ 57° to the horizontal.",
          "A larger launch speed leaves v~V~ unchanged and grows v~H~, so tan(impact angle) = v~V~ ÷ v~H~ falls — the ball meets the ground at a ==shallower== angle.",
          "Add the ==launch height== when heights are measured from the ground: a projectile launched from a site 2.0 km above sea level that is 961 m above its launch point when it crosses the ship is at 961 + 2000 ≈ 3.0 × 10³ m above sea level.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Finding the time to maximum height and ==doubling it== — that works only when the projectile lands at its launch height; a golfer landing 11 m below the launch point needs the full quadratic. Forgetting to ==add the launch height== above sea level, or computing the ==maximum height== where the question asks the height at a given point. Using a = g in the horizontal column, or u = v~H~ in the vertical column — the two-column layout prevents both, which is why the examiners recommend it.",
      },
    ],
  },
];

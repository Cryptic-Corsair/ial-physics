import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Mechanics · Part A (statements 1–7)
   The worked-example register: every situation from the papers is
   presented as a worked example card — the question as the paper
   sets it, with the session and question number stated, the method
   ruled out one marking point per step, and the answer sealed.
   Nothing of a scenario sits outside its card; the blocks that
   remain outside are the ropes (equation bands, def cards, tables,
   figures, method panels), not scenarios. Mark scheme wordings and
   examiner report lines are quoted verbatim inside the cards, from
   the WPH11 papers held in research/wph11. Working symbols
   (=, ×, >, <) sit inside the sentences.
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
      {
        k: "worked",
        title: "A dart thrown at a dartboard",
        question:
          "A dart is thrown with a velocity of 15.6 m s⁻¹ at an angle of 5.0° to the horizontal, and it travels a horizontal distance D to the dartboard. Just before the dart hits the dartboard the vertical component of its velocity is zero. The air resistance acting on the dart is negligible. (a) Show that the time taken to reach the dartboard is about 0.14 s. (3) (b) Calculate D. (2) — *WPH11 January 2024, Q12*",
        steps: [
          "Set the two columns up first — vertical (a = 9.81 m s⁻²) and horizontal (a = 0). The ==vertical== component is the one that falls to zero: u~V~ = 15.6 × sin 5.0° = 1.36 m s⁻¹ — the resolution is marking point 1.",
          "Use of v = u + at — ==any valid suvat method== is credited: 0 = 1.36 − 9.81t.",
          "t = 1.36 ÷ 9.81 = **0.139 s** — one more significant figure than the *about 0.14 s* asked. *Examiner's report: it was reasonably common for students to incorrectly round their calculated answer to 0.138 s instead of 0.139 s. Students who made this error only scored 2 marks in part (a).*",
          "Horizontal column (b): a = 0, so D = 15.6 × cos 5.0° × 0.139 = **2.2 m** (2.16 m unrounded).",
          "A wrong (a) does not sink (b) — ecf re-marks the later part with your value. The recorded (b) errors — ==a = g in the horizontal plane==, or the ==vertical component== used instead of the horizontal, or 15.6 m s⁻¹ used without resolving — score nothing.",
        ],
        answer: "(a) 0.139 s · (b) D = 2.2 m",
      },
      {
        k: "worked",
        title: "Two cars and a finish line",
        question:
          "Two cars, A and B, are racing along a track. At a particular instant car A is 9 m ahead of car B, and car A is 100 m from the finish line. Car A has a constant velocity of 93 m s⁻¹. At this instant car B also has a velocity of 93 m s⁻¹, and car B is accelerating with a constant acceleration of 14 m s⁻². (a) Show that car A and car B are side by side after a time of about 1.1 s. (3) (b) Deduce whether car A reaches the finish line before car B. (3) — *WPH11 June 2024, Q13*",
        steps: [
          "Both cars share the 93 m s⁻¹ — equal speeds cover equal distances, so what closes the 9 m gap is B's ==extra accelerating motion==, starting from rest.",
          "s = ut + ½at² with u = 0 and a = 14 m s⁻² gives s = 7t² for the extra distance B gains.",
          "Side by side when the extra distance = the gap: 9.0 = 7t², so t = √(9.0 ÷ 7.0) = **1.13 s ≈ 1.1 s** — any valid constant-acceleration route reaches the same value.",
          "To the line: A needs 100 ÷ 93 = **1.075 s**; B needs 109 m, 109 = 93t + 7t², so t = **1.084 s**.",
          "The ==comparison== is the final marking point: 1.075 s < 1.084 s, so ==car A reaches the finish line first== — a *deduce* verdict needs both numbers and the comparison, never a bare value.",
        ],
        answer: "(a) 1.13 s ≈ 1.1 s · (b) yes — 1.075 s < 1.084 s, car A first",
      },
      {
        k: "worked",
        title: "On Mars",
        question:
          "A rock falls from rest through a small distance s to the surface of Mars, and hits Mars with velocity v~M~. Another rock falls from rest through the same distance s to the surface of Earth, and hits Earth with velocity v~E~. Calculate the ratio v~M~ ÷ v~E~. Acceleration due to gravity on Mars = 0.38g. (3) — *WPH11 June 2023, Q11*",
        steps: [
          "Substitute the local acceleration into the same equations: on Mars a = 0.38g = 3.7 m s⁻² — the physics does not change, only the number put in for g.",
          "v² = u² + 2as with u = 0: v~M~² = 0.38gs on Mars and v~E~² = gs on Earth.",
          "Take a ==ratio== when two situations share the same variables — the unknown s cancels: (v~M~ ÷ v~E~)² = 0.38, so v~M~ ÷ v~E~ = √0.38 = **0.62**.",
        ],
        answer: "v~M~ ÷ v~E~ = 0.62",
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
      { k: "h", text: "Building one graph from another" },
      {
        k: "steps",
        caption: "The conversion method",
        items: [
          {
            title: "Pick the direction",
            text: "s–t to v–t and v–t to a–t read ==gradients==: the gradient at each stage of the source graph becomes a value on the target graph. v–t to s–t and a–t to v–t read ==areas==: the area under each phase becomes a value on the target graph. Converting s–t to a–t needs both steps, through the v–t graph.",
          },
          {
            title: "Split the journey into phases",
            text: "Cut the source graph where its shape changes. Each phase is one segment of the target graph, and the phase boundaries are the points that must agree across both graphs.",
          },
          {
            title: "Read each phase",
            text: "Find the gradient (or the area) of each phase ==with its sign==. Constant acceleration on the source graph means the target segment is ==straight==; where the source curve bends, the target gradient itself changes.",
          },
          {
            title: "Plot and join",
            text: "Plot one point per phase boundary on the target axes, join the segments in order, and label both axes with the quantity and the unit. Check the ==intercept== (the value at t = 0) and that nothing changes instantly where it must not.",
          },
        ],
      },
      {
        k: "bullets",
        items: [
          "The v–t intercept is the ==initial velocity==; on the s–t graph it is the gradient at t = 0.",
          "Displacement ==cannot change instantly== — an s–t graph never jumps vertically. Velocity can reverse in a negligible time: at a bounce the v–t line swings from one side of the axis to the other almost vertically.",
          "A dropped-then-rebounding ball on a v–t graph: the fall and the rebound sit on ==opposite sides of the time axis==, and their areas compare where the ball ends up — ==equal areas== return the ball to its starting height, ==unequal areas== leave it above or below it (WPH11 October 2020, Q9).",
          "Straight segments on an s–t graph claim ==constant velocity==, which a ball in free flight never has — the s–t graph of a bouncing ball is curved on both sides of the bounce (the printed rejection of the straight-line options: *lines straight, indicating no change in velocity*, WPH11 October 2020, Q10).",
          "A ball thrown straight up has ==a = g downwards for the whole flight==: its a–t graph is one flat line below the time axis — at the highest point the velocity is zero but the acceleration is not (WPH11 January 2023, Q7).",
        ],
      },
      {
        k: "worked",
        title: "Building the velocity-time graph",
        question:
          "A man dives from a platform into a swimming pool. The platform is 12 m above the water surface. The graph shows the vertical displacement of the man from the water surface, after leaving the platform. (a) (i) State how the graph shows that the man's initial vertical velocity is zero. (1) (ii) Determine the vertical velocity of the man as he enters the water. (2) (b) Before entering the water, the man has a constant vertical acceleration. After entering the water, the man has a constant vertical deceleration. Draw the velocity-time graph for the man on the axes below. (2) — *WPH11 June 2023, Q12*",
        steps: [
          "(a)(i) The ==gradient at t = 0 is zero==: the tangent at the start is horizontal, and the gradient of a displacement-time graph is the velocity. *The printed mark: (initial) gradient = 0 or tangent horizontal (at t = 0).*",
          "(a)(ii) Draw the tangent ==where the displacement crosses zero==, at the water surface, and read its gradient: **14 m s⁻¹ downwards** — the printed answer is *(−)14 ± 1 m s⁻¹ by graphical method*, the negative sign labelling the downward direction. A suvat calculation with the height ==read from the graph== and a = ±g scores the same two marks.",
          "(b) The source graph's gradients become the target graph's values: before the water the vertical acceleration is constant (free fall), so the v–t graph is a ==straight line from 0 at t = 0 to −14 m s⁻¹ at 1.5 s== — its gradient is the acceleration, ==g== downwards.",
          "In the water the deceleration is constant, so a ==second straight line== carries the velocity from −14 m s⁻¹ back to zero at 2.1 s. *The printed marks: straight line from 0 to (1.5, − magnitude from (a)(ii)); second straight line from end of first line to (2.1, 0.0)* — and ==lines beyond 2.1 s are ignored==.",
          "The conversion discipline the card enacts: ==never copy the source graph's shape== — read its gradient at the start and at each phase boundary, plot those values on the target axes, and join them with the correct straight segments.",
        ],
        answer: "(a)(ii) 14 m s⁻¹ downwards · (b) straight from 0 to −14 m s⁻¹ at 1.5 s, then straight back to 0 at 2.1 s",
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
      {
        k: "bullets",
        items: [
          "A ==tangent== gives the ==instantaneous== value; a ==chord== gives the ==average==: the average velocity over an interval is the displacement between the two times divided by the time interval — *the displacement at 4 hours divided by a time of 4 hours* (WPH11 October 2024, Q3). The paper's rejected options are exactly the two tangent gradients offered as averages.",
          "The same chord reading gives the ==average acceleration==: the change in velocity divided by the time it took, Δv ÷ Δt, read between two times on the v–t graph (WPH11 January 2024, Q16 — the average acceleration of a skittle during its collision, 86 m s⁻²).",
        ],
      },
      {
        k: "worked",
        title: "Tangents to a curve",
        question:
          "The graph shows the vertical velocity of a deep-sea diver against time; the diver is at the surface when the dive begins and is at the surface again 82 s later. Determine the vertical acceleration of the diver at 70 s. (3) — *WPH11 October 2024, Q19*",
        steps: [
          "Draw the tangent ==at the exact time asked== — the tangent itself, ==drawn at the stated time==, is the first marking point of the printed scheme.",
          "Read two ==well-separated== points on your own tangent and find the gradient: Δv ÷ Δt. Close points amplify the drawing error.",
          "The worked tangent: Δv ≈ −0.50 m s⁻¹ across Δt = 65 s gives a ≈ **−0.008 m s⁻²** (printed range −0.007 to −0.010).",
          "The answer carries the sign: a diver rising through water has velocity upwards and acceleration downwards, so the gradient is negative.",
          "*Examiner's report:* *most candidates who drew a tangent scored well. However, many candidates just read a value of velocity at 70 s and divided one by the other. This approach scored no marks.* — v ÷ t at a point is not a gradient; a ==tangent== is.",
        ],
        answer: "a ≈ −0.008 m s⁻² (−0.007 to −0.010)",
      },
      {
        k: "worked",
        title: "Areas under a curve",
        question:
          "The same graph shows the diver's vertical velocity against time. Explain how the graph shows that the diver is at the surface again 82 s after the dive began. (2) — *WPH11 October 2024, Q19*",
        steps: [
          "The area between the line and the time axis ==represents displacement== — the first marking point.",
          "Count it square by square on the printed grid, or by ==trapezium strips== where the velocity changes in straight segments — a fall from 2v to v over time t gives ½(2v + v)t, then a rectangle vt underneath: 5vt ÷ 2 in total.",
          "The diver is at the surface if the area below the time axis (before 25 s) ==equals== the area above it (after 25 s) — the total displacement is zero.",
          "*Examiner's report:* *many candidates did not mention the areas on the graph, with many responses referring to either the final velocity being zero, or to the gradient of the graph.* — *the final velocity is zero* and *the gradient is zero* score nothing; the ==areas== cancel.",
        ],
        answer: "areas below and above the time axis cancel — zero displacement, diver back at the surface",
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
        text: "A quantity with ==magnitude only==: distance, speed, mass, energy, work done, power, density, time, temperature, efficiency.",
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
          ["—", "strain, stress, Young modulus, viscosity, efficiency"],
        ],
      },
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
          "Build the base-unit forms by substitution: N = kg m s⁻², so J = N m = kg m s⁻² × m = **kg m² s⁻²**, and W = J ÷ s = **kg m² s⁻³**. The paper asks it directly — *Which of the following quantities has the SI base units kg m² s⁻³?* is ==power== — and rejects each wrong option by writing its base units: force kg m s⁻², momentum kg m s⁻¹, work done kg m² s⁻² (WPH11 January 2020, Q1).",
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
      { k: "h", text: "The change in a vector" },
      {
        k: "bullets",
        items: [
          "The change in any vector is itself a vector, found by ==subtraction with signs==: Δv = v~final~ − v~initial~. A car travelling north that slows from +50 m s⁻¹ to +20 m s⁻¹ has changed its velocity by **−30 m s⁻¹** — the change points ==south==, opposite to the motion (WPH11 October 2020, Q4). The printed rationales test each option by adding it to the initial velocity: −30 m s⁻¹ gives the true 20 m s⁻¹ north; the magnitude-only answers give *80 m s⁻¹ N* or *20 m s⁻¹ S*.",
          "Drawn as arrows, the change vector closes the triangle: it runs from the ==tip of the initial== arrow to the ==tip of the final== arrow — the paper sets it with the magnitude unchanged and only the direction turned, which is exactly what the subtraction shows (WPH11 January 2020, Q3).",
          "The same subtraction with signs is what makes the change-of-momentum sums in statement 14 work — the direction is the physics.",
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
      {
        k: "worked",
        title: "Traffic lights on a wire",
        question:
          "Traffic lights of weight W hang in equilibrium from a wire, and each side of the wire makes an angle θ with the horizontal. Which expression gives the tension in the wire?  A 2W sin θ · B W ÷ (2 sin θ) · C 2W cos θ · D W ÷ (2 cos θ) — *WPH11 January 2025, Q10*",
        steps: [
          "Each side pulls up with the vertical component of its tension, T sin θ, and the two sides share the weight: **2T sin θ = W**.",
          "Rearrange: **T = W ÷ (2 sin θ)** — option B.",
          "*The mark scheme's rejected options:* A is the wrong rearrangement (*W = 2 sin θ × tension*); C and D use *T cos θ* — and *T cos θ is the horizontal component of tension T*.",
        ],
        answer: "B — T = W ÷ (2 sin θ)",
      },
      {
        k: "worked",
        title: "A bird on a wire",
        question:
          "A string is stretched between two vertical posts, and a bird of weight W stands at the middle of the string. The string makes an angle of 80° with each post, and the tension in each side is T. Which expression gives T?  A T = W ÷ (2 sin 80°) · B T = W × 2 sin 80° · C T = W ÷ (2 cos 80°) · D T = W × 2 cos 80° — *WPH11 January 2024, Q6*",
        steps: [
          "The 80° is measured ==from the vertical== (the posts), so the vertical component of each tension is T cos 80° — the roles swap the moment the reference line changes.",
          "Same equilibrium as the traffic lights, one different measured angle: **2T cos 80° = W**, so **T = W ÷ (2 cos 80°)** — option C.",
          "*The printed rejected-option note names both slips at once:* *the components of T acting vertically should be cos and should form the denominator*.",
        ],
        answer: "C — T = W ÷ (2 cos 80°)",
      },
      {
        k: "worked",
        title: "A skier on a slope",
        question:
          "A person on skis slides down a slope at 14° to the horizontal with an initial speed of 7.1 m s⁻¹. Resistive forces are negligible. Calculate the speed of the skier after moving 15 m down the slope. (3) — *WPH11 January 2025, Q12*",
        steps: [
          "With friction absent the acceleration along any slope is ==a = g sin θ==: 9.81 × sin 14° = 2.37 m s⁻².",
          "Feed the component straight into the equations of motion, keeping the initial velocity: v² = u² + 2as = 7.1² + 2 × 2.37 × 15 = 122, so v ≈ **11 m s⁻¹**.",
          "The energy route reaches the same value: the vertical drop is 15 × sin 14° = 3.6 m, and ½mv² = mgΔh — the mass cancels.",
          "*Examiner's report:* *a large number of candidates either failed to take account of the initial velocity of the person or used a component of the initial velocity, and therefore ended up with an incorrect answer.* — v² = u² + 2as keeps the u term.",
        ],
        answer: "≈ 11 m s⁻¹",
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
        text: "Two skills, and the wording tells you which one is wanted: *at any angle* means a ==scaled vector drawing==; *at right angles* means ==calculation== with Pythagoras. On the drawing questions the printed schemes demand arrows ==at least 6 cm== long for the longest force — a scale such as 1 cm : 100 N.",
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
      {
        k: "worked",
        title: "A submarine's resultant force",
        question:
          "The diagram shows a submarine. The engine produces a horizontal force of 70 N forwards. The drag force on the submarine is 43 N, directed backwards and downwards at 25° to the horizontal. Determine the magnitude and direction of the resultant force on the submarine using a scaled vector diagram. (5) — *WPH11 January 2025, Q18*",
        steps: [
          "Draw the 70 N forwards arrow to scale, then the 43 N drag from its tip at 25° below the backwards direction — each arrow ==labelled with the force it represents==, never with its drawn length in cm.",
          "Close the triangle: the resultant runs from the ==tail of the first== vector to the ==tip of the last==, pointing that way round.",
          "Measured back through the scale: ==36 N== (printed tolerance 34 N to 38 N), at ==30°== below the horizontal (tolerance ± 2°).",
          "Check by calculation: horizontally 70 − 43 cos 25° = 31.0 N, vertically 43 sin 25° = 18.2 N, so R = √(31.0² + 18.2²) ≈ 36 N at tan⁻¹(18.2 ÷ 31.0) ≈ 30°. On a *drawing* question the calculation still scores the answer mark — but the construction marks belong to the triangle, so draw the triangle as well.",
          "*Examiner's report:* *Many candidates drew a free-body force diagram rather than a scaled vector diagram.* · *Many candidates labelled their vectors with the length of the arrow they had drawn, rather than with the size or description of the force that each arrow represented.* · *It was not uncommon for candidates who drew an appropriate triangle to draw the resultant force vector pointing in the wrong direction.*",
        ],
        answer: "≈ 36 N at 30° below the horizontal",
      },
      {
        k: "worked",
        title: "Perpendicular resultants",
        question:
          "Two perpendicular forces act on an object: a force of 2300 N horizontally and a force of 1200 N vertically. Determine the magnitude of the resultant force using a scaled vector diagram. (2) — *WPH11 October 2024, Q11*",
        steps: [
          "Draw the vector triangle tip-to-tail, all three arrows in the correct relative directions — the construction is marking point 1.",
          "Resultant = ==2600 N== (printed tolerance 2550 N to 2650 N). Horizontal and vertical components combine by Pythagoras: R = √(F~x~² + F~y~²) = √(2300² + 1200²) = 2594 N ≈ 2600 N.",
          "*Examiner's report:* *Most candidates scored at least one mark... but less than half gained both marks.* · *Many candidates drew a free-body force diagram rather than a scaled vector diagram.* · *It was common to see candidates using Pythagoras to calculate the magnitude... Whichever method candidates used to arrive at the correct answer, marking point 2 was scored.*",
        ],
        answer: "2600 N (2550 N to 2650 N)",
      },
      {
        k: "bullets",
        items: [
          "Two ==equal== forces F with an angle θ ==between them== give a resultant of **2F cos(θ ÷ 2)** acting along the ==bisector== of the angle: halve the printed angle before applying the cosine. A cable tension of 1200 N meeting at 144° at a wheel: R = 2 × 1200 × cos 72° = 742 N ≈ **740 N** (WPH11 June 2024, Q19).",
          "The equilibrium cards in statement 5 run the same trigonometry in reverse — there the two tensions must produce a resultant that cancels the weight, so the same halved-angle formula gives 2T cos(θ ÷ 2) = W with θ the angle ==between== the two tensions.",
        ],
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
      {
        k: "bullets",
        items: [
          "At the ==highest point== the vertical velocity is ==zero== — and the vertical acceleration is still ==g downwards==. The fact unlocks the show-thats that build a launch speed from a maximum height: v² = u~V~² − 2gΔh with v = 0 gives u~V~ = √(2gΔh), and then u = u~V~ ÷ sin θ (WPH11 January 2021, Q13 — a ball kicked so that it reaches 5.0 m at 35°: u~V~ = √(2 × 9.81 × 5.0) = 9.90 m s⁻¹, u = 9.90 ÷ sin 35° ≈ **17 m s⁻¹**).",
          "==Only the vertical column stops== at the top: the horizontal velocity never changes, so the horizontal column has no highest-point event at all.",
        ],
      },
      {
        k: "worked",
        title: "A ball thrown at a wall",
        question:
          "A boy throws a ball at a wall 5.00 m away. The top of the wall is 3.00 m above the release point, and the ball is thrown with an initial velocity of 9.70 m s⁻¹ at 49.0° to the horizontal. (a) Show that the ball travelled the distance to the wall in about 0.8 s. (3) (b) Deduce whether the ball went over the wall. (4) — *WPH11 October 2022, Q15*",
        steps: [
          "Horizontal column first (a = 0): v~H~ = 9.70 × cos 49.0° = 6.36 m s⁻¹, so t = 5.00 ÷ 6.36 = **0.786 s** — one more significant figure than the *about 0.8 s* asked.",
          "Vertical column (b): v~V~ = 9.70 × sin 49.0° = 7.32 m s⁻¹, and s = 7.32 × 0.786 − 4.905 × 0.786² = **2.72 m** at the wall.",
          "The ==comparison== is the final marking point: 2.72 m < 3.00 m, so ==the ball does not go over the wall==. Stopping at 2.72 m earns nothing.",
          "*Examiner's report:* *Many candidates lost marks by neglecting units for their values of height.* — every height carries ==m==.",
        ],
        answer: "(a) 0.786 s · (b) no — 2.72 m < 3.00 m, the ball does not clear the wall",
      },
      {
        k: "worked",
        title: "A stone thrown from a cliff",
        question:
          "A stone is projected horizontally from a cliff with an initial horizontal velocity of 3.8 m s⁻¹, from a height of 12 m above the sea. Calculate the horizontal distance travelled by the stone before it lands. (3) — *WPH11 January 2023, Q11*",
        steps: [
          "Vertical column first (u~V~ = 0): 12 = ½ × 9.81 × t², so t = 1.56 s.",
          "Horizontal column (a = 0): s = v~H~t = 3.8 × 1.56 = **5.9 m**.",
          "*Examiner's report:* *Others used a = g in the horizontal plane, or u = 3.8 m s⁻¹ in the vertical plane. Teaching students to set calculations out in two columns would help them to keep horizontal and vertical components clearly separated.* — the two-column layout prevents both slips.",
        ],
        answer: "5.9 m",
      },
      {
        k: "worked",
        title: "A golfer's ball",
        question:
          "A golfer hit a golf ball into the air at a speed of 52 m s⁻¹ and an angle of 41° to the horizontal. The ball landed on the ground near a hole, and the ground was 11 m higher than the starting point of the ball. (a) Show that the vertical component of the ball's initial velocity was about 30 m s⁻¹. (2) (b) Show that the time taken by the ball to reach the ground was about 7 s. You should ignore the effects of air resistance. (3) (c) The hole is a horizontal distance of 250 m from the starting point of the ball. Deduce whether the ball landed within 5.0 m of the hole. (3) — *WPH11 June 2022, Q18*",
        steps: [
          "Vertical component: 52 × sin 41° = **34.1 m s⁻¹** — the mark scheme's own example carries 34.1 into part (b), one more significant figure than the printed show-that value.",
          "The full quadratic is needed because the ground is ==above== the launch point: 11 = 34.1t − 4.905t², so 4.905t² − 34.1t + 11 = 0, giving t = **6.62 s** (or 0.34 s) — 0.34 s is the pass through the 11 m height on the way up; 6.62 s is the landing.",
          "Horizontal column (c): v~H~ = 52 × cos 41° = 39.2 m s⁻¹, so the range = 39.2 × 6.62 ≈ **260 m**.",
          "The comparison: 260 m > 255 m, so ==the ball lands beyond the 5.0 m window around the hole== — no. A *deduce* verdict is the final marking point.",
          "Doubling the time to maximum height works ==only when the projectile lands at its launch height== — the higher ground is not that case. *Examiner's report:* *The most common incorrect approach was to find the time to maximum height and double it, giving a time that is too long.*",
        ],
        answer: "(a) 34.1 m s⁻¹ · (b) 6.62 s · (c) no — 260 m > 255 m",
      },
      {
        k: "worked",
        title: "Impact speed and angle",
        question:
          "An athlete of weight 680 N runs horizontally and clears the bar with kinetic energy of 409 J. After clearing the bar he falls 1.4 m vertically before landing. Calculate the magnitude of the athlete's landing velocity and its direction as an angle from the vertical. (4) — *WPH11 October 2024, Q15*",
        steps: [
          "The horizontal speed comes from the energy: m = W ÷ g = 680 ÷ 9.81 = 69.3 kg, and v~H~ = √(2 × 409 ÷ 69.3) = **3.44 m s⁻¹** — the mass conversion and Ek = ½mv² are marking points of their own.",
          "Vertical: falling from rest, v~V~ = √(2 × 9.81 × 1.4) = 5.24 m s⁻¹ — the equations of motion or ΔEgrav = ΔEk both score the mark.",
          "Recombine by Pythagoras: v = √(5.24² + 3.44²) = **6.3 m s⁻¹** (the show-that value gives 6.2).",
          "Direction: tan θ = 3.44 ÷ 5.24, so θ = **33° from the vertical** — a larger launch speed leaves v~V~ unchanged and grows v~H~, so the landing gets ==shallower==.",
        ],
        answer: "6.3 m s⁻¹ at 33° from the vertical",
      },
      {
        k: "worked",
        title: "A projectile from a mountain",
        question:
          "Scientists launched a projectile from a mountain. The launch site was 2.0 km above sea level, and the projectile initially moved with a speed of 500 m s⁻¹ at an angle of 22° to the horizontal. A ship was a horizontal distance of 15 km from the launch site, and the projectile passed over the ship. Determine the height above sea level of the projectile as it passed over the ship. You should ignore the effects of air resistance. (4) — *WPH11 January 2025, Q19*",
        steps: [
          "Time to the ship (from the earlier show that): u~H~ = 500 × cos 22° = 464 m s⁻¹, so t = 15 000 ÷ 464 ≈ **32 s** — use the given value in this part; ecf protects it.",
          "Vertical column: u~V~ = 500 × sin 22° = 187 m s⁻¹, and s = 187 × 32 − 4.905 × 32² ≈ **961 m** above the launch point.",
          "==Add the launch height== when heights are measured from the ground: 961 + 2000 ≈ **3.0 × 10³ m** above sea level.",
          "The two recorded slips: forgetting the ==launch height== altogether, and computing the ==maximum height== where the question asks the height at a stated point.",
        ],
        answer: "≈ 3.0 × 10³ m above sea level (2.96 × 10³ m)",
      },
    ],
  },
];

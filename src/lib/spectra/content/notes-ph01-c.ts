import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces, motion and energy · Part C
   Spec statements 15–22: moments, centre of gravity and
   equilibrium, work, kinetic energy, gravitational potential
   energy, conservation of energy, power, efficiency.

   The approved physics register — see the Part A header and the
   handover §3. This part closes the note with "The marking rules
   that never change", which lives at the end of the LAST section
   (the doc outro is walked for anchors but never rendered).
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01_C: SpecSection[] = [
  {
    spec: "15",
    statement:
      "be able to use the equation for the moment of a force, moment of force = Fx where x is the perpendicular distance between the line of action of the force and the axis of rotation",
    title: "The moment of a force",
    blocks: [
      {
        k: "def",
        term: "Moment of a force",
        text: "The turning effect of a force about an axis: **moment = Fx**, where x is the ==perpendicular distance== from the axis of rotation to the ==line of action== of the force. Unit: **N m**.",
      },
      {
        k: "eq",
        eq: "moment = Fx        moment = F cos θ × d  (force at θ to the lever)",
        note: "When the force acts at an angle, x is the perpendicular distance from the pivot to the force's line of action — equivalently, use the component of the force perpendicular to the lever. Two geometries, same answer; pick whichever the diagram makes natural.",
      },
      {
        k: "figure",
        kind: "ph-moments",
        caption:
          "A beam pivoted at one end: each force turns the beam about the pivot, and each moment is force × perpendicular distance. The weight's moment acts through the centre of gravity, at the beam's midpoint.",
      },
      { k: "h", text: "Where the distances come from" },
      {
        k: "bullets",
        items: [
          "A uniform body's weight acts at its ==midpoint== — for a stone resting on a step with part of its length overhanging, the centre of gravity can sit ==beyond the step's edge==, which is what makes the stone topple.",
          "At the point of lifting, the body pivots on the edge: take moments about the edge, with the weight turning one way and the applied force the other.",
          "Annotate the figure first — the examiner reports ask students to mark the distances between the points of action of the forces clearly, because the geometry is the whole question.",
          "**Minimum force**: the force is smallest where its perpendicular distance from the pivot is largest — at the far end, applied ==perpendicular== to the lever.",
          "Check the calculator is in ==degrees== — the reports found candidates working in radians, which wrecks every trigonometric value.",
        ],
      },
      {
        k: "bullets",
        items: [
          "State the direction of turning — clockwise or anticlockwise — whenever the question asks for the moment: the direction can reverse during a motion, as a bridge's weight passes over its pivot.",
          "Pushing at a new angle changes the perpendicular component: pushing vertically on a rail instead of perpendicular to it gives a smaller perpendicular component, so ==the force needed is greater== for the same moment.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "sin where cos belongs: the examiner report credits the equation mark even when the wrong function was used — ==the method survives, the value does not==. The unit written as N m⁻¹ or bare N instead of N m.",
      },
    ],
  },
  {
    spec: "16",
    statement:
      "be able to use the concept of centre of gravity of an extended body and apply the principle of moments to an extended body in equilibrium",
    title: "Centre of gravity and the principle of moments",
    blocks: [
      {
        k: "def",
        term: "Equilibrium",
        text: "An object is in equilibrium when there is ==no resultant force== on it ==and no resultant moment== about any point. Two marks, two sentences — the mark schemes insist that *clockwise moment = anticlockwise moment* alone is not sufficient, because it omits the forces half.",
      },
      {
        k: "def",
        term: "The principle of moments",
        text: "For an object in equilibrium, the ==total clockwise moment about any point equals the total anticlockwise moment== about that point — or, equivalently, the sum of all moments = zero.",
      },
      {
        k: "steps",
        caption: "The moments method — the five moves every question wants",
        items: [
          {
            title: "1 · Choose a pivot",
            text: "Any point works in equilibrium, so choose the one that kills the most unknowns — usually where an unknown force acts. State the pivot clearly: not stating it is the most-documented lost mark in the whole topic.",
          },
          {
            title: "2 · Mark the centre of gravity",
            text: "For a uniform body the weight acts at its geometric centre — the midpoint of a beam, the centre of a disc. Annotate the distance from the pivot to the centre of gravity before writing any equation.",
          },
          {
            title: "3 · List the forces and their turning directions",
            text: "Each force either turns clockwise or anticlockwise about your pivot — or acts through it (moment zero, which is why you chose it).",
          },
          {
            title: "4 · Write moment = Fx for each",
            text: "Perpendicular distances only. Resolve or use the angle, as in statement 15.",
          },
          {
            title: "5 · Balance and conclude",
            text: "Σ clockwise = Σ anticlockwise; solve; and if the command word is *deduce*, finish with the explicit comparison and a sentence.",
          },
        ],
      },
      { k: "h", text: "The method on a real structure" },
      {
        k: "bullets",
        items: [
          "A uniform bridge deck on two supports with a load part-way along: take moments about one support — that support's own force acts through the pivot, so it drops out of the equation.",
          "The deck's weight acts at its ==midpoint==: clockwise moments = deck weight × half-span + load × its distance from the pivot.",
          "The far support's force = the total clockwise moment ÷ the full span.",
          "Then the ==force balance== finishes it: the near support's force = the deck's weight + the load − the far support's force.",
          "Units on both answers — the mark schemes cap the whole question when answers carry no unit.",
        ],
      },
      { k: "h", text: "Explaining with calculations" },
      {
        k: "bullets",
        items: [
          "An *explain why it stays put* question needs ==the numbers==: compute the clockwise moment and the anticlockwise moment about the hinge and compare them.",
          "When the two computed moments differ, name what supplies the difference — a stop block pressing on the board — and the block's force is found from the imbalance: F × its distance = the moment difference.",
          "The examiner report records how rare it was to see the relevant calculations in an explain question — explanation here *requires* the arithmetic.",
          "Testing a claim (*does it hold 3 portions?*): compute one portion's weight from the first equilibrium, then compute what the new geometry supports, then conclude with the comparison.",
          "A tipping question: compute where the load would have to sit for balance, compare with the real position, and state which way it goes.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Clockwise moment = anticlockwise moment* offered as the definition of equilibrium — the ==resultant force== half is missing. Assuming the load sits at a convenient distance instead of reading the geometry. Omitting the centre-of-gravity moment from the balance.",
      },
    ],
  },
  {
    spec: "17",
    statement:
      "be able to use the equation for work ΔW = FΔs, including calculations when the force is not along the line of motion",
    title: "Work done",
    blocks: [
      {
        k: "def",
        term: "Work done by a force",
        text: "**ΔW = FΔs** — force × the distance moved ==in the direction of the force==. When the force is not along the motion, use the component along it. Unit: the joule, 1 J = 1 N m.",
      },
      {
        k: "eq",
        eq: "ΔW = FΔs        ΔW = FΔs cos θ        work done against gravity = mgΔh",
        note: "The cosine version is ==not== printed on the data sheet — ΔW = FΔs is. The angle handling is a skill the papers test explicitly: θ is the angle between the force and the displacement.",
      },
      { k: "h", text: "Deciding whether the cosine is needed" },
      {
        k: "bullets",
        items: [
          "A rope inclined at 40° pulling a box along the ground: only the component of the tension along the motion does work — F cos 40° — so ΔW = F cos θ × d.",
          "A force ==already along== the motion needs no cosine at all: a cyclist pushing along a 4.0° slope does work = F × the distance along the slope. The documented error was multiplying the distance by a cosine of the angle anyway.",
          "Work done against gravity uses the ==vertical== height only: Δh = the slope distance × sin θ, then mgΔh.",
          "Total work splits across the resistances: the work the cyclist does = the work against gravity + the work against air resistance.",
        ],
      },
      { k: "h", text: "Work from energy changes" },
      {
        k: "bullets",
        items: [
          "The kinetic energy a resistive force removes = the work that force does: a truck losing 8.0 × 10⁶ J of kinetic energy to a 3.5 × 10⁵ N resistive force travels Δs = ΔW ÷ F ≈ 23 m. The examiner reports call this work–energy equivalence the step most candidates missed.",
          "The increase in gravitational potential energy of a lifting machine is the work it does ==against== the force of gravity — that is what mgΔh is.",
          "In collision energy questions the marking point is the word ==work==: forces between the bodies did work, and that work moved energy to thermal energy.",
          "The area under a force–displacement graph is the work done — the same statement 32 uses for force–extension graphs.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "The bare force component (F cos θ) offered as the work — it is the ==force==, the work still needs the distance. And the change in gravitational potential energy left as the final answer when the question asks for the work done against air resistance.",
      },
    ],
  },
  {
    spec: "18",
    statement: "be able to use the equation Ek = ½mv² for the kinetic energy of a body",
    title: "Kinetic energy",
    blocks: [
      {
        k: "def",
        term: "Kinetic energy",
        text: "The energy a body has because it is moving: **Ek = ½mv²**, in joules. Kinetic energy is a ==scalar== — direction counts for nothing — and it is proportional to the ==square== of the speed.",
      },
      {
        k: "eq",
        eq: "Ek = ½mv²        v = √(2Ek ÷ m)",
        note: "Rearranged, the speed comes from the kinetic energy and the mass — the route the papers set when they hand you an energy and want a velocity to feed into a momentum equation.",
      },
      {
        k: "bullets",
        items: [
          "The square is the physics examiners love to probe: double the landing speed and the kinetic energy ==quadruples==, so the struck object could rise four times as far — *the height gained does not double*.",
          "Double the kinetic energy and the new speed is √2 × the old one — the square root undoes the square.",
          "Equal kinetic energies for two very different masses put the speeds in the ==inverse ratio of the square roots of the masses==: a particle 1/2000 the mass moves √2000 times faster.",
          "The weight-to-mass conversion comes first in every chain: m = W ÷ g, then Ek = ½mv² — both substitutions are marking points before the value.",
          "The ½ and the square are the two traps in every costume; the unit is the plain joule, energy, not N m s⁻¹.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Direction words in a kinetic-energy answer — it is a ==scalar==. And quoting v = 3.4 m s⁻¹ for *show that v ≈ 3.4 m s⁻¹* — the show-that contract (statement 1) wants the extra significant figure first.",
      },
    ],
  },
  {
    spec: "19",
    statement:
      "be able to use the equation ΔEgrav = mgΔh for the difference in gravitational potential energy near the Earth's surface",
    title: "Gravitational potential energy",
    blocks: [
      {
        k: "def",
        term: "Gravitational potential energy (near the Earth's surface)",
        text: "The energy stored by a mass at height: **ΔEgrav = mgΔh**, where Δh is the ==change in vertical height== — the height difference, never the distance along a slope. Near the Earth's surface g is constant, which is what makes the equation linear.",
      },
      {
        k: "eq",
        eq: "ΔEgrav = mgΔh        Δh = L sin θ  (distance L along a slope at θ to the horizontal)",
        note: "The vertical drop is the geometry step the papers examine: straight pipes 350 m long inclined at 55° carry water down a ==vertical== drop of 350 × sin 55° ≈ 287 m, not 350 m.",
      },
      { k: "h", text: "Chains that end in power" },
      {
        k: "bullets",
        items: [
          "A hydro station chain, marking point by marking point: mass per minute from the density and the volume (m = ρV); the vertical drop from the pipe geometry (Δh = L sin θ); the energy per minute (mgΔh); then the power (P = E ÷ t, with t = 60 s for a per-minute flow).",
          "The mark schemes also credit an alternative route through the exit speed and ½mv² — two valid chains to the same power.",
          "A train climbing at constant speed: the engine's output energy (P × t) splits into the gain in gravitational potential energy (mgΔh) and the work done against resistive forces — subtract, and the resistive work is left.",
          "Quote the intermediate value correctly rounded — 417 × 10⁶ J rounds to 420 × 10⁶ J; the examiner report flags truncation to 410 × 10⁶ as the documented loss.",
          "When a later part hands you a *show that* value (about 88 MW), carry it forward — the question expects the given value to be used.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "The slope length used as Δh — gravitational potential energy cares about ==vertical height only==. And a truncated value where a rounded one belongs.",
      },
    ],
  },
  {
    spec: "20",
    statement:
      "know, and understand how to apply, the principle of conservation of energy including use of work done, gravitational potential energy and kinetic energy",
    title: "Conservation of energy",
    blocks: [
      {
        k: "def",
        term: "The principle of conservation of energy",
        text: "Energy cannot be created or destroyed — only ==transferred between stores== (kinetic, gravitational, elastic, thermal…). In any real situation some energy is dissipated, usually as work done against resistive forces; the bookkeeping must still balance.",
      },
      {
        k: "eq",
        eq: "mgΔh = ½mv²        ΔEgrav = ΔEel        Ek lost = work done by resistive forces        total in = useful out + dissipated",
        note: "When the mass appears on both sides of a chain it cancels: the speed at the bottom of a frictionless drop is √(2gΔh), ==whatever the mass== — three papers have asked exactly that comparison.",
      },
      { k: "h", text: "The slide — why SUVAT is rejected" },
      {
        k: "bullets",
        items: [
          "A curved slide's gradient varies, so the acceleration varies — the equations of motion need ==constant acceleration==, and the mark scheme prints *Do not accept use of equations of motion*.",
          "The energy route instead: all the gravitational potential energy becomes kinetic — mgΔh = ½mv², so v = √(2gΔh).",
          "A second slide of the same height but a shorter path gives ==the same speed==: v = √(2gΔh) contains no mass and no path length — only Δh matters.",
          "Do not import drag and friction into an answer when the question says resistive forces are ignored.",
        ],
      },
      { k: "h", text: "The bungee deduce" },
      {
        k: "bullets",
        items: [
          "Energy available on the way down: ΔEgrav = mgΔh from the bridge to the lowest point allowed.",
          "Energy the rope can store by then: the rope's tension at that stretch is kΔx, and the elastic store is ½FΔx = ½kΔx².",
          "Compare the two numbers with an inequality and finish with the verdict in words: the rope's store at the river level far exceeds the gravitational energy released, so ==the student stops short of the river==.",
          "The common wrong route — finding the equilibrium position with F = kΔx using the weight — still earns the Hooke's-law marking point, but not the comparison.",
        ],
      },
      { k: "h", text: "The energy chain for a skydiver" },
      {
        k: "bullets",
        items: [
          "The mark scheme's own complete chain: gravitational potential energy decreases throughout.",
          "While accelerating, kinetic energy increases — and work is done against air resistance at every stage.",
          "At terminal velocity the kinetic energy is constant, so ==all the lost gravitational potential energy is dissipated== by work done against the drag.",
          "The how is the marking point: name the force doing the work and the store the energy lands in.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Energy was transformed* with no mechanism — the examiner report gave such answers almost nothing: the marks need ==work done by forces== and a ==named store==. Drag or friction appearing in a question that ignores resistive forces. And an energy input computed as the bare kinetic-energy loss when the body was also rising — the gravitational gain comes off first.",
      },
    ],
  },
  {
    spec: "21",
    statement: "be able to use the equations relating power, time and energy transferred or work done P = E/t and P = W/t",
    title: "Power",
    blocks: [
      {
        k: "def",
        term: "Power",
        text: "The ==rate of energy transfer== or of doing work: **P = E/t = W/t**, measured in watts, **1 W = 1 J s⁻¹**. The unit is examined as a multiple-choice item — the joule per second, not N m (a joule), N m⁻¹ (stiffness) or J s (energy × time).",
      },
      {
        k: "eq",
        eq: "P = W/t        P = E/t        P = Fv",
        note: "P = Fv is not printed on the data sheet, but the mark schemes *allow P = Fv* whenever it fits — derive it in one line: W = FΔs divided by t, with Δs ÷ t = v.",
      },
      { k: "h", text: "Power at constant speed" },
      {
        k: "bullets",
        items: [
          "A boat or vehicle at constant (terminal) velocity has constant kinetic energy — the engine's work goes into ==pushing the water or air aside==, at the rate P = F × v.",
          "Calculating the kinetic energy of the body is the documented wrong route — the question is about the ==rate of working==, not the stored energy.",
          "State the unit: the reports record missing and wrong units on power answers.",
        ],
      },
      { k: "h", text: "Testing a display, and finding a time" },
      {
        k: "bullets",
        items: [
          "*Is the displayed power honest?* Work per pull = FΔs; total work = pulls × work per pull; power = total work ÷ the time; then compare with the display and state the verdict.",
          "The mark schemes also credit working backwards from the displayed power to the time, count, force or distance — any valid comparison.",
          "Use the force ==given in the question part==, not a force carried over from an earlier part with different conditions.",
          "A time from a power: t = mgΔh ÷ P for a motor lifting a mass — the mcq distractors omit g or mishandle the kilo- prefix.",
          "An escalator raising you through 5000 J in 42 s at efficiency 0.63: the ==input== power = 5000 ÷ (42 × 0.63) — the efficiency divides (statement 22).",
        ],
      },
      { k: "h", text: "One question, three regimes" },
      {
        k: "bullets",
        items: [
          "An athlete's useful power over a jump: accelerating on the flat, P = Fv with a growing v — the power grows.",
          "Climbing at constant speed: P = mgv — constant, set by the weight and the climb rate.",
          "Airborne with no contact force: the useful power is ==zero== — nothing is being pushed.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "The unit written as J s (energy × time) instead of ==J s⁻¹== — and the kinetic energy offered as the answer to a rate-of-working question.",
      },
    ],
  },
  {
    spec: "22",
    statement:
      "be able to use the equations efficiency = useful energy output / total energy input and efficiency = useful power output / total power input",
    title: "Efficiency",
    blocks: [
      {
        k: "eq",
        eq: "efficiency = useful energy output ÷ total energy input        efficiency = useful power output ÷ total power input",
        note: "The data sheet prints both, with the words — the marks are in deciding ==which number is the useful output== and ==which the total input==. An efficiency above 1 (100%) means the accounting is wrong: the examiner reports tell students to be suspicious of one.",
      },
      { k: "h", text: "The five costumes, and the slip each hides" },
      {
        k: "bullets",
        items: [
          "**Input from output**: input = output ÷ efficiency — the escalator raises 5000 J in 42 s at efficiency 0.63, so the input power = 5000 ÷ (42 × 0.63) ≈ 190 W; multiplying by the efficiency instead is the documented slip.",
          "**Dissipated power**: the waste = (1 − efficiency) × the ==total input== — using the useful output here breaks the accounting.",
          "**Power-station accounting**: the total input = the useful output + the waste — the waste does not go in the numerator.",
          "**A bank of generators**: the useful output is the number of generators × each one's output — forgetting to multiply is the slip.",
          "**A net input**: a car braking while climbing loses kinetic energy but gains height — the energy available to charge the battery = ΔEk − ΔEgrav, and the efficiency = the charge delivered ÷ that net input. Only about a quarter of candidates scored this in full.",
          "In percentage form the ==% symbol is required==; as a decimal it is a plain number between 0 and 1.",
        ],
      },
      {
        k: "table",
        caption: "Efficiency costumes and their traps",
        head: ["Costume", "The trap"],
        rows: [
          ["Dissipated power = (1 − efficiency) × total input", "using the output instead of the input"],
          ["Input from output: input = output ÷ efficiency", "multiplying by the efficiency"],
          ["Total input = useful output + waste", "putting the waste in the numerator"],
          ["Hydro bank: output = 4 × one station's output − wasted", "treating the bank's gross figure as the useful output"],
          ["Net input = ΔEk − ΔEgrav", "forgetting the height gain"],
          ["Efficiency < 1 always", "an answer over 100% is an accounting error"],
        ],
      },
      { k: "h", text: "The marking rules that never change" },
      {
        k: "p",
        text: "These are the standing rules printed in every WPH11 mark scheme across the series. They are worth more marks per minute of revision than anything else in this unit, because they apply to every calculation you will ever be asked.",
      },
      {
        k: "table",
        caption: "The WPH11 calculation contract",
        head: ["Rule", "Exact terms"],
        rows: [
          ["*Use of …* marks", "The correct equation with physically correct values substituted earns the method mark — even with a power-of-ten slip afterwards. Show the substitution, always."],
          ["ecf — error carried forward", "A wrong earlier answer does not sink later parts; the marks are re-marked with your value. Never abandon a part because the last one went wrong."],
          ["Significant figures", "Quote *show that* answers to at least 1 more s.f. than the given value. Carry all digits through; round only on the final line. Rounding, never truncating (417 becomes 420, not 410)."],
          ["Units", "A missing or wrong unit on a final answer normally loses that answer's mark (once per question; never in show-that). Strain has no unit."],
          ["g", "Use 9.81 (9.8 accepted); g = 10 costs one mark per question."],
          ["Deduce questions", "Calculate, compare with the question's value (<, >, =, ≈), and state the conclusion in words. The bare number never earns the final mark."],
          ["Reverse working", "Full credit on 2-mark show-thats; capped at 2 of 3 on 3-mark ones."],
          ["Bald correct answers", "Full marks — except in show-that and extended calculations, where working is the marks."],
        ],
      },
      {
        k: "p",
        text: "And the examiners' own revision advice, repeated across every report: practise in ==varied contexts== — *new or more unfamiliar contexts* is how each report describes the paper; read the command word — *state*, *calculate*, *explain*, *deduce* each demand a different shape of answer; and when a 3-mark explanation is set, *a 3-mark explanation is likely to need 3 different points*. Leave nothing blank — the schemes are written to reward simple, correct statements wherever they can be found.",
      },
    ],
  },
];

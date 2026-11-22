import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Mechanics · Part C (statements 15–22)
   The worked-example register — see the Part A header: scenarios
   are worked example cards (question + paper, marking points as
   steps, sealed answer); the ropes stay outside. This part closes
   the note with "The marking rules that never change", which sits
   at the end of the LAST section (the doc outro is walked for
   anchors but never rendered).
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
        text: "The turning effect of a force about an axis: **moment = Fx**, where x is the ==perpendicular distance== from the axis to the ==line of action== of the force. Unit: **N m**.",
      },
      {
        k: "eq",
        eq: "moment = Fx        moment = F cos θ × d  (force at θ to the lever)",
        note: "When the force acts at an angle, x is the perpendicular distance from the pivot to the force's line of action — equivalently, use the component of the force perpendicular to the lever. Two geometries, one answer; pick whichever the diagram makes natural.",
      },
      {
        k: "figure",
        kind: "ph-moments",
        caption:
          "A beam pivoted at one end: each force turns the beam about the pivot, and each moment is force × perpendicular distance. The weight's moment acts through the centre of gravity, at the beam's midpoint.",
      },
      { k: "h", text: "Perpendicular distances" },
      {
        k: "bullets",
        items: [
          "A uniform body's weight acts at its ==midpoint== — and for a stone resting on a step with part of its length overhanging, the centre of gravity can sit ==beyond the step's edge==, which is what makes the stone topple.",
          "At the point of lifting, the body pivots on the edge: take moments about the edge, with the weight turning one way and the applied force the other.",
          "Annotate the figure first — the distances between the points of action of the forces are the whole geometry of the question.",
          "**Minimum force**: the force is smallest where its perpendicular distance from the pivot is largest — at the far end, applied ==perpendicular== to the lever.",
          "Check the calculator is in ==degrees== — left in radians, every trigonometric value changes.",
          "State the direction of turning — clockwise or anticlockwise — whenever the question asks for the moment: the direction can reverse during a motion, as a bridge's weight passes over its pivot.",
          "Pushing at a new angle changes the perpendicular component: pushing vertically on a rail instead of perpendicular to it gives a smaller perpendicular component, so ==the force needed is greater== for the same moment.",
        ],
      },
      {
        k: "worked",
        title: "A cyclist's pedal",
        question:
          "A person of weight 580 N stands on a pedal attached to a chain-ring by a lever of length 0.21 m at an angle of 24° to the horizontal. (a) Determine the moment of the person's weight about the pivot. (b) The chain force F is proportional to the moment of the person's weight. Explain how F changes as the angle increases from 0° to 90°. No calculation is needed. (2) — *WPH11 October 2024, Q13*",
        steps: [
          "The weight acts vertically, so its component perpendicular to the crank is W cos 24° — *use of appropriate trigonometry* is marking point 1.",
          "Moment = 580 × cos 24° × 0.21 = 111 N m — quoted as ==110 N m== to two significant figures, with the ==N m== unit on the end.",
          "As the angle grows the perpendicular distance between the weight's line of action and the pivot falls (cos θ falls from 1 to 0), so the moment falls and ==F falls to zero==.",
          "*Examiner's report:* *The most common error was to use incorrect trigonometry. Candidates who used sin instead of cos could still score the equation mark.* · *A small minority of candidates appeared to have their calculator in radians rather than in degrees.* · unit errors were ==N m⁻¹== or bare ==N== instead of N m.",
        ],
        answer: "(a) 110 N m · (b) F falls to zero as the perpendicular distance falls",
      },
      {
        k: "worked",
        title: "A stone on a step",
        question:
          "A uniform rectangular stone rests horizontally on a step, held in equilibrium by a builder applying the minimum force P at the end of the stone above the step. The stone has a weight of 415 N and a length of 0.90 m, and the length beyond the edge of the step is 0.50 m. Calculate the magnitude of P. (3) — *WPH11 January 2023, Q13*",
        steps: [
          "The stone is uniform, so its centre of gravity sits at its midpoint: 0.45 m from either end — ==0.05 m beyond the step's edge==. The step edge is 0.50 m from the overhanging end, so P acts 0.40 m from the edge.",
          "At the point of lifting the stone pivots on the edge: the weight's moment = 415 × 0.05 = 20.8 N m one way, and P × 0.40 the other — *use of moment of a force = Fx* and *the principle of moments* are the first two marks.",
          "P × 0.40 = 20.8, so **P = 52 N**.",
          "*Examiner's report:* *This question included the challenge to determine the positions of the forces from the geometry of the figure, and many candidates struggled with this. … Students should be encouraged to annotate figures so that distances between the points of action of forces are clearly seen.*",
        ],
        answer: "P = 52 N",
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
        text: "A body is in equilibrium when there is ==no resultant force on it== ==and no resultant moment about any point==. Two marks, two sentences — *clockwise moment = anticlockwise moment* alone is not sufficient, because it omits the forces half.",
      },
      {
        k: "def",
        term: "The principle of moments",
        text: "For a body in equilibrium, the ==total clockwise moment about any point equals the total anticlockwise moment== about that point — or, equivalently, the sum of all moments = zero.",
      },
      {
        k: "steps",
        caption: "The moments method",
        items: [
          {
            title: "1 · Choose a pivot",
            text: "Any point works in equilibrium, so choose the one that removes the most unknowns — usually where an unknown force acts. ==State the pivot clearly==: the printed scheme credits a pivot point clearly indicated on the diagram.",
          },
          {
            title: "2 · Mark the centre of gravity",
            text: "For a uniform body the weight acts at its geometric centre — the midpoint of a beam, the centre of a disc. Annotate the distance from the pivot to the centre of gravity before writing any equation.",
          },
          {
            title: "3 · List the forces and their turning directions",
            text: "Each force turns clockwise or anticlockwise about your pivot — or acts through it (moment zero, which is why you chose it).",
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
      {
        k: "worked",
        title: "A bridge on two supports",
        question:
          "The diagram shows a bridge carrying a lorry. The bridge is supported at point X and by a column providing force Q. The centre of gravity of the bridge is at its centre, and at a particular time the lorry is 35 m from point X. The weight of the bridge is 9.8 × 10⁵ N and the force from the lorry is 4.2 × 10⁵ N. You should take moments about point X. (a) Calculate the magnitudes of the forces P and Q. (5) (b) Explain why force Q increases as the lorry moves across the bridge. (5) — *WPH11 June 2024, Q18*",
        steps: [
          "Take moments about X — X's own force acts through the pivot, so it drops out of the equation.",
          "Clockwise: 9.8 × 10⁵ × 60 + 4.2 × 10⁵ × 35 = 7.35 × 10⁷ N m (the deck's weight acts at its ==midpoint==, 60 m from X).",
          "Q × 120 = 7.35 × 10⁷, so **Q = 6.1 × 10⁵ N**; the force balance finishes it: P + 6.1 × 10⁵ = 9.8 × 10⁵ + 4.2 × 10⁵, so **P = 7.9 × 10⁵ N**.",
          "(b) As the lorry moves towards Q, its moment about X grows, so Q ==increases== and P falls — ==the sum of moments remains zero for equilibrium==, and the distance from X to Q stays the same.",
          "Both answers carry their unit — *the printed scheme allows a maximum of 4 marks if incorrect / no unit with answers*: a four-mark penalty on one question.",
        ],
        answer: "Q = 6.1 × 10⁵ N · P = 7.9 × 10⁵ N",
      },
      {
        k: "worked",
        title: "A loft ladder on a hinge",
        question:
          "A ladder is attached by a rail to a board that is hinged to the ceiling and covers the roof-space opening; a small block prevents the board rotating into the roof space. The combined weight of the board and rail is 50 N, acting 0.45 m from the hinge on the block's side. The ladder weighs 54 N, is uniform, and has 0.85 m of its length on the block's side of the hinge. (a) Explain why the board and ladder remain in the position shown. (5) (b) A downward force applied 0.80 m from the hinge rotates the board away from the block. Determine the magnitude of this force. (2) — *WPH11 October 2023, Q15*",
        steps: [
          "The ladder's centre of gravity is at its midpoint: 1.35 m from its left end, which is ==0.50 m on the hinge's other side== — *determining that distance is the first marking point*.",
          "Clockwise about the hinge: 54 × 0.50 = 27 N m. Anticlockwise: 50 × 0.45 = 22.5 N m.",
          "27 N m > 22.5 N m, so the assembly presses on the block — ==the block supplies a force and hence a moment about the hinge==, so the resultant moment is zero and the board stays put.",
          "An *explain* question still needs ==the numbers==: the two computed moments and the comparison are the marks — *some candidates did not attempt calculations, perhaps not realising that in some situations a full explanation does require relevant calculations*.",
          "(b) The spare moment = 27 − 22.5 = 4.5 N m, so F = 4.5 ÷ 0.80 = **5.6 N** — just enough to lift the board off the block.",
          "*Examiner's report:* *It was rare for candidates to appreciate that the block would also cause a moment about the hinge, so only a small fraction of candidates scored all 5 marks on this question.* · *A majority were able to calculate the distance correctly, but a large number missed a mark by not specifying a pivot point.*",
        ],
        answer: "27 vs 22.5 N m — the block holds it · 5.6 N at 0.80 m tips it",
      },
      {
        k: "worked",
        title: "A crane and its counterweight",
        question:
          "The diagram shows a crane lifting a load. The beam is uniform with a weight of 3.0 × 10⁴ N; the counterweight has a weight of 1.1 × 10⁵ N and sits 8.0 m from the pivot on the far side; the load has a weight of 4.4 × 10⁴ N. The beam is 30 m long and the pivot is 8.0 m from the counterweight end. Deduce whether the load can be moved to the end of the beam without the crane toppling. (5) — *WPH11 June 2023, Q19*",
        steps: [
          "Annotate the geometry first — *candidates who annotated their diagrams tended to do better with moment problems than those who did not* — the recorded slips were ==assuming the load was 30 m from the pivot== and ==omitting the centre-of-gravity moment==.",
          "The beam is uniform, so its weight acts 15 m from either end: 7.0 m from the pivot on the load's side. The load's end of the beam sits 30 − 8.0 = 22.0 m from the pivot.",
          "Balance the moments about the pivot for the ==limiting case==: 1.1 × 10⁵ × 8.0 = 8.8 × 10⁵ N m holds the beam up; the load plus the beam's own weight pull it down.",
          "Limiting distance: (8.8 × 10⁵ − 3.0 × 10⁴ × 7.0) ÷ 4.4 × 10⁴ = 6.7 × 10⁵ ÷ 4.4 × 10⁴ = **15.2 m**.",
          "15.2 < 22.0, so the crane ==topples== if the load moves to the end of the beam — the verdict needs the comparison, in that order.",
        ],
        answer: "no — the limit is 15.2 m and the beam's end is 22.0 m from the pivot",
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
        note: "The cosine version is ==not== printed on the data sheet — ΔW = FΔs is. θ is the angle between the force and the displacement.",
      },
      { k: "h", text: "Work done at an angle" },
      {
        k: "bullets",
        items: [
          "A rope inclined at 40° pulling a box along the ground: only the component of the tension along the motion does work — F cos 40° — so ΔW = F cos θ × d.",
          "A force ==already along== the motion needs no cosine at all: a cyclist pushing along a 4.0° slope does work = F × the distance along the slope. Multiplying the distance by a cosine or a sine anyway is the recorded error.",
          "Work done against gravity uses the ==vertical== height only: Δh = the slope distance × sin θ, then mgΔh.",
          "Total work splits across the resistances: the cyclist's work = the work against gravity + the work against air resistance.",
        ],
      },
      {
        k: "worked",
        title: "A box pulled by a rope",
        question:
          "A box is pulled 5 m along the ground by a rope inclined at 40° to the horizontal. The tension in the rope is 30 N. What is the work done on the box?  A 150 J · B 115 J · C 96 J · D 23 J — *WPH11 October 2023, Q10*",
        steps: [
          "Only the component of the tension along the motion does work: ΔW = F cos θ × d.",
          "ΔW = 30 × cos 40° × 5 = **115 J** — option B.",
          "The rejected options are built from the slips: the bare F × d (150 J), the sin version (96 J), and the bare ==force component== 23 N offered as a work.",
        ],
        answer: "B — 115 J",
      },
      {
        k: "worked",
        title: "A cyclist climbing a hill",
        question:
          "A cyclist moves up a slope at a constant speed of 4.0° to the horizontal, exerting a constant force of 150 N oriented along the slope. The cyclist moves a distance of 215 m along the slope, and the mass of the cyclist and bicycle is 90 kg. (a) Show that the work done by the cyclist is about 3 × 10⁴ J. (2) (b) The cyclist does work against gravity and against air resistance. Calculate the work done against air resistance. (4) (c) State one assumption made when calculating the work done against air resistance. (1) — *WPH11 October 2022, Q19*",
        steps: [
          "The force is ==already along== the slope, so (a) ΔW = FΔs = 150 × 215 = **3.2 × 10⁴ J** — no cosine anywhere; *the printed scheme bars the cos 4° route in marking point 1*.",
          "The height gained: Δh = 215 × sin 4.0° = 15.0 m, so the work against gravity = 90 × 9.81 × 15.0 = 1.32 × 10⁴ J — *use of correct trigonometry for Δh* then *use of ΔEgrav = mgΔh*.",
          "Total work = work against gravity + work against air resistance, so the air resistance takes 3.2 × 10⁴ − 1.32 × 10⁴ = **1.9 × 10⁴ J**.",
          "(c) The only significant forces are ==gravity and air resistance== — friction in the bicycle's bearings is negligible. *Examiner's report: many students decided that there should be no friction between the cyclist and the road, not realising that that would mean the road was too slippery for the cyclist to make any progress whatsoever.*",
        ],
        answer: "(a) 3.2 × 10⁴ J · (b) 1.9 × 10⁴ J · (c) gravity and air resistance only",
      },
      {
        k: "worked",
        title: "A truck and an escape lane",
        question:
          "A horizontal sand escape lane stops vehicles that lose their brakes. A truck enters the escape lane with kinetic energy of 8.0 × 10⁶ J, and the sand exerts an average resistive force of 3.5 × 10⁵ N on the truck. Calculate the distance the truck moves along the escape lane before stopping. (2) — *WPH11 January 2025, Q13*",
        steps: [
          "The kinetic energy lost = the work done by the resistive force — the equivalence the reports say most candidates missed.",
          "Δs = ΔW ÷ F = 8.0 × 10⁶ ÷ 3.5 × 10⁵ ≈ **23 m**.",
          "The same equivalence runs everywhere: the increase in gravitational potential energy of a lifting machine is the work it does ==against== gravity (that is what mgΔh is), and the area under a force–displacement graph is the work done.",
          "*Examiner's report:* *the majority did not pick up on the idea that the change in kinetic energy is equivalent to the work done by the resistive force... Some candidates equated a change in kinetic energy with a change in gravitational potential energy, and did not appreciate that the escape lane is horizontal.*",
        ],
        answer: "≈ 23 m",
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
        note: "Rearranged, the speed comes from the kinetic energy and the mass — the route the papers set when they hand you an energy and want a velocity to feed into a momentum equation. The athlete card in statement 7 works the full chain.",
      },
      {
        k: "bullets",
        items: [
          "Double the landing speed and the kinetic energy ==quadruples==, so the struck object could rise four times as far — *the height gained does not double*.",
          "Double the kinetic energy and the new speed is √2 × the old one — the square root undoes the square.",
          "Equal kinetic energies for two very different masses put the speeds in the ==inverse ratio of the square roots of the masses==: a particle 1/2000 the mass moves √2000 times faster.",
          "Check the ==½== and the ==square== every time; the unit is the joule, energy, not N m s⁻¹.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Direction words in a kinetic-energy answer — it is a ==scalar==. And quoting v = 3.4 m s⁻¹ for *show that v ≈ 3.4 m s⁻¹* — the show-that rule (statement 1) wants the extra significant figure first.",
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
        note: "The vertical drop is the geometry step the papers examine: L sin θ, not L — the hydro card below works it in full.",
      },
      {
        k: "worked",
        title: "A hydroelectric station",
        question:
          "Water flows through straight pipes of length 350 m inclined at 55° to the horizontal from a lake to a generator at a hydroelectric power station. In one minute, each pipe transfers 1700 m³ of water of density 1100 kg m⁻³. (a) Show that the power transferred by the water in each pipe is about 88 MW. (5) (b) The water travels through 4 identical pipes. The total power wasted by the power station is 256 MW. Calculate the efficiency of the power station. (2) — *WPH11 January 2025, Q15*",
        steps: [
          "Mass per minute: m = ρV = 1100 × 1700 = 1.87 × 10⁶ kg — *use of ρ = m/V* is marking point 1.",
          "Vertical drop: Δh = 350 × sin 55° = **287 m** — the vertical height, not the pipe length.",
          "Energy per minute: ΔEgrav = mgΔh = 1.87 × 10⁶ × 9.81 × 287 ≈ 5.3 × 10⁹ J; P = E ÷ t = 5.3 × 10⁹ ÷ 60 ≈ **88 MW** per pipe (87.7 MW unrounded).",
          "(b) Useful output = 4 × 87.7 − 256 = 94.8 MW, so efficiency = 94.8 ÷ 350.8 = **0.27** — the waste comes ==off== the gross, and 88 MW or 4 × 88 MW ==is not== the useful output.",
          "*Examiner's report:* *It was very common for candidates to add the wasted power to the total input power, and it was very common for candidates to use 88 MW or 4 × 88 MW as the useful power output.*",
        ],
        answer: "(a) 87.7 MW ≈ 88 MW · (b) 0.27",
      },
      {
        k: "worked",
        title: "A train on an incline",
        question:
          "A train moves up an inclined track at constant velocity, through a vertical height of 25 m. The mass of the train is 1.7 × 10⁶ kg. (a) Show that the gravitational potential energy gained by the train is about 400 MJ. (2) (b) The train's engine has an output power of 20 MW, and the train takes a time of 35 s to move through the vertical height of 25 m. Calculate the work done by the engine against resistive forces. (3) — *WPH11 June 2024, Q11*",
        steps: [
          "ΔEgrav = mgΔh = 1.7 × 10⁶ × 9.81 × 25 = 4.17 × 10⁸ J — ==rounded to 420 × 10⁶==, not truncated to 410 × 10⁶.",
          "The energy supplied in 35 s: P × t = 20 × 10⁶ × 35 = 7.0 × 10⁸ J.",
          "Work done against resistive forces = 7.0 × 10⁸ − 4.2 × 10⁸ = **2.8 × 10⁸ J** — the constant-speed climb splits the engine's output between the height gain and the resistances.",
          "*Examiner's report:* *A small proportion of candidates truncated their calculated answer from 417 × 10⁶ to 410 × 10⁶ instead of correctly rounding it to 420 × 10⁶.* · to score the second mark, *the answer needed to be given correctly to at least one more significant figure than the 'show that' value given in the question.*",
        ],
        answer: "(a) 4.2 × 10⁸ J · (b) 2.8 × 10⁸ J",
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
        text: "Energy cannot be created or destroyed — only ==transferred between stores== (kinetic, gravitational, elastic, thermal…). In any real situation some energy is dissipated, usually as work done against resistive forces; the totals must still balance.",
      },
      {
        k: "eq",
        eq: "mgΔh = ½mv²        ΔEgrav = ΔEel        Ek lost = work done by resistive forces        total in = useful out + dissipated",
        note: "When the mass appears on both sides of a chain it cancels: the speed at the bottom of a frictionless drop is √(2gΔh), ==whatever the mass==.",
      },
      {
        k: "bullets",
        items: [
          "When the stem does ==not== say that resistive forces are ignored, a complete explanation still states the assumption: ==work done against resistive forces is negligible== — it is the printed final marking point of the mass-independence chain (WPH11 June 2024, Q19).",
          "Energies from separate stages ==combine; speeds do not==. Speeds combine only through their ==squares==: v² = u² + 2gΔh uses the height difference directly, while v₁ − v₂ subtracts two separate fall speeds and answers a different question — the paper's own rejected options are exactly those speed differences (WPH11 October 2020, Q3).",
        ],
      },
      {
        k: "worked",
        title: "A curved slide",
        question:
          "A child's slide has a vertical height of 1.7 m, and a child of mass 24 kg starts from rest at the top. Resistive forces are ignored. (a)(i) Explain why the equations of motion should not be used to determine the maximum speed of the child. (3) (a)(ii) Determine the maximum speed v of the child. (3) (b) Two slides X and Y have the same height; slide X is longer than slide Y, and the child on Y has a greater mass. Explain how v(X) compares with v(Y). (3) — *WPH11 January 2024, Q14*",
        steps: [
          "(a)(i) The slide's gradient varies, so the acceleration varies — ==the equations of motion require a constant acceleration==, so they are not usable here.",
          "(a)(ii) The energy route instead: all the gravitational potential energy becomes kinetic — ΔEgrav = 24 × 9.81 × 1.7 = 400 J, and 400 = ½ × 24 × v², so v = √(2 × 9.81 × 1.7) ≈ **5.8 m s⁻¹**. *Do not accept use of equations of motion* — the printed warning.",
          "(b) v = √(2gΔh) contains no mass and no path length — only Δh matters, so ==v(X) = v(Y)==: the same speed for both children.",
          "Do not import drag and friction into an answer when the question says resistive forces are ignored — *the report records candidates discussing drag and friction in their answers, despite the question stating that resistive forces should be ignored*.",
        ],
        answer: "(a)(ii) 5.8 m s⁻¹ · (b) equal speeds — only Δh matters",
      },
      {
        k: "worked",
        title: "A bungee jump",
        question:
          "A student bungee-jumps from a bridge on an elastic rope. The student has a mass of 65 kg; the rope has an original length of 17 m and a stiffness of 250 N m⁻¹. The river is reached if the rope stretches to a total length of 35 m. Deduce whether the student reaches the river. (4) — *WPH11 October 2024, Q17*",
        steps: [
          "Energy released by the jump: ΔEgrav = mgΔh = 65 × 9.81 × 35 ≈ 22 300 J — *use of ΔEgrav = mgΔh* is marking point 1.",
          "Energy the rope can store by then: F = kΔx = 250 × 18 = 4500 N, and ΔEel = ½FΔx = ½ × 4500 × 18 = **40 500 J**.",
          "40 500 J > 22 300 J, so ==the student stops short of the river== — the comparison is the final marking point.",
          "The common wrong route — using F = kΔx with the ==weight== to find the equilibrium position — *did score marking point 2* in the printed scheme, but not the comparison.",
        ],
        answer: "no — 40 500 J > 22 300 J, the student stops short",
      },
      {
        k: "worked",
        title: "A skydiver's energy chain",
        question:
          "After jumping from an aeroplane, the skydiver accelerated and then reached a terminal velocity before opening his parachute. Explain how energy conservation applies to the skydiver before the parachute is opened. (4) — *WPH11 June 2025, Q20*",
        steps: [
          "The gravitational potential energy ==decreases throughout== the fall — *Egrav decreases (throughout)* is the first printed point.",
          "While accelerating, the kinetic energy ==increases== — *and work is done against air resistance* at every stage.",
          "At terminal velocity the kinetic energy is constant, so ==all the lost gravitational potential energy is dissipated== — *(due to work done against air resistance)*.",
          "Name the force doing the work and the store the energy lands in — that naming is the marking point. *Examiner's report: many responses ended up describing or explaining how the forces on the skydiver varied, rather than explaining how conservation of energy applied. Some candidates just stated the law of conservation of energy, without applying this to the skydiver.*",
        ],
        answer: "Egrav falls throughout · Ek rises, then constant at terminal velocity · dissipated by work done against drag",
      },
      {
        k: "worked",
        title: "A lift and its counterweight",
        question:
          "The diagram shows a lift system for moving people up and down a tall building. There is a counterweight to balance the weight of the lift. An electric motor is used to raise and lower the lift. (a) Explain how the counterweight affects the amount of work required from the electric motor to raise the lift. (2) (b) The electric motor raises the lift through a height of 40.0 m in a time of 30.0 s. Show that the output power of the electric motor is about 12 kW. total mass of lift and people = 2 250 kg, mass of counterweight = 1 300 kg (4) — *WPH11 January 2022, Q12*",
        steps: [
          "(a) As the lift rises, the counterweight ==descends== and transfers its stored gravitational potential energy ==to the lift side== of the system — *the printed points: the amount of work from the electric motor is reduced; because there is energy transfer between the counterweight and the lift* (or *the counterweight reduces the force required from the motor*).",
          "(b) Two gravitational energy changes share the same 40.0 m: the lift gains ΔEgrav = 2250 × 9.81 × 40.0 = 8.829 × 10⁵ J while the counterweight loses ΔEgrav = 1300 × 9.81 × 40.0 = 5.101 × 10⁵ J — *use of ΔEgrav = mgΔh* on ==both== masses is the first marking point.",
          "The motor supplies only the ==difference==: ΔW = 8.829 × 10⁵ − 5.101 × 10⁵ = 3.728 × 10⁵ J — *use of conservation of energy* is the next marking point.",
          "P = W ÷ t = 3.728 × 10⁵ ÷ 30.0 = 1.243 × 10⁴ W ≈ **12 kW** — *use of P = W/t* then the answer. The lift alone would have needed 8.829 × 10⁵ ÷ 30.0 ≈ 29 kW; the counterweight's contribution brings the motor down to ≈ 12 kW.",
          "The alternative printed route works through forces: the motor's force = (m~lift~ − m~cw~)g = (2250 − 1300) × 9.81 = 9319.5 N, then ΔW = FΔx = 9319.5 × 40.0 = 3.728 × 10⁵ J and the same power — *the scheme allows: calculates resultant force; use of ΔW = FΔx; use of P = W/t*.",
        ],
        answer: "(a) the descending counterweight transfers energy to the lift, so the motor's work is reduced · (b) 12.4 kW ≈ 12 kW",
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
        note: "P = Fv is not printed on the data sheet, but the mark schemes ==allow P = Fv== whenever it fits — derive it in one line: W = FΔs divided by t, with Δs ÷ t = v.",
      },
      {
        k: "worked",
        title: "A boat at constant speed",
        question:
          "A motorboat's engine provides a constant horizontal force of 5.5 kN. As the boat's velocity increases the resultant horizontal force decreases until the boat travels at terminal velocity. (a) State what is meant by a resultant force. (1) (b) At a certain time the drag force on the boat is 3.1 kN and the mass of the boat is 7.5 × 10³ kg. Calculate the acceleration of the boat at this time. (2) (c) The terminal velocity of the boat is 4.8 m s⁻¹. Calculate the output power of the engine. (2) — *WPH11 October 2022, Q11*",
        steps: [
          "(a) *The (vector) sum of all forces (acting on an object) or the single force that would have the same effect as all the other forces acting together* — the definition the whole paper leans on.",
          "(b) Two unequal horizontal forces act: ΣF = 5.5 − 3.1 = 2.4 kN, so a = 2400 ÷ 7500 = **0.32 m s⁻²** — *the report: it was common for candidates to use an incorrect value for resultant force due to forgetting that two unequal horizontal forces were acting on the boat*.",
          "(c) At terminal velocity the engine's work goes into ==pushing the water aside==, at the rate P = Fv: P = 5500 × 4.8 = **2.6 × 10⁴ W** — the printed scheme allows P = Fv.",
          "Calculating the boat's kinetic energy is the wrong route — the question is about the ==rate of working==, not the stored energy. *Examiner's report: many candidates attempted to calculate the kinetic energy of the boat, which is irrelevant.*",
        ],
        answer: "(a) the vector sum of all forces · (b) 0.32 m s⁻² · (c) 2.6 × 10⁴ W",
      },
      {
        k: "worked",
        title: "An exercise machine's display",
        question:
          "The cable of an exercise machine lifts a 150 N weight by 0.25 m on each pull, and the weight returns when the handle is released. A person pulls and releases the handle 90 times in 120 s, and the machine displays an average power of 35 W. Deduce whether the displayed power is consistent with the person's pulls. (3) — *WPH11 October 2023, Q14*",
        steps: [
          "Work per pull: ΔW = FΔs = 150 × 0.25 = 37.5 J — with the ==force given in this question part==, not a force carried over from the earlier part (121 N) with different conditions.",
          "Total work: 90 × 37.5 = 3375 J in 120 s, so P = 3375 ÷ 120 = **28 W** — *use of P = W/t* is the middle mark.",
          "28 W ≠ 35 W, so ==the display is not consistent== — the comparison is the final marking point.",
          "Working ==backwards== from 35 W — to the time, the count, the force or the distance — reaches the same verdict; *the printed scheme allows those approaches*.",
        ],
        answer: "no — 28 W ≠ 35 W",
      },
      {
        k: "worked",
        title: "A motor lifting a load",
        question:
          "A motor lifts a mass of 50 000 kg through a height of 25 m. The output power of the motor is 700 kW. Which expression gives the time taken for the lift?  A (50 000 × 25) ÷ 700 000 · B (50 000 × 9.81 × 25) ÷ 700 000 · C (50 000 × 25) ÷ 700 · D (50 000 × 9.81 × 25) ÷ 700 — *WPH11 January 2023, Q8*",
        steps: [
          "A time from a power: t = energy ÷ power = mgΔh ÷ P.",
          "The rejected options omit ==g== (A and C) or mishandle the ==kilo-== prefix in the power (D).",
          "t = (50 000 × 9.81 × 25) ÷ 700 000 ≈ **18 s** — option B.",
        ],
        answer: "B — ≈ 18 s",
      },
      {
        k: "worked",
        title: "An escalator's input power",
        question:
          "A person stands on a moving staircase. The staircase increases the gravitational potential energy of the person by 5000 J in a time of 42 s, and the efficiency of the staircase is 0.63. Which expression gives the power input to the staircase in watts?  A 42 ÷ (5000 × 0.63) · B (42 × 0.63) ÷ 5000 · C 5000 ÷ (42 × 0.63) · D (5000 × 0.63) ÷ 42 — *WPH11 October 2024, Q6*",
        steps: [
          "Useful output power = 5000 ÷ 42 ≈ 119 W; efficiency = output ÷ input, so the ==input== power = 5000 ÷ (42 × 0.63) ≈ **190 W** — option C.",
          "The rejected options invert the ratio, or ==multiply== by the efficiency instead of dividing — *the printed scheme: the useful output power should not be inverted / should be divided by 0.63*.",
        ],
        answer: "C — ≈ 190 W",
      },
      {
        k: "worked",
        title: "A BMX track",
        question:
          "A person rides a bicycle to the top of a hill with enough speed to leave the ground. Stage A: constant acceleration on a horizontal surface until time T_A. Stage B: constant velocity up a curved ramp until time T_B. Stage C: the bicycle leaves the ground. Explain how the useful power output of the person varies through stages A, B and C. You should consider the energy changes; air resistance is negligible. (6) — *WPH11 October 2025, Q18*",
        steps: [
          "Stage A: with a constant driving force and a growing v, P = Fv — the useful power output ==increases== as the chemical store transfers energy to kinetic energy faster and faster.",
          "Stage B: constant velocity up the ramp — energy is transferred to gravitational potential energy at a constant rate, P = mgv: ==constant==.",
          "Stage C: airborne, no contact force — the useful power output is ==zero==; nothing is being pushed.",
          "The linkage is what the 6 marks pay for: useful power output = the rate of useful energy transfer, tracked through all three stages — the same rate-of-transfer logic in each.",
        ],
        answer: "A increases · B constant · C zero",
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
        note: "The data sheet prints both, with the words — the marks are in deciding ==which number is the useful output== and ==which the total input==. An efficiency above 1 (100%) means the accounting is wrong.",
      },
      { k: "h", text: "Efficiency calculations" },
      {
        k: "bullets",
        items: [
          "**Input from output**: input = output ÷ efficiency — the escalator card above gives 5000 ÷ (42 × 0.63) ≈ 190 W; multiplying by the efficiency instead is the rejected option.",
          "**Dissipated power**: the waste = (1 − efficiency) × the ==total input== — using the useful output here gives the wrong waste.",
          "**Power-station accounting**: the total input = the useful output + the waste — the waste does not go in the numerator; the hydro card in statement 19 works it in full.",
          "In percentage form the ==% symbol is required==; as a decimal it is a plain number between 0 and 1.",
        ],
      },
      {
        k: "worked",
        title: "A car's regenerative braking",
        question:
          "The brakes in a car reduce the kinetic energy of the car. In an electric car, some of this energy is transferred to the battery in the car. An electric car of mass 1800 kg moves at a speed of 14 m s⁻¹ up a hill. The driver applies the brakes to bring the car to a stop. During braking, the vertical displacement of the car is 0.76 m and the energy stored in the battery increases by 45 kJ. Calculate the efficiency of using the brakes to charge the battery. (4) — *WPH11 June 2025, Q14*",
        steps: [
          "Kinetic energy lost: ΔEk = ½mv² = ½ × 1800 × 14² = 176 000 J — *use of Ek = ½mv²* is marking point 1.",
          "Height gained while braking: ΔEgrav = 1800 × 9.81 × 0.76 ≈ 13 400 J — the gravitational gain comes ==off the input first==: *use of ΔEgrav = mgΔh* is marking point 2.",
          "The energy available to charge the battery = ΔEk − ΔEgrav = 176 000 − 13 400 = 162 600 J, so the efficiency = 45 000 ÷ 162 600 = **0.28** (the printed scheme allows 28 %).",
          "*Examiner's report:* *it was far less common for students to determine that the total energy input to the battery was the change in kinetic energy minus the change in gravitational potential energy, so only about a quarter of all students managed to gain full credit.*",
        ],
        answer: "0.28 (28 %)",
      },
      {
        k: "table",
        caption: "The five calculations and the slip in each",
        head: ["Calculation", "The slip"],
        rows: [
          ["Dissipated power = (1 − efficiency) × total input", "using the output instead of the input"],
          ["Input from output: input = output ÷ efficiency", "multiplying by the efficiency"],
          ["Total input = useful output + waste", "putting the waste in the numerator"],
          ["Four identical pipes: useful output = 4 × one pipe's output − wasted", "treating the gross figure as the useful output"],
          ["Net input = ΔEk − ΔEgrav", "forgetting the height gain"],
          ["Efficiency < 1 always", "an answer over 100% is an accounting error"],
        ],
      },
      { k: "h", text: "The marking rules that never change" },
      {
        k: "p",
        text: "These are the standing rules printed in every WPH11 mark scheme across the series. They apply to every calculation in this unit, so they are worth more marks per minute of revision than any single topic point.",
      },
      {
        k: "table",
        caption: "The standing calculation rules",
        head: ["Rule", "The mark scheme's wording"],
        rows: [
          ["*Use of …* marks", "The correct equation with physically correct values substituted earns the method mark — even with a power-of-ten slip afterwards. Show the substitution, always."],
          ["ecf — error carried forward", "A wrong earlier answer does not sink later parts; the marks are re-marked with your value. Never abandon a part because the last one went wrong."],
          ["Significant figures", "Quote *show that* answers to at least 1 more s.f. than the given value. Carry all digits through; round only on the final line. Rounding, never truncating (417 becomes 420, not 410)."],
          ["Units", "A missing or wrong unit on a final answer normally loses that answer's mark (once per question; never in show-that). Strain has no unit."],
          ["g", "Use 9.81 (9.8 accepted); g = 10 costs one mark, once per paper."],
          ["Deduce questions", "Calculate, compare with the question's value (<, >, =, ≈), and state the conclusion in words. The bare number never earns the final mark."],
          ["Starred (*) questions", "The final marks pay for structure: *coherent and logical structure with linkages and fully sustained lines of reasoning demonstrated throughout* scores the top band; *partially structured with some linkages* scores the middle. Chain the points with so / because / therefore — the lift-scales card in statement 9 shows the shape."],
          ["Reverse working", "Full credit on 2-mark show-thats; capped at 2 of 3 on 3-mark ones."],
          ["Bald correct answers", "Full marks — except in show-that and extended calculations, where working is the marks."],
        ],
      },
      {
        k: "p",
        text: "And the examiners' own revision advice, repeated across the reports: practise in ==varied contexts== — the reports describe the paper as *new or more unfamiliar contexts*; read the command word — *state*, *calculate*, *explain* and *deduce* each demand a different shape of answer; and *a three-mark explanation is likely to need candidates to give three different points in their answer*. Leave nothing blank — every correct statement can still earn its mark.",
      },
    ],
  },
];

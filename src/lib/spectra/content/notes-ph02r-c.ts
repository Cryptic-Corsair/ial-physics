import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 2 rebuilt · Part C (statements 15–16)
   Same dictated register as Part A — see the Part A header and
   research/wph11/scenario-register-guardrails.md. The moments
   sections teach the geometry first (perpendicular distance, the
   angled force, the pivot choice), then the extended bodies: the
   two-support beams, the counterweight, the hinge, the toppling
   test — every scenario built on the spine and closed with
   "Therefore,". Worked cards at the section ends, folded, one
   marking point per step, citations on every card.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH02R_C: SpecSection[] = [
  {
    spec: "15",
    statement:
      "be able to use the equation for the moment of a force, moment of force = Fx where x is the perpendicular distance between the line of action of the force and the axis of rotation",
    title: "The moment of a force",
    blocks: [
      {
        k: "def",
        term: "Moment of a force",
        text: "The turning effect of a force about an axis: **moment = Fx**, where x is the ==perpendicular distance== from the axis to the ==line of action== of the force. The unit is **N m**.",
      },
      {
        k: "eq",
        eq: "$\\text{moment} = Fx$        $F_{\\perp} = F\\cos\\theta$",
        note: "When the force acts at an angle $\\theta$ to the lever, x is the perpendicular distance from the pivot to the force's line of action — equivalently, use the component of the force perpendicular to the lever, $F\\cos\\theta$. Use whichever geometry the diagram gives you.",
      },
      {
        k: "figure",
        kind: "ph-moments",
        caption:
          "A beam pivoted at one end — each force turns the beam about the pivot, and each moment is force × perpendicular distance. The weight's moment acts through the centre of gravity, at the beam's midpoint.",
      },
      {
        k: "bullets",
        items: [
          "The unit of a moment is **N m** — in SI base units, kg m² s⁻².",
          "State the direction of turning — clockwise or anticlockwise — whenever the question asks for a moment.",
          "Check the calculator is in ==degrees== — left in radians, every trigonometric value changes.",
          "Annotate the diagram first — the distances between the points of action of the forces are the whole geometry of the question.",
          "The minimum force acts at the greatest perpendicular distance from the pivot, applied ==perpendicular== to the lever.",
          "The direction of turning can reverse during a motion, as a lorry's position passes over a support of a bridge.",
        ],
      },
      { k: "h", text: "A person standing on a pedal" },
      {
        k: "bullets",
        items: [
          "A person of weight W stands on a pedal at the end of a lever at an angle θ to the horizontal.",
          "The weight acts vertically, so its component perpendicular to the lever is $W\\cos\\theta$.",
          "The moment about the pivot is $W\\cos\\theta \\times$ the lever length.",
          "As the angle increases from 0° to 90°, $\\cos\\theta$ decreases from 1 to 0.",
          "So the perpendicular component decreases, and the moment decreases with it.",
          "Therefore, the pedal turns hardest at the bottom of the stroke and not at all at the top — the perpendicular distance has gone.",
        ],
      },
      { k: "h", text: "Pushing an inclined rail" },
      {
        k: "bullets",
        items: [
          "A student lifts an inclined rail by pushing on a handle at its end.",
          "A force perpendicular to the rail gives its full size to the moment.",
          "A vertical force on the inclined rail is only partly perpendicular, so its perpendicular component is smaller.",
          "The same moment then needs a greater force.",
          "Therefore, the perpendicular push is always the cheaper one — any other direction needs a greater force for the same moment.",
        ],
      },
      { k: "h", text: "A flagpole held by a wire" },
      {
        k: "bullets",
        items: [
          "A uniform flagpole is hinged to a wall and held up by a wire at an angle.",
          "The pole's weight turns it about the hinge; the wire's tension pulls along the wire.",
          "Only the tension's perpendicular component holds a moment about the hinge.",
          "Taking moments about the hinge leaves the hinge's own force out — it acts through the pivot.",
          "Compare the tension with the wire's breaking value, and write the conclusion.",
          "Therefore, take moments about the hinge — the unknown force there drops out of the equation.",
        ],
      },
      { k: "h", text: "A parasol in the wind" },
      {
        k: "bullets",
        items: [
          "A wind force acts horizontally at the top of a parasol; the weight acts through the centre of the base.",
          "The wind's moment about the edge of the base turns the parasol over.",
          "The weight's moment about the same edge is the maximum restoring moment — $110 \\times 0.22$ in the printed question.",
          "The wind's moment, $14 \\times 1.8$, is greater, so the parasol topples.",
          "As the parasol tilts, the weight's line of action moves towards the edge, so the restoring moment decreases further.",
          "Therefore, once the wind's moment beats the weight's, the toppling never stops — the restoring moment only decreases as it tilts.",
        ],
      },
      { k: "h", text: "A stone on a step" },
      {
        k: "bullets",
        items: [
          "A uniform stone rests on a step with part of its length overhanging.",
          "Its centre of gravity sits at the middle of the stone, which can be beyond the edge of the step.",
          "At the point of lifting, the stone pivots on the edge of the step.",
          "The weight turns one way through the centre of gravity; the applied force turns the other way at the far end.",
          "The minimum force acts at the far end, perpendicular to the stone.",
          "Therefore, take moments about the edge — the weight's small arm against the force's large arm, and the force comes out smallest.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "A cyclist's pedal",
        question:
          "A bicycle pedal is connected to a circular chain-ring by a lever. A person of weight 580 N stands on the pedal, and the lever is at an angle of 24° to the horizontal.\n**(a)** Determine the moment of the person's weight about the pivot. length of lever = 0.21 m (3)\n**(b)** The chain-ring exerts a force F on the chain, and F is proportional to the moment of the weight about the pivot. Explain how F changes as the angle increases from 0° to 90°. No calculation is needed. (2) — *WPH11 October 2024, Q13*",
        steps: [
          "(a) The weight acts vertically, so its component perpendicular to the lever is $W\\cos 24°$.\n$580 \\times \\cos 24° \\times 0.21$",
          "$= 111\\ \\text{N m}$, quoted as ==110 N m== to two significant figures, with the ==N m== unit on the end.",
          "(b) As the angle increases, the perpendicular distance between the weight's line of action and the pivot falls — $\\cos\\theta$ falls from 1 to 0.",
          "So the moment falls, and ==F falls to zero==.",
        ],
        answer: "(a) 110 N m · (b) F falls to zero as the perpendicular distance falls",
        ms: {
          label: "Examiner's report",
          text: "*The most common error was to use incorrect trigonometry. Candidates who used sin instead of cos could still score marking point 2. … A small minority of candidates appeared to have their calculator in radians rather than in degrees. … common errors being Nm⁻¹ or N instead of Nm.*",
        },
      },
      {
        k: "worked",
        title: "A stone on a step",
        question:
          "A uniform rectangular stone rests horizontally on a step, held in equilibrium by a builder applying the minimum force P at the end of the stone above the step. The stone has a weight of 415 N and a length of 0.90 m, and the length beyond the edge of the step is 0.50 m. Calculate the magnitude of P. (3) — *WPH11 January 2023, Q13(b)(ii)*",
        steps: [
          "The stone is uniform, so its centre of gravity sits at its midpoint — 0.45 m from either end, ==0.05 m beyond the step's edge==.",
          "The step's edge is 0.50 m from the overhanging end, so P acts 0.40 m from the edge.",
          "At the point of lifting, the stone pivots on the edge — the weight's moment one way, P's moment the other.\n$415 \\times 0.05 = P \\times 0.40$",
          "$P = \\dfrac{20.8}{0.40} = 52\\ \\text{N}$",
        ],
        answer: "P = 52 N",
        ms: {
          label: "Examiner's report",
          text: "*This question included the challenge to determine the positions of the forces from the geometry of the figure, and many candidates struggled with this. … Students should be encouraged to annotate figures so that distances between the points of action of forces are clearly seen.*",
        },
      },
      {
        k: "worked",
        title: "A flagpole held by a wire",
        question:
          "A uniform, horizontal flagpole of length 1.2 m is connected by a hinge to a wall at position O. An aluminium wire connects the pole to the wall at B, 0.8 m from O, at an angle of 20° to the flagpole. The wire will break if the tension in it exceeds 350 N. Assess whether the wire will break. You should use the principle of moments, taking moments about O. mass of flagpole and flag = 15 kg (3) — *WPH11 October 2020, Q13*",
        steps: [
          "The pole is uniform, so its weight acts at its midpoint, 0.6 m from the hinge.",
          "Moments about O: the weight's moment one way, the tension's ==perpendicular component== the other.\n$15 \\times 9.81 \\times 0.6 = T\\sin 20° \\times 0.8$",
          "$88.3 = 0.274\\,T$, so $T = 323\\ \\text{N}$",
          "$323\\ \\text{N} < 350\\ \\text{N}$, so the wire will ==not== break — the conclusion mark is dependent on the comparison.",
          "The maximum moment the wire could hold is $350 \\times 0.8 \\times \\sin 20° = 95.8\\ \\text{N m} > 88.3\\ \\text{N m}$ — an accepted alternative comparison.",
        ],
        answer: "T = 323 N < 350 N — the wire will not break",
      },
      {
        k: "worked",
        title: "The forearm model",
        question:
          "A student models the forearm holding a ball as a uniform beam hinged at O, with a spring acting as the biceps muscle 4.0 cm from O at an angle of 70° to the beam. The weight of the beam is 15 N acting at its centre; the force of the ball on the beam is 4.5 N acting 9.0 cm from the free end. Determine the magnitude of the tension T in the spring. You will need to estimate the total length of the forearm and hand. (5)\nThen: explain one limitation of modelling the forearm as a uniform beam. (2) — *WPH11 June 2019, Q15*",
        steps: [
          "Estimate the forearm length — ==30 to 50 cm==; take 40 cm as the working value.",
          "The spring's tension acts at 70° to the beam, so its perpendicular component is $T\\sin 70°$.",
          "The ball's force acts 31 cm from the hinge; the beam's weight acts at its centre, 20 cm from the hinge.",
          "Moments about the hinge, balanced.\n$0.04 \\times T\\sin 70° = 0.31 \\times 4.5 + 0.20 \\times 15$",
          "$0.0376\\,T = 1.395 + 3.0$, so $T = 117\\ \\text{N}$ — any value in 85 N to 150 N scores, depending on the length estimated.",
          "The limitation: the forearm is ==not uniform== — its centre of gravity is ==not in the middle==.",
        ],
        answer: "T ≈ 117 N (85–150 N accepted) · limitation: a real forearm is not uniform",
      },
      {
        k: "worked",
        title: "A parasol in the wind",
        question:
          "A large parasol has its centre of gravity vertically above the centre of its base; the base is 0.44 m wide. The weight of the parasol is 110 N.\n**(a)** A horizontal wind force of 14 N acts at a height of 1.80 m. Explain why the parasol will topple. Your answer should include a calculation. (4)\n**(b)** A rope is attached at 1.50 m from the ground, making an angle of 44° to the vertical. The wind force is now 25 N. Determine, by taking moments about the centre of the base, the vertical force that the base exerts on the ground. (5) — *WPH11 October 2021, Q19*",
        steps: [
          "(a) The wind's moment about the edge of the base.\n$14 \\times 1.80 = 25.2\\ \\text{N m}$",
          "The maximum restoring moment from the weight.\n$110 \\times 0.22 = 24.2\\ \\text{N m}$",
          "$25.2 > 24.2$, so the parasol ==topples== — and as it tilts the weight's moment arm only decreases, so the toppling never stops.",
          "(b) The rope's horizontal component must balance the wind's moment about the base centre.\n$T\\sin 44° \\times 1.50 = 25 \\times 1.80$",
          "$1.04\\,T = 45.0$, so $T = 43.2\\ \\text{N}$",
          "The vertical component pulls down alongside the weight.\n$43.2\\cos 44° = 31.1\\ \\text{N}$, and $110 + 31.1 = 141\\ \\text{N}$",
        ],
        answer: "(a) 25.2 N m > 24.2 N m — topples · (b) 141 N",
      },
      {
        k: "worked",
        title: "The bicycle rack",
        question:
          "A bicycle rests on a rail that can rotate about a pivot. A student lifts the rail back to its original position by applying a force F to the handle, perpendicular to the rail.\n**(a)** When the rail is in equilibrium, the principle of moments applies. State what is meant by the principle of moments. (1)\n**(b)** The uniform rail has a length of 1.40 m and a weight of 95 N, acting at its centre. A piston applies a force of 160 N to the rail, 0.37 m from the pivot, at 18° to the rail. The rail is inclined at 42° to the horizontal. Determine the minimum value of F needed to lift the end of the rail off the ground. (5)\n**(c)** The student could have lifted the rail by applying a vertical upwards force to the handle instead. Explain how the minimum vertical force needed is different. (3) — *WPH11 June 2025, Q19*",
        steps: [
          "(a) ==Total clockwise moment about any point = total anticlockwise moment== (in equilibrium).",
          "(b) The piston's perpendicular component.\n$160 \\times \\sin 18° \\times 0.37 = 18.3\\ \\text{N m}$",
          "The weight's moment — the rail is inclined at 42°.\n$95 \\times \\cos 42° \\times 0.70 = 49.4\\ \\text{N m}$",
          "Balance about the pivot, F at the far end.\n$18.3 + F \\times 1.40 = 49.4$",
          "$F = \\dfrac{31.1}{1.40} = 22\\ \\text{N}$",
          "(c) Both pushes must produce the ==same moment== about the pivot.",
          "A vertical force on the inclined rail has a ==smaller perpendicular component== — equivalently, its line of action passes ==closer== to the pivot.",
          "So the vertical force needed is ==greater==.",
        ],
        answer: "(b) F = 22 N · (c) the vertical force must be greater",
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
        text: "A body is in equilibrium when there is ==no resultant force on it== and ==no resultant moment about any point==. Two marks, two sentences.",
      },
      {
        k: "def",
        term: "The principle of moments",
        text: "For a body in equilibrium, the ==total clockwise moment about any point equals the total anticlockwise moment== about that point — or, equivalently, the resultant moment is zero.",
      },
      {
        k: "def",
        term: "Centre of gravity",
        text: "==The point through which the weight of the object may be taken to act==. For a uniform body, that point is its geometric centre — the midpoint of a beam, the centre of a disc.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Clockwise moment = anticlockwise moment is insufficient* (WPH11 October 2025, Q20(a)) — the word ==total==, and the ==in equilibrium== / ==about any point== framing, are required. *Answers such as 'clockwise moment = anticlockwise moment' were often seen, but this was not sufficient to score the second marking point … Many students did not mention forces at all* (WPH11 January 2024, Q18(a)). The equilibrium pair is *resultant force = 0* and *resultant moment = 0* — the word ==resultant== is required.",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "The centre of gravity is ==not== *the point where the weight acts*, *where the weight is concentrated* or *where the mass is concentrated* — the printed wording is *the point where the weight of the object ==may be considered to act==* (WPH11 June 2024, Q7). *It was very common to see answers stating that the weight acts at that point or is concentrated at that point* (WPH11 January 2024, Q18(b)). And *the contention that the weight acts at the centre of gravity, and occasionally that all the mass is concentrated there* (WPH11 January 2023, Q13(a)(ii)) — the weight acts everywhere on the body; the centre of gravity is the average point of action.",
      },
      {
        k: "steps",
        caption: "The moments method",
        items: [
          {
            title: "1 · Choose a pivot",
            text: "Any point works in equilibrium, so choose the one that removes the most unknowns — usually where an unknown force acts — and ==state the pivot clearly==, as the printed scheme accepts *pivot point clearly indicated on diagram*.",
          },
          {
            title: "2 · Mark the centre of gravity",
            text: "For a uniform body the weight acts at its geometric centre — the midpoint of a beam, the centre of a disc — so annotate the distance from the pivot to the centre of gravity before writing any equation.",
          },
          {
            title: "3 · List the forces and their turning directions",
            text: "Each force turns clockwise or anticlockwise about your pivot — or acts through it, with moment zero, which is why you chose it.",
          },
          {
            title: "4 · Write moment = Fx for each",
            text: "Use perpendicular distances only, resolving the angled force or using the angle, as in statement 15.",
          },
          {
            title: "5 · Balance and conclude",
            text: "Σ clockwise = Σ anticlockwise; solve; and if the command word is *deduce*, finish with the explicit comparison and a sentence.",
          },
        ],
      },
      { k: "h", text: "A beam on two supports" },
      {
        k: "bullets",
        items: [
          "A beam rests on two supports, with its own weight at its centre and a load sitting off-centre between them.",
          "Take moments about one support — its own force acts through it and drops out of the equation.",
          "The other support's force comes from the moment equation.",
          "Then the force balance finishes it: the two supports together carry the whole weight.",
          "The support nearer the load carries the greater share.",
          "Therefore, moments split the load between the supports, and the force balance checks the total.",
        ],
      },
      { k: "h", text: "A lorry crossing a bridge" },
      {
        k: "bullets",
        items: [
          "A lorry drives across a bridge supported at its two ends.",
          "As the lorry moves away from one support, its distance from that support increases.",
          "So the lorry's moment about that support increases.",
          "The sum of moments stays zero for equilibrium.",
          "So the far support's moment must increase — and with its distance fixed, its force increases.",
          "Therefore, the load moves as the lorry crosses — the support it moves away from carries more and more of the bridge.",
        ],
      },
      { k: "h", text: "A crane with a counterweight" },
      {
        k: "bullets",
        items: [
          "A crane's beam carries a counterweight on one side of the tower and a load on the other.",
          "The load's moment about the tower turns the beam one way; the counterweight's moment turns it the other.",
          "When the load moves further out, its moment increases, so the counterweight must move further out too.",
          "The beam's own weight acts at its centre of gravity, and its moment counts on the load's side.",
          "The crane topples when the load side's total moment passes the counterweight's maximum.",
          "Therefore, a counterweight buys a longer reach — but the limiting moment is the check, written with both numbers compared.",
        ],
      },
      { k: "h", text: "A loft ladder on a hinged board" },
      {
        k: "bullets",
        items: [
          "A loft ladder hangs from a board hinged to the ceiling.",
          "The ladder's weight turns the board one way about the hinge; the board's own weight turns it the other.",
          "The two moments do not balance — the difference presses the board onto the block beneath it.",
          "The block supplies the missing moment, and the resultant moment is zero.",
          "Therefore, the board stays put because the block, not the hinge, carries the spare moment.",
        ],
      },
      { k: "h", text: "A coat hook on a screw" },
      {
        k: "bullets",
        items: [
          "A coat hook is screwed to a door, with coats hanging from its front edge.",
          "The coats' weight turns the hook about a pivot close to the screw.",
          "The screw's horizontal force on the hook holds the balancing moment.",
          "The screw has a maximum force it can withstand, so there is a maximum number of coats.",
          "Therefore, the deduce question is a moment comparison — the screw's maximum moment against the coats' moment, then the verdict.",
        ],
      },
      { k: "h", text: "A book overhanging a shelf" },
      {
        k: "bullets",
        items: [
          "A book rests on a shelf with part of its length overhanging the end.",
          "Its centre of gravity sits at the middle of the book.",
          "While the centre of gravity stays above the shelf, the shelf's contact forces hold the book up.",
          "Push the book past half its length and the centre of gravity passes the edge of the shelf.",
          "The weight's line of action then misses the shelf completely, and its moment topples the book.",
          "Therefore, a book overhangs exactly half its length before the centre of gravity leaves the shelf — and past that, it must fall.",
        ],
      },
      { k: "h", text: "A dragster on two axles" },
      {
        k: "bullets",
        items: [
          "A dragster stands on two axles, with its centre of gravity between them, nearer the rear.",
          "Take moments about the rear axle: the front axle's reaction and the weight balance.",
          "Take moments about the front axle: the rear axle's reaction and the weight balance.",
          "The axle nearer the centre of gravity carries the greater reaction.",
          "The two reactions together always equal the weight — the force balance again.",
          "Therefore, the centre of gravity's position splits the weight between the axles, and the two moment equations give both reactions.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "A bridge on two supports",
        question:
          "A lorry is crossing a bridge supported by two columns; forces P and Q act on the bridge from the columns, P at end X. The centre of gravity of the bridge is at its centre, and at a particular time the lorry is 35 m from X. The bridge is 120 m long. force from lorry $= 4.2 \\times 10^{5}$ N; weight of bridge $= 9.8 \\times 10^{5}$ N.\n**(a)** Calculate the magnitudes of the forces P and Q. You should take moments about point X. (5)\n**(b)** Explain why force Q increases as the lorry moves across the bridge. (5) — *WPH11 June 2024, Q18*",
        steps: [
          "(a) Moments about X — X's own force acts through the pivot, so it drops out.\n$4.2 \\times 10^{5} \\times 35 + 9.8 \\times 10^{5} \\times 60 = Q \\times 120$",
          "$1.47 \\times 10^{7} + 5.88 \\times 10^{7} = 7.35 \\times 10^{7}\\ \\text{N m}$, so $Q = \\dfrac{7.35 \\times 10^{7}}{120} = 6.1 \\times 10^{5}\\ \\text{N}$",
          "The force balance for P.\n$P + 6.1 \\times 10^{5} = 9.8 \\times 10^{5} + 4.2 \\times 10^{5}$, so $P = 7.9 \\times 10^{5}\\ \\text{N}$",
          "Both answers carry their unit — *Maximum 4 marks if incorrect / no unit with answers*.",
          "(b) The lorry's distance from X increases, so its ==moment about X increases==.",
          "The sum of moments stays zero for equilibrium, so the moment from Q about X increases.",
          "The distance from X to Q stays the same, ==therefore Q increases==.",
        ],
        answer: "(a) $Q = 6.1 \\times 10^{5}$ N · $P = 7.9 \\times 10^{5}$ N · (b) Q increases",
        ms: {
          label: "Examiner's report",
          text: "*Over 40 % scoring no marks. … Some candidates did not realise that this was a question about moments, and instead attempted to answer in terms of Newton's third law, which gained no credit.*",
        },
      },
      {
        k: "worked",
        title: "A loft ladder on a hinge",
        question:
          "A ladder is attached by a rail to a board that is hinged to the ceiling and covers the roof-space opening; a small block prevents the board rotating into the roof space. The combined weight of the board and rail is 50 N, acting 0.45 m from the hinge on the block's side. The ladder weighs 54 N, is uniform, has a total length of 2.70 m, and has 0.85 m of its length on the block's side of the hinge.\n**(a)** Explain why the board and ladder remain in the position shown. (5)\n**(b)** A downward force applied 0.80 m from the hinge rotates the board away from the block. Determine the magnitude of this force. (2) — *WPH11 October 2023, Q15*",
        steps: [
          "The ladder is uniform, so its centre of gravity is at its midpoint — 1.35 m from either end, ==0.50 m on the hinge's other side==.",
          "Clockwise about the hinge: the ladder's weight.\n$54 \\times 0.50 = 27\\ \\text{N m}$",
          "Anticlockwise: the board's weight.\n$50 \\times 0.45 = 22.5\\ \\text{N m}$",
          "$27 > 22.5$, so the assembly presses on the block — ==the block supplies a force and hence a moment about the hinge==, and the resultant moment is zero.",
          "An *explain* question still needs ==the numbers== — the two moments and the comparison are the marks.",
          "(b) The spare moment is $27 - 22.5 = 4.5\\ \\text{N m}$.\n$F = \\dfrac{4.5}{0.80} = 5.6\\ \\text{N}$",
        ],
        answer: "27 vs 22.5 N m — the block holds it · 5.6 N at 0.80 m tips it",
        ms: {
          label: "Examiner's report",
          text: "*It was rare for candidates to appreciate that the block would also cause a moment about the hinge, so only a small fraction of candidates scored all 5 marks on this question. … Some candidates did not attempt calculations in Q15(b)(i), perhaps not realising that in some situations a full explanation does require relevant calculations.*",
        },
      },
      {
        k: "worked",
        title: "A crane and its counterweight",
        question:
          "The diagram shows a crane lifting a load. The beam is uniform with a weight of $3.0 \\times 10^{4}$ N; the counterweight has a weight of $1.1 \\times 10^{5}$ N and sits 8.0 m from the pivot on the far side; the load has a weight of $4.4 \\times 10^{4}$ N. The beam is 30 m long and the pivot is 8.0 m from the counterweight end. Deduce whether the load can be moved to the end of the beam without the crane toppling. (5) — *WPH11 June 2023, Q19(b)(ii)*",
        steps: [
          "Annotate the geometry first — the beam is uniform, so its weight acts 15 m from either end, ==7.0 m from the pivot== on the load's side.",
          "The load's end of the beam sits $30 - 8.0 = 22.0$ m from the pivot.",
          "Balance the moments about the pivot for the ==limiting case== — the counterweight's moment holds against the load plus the beam's own weight.\n$1.1 \\times 10^{5} \\times 8.0 = 3.0 \\times 10^{4} \\times 7.0 + 4.4 \\times 10^{4} \\times x$",
          "$8.8 \\times 10^{5} = 2.1 \\times 10^{5} + 4.4 \\times 10^{4}x$, so $x = \\dfrac{6.7 \\times 10^{5}}{4.4 \\times 10^{4}} = 15.2\\ \\text{m}$",
          "$15.2 < 22.0$, so the crane ==topples== if the load moves to the end — the verdict needs the comparison, in that order.",
        ],
        answer: "no — the limit is 15.2 m and the beam's end is 22.0 m from the pivot",
        ms: {
          label: "Examiner's report",
          text: "*Candidates who annotated their diagrams tend to do better with moment problems than those who do not. … Common errors included assuming that the load was 30 m from the pivot … or the omitting of the CoG moment.*",
        },
      },
      {
        k: "worked",
        title: "The wheelbarrow",
        question:
          "A woman supports a stationary wheelbarrow by exerting an upward force P of 80 N on the handles. An upward force R of 320 N from the ground acts on the wheel. The horizontal distance between the centre of the wheel and the handles is 1.5 m, and the centre of gravity G of the wheelbarrow sits between them, nearer the wheel.\n**(a)** Explain, by considering moments about G, why P is less than R. (3)\n**(b)** Determine the horizontal distance between the centre of gravity of the wheelbarrow and the centre of the wheel. (4) — *WPH11 October 2022, Q13*",
        steps: [
          "(a) The moments about G must balance — the wheel's force one way, the handle's force the other.",
          "The handle is ==further from G than the wheel==.",
          "So the handle's smaller force gives the same moment as the wheel's larger force — P is less than R.",
          "(b) The total weight first: the two upward forces balance it.\n$W = 320 + 80 = 400\\ \\text{N}$",
          "Moments about the wheel's centre, x the distance to G.\n$400x = 80 \\times 1.5$",
          "$x = \\dfrac{120}{400} = 0.30\\ \\text{m}$",
        ],
        answer: "(b) 0.30 m from the wheel's centre",
        ms: {
          label: "Examiner's report",
          text: "*A majority of candidates were able to calculate the distance correctly, but a large number missed a mark by not specifying a pivot point. Any point can be taken as a pivot point, the C of G and the wheel being the obvious ones.*",
        },
      },
      {
        k: "worked",
        title: "The uniform plank",
        question:
          "A uniform plank of length 4.0 m is pivoted 0.90 m from one end. The weight of the plank is 250 N. A person of weight 950 N stands at one end of the plank, and a person of weight 650 N stands a distance x from the pivot so that the plank is in equilibrium.\n**(a)** Add to the diagram to show the forces acting on the plank. (2)\n**(b)** Calculate the distance x. (3) — *WPH11 January 2021, Q11*",
        steps: [
          "(a) Three downward arrows — the two people's weights and the plank's weight at its ==midpoint==.",
          "One upward arrow at the pivot — the reaction force.",
          "(b) The plank's weight acts at its centre, $2.0 - 0.90 = 1.1$ m from the pivot, on the x side.",
          "Moments about the pivot.\n$950 \\times 0.90 = 250 \\times 1.1 + 650 \\times x$",
          "$855 = 275 + 650x$, so $x = \\dfrac{580}{650} = 0.89\\ \\text{m}$",
        ],
        answer: "(b) x = 0.89 m",
      },
      {
        k: "worked",
        title: "The door on two hinges",
        question:
          "A uniform door of width $w = 0.85$ m is supported by two hinges X and Y, a vertical distance $L = 1.60$ m apart. The mass of the door is 14.4 kg, and the weight of the door causes a moment about each hinge.\n**(a)** State the conditions needed for the door to be in equilibrium. (2)\n**(b)** Give the meaning of the term centre of gravity. (1)\n**(c)(i)** Show that the horizontal component of the force of hinge Y on the door is about 40 N. (5)\n**(c)(ii)** The vertical component of each hinge's force on the door is half the door's weight, and hinge Y exerts a force F at an angle θ to the vertical. Determine F and θ. (4)\n**(c)(iii)** An identical door is supported by hinges much closer together. Explain how a smaller value of L affects F and θ. You should consider moments about point X. (4) — *WPH11 January 2024, Q18*",
        steps: [
          "(a) ==No resultant force, and no resultant moment about any point== — two sentences, two marks.",
          "(b) ==The point through which the weight may be taken to act==.",
          "(c)(i) The weight.\n$W = 14.4 \\times 9.81 = 141\\ \\text{N}$",
          "The weight acts at the door's centre, $w/2 = 0.425$ m from the edge; moments about X.\n$141 \\times 0.425 = F_{\\text{horizontal}} \\times 1.60$",
          "$F_{\\text{horizontal}} = \\dfrac{60.0}{1.60} = 37.5\\ \\text{N} \\approx 40\\ \\text{N}$",
          "(c)(ii) The vertical component at each hinge is $141 \\div 2 = 70.5\\ \\text{N}$.\n$\\theta = \\tan^{-1}\\left(\\dfrac{37.5}{70.5}\\right) = 28°$",
          "$F = \\sqrt{37.5^2 + 70.5^2} = 80\\ \\text{N}$",
          "(c)(iii) The weight's moment about X is unchanged, and its arm $w/2$ is unchanged.",
          "With $L$ smaller, the hinge's horizontal force must be ==greater== to hold the same moment.",
          "The vertical component stays half the weight, so ==F increases and θ increases==.",
        ],
        answer: "(c)(i) 37.5 N ≈ 40 N · (c)(ii) F = 80 N at θ = 28° · (c)(iii) F and θ both increase",
        ms: {
          label: "Examiner's report",
          text: "*Many students calculated the complimentary angle, giving 62° instead of 28°. … This was the most challenging question on the paper, with many students struggling to express their answers, and many vague statements which were insufficient to score marks. … Very few students referred to the components of F in their answers.*",
        },
      },
      {
        k: "worked",
        title: "The rice-portion balance",
        question:
          "A balance is formed by a beam suspended from a string. A dish is hung from the beam, and when the dish contains one portion of rice the balance is in equilibrium. The centre of gravity of the beam is marked, 8.0 cm from the string on one side, and the dish hangs 25.0 cm from the string on the other side. weight of beam = 3.1 N; weight of empty dish = 0.64 N.\n**(a)** State the conditions needed for an object to be in equilibrium. (2)\n**(b)** The dish is moved along the beam so that its horizontal distance from the string is 7.0 cm, and rice is added until the balance is again in equilibrium. Deduce whether the dish now contains 3 portions of rice. You should include a calculation of the weight of 1 portion of rice. (6) — *WPH11 January 2025, Q16*",
        steps: [
          "(a) ==Resultant force zero, resultant moment about any point zero==.",
          "(b) The beam's moment first.\n$3.1 \\times 0.08 = 0.248\\ \\text{N m}$",
          "With the dish at 0.25 m, the dish plus rice balance it.\n$0.248 = W_{\\text{dish+rice}} \\times 0.25$, so $W_{\\text{dish+rice}} = 0.992\\ \\text{N}$",
          "One portion of rice.\n$W_{\\text{portion}} = 0.992 - 0.64 = 0.352\\ \\text{N}$",
          "With the dish at 0.07 m, the portions that balance the beam.\n$0.248 = (n \\times 0.352 + 0.64) \\times 0.07$",
          "$n = \\dfrac{0.248/0.07 - 0.64}{0.352} = 8.2$ portions — ==not 3==, and the conclusion is written with the comparison.",
        ],
        answer: "one portion 0.352 N · 8.2 portions, not 3",
        ms: {
          label: "Examiner's report",
          text: "*Some candidates forgot to subtract the weight of the dish from the weight of the dish and rice. As with all 'deduce' type questions, a final conclusion was needed which some candidates did not include.*",
        },
      },
      {
        k: "worked",
        title: "The coat hook",
        question:
          "A coat hook is attached to a smooth door by a screw. Three forces act on the hook when a coat is hung from it: a vertical force from the screw, a horizontal force from the screw, and the weight of the coat; the weight of the hook may be neglected.\n**(a)** Add a labelled arrow to the diagram to show the additional force required for the coat hook to be in equilibrium. (2)\n**(b)** If too many coats are hung on the hook, it will rotate and pull the screw out of the door. Point P is the pivot; the screw's forces act 0.9 cm from P, and the coats' weight acts 2.5 cm from P. The maximum horizontal force from the screw is 150 N, and the mass of one coat is 2.6 kg. Deduce whether a person could hang more than two of these coats from the hook. (4) — *WPH11 June 2022, Q13*",
        steps: [
          "(a) The missing force is the ==normal contact force of the door on the hook==, acting horizontally to the left, from the wall — drawn below the screw, not lower than the last point of contact.",
          "(b) The screw's maximum moment about P.\n$150 \\times 0.009 = 1.35\\ \\text{N m}$",
          "One coat's weight.\n$W = 2.6 \\times 9.81 = 25.5\\ \\text{N}$",
          "The moment two coats hold.\n$2 \\times 25.5 \\times 0.025 = 1.28\\ \\text{N m} < 1.35\\ \\text{N m}$",
          "The maximum weight of coats: $\\dfrac{1.35}{0.025} = 54\\ \\text{N}$, and $54 \\div 25.5 = 2.12$ coats.",
          "$2.12 > 2$, so yes — a person could hang more than two coats, but not three.",
        ],
        answer: "yes — 2.12 coats' worth of weight fits, three coats' does not",
        ms: {
          label: "Examiner's report",
          text: "*Many candidates did not obtain the final mark because they showed that the hook could support two coats but did not show that three coats were too many.*",
        },
      },
      {
        k: "worked",
        title: "The shelf brackets",
        question:
          "Two brackets, A and B, support a shelf of length 1.2 m. Bracket A is positioned 0.15 m from the left-hand end of the shelf, and a book is placed 0.35 m from the left-hand end. The normal contact forces of the brackets on the shelf are equal in magnitude. weight of book = 8.5 N; weight of shelf = 14 N.\n**(a)** Determine the distance of bracket B from the left-hand end of the shelf. (5)\n**(b)** Bracket B is moved closer to the left-hand end of the shelf. Explain the effect on the magnitude of the normal contact force of bracket B on the shelf. (2) — *WPH11 January 2019, Q13*",
        steps: [
          "(a) The two bracket forces together carry the whole weight.\n$F_A + F_B = 8.5 + 14 = 22.5\\ \\text{N}$",
          "The forces are equal, so each is $11.25\\ \\text{N}$.",
          "The shelf's weight acts at its midpoint, 0.60 m from the left end; the book at 0.35 m.",
          "Moments about the left end, bracket B at distance x.\n$11.25 \\times 0.15 + 11.25 \\times x = 8.5 \\times 0.35 + 14 \\times 0.60$",
          "$11.25x = 2.975 + 8.4 - 1.6875 = 9.69$, so $x = 0.86\\ \\text{m}$",
          "(b) The bracket's own moment about the left end must stay the same for equilibrium.",
          "So with a smaller distance from the end, the force must ==increase==.",
        ],
        answer: "(a) 0.86 m from the left-hand end · (b) the force increases",
      },
      {
        k: "worked",
        title: "The dragster",
        question:
          "A dragster and its driver have a combined weight of $1.23 \\times 10^{4}$ N, with the centre of gravity 1.80 m in front of the rear axle. The front axle is 6.00 m from the rear axle, so the centre of gravity sits 4.20 m from the front axle. Calculate the reaction forces $R_1$ (front) and $R_2$ (rear) when the dragster is stationary and not accelerating. (3) — *WPH11 June 2021, Q16(a)*",
        steps: [
          "Take moments about the rear axle — the rear axle's force acts through it and drops out.\n$R_1 \\times 6.00 = 1.23 \\times 10^{4} \\times 1.80$",
          "$R_1 = \\dfrac{2.21 \\times 10^{4}}{6.00} = 3.7\\ \\text{kN}$",
          "Take moments about the front axle for the other reaction.\n$R_2 \\times 6.00 = 1.23 \\times 10^{4} \\times 4.20$",
          "$R_2 = 8.6\\ \\text{kN}$ — the rear axle carries more, because the centre of gravity is nearer to it.",
        ],
        answer: "$R_1 = 3.7$ kN · $R_2 = 8.6$ kN",
      },
    ],
  },
];

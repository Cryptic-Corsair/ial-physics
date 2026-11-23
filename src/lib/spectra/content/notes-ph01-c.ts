import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 2 Moments and momentum (statements 12–16)
   The worked-example register — see the Part A header: every
   scenario is a worked example card with the question, the paper,
   the marking points as steps and the answer; the ropes (def
   cards, eq bands, method panels, figures, tables) stay outside.
   Mark scheme wordings and examiner report lines quoted verbatim
   from the papers in research/wph11; no session labels outside
   the cards. Statements 12–14 moved here from the old Part B when
   the mechanics note split into three topics: the force-pair
   rules teach straight into momentum, exactly as the papers pair
   them.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01_C: SpecSection[] = [
  {
    spec: "12",
    statement:
      "know and understand Newton's third law of motion and know the properties of pairs of forces in an interaction between two bodies",
    title: "Newton's third law — the force-pair rules",
    blocks: [
      {
        k: "def",
        term: "Newton's third law pair",
        text: "When body A exerts a force on body B, body B exerts a force on body A that is ==equal in magnitude, opposite in direction, of the same type==, ==acts on the other body==, and ==acts at the same time== — the pair forms together and disappears together. Two forces failing any one property are not a pair.",
      },
      {
        k: "table",
        caption: "The five properties of a third-law pair",
        head: ["Property", "The wording that loses the mark"],
        rows: [
          ["Equal magnitude", "*every action has an equal and opposite reaction* names no magnitudes — say what is equal to what"],
          ["Opposite directions", "'the same but opposite force' is ambiguous — same type? same size?"],
          ["Same type of force", "weight (gravitational) vs normal contact force are different types"],
          ["Act on different bodies", "both acting on the same object disqualifies the pair"],
          ["Act at the same time", "one force cannot act without the other — *N3 pairs must act at the same time* (WPH11 June 2023, Q5)"],
        ],
      },
      {
        k: "worked",
        title: "Identifying the pair",
        question:
          "A cable car hangs in equilibrium from a cable. Which force forms a Newton's third law pair with the weight of the cable car?  A air resistance on the cable car · B gravitational pull of the cable car on the Earth · C upthrust of displaced air on the cable car · D normal contact force of the cable car on the cable — *WPH11 October 2024, Q4*",
        steps: [
          "The weight of a cable car is the Earth pulling the car down, ==gravitationally==.",
          "Its third-law partner must be the equal, opposite, gravitational force on the *other* body, the car pulling the Earth upwards — option B.",
          "Every contact-force distractor fails the ==same type== test — *air resistance / upthrust / normal contact force is not a gravitational force*.",
          "Weight and normal contact force fail twice at once — they act on the ==same body== and they are of ==different types==.",
        ],
        answer: "B — the gravitational pull of the cable car on the Earth",
      },
      {
        k: "worked",
        title: "A rocket accelerating",
        question:
          "The descent module's rocket motor ejects hot gases at high velocity. Explain why the velocity of the descent module changes when the rocket motor is used. You should refer to Newton's laws of motion. (3) — *WPH11 January 2023, Q16*",
        steps: [
          "The motor exerts a force on the exhaust gases; by ==Newton's third law== the gases exert an equal, opposite force on the motor.",
          "There is a resultant force on the module, so by ==Newton's second law== it accelerates.",
          "==Name both laws== — the question asked for Newton's laws, and *without mention of the names of the laws only one mark could be scored at best*.",
        ],
        answer: "N3 pair motor and gases, resultant force on the module, N2 acceleration",
      },
      {
        k: "worked",
        title: "An athlete jumping",
        question:
          "An athlete of weight 680 N jumps. He exerts a force of 890 N on the ground as he jumps. Explain why he accelerates upwards. You should refer to Newton's third law. (3) — *WPH11 October 2024, Q15*",
        steps: [
          "By Newton's third law the ground exerts an ==upwards== force of 890 N on the athlete.",
          "890 N > 680 N, so there is a ==resultant force upwards== — the printed scheme also allows the subtraction, *890 N − 680 N = 210 N*.",
          "So he accelerates upwards — three printed marking points, each needing its own sentence: *by Newton's third law, the ground exerts an upwards force of 890 N on the athlete*; *the upwards force is greater than the athlete's weight*; *there is a resultant force (upwards on the athlete)*.",
        ],
        answer: "890 N up > 680 N weight — resultant force upwards, so he accelerates",
      },
      {
        k: "worked",
        title: "Two magnetic gliders",
        question:
          "Two gliders A and B, of equal mass, were initially stationary on an air track; A was then pushed gently towards B. A magnet was attached to each glider, and the gliders collided and stuck together. Explain why the force of attraction between the two magnets did not affect this demonstration. (2) — *WPH11 October 2023, Q12*",
        steps: [
          "The magnetic forces on the two gliders are ==equal in magnitude and opposite in direction== — a third-law pair.",
          "The gliders exert the forces ==on each other==, so the forces are ==internal to the system== — the resultant force on the system is zero, and the demonstration (the collision) is unaffected.",
          "Each glider's own momentum does change — *the velocity of one glider increases and the velocity of the other decreases (by the same amount)* — but the two changes are equal and opposite, so the system's total momentum stays as it was and the collision is unaffected. Where an answer argued from the resultant force, it had to name the system — *To gain credit for an explanation involving the resultant force, it therefore had to be clear that the answer was referring to the resultant force on the system*.",
          "*Examiner's report:* *Many of those who did not score the mark gave a statement describing Newton's third law, but did not describe how this applied to the gliders.* · *There were also a significant minority of answers that referred to conservation of momentum and did not mention forces at all.*",
        ],
        answer: "internal third-law pair — equal, opposite, acting on each other",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Every action has an equal and opposite reaction* on its own was not enough to score marking point 1 (WPH11 June 2024, Q15) — the scheme wants the two forces themselves, written out in full. *Some answers referred to the forces cancelling out, rather than stating that the forces were equal in size and opposite in direction* (WPH11 October 2023, Q12), so write the two forces out every time, each with its owner and its direction. The same-type mark then wants *an account of what the natures of the forces are* (WPH11 October 2022, Q18) — one force is gravitational, the other a contact force.",
      },
    ],
  },
  {
    spec: "13",
    statement: "understand that momentum is defined as p = mv",
    title: "Momentum",
    blocks: [
      {
        k: "def",
        term: "Momentum",
        text: "The product of mass and velocity, **p = mv** — a ==vector== in the direction of the velocity, measured in ==kg m s⁻¹== (equivalently N s).",
      },
      {
        k: "eq",
        eq: "p = mv        1 N s = 1 kg m s⁻¹",
        note: "Because p is a vector, opposite directions carry opposite signs. In free fall the only force on an object is its weight, so its momentum grows in proportion to the time fallen, **Δp = mg × t** — a heavier object gains momentum faster ==because the force on it is larger==, even though its acceleration is the same.",
      },
      {
        k: "bullets",
        items: [
          "The unit is examined as a multiple-choice item — kg m s⁻¹ and N s are both creditable.",
          "The vector test pairs momentum with work done — momentum has a direction, kinetic energy does not.",
          "A change-of-momentum question is a subtraction with signs — an object losing Δp gives that momentum to a stationary object, which leaves with the same Δp = mv.",
          "Momenta at right angles combine exactly like force components — subtract the opposite pair on one axis, then Pythagoras with the perpendicular one.\n15 000 kg m s⁻¹ east with 14 500 kg m s⁻¹ west leaves 500 kg m s⁻¹ east, and a 200 kg m s⁻¹ north component makes the resultant √(500² + 200²) ≈ 540 kg m s⁻¹.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Writing mass × speed for the definition loses the mark — momentum is mass × ==velocity==. The unit slips just as often; kg m s⁻² is a newton, and N m⁻¹ is stiffness.",
      },
    ],
  },
  {
    spec: "14",
    statement:
      "know the principle of conservation of linear momentum, understand how to relate this to Newton's laws of motion and understand how to apply this to problems in one dimension",
    title: "Conservation of momentum",
    blocks: [
      {
        k: "def",
        term: "The principle of conservation of linear momentum",
        text: "==Total momentum before a collision = total momentum after it==, ==provided no external resultant force acts on the system== (equivalently, in a closed system). Both halves earn a mark each — the *sum* and the *condition*. *Candidates typically failed to score the second mark by neglecting to state the condition for momentum conservation* (WPH11 October 2022, Q16).",
      },
      {
        k: "eq",
        eq: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂        (one direction positive, the other negative)",
        note: "Assign + and − before substituting, and state your positive direction. Momenta of objects moving in opposite directions ==subtract==.",
      },
      {
        k: "worked",
        title: "Two gliders stick together",
        question:
          "Glider A of mass 0.15 kg moves to the right at 0.32 m s⁻¹, and glider B of mass 0.20 kg moves to the left at 0.11 m s⁻¹. The gliders collide and stick together. (a) State how Newton's third law applies during the collision. (1) (b) A student predicts that the gliders will move to the left after the collision. Deduce whether the student is correct. (3) — *WPH11 January 2025, Q14*",
        steps: [
          "(a) The forces during the collision are ==equal in magnitude and opposite in direction==, and each acts ==on the other glider== — a third-law pair.",
          "(b) Right positive: total momentum = 0.15 × 0.32 − 0.20 × 0.11 = 0.048 − 0.022 = ==+0.026 kg m s⁻¹==.",
          "Positive, so the combined gliders move ==right== — the prediction is ==not correct==.",
          "The final mark is ==dependent on a valid calculation== — state the direction *and* the verdict on the prediction, not just the number.",
          "*Examiner's report:* *a common error was to use positive values of momentum for both gliders.* · *A number of candidates either did not state the final direction of motion, or did not give a conclusion about whether the prediction was correct.*",
        ],
        answer: "+0.026 kg m s⁻¹ to the right — prediction not correct",
      },
      {
        k: "worked",
        title: "A spaceship's modules separate",
        question:
          "A spaceship's modules separate before atmospheric entry. Before separation the total momentum is zero. The orbital module (1350 kg) moves off at 0.82 m s⁻¹ and the service module (2100 kg) moves in the opposite direction at 0.58 m s⁻¹. Determine the velocity of the descent module (2950 kg) after separation. (4) — *WPH11 January 2023, Q16*",
        steps: [
          "Before separation the total momentum is zero — *the idea of initial momentum being zero seemed to be a new concept to many candidates*.",
          "Take the orbital module's direction as positive and keep the total at zero: 1350 × 0.82 + 2950 × v − 2100 × 0.58 = 0.",
          "1107 + 2950v − 1218 = 0, so v = 111 ÷ 2950 = **0.038 m s⁻¹** (the printed value is 0.04 m s⁻¹).",
          "The value alone is one mark — the ==direction== (towards the orbital module) is the final mark, dependent on the calculation. *Candidates needed to show that they understood the significance of the minus sign* — write it, not imply it.",
        ],
        answer: "0.038 m s⁻¹ towards the orbital module",
      },
      {
        k: "worked",
        title: "Inelastic collisions",
        question:
          "Skater B of mass 60 kg moving at 7.5 m s⁻¹ collides with skater A of mass 65 kg moving directly ahead at 5.5 m s⁻¹. B locks his arms around A and they move on together at 6.2 m s⁻¹. (a) Deduce whether momentum is conserved in this collision. (3) (b) The kinetic energy after the collision is much less than the kinetic energy before the collision, so the collision is inelastic. Explain the decrease in kinetic energy. (2) — *WPH11 October 2022, Q16*",
        steps: [
          "Before: 65 × 5.5 + 60 × 7.5 = 357.5 + 450 = **807.5 kg m s⁻¹**. After: (65 + 60) × 6.2 = **775 kg m s⁻¹** — *use of p = mv* is the first marking point.",
          "775 ≠ 807.5, so momentum was ==not conserved== — the ==comparison== between the two totals is the marking point, not either number alone.",
          "In an inelastic collision the kinetic energy after is less than before — the forces between the bodies ==did work==, and that work was not recovered, so it transferred energy to thermal energy and other stores.",
          "Momentum still conserves exactly in a closed system — the energy accounting does not affect the momentum accounting. When a question asks for an explanation *in terms of momentum*, every sentence is a momentum sentence.",
          "*Examiner's report:* *no marks can be easily awarded without mentioning work being done. Candidates overall simply stated that energy was transformed without telling us how.*",
        ],
        answer: "807.5 then 775 kg m s⁻¹ — not conserved · KE falls, work done by the contact forces",
      },
    ],
  },
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
        eq: "moment = Fx        moment = F cos θ × d  (force at θ to the lever)",
        note: "When the force acts at an angle, x is the perpendicular distance from the pivot to the force's line of action — equivalently, use the component of the force perpendicular to the lever. Use whichever geometry the diagram gives you.",
      },
      {
        k: "figure",
        kind: "ph-moments",
        caption:
          "A beam pivoted at one end — each force turns the beam about the pivot, and each moment is force × perpendicular distance. The weight's moment acts through the centre of gravity, at the beam's midpoint.",
      },
      { k: "h", text: "Perpendicular distances" },
      {
        k: "bullets",
        items: [
          "A uniform body's weight acts at its ==midpoint== — and for a stone resting on a step with part of its length overhanging, the centre of gravity can sit ==beyond the step's edge==, which is what makes the stone topple.",
          "At the point of lifting, the body pivots on the edge — take moments about the edge, with the weight turning one way and the applied force the other.",
          "Annotate the figure first — the distances between the points of action of the forces are the whole geometry of the question.",
          "**Minimum force** — the force is smallest where its perpendicular distance from the pivot is largest, at the far end, applied ==perpendicular== to the lever.",
          "Check the calculator is in ==degrees== — left in radians, every trigonometric value changes.",
          "State the direction of turning — clockwise or anticlockwise — whenever the question asks for the moment.\nThe direction can reverse during a motion, as a bridge's weight passes over its pivot.",
          "Pushing at a new angle changes the perpendicular component — pushing vertically on a rail instead of perpendicular to it gives a smaller perpendicular component, so ==the force needed is greater== for the same moment.",
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
          "*Examiner's report:* *The most common error was to use incorrect trigonometry. Candidates who used sin instead of cos could still score marking point 2.* · *A small minority of candidates appeared to have their calculator in radians rather than in degrees.* · the unit rarely went missing but often came out wrong — *common errors being Nm⁻¹ or N instead of Nm*.",
        ],
        answer: "(a) 110 N m · (b) F falls to zero as the perpendicular distance falls",
      },
      {
        k: "worked",
        title: "A stone on a step",
        question:
          "A uniform rectangular stone rests horizontally on a step, held in equilibrium by a builder applying the minimum force P at the end of the stone above the step. The stone has a weight of 415 N and a length of 0.90 m, and the length beyond the edge of the step is 0.50 m. Calculate the magnitude of P. (3) — *WPH11 January 2023, Q13*",
        steps: [
          "The stone is uniform, so its centre of gravity sits at its midpoint — 0.45 m from either end, ==0.05 m beyond the step's edge==. The step edge is 0.50 m from the overhanging end, so P acts 0.40 m from the edge.",
          "At the point of lifting the stone pivots on the edge — the weight's moment = 415 × 0.05 = 20.8 N m one way, and P × 0.40 the other. *Use of moment of a force = Fx* and *applies principle of moments* are the first two marks.",
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
        text: "A body is in equilibrium when there is ==no resultant force on it== ==and no resultant moment about any point==. Two marks, two sentences. *Answers such as 'clockwise moment = anticlockwise moment' were often seen, but this was not sufficient to score the second marking point* (WPH11 January 2024, Q18).",
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
            text: "Any point works in equilibrium, so choose the one that removes the most unknowns — usually where an unknown force acts. ==State the pivot clearly== — the printed scheme accepts *pivot point clearly indicated on diagram* (WPH11 October 2022, Q13).",
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
          "Both answers carry their unit — the printed cap is *Maximum 4 marks if incorrect / no unit with answers* (WPH11 June 2024, Q18).",
        ],
        answer: "Q = 6.1 × 10⁵ N · P = 7.9 × 10⁵ N",
      },
      {
        k: "worked",
        title: "A loft ladder on a hinge",
        question:
          "A ladder is attached by a rail to a board that is hinged to the ceiling and covers the roof-space opening; a small block prevents the board rotating into the roof space. The combined weight of the board and rail is 50 N, acting 0.45 m from the hinge on the block's side. The ladder weighs 54 N, is uniform, and has 0.85 m of its length on the block's side of the hinge. (a) Explain why the board and ladder remain in the position shown. (5) (b) A downward force applied 0.80 m from the hinge rotates the board away from the block. Determine the magnitude of this force. (2) — *WPH11 October 2023, Q15*",
        steps: [
          "The ladder's centre of gravity is at its midpoint — 1.35 m from its left end, which is ==0.50 m on the hinge's other side==. *Determines distance from hinge to centre of gravity of ladder* is the first marking point.",
          "Clockwise about the hinge: 54 × 0.50 = 27 N m. Anticlockwise: 50 × 0.45 = 22.5 N m.",
          "27 N m > 22.5 N m, so the assembly presses on the block — ==the block supplies a force and hence a moment about the hinge==, so the resultant moment is zero and the board stays put.",
          "An *explain* question still needs ==the numbers== — the two computed moments and the comparison are the marks. *Some candidates did not attempt calculations in Q15(b)(i), perhaps not realising that in some situations a full explanation does require relevant calculations*.",
          "(b) The spare moment = 27 − 22.5 = 4.5 N m, so F = 4.5 ÷ 0.80 = **5.6 N** — just enough to lift the board off the block.",
          "*Examiner's report:* *It was rare for candidates to appreciate that the block would also cause a moment about the hinge, so only a small fraction of candidates scored all 5 marks on this question.* · *A majority of candidates were able to calculate the distance correctly, but a large number missed a mark by not specifying a pivot point* (WPH11 October 2022, Q13).",
        ],
        answer: "27 vs 22.5 N m — the block holds it · 5.6 N at 0.80 m tips it",
      },
      {
        k: "worked",
        title: "A crane and its counterweight",
        question:
          "The diagram shows a crane lifting a load. The beam is uniform with a weight of 3.0 × 10⁴ N; the counterweight has a weight of 1.1 × 10⁵ N and sits 8.0 m from the pivot on the far side; the load has a weight of 4.4 × 10⁴ N. The beam is 30 m long and the pivot is 8.0 m from the counterweight end. Deduce whether the load can be moved to the end of the beam without the crane toppling. (5) — *WPH11 June 2023, Q19*",
        steps: [
          "Annotate the geometry first; the report found that *candidates who annotated their diagrams tend to do better with moment problems than those who do not*. The recorded slips were ==assuming the load was 30 m from the pivot== and ==omitting the centre-of-gravity moment==.",
          "The beam is uniform, so its weight acts 15 m from either end — 7.0 m from the pivot on the load's side. The load's end of the beam sits 30 − 8.0 = 22.0 m from the pivot.",
          "Balance the moments about the pivot for the ==limiting case== — 1.1 × 10⁵ × 8.0 = 8.8 × 10⁵ N m holds the beam up; the load plus the beam's own weight pull it down.",
          "Limiting distance: (8.8 × 10⁵ − 3.0 × 10⁴ × 7.0) ÷ 4.4 × 10⁴ = 6.7 × 10⁵ ÷ 4.4 × 10⁴ = **15.2 m**.",
          "15.2 < 22.0, so the crane ==topples== if the load moves to the end of the beam — the verdict needs the comparison, in that order.",
        ],
        answer: "no — the limit is 15.2 m and the beam's end is 22.0 m from the pivot",
      },
    ],
  },
];

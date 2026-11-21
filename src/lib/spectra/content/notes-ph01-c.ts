import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Mechanics · Part C (statements 15–22)
   The formula-first register, as approved for t02 — see the
   Part A header: eq bands lead, one bullet = one marking point,
   scenarios as their own headed groups, mark scheme wordings and
   examiner report lines quoted verbatim in notes, rejected
   wordings in "Not accepted" notes, no session citations.
   This part closes the note with "The marking rules that never
   change", which sits at the end of the LAST section (the doc
   outro is walked for anchors but never rendered).
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
      { k: "h", text: "A cyclist's pedal" },
      {
        k: "bullets",
        items: [
          "A cyclist of weight 580 N stands on a pedal attached to a crank 0.21 m long, at 24° to the horizontal.",
          "The weight acts vertically, so its component perpendicular to the crank is W cos 24°.",
          "Moment = 580 × cos 24° × 0.21 = **110 N m** about the pedal's pivot.",
          "sin used instead of cos still ==scores the equation mark== — only the value is lost; and a unit written as N m⁻¹ or bare N scores nothing.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*The most common error was to use incorrect trigonometry. Candidates who used sin instead of cos could still score the equation mark.* · *A small minority of candidates appeared to have their calculator in radians rather than in degrees.*",
      },
      { k: "h", text: "A stone on a step" },
      {
        k: "bullets",
        items: [
          "A uniform stone of weight 415 N and length 0.90 m rests on a step, with 0.50 m of its length overhanging the edge; a builder applies the minimum downward force P at the overhanging end.",
          "The stone is uniform, so its centre of gravity sits at its midpoint: 0.45 m from either end — 0.05 m ==beyond== the step's edge.",
          "At the point of lifting the stone pivots on the edge: anticlockwise moment = 415 × 0.05 = 20.8 N m; clockwise moment = P × 0.40.",
          "P × 0.40 = 20.8, so **P = 52 N**.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Many candidates struggled with this. Students should be encouraged to annotate figures so that distances between the points of action of forces are clearly seen.*",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "The unit written as N m⁻¹ or bare N instead of ==N m==. And the overhanging geometry skipped — the 0.05 m beyond the edge is where the whole question lives.",
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
      { k: "h", text: "A bridge on two supports" },
      {
        k: "bullets",
        items: [
          "A uniform bridge deck of weight 9.8 × 10⁵ N spans 120 m between supports X and Q; a load of 4.2 × 10⁵ N sits 35 m from X.",
          "Take moments about X — X's own force acts through the pivot, so it drops out of the equation.",
          "Clockwise: 9.8 × 10⁵ × 60 + 4.2 × 10⁵ × 35 = 7.35 × 10⁷ N m (the deck's weight acts at its ==midpoint==).",
          "Q × 120 = 7.35 × 10⁷, so **Q = 6.1 × 10⁵ N**.",
          "The force balance finishes it: P~X~ + 6.1 × 10⁵ = 9.8 × 10⁵ + 4.2 × 10⁵, so **P~X~ = 7.9 × 10⁵ N**.",
          "When the load moves towards Q, its moment about X grows, so Q ==increases== and P~X~ falls — the sum of moments stays zero for equilibrium.",
          "Both answers carry their unit — the printed scheme penalises an incorrect or missing unit by ==four marks== on this question.",
        ],
      },
      { k: "h", text: "A loft ladder on a hinge" },
      {
        k: "bullets",
        items: [
          "A board hinged to the ceiling carries a ladder on a rail; a small block stops the board rotating. The board and rail weigh 50 N, acting 0.45 m on the block's side of the hinge; the ladder weighs 54 N with 0.85 m of its length on the block's side.",
          "The ladder's centre of gravity is at its midpoint: 1.35 m from its left end, which is ==0.50 m on the hinge's other side==.",
          "Clockwise about the hinge: 54 × 0.50 = 27 N m. Anticlockwise: 50 × 0.45 = 22.5 N m.",
          "27 N m > 22.5 N m, so the assembly presses on the block — the ==block supplies the balancing moment==, and that is why it stays put.",
          "An *explain* question still needs ==the numbers==: the two computed moments and the comparison are the marks.",
          "A downward force of 5.6 N applied 0.80 m from the hinge adds 4.5 N m anticlockwise and just rotates the board off the block.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*It was rare for candidates to appreciate that the block would also cause a moment about the hinge, so only a small fraction of candidates scored all five marks on this question.* · *Some candidates did not attempt calculations in (b)(i), perhaps not realising that in some situations a full explanation does require relevant calculations.* · *A majority were able to calculate the distance correctly, but a large number missed a mark by not specifying a pivot point. Any point can be taken as a pivot point, the centre of gravity and the wheel being the obvious ones.*",
      },
      { k: "h", text: "A crane and its counterweight" },
      {
        k: "bullets",
        items: [
          "A crane's counterweight sits 11 m on the hinge's far side; the question asks how far out the load can be moved before the crane topples.",
          "Balance the moments about the pivot for the ==limiting case==, with the counterweight's moment on the other side.",
          "The worked balance gives a maximum load distance of 15.2 m; the beam's end sits 22.0 m from the pivot.",
          "15.2 < 22.0, so the crane ==topples== if the load moves to the end of the beam — the verdict needs the comparison, in that order.",
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
      { k: "h", text: "A box pulled by a rope" },
      {
        k: "bullets",
        items: [
          "A box is pulled 5 m along the ground by a rope inclined at 40° to the horizontal, tension 30 N.",
          "ΔW = F cos 40° × d = 30 × 0.766 × 5 = **115 J**.",
          "The rejected options are built from the slips: the bare F × d (150 J), the sin version (96 J), and the bare ==force component== 23 N offered as a work.",
        ],
      },
      { k: "h", text: "A cyclist climbing a hill" },
      {
        k: "bullets",
        items: [
          "A cyclist rides up a 4.0° slope at constant speed, exerting a constant force of 150 N along the slope for 215 m; the mass of cyclist and bicycle is 90 kg.",
          "The force is ==already along== the slope, so (a) ΔW = FΔs = 150 × 215 = 3.2 × 10⁴ J — no cosine anywhere.",
          "The height gained: Δh = 215 × sin 4.0° = 15.0 m, so the work against gravity = 90 × 9.81 × 15.0 = 1.32 × 10⁴ J.",
          "Total work = work against gravity + work against air resistance, so the air resistance takes **1.9 × 10⁴ J**.",
          "One assumption is always available: the only significant forces are ==gravity and air resistance== — friction in the bicycle's bearings is negligible.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*A common mistake was to multiply the distance by a cosine or a sine of the angle.* · *Some candidates calculated the change in g.p.e. and left that as a final answer.* · *Many students decided that there should be no friction between the bicycle and the road, not realising that that would mean the road was too slippery for the bicycle to make any progress whatsoever.*",
      },
      { k: "h", text: "A truck and an escape lane" },
      {
        k: "bullets",
        items: [
          "A truck enters an escape lane with kinetic energy 8.0 × 10⁶ J; the sand exerts an average resistive force of 3.5 × 10⁵ N.",
          "The kinetic energy lost = the work done by the resistive force, so Δs = ΔW ÷ F = 8.0 × 10⁶ ÷ 3.5 × 10⁵ ≈ **23 m**.",
          "The same equivalence appears wherever a resistive force removes kinetic energy — the change in kinetic energy ==is== the work done.",
          "The increase in gravitational potential energy of a lifting machine is the work it does ==against== the force of gravity — that is what mgΔh is.",
          "The area under a force–displacement graph is the work done — the same statement 32 uses for force–extension graphs.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*The majority did not pick up on the idea that the change in kinetic energy is equivalent to the work done by the resistive force.*",
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
          "Double the landing speed and the kinetic energy ==quadruples==, so the struck object could rise four times as far — *the height gained does not double*.",
          "Double the kinetic energy and the new speed is √2 × the old one — the square root undoes the square.",
          "Equal kinetic energies for two very different masses put the speeds in the ==inverse ratio of the square roots of the masses==: a particle 1/2000 the mass moves √2000 times faster.",
          "Worked chain: an athlete of weight 680 N carrying 409 J of kinetic energy has m = 680 ÷ 9.81 = 69.3 kg, and then v = √(2 × 409 ÷ 69.3) = 3.44 m s⁻¹ ≈ **3.4 m s⁻¹** — the mass conversion and the equation are marking points before the value.",
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
        note: "The vertical drop is the geometry step the papers examine: straight pipes 350 m long inclined at 55° carry water down a ==vertical== drop of 350 × sin 55° ≈ 287 m, not 350 m.",
      },
      { k: "h", text: "A hydroelectric station" },
      {
        k: "bullets",
        items: [
          "Water flows down straight pipes of length 350 m inclined at 55° to the horizontal; each minute, each pipe delivers 1700 m³ of water of density 1100 kg m⁻³.",
          "Mass per minute: m = ρV = 1100 × 1700 = 1.87 × 10⁶ kg.",
          "Vertical drop: Δh = 350 × sin 55° = **287 m** — the vertical height, not the pipe length.",
          "Energy per minute: ΔEgrav = mgΔh = 1.87 × 10⁶ × 9.81 × 287 ≈ 5.3 × 10⁹ J.",
          "Power: P = E ÷ t = 5.3 × 10⁹ ÷ 60 ≈ **88 MW** per pipe — a second route runs through the exit speed and ½mv², and reaches the same power.",
          "With four identical pipes the useful output is ==4 × 88 MW==; forgetting to multiply loses the output, and treating 4 × 88 MW as the gross figure loses the efficiency question that follows.",
        ],
      },
      { k: "h", text: "A train on an incline" },
      {
        k: "bullets",
        items: [
          "A train of mass 1.7 × 10⁶ kg climbs at constant speed through a height of 25 m in 35 s; the engine's output power is 20 MW.",
          "ΔEgrav = mgΔh = 1.7 × 10⁶ × 9.81 × 25 = **4.2 × 10⁸ J** — computed 4.17 × 10⁸, so it is ==rounded to 420 × 10⁶==, not truncated to 410 × 10⁶.",
          "The energy supplied in 35 s: P × t = 20 × 10⁶ × 35 = 7.0 × 10⁸ J.",
          "Work done against resistive forces = 7.0 × 10⁸ − 4.2 × 10⁸ = **2.8 × 10⁸ J** — the climb at constant speed splits the engine's output between the height gain and the resistances.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*A small proportion of candidates truncated their calculated answer from 417 × 10⁶ to 410 × 10⁶ instead of correctly rounding it to 420 × 10⁶.* · To score the second mark, *the answer needed to be given correctly to at least one more significant figure than the 'show that' value given in the question.*",
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
        text: "Energy cannot be created or destroyed — only ==transferred between stores== (kinetic, gravitational, elastic, thermal…). In any real situation some energy is dissipated, usually as work done against resistive forces; the totals must still balance.",
      },
      {
        k: "eq",
        eq: "mgΔh = ½mv²        ΔEgrav = ΔEel        Ek lost = work done by resistive forces        total in = useful out + dissipated",
        note: "When the mass appears on both sides of a chain it cancels: the speed at the bottom of a frictionless drop is √(2gΔh), ==whatever the mass==.",
      },
      { k: "h", text: "A curved slide" },
      {
        k: "bullets",
        items: [
          "A slide's gradient varies, so the acceleration varies — the equations of motion need ==constant acceleration==, so the slide needs the energy route instead.",
          "The energy route instead: all the gravitational potential energy becomes kinetic — mgΔh = ½mv², so v = √(2 × 9.81 × 1.7) ≈ **5.8 m s⁻¹** for a 1.7 m slide.",
          "A second slide of the same height but a shorter path, carrying a heavier child, gives ==the same speed==: v = √(2gΔh) contains no mass and no path length — only Δh matters.",
          "Do not import drag and friction into an answer when the question says resistive forces are ignored.",
        ],
      },
      { k: "h", text: "A bungee jump" },
      {
        k: "bullets",
        items: [
          "A student of mass 65 kg jumps on a rope of original length 17 m and stiffness 250 N m⁻¹; the river is reached if the rope stretches to 35 m in total.",
          "Energy released by the jump: ΔEgrav = mgΔh = 65 × 9.81 × 35 ≈ 22 300 J.",
          "Energy the rope can store by then: F = kΔx = 250 × 18 = 4500 N, and ΔEel = ½FΔx = ½ × 4500 × 18 = **40 500 J**.",
          "40 500 J > 22 300 J, so ==the student stops short of the river== — the verdict is the final marking point.",
          "The common wrong route — using F = kΔx with the ==weight== to find the equilibrium position — still scores the Hooke's-law marking point, but not the comparison.",
        ],
      },
      { k: "h", text: "A skydiver's energy chain" },
      {
        k: "bullets",
        items: [
          "The gravitational potential energy ==decreases throughout== the fall.",
          "While accelerating, the kinetic energy ==increases== — and work is done against air resistance at every stage.",
          "At terminal velocity the kinetic energy is constant, so ==all the lost gravitational potential energy is dissipated== by work done against the drag.",
          "Name the force doing the work and the store the energy lands in — that naming is the marking point.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The printed chain for the skydiver: *Egrav decreases (throughout)*; *while accelerating, Ek increases*; *and work is done against air resistance*; *at terminal velocity (Ek is constant and) all ΔEgrav is dissipated (due to work done against air resistance)*.",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Energy was transformed* with no mechanism — the reports record that candidates *simply stated that energy was transformed without telling us how*, and the marks need ==work done by forces== and a ==named store==. Drag or friction appearing in a question that ignores resistive forces. And an energy input computed as the bare kinetic-energy loss when the body was also rising — the gravitational gain comes off first.",
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
      { k: "h", text: "A boat at constant speed" },
      {
        k: "bullets",
        items: [
          "A boat travelling at constant (terminal) velocity has constant kinetic energy — the engine's work goes into ==pushing the water aside==, at the rate P = F × v.",
          "Worked chain: a forward force of 5.5 kN at a terminal velocity of 4.8 m s⁻¹ gives P = 5500 × 4.8 = **2.6 × 10⁴ W**.",
          "Calculating the kinetic energy of the boat is the wrong route — the question is about the ==rate of working==, not the stored energy.",
        ],
      },
      { k: "h", text: "An exercise machine's display" },
      {
        k: "bullets",
        items: [
          "The cable of an exercise machine lifts a 150 N weight by 0.25 m on each pull; the user pulls and releases 90 times in 120 s, and the machine displays an average power of 35 W.",
          "Work per pull: ΔW = FΔs = 150 × 0.25 = 37.5 J.",
          "Total work: 90 × 37.5 = 3375 J in 120 s, so P = 3375 ÷ 120 = **28 W**.",
          "28 W ≠ 35 W, so ==the display is not consistent== — the comparison is the final marking point.",
          "Working ==backwards== from 35 W — to the time, the count, the force or the distance — reaches the same verdict.",
          "Use the force ==given in the question part==, not a force carried over from an earlier part with different conditions.",
        ],
      },
      { k: "h", text: "A motor lifting a load" },
      {
        k: "bullets",
        items: [
          "A time from a power: t = mgΔh ÷ P — a motor of output power 700 kW lifting 50 000 kg through 25 m takes 50 000 × 9.81 × 25 ÷ 700 000 ≈ **18 s**.",
          "The rejected options omit ==g== or mishandle the ==kilo-== prefix in the power.",
        ],
      },
      { k: "h", text: "An escalator's input power" },
      {
        k: "bullets",
        items: [
          "An escalator raises a person's gravitational potential energy by 5000 J in 42 s, with efficiency 0.63.",
          "Useful output power = 5000 ÷ 42 ≈ 119 W; efficiency = output ÷ input, so the ==input== power = 5000 ÷ (42 × 0.63) ≈ **190 W**.",
          "The rejected options invert the ratio, multiply by the efficiency instead of dividing, or jumble the units — the same three slips every efficiency multiple-choice item is built from.",
        ],
      },
      { k: "h", text: "A BMX track" },
      {
        k: "bullets",
        items: [
          "Accelerating on the flat: with a constant driving force, P = Fv with a growing v — the useful power output ==increases==.",
          "Climbing at constant speed: P = mgv — constant, set by the weight and the climb rate.",
          "Airborne with no contact force: the useful power output is ==zero== — nothing is being pushed.",
          "The same rate-of-transfer logic runs through all three stages: useful power output = the rate of useful energy transfer.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Many candidates attempted to calculate the kinetic energy of the boat, which is irrelevant.* · *Some candidates did not read the question carefully enough, and used the force from the earlier part instead of the weight given in this question.*",
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
        note: "The data sheet prints both, with the words — the marks are in deciding ==which number is the useful output== and ==which the total input==. An efficiency above 1 (100%) means the accounting is wrong.",
      },
      { k: "h", text: "Efficiency calculations" },
      {
        k: "bullets",
        items: [
          "**Input from output**: input = output ÷ efficiency — the escalator above gives 5000 ÷ (42 × 0.63) ≈ 190 W; multiplying by the efficiency instead is the rejected option.",
          "**Dissipated power**: the waste = (1 − efficiency) × the ==total input== — using the useful output here gives the wrong waste.",
          "**Power-station accounting**: the total input = the useful output + the waste — the waste does not go in the numerator.",
          "**A net input**: a car braking while climbing loses kinetic energy but gains height — the energy available to charge the battery = ΔEk − ΔEgrav, and the efficiency = the charge delivered ÷ that net input.",
          "Worked net input: ΔEk = ½ × 1800 × 14² = 176 000 J and ΔEgrav = 1800 × 9.81 × 0.76 ≈ 13 400 J, so the input = 162 600 J and the efficiency = 45 000 ÷ 162 600 = **0.28** — only about a quarter of candidates scored this in full.",
          "In percentage form the ==% symbol is required==; as a decimal it is a plain number between 0 and 1.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*It was far less common for candidates to determine that the total energy input to the battery was the change in kinetic energy minus the change in gravitational potential energy, so only about a quarter of all candidates managed to gain full credit.*",
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

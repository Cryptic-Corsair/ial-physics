import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Mechanics · Part B (statements 8–14)
   The formula-first register, as approved for t02 — see the
   Part A header: eq bands lead, one bullet = one marking point,
   scenarios as their own headed groups, mark scheme wordings and
   examiner report lines quoted verbatim in notes, rejected
   wordings in "Not accepted" notes, no session citations.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01_B: SpecSection[] = [
  {
    spec: "8",
    statement:
      "be able to draw and interpret free-body force diagrams to represent forces on a particle or on an extended but rigid body using the concept of centre of gravity of an extended body",
    title: "Free-body diagrams and centre of gravity",
    blocks: [
      {
        k: "def",
        term: "Free-body force diagram",
        text: "A diagram showing ==only the forces acting on the one chosen object== — never the forces it exerts on anything else. Every arrow starts on the body; each is labelled with the ==force it represents== (weight, tension, normal contact force, drag); arrows have ==lengths proportional to the magnitudes==.",
      },
      {
        k: "def",
        term: "Centre of gravity",
        text: "The point through which the ==weight of an object may be taken to act==. The mark scheme wording is *may be taken to act* (or *is considered to act*), because the mass is spread through the whole body, not concentrated at that point.",
      },
      {
        k: "figure",
        kind: "ph-freebody",
        caption:
          "A block held stationary on a slope: weight from the centre of gravity, normal contact force perpendicular to the surface, drag along it. Three forces, three directions, no others.",
      },
      { k: "h", text: "An engine pushing a truck" },
      {
        k: "bullets",
        items: [
          "An engine pushes a truck along horizontal rails at constant velocity, exerting a force of 1.2 × 10⁵ N on the truck.",
          "Constant velocity means the resultant force on the engine is zero, so the horizontal forces must balance.",
          "By ==Newton's third law== the truck pushes back on the engine with 1.2 × 10⁵ N, to the left.",
          "The rails push the engine forwards with 1.5 × 10⁵ N, to the right.",
          "The balance is short by 0.3 × 10⁵ N to the left, so the diagram is completed by a drag force of 3.0 × 10⁴ N to the left.",
          "The arrows are drawn so that the total length to the left ==equals== the length to the right — the printed scheme measures the balance ==to within 2 mm==.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "Force from truck to the left · air resistance to the left [*do not accept 'viscous drag'*] · force from rails to the right · *total length of arrows towards the left equals length of arrow to the right [to within 2 mm using measuring tool]*.",
      },
      { k: "h", text: "A ball falling at terminal velocity" },
      {
        k: "bullets",
        items: [
          "A ball bearing falls through a liquid at terminal velocity with the drag force already drawn, upwards.",
          "Two arrows complete the diagram: upthrust upwards and weight downwards, ==both starting from the ball's centre==.",
          "At terminal velocity the three forces balance, so the weight arrow's length = the drag arrow's length + the upthrust arrow's length.",
        ],
      },
      { k: "h", text: "The diagram when the object accelerates" },
      {
        k: "bullets",
        items: [
          "An object moving through a fluid has upthrust 90 N upwards and weight 49 N downwards; its mass is 5.0 kg and it accelerates upwards at 4.0 m s⁻².",
          "The diagram is ==not== in equilibrium, so the arrows are drawn deliberately unequal: ΣF = ma gives 5.0 × 4.0 = 20 N upwards.",
          "The balance 90 − 49 − drag = 20 gives ==drag = 21 N downwards== — the printed options are built from omitting one of the three forces or the ma term.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*The arrows in a free-body force diagram should have lengths proportional to the magnitudes of the forces. This was very rarely seen.* · *Some candidates drew three arrows, including an arrow representing drag. This prevented any marks from being scored.* · *A sizeable minority of candidates labelled their weight arrow with a 'G', which is not acceptable as an abbreviation for weight.*",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*G* as the label on the weight arrow. Extra arrows on a body in equilibrium — a floating body has exactly two forces. Arrow lengths that do not match the force sizes — the proportionality is a marking point of its own.",
      },
    ],
  },
  {
    spec: "9",
    statement:
      "be able to use the equation ΣF = ma, and understand how to use this equation in situations where m is constant (Newton's second law of motion), including Newton's first law of motion where a = 0, objects at rest or travelling at constant velocity. Use of the term 'terminal velocity' is expected",
    title: "ΣF = ma — Newton's second law, the first law, and terminal velocity",
    blocks: [
      {
        k: "def",
        term: "Newton's first law",
        text: "A body at rest stays at rest, and a body moving with constant velocity keeps that velocity, ==unless a resultant force acts on it==. Constant velocity — including terminal velocity — always means **ΣF = 0**: forces may be present, but they cancel.",
      },
      {
        k: "def",
        term: "Newton's second law",
        text: "For constant mass, the resultant force = mass × acceleration, **ΣF = ma**, with the acceleration ==in the direction of the resultant force==. The equation is printed on the data sheet; the examined skill is ==identifying the resultant==.",
      },
      {
        k: "eq",
        eq: "ΣF = ma        a = 0 means ΣF = 0        P − W = ma  (push upwards)        W − U − D = ma  (falling through a fluid)",
        note: "Write the balance for the actual direction of motion before substituting. Thrust, weight, drag and tension are the ==individual forces==; ΣF is their sum, and only the sum is multiplied by m.",
      },
      {
        k: "bullets",
        items: [
          "Treating the thrust of an engine as the resultant ignores the weight and the drag that act alongside it.",
          "ΣF = ma applies to the ==whole system==: a car plus its passengers accelerates as one body, so the total mass comes from ΣF ÷ a.",
        ],
      },
      { k: "h", text: "A trampolinist's push" },
      {
        k: "bullets",
        items: [
          "A trampolinist of mass 58 kg leaves the trampoline with an upward acceleration of 14.2 m s⁻².",
          "Her weight first: W = mg = 58 × 9.81 = 569 N.",
          "Newton's second law with up positive: P − W = ma, so P = (58 × 14.2) + 569.",
          "P = **1.4 × 10³ N** — the push must ==cancel the weight and then accelerate her==; subtracting the weight from the resultant instead stops at two of the four marks.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Many candidates subtracted the weight from the resultant force instead of adding it to find the upward force, scoring only two of the four available marks.*",
      },
      { k: "h", text: "A rocket lifting off" },
      {
        k: "bullets",
        items: [
          "A rocket of mass 5.0 × 10⁶ kg lifts off with total engine thrust 7.3 × 10⁷ N.",
          "W = mg = 5.0 × 10⁶ × 9.81 = 4.9 × 10⁷ N — the thrust is ==not== the resultant.",
          "ΣF = 7.3 × 10⁷ − 4.9 × 10⁷ = 2.4 × 10⁷ N, so a = ΣF ÷ m = **4.8 m s⁻²**.",
          "As fuel burns the mass (and the weight) falls while the thrust stays constant, so the acceleration ==increases== — the increase of a is the answer, not a restatement that thrust beats weight.",
        ],
      },
      { k: "h", text: "A car and its passengers" },
      {
        k: "bullets",
        items: [
          "A car accelerates at 0.230 m s⁻² when the resultant force on it is 460 N.",
          "ΣF = ma gives the total mass: 460 ÷ 0.230 = 2000 kg.",
          "The passengers' mass = 2000 − 1850 = **150 kg** — the question asks for the people, not the whole car.",
        ],
      },
      { k: "h", text: "Terminal velocity" },
      {
        k: "steps",
        caption: "The terminal-velocity chain",
        items: [
          {
            title: "1 · Start",
            text: "Name the forces and which is larger: initially there is a resultant upward force (or downward, for a falling object) — and initially there is no drag.",
          },
          {
            title: "2 · Accelerate",
            text: "The object accelerates in the direction of the resultant — its velocity increases.",
          },
          {
            title: "3 · Drag grows",
            text: "As the velocity increases, the drag force on the object increases.",
          },
          {
            title: "4 · Resultant falls",
            text: "The resultant force decreases, so the acceleration decreases — and the velocity is ==still increasing==, just more slowly.",
          },
          {
            title: "5 · Balance",
            text: "Eventually the resultant force is zero — the upthrust + drag = the weight (falling) or the upthrust = the weight + the drag (rising). Say it as an equation of the actual forces.",
          },
          {
            title: "6 · Terminal",
            text: "The object continues to move at constant velocity — its ==terminal velocity==, by Newton's first law, named.",
          },
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The printed chain for a released balloon: *initially there is a resultant upward force*; *balloon accelerates (upwards)*; *downward air resistance force, initially zero, increases as velocity increases (U and W are constant)*; *resultant upward force decreases so acceleration decreases*; *eventually resultant force is zero, or upthrust = weight + drag*; *balloon continues to move upwards at constant velocity (terminal velocity)*. The same six steps answer the rising or falling version — the forces swap roles, the stages do not.",
      },
      {
        k: "figure",
        kind: "ph-terminal",
        caption:
          "The v–t signature of terminal velocity: gradient g at the start (drag negligible), the gradient decaying as drag grows, then a horizontal line when the forces balance.",
      },
      { k: "h", text: "Two masses over a pulley" },
      {
        k: "bullets",
        items: [
          "Treat the two masses as ==one system==: the resultant force on it is (m₂ − m₁)g and the total mass is m₁ + m₂.",
          "**a = (m₂ − m₁)g ÷ (m₁ + m₂)** — for m₁ = m₂ the acceleration is zero and both sides of the balance hold.",
        ],
      },
      { k: "h", text: "A bungee jumper below the equilibrium point" },
      {
        k: "bullets",
        items: [
          "At the equilibrium position the rope's tension = the jumper's weight, so the acceleration there is ==zero==.",
          "Below it the tension beats the weight, so the resultant acts ==upwards== and the jumper decelerates to rest at the bottom.",
          "The acceleration is therefore ==largest just below the equilibrium point==, not there and not at the bottom.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*It was reasonably common for candidates to think that there would be maximum acceleration at the equilibrium point, with zero acceleration when the student was at the lowest point of the bungee jump.* · *Many candidates described the energy changes of the student, which is not sufficient to explain changes to acceleration.*",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Energy stories in a forces question: *there were no marks available for discussions of energy*. And the acceleration/velocity confusion: when the acceleration decreases the velocity ==still increases==; when the acceleration is zero the velocity is constant, not zero.",
      },
    ],
  },
  {
    spec: "10",
    statement: "be able to use the equations for gravitational field strength g = F/m and weight W = mg",
    title: "Weight and gravitational field strength",
    blocks: [
      {
        k: "def",
        term: "Gravitational field strength",
        text: "The ==weight per unit mass==, **g = F ÷ m**, measured in N kg⁻¹. Near the Earth's surface g = 9.81 N kg⁻¹ — the same number, and the same physics, as the acceleration of free fall 9.81 m s⁻².",
      },
      {
        k: "eq",
        eq: "W = mg        g = F/m        g = 9.81 N kg⁻¹ = 9.81 m s⁻²",
        note: "W = mg is the first step of longer chains — rocket, balloon, crane, lift and terminal-velocity questions all begin with the weight. Use ==9.81== (9.8 is accepted); g = 10 loses a mark, once per paper.",
      },
      {
        k: "bullets",
        items: [
          "When a question gives a weight and asks for anything involving mass, the conversion m = W ÷ g is a marking point — write it, even mid-chain.",
          "Worked chain: a weight of 680 N gives m = 680 ÷ 9.81 = 69.3 kg, and that mass then feeds Ek = ½mv².",
          "Worked chain: a resultant force of 4800 N accelerating a boat at 0.31 m s⁻² gives m = 4800 ÷ 0.31 ≈ 15 500 kg, and then W = mg ≈ 1.5 × 10⁵ N — the weight asked for at the end of the chain, in newtons.",
          "On another planet g appears through the acceleration, not as 9.81 — on Mars (a = 0.38g) the landing speed after the same fall is √0.38 ≈ 0.62 of the Earth value.",
          "The two units describe the same quantity: 9.81 N kg⁻¹ and 9.81 m s⁻² are equally creditable.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Acceleration per unit mass* or *energy per unit mass* as the definition — the field strength is the ==weight== per unit mass. The weight's unit written as kg instead of N. And stopping at the mass when the question asks for the weight.",
      },
    ],
  },
  {
    spec: "11",
    statement: "CORE PRACTICAL 1: Determine the acceleration of a freely-falling object",
    title: "Core Practical 1 — the acceleration of free fall",
    blocks: [
      {
        k: "p",
        text: "Three methods appear across the papers — ==strobe photography==, ==timing a fall with light gates==, and ==plotting s against t²== — and all three end in the same place: g from a gradient. s = ½gt² (u = 0) is the equation behind every version: s is proportional to t², so the graph is a straight line through the origin whose gradient is ==g ÷ 2==, and **g = 2 × gradient**.",
      },
      {
        k: "steps",
        caption: "The strobe-photograph method",
        items: [
          {
            title: "Drop and flash",
            text: "A ball falls from rest beside a metre rule while a strobe flashes at a constant known interval; each flash photographs the ball at its instantaneous position. Measure the fall distances s₁, s₂, s₃… between successive images.",
          },
          {
            title: "Plot s against t²",
            text: "s = ½gt² with u = 0 — compare with y = mx: a straight line through the origin whose gradient is ½g. The comparison to y = mx + c is a marking point of its own.",
          },
          {
            title: "Double the gradient",
            text: "Gradient × 2 = g. A line through (0.060 s², 0.30 m) has gradient 0.30 ÷ 0.060 = 5.0 m s⁻² per s², so g = **10.0 m s⁻²** (printed range 9.8 to 10.1).",
          },
        ],
      },
      {
        k: "eq",
        eq: "s = ½gt²  (u = 0)        gradient of s against t² = g ÷ 2        v² = u² + 2as  (light-gate version)",
        note: "The gradient needs a ==large triangle== drawn on the line — more than half its length — and the doubling step written out: the line's gradient is g ÷ 2, not g.",
      },
      { k: "h", text: "The light-gate method" },
      {
        k: "bullets",
        items: [
          "A cylinder is dropped through a vertical tube with a light gate near the top and another near the bottom.",
          "Each gate times the cylinder passing, so the speed at a gate = the ==length of the cylinder== ÷ the time through the gate — the ==other measurement== the question asks for.",
          "Worked chain: speeds 1.39 m s⁻¹ and 2.96 m s⁻¹ with the gates 355 mm apart — convert first, 355 mm = 0.355 m.",
          "No time needed anywhere: **a = (v² − u²) ÷ (2s)** = (2.96² − 1.39²) ÷ (2 × 0.355) = **9.6 m s⁻²**.",
          "Plotted the other way, the gradient of v² against s gives ==2a==.",
        ],
      },
      { k: "h", text: "The stopwatch method" },
      {
        k: "bullets",
        items: [
          "A ball dropped from rest at a known height and timed with a stopwatch over a short fall carries a ==large percentage uncertainty in t==: reaction time is a large fraction of a short time.",
          "Since g = 2s ÷ t², a percentage uncertainty in t counts ==twice== in the answer for g.",
          "The light-gate version removes the reaction time entirely — that is the comparison the question usually wants.",
        ],
      },
      {
        k: "table",
        caption: "Error sources — and which way they push g",
        head: ["Error", "Effect on measured g"],
        rows: [
          ["Ball already moving when the timer starts", "g too large (u > 0 assumed 0)"],
          ["Distance overestimated (measured to the wrong mark)", "g too large (s too large with t unchanged)"],
          ["Human reaction time on a stopwatch", "t too large, so g = 2s ÷ t² too small — and the % uncertainty in t is doubled in the answer"],
          ["Air resistance and upthrust present", "g too small (a < g)"],
          ["Flash duration blurs the image", "uncertainty in s; a shorter flash gives less blur"],
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Explaining how a graph of the results should be used to determine a value is a skill which candidates need to practise.* · *It was pleasing to see the number of candidates correctly determining the gradient. Some candidates did not then double this value.* · *A small proportion of candidates gave an answer of g = 9.81 m s⁻² but showed no evidence of any working to support their answer. These candidates gained no credit.*",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Quoting g = 9.81 m s⁻² with no working — the value must come from the experiment, and the report quoted above scores such answers no credit. And the gradient left ==undoubled==: the line's gradient is g ÷ 2, not g.",
      },
    ],
  },
  {
    spec: "12",
    statement:
      "know and understand Newton's third law of motion and know the properties of pairs of forces in an interaction between two bodies",
    title: "Newton's third law — the force-pair rules",
    blocks: [
      {
        k: "def",
        term: "Newton's third law pair",
        text: "When body A exerts a force on body B, body B exerts a force on body A that is ==equal in magnitude, opposite in direction, of the same type==, and ==acts on the other body==. Two forces failing any one property are not a pair.",
      },
      {
        k: "table",
        caption: "The four properties of a third-law pair",
        head: ["Property", "The wording that loses the mark"],
        rows: [
          ["Equal magnitude", "'equal and opposite reaction' — name the magnitudes, not the slogan"],
          ["Opposite directions", "'the same but opposite force' is ambiguous — same type? same size?"],
          ["Same type of force", "weight (gravitational) vs normal contact force are different types"],
          ["Act on different bodies", "both acting on the same object disqualifies the pair"],
        ],
      },
      { k: "h", text: "Identifying the pair" },
      {
        k: "bullets",
        items: [
          "The weight of a cable car is the Earth pulling the car down, ==gravitationally==.",
          "Its third-law partner must be the equal, opposite, gravitational force on the *other* body: the car pulling the Earth upwards.",
          "Every contact-force distractor — drag, upthrust, the normal force from the cable — fails the ==same type== test.",
          "Weight and normal contact force fail twice at once: they act on the ==same body== and they are of ==different types==.",
        ],
      },
      { k: "h", text: "A rocket accelerating" },
      {
        k: "bullets",
        items: [
          "The motor exerts a force on the exhaust gases; by ==Newton's third law== the gases exert an equal, opposite force on the motor.",
          "There is a resultant force on the module, so by ==Newton's second law== it accelerates.",
          "==Name both laws== — the question asked for Newton's laws, and the report scores answers without the names at one mark at best.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*This was a question that specifically asked for Newton's laws to be named, so without mention of the names of the laws only one mark could be scored at best.*",
      },
      { k: "h", text: "An athlete jumping" },
      {
        k: "bullets",
        items: [
          "An athlete of weight 680 N exerts a force of 890 N on the ground as he jumps.",
          "By Newton's third law the ground exerts an ==upwards== force of 890 N on the athlete.",
          "890 N > 680 N, so there is a ==resultant force upwards== and he accelerates — three printed marking points, each needing its own sentence.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*By Newton's third law, the ground exerts an upwards force of 890 N on the athlete*; *the upwards force is greater than the athlete's weight*; *so there is a resultant force (upwards on the athlete)*.",
      },
      { k: "h", text: "Two magnetic gliders" },
      {
        k: "bullets",
        items: [
          "Two gliders repel as they pass: the magnetic forces on them are ==equal in magnitude and opposite in direction== — a third-law pair.",
          "The gliders exert the forces ==on each other==, so the forces on the pair are internal: the ==momentum of the system== is unchanged.",
          "The answer must say *on the system* — the momentum of each glider does change.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Many of those who did not score the mark gave a statement describing Newton's third law, but did not describe how this applied to the gliders.* · *There were also a significant minority of answers that referred to conservation of momentum and did not mention forces at all.*",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "The slogan — *every action has an equal and opposite reaction* — on its own: the report records that it *was not enough to score the marking point*. *The forces cancel out* written for *equal in size and opposite in direction*. And naming the properties without saying what each force actually is: the reports wanted an account of *the natures of the forces* — one force is gravitational, the other a contact force.",
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
        note: "Because p is a vector, opposite directions carry opposite signs — the convention that makes the conservation calculations work. In free fall the only force on an object is its weight, so each second of falling adds **Δp = mg × t** to its momentum: a heavier object gains momentum faster ==because the force on it is larger==, even though its acceleration is the same.",
      },
      {
        k: "bullets",
        items: [
          "The unit is examined as a multiple-choice item: kg m s⁻¹ and N s are both creditable.",
          "The vector test pairs momentum with work done — momentum has a direction, kinetic energy does not.",
          "A change-of-momentum question is a subtraction with signs: an object losing Δp gives that momentum to a stationary object, which leaves with the same Δp = mv.",
          "Momenta at right angles combine exactly like force components: subtract the opposite pair on one axis, then Pythagoras with the perpendicular one.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Mass × speed* written for the definition — momentum is mass × ==velocity==, and the direction is what the conservation principle leans on. The unit written as kg m s⁻² (that is a newton) or N m⁻¹.",
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
        text: "==Total momentum before a collision = total momentum after it==, ==provided no external resultant force acts on the system== (equivalently: in a closed system). Both halves earn a mark each — the *sum* and the *condition*, and the reports ask for both in words.",
      },
      {
        k: "eq",
        eq: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂        (one direction positive, the other negative)",
        note: "Assign + and − before substituting, and state your positive direction. Momenta of objects moving in opposite directions ==subtract==.",
      },
      { k: "h", text: "Two gliders stick together" },
      {
        k: "bullets",
        items: [
          "Glider A (0.15 kg) moves right at 0.32 m s⁻¹; glider B (0.20 kg) moves left at 0.11 m s⁻¹; they stick together.",
          "Right positive: total momentum = 0.15 × 0.32 − 0.20 × 0.11 = 0.048 − 0.022 = **+0.026 kg m s⁻¹**.",
          "Positive, so the combined gliders move ==right== — a student's prediction that they move left is ==not correct==.",
          "The final mark is ==dependent on a valid calculation==: state the direction *and* the verdict on the prediction, not just the number.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*A common error was to use positive values of momentum for both gliders.* · *A number of candidates either did not state the final direction of motion, or did not give a conclusion about whether the prediction was correct.*",
      },
      { k: "h", text: "A spaceship's modules separate" },
      {
        k: "bullets",
        items: [
          "Before separation the total momentum is zero; the orbital module (1350 kg) moves off at 0.82 m s⁻¹ and the service module (2100 kg) at 0.58 m s⁻¹ in the opposite direction.",
          "Take the orbital module's direction as positive and keep the total at zero: 1350 × 0.82 + 2950 × v − 2100 × 0.58 = 0.",
          "1107 + 2950v − 1218 = 0, so v = 111 ÷ 2950 = **0.038 m s⁻¹**.",
          "The value alone is one mark — the ==direction== (towards the orbital module) is the final mark, dependent on the calculation.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*The idea of initial momentum being zero seemed to be a new concept to many candidates* — and the minus sign has to be shown, not implied.",
      },
      { k: "h", text: "Inelastic collisions" },
      {
        k: "bullets",
        items: [
          "Skater B (60 kg, 7.5 m s⁻¹) catches up with skater A (65 kg, 5.5 m s⁻¹) and they move on together at 6.2 m s⁻¹.",
          "Before: 65 × 5.5 + 60 × 7.5 = 808 kg m s⁻¹. After: (65 + 60) × 6.2 = 775 kg m s⁻¹.",
          "775 ≠ 808, so momentum was ==not conserved== — the ==comparison== between the two totals is the marking point, not either number alone.",
          "In an inelastic collision the kinetic energy after is less than before: the forces between the bodies ==did work==, and that work transferred energy to thermal energy and other stores.",
          "Momentum still conserves exactly — the energy accounting does not affect the momentum accounting.",
          "When a question asks for an explanation *in terms of momentum*, every sentence must be a momentum sentence.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*No marks can be easily awarded without mentioning work being done. Candidates overall simply stated that energy was transformed without telling us how.* · *Many candidates gave a very good explanation in terms of Newton's laws but gained no credit as the question specifically asked for an explanation in terms of momentum.*",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*The momentum of the skater* written for ==the total momentum of the system== — the principle is about the sum. Assuming two bodies ==stick together== when the question never says so. And *energy is lost* — the energy is transferred by work done to a named store; nothing is lost.",
      },
    ],
  },
];

import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces, motion and energy · Part B
   Spec statements 8–14: free-body diagrams, Newton's laws and
   terminal velocity, weight and g, Core Practical 1, momentum
   and its conservation.

   The approved physics register — see the Part A header and the
   handover §3: formula first, one mark per bullet, symbols in the
   sentences, scenarios as their own headed groups, Not accepted
   for rejected wordings, no arrows, no session citations.
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
        text: "A diagram showing ==only the forces acting on one chosen object== — never the forces it exerts on anything else. Four rules decide every mark: every arrow starts on the body; each is labelled with the ==force it represents== (weight, tension, normal contact force, friction, drag); arrows have ==lengths proportional to the magnitudes==; and for an extended body the weight is drawn acting at the ==centre of gravity==.",
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
          "A block held stationary on a slope: weight from the centre of gravity, normal contact force perpendicular to the surface, friction along it. Three forces, three directions, no others.",
      },
      { k: "h", text: "Completing a free-body diagram at constant velocity" },
      {
        k: "bullets",
        items: [
          "Constant velocity means the resultant force is zero, so the forces balance in every direction — count what is drawn before drawing anything new.",
          "An engine pushing a truck forwards experiences, by ==Newton's third law==, an equal backwards force from the truck on the engine.",
          "Whatever the horizontal balance still needs — for example a backwards drag arrow — is drawn to the size that makes the leftward and rightward lengths match.",
          "Draw the arrows with lengths that balance: the mark scheme compares the lengths *to within 2 mm*.",
        ],
      },
      { k: "h", text: "Completing a free-body diagram at terminal velocity" },
      {
        k: "bullets",
        items: [
          "A ball bearing falling through liquid at terminal velocity has exactly ==three== forces on it: drag (drawn for you) and the two you add — upthrust upwards and weight downwards.",
          "Both new arrows start at the ball's centre, and the weight arrow's length = the drag length + the upthrust length, because the three forces balance at terminal velocity.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*G* written as the label on the weight arrow. Extra arrows on a body in equilibrium — a floating object has exactly two forces, and the examiner report states that a third (a drag arrow) *prevented any marks from being scored*. Arrow lengths not proportional to the force sizes: *this was very rarely seen*, says the report, and it is a marking point in its own right.",
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
        text: "An object at rest stays at rest, and an object moving with constant velocity keeps that velocity, ==unless a resultant force acts on it==. Constant velocity — including terminal velocity — always means **ΣF = 0**: forces may be present, but they cancel.",
      },
      {
        k: "def",
        term: "Newton's second law",
        text: "For constant mass, the resultant force = mass × acceleration, **ΣF = ma**, with the acceleration ==in the direction of the resultant force==. The examiner reports repeat one complaint: answers that discuss *a force* instead of ==the resultant force on the object==.",
      },
      {
        k: "eq",
        eq: "ΣF = ma        a = 0 means ΣF = 0        P − W = ma  (push upwards)        W − U − D = ma  (falling through fluid)",
        note: "Write the force balance for the actual direction of motion before substituting. The data sheet prints ΣF = ma — identifying the resultant is the examined skill.",
      },
      { k: "h", text: "The force balance" },
      {
        k: "bullets",
        items: [
          "Thrust, weight, drag and tension are the ==individual forces==; ΣF is their sum, and only the sum is multiplied by m. Treating the thrust of an engine as the resultant ignores the weight and the drag that act alongside it.",
          "A gymnast pushed upwards by a trampoline: the push must ==cancel the weight and then accelerate her==, so P − W = ma and P = ma + W — the examiner report records candidates who ==subtracted the weight from the resultant force instead of adding it to find the upward force==.",
          "A rocket lifting off: the weight comes off the thrust first (W = mg), the remainder is the resultant, and the acceleration is that remainder ÷ the mass.",
          "As the rocket rises the acceleration ==increases==: fuel burns, so the mass and the weight fall while the thrust stays constant — the resultant force per kilogram grows, and that ==increase in the acceleration== is the answer.",
          "ΣF = ma applies to the ==whole system==: a car plus its passengers accelerates as one body, so the total mass comes from ΣF ÷ a, and the people's mass is the total minus the car's.",
        ],
      },
      { k: "h", text: "Terminal velocity" },
      {
        k: "p",
        text: "Every paper's extended answer is built from the same chain, and the mark schemes print the same indicative content each time — for a rising balloon, a balloon rocket, a bungee jump, a submarine lifted by a crane, a skydiver. Learn the six sentences once, and use the same chain for whichever situation the question gives.",
      },
      {
        k: "steps",
        caption: "The terminal-velocity chain",
        items: [
          {
            title: "1 · Start",
            text: "Name the forces and which wins: *initially there is a resultant upward force* — upthrust is greater than weight and initially there is no air resistance (or, for a falling object, the weight is the larger).",
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
        k: "figure",
        kind: "ph-terminal",
        caption:
          "The v–t signature of terminal velocity: gradient g at the start (drag negligible), the gradient decaying as drag grows, then a horizontal line when the forces balance.",
      },
      { k: "h", text: "The chain in other situations" },
      {
        k: "bullets",
        items: [
          "**Falling through a fluid**: weight − upthrust − drag = ma, and at terminal velocity the drag = W − U.",
          "**On a slope**: the component of gravity along the slope is g sin θ, so with friction absent **a = g sin θ**.",
          "**A load lifted by a crane**: the tension = the weight − the upthrust while submerged, growing to the full weight as the object leaves the water.",
          "**Two masses over a pulley**: treat the system whole — **a = (m₂ − m₁)g ÷ (m₁ + m₂)**.",
          "**A bungee jump below the equilibrium point**: at the equilibrium position the acceleration is zero; below it the rope's tension beats the weight, so the resultant acts ==upwards== and the jumper decelerates to rest at the bottom.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Energy stories in a forces question — the examiner report prints *there were no marks available for discussions of energy*. And the acceleration/velocity confusion: when the acceleration decreases the velocity ==still increases==; when the acceleration is zero the velocity is constant, not zero. On the bungee: maximum acceleration does not sit at the equilibrium point — the resultant there is zero.",
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
        text: "The ==weight per unit mass==, **g = F ÷ m**, measured in N kg⁻¹. Near the Earth's surface g = 9.81 N kg⁻¹ — the same number, and the same physics, as the acceleration of free fall 9.81 m s⁻². The definition is examined as a multiple-choice row, and *weight per unit mass* is the only wording that survives.",
      },
      {
        k: "eq",
        eq: "W = mg        g = F/m        g = 9.81 N kg⁻¹ = 9.81 m s⁻²",
        note: "W = mg is the first marking point of rocket, balloon, crane, lift and terminal-velocity questions alike — the weight comes first, then the balance. Use ==9.81== (9.8 is accepted); g = 10 loses a mark.",
      },
      {
        k: "bullets",
        items: [
          "When a question gives a weight and asks for anything involving mass, the conversion m = W ÷ g is a marking point — write it, even mid-chain.",
          "The mass feeds the next equation unchanged: a weight of 680 N gives m = 680 ÷ 9.81 = 69.3 kg, and that mass then goes into Ek = ½mv².",
          "On another planet g appears through the acceleration, not as 9.81 — the ratio of landing speeds on Mars is √0.38 ≈ 0.62 of the Earth's.",
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
        text: "Three methods appear across the papers — ==strobe photography==, ==timing a fall with light gates==, and ==plotting the data as s against t²== — and all three end in the same place: g from a gradient. The examiner report names the same skill each time: ==explaining how a graph of the results should be used to determine a value== is what candidates need to practise.",
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
            title: "Why s against t² is straight",
            text: "s = ½gt² (u = 0) — compare with y = mx: s is proportional to t², so the graph is a straight line through the origin whose gradient is ½g. The comparison to y = mx + c is a marking point of its own.",
          },
          {
            title: "Double the gradient",
            text: "Gradient of the s–t² line = g ÷ 2, so **g = 2 × gradient**. The examiner report records that some candidates ==did not then double this value==.",
          },
        ],
      },
      {
        k: "eq",
        eq: "s = ½gt²  (u = 0)        gradient of s against t² = g ÷ 2        v² = u² + 2as  (light-gate version)",
        note: "Worked gradient: a line through the origin passing through (0.060 s², 0.30 m) has gradient 0.30 ÷ 0.060 = 5.0 m s⁻² per s², so g = 10.0 m s⁻² — with the printed tolerance around 9.8 to 10.1.",
      },
      { k: "h", text: "The light-gate version" },
      {
        k: "bullets",
        items: [
          "A cylinder dropped through two light gates: each gate times the cylinder passing, so the speed at a gate = the ==length of the cylinder== ÷ the time through the gate — the missing measurement the question asks for.",
          "With the speeds at both gates and the distance between them, no time is needed: **a = (v² − u²) ÷ (2s)**.",
          "Convert mm to m before substituting — 355 mm is 0.355 m.",
          "Plotted the other way, the gradient of v² against s gives ==2a==.",
        ],
      },
      {
        k: "table",
        caption: "Error sources — and which way they push g",
        head: ["Error", "Effect on measured g"],
        rows: [
          ["Ball already moving when the timer starts", "g too large (u > 0 assumed 0)"],
          ["Distance overestimated (measured to the wrong mark)", "g too large (s too large with t unchanged)"],
          ["Human reaction time on a stopwatch", "t too large, so g = 2s ÷ t² too small — and the % uncertainty in t is doubled"],
          ["Air resistance and upthrust present", "g too small (a < g)"],
          ["Flash duration blurs the image", "uncertainty in s; a shorter flash gives less blur"],
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Quoting g = 9.81 m s⁻² with no working — such answers ==gained no credit==: the value must come from the experiment. And the gradient left undoubled: the line's gradient is g ÷ 2, not g.",
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
        caption: "The five properties of a third-law pair",
        head: ["Property", "The wording that loses the mark"],
        rows: [
          ["Equal magnitude", "*equal and opposite reaction* — name the magnitudes, not the slogan"],
          ["Opposite directions", "*the same but opposite force* is ambiguous — same type? same size?"],
          ["Same type of force", "weight (gravitational) vs normal contact force are different types"],
          ["Act on different bodies", "both acting on the same object disqualifies the pair instantly"],
          ["Act for the same time", "implied by *interaction*; stating it completes a two-property answer"],
        ],
      },
      { k: "h", text: "Identifying the pair" },
      {
        k: "bullets",
        items: [
          "The weight of a cable car is the Earth pulling the car down, ==gravitationally==.",
          "Its third-law partner must be the equal, opposite, gravitational force on the *other* body: the car pulling the Earth upwards.",
          "Every contact-force distractor — air resistance, upthrust, the normal force from the cable — fails the ==same type== test.",
          "Weight and normal contact force fail twice at once: they act on the ==same body== and they are of ==different types==.",
        ],
      },
      { k: "h", text: "The third law in explanations" },
      {
        k: "bullets",
        items: [
          "A rocket or module accelerating: the motor exerts a force on the exhaust gases; by Newton's third law the gases exert an equal, opposite force on the motor; there is a resultant force on the module, so by Newton's second law it accelerates — ==name both laws==: the examiner report records that without the names of the laws ==only one mark could be scored at best==.",
          "An athlete jumping: he pushes down on the ground with 890 N; by the third law the ground pushes up on him with 890 N; 890 N > 680 N weight, so there is a resultant force upwards.",
          "A magnetic push between two gliders: the forces are equal and opposite — a third-law pair — so the ==momentum of the system== is unchanged: the answer must say *on the system*.",
          "Forces between two colliding bodies are an interaction pair, which is why momentum transfers between them without changing the system's total.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "The slogan — *every action has an equal and opposite reaction* — on its own: the examiner report records that it was ==not enough to score the first marking point==. *The forces cancel out* written for *equal in size and opposite in direction*. And naming the properties without saying what each force actually is: the reports wanted an account of *the natures of the forces*.",
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
          "A change of momentum question is a subtraction with signs: an object losing Δp gives that momentum to a stationary object, which leaves with the same Δp = mv.",
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
        text: "==Total momentum before a collision = total momentum after it==, ==provided no external resultant force acts on the system== (equivalently: in a closed system). Both halves earn a mark each — the examiner report records that candidates typically failed to score the second mark by neglecting the condition, and asks for *good forms of words for standard answers*.",
      },
      {
        k: "eq",
        eq: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂        (one direction positive, the other negative)",
        note: "Assign + and − before substituting, and state your positive direction. The examiner report catches candidates *using positive values of momentum for both gliders* moving in opposite directions.",
      },
      { k: "h", text: "Testing a prediction" },
      {
        k: "bullets",
        items: [
          "Take one direction as positive and say so: a 0.15 kg glider moving right at 0.32 m s⁻¹ carries 0.048 kg m s⁻¹; a 0.20 kg glider moving left at 0.11 m s⁻¹ carries −0.022 kg m s⁻¹.",
          "Total momentum = 0.048 − 0.022 = +0.026 kg m s⁻¹ — positive, so the combined gliders move ==right== and the prediction (*they move left*) is not correct.",
          "The final mark is ==dependent on a valid calculation==: state the direction *and* the verdict on the prediction, not just the number.",
          "Zero-total chains work the same way: if the total momentum before separation is zero, the parts leave with equal and opposite momenta — a heavy module moving slowly balances a light one moving quickly.",
        ],
      },
      { k: "h", text: "Inelastic collisions" },
      {
        k: "bullets",
        items: [
          "In an inelastic collision the kinetic energy after is less than before: the forces between the bodies ==did work==, and that work transferred energy to thermal energy and other stores.",
          "The examiner report is precise: ==no marks can be easily awarded without mentioning work being done== — candidates who *simply stated that energy was transformed without telling us how* scored nothing.",
          "Momentum still conserves exactly — the energy accounting does not affect the momentum accounting.",
          "When a question asks for an explanation *in terms of momentum*, every sentence must be a momentum sentence: the examiner report records a correct Newton's-laws explanation that ==gained no credit== because the question asked for an explanation ==in terms of momentum==.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*The momentum of the skater* written for ==the total momentum of the system== — the principle is about the sum. Assuming two bodies ==stick together== when the question never says so. And *energy is lost* — the energy is transferred by work done to a named store; nothing is lost.",
      },
    ],
  },
];

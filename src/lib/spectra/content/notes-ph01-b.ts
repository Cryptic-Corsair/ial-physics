import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces · Part B (statements 8–11)
   The worked-example register — see the Part A header: every
   scenario is a worked example card with the question, the paper,
   the marking points as steps and the answer; the ropes (def
   cards, eq bands, method panels, figures, tables) stay outside.
   Mark scheme wordings and examiner report lines quoted verbatim
   from the papers in research/wph11; no session labels outside
   the cards.
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
      {
        k: "worked",
        title: "An engine pushing a truck",
        question:
          "An engine pushes a truck along horizontal rails at constant velocity, exerting a horizontal force of 1.2 × 10⁵ N on the truck. The diagram shows the free-body force diagram of the engine, with its weight and the normal contact force from the rails already drawn. Complete the free-body force diagram for the engine. (4) — *WPH11 October 2022, Q18*",
        steps: [
          "Constant velocity means the resultant force on the engine is zero, so the horizontal forces must balance.",
          "By ==Newton's third law== the truck pushes back on the engine with 1.2 × 10⁵ N to the left; the rails push the engine forwards with 1.5 × 10⁵ N to the right.",
          "The balance is short by 0.3 × 10⁵ N to the left, so the diagram is completed by air resistance, 3.0 × 10⁴ N to the left — *the printed scheme accepts 3.0 × 10⁴ N and notes [do not accept 'viscous drag']*. The weights are vertical and already balance.",
          "Draw the arrows so the total length to the left ==equals== the length to the right — *the printed scheme measures the balance to within 2 mm using a measuring tool*.",
          "*Examiner's report:* *Many students failed to notice that an additional backwards force from air resistance was required to bring the engine into equilibrium.* · *The arrows in a free-body force diagram should have lengths proportional to the magnitudes of the forces. This was very rarely seen.*",
        ],
        answer: "force from truck 1.2 × 10⁵ N left · air resistance 3.0 × 10⁴ N left · rails 1.5 × 10⁵ N right, lengths balanced",
      },
      {
        k: "worked",
        title: "A ball falling at terminal velocity",
        question:
          "A student carried out an experiment using a data logger to record the motion of a ball-bearing as it fell through a liquid. The ball-bearing is falling at terminal velocity, and the drag force has already been drawn on the free-body diagram. Complete the free-body force diagram for the ball-bearing. (2) — *WPH11 October 2023, Q18*",
        steps: [
          "Two arrows complete the diagram: ==upthrust== upwards and ==weight== downwards, ==both starting from the ball's centre==.",
          "At terminal velocity the three forces balance, so the weight arrow's length = the drag arrow's length + the upthrust arrow's length — *the printed scheme marks the arrow lengths, not just the arrows*.",
          "*Examiner's report (the same diagram in January 2024):* *some students labelled weight as G, which is incorrect* · *Some students appeared not to appreciate that the length of the arrow represents the size of the force.*",
        ],
        answer: "upthrust up and weight down, drawn from the centre; W = drag + upthrust",
      },
      {
        k: "worked",
        title: "The diagram when the object accelerates",
        question:
          "An object moves through a fluid. The upthrust on it is 90 N upwards and its weight is 49 N downwards. The object has a mass of 5.0 kg and accelerates upwards at 4.0 m s⁻². Which expression gives the magnitude of the drag force on the object?  A 5.0 × 4.0 · B 90 − 49 · C 90 − 49 − (5.0 × 4.0) · D 90 − 49 + (5.0 × 4.0) — *WPH11 January 2025, Q9*",
        steps: [
          "The diagram is ==not== in equilibrium, so the arrows are drawn deliberately unequal: ΣF = ma = 5.0 × 4.0 = 20 N upwards.",
          "The balance along the motion: 90 − 49 − drag = 20, so ==drag = 21 N downwards== — option C.",
          "*The mark scheme's distractors:* A *this gives the resultant force*; B *the resultant force is not zero*; D *this assumes that the object is accelerating downwards*.",
        ],
        answer: "C — drag = 21 N downwards",
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
          "For a vehicle ==driven by its wheels==, the friction of the road on the tyres points ==forwards== — it ==is== the driving force, and the drag acts backwards (WPH11 June 2021, Q3). Constant velocity still means the two cancel: a zero resultant does not mean zero friction.",
          "A load hung from a ==moving pulley== is carried by ==two segments of the same rope==, so the tension in the rope is the load ÷ 2 — the printed factor of 2 (WPH11 June 2021, Q17: F = 5000 ÷ 2 = 2500 N). The free end of the rope then moves ==twice== the distance the load moves: the force halves because the distance doubles, and the work checks out either way.",
        ],
      },
      {
        k: "worked",
        title: "A trampolinist's push",
        question:
          "A gymnast bounces on a trampoline. The trampoline gives the gymnast a maximum upward acceleration of 14.2 m s⁻². The mass of the gymnast is 58 kg. Calculate the maximum upward force exerted on the gymnast. (4) — *WPH11 January 2023, Q15*",
        steps: [
          "Her weight first: W = mg = 58 × 9.81 = 569 N — *use of W = mg* is marking point 1.",
          "Newton's second law with up positive: P − W = ma, so P = (58 × 14.2) + 569 — *use of resultant force = push − weight* and *use of ΣF = ma* are the next two.",
          "P = **1.4 × 10³ N** — the push must ==cancel the weight and then accelerate her==.",
          "*Examiner's report:* *many candidates subtracted the weight from the resultant force instead of adding it to find the upward force, scoring only two of the four available marks.*",
        ],
        answer: "1.4 × 10³ N",
      },
      {
        k: "worked",
        title: "A rocket lifting off",
        question:
          "A rocket is launched vertically. Its engines give the rocket a total upward thrust of 7.3 × 10⁷ N, and the mass of the rocket is 5.0 × 10⁶ kg. (a) Calculate the initial vertical acceleration of the rocket. (3) (b) As the rocket rises, it uses fuel to produce a constant thrust. Explain why the acceleration will increase. (1) — *WPH11 October 2023, Q11*",
        steps: [
          "Weight first: W = 5.0 × 10⁶ × 9.81 = 4.9 × 10⁷ N — the thrust is ==not== the resultant.",
          "ΣF = 7.3 × 10⁷ − 4.9 × 10⁷ = 2.4 × 10⁷ N, so a = ΣF ÷ m = **4.8 m s⁻²**.",
          "As fuel burns the mass (and the weight) falls while the thrust stays constant, so the resultant force grows and the acceleration ==increases== — *the report scores answers that only restate that thrust beats weight no mark here*.",
          "*Examiner's report:* *A common mistake was to treat the thrust from the rocket's engines as the resultant force, which led to an incorrect answer.* · *A fair proportion of candidates explained why the rocket accelerated, by stating that the thrust was greater than the weight, rather than explaining why the acceleration would increase.*",
        ],
        answer: "(a) 4.8 m s⁻² · (b) the mass falls, the thrust stays constant",
      },
      {
        k: "worked",
        title: "A car and its passengers",
        question:
          "A car of mass 1850 kg accelerates at 0.230 m s⁻² when the resultant force on it is 460 N. Calculate the total mass of the people in the car. (3) — *WPH11 January 2025, Q11*",
        steps: [
          "ΣF = ma applies to the ==whole system==: m = 460 ÷ 0.230 = 2000 kg — *use of F = ma* is the first marking point.",
          "The passengers' mass = 2000 − 1850 = **150 kg** — the question asks for the people, not the whole car.",
          "*Examiner's report:* *Some candidates added the mass of the car to the total mass rather than subtracting, and some did not attempt to subtract the mass of the car at all.*",
        ],
        answer: "150 kg",
      },
      {
        k: "worked",
        title: "The scales in a lift",
        question:
          "A student of weight 600 N is standing on weighing scales in a lift. The scales are calibrated to give readings in newtons. The lift moves upwards at constant velocity, then decelerates to rest. As the lift moves, the student looks at the readings on the scales. Explain the readings on the scales. (6) — *WPH11 January 2022, Q14* (starred)",
        steps: [
          "The reading on the scales is the ==force of the scales on the student== — the normal contact force — *the printed first point: the force of the lift/scales on the student is the reading on the scales*. The reading equals the weight only when the vertical acceleration is zero.",
          "At constant velocity the resultant force on the student is zero, so the contact force ==equals the weight==: the reading is **600 N** — *and at rest it would read 600 N too.*",
          "While the lift decelerates, the velocity points up and the deceleration points ==down==: the resultant force on the student acts ==downwards==.",
          "So the weight is the larger force: W − R = ma with R the contact force, giving R < W — *the printed points: as the lift decelerates the reaction is less than weight; there is a resultant downward force; the reading will be less than 600 N because the upward force on the student is less than his weight.*",
          "The ==starred== marking: six indicative points earn four IC marks, and the last two marks pay for ==structure with linkages== — *coherent and logical structure with linkages and fully sustained lines of reasoning demonstrated throughout* scores the top band; a list of unconnected points does not. Chain the sentences: as the lift decelerates, the resultant force is downwards, so the reading falls below 600 N.",
          "Run the same chain the other way and the reading rises: accelerating upwards, or decelerating while moving downwards, makes the contact force ==greater== than the weight.",
        ],
        answer: "600 N at constant velocity (and at rest); below 600 N while the lift decelerates upwards",
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
      {
        k: "worked",
        title: "Two masses over a pulley",
        question:
          "A mass of 0.4 kg and a mass of 0.5 kg are joined by a string that passes over a pulley. Which expression gives the acceleration of the 0.5 kg mass?  A (0.5 − 0.4) × 9.81 ÷ 0.5 · B (0.5 − 0.4) × 9.81 ÷ (0.5 + 0.4) · C 0.5 × 9.81 ÷ (0.5 − 0.4) · D 0.5 × 9.81 ÷ (0.5 + 0.4) — *WPH11 October 2025, Q7*",
        steps: [
          "Treat the two masses as ==one system==: the resultant force on it is (m₂ − m₁)g and the total mass is m₁ + m₂.",
          "**a = (m₂ − m₁)g ÷ (m₁ + m₂)** = (0.5 − 0.4) × 9.81 ÷ 0.9 = 1.09 m s⁻² — option B.",
          "For m₁ = m₂ the acceleration is zero and both sides of the balance hold — the same system thinking in the limiting case.",
        ],
        answer: "B — 1.09 m s⁻²",
      },
      {
        k: "worked",
        title: "A bungee jumper below the equilibrium point",
        question:
          "A student bungee-jumps from a bridge on an elastic rope. Position A is where the distance fallen equals the original rope length, so the rope is just taut; position B is the equilibrium position; position C is the position of maximum extension. Explain how the acceleration of the student changes from position A to position C. Air resistance is negligible. (6) — *WPH11 October 2024, Q17*",
        steps: [
          "From A the rope stretches: ==tension increases as the extension increases==, and the weight is constant.",
          "Between A and B the weight is greater than the tension, so the resultant is downwards but falling — ==the acceleration decreases== while the speed still grows.",
          "At B the tension equals the weight: ==resultant force zero, so acceleration zero== — that is the equilibrium position, not the fastest point and not the stopping point.",
          "Below B the tension beats the weight: ==resultant force upwards==, so the student ==decelerates== to rest at C.",
          "So the acceleration is zero at the equilibrium point and largest (upwards) at the bottom — ==the reverse of the recorded error==, *maximum acceleration at the equilibrium point, with zero acceleration when the student was at the lowest point of the bungee jump*.",
          "*Examiner's report:* *Many candidates described the energy changes of the student, which is not sufficient to explain changes to acceleration.* — energy stories score nothing in a forces chain.",
        ],
        answer: "a decreases from A to B, is zero at B, then points upwards and grows to C",
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
          "When a question ends at a weight, the last step is W = mg — stopping at the mass loses the final mark.",
          "On another planet g appears through the acceleration, not as 9.81 — the Mars rock card in statement 1 works the ratio route.",
          "The two units describe the same quantity: 9.81 N kg⁻¹ and 9.81 m s⁻² are equally creditable.",
        ],
      },
      {
        k: "worked",
        title: "The weight of a boat",
        question:
          "A resultant force of 4800 N acts on a boat and gives it an acceleration of 0.31 m s⁻². Calculate the weight of the boat. (3) — *WPH11 June 2025, Q11*",
        steps: [
          "ΣF = ma gives the mass: 4800 ÷ 0.31 = 15 500 kg — the conversion is a marking point of its own, written even mid-chain.",
          "W = mg = 15 500 × 9.81 ≈ **1.5 × 10⁵ N** — the weight asked for at the end of the chain, in newtons.",
          "Stopping at the mass when the question asks for the weight loses the final mark — and the unit is ==N==, not kg.",
        ],
        answer: "≈ 1.5 × 10⁵ N",
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
          {
            title: "Convert a photograph",
            text: "Measurements made ==on a printed photograph== are converted with the ==printed scale== before any use: a 6.2 cm separation on the magnified picture is a real fall of 6.2 ÷ 1.8 = 3.4 cm (WPH11 January 2020, Q16).",
          },
        ],
      },
      {
        k: "eq",
        eq: "s = ½gt²  (u = 0)        gradient of s against t² = g ÷ 2        v² = u² + 2as  (light-gate version)",
        note: "The gradient needs a ==large triangle== drawn on the line — more than half its length — and the doubling step written out: the line's gradient is g ÷ 2, not g.",
      },
      {
        k: "worked",
        title: "The stopwatch method",
        question:
          "A student used two different methods to investigate the acceleration of a freely falling object. In the first method the student dropped a ball from rest at a known height and used a stopwatch to measure the time taken for the ball to reach the ground, repeating the measurement and calculating the mean acceleration. Explain why there was a large uncertainty in the calculated value of acceleration. (2) — *WPH11 October 2025, Q13*",
        steps: [
          "A ball dropped over a short fall carries a ==large percentage uncertainty in t==: the human reaction time is a large fraction of a short time.",
          "Since g = 2s ÷ t², a percentage uncertainty in t counts ==twice== in the answer for g — the light-gate version removes the reaction time entirely, which is the comparison the question usually wants next.",
        ],
        answer: "short fall → reaction time is a large fraction of t → doubled into g",
      },
      {
        k: "worked",
        title: "The light-gate method",
        question:
          "In the second method the student positioned light gates near the top and bottom of a transparent vertical tube and dropped a metal cylinder into the tube. The time taken for the cylinder to pass through each light gate was recorded by a data logger, and the distance between the light gates was measured. (i) Give one other measurement needed to determine the acceleration of the metal cylinder. (1) (ii) The speed of the metal cylinder through the first light gate was 1.39 m s⁻¹ and through the second light gate 2.96 m s⁻¹. The distance between the light gates was 355 mm. Calculate the acceleration of the metal cylinder. (2) — *WPH11 October 2025, Q13*",
        steps: [
          "The speed at a gate = the ==length of the cylinder== ÷ the time through the gate — the ==other measurement== the question asks for.",
          "Convert before substituting: 355 mm = 0.355 m.",
          "No time needed anywhere: a = (v² − u²) ÷ (2s) = (2.96² − 1.39²) ÷ (2 × 0.355) = **9.6 m s⁻²**.",
          "Plotted the other way, the gradient of v² against s gives ==2a== — the doubling trap again.",
        ],
        answer: "(i) the cylinder's length · (ii) 9.6 m s⁻²",
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
];

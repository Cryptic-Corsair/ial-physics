import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 2 rebuilt · Part A (statements 12–13)
   Register: the Topic 4 pattern with the owner's dictated rules
   (research/wph11/scenario-register-guardrails.md) — sections named
   after the situation, the situation → force/law → consequence per
   line → contrast → keyword reason → "Therefore," closer; one spoken
   sentence per bullet, plain verbs (never grows/shrinks — always
   increases, decreases, reduces), the owner's connectives only, no
   session tags in the teaching body, exam keywords exact. Worked
   cards cite their WPH11 session; mark scheme wordings and
   examiner-report lines quoted verbatim in the labelled notes and
   the cards' ms fields. Statements byte-identical to notes-ph01-c
   (scripts/t02r-invariants.ts); every number re-computed by
   scripts/t02r-numbers.ts.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH02R_A: SpecSection[] = [
  {
    spec: "12",
    statement:
      "know and understand Newton's third law of motion and know the properties of pairs of forces in an interaction between two bodies",
    title: "Newton's third law — the force-pair rules",
    blocks: [
      {
        k: "def",
        term: "Newton's third law pair",
        text: "When body A exerts a force on body B, body B exerts a force on body A. The second force is ==equal in magnitude==, ==opposite in direction==, ==of the same type==, ==acts on the other body==, and ==acts at the same time==. The pair forms together and disappears together. Two forces failing any one property are not a pair.",
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
          ["Act at the same time", "one force cannot act without the other — N3 pairs must act at the same time"],
        ],
      },
      { k: "h", text: "The weight of a cable car" },
      {
        k: "bullets",
        items: [
          "A cable car hangs in equilibrium from a cable.",
          "Its weight is the Earth pulling the car downwards, gravitationally.",
          "By Newton's third law, the car pulls the Earth upwards with an equal gravitational force.",
          "That force is the weight's partner — equal magnitude, opposite direction, same type, acting on the other body, at the same time.",
          "The air resistance on the car is not the partner, because air resistance is not a gravitational force.",
          "The normal contact force is not the partner either — it is a contact force acting on the same object.",
          "Therefore, the partner of any weight is the gravitational pull of the object on the Earth — never a contact force on the same object.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is not correct because air resistance is not a gravitational force / C is not correct because upthrust is not a gravitational force / D is not correct because normal contact force is not a gravitational force* — every distractor fails the same-type test (WPH11 October 2024, Q4).",
      },
      { k: "h", text: "A person sitting on a chair" },
      {
        k: "bullets",
        items: [
          "A person sitting still on a chair feels two forces — the weight downwards and the normal contact force upwards.",
          "The two forces are equal in magnitude and opposite in direction while the person sits still.",
          "But both forces act on the same object, the person.",
          "And they are of different types — one gravitational, one a contact force.",
          "So they are the equilibrium pair on one body, not a Newton's third law pair.",
          "That the chair is stationary makes no difference — the pair properties are the only test.",
          "Therefore, equal and opposite alone is never the test — a third law pair must act on two different bodies and be of the same type.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*A is not correct because the motion of the chair is not relevant* (WPH11 June 2025, Q4) — whether the chair moves has nothing to do with the pair. *The forces act on the same object* and *they are not the same type of force* are the two printed reasons (WPH11 October 2023, Q16(a); June 2022, Q11(a)) — and saying *one force is weight and the other is a magnetic force* only restates the question. What scores is *an account of what the natures of the forces are* (WPH11 October 2022, Q18(b)) — name the types: gravitational, contact, magnetic.",
      },
      { k: "h", text: "A climber lowered on a rope" },
      {
        k: "bullets",
        items: [
          "A climber is lowered down a cliff on a rope, accelerating downwards.",
          "The rope's tension and the climber's weight both act on the climber.",
          "The two forces are not even equal in magnitude, because the climber is accelerating.",
          "So this pair fails the first property before any of the others.",
          "The true partner of the climber's weight is the climber's gravitational pull on the Earth.",
          "Therefore, a hanging body's tension and weight can only be a third law pair while it hangs in equilibrium — never while it accelerates.",
        ],
      },
      { k: "h", text: "A box sliding down a ramp" },
      {
        k: "bullets",
        items: [
          "A box slides down a ramp at constant velocity.",
          "The box pushes on the ramp with two contact forces — friction along the surface and the normal contact force pressing into it.",
          "By Newton's third law, each of those has a partner force on the box, and those partners are the friction and the normal contact force on the box's own free-body diagram.",
          "The weight of the box has its partner on the planet, not on the ramp.",
          "The air resistance on the box has its partner on the air.",
          "Therefore, only the contact forces pair with the ramp — the weight and the air resistance never do.",
        ],
      },
      { k: "h", text: "A star and a planet" },
      {
        k: "bullets",
        items: [
          "A massive star pulls on a small planet with a gravitational force.",
          "The planet pulls back on the star with a gravitational force of the same magnitude.",
          "The two masses are very different, but the two forces are still equal.",
          "The lighter planet gets the larger acceleration, because $a = F \\div m$ and its mass is smaller.",
          "Therefore, the forces in a third law pair are always equal in magnitude, even when the two bodies have very different masses.",
        ],
      },
      { k: "h", text: "A rocket ejecting hot gases" },
      {
        k: "bullets",
        items: [
          "A rocket motor exerts a force on the hot gases, throwing them backwards at high velocity.",
          "By Newton's third law, the gases exert an equal force on the motor, forwards.",
          "So there is a resultant force on the rocket.",
          "By Newton's second law, the rocket accelerates forwards.",
          "Therefore, the rocket gains velocity because the ejected gases push back on it — one force of the pair on the gases, the other on the rocket.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*This was a question that specifically asked for Newton's laws to be named, so without mention of the names of the laws only one mark could be scored at best* (WPH11 January 2023, Q16(b)(i)). *Explanations that did not mention the laws by name did not score full marks* (WPH11 June 2022, Q17(b)). Name the law in the sentence that uses it.",
      },
      { k: "h", text: "An athlete jumping off the ground" },
      {
        k: "bullets",
        items: [
          "An athlete exerts a force on the ground as he jumps.",
          "By Newton's third law, the ground exerts an equal force upwards on the athlete.",
          "The upward force is greater than the athlete's weight.",
          "So there is a resultant force upwards on the athlete.",
          "Therefore, by Newton's second law, he accelerates upwards — the ground's push beats his weight.",
        ],
      },
      { k: "h", text: "Two magnetic gliders on an air track" },
      {
        k: "bullets",
        items: [
          "Two gliders on an air track collide, with a magnet on each glider.",
          "The magnetic force on glider A and the magnetic force on glider B are equal in magnitude and opposite in direction.",
          "The pair acts between the two gliders, so both forces are internal to the two-glider system.",
          "So the resultant force on the system is zero, and the system's total momentum is unchanged.",
          "Each glider's own momentum does change — one glider's velocity increases while the other's decreases by the same amount.",
          "Therefore, internal forces can never change a system's total momentum — that is why momentum conservation works.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Some answers referred to the forces cancelling out, rather than stating that the forces were equal in size and opposite in direction* — write the two forces out, each with its owner and its direction (WPH11 October 2023, Q12(b)(ii)). And *To gain credit for an explanation involving the resultant force, it therefore had to be clear that the answer was referring to the resultant force on the system* — name the system when you argue from the resultant force.",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "Identifying the pair",
        question:
          "The photograph shows a cable car hanging from a cable. The cable car is in equilibrium. Which of the following forms a Newton's third law pair of forces with the weight of the cable car?  A air resistance acting on the cable car · B gravitational pull of the cable car on the Earth · C upthrust of the displaced air acting on the cable car · D normal contact force of the cable car on the cable — *WPH11 October 2024, Q4*",
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
          "In a high jump competition, an athlete has a weight of 680 N. The athlete exerts a force of 890 N on the ground as he jumps into the air. Explain why the athlete accelerates upwards. Your answer should refer to Newton's third law. (3) — *WPH11 October 2024, Q15(a)*",
        steps: [
          "By Newton's third law the ground exerts an ==upwards== force of 890 N on the athlete.",
          "The upward force is greater than the athlete's weight — *890 N − 680 N = 210 N*.",
          "So there is a ==resultant force upwards== on the athlete, and he accelerates upwards.",
          "Each printed marking point needs its own sentence: *by Newton's third law, the ground exerts an upwards force of 890 N on the athlete*; *the upwards force is greater than the athlete's weight*; *there is a resultant force (upwards on the athlete)*.",
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
          "Each glider's own momentum does change — *the velocity of one glider increases and the velocity of the other decreases (by the same amount)* — but the two changes are equal and opposite, so the system's total momentum stays as it was.",
        ],
        answer: "internal third-law pair — equal, opposite, acting on each other",
        ms: {
          label: "Examiner's report",
          text: "*Many of those who did not score the mark gave a statement describing Newton's third law, but did not describe how this applied to the gliders… There were also a significant minority of answers that referred to conservation of momentum and did not mention forces at all.*",
        },
      },
      {
        k: "worked",
        title: "The shunting engine",
        question:
          "A railway engine is pushing a truck along horizontal rails at a constant velocity. The engine exerts a forward force of $1.2 \\times 10^{5}\\ \\text{N}$ on the truck. The engine also exerts a net backwards force of $1.5 \\times 10^{5}\\ \\text{N}$ on the rails.\n**(a)** Complete the free-body force diagram to show all the forces acting on the engine. The normal contact force (up) and the weight (down) are already drawn. (4)\n**(b)** A student suggests that the weight and the normal reaction force form a Newton's third law pair of forces. Explain why the student's suggestion is not correct. Your answer should include reference to the features of a Newton's third law pair of forces. (5) — *WPH11 October 2022, Q18*",
        steps: [
          "(a) Three horizontal forces act on the engine.\nThe force from the truck, $1.2 \\times 10^{5}\\ \\text{N}$, to the left.",
          "The air resistance to the left — *do not accept 'viscous drag'* — which with the truck's force must total $1.5 \\times 10^{5}\\ \\text{N}$, so it is $3.0 \\times 10^{4}\\ \\text{N}$.",
          "The force from the rails on the engine, $1.5 \\times 10^{5}\\ \\text{N}$, to the right — the ==partner== of the engine's push on the rails.",
          "The two left arrows together equal the right arrow — constant velocity means zero resultant force. *[withhold one mark if more forces than three]*",
          "(b) A Newton's third law pair is ==equal in magnitude, opposite in direction, of the same type, acting on two different bodies==.",
          "The weight and the normal reaction both act ==on the engine== — the same body.",
          "And they are of ==different types== — the weight is gravitational, the normal reaction is a contact force.",
          "So they are not a Newton's third law pair; they are the equilibrium pair on one body.",
        ],
        answer:
          "(a) truck $1.2 \\times 10^{5}$ N left, air resistance $3.0 \\times 10^{4}$ N left, rails $1.5 \\times 10^{5}$ N right · (b) same body, different types — not a pair",
        ms: {
          label: "Examiner's report",
          text: "*Many students failed to notice that an additional backwards force from air resistance was required to bring the engine into equilibrium. The arrows in a free-body force diagram should have lengths proportional to the magnitudes of the forces. This was very rarely seen.*",
        },
      },
      {
        k: "worked",
        title: "The magnetic disc",
        question:
          "A disc of mass m is held stationary above a magnetic base by the magnetic force F the base exerts on it. The two forces on the disc are equal in magnitude and opposite in direction.\n**(a)** Give two reasons why these forces are not a Newton's 3rd law pair. (2)\n**(b)** The magnetic base has weight W and rests on a horizontal table. Complete the free-body force diagram for the magnetic base, showing the forces on it. (2) — *WPH11 June 2022, Q11*",
        steps: [
          "(a) The two forces ==act on the same object==, the disc.",
          "And they are ==different types of force== — one magnetic, one gravitational.",
          "(b) Downward: the weight W, and the magnetic force from the disc, downwards — the disc's push-back on the base.",
          "Upward: the normal contact force from the table, drawn the length of F + W, because the base is in equilibrium.",
        ],
        answer: "(a) same object + different types · (b) magnetic force from the disc down, normal contact force up equal to F + W",
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
        text: "The product of an object's mass and its velocity, **p = mv**. Momentum is a ==vector== in the direction of the velocity. The unit is ==kg m s⁻¹==, the same as ==N s==.",
      },
      {
        k: "eq",
        eq: "$p = mv$        $1\\ \\text{N s} = 1\\ \\text{kg m s}^{-1}$",
        note: "Read the equation as mass × velocity, and keep the direction with the value. Opposite directions carry opposite signs, exactly like velocities.",
      },
      {
        k: "bullets",
        items: [
          "Momentum is a vector quantity; kinetic energy is not — that pair is the printed vector test.",
          "The unit is examined as a multiple-choice item — kg m s⁻¹ and N s are both creditable.",
          "In SI base units momentum is kg m s⁻¹; kg m s⁻² is a newton and kg m² s⁻² is a moment.",
          "A change in momentum is a subtraction with signs: $\\Delta p = p_{\\text{final}} - p_{\\text{initial}}$.",
          "The momentum an object loses, another object gains — a bat that loses Δp puts Δp into the ball.",
          "A light ball takes Δp as speed; a ball three times as heavy takes 2Δp as $\\tfrac{2}{3}v$ — the same momentum on the larger mass.",
        ],
      },
      { k: "h", text: "A car on a circular path" },
      {
        k: "bullets",
        items: [
          "A car moves round a circular path at a constant speed.",
          "Its velocity changes direction the whole way round.",
          "So its momentum changes direction the whole way round too, because $p = mv$ points with the velocity.",
          "But its kinetic energy stays the same, because the speed never changes.",
          "Therefore, constant speed on a bend means changing momentum and constant kinetic energy.",
        ],
      },
      { k: "h", text: "Two objects falling side by side" },
      {
        k: "bullets",
        items: [
          "Two objects R and S fall freely for the same time, and S has twice the mass of R.",
          "Both gain the same change in velocity, because the acceleration $g$ is the same for both.",
          "The change in momentum is $\\Delta p = m\\Delta v$, so the heavier object's momentum increases by more.",
          "R's momentum goes from p to 2p, while S's goes from p to 3p.",
          "Therefore, in the same fall the heavier object gains more momentum — not more velocity.",
        ],
      },
      { k: "h", text: "Combining momenta" },
      {
        k: "bullets",
        items: [
          "Momenta are vectors, so they combine exactly like forces.",
          "Along one line they subtract — an east momentum minus a west momentum leaves the difference, east or west by the sign.",
          "A perpendicular component joins by Pythagoras, exactly like a force resultant.",
          "Two momenta at an angle combine by a scaled vector diagram, tip to tail, exactly like two forces.",
          "Therefore, combine momenta like forces — subtract along the line, Pythagoras across it, draw when angled.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Writing mass × speed for the definition loses the mark — momentum is mass × ==velocity==. The unit slips just as often: kg m s⁻² is a newton, and N m⁻¹ is stiffness. *Total momentum is not the sum of the magnitudes* (WPH11 January 2021, Q6) — opposite directions subtract, they never add as bare numbers.",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The bumper cars",
        question:
          "Bumper car Q was stationary; car P, of total mass 250 kg, was moving at $2.10\\ \\text{m s}^{-1}$ towards Q. After the collision both moved the same way: P at $1.15\\ \\text{m s}^{-1}$ and Q at $1.57\\ \\text{m s}^{-1}$.\n**(a)(i)** Show that the total mass of Q was about 150 kg. (3)\n**(a)(ii)** State one assumption you made in your calculation. (1)\n**(a)(iii)** The collision lasted 1.35 s. Calculate the average horizontal force on Q during the collision. (3)\n**(b)** Explain why P decelerates during the collision. Your answer should make reference to Newton's laws of motion. (3) — *WPH11 June 2022, Q17*",
        steps: [
          "(a)(i) Momentum is conserved, so the totals before and after are equal.\n$250 \\times 2.10 = 250 \\times 1.15 + m_Q \\times 1.57$",
          "$525.0 = 287.5 + 1.57\\,m_Q$, so $m_Q = \\dfrac{237.5}{1.57} = 151\\ \\text{kg}$",
          "(a)(ii) The assumption: ==no external horizontal forces acted== on the two-car system during the collision.",
          "(a)(iii) The acceleration of Q first.\n$a = \\dfrac{\\Delta v}{\\Delta t} = \\dfrac{1.57}{1.35} = 1.16\\ \\text{m s}^{-2}$",
          "Then $\\Sigma F = ma$ on Q.\n$\\Sigma F = 151.3 \\times 1.16 = 1.76 \\times 10^{2}\\ \\text{N}$",
          "(b) P exerts a force on Q, so by ==Newton's third law== Q exerts an equal and opposite force on P.",
          "That force on P points ==against== P's motion, so by ==Newton's second law== P decelerates.",
        ],
        answer: "(a)(i) $m_Q \\approx 151$ kg · (a)(iii) $1.76 \\times 10^{2}$ N · (b) N3 force backwards on P, N2 deceleration",
        ms: {
          label: "Examiner's report",
          text: "*A great many candidates did not state how the condition applied to this situation. Without mentioning the cars or the system no mark could be awarded.* · *Explanations that did not mention the laws by name did not score full marks. … A negative resultant force where there had been zero before is not 'reduced'.*",
        },
      },
      {
        k: "worked",
        title: "The asteroids",
        question:
          "A slow moving asteroid A was hit by a faster asteroid B, and B was absorbed by A.\n**(a)** State the principle of conservation of linear momentum. (2)\n**(b)** Before the collision, asteroid A had a velocity of $2.19 \\times 10^{3}\\ \\text{m s}^{-1}$ and a momentum of $1.80 \\times 10^{17}\\ \\text{kg m s}^{-1}$.\n  (i) Show that the mass of asteroid A was about $8.2 \\times 10^{13}$ kg. (2)\n  (ii) Calculate the velocity of the asteroids after the collision. mass of asteroid B $= 5.90 \\times 10^{12}$ kg, velocity of B before the collision $= 15.0 \\times 10^{3}\\ \\text{m s}^{-1}$ (3) — *WPH11 January 2022, Q11*",
        steps: [
          "(a) ==Total momentum before a collision = total momentum after it, provided no external resultant force acts on the system== — the sum and the condition, a mark each.",
          "(b)(i) The momentum is given in N s — the same unit as kg m s⁻¹.\n$m = \\dfrac{p}{v} = \\dfrac{1.80 \\times 10^{17}}{2.19 \\times 10^{3}} = 8.22 \\times 10^{13}\\ \\text{kg}$",
          "(b)(ii) Momentum before, both objects.\n$p_{\\text{total}} = 1.80 \\times 10^{17} + 5.90 \\times 10^{12} \\times 15.0 \\times 10^{3} = 2.685 \\times 10^{17}\\ \\text{kg m s}^{-1}$",
          "After the collision the mass is combined.\n$v = \\dfrac{2.685 \\times 10^{17}}{8.22 \\times 10^{13} + 5.90 \\times 10^{12}} = 3.05 \\times 10^{3}\\ \\text{m s}^{-1}$",
        ],
        answer: "(b)(i) $8.22 \\times 10^{13}$ kg · (b)(ii) $3.05 \\times 10^{3}$ m s⁻¹",
      },
      {
        k: "worked",
        title: "The railway carriages",
        question:
          "A railway carriage of mass $7.15 \\times 10^{4}$ kg moving at $4.50\\ \\text{m s}^{-1}$ collides with a second carriage of mass $5.35 \\times 10^{4}$ kg moving in the same direction. The carriages join together and move at $3.62\\ \\text{m s}^{-1}$.\n**(a)** Show that the total momentum of the carriages immediately after the collision was approximately $4.5 \\times 10^{5}\\ \\text{kg m s}^{-1}$. (2)\n**(b)** Calculate the velocity of the second carriage before the collision. (2) — *WPH11 June 2021, Q11*",
        steps: [
          "(a) The joined mass moves as one.\n$p = (7.15 + 5.35) \\times 10^{4} \\times 3.62 = 4.53 \\times 10^{5}\\ \\text{kg m s}^{-1}$",
          "(b) The total before equals the total after.\n$7.15 \\times 10^{4} \\times 4.50 + 5.35 \\times 10^{4} \\times v = 452\\,500$",
          "$v = \\dfrac{452\\,500 - 321\\,750}{53\\,500} = 2.44\\ \\text{m s}^{-1}$",
          "The second carriage was moving the same way, but slower — the faster one caught it and they locked.",
        ],
        answer: "(a) $4.53 \\times 10^{5}$ kg m s⁻¹ · (b) $2.44$ m s⁻¹",
      },
    ],
  },
];

import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces · Part B (statements 7–11)
   The rebuilt Forces note, continued — see the Part A header for
   the register: short sentences, one marking point per step,
   KaTeX workings on their own lines, verbatim mark scheme and
   examiner-report wordings verified by scripts/forces-quotes.ts.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01F_B: SpecSection[] = [
  {
    spec: "7",
    statement:
      "understand how to make use of the independence of vertical and horizontal motion of a projectile moving freely under gravity",
    title: "Projectiles — the two independent motions",
    blocks: [
      {
        k: "def",
        term: "Projectile",
        text: "Any object moving ==freely under gravity== — the only force on it is its weight. The horizontal and vertical motions run on separate clocks that share one reading: the time.",
      },
      {
        k: "table",
        caption: "The two columns",
        head: ["Horizontal", "Vertical"],
        rows: [
          ["$a = 0$", "$a = g$, downwards"],
          ["velocity constant", "the suvat equations apply"],
          ["$s = v_{\\text{H}}t$", "$s = u_{\\text{V}}t + \\tfrac{1}{2}at^2$"],
        ],
      },
      {
        k: "eq",
        eq: "$v_{\\text{H}} = v\\cos\\theta$        $u_{\\text{V}} = v\\sin\\theta$",
        note: "Set the two columns up before touching the calculator. The examiner report's own advice: *teaching students to set calculations out in two columns would help them to keep horizontal and vertical components clearly separated*.",
      },
      {
        k: "figure",
        kind: "ph-projectile",
        caption:
          "A launch at 40°: the horizontal velocity never changes, the vertical velocity loses g every second, and only time belongs to both columns.",
      },
      { k: "h", text: "At the top of the flight" },
      {
        k: "bullets",
        items: [
          "The vertical velocity is ==zero== at the highest point.",
          "The horizontal velocity never changes, so the horizontal column has no top-of-flight event at all.",
          "The vertical acceleration is still $g$, downwards.",
          "That fact unlocks the launch-speed show-thats: $u_{\\text{V}} = \\sqrt{2g\\Delta h}$, then $u = u_{\\text{V}} \\div \\sin\\theta$.",
          "A ball kicked so that it reaches 5.0 m at $35^{\\circ}$: $u_{\\text{V}} = \\sqrt{2 \\times 9.81 \\times 5.0} = 9.90\\ \\text{m s}^{-1}$, so $u = 9.90 \\div \\sin 35^{\\circ} = 17\\ \\text{m s}^{-1}$ (WPH11 January 2021, Q13).",
        ],
      },
      {
        k: "worked",
        title: "A ball thrown at a wall",
        question:
          "A boy throws a ball at a wall 5.00 m away. The top of the wall is 3.00 m above the release point, and the ball is thrown with an initial velocity of $9.70\\ \\text{m s}^{-1}$ at $49.0^{\\circ}$ to the horizontal. **(a)** Show that the ball travelled the distance to the wall in about 0.8 s. (3) **(b)** Deduce whether the ball went over the wall. (4) — *WPH11 October 2022, Q15*",
        steps: [
          "(a) Horizontal column first — $a = 0$:\n$v_{\\text{H}} = 9.70\\cos 49.0^{\\circ} = 6.36\\ \\text{m s}^{-1}$\n$t = \\frac{5.00}{6.36} = 0.786\\ \\text{s}$\nOne more significant figure than the *about 0.8 s* asked.",
          "(b) Vertical column:\n$u_{\\text{V}} = 9.70\\sin 49.0^{\\circ} = 7.32\\ \\text{m s}^{-1}$\n$s = u_{\\text{V}}t + \\tfrac{1}{2}at^2 = (7.32)(0.786) - (4.905)(0.786)^2$",
          "$s = 2.72\\ \\text{m}$\nEvery height carries its unit — the report records marks lost for bare numbers.",
          "Compare:\n$2.72\\ \\text{m} < 3.00\\ \\text{m}$\nSo the ball does not go over the wall. The comparison is the final marking point.",
        ],
        answer: "(a) t = 0.786 s · (b) no — 2.72 m < 3.00 m, the ball does not clear the wall",
        ms: {
          label: "Examiner's report",
          text: "*Many candidates lost marks by neglecting units for their values of height.*",
        },
      },
      {
        k: "worked",
        title: "A stone thrown from a cliff",
        question:
          "A stone is projected horizontally from a cliff with an initial horizontal velocity of $3.8\\ \\text{m s}^{-1}$, from a height of 12 m above the sea. Calculate the horizontal distance travelled by the stone before it lands. (3) — *WPH11 January 2023, Q11*",
        steps: [
          "Vertical column first — $u_{\\text{V}} = 0$:\n$12 = \\tfrac{1}{2}(9.81)t^2$\n$t = 1.56\\ \\text{s}$",
          "Horizontal column — $a = 0$:\n$s = v_{\\text{H}}t = 3.8 \\times 1.56 = 5.9\\ \\text{m}$",
        ],
        answer: "$s = 5.9\\ \\text{m}$",
        ms: {
          label: "Examiner's report",
          text: "*Others used a = g in the horizontal plane, or u = 3.8 m s⁻¹ in the vertical plane. Teaching students to set calculations out in two columns would help them to keep horizontal and vertical components clearly separated.*",
        },
      },
      {
        k: "worked",
        title: "A golfer's ball",
        question:
          "A golfer hit a golf ball into the air at a speed of $52\\ \\text{m s}^{-1}$ and an angle of $41^{\\circ}$ to the horizontal. The ball landed on the ground near a hole, and the ground was 11 m higher than the starting point of the ball. **(a)** Show that the vertical component of the ball's initial velocity was about 30 m s⁻¹. (2) **(b)** Show that the time taken by the ball to reach the ground was about 7 s. You should ignore the effects of air resistance. (3) **(c)** The hole is a horizontal distance of 250 m from the starting point of the ball. Deduce whether the ball landed within 5.0 m of the hole. (3) — *WPH11 June 2022, Q18*",
        steps: [
          "(a) Resolve the launch velocity:\n$u_{\\text{V}} = 52\\sin 41^{\\circ} = 34.1\\ \\text{m s}^{-1}$\nCarry 34.1 into (b) — one more significant figure than the printed *about 30*.",
          "(b) The ground is 11 m ==above== the launch point, so the full quadratic is needed:\n$11 = 34.1t - 4.905t^2$\n$4.905t^2 - 34.1t + 11 = 0$",
          "$t = 6.62\\ \\text{s}$\nThe other root, 0.34 s, is the ball passing the 11 m height on the way up.",
          "(c) Horizontal column:\n$v_{\\text{H}} = 52\\cos 41^{\\circ} = 39.2\\ \\text{m s}^{-1}$\n$\\text{range} = 39.2 \\times 6.62 = 260\\ \\text{m}$",
          "Compare:\n$260\\ \\text{m} > 255\\ \\text{m}$\nSo the ball lands beyond the 5.0 m window — no.",
          "Doubling the time to maximum height works only when the projectile lands at its launch height. This ground is higher, so it does not apply here.",
        ],
        answer: "(a) 34.1 m s⁻¹ · (b) t = 6.62 s · (c) no — 260 m > 255 m",
        ms: {
          label: "Examiner's report",
          text: "*The most common incorrect approach was to find the time to maximum height and double it, giving a time that is too long.*",
        },
      },
      {
        k: "worked",
        title: "Impact speed and angle",
        question:
          "An athlete of weight 680 N runs horizontally and clears the bar with kinetic energy of 409 J. After clearing the bar he falls 1.4 m vertically before landing. Calculate the magnitude of the athlete's landing velocity and its direction as an angle from the vertical. (4) — *WPH11 October 2024, Q15*",
        steps: [
          "The horizontal speed comes from the kinetic energy. The mass first:\n$m = \\frac{W}{g} = \\frac{680}{9.81} = 69.3\\ \\text{kg}$\n$v_{\\text{H}} = \\sqrt{\\frac{2 \\times 409}{69.3}} = 3.44\\ \\text{m s}^{-1}$",
          "Vertical column — falling from rest:\n$v_{\\text{V}} = \\sqrt{2 \\times 9.81 \\times 1.4} = 5.24\\ \\text{m s}^{-1}$\nThe equations of motion or $\\Delta E_{\\text{grav}} = \\Delta E_{\\text{k}}$ both score the mark.",
          "Recombine the columns:\n$v = \\sqrt{3.44^2 + 5.24^2} = 6.3\\ \\text{m s}^{-1}$\n$\\tan\\theta = \\frac{3.44}{5.24}$",
          "$\\theta = 33^{\\circ}$ from the vertical.\nA larger launch speed leaves $v_{\\text{V}}$ unchanged and grows $v_{\\text{H}}$, so the landing gets shallower.",
        ],
        answer: "$v = 6.3\\ \\text{m s}^{-1}$ at $33^{\\circ}$ from the vertical",
      },
      {
        k: "worked",
        title: "A projectile from a mountain",
        question:
          "Scientists launched a projectile from a mountain. The launch site was 2.0 km above sea level, and the projectile initially moved with a speed of $500\\ \\text{m s}^{-1}$ at an angle of $22^{\\circ}$ to the horizontal. A ship was a horizontal distance of 15 km from the launch site, and the projectile passed over the ship. Determine the height above sea level of the projectile as it passed over the ship. You should ignore the effects of air resistance. (4) — *WPH11 January 2025, Q19*",
        steps: [
          "Time to the ship comes from the horizontal column:\n$u_{\\text{H}} = 500\\cos 22^{\\circ} = 464\\ \\text{m s}^{-1}$\n$t = \\frac{15000}{464} \\approx 32\\ \\text{s}$\nUse the given value from the earlier part — ecf protects it.",
          "Vertical column:\n$u_{\\text{V}} = 500\\sin 22^{\\circ} = 187\\ \\text{m s}^{-1}$\n$s = u_{\\text{V}}t - \\tfrac{1}{2}gt^2 = (187)(32) - (4.905)(32)^2 = 961\\ \\text{m}$",
          "That height is measured from the ==launch point==. The question asks from sea level:\n$961 + 2000 = 2961 \\approx 3.0 \\times 10^3\\ \\text{m}$",
          "Two slips to avoid: forgetting the launch height altogether, and computing the maximum height when the question asks the height at a stated point.",
        ],
        answer: "$\\approx 3.0 \\times 10^3\\ \\text{m}$ above sea level ($2.96 \\times 10^3$ m)",
      },
    ],
  },
  {
    spec: "8",
    statement:
      "be able to draw and interpret free-body force diagrams to represent forces on a particle or on an extended but rigid body using the concept of centre of gravity of an extended body",
    title: "Free-body diagrams and centre of gravity",
    blocks: [
      {
        k: "def",
        term: "Free-body force diagram",
        text: "A diagram showing ==only the forces acting on the one chosen object== — never the forces it exerts on anything else. Every arrow starts on the body, carries the name of the force it represents, and has a length ==proportional to the magnitude==.",
      },
      {
        k: "def",
        term: "Centre of gravity",
        text: "The point through which the ==weight of an object may be taken to act==. The mark scheme prints *may be taken to act* (or *is considered to act*), because the mass is spread through the whole body, not concentrated at that point.",
      },
      {
        k: "figure",
        kind: "ph-freebody",
        caption:
          "A block held stationary on a slope: weight from the centre of gravity, normal contact force perpendicular to the surface, drag along it.",
      },
      {
        k: "worked",
        title: "An engine pushing a truck",
        question:
          "An engine pushes a truck along horizontal rails at constant velocity, exerting a horizontal force of $1.2 \\times 10^5\\ \\text{N}$ on the truck. The diagram shows the free-body force diagram of the engine, with its weight and the normal contact force from the rails already drawn. Complete the free-body force diagram for the engine. (4) — *WPH11 October 2022, Q18*",
        steps: [
          "Constant velocity means the resultant force on the engine is zero, so the horizontal forces must balance.",
          "By Newton's third law the truck pushes back on the engine with $1.2 \\times 10^5\\ \\text{N}$ to the left.\nThe rails push the engine forwards with $1.5 \\times 10^5\\ \\text{N}$ to the right.",
          "The balance is short by $0.3 \\times 10^5\\ \\text{N}$ to the left:\n$1.5 \\times 10^5 - 1.2 \\times 10^5 = 3.0 \\times 10^4\\ \\text{N}$\nSo air resistance acts to the left with $3.0 \\times 10^4\\ \\text{N}$ — the printed scheme notes *do not accept 'viscous drag'*. The weights are vertical and already balance.",
          "Draw the arrows so the total length to the left ==equals== the total to the right — the printed scheme measures the balance to within 2 mm.",
        ],
        answer: "force from truck $1.2 \\times 10^5$ N left · air resistance $3.0 \\times 10^4$ N left · rails $1.5 \\times 10^5$ N right, lengths balanced",
        ms: {
          label: "Examiner's report",
          text: "*Many students failed to notice that an additional backwards force from air resistance was required to bring the engine into equilibrium.* · *The arrows in a free-body force diagram should have lengths proportional to the magnitudes of the forces. This was very rarely seen.*",
        },
      },
      {
        k: "worked",
        title: "A ball falling at terminal velocity",
        question:
          "A student carried out an experiment using a data logger to record the motion of a ball-bearing as it fell through a liquid. The ball-bearing is falling at terminal velocity, and the drag force has already been drawn on the free-body diagram. Complete the free-body force diagram for the ball-bearing. (2) — *WPH11 October 2023, Q18*",
        steps: [
          "Two arrows complete the diagram: weight downwards and upthrust upwards, both starting from the ball's centre.",
          "At terminal velocity the three forces balance:\n$W = \\text{drag} + \\text{upthrust}$\nSo the weight arrow's length equals the drag arrow's plus the upthrust arrow's — the printed scheme marks the arrow lengths, not just the arrows.",
        ],
        answer: "weight down and upthrust up, drawn from the centre; $W$ = drag + upthrust",
        ms: {
          label: "Examiner's report",
          text: "*Some students labelled weight as G, which is incorrect.* · *Some students appeared not to appreciate that the length of the arrow represents the size of the force.*",
        },
      },
      {
        k: "worked",
        title: "The diagram when the object accelerates",
        question:
          "An object moves through a fluid. The upthrust on it is 90 N upwards and its weight is 49 N downwards. The object has a mass of 5.0 kg and accelerates upwards at $4.0\\ \\text{m s}^{-2}$. Which expression gives the magnitude of the drag force on the object?  A $5.0 \\times 4.0$ · B $90 - 49$ · C $90 - 49 - (5.0 \\times 4.0)$ · D $90 - 49 + (5.0 \\times 4.0)$ — *WPH11 January 2025, Q9*",
        steps: [
          "The object accelerates, so the diagram is ==not== in equilibrium and the arrows are drawn deliberately unequal:\n$\\Sigma F = ma = 5.0 \\times 4.0 = 20\\ \\text{N}$ upwards",
          "Balance along the motion:\n$90 - 49 - \\text{drag} = 20$\n$\\text{drag} = 21\\ \\text{N}$ downwards\nOption C.",
        ],
        answer: "C — drag = 21 N downwards",
        ms: {
          label: "Mark scheme",
          text: "A *this gives the resultant force*; B *the resultant force is not zero*; D *this assumes that the object is accelerating downwards*.",
        },
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
        text: "A body at rest stays at rest, and a body moving with constant velocity keeps that velocity, ==unless a resultant force acts on it==. Constant velocity — including terminal velocity — always means $\\Sigma F = 0$: forces may be present, but they cancel.",
      },
      {
        k: "def",
        term: "Newton's second law",
        text: "For constant mass, the resultant force = mass × acceleration, with the acceleration ==in the direction of the resultant force==. The equation is printed on the data sheet; the examined skill is ==identifying the resultant==.",
      },
      {
        k: "eq",
        eq: "$\\Sigma F = ma$        $P - W = ma$ (pushed upwards)        $W - U - D = ma$ (falling through a fluid)",
        note: "Write the balance for the actual direction of motion before substituting. Thrust, weight, drag and tension are the individual forces — only their sum is multiplied by $m$.",
      },
      { k: "h", text: "The whole system" },
      {
        k: "bullets",
        items: [
          "ΣF = ma applies to the ==whole system==: a car and its passengers accelerate as one body.",
          "For a vehicle driven by its wheels, the frictional force from the road is the ==driving force==, and the drag acts backwards (WPH11 June 2021, Q3).",
          "At constant velocity the two still cancel — a zero resultant does not mean zero friction.",
          "A load hung from a ==moving pulley== is carried by two segments of the same rope, so the tension is the load ÷ 2 (WPH11 June 2021, Q17).",
          "The free end of the rope then moves twice the distance the load moves — the force halves because the distance doubles.",
        ],
      },
      {
        k: "worked",
        title: "A trampolinist's push",
        question:
          "A gymnast bounces on a trampoline. The trampoline gives the gymnast a maximum upward acceleration of $14.2\\ \\text{m s}^{-2}$. The mass of the gymnast is 58 kg. Calculate the maximum upward force exerted on the gymnast. (4) — *WPH11 January 2023, Q15*",
        steps: [
          "Weight first — *use of W = mg* is marking point 1:\n$W = mg = 58 \\times 9.81 = 569\\ \\text{N}$",
          "Up positive, so the push must cancel the weight and then accelerate her:\n$P - W = ma$\n$P = (58)(14.2) + 569$",
          "$P = 1392.6 \\approx 1.4 \\times 10^3\\ \\text{N}$",
        ],
        answer: "$P \\approx 1.4 \\times 10^3\\ \\text{N}$",
        ms: {
          label: "Examiner's report",
          text: "*Many candidates subtracted the weight from the resultant force instead of adding it to find the upward force, scoring only two of the four available marks.*",
        },
      },
      {
        k: "worked",
        title: "A rocket lifting off",
        question:
          "A rocket is launched vertically. Its engines give the rocket a total upward thrust of $7.3 \\times 10^7\\ \\text{N}$, and the mass of the rocket is $5.0 \\times 10^6$ kg. **(a)** Calculate the initial vertical acceleration of the rocket. (3) **(b)** As the rocket rises, it uses fuel to produce a constant thrust. Explain why the acceleration will increase. (1) — *WPH11 October 2023, Q11*",
        steps: [
          "(a) Weight first — the thrust is ==not== the resultant:\n$W = (5.0 \\times 10^6)(9.81) = 4.9 \\times 10^7\\ \\text{N}$",
          "$\\Sigma F = 7.3 \\times 10^7 - 4.9 \\times 10^7 = 2.4 \\times 10^7\\ \\text{N}$\n$a = \\frac{\\Sigma F}{m} = \\frac{2.4 \\times 10^7}{5.0 \\times 10^6} = 4.8\\ \\text{m s}^{-2}$",
          "(b) As fuel burns, the mass falls and the weight falls with it, while the thrust stays constant.\nSo the resultant force grows and the acceleration increases.",
        ],
        answer: "(a) $a = 4.8\\ \\text{m s}^{-2}$ · (b) the mass falls, the thrust stays constant",
        ms: {
          label: "Examiner's report",
          text: "*A common mistake was to treat the thrust from the rocket's engines as the resultant force, which led to an incorrect answer.* · *A fair proportion of candidates explained why the rocket accelerated, by stating that the thrust was greater than the weight, rather than explaining why the acceleration would increase.*",
        },
      },
      {
        k: "worked",
        title: "A car and its passengers",
        question:
          "A car of mass 1850 kg accelerates at $0.230\\ \\text{m s}^{-2}$ when the resultant force on it is 460 N. Calculate the total mass of the people in the car. (3) — *WPH11 January 2025, Q11*",
        steps: [
          "The whole system accelerates as one body:\n$m = \\frac{\\Sigma F}{a} = \\frac{460}{0.230} = 2000\\ \\text{kg}$",
          "The question asks for the people, not the whole car:\n$2000 - 1850 = 150\\ \\text{kg}$",
        ],
        answer: "150 kg",
        ms: {
          label: "Examiner's report",
          text: "*Some candidates added the mass of the car to the total mass rather than subtracting, and some did not attempt to subtract the mass of the car at all.*",
        },
      },
      {
        k: "worked",
        title: "The scales in a lift",
        question:
          "A student of weight 600 N is standing on weighing scales in a lift. The scales are calibrated to give readings in newtons. The lift moves upwards at constant velocity, then decelerates to rest. As the lift moves, the student looks at the readings on the scales. Explain the readings on the scales. (6) — *WPH11 January 2022, Q14* (starred)",
        steps: [
          "The reading on the scales is the ==contact force on the student==.\nThe printed first point: *the force of the lift/scales on the student is the reading on the scales*. The reading equals the weight only when the vertical acceleration is zero.",
          "At constant velocity the resultant force on the student is zero:\n$R = W = 600\\ \\text{N}$\nAt rest it would read 600 N too.",
          "While the lift decelerates, the velocity points up and the deceleration points ==down==.\nSo the resultant force on the student acts downwards.",
          "The weight is the larger force:\n$W - R = ma$\n$R < W$\nPrinted points: *As lift decelerates reaction is less than weight* · *As the lift decelerates the reading on the scales will be less than 600 N (because the upward force on the student is less than his weight)*.",
          "The ==starred== marking: six indicative points earn four IC marks, and the last two marks pay for structure — *coherent and logical structure with linkages and fully sustained lines of reasoning demonstrated throughout* scores the top band.\nChain the sentences: as the lift decelerates, the resultant force is downwards, so the reading falls below 600 N.",
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
            text: "Name the forces and say which is larger. Initially there is no drag, so there is a resultant force.",
          },
          {
            title: "2 · Accelerate",
            text: "The object accelerates in the direction of the resultant — its velocity increases.",
          },
          {
            title: "3 · Drag grows",
            text: "As the velocity increases, the drag force increases.",
          },
          {
            title: "4 · Resultant falls",
            text: "The resultant force decreases, so the acceleration decreases — and the velocity is still increasing, just more slowly.",
          },
          {
            title: "5 · Balance",
            text: "Eventually the resultant force is zero: drag + upthrust = weight for a falling object. Say it as an equation of the actual forces.",
          },
          {
            title: "6 · Terminal",
            text: "The object continues at constant velocity — its ==terminal velocity==, by Newton's first law. Name it.",
          },
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The printed chain for a released balloon (WPH11 October 2022, Q14): *Initially there is a resultant upward force*; *Balloon accelerates (upwards)*; *(Downward) air resistance force, (initially zero) increases as velocity/speed increases. (U and W are constant.)*; *Resultant (upward) force decreases so acceleration decreases*; *(Eventually) resultant force is zero Or upthrust = weight + drag*; *Balloon continues to move (upwards) at constant velocity Or … with terminal velocity/speed.* The same six steps answer the rising or falling version — the forces swap roles, the stages do not.",
      },
      {
        k: "figure",
        kind: "ph-terminal",
        caption:
          "The v–t signature of terminal velocity: gradient g at the start, the gradient decaying as drag grows, then a horizontal line when the forces balance.",
      },
      {
        k: "worked",
        title: "Two masses over a pulley",
        question:
          "A mass of 0.4 kg and a mass of 0.5 kg are joined by a string that passes over a pulley. Which expression gives the acceleration of the 0.5 kg mass?  A $\\frac{(0.5 - 0.4) \\times 9.81}{0.5}$ · B $\\frac{(0.5 - 0.4) \\times 9.81}{0.5 + 0.4}$ · C $\\frac{0.5 \\times 9.81}{0.5 - 0.4}$ · D $\\frac{0.5 \\times 9.81}{0.5 + 0.4}$ — *WPH11 October 2025, Q7*",
        steps: [
          "Treat the two masses as ==one system==:\n$\\Sigma F = (m_2 - m_1)g$ with $m_{\\text{total}} = m_1 + m_2$",
          "$a = \\frac{(0.5 - 0.4) \\times 9.81}{0.5 + 0.4} = 1.09\\ \\text{m s}^{-2}$\nOption B.",
          "The limiting case agrees: equal masses give $a = 0$, and the balance holds on both sides.",
        ],
        answer: "B — $a = 1.09\\ \\text{m s}^{-2}$",
      },
      {
        k: "worked",
        title: "A bungee jumper below the equilibrium point",
        question:
          "A student bungee-jumps from a bridge on an elastic rope. Position A is where the distance fallen equals the original rope length, so the rope is just taut; position B is the equilibrium position; position C is the position of maximum extension. Explain how the acceleration of the student changes from position A to position C. Air resistance is negligible. (6) — *WPH11 October 2024, Q17*",
        steps: [
          "Below A the rope stretches: the ==tension increases as the extension increases==, and the weight is constant.",
          "Between A and B the weight is greater than the tension.\nThe resultant is downwards but shrinking, so the acceleration decreases while the speed still grows.",
          "At B the tension equals the weight:\nresultant force zero, so ==acceleration zero==.\nB is the equilibrium position.",
          "Below B the tension beats the weight:\nthe resultant is ==upwards==, so the student decelerates to rest at C.",
          "So the acceleration is zero at B and largest upwards at C — the reverse of the common error, which puts the maximum acceleration at the equilibrium point and zero at the bottom.",
        ],
        answer: "a decreases from A to B, is zero at B, then points upwards and grows to C",
        ms: {
          label: "Examiner's report",
          text: "*Many candidates described the energy changes of the student, which is not sufficient to explain changes to acceleration.*",
        },
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
        text: "The ==weight per unit mass==, measured in N kg⁻¹. Near the Earth's surface $g = 9.81\\ \\text{N kg}^{-1}$ — the same number, and the same physics, as the acceleration of free fall.",
      },
      {
        k: "eq",
        eq: "$W = mg$        $g = \\frac{F}{m}$        $g = 9.81\\ \\text{N kg}^{-1} = 9.81\\ \\text{m s}^{-2}$",
        note: "W = mg opens most longer chains — the rocket, the lift, the trampolinist and the terminal-velocity questions all begin with the weight. Use ==9.81== (9.8 is accepted); g = 10 loses a mark.",
      },
      {
        k: "bullets",
        items: [
          "A weight given in the question means $m = W \\div g$ is a marking point of its own — write it, even mid-chain.",
          "A question that ends at a weight ends with $W = mg$ — stopping at the mass loses the final mark.",
          "On another planet $g$ enters as the local acceleration, not as 9.81 — the Mars card in statement 1 works the ratio route.",
          "The two units describe the same quantity: $9.81\\ \\text{N kg}^{-1}$ and $9.81\\ \\text{m s}^{-2}$ are equally creditable.",
        ],
      },
      {
        k: "worked",
        title: "The weight of a boat",
        question:
          "A resultant force of 4800 N acts on a boat and gives it an acceleration of $0.31\\ \\text{m s}^{-2}$. Calculate the weight of the boat. (3) — *WPH11 June 2025, Q11*",
        steps: [
          "The mass comes from the resultant — the conversion is a marking point of its own:\n$m = \\frac{\\Sigma F}{a} = \\frac{4800}{0.31} = 15500\\ \\text{kg}$",
          "The question asks for the weight:\n$W = mg = 15500 \\times 9.81 = 1.5 \\times 10^5\\ \\text{N}$",
          "Stopping at the mass loses the final mark — and the unit is N, not kg.",
        ],
        answer: "$W \\approx 1.5 \\times 10^5\\ \\text{N}$",
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
        k: "bullets",
        items: [
          "Three setups appear across the papers: strobe photography, light gates, and a stopwatch over a known height.",
          "All three end in the same place: $g$ from a gradient.",
          "From rest, $s = \\tfrac{1}{2}gt^2$ — so $s$ is proportional to $t^2$.",
          "The $s$ against $t^2$ line is straight through the origin, with gradient $g \\div 2$.",
          "$g = 2 \\times \\text{gradient}$ — write the doubling step out.",
        ],
      },
      {
        k: "steps",
        caption: "The strobe-photograph method",
        items: [
          {
            title: "Drop and flash",
            text: "A ball falls from rest beside a metre rule while a strobe flashes at a known constant interval. Measure the fall distances $s_1, s_2, s_3 \\dots$ between successive images.",
          },
          {
            title: "Plot s against t²",
            text: "$s = \\tfrac{1}{2}gt^2$ with $u = 0$. Compared with $y = mx$, the gradient is $\\tfrac{1}{2}g$ — the comparison to $y = mx$ is a marking point of its own.",
          },
          {
            title: "Double the gradient",
            text: "A line through $(0.060\\ \\text{s}^2,\\ 0.30\\ \\text{m})$ has gradient $0.30 \\div 0.060 = 5.0$, so $g = 10.0\\ \\text{m s}^{-2}$ (printed range 9.8 to 10.1).",
          },
          {
            title: "Convert a photograph",
            text: "Measurements made ==on a printed photograph== are converted with the ==printed scale==: a 6.2 cm separation on the magnified picture is a real fall of $6.2 \\div 1.8 = 3.4\\ \\text{cm}$ (WPH11 January 2020, Q16).",
          },
        ],
      },
      {
        k: "worked",
        title: "The stopwatch method",
        question:
          "A student used two different methods to investigate the acceleration of a freely falling object. In the first method the student dropped a ball from rest at a known height and used a stopwatch to measure the time taken for the ball to reach the ground, repeating the measurement and calculating the mean acceleration. Explain why there was a large uncertainty in the calculated value of acceleration. (2) — *WPH11 October 2025, Q13*",
        steps: [
          "A short fall gives a time close to the experimenter's reaction time.\nSo the ==percentage uncertainty in $t$== is large.",
          "$g = \\frac{2s}{t^2}$\nThe percentage uncertainty in $t$ counts ==twice== in the answer for $g$.",
        ],
        answer: "short fall → the reaction time is a large fraction of $t$ → doubled into $g$",
      },
      {
        k: "worked",
        title: "The light-gate method",
        question:
          "In the second method the student positioned light gates near the top and bottom of a transparent vertical tube and dropped a metal cylinder into the tube. The time taken for the cylinder to pass through each light gate was recorded by a data logger, and the distance between the light gates was measured. **(i)** Give one other measurement needed to determine the acceleration of the metal cylinder. (1) **(ii)** The speed of the metal cylinder through the first light gate was $1.39\\ \\text{m s}^{-1}$ and through the second light gate $2.96\\ \\text{m s}^{-1}$. The distance between the light gates was 355 mm. Calculate the acceleration of the metal cylinder. (2) — *WPH11 October 2025, Q13*",
        steps: [
          "(i) The speed at a gate = the cylinder's length ÷ the time through the gate.\nSo the ==other measurement== is the cylinder's length.",
          "(ii) Convert before substituting: $355\\ \\text{mm} = 0.355\\ \\text{m}$.",
          "No time is needed anywhere:\n$a = \\frac{v^2 - u^2}{2s} = \\frac{2.96^2 - 1.39^2}{2 \\times 0.355} = 9.6\\ \\text{m s}^{-2}$",
          "Plotted the other way, the gradient of $v^2$ against $s$ is $2a$ — the doubling trap again.",
        ],
        answer: "(i) the cylinder's length · (ii) $a = 9.6\\ \\text{m s}^{-2}$",
      },
      {
        k: "table",
        caption: "Error sources — and which way they push g",
        head: ["Error", "Effect on measured g"],
        rows: [
          ["Ball already moving when the timer starts", "g too large (u > 0 assumed 0)"],
          ["Distance overestimated", "g too large (s too large, t unchanged)"],
          ["Human reaction time on a stopwatch", "t too large, so g too small — and the % uncertainty in t is doubled in the answer"],
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
        text: "Quoting $g = 9.81\\ \\text{m s}^{-2}$ with no working — the value must come from the experiment, and the report quoted above scores such answers no credit. And the gradient left ==undoubled==: the line's gradient is $g \\div 2$, not $g$.",
      },
    ],
  },
];

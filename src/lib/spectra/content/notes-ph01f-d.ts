import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 1 Forces · Part D (statements 9–11)
   Newton's first and second laws with terminal velocity, weight
   and gravitational field strength, and Core Practical 1 with its
   three setups, the six graph orientations that give g, and the
   error-direction table. Teaching first, worked examples at the
   end of each section, in the owner's plain style.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH01F_D: SpecSection[] = [
  {
    spec: "9",
    statement:
      "be able to use the equation ΣF = ma, and understand how to use this equation in situations where m is constant (Newton's second law of motion), including Newton's first law of motion where a = 0, objects at rest or travelling at constant velocity. Use of the term 'terminal velocity' is expected",
    title: "Newton's laws and terminal velocity",
    blocks: [
      {
        k: "def",
        term: "Newton's first law",
        text: "A body at rest stays at rest, and a body moving with constant velocity keeps that velocity, ==unless a resultant force acts on it==. Constant velocity, including terminal velocity, always means $\\Sigma F = 0$: forces may be present, but they cancel.",
      },
      {
        k: "def",
        term: "Newton's second law",
        text: "For constant mass, the resultant force = mass × acceleration, with the acceleration ==in the direction of the resultant force==. The equation is printed on the data sheet; the examined skill is ==identifying the resultant==.",
      },
      {
        k: "eq",
        eq: "$\\Sigma F = ma$        $P - W = ma$ (pushed upwards)        $W - U - D = ma$ (falling through a fluid)",
        note: "Write the balance for the actual direction of motion before substituting. Thrust, weight, drag and tension are the individual forces. Only their sum is multiplied by $m$.",
      },
      { k: "h", text: "Reading ΣF = ma off a diagram" },
      {
        k: "bullets",
        items: [
          "ΣF = ma applies to the ==whole system==: a car and its passengers accelerate as one body.",
          "For a vehicle driven by its wheels, the frictional force from the road is the ==driving force==, and the drag acts backwards (WPH11 June 2021, Q3).",
          "At constant velocity the two still cancel. A zero resultant does not mean zero friction.",
          "Thrust is ==one force==, never the resultant. The examiner report noted candidates who would *treat the thrust from the rocket's engines as the resultant force*.",
          "A load hung from a ==moving pulley== is carried by two segments of the same rope, so the tension is the load ÷ 2 (WPH11 June 2021, Q17).",
          "The free end of the rope then moves twice the distance the load moves, so the force halves because the distance doubles.",
        ],
      },
      { k: "h", text: "Terminal velocity" },
      {
        k: "steps",
        caption: "The stages of the terminal-velocity explanation",
        items: [
          {
            title: "1 · Start",
            text: "Name the forces and say which is larger. Initially there is no drag, so there is a resultant force.",
          },
          {
            title: "2 · Accelerate",
            text: "The object accelerates in the direction of the resultant, so its velocity increases.",
          },
          {
            title: "3 · Drag increases",
            text: "As the velocity increases, the drag force increases.",
          },
          {
            title: "4 · Resultant falls",
            text: "The resultant force decreases, so the acceleration decreases. The velocity is still increasing, just more slowly.",
          },
          {
            title: "5 · Balance",
            text: "Eventually the resultant force is zero: drag + upthrust = weight for a falling object. Write it as an equation in the actual forces.",
          },
          {
            title: "6 · Terminal",
            text: "The object continues at constant velocity: its ==terminal velocity==, by Newton's first law. Use the term, because the spec expects it.",
          },
        ],
      },
      {
        k: "table",
        caption: "The same six stages, both directions",
        head: ["Stage", "Falling ball", "Rising balloon"],
        rows: [
          ["Start", "weight > upthrust + drag — resultant downwards", "upthrust > weight (+ drag) — resultant upwards"],
          ["Accelerate", "speeds up downwards", "accelerates upwards"],
          ["Drag increases", "drag increases as speed increases", "drag increases as speed increases"],
          ["Resultant falls", "resultant downwards, decreasing", "resultant upwards, decreasing"],
          ["Balance", "upthrust + drag = weight", "upthrust = weight + drag"],
          ["Terminal", "constant velocity downwards", "constant velocity upwards"],
        ],
      },
      {
        k: "bullets",
        items: [
          "The same six stages answer the rising or falling version. Only the forces swap roles.",
          "Keep the order in step with the mark scheme: the drag sentence comes ==before== the sentence about the resultant falling. One scheme marks the drag point as *dependent on MP2* (WPH11 January 2025, Q20(a)).",
          "Explain with forces, not with speed: the speed is the effect and the forces are the cause.",
        ],
      },
      {
        k: "figure",
        kind: "ph-terminal",
        caption:
          "The velocity-time graph of terminal velocity: gradient g at the start, the gradient decreasing as drag increases, then a horizontal line once the forces balance.",
      },
      {
        k: "worked",
        title: "A rocket lifting off",
        question:
          "A rocket is launched vertically. Its engines give the rocket a total upward thrust of $7.3 \\times 10^7\\ \\text{N}$, and the mass of the rocket is $5.0 \\times 10^6$ kg. **(a)** Calculate the initial vertical acceleration of the rocket. (3) **(b)** As the rocket rises, it uses fuel to produce a constant thrust. Explain why the acceleration will increase. (1) — *WPH11 October 2023, Q11*",
        steps: [
          "(a) Weight first, because the thrust is ==not== the resultant:\n$W = (5.0 \\times 10^6)(9.81) = 4.9 \\times 10^7\\ \\text{N}$",
          "$\\Sigma F = 7.3 \\times 10^7 - 4.9 \\times 10^7 = 2.4 \\times 10^7\\ \\text{N}$\n$a = \\frac{\\Sigma F}{m} = \\frac{2.4 \\times 10^7}{5.0 \\times 10^6} = 4.8\\ \\text{m s}^{-2}$",
          "(b) As fuel burns, the mass falls and the weight falls with it, while the thrust stays constant.\nSo the resultant force increases and the acceleration increases.",
        ],
        answer: "(a) $a = 4.8\\ \\text{m s}^{-2}$ · (b) the mass falls, the thrust stays constant",
        ms: {
          label: "Examiner's report",
          text: "*A common mistake was to treat the thrust from the rocket's engines as the resultant force, which led to an incorrect answer.* · *A fair proportion of candidates explained why the rocket accelerated, by stating that the thrust was greater than the weight, rather than explaining why the acceleration would increase.*",
        },
      },
      {
        k: "worked",
        title: "A trampolinist's push",
        question:
          "A gymnast bounces on a trampoline. The trampoline gives the gymnast a maximum upward acceleration of $14.2\\ \\text{m s}^{-2}$. The mass of the gymnast is 58 kg. Calculate the maximum upward force exerted on the gymnast. (4) — *WPH11 January 2023, Q15*",
        steps: [
          "Weight first:\n$W = mg = 58 \\times 9.81 = 569\\ \\text{N}$",
          "Up is positive, so the push must cancel the weight and then accelerate her:\n$P - W = ma$\n$P = (58)(14.2) + 569$",
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
          "The reading on the scales is the ==contact force on the student==: *the force of the lift/scales on the student is the reading on the scales*. The reading equals the weight only when the vertical acceleration is zero.",
          "At constant velocity the resultant force on the student is zero:\n$R = W = 600\\ \\text{N}$\nAt rest it would read 600 N too.",
          "While the lift decelerates, the velocity points up and the deceleration points ==down==.\nSo the resultant force on the student acts downwards.",
          "The weight is the larger force:\n$W - R = ma$\n$R < W$\n*As lift decelerates reaction is less than weight* · the reading falls below 600 N.",
          "Link the sentences: as the lift decelerates, the resultant force is downwards, so the reading falls below 600 N. *Coherent and logical structure with linkages* is the top-band wording for the two structure marks.",
          "In the opposite situations the reading rises: accelerating upwards, or decelerating while moving downwards, makes the contact force ==greater== than the weight.",
        ],
        answer: "600 N at constant velocity (and at rest); below 600 N while the lift decelerates upwards",
      },
      {
        k: "worked",
        title: "The parachute opens",
        question:
          "After jumping from an aeroplane, a skydiver accelerated and reached terminal velocity. The skydiver opened his parachute and his speed changed. After a time, he reached a new terminal velocity. Explain how the forces on the skydiver caused his acceleration to vary after his parachute opened. (5) — *WPH11 June 2025, Q20(d)*",
        steps: [
          "The moment it opens: *air resistance is greater than weight*.",
          "The resultant force is upwards, so the acceleration is upwards, against the velocity. The skydiver decelerates.",
          "*As speed decreases, air resistance decreases* — the drag falls with the speed, so the deceleration decreases.",
          "*Until upthrust + air resistance = weight* — the new balance, written as the actual forces.",
          "*Resultant force = 0 and acceleration = 0* — the new, slower terminal velocity, by Newton's first law.\nDo not write *the speed decreases* as the explanation; the scheme says *Ignore speed decreases*.",
        ],
        answer: "drag > weight → resultant up, deceleration → drag falls with speed → drag + upthrust = weight → a = 0 at the new terminal velocity",
        ms: {
          label: "Mark scheme",
          text: "*air resistance is greater than weight* · *(As speed decreases) air resistance decreases* · *(Until upthrust +) air resistance = weight* · *Ignore speed decreases*.",
        },
      },
      {
        k: "worked",
        title: "Two masses over a pulley",
        question:
          "A mass of 0.4 kg and a mass of 0.5 kg are joined by a string that passes over a pulley. Which expression gives the acceleration of the 0.5 kg mass?  A $\\frac{(0.5 - 0.4) \\times 9.81}{0.5}$ · B $\\frac{(0.5 - 0.4) \\times 9.81}{0.5 + 0.4}$ · C $\\frac{0.5 \\times 9.81}{0.5 - 0.4}$ · D $\\frac{0.5 \\times 9.81}{0.5 + 0.4}$ — *WPH11 October 2025, Q7*",
        steps: [
          "Treat the two masses as ==one system==:\n$\\Sigma F = (m_2 - m_1)g$ with $m_{\\text{total}} = m_1 + m_2$",
          "The resultant accelerates ==all== of the mass, because the string makes them move together:\n$a = \\frac{(0.5 - 0.4) \\times 9.81}{0.5 + 0.4} = 1.09\\ \\text{m s}^{-2}$\nOption B.",
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
          "Between A and B the weight is greater than the tension.\nThe resultant is downwards but decreasing, so the acceleration decreases while the speed still increases.",
          "At B the tension equals the weight:\nresultant force zero, so ==acceleration zero==.\nB is the equilibrium position.",
          "Below B the tension is larger than the weight:\nthe resultant is ==upwards==, so the student decelerates to rest at C.",
          "So the acceleration is zero at B and largest upwards at C. The common error puts the maximum acceleration at the equilibrium point and zero at the bottom, which is the reverse.",
        ],
        answer: "a decreases from A to B, is zero at B, then points upwards and increases to C",
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
        text: "The ==weight per unit mass==, measured in N kg⁻¹. Near the Earth's surface $g = 9.81\\ \\text{N kg}^{-1}$, and the same value serves as the acceleration of free fall in m s⁻².",
      },
      {
        k: "bullets",
        items: [
          "The definition MCQ returns with the same wrong options every time: *force per unit length has no meaning* (January 2020); *it should be weight, not acceleration*; *weight, not gravitational potential energy* (January 2023).",
          "The two units are the same quantity: $9.81\\ \\text{N kg}^{-1} = 9.81\\ \\text{m s}^{-2}$. The 2026 01A paper credited $\\text{N kg}^{-1}$ as a unit of acceleration.",
        ],
      },
      {
        k: "eq",
        eq: "$W = mg$        $g = \\frac{F}{m}$        $g = 9.81\\ \\text{N kg}^{-1} = 9.81\\ \\text{m s}^{-2}$",
        note: "Most longer questions open with the weight: the rocket, the lift, the trampolinist and the terminal-velocity questions all need W = mg first. Use ==9.81== (9.8 is accepted); g = 10 loses a mark.",
      },
      { k: "h", text: "g on other worlds" },
      {
        k: "table",
        caption: "The g the papers have used",
        head: ["Where", "g", "Where the papers used it"],
        rows: [
          ["Earth's surface", "9.81 m s⁻²", "every Earth-based question"],
          ["the Moon", "1.63 m s⁻²", "the January 2026 lunar projectile and drop MCQ"],
          ["Mars", "0.38 × Earth's", "the June 2023 ratio question, the January 2019 probe"],
        ],
      },
      {
        k: "bullets",
        items: [
          "Change the value of $g$ and the SUVAT equations work exactly as before. Nothing changes except the acceleration you substitute, and the schemes treat the acceleration as ==constant== throughout the flight.",
          "Where a weight is given in the question, $m = W \\div g$ is a marking point in its own right. Show the conversion even in the middle of a longer calculation.",
          "A question that ends at a weight ends with $W = mg$. Stopping at the mass loses the final mark.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Acceleration per unit mass* or *energy per unit mass* as the definition: the field strength is the ==weight== per unit mass. The weight's unit written as kg instead of N. And stopping at the mass when the question asks for the weight.",
      },
      {
        k: "worked",
        title: "The weight of a boat",
        question:
          "A resultant force of 4800 N acts on a boat and gives it an acceleration of $0.31\\ \\text{m s}^{-2}$. Calculate the weight of the boat. (3) — *WPH11 June 2025, Q11*",
        steps: [
          "The mass comes from the resultant:\n$m = \\frac{\\Sigma F}{a} = \\frac{4800}{0.31} = 15500\\ \\text{kg}$",
          "The question asks for the weight:\n$W = mg = 15500 \\times 9.81 = 1.5 \\times 10^5\\ \\text{N}$",
          "Stopping at the mass loses the final mark, and the unit is N, not kg.",
        ],
        answer: "$W \\approx 1.5 \\times 10^5\\ \\text{N}$",
      },
      {
        k: "worked",
        title: "Weight to mass to density",
        question:
          "A cylinder of aluminium has a weight of 35.0 N and a volume of $1.32 \\times 10^{-3}\\ \\text{m}^3$. Which of the following calculations gives the density of aluminium in kg m⁻³?  A $\\frac{9.81 \\times 1.32 \\times 10^{-3}}{35.0}$ · B $\\frac{1.32 \\times 10^{-3}}{35.0 \\times 9.81}$ · C $\\frac{35.0}{9.81 \\times 1.32 \\times 10^{-3}}$ · D $\\frac{35.0}{9.81 \\times 1.32 \\times 10^{-6}}$ — *WPH11 June 2021, Q2*",
        steps: [
          "Weight to mass first:\n$m = \\frac{W}{g} = \\frac{35.0}{9.81} = 3.57\\ \\text{kg}$",
          "Then mass over volume:\n$\\rho = \\frac{m}{V} = \\frac{35.0}{9.81 \\times 1.32 \\times 10^{-3}}$",
          "Option C. The number it gives is $2.7 \\times 10^3\\ \\text{kg m}^{-3}$, aluminium's density, which confirms the expression is the right way up.",
        ],
        answer: "C — $\\rho \\approx 2.7 \\times 10^3\\ \\text{kg m}^{-3}$",
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
          "All three finish the same way, with $g$ taken from a gradient.",
          "From rest, $s = \\tfrac{1}{2}gt^2$, so $s$ is proportional to $t^2$.",
        ],
      },
      {
        k: "figure",
        kind: "ph-cp1-setups",
        caption:
          "The three setups, side by side. Every one measures distances and times. What changes is which tool times the fall, and how many readings you get.",
      },
      { k: "h", text: "The strobe photograph" },
      {
        k: "bullets",
        items: [
          "A ball falls beside a metre rule while a strobe flashes at a known fixed interval. One photograph holds ==every== position, so every distance $s_1, s_2, s_3 \\dots$ is available.",
          "Measure the distances between successive images; each gap is one interval of time apart.",
          "Plot $s$ against $t^2$: $s = \\tfrac{1}{2}gt^2$ with $u = 0$ compares to $y = mx$, so the gradient is $\\tfrac{1}{2}g$. Stating the comparison with $y = mx$ is marked in its own right.",
          "Measurements made ==on a printed photograph== are converted with the ==printed scale==: a 6.2 cm separation on the magnified picture is a real fall of $6.2 \\div 1.8 = 3.4\\ \\text{cm}$ (WPH11 January 2020, Q16).",
          "A shorter flash duration means less blur, which is why the laboratory strobe beat the phone app (WPH11 October 2024, Q14).",
        ],
      },
      { k: "h", text: "The light gates" },
      {
        k: "bullets",
        items: [
          "A rod or cylinder falls through two light gates; a data logger times each pass.",
          "The speed through a gate is the object's ==length== ÷ the time through it. The length is the extra measurement the question asks for.",
          "Two speeds $u$ and $v$ a distance $s$ apart give $g$ from $v^2 = u^2 + 2as$. No timing of the whole fall is needed.",
        ],
      },
      { k: "h", text: "The stopwatch and rule" },
      {
        k: "bullets",
        items: [
          "Drop from a known height $s$, time the fall $t$, repeat and average.",
          "$g = \\frac{2s}{t^2}$, but every $t$ measured by hand contains the experimenter's reaction time.",
          "A short fall makes it worse: the reaction time is a large ==fraction== of $t$, and $t$ is squared, so the percentage uncertainty in $t$ counts ==twice== in $g$.",
          "This is the method the large-uncertainty questions are written about; the other two setups exist to avoid the problem.",
        ],
      },
      { k: "h", text: "Graphs that give g" },
      {
        k: "bullets",
        items: [
          "One experiment can be plotted many ways. The 2019 scheme printed six accepted orientations in one table. The pattern is to rearrange $s = \\tfrac{1}{2}gt^2$ (or $v^2 = 2as$) into $y = mx$ and read which letters sit on each axis.",
          "What happens to the 2 decides the conversion: if the 2 stays with the gradient, halve it; if it moves to an axis quantity, the gradient is $g$ itself.",
        ],
      },
      {
        k: "table",
        caption: "The six orientations (WPH11 January 2019, Q12(c))",
        head: ["Graph plotted", "a comes from"],
        rows: [
          ["s against v²", "1/(2 × gradient)"],
          ["v² against s", "gradient / 2"],
          ["2s against v²", "1/gradient"],
          ["v² against 2s", "gradient"],
          ["v²/2 against s", "gradient"],
          ["s against v²/2", "1/gradient"],
        ],
      },
      { k: "h", text: "Which measurements are enough" },
      {
        k: "bullets",
        items: [
          "The 2026 01A multiple choice asks which measurements determine $g$: the answer is ==the distance fallen and the time taken==, which is all the equation $g = 2s \\div t^2$ needs.",
          "The rejected options all failed the same way: *it would not be possible to determine acceleration due to gravity without further quantities*.",
          "Ask the same question of any setup: name the equation you will use, then count the unknowns. Every one of them needs a measurement.",
        ],
      },
      {
        k: "table",
        caption: "Error sources and their effect on the measured g",
        head: ["Error", "Effect on measured g"],
        rows: [
          ["Ball already moving when the timer starts", "g too large (u > 0 assumed 0)"],
          ["Distance overestimated", "g too large (s too large, t unchanged) — the 2022 MCQ's g = 11.2"],
          ["Human reaction time on a stopwatch", "t too large, so g too small — and the % uncertainty in t is doubled in the answer"],
          ["Air resistance and upthrust present", "g too small (a < g)"],
          ["Flash duration blurs the image", "uncertainty in s; a shorter flash gives less blur"],
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Quoting $g = 9.81\\ \\text{m s}^{-2}$ with no working: the value must come from the experiment, and such answers gain no credit. And the gradient left ==undoubled==: the line's gradient is $g \\div 2$, not $g$.",
      },
      {
        k: "worked",
        title: "The strobe value for g",
        question:
          "A strobe photograph gives a straight $s$ against $t^2$ line through the origin passing through $(0.060\\ \\text{s}^2,\\ 0.30\\ \\text{m})$. Determine the acceleration of free fall. — *WPH11 January 2020, Q16* format",
        steps: [
          "Gradient of the line:\n$\\text{gradient} = \\frac{0.30}{0.060} = 5.0\\ \\text{m s}^{-2}$",
          "The gradient is $\\tfrac{1}{2}g$, so the doubling is marked separately:\n$g = 2 \\times 5.0 = 10.0\\ \\text{m s}^{-2}$",
          "Printed range: 9.8 to 10.1. Write the unit, and never quote $9.81$ without working.",
        ],
        answer: "$g = 10.0\\ \\text{m s}^{-2}$ (9.8–10.1 accepted)",
        ms: {
          label: "Examiner's report",
          text: "*It was pleasing to see the number of candidates correctly determining the gradient. Some candidates did not then double this value.* · *A small proportion of candidates gave an answer of g = 9.81 m s⁻² but showed no evidence of any working to support their answer. These candidates gained no credit.*",
        },
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
          "(i) The speed at a gate is the cylinder's length ÷ the time through the gate.\nSo the ==other measurement== is the cylinder's length.",
          "(ii) Convert before substituting: $355\\ \\text{mm} = 0.355\\ \\text{m}$.",
          "No time is needed anywhere:\n$a = \\frac{v^2 - u^2}{2s} = \\frac{2.96^2 - 1.39^2}{2 \\times 0.355} = 9.6\\ \\text{m s}^{-2}$",
          "Plotted the other way, the gradient of $v^2$ against $s$ is $2a$, so the same doubling applies.",
        ],
        answer: "(i) the cylinder's length · (ii) $a = 9.6\\ \\text{m s}^{-2}$",
      },
    ],
  },
];

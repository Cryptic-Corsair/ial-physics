import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 2 rebuilt · Part B (statement 14)
   Same dictated register as Part A, see the Part A header and
   research/wph11/scenario-register-guardrails.md. The conservation
   sections teach the recoil families first (zero initial momentum,
   sticking collisions, separating modules, the explosion), then the
   deduce discipline, then the Newton's-laws derivation the statement
   itself asks for ("understand how to relate this to Newton's laws
   of motion"). Worked cards at the section end, folded, one marking
   point per step, citations on every card.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH02R_B: SpecSection[] = [
  {
    spec: "14",
    statement:
      "know the principle of conservation of linear momentum, understand how to relate this to Newton's laws of motion and understand how to apply this to problems in one dimension",
    title: "Conservation of momentum",
    blocks: [
      {
        k: "def",
        term: "The principle of conservation of linear momentum",
        text: "==Total momentum before a collision = total momentum after it==, ==provided no external resultant force acts on the system== (in a closed system). Both halves earn a mark each, the *total* and the *condition*.",
      },
      {
        k: "eq",
        eq: "$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$",
        note: "Take one direction as positive and the other as negative, and state which way is positive before substituting. Momenta of objects moving in opposite directions ==subtract==.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The printed alternatives: *Sum of momenta before (collision) = sum of momenta after (collision) Or Total momentum before (a collision) = total momentum after (a collision) Or Total momentum remains constant Or The momentum of a system remains constant* · *Provided no external/unbalanced/resultant force acts (on the system) Or in a closed/isolated system*. And *Candidates typically failed to score the second mark by neglecting to state the condition for momentum conservation. Students should be encouraged to learn good forms of words for standard answers* (WPH11 October 2022, Q16(a)).",
      },
      {
        k: "steps",
        caption: "The method",
        items: [
          {
            title: "1 · Fix the signs",
            text: "Choose one direction as positive, say so in writing, and make the other direction negative from the first line of working.",
          },
          {
            title: "2 · Write every momentum",
            text: "$p = mv$ for every moving object, before and after, each carrying its sign.",
          },
          {
            title: "3 · Add the totals",
            text: "Total momentum before, total momentum after, two numbers, each with its sign worked in.",
          },
          {
            title: "4 · Equate them",
            text: "Set the two totals equal, the conservation step, with a stationary object contributing zero.",
          },
          {
            title: "5 · Solve, then conclude",
            text: "Solve for the unknown, then state its direction and the verdict the question asks for, a deduce mark dependent on a valid calculation.",
          },
        ],
      },
      { k: "h", text: "A child throwing a ball from a skateboard" },
      {
        k: "bullets",
        items: [
          "A child stands stationary on a skateboard and throws a ball forwards at high velocity.",
          "The total momentum before the throw is zero, because child, ball and skateboard are all stationary.",
          "Momentum is conserved, so the total momentum after the throw is zero too.",
          "The ball carries momentum forwards, so the child and skateboard must carry the same momentum backwards.",
          "The child and skateboard have the greater mass, so they move backwards at the lower velocity.",
          "Therefore, the recoil is slower than the throw because the same momentum sits on the larger mass.",
        ],
      },
      { k: "h", text: "A ball launcher on wheels" },
      {
        k: "bullets",
        items: [
          "A machine on frictionless wheels launches a tennis ball horizontally.",
          "The total momentum before the launch is zero, and no external horizontal force acts on the system.",
          "So the machine rolls backwards with momentum equal in magnitude and opposite in direction to the ball's.",
          "The ball is light and fast; the machine is heavy and slow.",
          "Therefore, every launcher gives the ball momentum forwards and takes the same momentum backwards itself.",
        ],
      },
      { k: "h", text: "Two gliders that stick together" },
      {
        k: "bullets",
        items: [
          "Two gliders approach each other and collide, sticking together.",
          "The total momentum before the collision decides the direction the pair moves after it.",
          "Glider A carries $0.048\\ \\text{kg m s}^{-1}$ to the right; glider B carries $0.022\\ \\text{kg m s}^{-1}$ to the left.",
          "The total is $0.026\\ \\text{kg m s}^{-1}$ to the right, so the stuck pair moves right.",
          "Therefore, add the momenta with their signs first, and the sign of the total is the direction after the collision.",
        ],
      },
      { k: "h", text: "A spaceship separating into modules" },
      {
        k: "bullets",
        items: [
          "A spaceship's three modules separate with the total momentum zero.",
          "The orbital module moves off one way; the service module moves off the other way.",
          "The descent module must carry exactly the momentum that keeps the total at zero.",
          "So it drifts slowly towards the lighter module's side, and that is the direction mark.",
          "The minus sign in the solution is what tells you the direction, so show it, never imply it.",
          "Therefore, in a zero-momentum separation every momentum is balanced by the others, and the minus sign is the physics.",
        ],
      },
      { k: "h", text: "A popcorn kernel popping" },
      {
        k: "bullets",
        items: [
          "A popcorn kernel pops, ejecting hot steam downwards.",
          "The momentum before the pop is zero.",
          "The steam's momentum downwards must be balanced by the kernel's momentum upwards.",
          "The steam is much lighter than the kernel, so the steam leaves at $9.2\\ \\text{m s}^{-1}$ while the kernel rises at $1.5\\ \\text{m s}^{-1}$.",
          "Therefore, an explosion splits zero into two equal and opposite momenta, the light fragment fast and the heavy fragment slow.",
        ],
      },
      { k: "h", text: "Two objects moving in opposite directions" },
      {
        k: "bullets",
        items: [
          "A toy train of mass $3m$ moves right at $v$; a toy truck of mass $m$ moves left at $2v$.",
          "Take right as positive: the total momentum is $3mv - 2mv = mv$.",
          "After the collision they move together as mass $4m$, so the speed is $mv \\div 4m = v/4$.",
          "The new speed is not just the difference between the initial speeds, because the masses are in the equation too.",
          "Therefore, opposite directions subtract, and the combined speed is the difference of the momenta over the total mass.",
        ],
      },
      { k: "h", text: "Two objects moving in the same direction" },
      {
        k: "bullets",
        items: [
          "Two objects move the same way, the faster one catching the slower.",
          "Both momenta are positive, so the total is their sum.",
          "The working is the same three lines, totals before, totals after, equate.",
          "If the question gives a kinetic energy, convert it to a velocity first with $v = \\sqrt{2E_k/m}$.",
          "Therefore, same-direction collisions are additions, and the only trap left is arithmetic, so keep every digit until the end.",
        ],
      },
      { k: "h", text: "Deducing whether momentum is conserved" },
      {
        k: "bullets",
        items: [
          "A deduce question hands you the before and the after, and asks whether the law held.",
          "Compute both totals, with signs, $807.5\\ \\text{kg m s}^{-1}$ before and $775\\ \\text{kg m s}^{-1}$ after in the printed skaters question.",
          "Compare them and write the comparison out, *775 ≠ 808, so momentum was not conserved*.",
          "The verdict mark is dependent on the comparison, never on either number alone.",
          "External forces acted during the collision, and that is why the total changed.",
          "Therefore, in a deduce question the marks are the two totals, the written comparison, and the conclusion, in that order.",
        ],
      },
      { k: "h", text: "How Newton's laws conserve momentum" },
      {
        k: "bullets",
        items: [
          "Two stones collide; stone A pushes B, and B pushes A.",
          "By Newton's third law the two forces are equal in magnitude and opposite in direction.",
          "The two forces act for the same time.",
          "So the change in momentum of A equals the change in momentum of B, in the opposite direction, $\\Delta p = F \\times t$ for each.",
          "By Newton's second law each stone accelerates in proportion to the force on it.",
          "The lighter stone gets the larger change in velocity, because the same $\\Delta p$ sits on the smaller mass.",
          "Therefore, a collision never changes the total momentum, because the equal and opposite forces give the two bodies equal and opposite changes in momentum.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Allow change in momentum = force × time (and force and time are the same for both stones)*, the printed alternative route (WPH11 January 2026, Q13(a)). *Ignore the racket has a lower acceleration than the ball / Ignore the change speed of the racket is lower than the ball* (WPH11 June 2026, Q13(a)). What scores is the ==change in velocity== comparison, argued from the equal change in momentum.",
      },
      { k: "h", text: "The Newton's cradle" },
      {
        k: "bullets",
        items: [
          "Five identical spheres hang in a row, and sphere A is pulled aside and released.",
          "A falls, gaining momentum from its gravitational potential energy.",
          "A strikes the row and stops dead, and its momentum passes along the chain.",
          "Sphere E leaves the far end with the momentum A arrived with.",
          "E rises to the same height A fell from, so the energy is returned as well as the momentum.",
          "Therefore, the cradle shows both laws at once: the momentum passes through the chain, and the energy returns to the same height.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The child on the skateboard",
        question:
          "A child is standing on a skateboard and both are stationary. The child throws a ball forward at a high velocity and the child and the skateboard move backwards at a lower velocity. Explain, in terms of momentum, why the child and the skateboard move backwards at a lower velocity. (4) (WPH11 June 2019, Q11)",
        steps: [
          "The initial momentum of the child, ball and skateboard together is ==zero==.",
          "Momentum is conserved, so the total momentum after the throw is zero as well.",
          "The momentum of the child and skateboard is ==equal in magnitude and opposite in direction== to the momentum of the ball.",
          "The child and skateboard have the greater mass, so their velocity is the ==lower== one.",
          "Every symbol used must be defined, so 'mv' must be defined if it is used for momentum.",
        ],
        answer: "zero before, equal and opposite after, so the larger mass recoils slower",
        ms: {
          label: "Mark scheme",
          text: "*Initial momentum (of the child, ball and skateboard/total) is zero* · *Due to conservation of momentum, the total momentum before the ball is thrown = total momentum after the ball is thrown (so final total momentum is zero)* · *The momentum of the child/skateboard is equal to the momentum of the ball* · *The momentum of the child/skateboard is opposite in direction to the momentum of the ball* · *As the mass of the child/skateboard greater (than the mass of ball), the velocity (of the child/skateboard) will be lower*.",
        },
      },
      {
        k: "worked",
        title: "The spaceship's modules separate",
        question:
          "A spaceship consists of an orbital module, a descent module and a service module. Before entering the Earth's atmosphere, the modules separate: the orbital module (1350 kg) moves off at $0.82\\ \\text{m s}^{-1}$ and the service module (2100 kg) moves in the opposite direction at $0.58\\ \\text{m s}^{-1}$. Before separation the total momentum is zero. Determine the velocity of the descent module (2950 kg) after separation. You should only consider momentum along a horizontal line through the centres of the three modules. (4) (WPH11 January 2023, Q16)",
        steps: [
          "Before separation the total momentum is zero, and that is the equation's right-hand side.",
          "Take the orbital module's direction as positive and keep the total at zero.\n$1350 \\times 0.82 + 2950\\,v - 2100 \\times 0.58 = 0$",
          "$1107 + 2950v - 1218 = 0$, so $v = \\dfrac{111}{2950} = 0.038\\ \\text{m s}^{-1}$",
          "The value alone is one mark. The ==direction== (towards the orbital module) is the final mark, dependent on the calculation.",
          "Show that the minus sign is understood. Write the direction, don't leave it inside the arithmetic.",
        ],
        answer: "0.038 m s⁻¹ towards the orbital module",
        ms: {
          label: "Examiner's report",
          text: "*The idea of initial momentum being zero seemed to be a new concept to many candidates … candidates needed to show that they understood the significance of the minus sign.*",
        },
      },
      {
        k: "worked",
        title: "Two gliders stick together",
        question:
          "Glider A of mass 0.15 kg moves to the right at $0.32\\ \\text{m s}^{-1}$, and glider B of mass 0.20 kg moves to the left at $0.11\\ \\text{m s}^{-1}$. The gliders collide and stick together.\n**(a)** State how Newton's third law applies to the gliders during the collision. (1)\n**(b)** A student predicts that the gliders will move to the left after the collision. Deduce whether the student is correct. (3) (WPH11 January 2025, Q14)",
        steps: [
          "(a) The forces during the collision are ==equal in magnitude and opposite in direction==, and each acts ==on the other glider==, a third-law pair.",
          "(b) Right positive: total momentum $= 0.15 \\times 0.32 - 0.20 \\times 0.11$",
          "$= 0.048 - 0.022 = +0.026\\ \\text{kg m s}^{-1}$",
          "The total is positive, so the combined gliders move ==right== and the prediction is ==not correct==.",
          "The final mark is ==dependent on a valid calculation==. State the direction and the verdict on the prediction, not just the number.",
        ],
        answer: "+0.026 kg m s⁻¹ to the right, so the prediction is not correct",
        ms: {
          label: "Examiner's report",
          text: "*A common error was to use positive values of momentum for both gliders. … It was also relatively common … for candidates to forget to include units. … A number of candidates either did not state the final direction of motion, or did not give a conclusion about whether the prediction was correct.*",
        },
      },
      {
        k: "worked",
        title: "The speed skaters",
        question:
          "Skater B of mass 60 kg moving at $7.5\\ \\text{m s}^{-1}$ collides with skater A of mass 65 kg moving directly ahead at $5.5\\ \\text{m s}^{-1}$. B locks his arms around A and they move on together at $6.2\\ \\text{m s}^{-1}$.\n**(a)** State the principle of conservation of momentum. (2)\n**(b)** Deduce whether momentum is conserved in this collision. (3)\n**(c)** The kinetic energy after the collision is much less than the kinetic energy before the collision, so the collision is inelastic. Explain the decrease in kinetic energy. (2) (WPH11 October 2022, Q16)",
        steps: [
          "(a) ==Total momentum before = total momentum after, provided no external resultant force acts on the system==. Both halves earn a mark each.",
          "(b) Before: $65 \\times 5.5 + 60 \\times 7.5 = 357.5 + 450 = 807.5\\ \\text{kg m s}^{-1}$\nAfter: $(65 + 60) \\times 6.2 = 775\\ \\text{kg m s}^{-1}$",
          "The ==comparison== is the marking point: $775 \\neq 807.5$, so momentum was ==not conserved==.",
          "The expected velocity for conservation would have been $6.5\\ \\text{m s}^{-1}$, an accepted alternative comparison.",
          "(c) Forces acted between the skaters during the collision, and those forces ==did work==.",
          "The work done was not recovered, and it transferred energy to thermal energy and other stores.",
          "Momentum and energy are separate accounts: external forces broke the momentum total, while the contact forces' work took the energy down.",
        ],
        answer: "807.5 then 775 kg m s⁻¹, so momentum is not conserved · KE falls because the contact forces did work",
        ms: {
          label: "Examiner's report",
          text: "*no marks can be easily awarded without mentioning work being done. Candidates overall simply stated that energy was transformed without telling us how. Consequently, only a very few of the most well-prepared students were able to score marks in this question.*",
        },
      },
      {
        k: "worked",
        title: "The popcorn kernel",
        question:
          "Popcorn kernels contain water. When heated, the water turns to steam, the kernel 'pops' and moves upwards. The average water content in a popcorn kernel is 14% of the total mass. A kernel is heated until it pops: steam is ejected downwards, and the popped kernel moves upwards with an initial speed of $1.5\\ \\text{m s}^{-1}$. Calculate the speed at which the steam is ejected. total mass of unpopped kernel = 0.11 g (4) (WPH11 January 2020, Q16(b))",
        steps: [
          "Split the kernel's mass with the 14% share.\n$m_{\\text{water}} = 0.14 \\times 0.11 = 0.0154\\ \\text{g}$, $m_{\\text{popcorn}} = 0.0946\\ \\text{g}$",
          "The momentum before the pop is zero, because the kernel sits still.",
          "Conservation of momentum, kernel upwards positive.\n$0 = 0.0946 \\times 1.5 + 0.0154 \\times v$",
          "$v = -\\dfrac{0.0946 \\times 1.5}{0.0154} = -9.2\\ \\text{m s}^{-1}$",
          "The minus sign is the direction, the steam goes ==downwards== at $9.2\\ \\text{m s}^{-1}$.",
        ],
        answer: "9.2 m s⁻¹ downwards",
      },
      {
        k: "worked",
        title: "The tennis-ball launcher",
        question:
          "A machine used to launch tennis balls horizontally stands on frictionless wheels. Before a tennis ball is launched, the machine is stationary. The ball is launched with velocity $4.5\\ \\text{m s}^{-1}$.\n**(a)** Explain, in terms of momentum, why the machine starts to move as the ball is launched. (3)\n**(b)** Calculate the velocity of the machine just after the ball is launched. mass of ball = 0.056 kg; mass of machine = 2.9 kg (3) (WPH11 June 2023, Q15)",
        steps: [
          "(a) Total momentum is conserved, because no external forces act on the machine-ball system.",
          "The total momentum before the launch is ==zero==.",
          "The ball's final momentum is not zero, so the machine must carry an ==equal and opposite== momentum backwards.",
          "(b) Take the ball's direction as positive.\n$2.9v + 0.056 \\times 4.5 = 0$",
          "$v = -\\dfrac{0.252}{2.9} = -0.087\\ \\text{m s}^{-1}$, so the machine rolls backwards at $0.087\\ \\text{m s}^{-1}$.",
        ],
        answer: "0.087 m s⁻¹ backwards, opposite to the ball",
        ms: {
          label: "Examiner's report",
          text: "*Common errors included the usual absence of the word 'sum' or 'total' regarding the momentum of a system, rather than of an individual component. Many candidates gave a very good explanation in terms of Newton's laws but gained no credit as the question specifically asked for an explanation in terms of momentum.*",
        },
      },
      {
        k: "worked",
        title: "The skittles and the ball",
        question:
          "In a game of Skittles, a ball is thrown at wooden skittles to knock them over.\n**(b)** Explain how Newton's second and third laws of motion apply to the ball and the skittle during the collision. (6)\n**(c)** The ball collides with a stationary skittle. During the collision the horizontal velocity of the ball changes from $7.2\\ \\text{m s}^{-1}$ to $1.6\\ \\text{m s}^{-1}$. The horizontal velocity of the skittle immediately after the collision is $3.1\\ \\text{m s}^{-1}$ in the same direction as the ball. Determine the mass of the ball. mass of skittle = 1.4 kg (3) (WPH11 January 2024, Q16)",
        steps: [
          "(b) The ball applies a force to the skittle, and the skittle applies a force to the ball.",
          "By ==Newton's third law==, the two forces are equal in magnitude and opposite in direction.",
          "So there is a resultant force on each, and by ==Newton's second law== each accelerates.",
          "The skittle accelerates forwards and the ball decelerates. The two accelerations are different because the masses are.",
          "(c) Conservation of momentum, ball's direction positive.\n$m \\times 7.2 = m \\times 1.6 + 1.4 \\times 3.1$",
          "$m \\times (7.2 - 1.6) = 4.34$, so $m = \\dfrac{4.34}{5.6} = 0.78\\ \\text{kg}$",
          "The skittle does not stick to the ball. Each keeps its own mass and its own velocity after.",
        ],
        answer: "(c) 0.78 kg",
        ms: {
          label: "Examiner's report",
          text: "*Some students went awry by assuming that the ball and skittle stuck together, and adding the masses together. A significant minority of students made errors when re-arranging the equation after showing correct substitution into the equation.*",
        },
      },
      {
        k: "worked",
        title: "The curling stones",
        question:
          "In curling, stone A moves towards a stationary stone B and collides with it. During the collision there is a resultant force on stone A and a resultant force on stone B in the opposite direction; these forces have the same magnitude and act for the same time.\n**(a)** Explain how Newton's second law predicts that momentum is conserved when stone A collides with stone B. (2)\n**(b)** Before the collision, stone A (18 kg) had a kinetic energy of 3.8 J. After the collision, stone B (17 kg) moved with a speed of $0.45\\ \\text{m s}^{-1}$. Stone A will slide past the target if its momentum after the collision is greater than $5.5\\ \\text{kg m s}^{-1}$. Deduce whether stone A will slide past the target. (5) (WPH11 January 2026, Q13)",
        steps: [
          "(a) By Newton's second law, the stones accelerate in opposite directions for the same time.",
          "So the momentum of A decreases and the momentum of B increases by ==the same amount==, and the total never changes.",
          "(b) The kinetic energy becomes a velocity first.\n$u_A = \\sqrt{\\dfrac{2 \\times 3.8}{18}} = 0.650\\ \\text{m s}^{-1}$",
          "Momentum before, momentum after.\n$18 \\times 0.650 = p_A + 17 \\times 0.45$",
          "$11.7 = p_A + 7.65$, so $p_A = 4.1\\ \\text{kg m s}^{-1}$",
          "$4.1 < 5.5$, so stone A will ==not== slide past the target. The verdict needs the written comparison.",
        ],
        answer: "(b) $p_A = 4.1$ kg m s⁻¹ < 5.5, so stone A will not slide past the target",
      },
      {
        k: "worked",
        title: "The snooker balls",
        question:
          "A white ball of mass 2m moving at $2.1\\ \\text{m s}^{-1}$ collides with a stationary green ball of mass m. After the collision both balls move in the original direction, the white ball at $0.6\\ \\text{m s}^{-1}$.\n**(a)** Calculate the velocity of the green ball after the collision. (3)\n**(b)** Discuss how momentum is conserved in this collision. You should refer to Newton's laws of motion in your answer. (6) (WPH11 June 2026 01A, Q16)",
        steps: [
          "(a) Conservation of momentum, both masses symbolic.\n$2m \\times 2.1 = 2m \\times 0.6 + m \\times v$",
          "$4.2m = 1.2m + mv$, so $v = 3.0\\ \\text{m s}^{-1}$",
          "(b) Initially the white ball has all the momentum.",
          "The white ball applies a force to the green ball, and the green ball exerts a force on the white ball.",
          "By ==Newton's third law==, the forces are equal in magnitude and opposite in direction.",
          "So there is a resultant force on each ball, acting for the same time.",
          "By ==Newton's second law==, the white ball decelerates and the green ball accelerates.",
          "So the white ball's momentum decreases and the green ball's increases by the same amount, and the total stays constant.",
        ],
        answer: "(a) $3.0$ m s⁻¹ · (b) N3 pair, equal and opposite forces for the same time, N2, so equal and opposite momentum changes",
      },
      {
        k: "worked",
        title: "The Newton's cradle",
        question:
          "A Newton's cradle has five identical steel spheres A–E, each hanging on a string. Sphere A is released, collides with B and comes to rest; B, C and D remain at rest; sphere E moves away and rises to its highest point. Describe the changes in energy and momentum of spheres A and E, from the time sphere A is released until sphere E reaches its highest point. Ignore the effects of air resistance. (6) (WPH11 June 2025, Q18(c))",
        steps: [
          "As A falls, its gravitational potential energy decreases and its kinetic energy increases.",
          "As A falls, its momentum increases.",
          "During the collision, the momentum of A decreases and the momentum of E increases, and momentum is conserved as it passes along the chain.",
          "During the collision, the kinetic energy of A is transferred to E.",
          "As E rises, its kinetic energy and momentum decrease to zero, and its gravitational potential energy increases to a maximum.",
          "The total energy of A before the collision equals the total energy of E after, and E rises to the height A fell from.",
        ],
        answer: "A: GPE → KE → momentum passed along the chain; E: receives KE and momentum, converts them back to GPE at the same height",
      },
    ],
  },
];

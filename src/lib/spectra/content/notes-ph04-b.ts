import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 4 · Part B (statement 25)
   Register pass (2026-11-23): the prose is rewritten in the same
   register as the Topic 2 Materials note — full sentences, the
   working symbols inside the sentences, every force named with its
   owner and its direction, one logical step per bullet joined with
   "so", and no rhetorical asides. The worked questions are set out
   the way the papers print them and their text is unchanged; the
   mark scheme and examiner-report wordings stay quoted verbatim
   (scripts/t04-quotes.ts; every number re-computed by
   scripts/t04-numbers.ts).
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH04_B: SpecSection[] = [
  {
    spec: "25",
    statement:
      "a be able to use the equation for viscous drag (Stokes' Law), F = 6πηrv. b understand that this equation applies only to small spherical objects moving at low speeds with laminar flow (or in the absence of turbulent flow) and that viscosity is temperature dependent",
    title: "Viscosity, Stokes' law and terminal velocity",
    blocks: [
      {
        k: "def",
        term: "Laminar flow",
        text: "Flow in which the layers of the fluid slide past each other ==without mixing==, and the velocity of the fluid at a fixed point stays constant. Laminar describes the ==flow of the fluid==, not the object.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The layers of fluid flow past each other without mixing* · Or *Velocity at a fixed point (relative to the drop) remains constant* — either sentence scores the laminar mark (WPH11 October 2021, Q17(a)(i)).",
      },
      {
        k: "def",
        term: "Turbulent flow",
        text: "Flow in which the layers of the fluid mix and the flow is chaotic. The layers no longer slide past each other in order.",
      },
      {
        k: "def",
        term: "Viscosity",
        text: "A measure of a fluid's resistance to flow, with the unit **Pa s**. Warming a liquid lowers its viscosity; cooling a liquid raises its viscosity. Viscosity is a ==scalar== — a resistance to flow has no direction.",
      },
      {
        k: "bullets",
        items: [
          "Honey pours slowly and water pours fast. The difference between them is the viscosity.",
          "A warmer liquid is ==less viscous==, so the drag on a sphere at a given speed is smaller, so the forces balance at a higher speed. The terminal velocity is greater.",
          "When a liquid cools, the viscosity rises, so the terminal velocity falls and the fall takes longer.",
          "The viscosity belongs to the ==fluid==. It appears only in the drag, never in a weight or an upthrust.",
          "In a multiple choice question, the **Pa s** option is the viscosity distractor.",
        ],
      },
      {
        k: "eq",
        eq: "$F = 6\\pi\\eta r v$",
        note: "Stokes' law — the viscous drag on a sphere = 6π × viscosity × radius × speed. The specification prints the drag as F; the force balances in these notes write it as D. The v is a ==speed==. Reading it as a volume loses every mark that follows.",
      },
      {
        k: "bullets",
        items: [
          "The layer of fluid touching the sphere is dragged along with it; each layer beyond moves a little less.",
          "The fluid exerts an equal and opposite pull back on the sphere. That force is the ==viscous drag==.",
          "The drag is proportional to each factor on its own. Double the viscosity, the radius or the speed, and the drag doubles.",
        ],
      },
      { k: "h", text: "When Stokes' law applies" },
      {
        k: "bullets",
        items: [
          "Stokes' law applies only when all four hold. The object is ==small==, the object is ==spherical==, the speed is ==low==, and the flow is ==laminar==.",
          "There is no low-viscosity condition. Stokes' law ==applies at any viscosity==, but not to ==every object== — the object must be small.",
          "Two-mark versions want the printed pair, a small spherical object and laminar flow (or a low speed).",
          "Give only as many conditions as the question asks for. A wrong extra statement can lose the mark.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Small spherical object Or Spherical object moving at low speed* · *Laminar flow [allow non-turbulent flow]* — the printed pair (WPH11 October 2023, Q18(a)).",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Laminar* applied to the ==object== — *a statement that 'the object must be laminar' was not sufficient to score marking point 2*. Laminar describes the flow, not the object (WPH11 October 2023, Q18(a)). The printed CP2 rejections — *the flow around the sphere is turbulent* offered as an error, and *the densities used were incorrect* (WPH11 October 2020, Q15(b)(iv)); and *mass* written where the mark scheme wants the weight.",
      },
      {
        k: "def",
        term: "Terminal velocity",
        text: "The constant, maximum velocity reached by an object falling through a fluid.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The constant maximum velocity reached by an object falling (through a fluid)* · *When the resultant force equals zero* · Or *when the drag plus the upthrust equals the weight* (WPH11 June 2021, Q18(a)).",
      },
      { k: "h", text: "Sinking at terminal velocity" },
      {
        k: "bullets",
        items: [
          "Three forces act on a sphere sinking through a fluid — the weight of the sphere downwards, the upthrust of the fluid on the sphere upwards, and the drag of the fluid on the sphere upwards.",
          "At terminal velocity the resultant force is zero.",
          "Write the balance as one equation, $W = U + D$.",
          "The drag is the difference, $D = W - U$.",
          "One rearrangement finishes most questions, $v = D \\div 6\\pi\\eta r$.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*A statement such as 'weight = drag and upthrust' could be interpreted as meaning that weight = drag, and weight = upthrust …* ==A more mathematically accurate description of 'weight = drag + upthrust' was sufficient== (WPH11 June 2024, Q14(a)). Write the balance with a plus sign between the two upward forces.",
      },
      { k: "h", text: "Reaching terminal velocity" },
      {
        k: "bullets",
        items: [
          "At the moment of release, the speed of the sphere is zero, so the drag on it is zero.",
          "At first the weight of the sphere is greater than the upthrust plus the drag, so the resultant force on the sphere acts downwards, and the sphere accelerates.",
          "As the speed of the sphere increases, the drag on it increases ($D = 6\\pi\\eta r v$), while the weight and the upthrust on it stay the same.",
          "The resultant force downwards becomes smaller, so the acceleration becomes smaller. On a velocity-time graph the curve flattens.",
          "The velocity stops changing when the drag has grown enough that the upthrust plus the drag = the weight ($U + D = W$). The speed has reached the ==terminal velocity==.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The printed four-mark chain (WPH11 January 2025, Q20(a)): *(Initially) weight is greater than upthrust (+ drag)* · *(so) the sphere accelerates* · *drag increases (and upthrust remains constant)* · *(until) the resultant force becomes 0 (and the sphere moves at constant / terminal velocity)*.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*There was a noticeable proportion of answers that described the conditions for Stokes' law instead of answering the question that was asked. Some answers made general statements that drag increases when speed increases, without actually stating that the sphere would increase in speed, and so did not score MP2 or MP3* (WPH11 January 2025, Q20(a)). Say that the sphere ==speeds up==.",
      },
      { k: "h", text: "Rising objects" },
      {
        k: "bullets",
        items: [
          "The drag on an object always acts in the direction opposite to its motion, ==upwards== on a falling object and ==downwards== on a rising object.",
          "A rising object at terminal velocity has zero resultant force, so the upthrust on it = the weight of the object + the drag on it ($U = W + D$).",
          "The upthrust on a rising object is therefore greater than its weight.",
          "A rising bubble has the upthrust acting upwards and the drag acting downwards on it; the weight of the bubble is negligible.",
          "A rising bubble that grows — the upthrust on it grows with the ==cube== of its radius while the drag on it grows with the radius only, so the upthrust grows faster than the drag and the bubble speeds up.",
        ],
      },
      { k: "h", text: "Spheres of different sizes" },
      {
        k: "bullets",
        items: [
          "The weight of a sphere is proportional to $r^3$ and the upthrust on it is proportional to $r^3$, because both depend on the volume.",
          "The drag on a sphere at a given speed is proportional to the radius only ($r$).",
          "The weight and the upthrust therefore grow faster than the drag as the sphere gets bigger, so the forces balance at a higher speed. A larger sphere falls faster.",
          "The terminal velocity of a sphere is proportional to $r^2$. When terminal velocity is measured for spheres of different diameters, a graph of $v$ against $d^2$ is a straight line through the origin.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Most answers did not consider all of the forces acting and tended to refer to only one force. This led to incorrect conclusions, for example stating that drag on the larger sphere is greater, so the terminal velocity is lower and the time taken is greater* (WPH11 January 2025, Q20(b)(ii)). All three forces before any comparison.",
      },
      { k: "h", text: "Testing Stokes' law" },
      {
        k: "bullets",
        items: [
          "Every *deduce* and *assess* answer ends the same way — ==a comparison of two calculated values followed by a conclusion in words==.",
          "The same method works in reverse. Calculate the speed Stokes' law predicts and compare it with the measured speed.",
        ],
      },
      {
        k: "steps",
        caption: "The test, in three lines",
        items: [
          {
            title: "The real drag",
            text: "From the balance at terminal velocity, $D = W - U$, with $U = \\rho_{\\text{fluid}} V g$ and $V = \\tfrac{4}{3}\\pi r^3$.",
          },
          {
            title: "The Stokes drag",
            text: "$F = 6\\pi\\eta r v$ at the measured speed, with $r = d \\div 2$.",
          },
          {
            title: "Compare, then conclude",
            text: "Equal within rounding, Stokes' law applies. Different by far more than rounding, it does not. Finish with a sentence in words — a bare number is not a conclusion.",
          },
        ],
      },
      { k: "h", text: "A balloon rising" },
      {
        k: "bullets",
        items: [
          "On the ground, the upthrust of the air on the balloon is greater than the weight of the balloon, so the resultant force on it acts upwards, and it accelerates.",
          "It expands as it rises, until it reaches its full volume.",
          "Above that point, the volume of the balloon is fixed while the air gets less dense, so the upthrust on the balloon falls ($U = \\rho_{\\text{air}} V g$).",
          "When the upthrust on the balloon < the weight of the balloon, the resultant force on it acts downwards, so the balloon slows down.",
          "It stops rising when its velocity reaches zero at the maximum height.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Many responses … demonstrated confusion that when acceleration decreases, the velocity is still increasing, but is just increasing at a lower rate* (WPH11 October 2023, Q17(c)). While the upthrust still exceeds the weight, the balloon ==still speeds up==, just more and more slowly. And finish the story the question asked for: answers that stopped at the terminal-velocity stage never reached the deceleration to rest.",
      },
      { k: "h", text: "A sphere sinking into colder, deeper water" },
      {
        k: "bullets",
        items: [
          "Start with a sphere sinking through seawater at terminal velocity, so the weight of the sphere = the upthrust on it + the drag on it ($W = U + D$).",
          "Deeper water is colder, and the viscosity of water increases as the temperature falls, so the drag at any given speed is larger.",
          "Deeper water is also denser, so the upthrust on the sphere is larger.",
          "The weight of the sphere does not change.",
          "At the old speed, the upthrust plus the drag is now greater than the weight, so a resultant force acts upwards.",
          "The sphere slows down until the forces balance again. Its ==terminal velocity== in the deeper water is lower.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Mass* written where the mark scheme wants the *weight*; the $v$ in $D = 6\\pi\\eta r v$ read as a volume (examiner reports name this twice); *the densities used were incorrect* (WPH11 October 2020, Q15(b)(iv)); and on a *without calculation* question, *many just quoted the terminal velocity formula without any explanation, despite being instructed not to use calculations* — one sentence comparing the viscosities scores (WPH11 June 2022, Q19(c)).",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The conditions for Stokes' law",
        question:
          "An object is moving through a fluid. Which row of the table states the conditions which must be met for Stokes' law to apply?\nA size any · shape any · flow turbulent\nB size any · shape spherical · flow turbulent\nC size small · shape spherical · flow laminar\nD size small · shape any · flow laminar\n*WPH11 June 2024, Q3*",
        steps: [
          "Option C — the object must be ==small== and ==spherical==, and the flow ==laminar==.",
          "A and B fail on size and on flow; D fails on shape, because the object must be spherical.",
        ],
        answer: "C — small, spherical, laminar",
        ms: {
          label: "Mark scheme",
          text: "*A is incorrect because the object must be small and spherical, and there should be laminar flow* · *B is incorrect because the object must be small and there should be laminar flow* · *D is incorrect because the object must be spherical*.",
        },
      },
      {
        k: "worked",
        title: "Falling through a viscous liquid",
        question:
          "A sphere falls through a viscous liquid, accelerating downwards. Which row of the table describes the upthrust and the viscous drag on the sphere as it accelerates?\nA upthrust increasing · drag increasing\nB upthrust constant · drag increasing\nC upthrust increasing · drag constant\nD upthrust constant · drag constant\n*WPH11 June 2022, Q2*",
        steps: [
          "The upthrust depends on the density of the liquid and the displaced volume, and ==neither changes== during the fall.\nSo the upthrust is constant.",
          "The drag grows with speed ($D = 6\\pi\\eta r v$), and the sphere is speeding up.\nOption B.",
        ],
        answer: "B — upthrust constant, viscous drag increasing",
        ms: {
          label: "Mark scheme",
          text: "*A is incorrect because the upthrust is constant* · *C is incorrect because the upthrust is constant and the viscous drag is increasing* · *D is incorrect because the viscous drag is increasing*.",
        },
      },
      {
        k: "worked",
        title: "The water droplet in oil",
        question:
          "Water is dropped into oil and forms small spherical droplets that sink slowly. One droplet, of volume $3.35 \\times 10^{-8}\\ \\text{m}^3$, sinks at its terminal velocity.\n**(i)** Calculate the weight of the droplet.\ndensity of water $= 1.00 \\times 10^{3}\\ \\text{kg m}^{-3}$ (3)\n**(ii)** Show that the upthrust on the droplet, completely submerged in oil, is about $3 \\times 10^{-4}$ N.\ndensity of oil $= 0.94 \\times 10^{3}\\ \\text{kg m}^{-3}$ (2)\n**(iii)** Calculate the terminal velocity of this droplet.\nviscosity of oil $= 0.11\\ \\text{Pa s}$ (4)\n*WPH11 October 2021, Q17*",
        steps: [
          "(i) The mass and the weight of the droplet.\n$m = \\rho_{\\text{water}} V = 1.00 \\times 10^3 \\times 3.35 \\times 10^{-8} = 3.35 \\times 10^{-5}\\ \\text{kg}$\n$W = mg = 3.35 \\times 10^{-5} \\times 9.81 = 3.3 \\times 10^{-4}\\ \\text{N}$",
          "(ii) Fully submerged, the droplet displaces its own volume of oil.\n$U = \\rho_{\\text{oil}} V g = 940 \\times 3.35 \\times 10^{-8} \\times 9.81 = 3.1 \\times 10^{-4}\\ \\text{N}$",
          "(iii) Sinking at terminal velocity.\n$D = W - U = 3.29 \\times 10^{-4} - 3.09 \\times 10^{-4} = 2.0 \\times 10^{-5}\\ \\text{N}$",
          "The radius comes back out of the volume.\n$r = \\left(\\dfrac{3V}{4\\pi}\\right)^{1/3} = 2.0 \\times 10^{-3}\\ \\text{m}$",
          "$v = \\dfrac{D}{6\\pi\\eta r} = \\dfrac{2.0 \\times 10^{-5}}{6\\pi \\times 0.11 \\times 2.0 \\times 10^{-3}} = 4.8 \\times 10^{-3}\\ \\text{m s}^{-1}$",
        ],
        answer:
          "(i) $3.3 \\times 10^{-4}$ N · (ii) $3.1 \\times 10^{-4}$ N · (iii) $v = 4.8 \\times 10^{-3}\\ \\text{m s}^{-1}$",
        ms: {
          label: "Mark scheme",
          text: "*Use of ρ = m/V* · *Use of W = mg* · *Weight = 3.3 × 10−4 N* · *Use of upthrust = weight of fluid displaced* · *Upthrust = 3.1 × 10−4 (N)* · *Uses upthrust and weight to determine the viscous force F* · *Use of V = 4/3 π r³ to determine r* · *Use of F = 6πηrv* · *v = 4.8 × 10−3 m s−1*.",
        },
      },
      {
        k: "worked",
        title: "The vacuum and the oil",
        question:
          "A small sphere falls through a vacuum, and then through oil, with its motion recorded by a motion sensor. The two velocity-time graphs are drawn one above the other.\nExplain the differences between the shapes of the graphs. (6)\n*WPH11 October 2025 01A, Q14*",
        steps: [
          "The gradient of a velocity-time graph is the acceleration.",
          "In the vacuum there is no drag and no upthrust, so the resultant force on the sphere = its weight, and it never changes.\nThe vacuum line is straight — constant acceleration.",
          "In the oil the drag on the sphere grows as its speed grows.",
          "The resultant force falls towards zero, so the gradient falls with it.",
          "When the drag plus the upthrust = the weight, the resultant force is zero.",
          "The oil line levels off horizontal at constant velocity — the ==terminal velocity==.",
        ],
        answer:
          "vacuum — straight line, constant acceleration; oil — gradient falls to zero at the terminal velocity",
        ms: {
          label: "Mark scheme (indicative content)",
          text: "*Gradient of graph is equal to acceleration* · *In vacuum, drag = 0 (and upthrust = 0)* · *so in vacuum acceleration/gradient is constant* · *In oil, as speed increases, drag force increases* · *Until in oil resultant force becomes zero Or until weight = drag (+ upthrust)* · *so in oil acceleration/gradient decreases to zero*.",
        },
      },
      {
        k: "worked",
        title: "The oil warms up",
        question:
          "A ball bearing falls at terminal velocity through a liquid. The temperature of the liquid increases, and the ball bearing falls with a greater terminal velocity. Which row of the table is correct as the temperature of the liquid increases?\nA drag constant · viscosity increases\nB drag constant · viscosity decreases\nC drag decreases · viscosity increases\nD drag decreases · viscosity decreases\n*WPH11 June 2023, Q9*",
        steps: [
          "At terminal velocity the drag follows from the force balance, $D = W - U$, and neither the weight nor the upthrust changes.\nSo the drag stays ==constant==.",
          "The warmer liquid is ==less viscous==. The lower viscosity lets the same drag balance the weight at a higher speed.\nOption B.",
        ],
        answer: "B — drag constant, viscosity decreases",
        ms: {
          label: "Mark scheme",
          text: "*A is incorrect because viscosity decreases* · *C is incorrect because viscosity decreases* · *D is incorrect because weight of the ball bearing is constant*.",
        },
      },
      {
        k: "worked",
        title: "The helium balloon released",
        question:
          "A child lets go of a helium balloon. The mass of the balloon and string is $9.20 \\times 10^{-3}$ kg and their volume is $5.00 \\times 10^{-2}\\ \\text{m}^3$.\n**(a)** Calculate the resultant force on the balloon immediately after it is released.\ndensity of air $= 1.20\\ \\text{kg m}^{-3}$ (4)\n**(b)** Explain how the forces acting on the balloon affect its motion as it moves upwards from the moment it is released. (6)\n*WPH11 October 2022, Q14*",
        steps: [
          "(a) The upthrust of the air on the balloon = the weight of the air it displaces.\n$U = \\rho_{\\text{air}} V g = 1.20 \\times 5.00 \\times 10^{-2} \\times 9.81 = 0.589\\ \\text{N}$",
          "The weight.\n$W = mg = 9.20 \\times 10^{-3} \\times 9.81 = 0.090\\ \\text{N}$",
          "Immediately after release the drag is still zero.\n$F_{\\text{net}} = U - W = 0.589 - 0.090 = 0.5\\ \\text{N}$ upwards",
          "(b) The upthrust is greater than the weight, so the resultant force acts upwards and the balloon accelerates.",
          "As the speed grows, the drag on the balloon grows from zero, while the upthrust and the weight stay the same.",
          "The resultant force shrinks, so the acceleration shrinks.",
          "When the upthrust = the weight + the drag, the resultant force is zero.",
          "The balloon then keeps moving upwards at constant velocity — its ==terminal velocity==.",
        ],
        answer: "(a) 0.5 N upwards · (b) accelerates, acceleration falls, constant (terminal) velocity",
        ms: {
          label: "Mark scheme (indicative content)",
          text: "*Initially there is a resultant upward force* · *Balloon accelerates (upwards)* · *(Downward) air resistance force, (initially zero) increases as velocity/speed increases* · *Resultant (upward) force decreases so acceleration decreases* · *(Eventually) upthrust = weight + drag* · *Balloon continues to move (upwards) at constant velocity*.",
        },
      },
      {
        k: "worked",
        title: "A second, larger sphere",
        question:
          "The student repeats the falling-sphere experiment with a sphere of greater diameter but the same density, in the same oil at the same temperature, and the conditions for Stokes' law still apply.\nExplain how the time taken for the second sphere to fall the same distance at terminal velocity compares with the time taken for the first. (3)\n*WPH11 January 2025, Q20(b)(ii)*",
        steps: [
          "At the same speed the larger sphere feels more drag, because the drag is proportional to the radius.",
          "But its weight and the upthrust on it grow with the ==cube== of the radius, a greater factor than the growth of the drag.",
          "So the forces balance at a greater speed. The new sphere falls faster and takes ==less== time.",
        ],
        answer: "greater terminal velocity — less time for the same distance",
        ms: {
          label: "Mark scheme",
          text: "*(For the larger sphere at the same speed) drag is greater (because drag is proportional to radius)* · *But upthrust and weight increase by a greater factor than drag Or Weight and upthrust are both proportional to diameter / radius cubed* · *(So) the new sphere had a greater (terminal) velocity, and therefore time taken (for the new sphere) was less*.",
        },
      },
      {
        k: "worked",
        title: "The glass spheres",
        question:
          "A student measures the terminal velocities $v$ of glass spheres of different diameters $d$ falling through a liquid.\n**(a)** Explain what is meant by terminal velocity. (2)\n**(b)** A glass sphere of diameter 35 mm falls at terminal velocity. Show that the drag force on it is about 0.2 N.\ndensity of glass $= 2.52 \\times 10^{3}\\ \\text{kg m}^{-3}$, density of liquid $= 1.43 \\times 10^{3}\\ \\text{kg m}^{-3}$ (5)\n*WPH11 June 2021, Q18*",
        steps: [
          "(a) Terminal velocity is the constant, maximum velocity reached by an object falling through a fluid.\nIt holds when the resultant force equals zero — when the drag plus the upthrust equals the weight.",
          "(b) At terminal velocity the drag = the weight − the upthrust, and both come from the same volume.\n$V = \\tfrac{4}{3}\\pi r^3 = \\tfrac{4}{3}\\pi \\times 0.0175^3 = 2.24 \\times 10^{-5}\\ \\text{m}^3$",
          "$W = \\rho_{\\text{glass}} V g = 2.52 \\times 10^3 \\times 2.24 \\times 10^{-5} \\times 9.81 = 0.554\\ \\text{N}$",
          "$U = \\rho_{\\text{liquid}} V g = 1.43 \\times 10^3 \\times 2.24 \\times 10^{-5} \\times 9.81 = 0.314\\ \\text{N}$",
          "$D = W - U = 0.554 - 0.314 = 0.24\\ \\text{N} \\approx 0.2\\ \\text{N}$",
        ],
        answer: "(b) $D = 0.24\\ \\text{N} \\approx 0.2\\ \\text{N}$",
        ms: {
          label: "Mark scheme",
          text: "*Use of V = 4π r3 / 3* · *Use of upthrust U = weight of fluid displaced W* · *Use of ρ=m / V and WS = mg* · *Use of D = W – U* · *D = 0.24 (N)*.",
        },
      },
      {
        k: "worked",
        title: "The d² graph",
        question:
          "The same student plots $v$ against $d^2$ and the points lie close to a straight line through the origin, of gradient about $6\\ \\text{m}^{-1}\\ \\text{s}^{-1}$. The textbook says that if Stokes' law is obeyed, $v = kd^2$.\n**(i)** Deduce from the graph whether the flow of liquid around the spheres was laminar. (3)\n**(iii)** The constant is given by $k = \\dfrac{(\\rho_{\\text{glass}} - \\rho_{\\text{liquid}})g}{18\\eta}$. Determine a value for $\\eta$. (2)\n*WPH11 June 2021, Q18(c)*",
        steps: [
          "(i) Stokes' flow predicts a straight line through the origin on $v$ against $d^2$.\nThe printed reading — *all data points are close to the straight line through origin*.\nStokes' law implies the flow around the spheres was ==laminar==.",
          "(iii) The gradient is $k$.\n$\\eta = \\dfrac{(\\rho_{\\text{glass}} - \\rho_{\\text{liquid}})g}{18k} = \\dfrac{(2.52 - 1.43) \\times 10^3 \\times 9.81}{18 \\times 6} = 99\\ \\text{Pa s}$",
        ],
        answer: "(i) laminar — the line through the origin matches Stokes' law · (iii) $\\eta \\approx 99\\ \\text{Pa s}$",
        ms: {
          label: "Mark scheme",
          text: "*All data points are close to the straight line through origin* · *This consistent with Stokes' Law.* · *Stokes' Law implies laminar flow (for the spheres)* · *η = 99 Pa s (allow ecf from (c)(ii))*.",
        },
      },
      {
        k: "worked",
        title: "The steel ball bearing in water",
        question:
          "Stokes' law can be used to determine the magnitude of the viscous drag for small, spherical objects moving through a fluid.\n**(a)** State one other condition that must be met in order for Stokes' law to apply to the moving object. (1)\n**(b)** A sphere falls through water at a constant speed of $0.50\\ \\text{m s}^{-1}$. Assess whether Stokes' law can be applied to the falling sphere. You should include calculations in your answer.\ndiameter $= 6.0 \\times 10^{-3}\\ \\text{m}$, mass $= 9.1 \\times 10^{-4}\\ \\text{kg}$, upthrust $= 1.1 \\times 10^{-3}\\ \\text{N}$, viscosity of water $= 8.9 \\times 10^{-4}\\ \\text{Pa s}$ (5)\n*WPH11 January 2020, Q12*",
        steps: [
          "(a) One condition beyond small and spherical — ==laminar flow==, or equivalently a low speed.",
          "(b) The real drag comes from the balance at constant speed.\n$W = mg = 9.1 \\times 10^{-4} \\times 9.81 = 8.9 \\times 10^{-3}\\ \\text{N}$",
          "$D = W - U = 8.93 \\times 10^{-3} - 1.1 \\times 10^{-3} = 7.8 \\times 10^{-3}\\ \\text{N}$",
          "The drag Stokes' law predicts at $0.50\\ \\text{m s}^{-1}$.\n$F = 6\\pi\\eta r v = 6\\pi \\times 8.9 \\times 10^{-4} \\times 3.0 \\times 10^{-3} \\times 0.50 = 2.5 \\times 10^{-5}\\ \\text{N}$",
          "$2.5 \\times 10^{-5}\\ \\text{N} \\ne 7.8 \\times 10^{-3}\\ \\text{N}$ — the Stokes value is about 300 times smaller.\nSo Stokes' law does not apply — the sphere falls too fast for the flow to stay laminar.",
        ],
        answer:
          "(b) $D = 7.8 \\times 10^{-3}$ N, $F = 2.5 \\times 10^{-5}$ N — Stokes' law does not apply",
        ms: {
          label: "Mark scheme",
          text: "*Use of W = mg* · *W=U+D* · *Use of F = 6πrηv* · *Use of W = U + D to obtain quantity to compare, e.g. D = (-) 7.8 x 10-3 (N)* · *Comparison leading to valid conclusion from candidate's calculation.*",
        },
      },
      {
        k: "worked",
        title: "The aluminium sphere in glycerol",
        question:
          "A scientist measures the terminal velocity of an aluminium sphere falling through glycerol.\n**(i)** Show that the weight of the sphere is about $4.8 \\times 10^{-3}$ N.\ndensity of aluminium $= 2.70 \\times 10^{3}\\ \\text{kg m}^{-3}$, diameter of sphere $= 7.00 \\times 10^{-3}\\ \\text{m}$ (4)\n**(ii)** The terminal velocity is $4.05 \\times 10^{-2}\\ \\text{m s}^{-1}$. Deduce whether Stokes' law applied to the falling sphere.\ndensity of glycerol $= 1.26 \\times 10^{3}\\ \\text{kg m}^{-3}$, viscosity of glycerol $= 9.50 \\times 10^{-1}\\ \\text{Pa s}$ (3)\n*WPH11 June 2022, Q19*",
        steps: [
          "(i) The volume, then the mass.\n$V = \\tfrac{4}{3}\\pi \\times (3.50 \\times 10^{-3})^3 = 1.80 \\times 10^{-7}\\ \\text{m}^3$\n$m = \\rho V = 2.70 \\times 10^3 \\times 1.80 \\times 10^{-7} = 4.85 \\times 10^{-4}\\ \\text{kg}$",
          "$W = mg = 4.85 \\times 10^{-4} \\times 9.81 = 4.76 \\times 10^{-3}\\ \\text{N} \\approx 4.8 \\times 10^{-3}\\ \\text{N}$",
          "(ii) The real drag at terminal velocity.\n$U = \\rho_{\\text{glycerol}} V g = 1.26 \\times 10^3 \\times 1.80 \\times 10^{-7} \\times 9.81 = 2.22 \\times 10^{-3}\\ \\text{N}$\n$D = W - U = 4.76 \\times 10^{-3} - 2.22 \\times 10^{-3} = 2.54 \\times 10^{-3}\\ \\text{N}$",
          "The drag Stokes' law predicts.\n$F = 6\\pi\\eta r v = 6\\pi \\times 0.95 \\times 3.5 \\times 10^{-3} \\times 4.05 \\times 10^{-2} = 2.54 \\times 10^{-3}\\ \\text{N}$",
          "$2.54 \\times 10^{-3}\\ \\text{N} = 2.54 \\times 10^{-3}\\ \\text{N}$ — the two agree, so Stokes' law was obeyed.",
        ],
        answer:
          "(ii) $D = W - U = 2.54 \\times 10^{-3}$ N $= F$ (Stokes) — Stokes' law applies",
        ms: {
          label: "Mark scheme",
          text: "*Use of F = 6π η r v* · *Use of U = weight of fluid displaced* · *Comparison of F with W − U and conclusion consistent with student's values*.",
        },
      },
      {
        k: "worked",
        title: "The rising air bubble",
        question:
          "A small, spherical air bubble moves upwards through water at a constant velocity of $0.035\\ \\text{m s}^{-1}$. Its volume is $5.3 \\times 10^{-11}\\ \\text{m}^3$.\n**(i)** Show that the upthrust on the bubble is about $5 \\times 10^{-7}$ N.\ndensity of water $= 998\\ \\text{kg m}^{-3}$ (2)\n**(ii)** Deduce whether Stokes' law applies to the bubble. You may ignore the weight of the bubble.\nviscosity of water $= 9.5 \\times 10^{-4}\\ \\text{Pa s}$ (4)\n*WPH11 June 2023, Q16*",
        steps: [
          "(i) The bubble displaces its own volume of water.\n$U = \\rho_{\\text{water}} V g = 998 \\times 5.3 \\times 10^{-11} \\times 9.81 = 5.2 \\times 10^{-7}\\ \\text{N}$",
          "(ii) Rising at constant velocity with a negligible weight, the drag = the upthrust.\n$D = U = 5.19 \\times 10^{-7}\\ \\text{N}$",
          "The radius comes out of the volume.\n$r = \\left(\\dfrac{3V}{4\\pi}\\right)^{1/3} = 2.33 \\times 10^{-4}\\ \\text{m}$",
          "The drag Stokes' law predicts.\n$F = 6\\pi\\eta r v = 6\\pi \\times 9.5 \\times 10^{-4} \\times 2.33 \\times 10^{-4} \\times 3.5 \\times 10^{-2} = 1.5 \\times 10^{-7}\\ \\text{N}$",
          "$1.5 \\times 10^{-7}\\ \\text{N} \\ne 5.2 \\times 10^{-7}\\ \\text{N}$ — Stokes' law does not apply to this bubble.",
        ],
        answer:
          "(i) $U = 5.2 \\times 10^{-7}$ N · (ii) $F = 1.5 \\times 10^{-7}$ N ≠ $D$ — Stokes' law does not apply",
        ms: {
          label: "Mark scheme",
          text: "*Use of upthrust = weight of displaced fluid* · *U = 5.2 × 10−7 (N)* · *Use of F = 6πηrv* · *F = 1.5 × 10−7 N* · *Valid conclusion by comparison of relevant student values*.",
        },
      },
      {
        k: "worked",
        title: "The polystyrene bead rising in oil",
        question:
          "A spherical polystyrene bead of diameter $4.00 \\times 10^{-3}\\ \\text{m}$ rises through oil at a constant velocity.\n**(b)** Show that the upthrust the oil exerts on the bead is about $3.1 \\times 10^{-4}$ N.\ndensity of oil $= 930\\ \\text{kg m}^{-3}$ (3)\n**(c)(ii)** For Stokes' law to be valid, the speed of the bead must be less than $v_R$, where $v_R = \\dfrac{10 \\times \\text{viscosity of oil}}{\\text{density of oil} \\times \\text{diameter of the bead}}$. Deduce whether Stokes' law can be applied to this bead.\nviscosity of oil $= 4.90 \\times 10^{-2}\\ \\text{Pa s}$, weight of bead $= 1.05 \\times 10^{-5}$ N (5)\n*WPH11 January 2021, Q18*",
        steps: [
          "(b) The bead is fully submerged, so the displaced volume = the bead's volume.\n$V = \\tfrac{4}{3}\\pi \\times (2.00 \\times 10^{-3})^3 = 3.35 \\times 10^{-8}\\ \\text{m}^3$",
          "$U = \\rho_{\\text{oil}} V g = 930 \\times 3.35 \\times 10^{-8} \\times 9.81 = 3.06 \\times 10^{-4}\\ \\text{N} \\approx 3.1 \\times 10^{-4}\\ \\text{N}$",
          "(c)(ii) Rising at constant velocity, the forces balance, $U = W + D$, so $D = U - W$.\n$D = 3.06 \\times 10^{-4} - 1.05 \\times 10^{-5} = 2.96 \\times 10^{-4}\\ \\text{N}$",
          "Stokes' law turns that drag into a speed.\n$v = \\dfrac{D}{6\\pi\\eta r} = \\dfrac{2.96 \\times 10^{-4}}{6\\pi \\times 4.90 \\times 10^{-2} \\times 2.00 \\times 10^{-3}} = 0.16\\ \\text{m s}^{-1}$",
          "The validity limit.\n$v_R = \\dfrac{10 \\times 4.90 \\times 10^{-2}}{930 \\times 4.00 \\times 10^{-3}} = 0.13\\ \\text{m s}^{-1}$",
          "$0.16 > 0.13$, so the bead moves too fast — Stokes' law cannot be applied.",
        ],
        answer:
          "(b) $3.06 \\times 10^{-4}$ N · (c)(ii) $v = 0.16 > v_R = 0.13$ — Stokes' law cannot be applied",
        ms: {
          label: "Mark scheme",
          text: "*Upthrust = 3.06 × 10−4 (N)* · *States D = U – W* · *Use of F = 6πηrv* · *v = 0.16 (m s−1)* · *Calculate vR = 0.13 (m s−1)* · *Comparison of v with vR and correct conclusion*.",
        },
      },
      {
        k: "worked",
        title: "The foram sinking deeper",
        question:
          "A spherical foram of mass $1.15 \\times 10^{-8}$ kg sinks at terminal velocity in seawater, where the upthrust on it is $4.37 \\times 10^{-8}$ N.\n**(i)** Show that the viscous drag on it is about $7 \\times 10^{-8}$ N. (3)\n**(ii)** Calculate the terminal velocity of this foram.\ndiameter $= 9.2 \\times 10^{-4}\\ \\text{m}$, viscosity of seawater $= 1.41 \\times 10^{-3}\\ \\text{Pa s}$ (2)\n**(b)** As the forams sink deeper into the sea, the water becomes colder and denser. Discuss how their terminal velocities change. (4)\n*WPH11 October 2022, Q17*",
        steps: [
          "(i) Sinking at terminal velocity, $W = U + D$, and the weight of the foram.\n$W = mg = 1.15 \\times 10^{-8} \\times 9.81 = 1.13 \\times 10^{-7}\\ \\text{N}$",
          "$D = W - U = 1.13 \\times 10^{-7} - 4.37 \\times 10^{-8} = 6.9 \\times 10^{-8}\\ \\text{N} \\approx 7 \\times 10^{-8}\\ \\text{N}$",
          "(ii) Stokes' law rearranged for the speed, with $r = 4.6 \\times 10^{-4}\\ \\text{m}$.\n$v = \\dfrac{7 \\times 10^{-8}}{6\\pi \\times 1.41 \\times 10^{-3} \\times 4.6 \\times 10^{-4}} = 5.7 \\times 10^{-3}\\ \\text{m s}^{-1}$",
          "(b) Colder water is more viscous, so the drag at any given speed is larger.\nDenser water gives a larger upthrust, while the weight of a foram is constant.",
          "Both changes move the balance the same way, so the forces now balance at a smaller speed.",
          "So the terminal velocities ==decrease== as the forams sink deeper.",
        ],
        answer:
          "(i) $6.9 \\times 10^{-8}$ N · (ii) $5.7 \\times 10^{-3}\\ \\text{m s}^{-1}$ · (b) the terminal velocity decreases with depth",
        ms: {
          label: "Mark scheme",
          text: "*Use of W = m g* · *Use of Newton first law* · *6.9 × 10−8 (N)* · *Use of F = 6 π η r v [allow diameter for radius]* · *Terminal velocity = 5.7 × 10−3 m s−1 (ecf from (a)(i))* · *Viscosity increases (with lower temperature) so drag force increases (for given velocity)* · *Density increases (with increasing depth) so upthrust increases* · *Weight remains constant [do not accept \"mass\"]* · *Terminal velocity reduces (with increasing depth)*.",
        },
      },
    ],
  },
];

import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 4 · Part A (statements 23–24)
   Register pass (2026-11-23): the prose is rewritten in the same
   register as the Topic 2 Materials note — the equation stated
   first and then unpacked in a sentence, the working symbols
   (=, ×, ÷, >, <) inside the sentences, every force named with its
   owner and its direction, one logical step per bullet joined with
   "so", and no rhetorical asides. The worked questions are set out
   the way the papers print them and their text is unchanged; the
   mark scheme and examiner-report wordings stay quoted verbatim
   (scripts/t04-quotes.ts; every number re-computed by
   scripts/t04-numbers.ts).
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH04_A: SpecSection[] = [
  {
    spec: "23",
    statement: "be able to use the equation density ρ = m/V",
    title: "Density",
    blocks: [
      {
        k: "eq",
        eq: "$\\rho = \\dfrac{m}{V}$",
        note: "The density of a sample = the mass of the sample ÷ the volume of the sample. Keep the units consistent when substituting. Mass in kg, volume in m³, density out in kg m⁻³.",
      },
      {
        k: "bullets",
        items: [
          "Density is a property of the ==material==.",
          "The density does not change when the size or the shape of the sample changes.",
          "The unit of density is **kg m⁻³**.",
          "Convert g cm⁻³ to kg m⁻³ by multiplying by 1000.",
          "Water has a density of $1000\\ \\text{kg m}^{-3}$, which is $1\\ \\text{g cm}^{-3}$.",
          "If the question gives the weight W of the sample, find the mass first, $m = W \\div g$.",
        ],
      },
      {
        k: "table",
        caption: "Reference densities",
        head: ["Material", "Density (kg m⁻³)"],
        rows: [
          ["air", "≈ 1.2"],
          ["ice", "≈ 920"],
          ["water", "≈ 1000 (printed values are usually 997 to 1000)"],
          ["sea water", "≈ 1025"],
          ["steel", "≈ 7800"],
          ["lead", "≈ 11 300"],
        ],
      },
      {
        k: "bullets",
        items: [
          "Check an answer against the table.",
          "A density of $0.001\\ \\text{kg m}^{-3}$ or $100\\,000\\ \\text{kg m}^{-3}$ for water is usually a ==power-of-ten slip== in the unit conversion.",
          "In multiple choice questions, check the units of every option.",
          "The wrong options usually carry the wrong units.",
          "The density of a regular solid.",
          "Weigh the sample to find its mass, measure its dimensions with a calliper, then calculate the volume from the dimensions.",
          "The density of a liquid.",
          "Weigh a measured volume of the liquid, then use $\\rho = m \\div V$.",
          "The volume is read from a measuring cylinder.",
        ],
      },
      { k: "h", text: "Volumes of solids" },
      {
        k: "eq",
        eq: "$V = \\tfrac{4}{3}\\pi r^3$        $V = \\pi r^2 L$",
        note: "The volume of a sphere = (4/3) × π × the radius cubed; the volume of a cylinder = π × the radius squared × the length. A calliper measures a ==diameter==, so halve it before cubing (r = d ÷ 2). A diameter used as a radius makes the volume 8 times too large — the examiner reports name this error repeatedly.",
      },
      {
        k: "bullets",
        items: [
          "The volume of a rectangular block = length × width × height.",
          "A cube question hides the volume step.",
          "A cube of weight W and density ρ has sides of length $\\left(\\dfrac{W}{\\rho g}\\right)^{1/3}$.",
        ],
      },
      { k: "h", text: "Conversions and flow rate" },
      {
        k: "bullets",
        items: [
          "Convert cm³ to m³ by dividing by 1 000 000, and mm to m by dividing by 1000.",
          "Volume per second = mass per second ÷ the density of the fluid.",
          "The volume per second is also the cross-sectional area × the flow speed, $Q = Av$.",
        ],
      },
      { k: "h", text: "Hollow objects" },
      {
        k: "bullets",
        items: [
          "An object's density = its total mass ÷ its total volume.",
          "The total volume includes the air inside.",
          "A hollow brass cylinder floats even though solid brass sinks, because its average density is less than the density of the water.",
          "A floating argument always compares the ==average== density of the object with the density of the fluid.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "A steel sphere for a Newton's cradle",
        question:
          "Each sphere has a radius of $7.0 \\times 10^{-3}$ m. Calculate the mass of one sphere.\ndensity of steel $= 7.8 \\times 10^{3}\\ \\text{kg m}^{-3}$ (3)\n*WPH11 June 2025, Q18(a)*",
        steps: [
          "The volume comes first — cube the radius.\n$V = \\tfrac{4}{3}\\pi r^3 = \\tfrac{4}{3}\\pi \\times (7.0 \\times 10^{-3})^3 = 1.44 \\times 10^{-6}\\ \\text{m}^3$",
          "Then rearrange $\\rho = m/V$ for the mass.\n$m = \\rho V = 7.8 \\times 10^3 \\times 1.44 \\times 10^{-6} = 0.011\\ \\text{kg}$",
        ],
        answer: "$m = 1.1 \\times 10^{-2}\\ \\text{kg}$",
      },
    ],
  },
  {
    spec: "24",
    statement: "understand how to use the relationship upthrust = weight of fluid displaced",
    title: "Upthrust and flotation",
    blocks: [
      {
        k: "def",
        term: "Upthrust",
        text: "The upward force a fluid exerts on an object placed in the fluid. It is caused by the displacement of the fluid. The upthrust on an object = the weight of the fluid the object displaces.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*An upwards force caused by the displacement of fluid (by an object)* · *(a force equal and opposite to) the weight of fluid displaced (by an object)* — the two alternatives the printed scheme accepts.",
      },
      { k: "h", text: "Pressure and depth" },
      {
        k: "bullets",
        items: [
          "The fluid presses on every surface of the object.",
          "The pressure of the fluid increases with depth, so the push on the bottom face is greater than the push on the top face, and the pushes on opposite sides cancel in pairs.",
          "The resultant push on the object acts upwards.",
          "That force is the ==upthrust==.",
          "Every object in a fluid feels an upthrust, floating, sinking, or held by a string.",
        ],
      },
      {
        k: "eq",
        eq: "$U = \\rho_{\\text{fluid}} \\times V_{\\text{disp}} \\times g$",
        note: "Read it as the definition. The upthrust = the weight of the displaced fluid, and the density inside the equation is the ==fluid's==. Substituting the density of the object here is the classic error. For a fully submerged object, $V_{\\text{disp}} = V_{\\text{object}}$; for a floating object, only the ==submerged volume== displaces fluid.",
      },
      {
        k: "bullets",
        items: [
          "The upthrust depends on the ==fluid== alone, its density and the displaced volume.",
          "The weight belongs to the ==object==, $W = \\rho_{\\text{object}} V_{\\text{object}} g$.",
          "Changing the fluid changes U but never W.",
          "During a fall through a single fluid, neither of them changes.",
          "A temperature change reaches the upthrust only through the density of the fluid.",
        ],
      },
      { k: "h", text: "Floating" },
      {
        k: "bullets",
        items: [
          "A floating object is in equilibrium, so the resultant force on it = zero.",
          "The upthrust on the object = the weight of the object, $U = W$.",
          "A floating object therefore displaces a weight of fluid equal to its own ==weight==.",
          "The submerged volume adjusts until $\\rho_{\\text{fluid}} V_{\\text{sub}} g = \\rho_{\\text{object}} V_{\\text{object}} g$.",
        ],
      },
      {
        k: "eq",
        eq: "$\\dfrac{V_{\\text{sub}}}{V_{\\text{object}}} = \\dfrac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}}$",
        note: "The fraction of the object that is submerged = the density of the object ÷ the density of the fluid; the g cancels. For ice ($917\\ \\text{kg m}^{-3}$ in the printed question) in sea water ($1025\\ \\text{kg m}^{-3}$), 917 ÷ 1025 = 0.89, so about 89% of the berg sits below the surface.",
      },
      {
        k: "table",
        caption: "Object density against fluid density",
        head: ["The densities", "What happens"],
        rows: [
          ["object < fluid", "the fraction is below 1 — the object floats with part of it above the surface"],
          ["object = fluid", "the fraction is exactly 1 — the object floats fully submerged"],
          ["object > fluid", "no displaced volume balances the weight, so the object sinks to the bottom"],
        ],
      },
      {
        k: "bullets",
        items: [
          "In a denser liquid the same weight needs a smaller displaced volume, so the object floats ==higher==.",
          "In a less dense liquid the object must displace a larger volume, so it floats ==lower==.",
          "*Floats lower* and *sinks* are different answers.",
          "An object that floats lower is still in equilibrium, while an object that sinks drops to the bottom.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "==Displaced==, not *replaced* — the mark schemes print *displaced*. A bare *weight* loses the mark. Name the owner — the weight of the object, the weight of the displaced pure water, the weight of the displaced seawater.",
      },
      { k: "h", text: "Changing the density of the fluid" },
      { k: "h", text: "When the density of the fluid increases" },
      {
        k: "bullets",
        items: [
          "The upthrust on the object does not change.",
          "Since the upthrust is itself the weight of the displaced fluid ($U = W$).",
          "And the weight of the object obviously will not change if the density of the fluid changes.",
          "==The weight of an object never depends on the fluid.==",
          "==It always depends on the mass of the object.==",
          "Weight of an object = mass of the object × g ($W = mg$).",
          "In these kinds of scenarios, the volume of fluid displaced changes.",
          "$U = \\rho_{\\text{fluid}} V_{\\text{disp}} g$.",
          "Thus, for the upthrust to remain the same while the density of the fluid is increasing, less volume needs to be displaced.",
          "The object displaces less fluid now.",
          "Less of the object is submerged.",
          "The object rises higher in the fluid.",
          "Note — never think that an object can sink to the bottom if the density of the fluid increases.",
          "That is impossible.",
          "The density of the object needs to be greater than the density of the fluid for the object to sink.",
          "Therefore, an increase in the density of the fluid will instead make the object rise higher in the fluid.",
        ],
      },
      { k: "h", text: "When the density of the fluid decreases" },
      {
        k: "bullets",
        items: [
          "The weight of the object stays constant.",
          "So the upthrust on the object equals its weight ($U = W$).",
          "But the volume of displaced fluid changes.",
          "$U = \\rho_{\\text{fluid}} V_{\\text{disp}} g$.",
          "So as $\\rho_{\\text{fluid}}$ decreases, $V_{\\text{disp}}$ must increase to balance the equation and keep the upthrust constant.",
          "More fluid needs to be displaced for $U = W$.",
          "So the object floats lower in the fluid as it displaces more fluid.",
          "More of the object is now submerged in the fluid.",
          "For an object to sink to the bottom, the density of the object itself needs to be greater than the density of the fluid.",
          "Therefore, sinking can occur only if the density of the fluid decreases ==below== the density of the object.",
          "A decrease in the density of the fluid itself never means the object will sink.",
          "For instance, the density of an object is $75\\ \\text{kg m}^{-3}$.",
          "The density of the fluid decreases from $100\\ \\text{kg m}^{-3}$ to $90\\ \\text{kg m}^{-3}$.",
          "Does the object sink to the bottom? No.",
          "The density of the fluid has decreased, but it has not become lower than the density of the object.",
          "If the density of the fluid had decreased to $65\\ \\text{kg m}^{-3}$, the density of the fluid would be less than the density of the object.",
          "So the object sinks to the bottom as $\\rho_{\\text{object}} > \\rho_{\\text{fluid}}$.",
        ],
      },
      { k: "h", text: "A sphere pushed fully under" },
      {
        k: "bullets",
        items: [
          "A sphere floating with half its volume submerged is in equilibrium, so the upthrust on it = its weight ($U = W$), and no extra force is needed.",
          "Pushed fully under, the displaced volume doubles, so the upthrust on it doubles.",
          "The force holding it under = the extra upthrust = $W$.",
        ],
      },
      { k: "h", text: "The free-body diagram of a floating object" },
      {
        k: "bullets",
        items: [
          "One upward arrow labelled upthrust (or U), one downward arrow labelled weight (or W or mg).",
          "Both arrows start from the same point on the object, drawn the same length.",
          "Draw only the forces acting on the object.",
          "Every extra force arrow loses one mark.",
          "The apparent weight of an object under water = the weight of the object − the upthrust on it ($W_{\\text{app}} = W - U$).",
        ],
      },
      { k: "h", text: "The balance experiment" },
      {
        k: "bullets",
        items: [
          "The liquid exerts an upthrust on the object, upwards.",
          "By Newton's third law, the object exerts a force on the liquid that is equal in size and opposite in direction, downwards.",
          "That extra downward force on the liquid increases the reading on the balance.",
          "The increase in the reading = the weight of the displaced liquid.",
          "The mass of the displaced liquid = the increase in the balance reading.",
          "Then $V = m \\div \\rho_{\\text{liquid}}$.",
          "Then the mass of the object = $\\rho_{\\text{object}} \\times V$.",
          "If the water is replaced by a lower-density liquid, the upthrust on the object is less, so its downward force on the liquid is less, so the increase in the balance reading is less.",
          "The second mark depends on the first.",
        ],
      },
      { k: "h", text: "A hydrometer" },
      {
        k: "bullets",
        items: [
          "A hydrometer floating in a liquid is in equilibrium, so the upthrust on it = its weight ($U = W$).",
          "The weight of the hydrometer is the same in every liquid.",
          "In a denser liquid, each unit of displaced volume provides a greater weight of displaced liquid, so a smaller displaced volume is enough.",
          "The hydrometer floats higher.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Many referred to weight, but did not specify whether this was the weight of the hydrometer, the weight of the displaced pure water or the weight of the displaced seawater. Similarly, many did not use the term displacement at all, and alternatives such as replacement were not sufficient* (WPH11 October 2024, Q16(b)(i)).",
      },
      { k: "h", text: "A submarine moving into less dense water" },
      {
        k: "bullets",
        items: [
          "A submarine underwater is in equilibrium, so the upthrust of the seawater on the submarine = the weight of the submarine.",
          "When the submarine moves into less dense water, the upthrust on it decreases, while the weight of the submarine does not change.",
          "The resultant force on the submarine now acts downwards, so the submarine begins to sink.",
          "To hold its depth, the submarine must reduce its weight by pumping water out.",
        ],
      },
      { k: "h", text: "A submarine lifted from the water" },
      {
        k: "bullets",
        items: [
          "While the submarine is fully underwater, the tension in the crane cable = the weight of the submarine − the upthrust on it ($T = W - U$).",
          "As the submarine emerges from the water, the submerged volume decreases, so the upthrust on it decreases ($U = \\rho_{\\text{water}} V_{\\text{sub}} g$).",
          "The weight of the submarine does not change.",
          "The tension in the cable therefore increases, until the submarine hangs clear of the water and the tension in the cable = the full weight of the submarine ($T = W$).",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The printed indicative content is *the resultant force on the submarine is zero* · *So tension = weight – upthrust* · *As the submarine leaves the water, the volume / mass / weight of water displaced decreases* · *So the upthrust on the submarine decreases* · *and the tension in the cable increases* · *When the submarine is out of the water the tension in the cable is equal (in magnitude) to the weight of the submarine* (WPH11 January 2025, Q18(b)).",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*The idea that the volume / mass / weight of displaced water decreased as the submarine moved out of the water was probably the idea that was least well described by candidates. Some responses described the situation when the submarine was fully submerged, and then when the submarine was completely out of the water, but not how the forces changed as the submarine moved between the two situations* (WPH11 January 2025, Q18(b)).",
      },
      { k: "h", text: "A Cartesian diver" },
      {
        k: "bullets",
        items: [
          "Squeezing the bottle raises the pressure of the water, which forces water into the diver, so the volume of the trapped air decreases.",
          "The diver now displaces less water, so the upthrust on the diver decreases.",
          "The weight of the diver does not change.",
          "When the weight of the diver > the upthrust on the diver, the resultant force on the diver acts downwards.",
          "The diver therefore accelerates downwards and sinks.",
        ],
      },
      { k: "h", text: "A Galilean thermometer" },
      {
        k: "bullets",
        items: [
          "When the temperature of the liquid rises, the liquid expands, so the density of the liquid falls.",
          "The upthrust on each bulb = the density of the liquid × the volume of the bulb × g, so the upthrust on each bulb falls.",
          "The weight of each bulb does not change.",
          "A bulb for which the weight of the bulb > the upthrust on the bulb now has a resultant force downwards, so that bulb sinks.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*No marks were available for simply comparing densities, an explanation as to why the density is important was required. A common error was to bring the viscosity of the liquid into the explanation. Viscosity only has an effect while the bulb is moving* (WPH11 June 2022, Q15). And on how to answer — *the narrative is: the bulb floats, the temperature rises, the bulb sinks. A clear account of each stage in the right order is the most likely way to score all the marks*.",
      },
      { k: "h", text: "Ballast tanks" },
      {
        k: "bullets",
        items: [
          "Filling the ballast tanks increases the weight of the boat.",
          "The boat must displace more water so that the upthrust on it still = the weight of the boat ($U = W$), so the boat sits lower.",
          "Emptying the tanks does the reverse.",
          "The weight falls, a smaller displaced volume balances it, and the boat rises.",
          "The centre of gravity of the displaced water moves lower, which makes the boat more stable.",
          "A ballasted boat sits deeper in the water, so a ==greater hull area== touches the water and the ==drag on the boat is greater==.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The sphere lowered into water",
        question:
          "A student used the apparatus shown to investigate the forces acting on a uniform, solid sphere placed in water. As the sphere was lowered into the water, the reading on the balance increased from 315 g to 465 g as shown.\n**(a)** Draw a free-body force diagram for the sphere when it is suspended in water as shown. (3)\n**(b)(i)** Explain the increase in the reading on the balance. Your answer should include a reference to Newton's third law. (3)\n**(b)(ii)** Determine the mass of the sphere.\ndensity of water $= 1000\\ \\text{kg m}^{-3}$, density of sphere $= 2000\\ \\text{kg m}^{-3}$ (4)\n**(b)(iii)** The water was replaced with the same mass of oil and the experiment repeated. The density of the oil is less than the density of water. Explain what happens to the final reading on the balance. (2)\n*WPH11 January 2020, Q19*",
        steps: [
          "(a) Three forces act on the sphere — the tension of the thread on the sphere upwards, the upthrust of the water on the sphere upwards, the weight of the sphere downwards.\nAll three arrows start from a dot — each extra force, or an arrow off the dot, costs a mark.",
          "(b)(i) The water exerts an upthrust on the sphere, upwards.\nBy Newton's third law the sphere exerts an equal and opposite force on the water, downwards.",
          "That extra downward force loads the balance, so the reading rises.\nThe increase = the weight of the displaced water = the upthrust on the sphere.",
          "(b)(ii) The rise in the balance reading is the displaced water.\n$m_{\\text{disp}} = 465 - 315 = 150\\ \\text{g} = 0.150\\ \\text{kg}$",
          "$V_{\\text{sphere}} = \\dfrac{m_{\\text{disp}}}{\\rho_{\\text{water}}} = \\dfrac{0.150}{1000} = 1.5 \\times 10^{-4}\\ \\text{m}^3$",
          "$m_{\\text{sphere}} = \\rho_{\\text{sphere}} V = 2000 \\times 1.5 \\times 10^{-4} = 0.30\\ \\text{kg}$",
          "(b)(iii) Oil is less dense, so the weight of displaced oil is less.\nThe upthrust on the sphere is less, so its downward force on the liquid is less, and the final reading is less than 465 g.",
        ],
        answer: "(b)(ii) 0.30 kg · (b)(iii) final reading < 465 g (the rise < 150 g)",
        ms: {
          label: "Mark scheme",
          text: "*Mass of displaced water = 150 g* · *Use of V = m/ρ for water with ρ = 1 000 kg m-3 (150 ml)* · *Use of m = ρ V for sphere WITH ρ = 2 000 kg m-3* · *Upthrust less in oil or weight of displaced oil less or downward force of sphere on oil less* · *(Therefore increase in) balance reading less (than for water).*",
        },
      },
      {
        k: "worked",
        title: "The submarine in less salty water",
        question:
          "The photograph shows a submarine below the surface of the sea.\n**(a)** The submarine has a volume of $5.83 \\times 10^{3}\\ \\text{m}^3$. The submarine is stationary in a region of the sea where the density of the seawater is $1.03 \\times 10^{3}\\ \\text{kg m}^{-3}$.\n**(a)(i)** Calculate the upthrust exerted on the submarine by the seawater. (2)\n**(a)(ii)** Explain why the mass of the submarine must be $6.0 \\times 10^{6}$ kg. (2)\n**(b)** The submarine now moves into a region of the sea where the water is less salty, and the density of the water reduces to $1.01 \\times 10^{3}\\ \\text{kg m}^{-3}$.\n**(b)(i)** Explain what would happen to the submarine as it moves into this region of lower density seawater. (3)\n**(b)(ii)** The submarine alters its weight by pumping water in or out of its internal tanks. Determine the mass of water that the submarine should pump, in or out of its tanks, to maintain its depth below the surface of the sea. (2)\n*WPH11 June 2021, Q13*",
        steps: [
          "(a)(i) Fully submerged, so the displaced volume = the whole volume.\n$U = \\rho_{\\text{water}} V g = 1.03 \\times 10^3 \\times 5.83 \\times 10^3 \\times 9.81 = 5.9 \\times 10^7\\ \\text{N}$",
          "(a)(ii) Stationary means equilibrium, so the weight of the submarine = the upthrust on it.\n$m = \\dfrac{U}{g} = \\dfrac{5.89 \\times 10^7}{9.81} = 6.0 \\times 10^6\\ \\text{kg}$",
          "(b)(i) Less salty water is less dense, so the upthrust on the submarine falls while its weight stays the same.\nThe upthrust is now less than the weight, so a resultant force acts downwards and the submarine begins to sink.",
          "(b)(ii) The new upthrust.\n$U' = 1.01 \\times 10^3 \\times 5.83 \\times 10^3 \\times 9.81 = 5.78 \\times 10^7\\ \\text{N}$",
          "Pumping out must remove the weight the water no longer carries.\n$m = \\dfrac{U - U'}{g} = \\dfrac{1.14 \\times 10^6}{9.81} = 1.17 \\times 10^5\\ \\text{kg} \\approx 1.2 \\times 10^5\\ \\text{kg}$",
        ],
        answer:
          "(a)(i) $5.9 \\times 10^7$ N · (a)(ii) $6.0 \\times 10^6$ kg · (b)(ii) ≈ $1.2 \\times 10^5$ kg pumped out",
        ms: {
          label: "Mark scheme",
          text: "*Weight of submarine is equal to the upthrust.* · *The upthrust (of the water on the submarine) is less than the weight of the submarine* · *A resultant force acts (downwards) on the submarine* · *So the submarine will (begin to) sink (dependent on MP1)* · the printed answer *Mass of water = 1 × 10⁵ kg (pumped out)*.",
        },
      },
      {
        k: "worked",
        title: "The hollow cylinder that floats",
        question:
          "A hollow brass cylinder with closed ends is floating on the surface of water. The cylinder has a length of 4.0 cm and an external diameter of 2.1 cm as shown. 63% of the volume of the cylinder is submerged. The cylinder contains negligible weight of air.\n**(a)** Explain why the brass cylinder floats. (2)\n**(b)(i)** Show that the mass of the cylinder is about $9 \\times 10^{-3}$ kg.\ndensity of water $= 1.0 \\times 10^{3}\\ \\text{kg m}^{-3}$ (4)\n**(b)(ii)** Deduce whether an identical hollow cylinder made of gold would also float.\ndensity of gold $= 19.3 \\times 10^{3}\\ \\text{kg m}^{-3}$, density of brass $= 8.7 \\times 10^{3}\\ \\text{kg m}^{-3}$ (4)\n*WPH11 January 2022, Q15*",
        steps: [
          "(a) The floating argument uses the cylinder's ==average== density — the air inside shares the volume.\nThe overall density of the cylinder is less than the density of the water, so it floats.",
          "(b)(i) The whole volume.\n$V = \\pi r^2 L = \\pi \\times (1.05 \\times 10^{-2})^2 \\times 4.0 \\times 10^{-2} = 1.39 \\times 10^{-5}\\ \\text{m}^3$",
          "A floater displaces its own weight of water, so its mass = the mass of the displaced water.\n$m = \\rho_{\\text{water}} \\times 0.63 V = 1.0 \\times 10^3 \\times 0.63 \\times 1.39 \\times 10^{-5} = 8.8 \\times 10^{-3}\\ \\text{kg} \\approx 9 \\times 10^{-3}\\ \\text{kg}$",
          "(b)(ii) The brass inside the cylinder.\n$V_{\\text{brass}} = \\dfrac{8.73 \\times 10^{-3}}{8.7 \\times 10^3} = 1.00 \\times 10^{-6}\\ \\text{m}^3$",
          "The same volume of gold.\n$m_{\\text{gold}} = 19.3 \\times 10^3 \\times 1.00 \\times 10^{-6} = 0.019\\ \\text{kg}$",
          "To float, the gold cylinder needs a displaced water mass of 0.019 kg.\n$V_{\\text{disp}} = \\dfrac{0.0193}{1.0 \\times 10^3} = 1.9 \\times 10^{-5}\\ \\text{m}^3$",
          "But the cylinder can displace at most its own volume, $1.39 \\times 10^{-5}\\ \\text{m}^3$.\n$1.9 \\times 10^{-5} > 1.39 \\times 10^{-5}$, so the gold cylinder sinks.",
        ],
        answer:
          "(b)(i) $8.8 \\times 10^{-3}$ kg ≈ $9 \\times 10^{-3}$ kg · (b)(ii) no — the gold cylinder sinks",
        ms: {
          label: "Mark scheme",
          text: "*There is an upthrust which is equal to the weight of water displaced* · *The (overall) density (of the cylinder) is less than the density of the water.* · *Correct conclusion from comparison of displaced volume of water required to float gold (1.9 × 10−5 m3) with volume of cylinder (1.4 × 10−5 m3)*.",
        },
      },
      {
        k: "worked",
        title: "The iceberg",
        question:
          "An iceberg is a large mass of ice that floats in seawater with most of its volume below the surface of the seawater. The photograph shows a typical iceberg. An iceberg can be modelled as a rectangular block of ice. A particular iceberg has 6.7 m of its total height below the surface of the water, as shown.\nThe block of ice has a horizontal cross-sectional area of $3500\\ \\text{m}^2$.\n**(a)** Calculate the weight of the block of ice.\ndensity of seawater $= 1.03 \\times 10^{3}\\ \\text{kg m}^{-3}$ (3)\n**(b)** An identical block of ice floats in water of a lower density than the seawater in (a). A larger volume of this block is below the surface of the water.\nExplain why. (2)\n*WPH11 June 2024, Q12*",
        steps: [
          "(a) A floater displaces its own weight, so the weight of the block = the weight of the displaced seawater.\n$V_{\\text{disp}} = 3500 \\times 6.7 = 2.35 \\times 10^4\\ \\text{m}^3$",
          "$W = \\rho_{\\text{water}} V_{\\text{disp}} g = 1.03 \\times 10^3 \\times 2.35 \\times 10^4 \\times 9.81 = 2.4 \\times 10^8\\ \\text{N}$",
          "(b) Floating still requires the displaced weight = the weight of the block, and that weight does not change.\nLower-density water carries less weight per displaced volume, so a ==greater volume== must be displaced.",
        ],
        answer:
          "(a) $2.4 \\times 10^8$ N · (b) the same weight needs more displaced volume in the less dense water",
        ms: {
          label: "Examiner's report",
          text: "*There was a clear misconception demonstrated by many candidates that the iceberg would float if weight is less than upthrust, rather than floating when weight is equal to upthrust.*",
        },
      },
      {
        k: "worked",
        title: "The hydrometer",
        question:
          "A simple hydrometer is a cylinder with a mass at one end. The cylinder floats vertically in a liquid. The diameter of the hydrometer is x. A scale on the side of the hydrometer shows the vertical position of the hydrometer in the liquid, as shown. A student placed the hydrometer in a sample of pure water.\n**(a)** Complete the free-body diagram below to show the forces acting on a hydrometer when floating in water at equilibrium. (2)\n**(b)(i)** The student placed the hydrometer in a sample of seawater. Seawater is more dense than pure water. At equilibrium, the vertical position of the hydrometer was higher in the seawater than in the pure water, as shown. Explain why the vertical position of the hydrometer was higher in the seawater than in the pure water. (3)\n**(b)(ii)** Calculate the change in the vertical position of the hydrometer when moved from pure water into seawater.\nweight of hydrometer $= 0.324$ N, density of pure water $= 997\\ \\text{kg m}^{-3}$, density of seawater $= 1025\\ \\text{kg m}^{-3}$, x $= 1.23$ cm (5)\n*WPH11 October 2024, Q16*",
        steps: [
          "(a) Two forces only — the upthrust of the water on the hydrometer upwards, the weight of the hydrometer downwards.\nBoth arrows start from the dot and are drawn ==equal in length== — the hydrometer is in equilibrium.",
          "(b)(i) Floating holds the upthrust equal to the weight of the hydrometer, which is the same in both liquids.\nSeawater is denser, so a ==smaller volume== of it provides that same weight of displaced liquid.",
          "So the hydrometer sits higher in the seawater.",
          "(b)(ii) The mass of displaced liquid is the same in both.\n$m = \\dfrac{0.324}{9.81} = 0.0330\\ \\text{kg}$\n$V_{\\text{water}} = \\dfrac{0.0330}{997} = 3.31 \\times 10^{-5}\\ \\text{m}^3$, $V_{\\text{sea}} = \\dfrac{0.0330}{1025} = 3.22 \\times 10^{-5}\\ \\text{m}^3$",
          "Each displaced volume stands $L$ tall in a tube of cross-section $\\pi (x/2)^2$.\n$L_{\\text{water}} = \\dfrac{3.31 \\times 10^{-5}}{\\pi \\times (6.15 \\times 10^{-3})^2} = 0.279\\ \\text{m}$",
          "$L_{\\text{sea}} = \\dfrac{3.22 \\times 10^{-5}}{\\pi \\times (6.15 \\times 10^{-3})^2} = 0.271\\ \\text{m}$",
          "$\\Delta L = 0.279 - 0.271 = 0.0076\\ \\text{m} \\approx 8\\ \\text{mm}$",
        ],
        answer: "(b)(ii) ΔL ≈ 8 mm — the hydrometer sits 8 mm higher in the seawater",
        ms: {
          label: "Mark scheme",
          text: "*The upthrust is equal to the weight of water displaced* · *The upthrust equals the weight of the hydrometer Or The upthrust is the same (in both types of water)* · *(So) a smaller volume of seawater needs to be displaced (because seawater has a greater density)* · *Change in vertical position = 8 mm*.",
        },
      },
      {
        k: "worked",
        title: "A Cartesian diver",
        question:
          "A student has a toy called a 'cartesian diver' inside a sealed plastic bottle of water. The cartesian diver consists of a tube closed at one end. Air is trapped by water inside the tube, as shown.\nThe student squeezes the bottle. More water is forced into the tube, and the volume of the trapped air decreases. Explain why the cartesian diver accelerates downwards. (3)\n*WPH11 January 2024, Q13*",
        steps: [
          "Less trapped air means the diver displaces less water.\nThe upthrust on the diver decreases.",
          "The weight of the diver does not change.\nSo the weight of the diver is now greater than the upthrust on it.",
          "There is a resultant force downwards, so the diver accelerates downwards.",
        ],
        answer: "less displaced volume, less upthrust, same weight — resultant force downwards",
        ms: {
          label: "Mark scheme",
          text: "*(As the volume of the air bubble decreases) the upthrust (of the bubble) decreases* · *(So) weight is greater than upthrust.* · *(So) there is a resultant force downwards.* · the printed fallback mark — *the density of the diver becomes greater than the density of water*.",
        },
      },
      {
        k: "worked",
        title: "A Galilean thermometer",
        question:
          "A Galilean thermometer consists of a closed glass cylinder containing a liquid. In the liquid there are several identical sealed glass bulbs, as shown. Attached to each bulb is a metal disc labelled with a temperature. Each disc has a different mass. As the temperature increases, the density of the liquid decreases. This can cause the bulbs to move within the liquid.\nExplain why a particular bulb will float until the temperature of the liquid exceeds a certain value. (6)\n*WPH11 June 2022, Q15*",
        steps: [
          "The upthrust on a bulb = the weight of the liquid the bulb displaces.",
          "A bulb floats while the upthrust on it equals or exceeds the weight of the bulb and its disc.",
          "The weight of a bulb and disc is constant.",
          "As the temperature rises the liquid expands, so its density falls and the weight of displaced liquid falls.\nThe upthrust on the bulb falls with it.",
          "The bulb keeps floating until the weight of the bulb exceeds the upthrust on it.",
          "There is then a resultant force downwards, and the bulb sinks.",
        ],
        answer:
          "floats while U ≥ W; warming lowers the liquid's density, U falls until W > U, then the bulb sinks",
        ms: {
          label: "Mark scheme (indicative content)",
          text: "*Upthrust on a bulb is equal to weight of liquid displaced.* · *When upthrust equals/exceeds weight of bulb / disc, bulb floats* · *Weight of a bulb / disc is constant* · *As temperature increases the weight of displaced liquid decreases* · *Until weight of a bulb / disc exceeds the upthrust* · *There is a resultant force and bulb will sink*.",
        },
      },
      {
        k: "worked",
        title: "The weather balloon",
        question:
          "Scientists use weather balloons to carry equipment into the upper atmosphere to monitor weather conditions. The photograph shows a weather balloon. Upthrust acts on the balloon. The balloon is released and accelerates upwards.\n**(b)(i)** When the balloon is released, the initial upward acceleration is $4.80\\ \\text{m s}^{-2}$. Show that the weight of the balloon and equipment is about 13 N.\nvolume of balloon and equipment $= 1.63\\ \\text{m}^3$, density of air at ground level $= 1.23\\ \\text{kg m}^{-3}$ (3)\n**(b)(ii)** The graph shows how the density of air decreases with height above the ground.\nThe scientists want to make measurements at a height of 25 km where the balloon would stop rising. The balloon will expand as it rises and will burst if its volume exceeds $50\\ \\text{m}^3$. Deduce whether the weather balloon could support the equipment at a height of 25 km, without bursting. (4)\n*WPH11 October 2023, Q17*",
        steps: [
          "(b)(i) The upthrust of the air on the balloon = the weight of the air it displaces.\n$U = \\rho_{\\text{air}} V g = 1.23 \\times 1.63 \\times 9.81 = 19.67\\ \\text{N}$",
          "Newton's second law, with $W = mg$.\n$U - mg = ma \\Rightarrow m = \\dfrac{U}{g + a} = \\dfrac{19.67}{9.81 + 4.80} = 1.35\\ \\text{kg}$",
          "$W = 1.35 \\times 9.81 = 13.2\\ \\text{N} \\approx 13\\ \\text{N}$",
          "(b)(ii) To hold the equipment at 25 km the displaced air must still weigh 13.2 N.\n$V = \\dfrac{W}{\\rho_{\\text{air}} g} = \\dfrac{13.2}{0.050 \\times 9.81} = 27\\ \\text{m}^3$",
          "$27\\ \\text{m}^3 < 50\\ \\text{m}^3$, so yes — the balloon can carry the equipment at 25 km without bursting.",
        ],
        answer: "(b)(i) $W = 13.2$ N · (b)(ii) $V \\approx 27\\ \\text{m}^3 < 50\\ \\text{m}^3$ — yes",
        ms: {
          label: "Mark scheme",
          text: "*Density at 25 km = 0.05 kg m−3 (range 0.040 – 0.050 kg m-3)* · *Volume required at 25 km = 27 m3 (range 26 m3 to 34 m3)* · *Valid conclusion from comparison of their calculated volume with 50 m3*.",
        },
      },
      {
        k: "worked",
        title: "Lifting bags on the seabed",
        question:
          "A person attaches two spherical lifting bags to a box at the bottom of the sea, as shown.\nThe total weight of the box and two lifting bags filled with air is 2500 N. The diameter of each spherical lifting bag is 50 cm.\nDeduce whether the box will lift from the bottom of the sea.\ndensity of seawater $= 1020\\ \\text{kg m}^{-3}$ (6)\n*WPH11 October 2025, Q17(a)*",
        steps: [
          "Both the bags and the box displace water.\n$V_{\\text{bag}} = \\tfrac{4}{3}\\pi \\times 0.25^3 = 0.065\\ \\text{m}^3$",
          "$V_{\\text{box}} = 0.25 \\times 0.50 \\times 1.10 = 0.138\\ \\text{m}^3$\n$V_{\\text{total}} = 2 \\times 0.065 + 0.138 = 0.269\\ \\text{m}^3$",
          "The upthrust = the weight of the displaced seawater.\n$W_{\\text{disp}} = \\rho V g = 1020 \\times 0.269 \\times 9.81 = 2690\\ \\text{N}$",
          "$2690\\ \\text{N} > 2500\\ \\text{N}$, so the resultant force on the box acts upwards and it lifts from the seabed.",
        ],
        answer: "upthrust 2690 N > weight 2500 N — the box lifts",
      },
    ],
  },
];

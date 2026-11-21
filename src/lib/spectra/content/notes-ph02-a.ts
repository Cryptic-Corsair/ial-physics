import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 2 Materials · Part A — fluids (statements 23–26)
   The formula-first register, approved in the draft review: the
   named equation is stated first in an equation band, then
   unpacked in a sentence; the working symbols (=, ×, >, <) sit
   inside the sentences; every force carries its owner and its
   direction; each situation is built up as its own short section,
   one logical step per bullet. Mark scheme wordings and examiner
   report lines are quoted in "Mark scheme wording" and
   "Examiner's report" notes, verbatim from the WPH11 papers held
   in research/wph11. Rejected wordings live in "Not accepted"
   notes.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH02_A: SpecSection[] = [
  {
    spec: "23",
    statement: "be able to use the equation density ρ = m/V",
    title: "Density",
    blocks: [
      {
        k: "eq",
        eq: "ρ = m/V",
        note: "The density of a sample = the mass of the sample ÷ the volume of the sample.",
      },
      {
        k: "bullets",
        items: [
          "The unit of density is **kg m⁻³**; convert **g cm⁻³** to **kg m⁻³** by multiplying by 1000.",
          "Density is a property of the **material**: the density does not change when the size or the shape of the sample changes. A half-length wire has the same density as the full-length wire.",
          "Stiffness is different: stiffness is a property of the **object**, so the stiffness of an object does change when the dimensions of the object change.",
          "The density of an **object** can differ from the density of the material it is made of: the density of the object = its total mass ÷ its total volume, and the total volume includes any air inside it.",
          "Every floating argument in this topic compares two densities: the density of the object (its average density if it is hollow) and the density of the fluid.",
        ],
      },
      {
        k: "eq",
        eq: "ρ~avg~ = m~total~ ÷ V~total~",
        note: "The average density of a hollow or composite object = its total mass ÷ its total volume, and the average density is the density to use in any floating argument: a ship is made of steel (ρ ≈ 7800 kg m⁻³) and still floats, because the air inside the hull pulls the average density below the density of water.",
      },
      {
        k: "table",
        caption: "Reference densities worth knowing",
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
          "Sense-check every calculated density against the table: a density of 0.001 kg m⁻³ or 100 000 kg m⁻³ for water is a ==power-of-ten slip==, not physics.",
          "In multiple choice questions, check the ==units of every option==: the wrong options usually carry the wrong units.",
          "Measuring the density of a regular solid: measure the mass with a balance, measure the dimensions (the diameter of a sphere with a calliper), then compute the volume from the dimensions.",
          "Measuring the density of a liquid: measure the mass of a measured volume, then **ρ = m ÷ V**; the volume of a liquid is read from a measuring cylinder.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "Reading the calliper as if it measured the ==radius==. The calliper measures a diameter; halve it yourself (**r = d ÷ 2**). Examiner reports name the radius–diameter mix-up as a recurring error.",
      },
      { k: "h", text: "Volumes you are asked for" },
      {
        k: "eq",
        eq: "V = (4/3)πr³",
        note: "The volume of a sphere = (4/3) × π × the radius cubed. Use the radius: if the question gives the diameter, halve it first (**r = d/2**).",
      },
      {
        k: "bullets",
        items: [
          "The volume of a cylinder = π × the radius squared × the length (**V = πr²L**).",
          "The volume of a rectangular block = length × width × height.",
          "If the question gives the **weight** W of the sample, find the mass first: **m = W/g**.",
          "For a floating object, the displaced volume = the ==submerged volume only==, not the whole volume of the object.",
        ],
      },
      { k: "h", text: "Conversions and flow" },
      {
        k: "bullets",
        items: [
          "Convert cm³ to m³ by dividing by 1 000 000; convert mm to m by dividing by 1 000.",
          "Volume per second = mass per second ÷ the density of the fluid.",
          "Volume per second also = the cross-sectional area × the speed of the flow (**Q = Av**).",
        ],
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
        text: "The upward force a fluid exerts on an object placed in the fluid. Upthrust is caused by the ==displacement of the fluid==: the upthrust on an object = the weight of the fluid the object displaces. The fluid presses on every surface of the object, and the pressure is greater on the deeper surfaces, so the net push from the fluid is ==upward==.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*An upwards force caused by the displacement of fluid (by an object)*, or *(a force equal and opposite to) the weight of fluid displaced (by an object)* — the wording printed by the mark scheme, either of which scores. Examiner reports record that few candidates state this definition in full.",
      },
      {
        k: "eq",
        eq: "U = ρ~fluid~ × V~disp~ × g",
        note: "The weight of displaced fluid = the density of the fluid × the displaced volume × g. For a fully submerged object, the displaced volume = the whole volume of the object (**V~disp~ = V~object~**); for a floating object, it = the ==submerged volume only==.",
      },
      {
        k: "bullets",
        items: [
          "The upthrust depends on the ==fluid== (its density) and on ==how much of the object is submerged==: the density of the object appears nowhere in the upthrust equation.",
          "The weight depends on the **object** only (**W = ρ~object~ × V~object~ × g**): changing the fluid cannot change the weight.",
          "Use the density of the ==fluid==, not the density of the object, inside the upthrust: the common slip named in examiner reports is using the wrong density and making the weight equal to the upthrust.",
        ],
      },
      { k: "h", text: "Floating" },
      {
        k: "bullets",
        items: [
          "A floating object is in equilibrium, so the resultant force on it = zero.",
          "For a floating object, the upthrust on the object = the weight of the object (**U = W**).",
          "A floating object therefore displaces a weight of fluid equal to its own weight.",
          "Floating needs the two forces ==equal==: weight less than upthrust means the object is accelerating upwards, not floating.",
          "The upthrust on the floating object = **ρ~fluid~ × V~sub~ × g** and the weight of the object = **ρ~object~ × V~object~ × g**; floating makes the two equal and g cancels:",
        ],
      },
      {
        k: "eq",
        eq: "V~sub~ ÷ V~object~ = ρ~object~ ÷ ρ~fluid~",
        note: "The fraction of a floating object that is submerged = the density of the object ÷ the density of the fluid. Worked fraction: ice (ρ ≈ 920 kg m⁻³) floating in sea water (ρ ≈ 1025 kg m⁻³) gives 920 ÷ 1025 ≈ 0.90, so about 90% of the ice sits below the surface.",
      },
      {
        k: "bullets",
        items: [
          "If the density of the object < the density of the fluid, the fraction is below 1, so the object floats with part of it above the surface.",
          "If the density of the object = the density of the fluid, the fraction is exactly 1, so the object floats fully submerged.",
          "If the density of the object > the density of the fluid, no displaced volume can balance the weight, so the object sinks until it rests on the bottom.",
          "Worked fraction: an object of density 700 kg m⁻³ in water (1000 kg m⁻³) floats with 0.70 of its volume submerged; in a liquid of density 900 kg m⁻³ the fraction rises to 700 ÷ 900 ≈ 0.78, so it rides lower but still floats, because 700 < 900.",
          "In a denser liquid, a smaller displaced volume is enough to balance the same weight, so the object floats higher.",
          "In a less dense liquid, a floating object must displace a larger volume, so that the weight of the displaced fluid still = the weight of the object.",
          "Wording rule: *floats lower in the water* (still floating) is not the same as *sinks* (floating has failed). Keep the word *sinks* for an object that drops to the bottom.",
          "A hollow object floats because its overall (average) density is less than the density of the liquid.",
        ],
      },
      { k: "h", text: "The free-body diagram of a floating object" },
      {
        k: "bullets",
        items: [
          "One upward arrow labelled upthrust (or U), one downward arrow labelled weight (or W or mg).",
          "Both arrows start from the same point on the object, and the two arrows are drawn the same length.",
          "Draw only the forces acting on the object: every extra force arrow loses one mark.",
          "The apparent weight of an object under water = the weight of the object − the upthrust on it (**W~app~ = W − U**).",
        ],
      },
      { k: "h", text: "An object lowered into a liquid standing on a balance" },
      {
        k: "bullets",
        items: [
          "The liquid exerts an upthrust on the object, upwards.",
          "By Newton's third law, the object exerts a force on the liquid that is equal in size and opposite in direction, downwards.",
          "That extra downward force on the liquid increases the reading on the balance.",
          "The increase in the balance reading = the weight of the displaced liquid.",
          "The mass of the displaced liquid = the increase in the balance reading; then **V = m ÷ ρ~liquid~**; then the mass of the object = **ρ~object~ × V**.",
          "If the water is replaced by a lower-density liquid, the upthrust on the object is less, so the downward force of the object on the liquid is less, so the increase in the balance reading is less. The second mark depends on the first.",
        ],
      },
      { k: "h", text: "A hydrometer" },
      {
        k: "bullets",
        items: [
          "A hydrometer floating in a liquid is in equilibrium, so the upthrust on it = its weight (**U = W**).",
          "The weight of the hydrometer is the same in every liquid.",
          "In a denser liquid, each unit of displaced volume provides a greater weight of displaced liquid, so a smaller displaced volume is enough: the hydrometer floats higher.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "Any two from: *the upthrust is equal to the weight of water displaced*; *the upthrust equals the weight of the hydrometer* or *the upthrust is the same (in both types of water)*; *the weight of displaced water equals the weight of the hydrometer*; then *(so) a smaller volume of seawater needs to be displaced (because seawater has a greater density)*.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "Many referred to weight, but did not specify whether this was the weight of the hydrometer, the weight of the displaced pure water or the weight of the displaced seawater. Many did not use the term ==displacement== at all, and alternatives such as *replacement* were not sufficient.",
      },
      { k: "h", text: "A submarine moving into less dense water" },
      {
        k: "bullets",
        items: [
          "A submarine underwater is in equilibrium: the upthrust of the seawater on the submarine = the weight of the submarine.",
          "When the submarine moves into less dense water, the upthrust on it decreases, while the weight of the submarine does not change.",
          "The resultant force on the submarine now acts downwards, so the submarine begins to sink.",
          "To hold its depth, the submarine must reduce its weight by pumping water out.",
        ],
      },
      { k: "h", text: "A submarine lifted from the water" },
      {
        k: "bullets",
        items: [
          "While the submarine is fully underwater, the tension in the crane cable = the weight of the submarine − the upthrust on it (**T = W − U**).",
          "As the submarine emerges from the water, the submerged volume decreases, so the upthrust on it decreases (**U = ρ~water~ × V~sub~ × g**).",
          "The weight of the submarine does not change.",
          "The tension in the cable therefore increases, until the submarine hangs clear of the water and the tension in the cable = the full weight of the submarine (**T = W**).",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "Indicative content: *the resultant force on the submarine is zero*; *so tension = weight − upthrust*; *as the submarine leaves the water, the volume / mass / weight of water displaced decreases*; *so the upthrust on the submarine decreases*; *and the tension in the cable increases*; *when the submarine is out of the water the tension in the cable is equal (in magnitude) to the weight of the submarine*.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "The idea that the volume / mass / weight of displaced water decreases as the submarine leaves the water was the idea least well described by candidates. Responses that described only the fully-submerged stage and the fully-out stage, but not the transition between them, lost the middle marks.",
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
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*(As the volume of the air bubble decreases) the upthrust (of the bubble) decreases* or *(as water enters the diver) the weight (of the tube, air bubble and water inside) increases*; *(so) weight is greater than upthrust*; *(so) there is a resultant force downwards*. One mark for *the density of the diver becomes greater than the density of water* if no other mark is scored.",
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
        label: "Mark scheme wording",
        text: "*Upthrust on a bulb is equal to weight of liquid displaced*; *when upthrust equals / exceeds weight of bulb / disc, bulb floats*; *weight of a bulb / disc is constant*; *as temperature increases the weight of displaced liquid decreases*, or *as temperature increases upthrust on bulb decreases*; *until weight of a bulb / disc exceeds the upthrust*; *there is a resultant force and bulb will sink*.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "No marks were available for simply comparing densities: an explanation of ==why== the density matters was required. A common error was to bring the viscosity of the liquid into the explanation — viscosity only has an effect while the bulb is moving. The narrative that scores is: the bulb floats, the temperature rises, the bulb sinks.",
      },
      { k: "h", text: "Ballast tanks" },
      {
        k: "bullets",
        items: [
          "Filling the ballast tanks increases the weight of the boat.",
          "The boat must displace more water so that the upthrust on it still = the weight of the boat (**U = W**), so the boat sits lower.",
          "Emptying the tanks does the reverse: the weight falls, so a smaller displaced volume balances it, and the boat rises in the water.",
          "The centre of gravity of the displaced water moves lower, which makes the boat more stable.",
        ],
      },
      { k: "h", text: "An iceberg" },
      {
        k: "bullets",
        items: [
          "An iceberg floats in equilibrium: the weight of the iceberg = the weight of the displaced seawater.",
          "So the submerged fraction of the iceberg = the density of ice ÷ the density of seawater.",
          "In less dense water, a greater volume must be displaced to balance the same weight, so the iceberg sits deeper.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "==Displaced==, not *replaced* — the mark schemes print the word *displaced*. An object does not float *because the upthrust on it is greater than its weight*: upthrust greater than weight means the object is accelerating upwards; floating means the two forces are equal. *G* is not an acceptable label on the weight arrow, and *mass* is not accepted where the mark scheme wants the weight. Name the owner of every weight in a flotation explanation: the weight of the object, the weight of the displaced pure water, the weight of the displaced seawater — a bare *weight* loses the mark.",
      },
    ],
  },
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
        k: "def",
        term: "Turbulent flow",
        text: "Flow in which the layers of the fluid mix and the flow is chaotic.",
      },
      {
        k: "def",
        term: "Viscosity",
        text: "A fluid's resistance to flow, measured in **Pa s**. As the temperature of a liquid increases, the viscosity of the liquid decreases; as the temperature decreases, the viscosity increases.",
      },
      {
        k: "bullets",
        items: [
          "A warmer liquid is less viscous, so the drag on a sphere at any given speed is smaller, so the forces balance at a higher speed: the terminal velocity is greater.",
          "When a liquid cools, the viscosity rises, so the terminal velocity falls and the fall takes longer.",
        ],
      },
      {
        k: "eq",
        eq: "D = 6πηrv",
        note: "Stokes' law: the viscous drag on a sphere = 6 × π × the viscosity of the fluid × the radius of the sphere × the speed of the sphere. The specification prints this drag as F; these notes call it D, so the force balances read W = U + D. The v is a ==velocity==, not a volume.",
      },
      {
        k: "bullets",
        items: [
          "The fluid touching the surface of the sphere is dragged along with it, and each layer beyond is dragged along a little less, so the fluid pulls back on the sphere: that pull ==is== the viscous drag.",
          "Drag is proportional to each factor separately: double the viscosity and the drag doubles; double the radius and the drag doubles; double the speed and the drag doubles.",
        ],
      },
      { k: "h", text: "When Stokes' law applies" },
      {
        k: "bullets",
        items: [
          "Stokes' law applies only when all of these hold: the object is small, the object is spherical, the speed is low, and the flow is laminar (there is no turbulent flow).",
          "Stokes' law works at any viscosity; there is no low-viscosity condition.",
          "List questions often cap the answer at two conditions: the safest pair = ==a small spherical object==, and ==laminar flow== (or a low speed).",
          "When a question asks for “one other condition”, look at what the stem already gives and state a different one.",
          "Give only as many conditions as the question asks for: a wrong extra statement can lose the mark.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Small spherical object* or *spherical object moving at low speed*; *laminar flow* (allow *non-turbulent flow*) — the two printed conditions. Mark schemes also print the rejections: the law does not apply to ==all spheres==, and it ==applies at all viscosities==.",
      },
      {
        k: "note",
        label: "Not accepted",
        text: "“Small” on its own when the stem already states the sphere is small; “the flow around the sphere was turbulent” offered as a measurement error; “the densities used were incorrect”; “mass” written where the mark scheme wants the weight; *laminar* applied to the ==object== (“the object must be laminar” does not score — laminar describes the flow).",
      },
      {
        k: "def",
        term: "Terminal velocity",
        text: "The constant maximum velocity reached by an object falling through a fluid.",
      },
      { k: "h", text: "Sinking at terminal velocity" },
      {
        k: "bullets",
        items: [
          "Three forces act on a sphere sinking through a fluid: the weight of the sphere downwards, the upthrust of the fluid on the sphere upwards, and the drag of the fluid on the sphere upwards.",
          "A sinking object at terminal velocity has zero resultant force.",
          "The weight of the sphere downwards is balanced by the upthrust plus the drag upwards (**W = U + D**).",
          "The drag on the sphere is therefore the difference between the weight and the upthrust (**D = W − U**).",
          "To calculate the terminal velocity: **D = W − U** first, then **v = D ÷ (6πηr)**.",
          "Write the balance as one equation: the examiner report warns that *weight = drag and upthrust* can be read as two separate equalities (*weight = drag* and *weight = upthrust*), so write **W = U + D**.",
        ],
      },
      { k: "h", text: "Reaching terminal velocity" },
      {
        k: "bullets",
        items: [
          "At the moment of release, the speed of the sphere is zero, so the drag on it is zero.",
          "At first the weight of the sphere is greater than the upthrust plus the drag, so the resultant force on the sphere acts downwards, and the sphere accelerates.",
          "As the speed of the sphere increases, the drag on it increases (**D = 6πηrv**), while the weight and the upthrust on it stay the same.",
          "The resultant force downwards becomes smaller, so the acceleration becomes smaller.",
          "The velocity stops changing when the drag has grown enough that the upthrust plus the drag = the weight (**U + D = W**).",
          "On a velocity-time graph, the gradient = the acceleration: the curve starts steep, becomes less steep as the drag builds up, and levels off horizontal at the terminal velocity.",
          "In a vacuum there is no drag and no upthrust on the object, so the resultant force on it = its weight, and the gradient of the velocity-time graph stays constant.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*(Initially) weight is greater than upthrust (+ drag)*, or *(initially) there is a resultant force downwards*; *(so) the sphere accelerates*; *drag increases (and upthrust remains constant)* — dependent on the acceleration mark; *(until) the resultant force becomes 0 (and the sphere moves at constant / terminal velocity)*.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "Some answers described the ==conditions for Stokes' law== instead of answering the question about the motion. Answers that stated only that drag increases as speed increases, without stating that the sphere ==speeds up==, missed the middle marks.",
      },
      { k: "h", text: "Deducing whether Stokes' law applies" },
      {
        k: "bullets",
        items: [
          "Calculate the real drag from the force balance: **D = W − U**, with **U = ρ~fluid~ × (4/3)πr³ × g**.",
          "Calculate the drag Stokes' law predicts at the measured speed: **D = 6πηrv**, with r = d/2.",
          "Compare the two values, then finish with a conclusion that follows from your numbers.",
          "The same method works in reverse: calculate the speed Stokes' law predicts and compare it with the measured speed.",
          "Every “deduce” and “assess” answer ends the same way: ==a comparison of two calculated values followed by a conclusion in words==.",
        ],
      },
      { k: "h", text: "Comparing spheres of different sizes" },
      {
        k: "bullets",
        items: [
          "The weight of a sphere is proportional to r³ and the upthrust on it is proportional to r³, because both depend on the volume.",
          "The drag on a sphere at a given speed is proportional to r only.",
          "The weight and the upthrust therefore grow faster than the drag as the sphere gets bigger, so the forces balance at a higher speed: a larger sphere falls faster.",
          "The terminal velocity of a sphere is proportional to the square of its radius.",
          "When terminal velocity is measured for spheres of different diameters, a graph of v against d² is a straight line through the origin.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*(For the larger sphere at the same speed) drag is greater (because drag is proportional to radius)*; *but upthrust and weight increase by a greater factor than drag*, or *weight and upthrust are both proportional to diameter / radius cubed*; *(so) the new sphere had a greater (terminal) velocity, and therefore time taken (for the new sphere) was less*.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "Most answers considered only ==one force==. Considering only the drag leads to the wrong conclusion (drag greater, so terminal velocity lower): all three forces are needed before the comparison.",
      },
      { k: "h", text: "Rising objects" },
      {
        k: "bullets",
        items: [
          "The drag on an object always acts in the direction opposite to its motion: downwards on a falling object, upwards on a rising object.",
          "A rising object at terminal velocity has zero resultant force: the upthrust on it = the weight of the object + the drag on it (**U = W + D**).",
          "The upthrust on a rising object is therefore greater than its weight.",
          "A rising bubble has the upthrust acting upwards and the drag acting downwards on it; the weight of the bubble is negligible.",
          "A rising bubble that grows: the upthrust on it grows with r³ while the drag on it grows with r, so the bubble speeds up.",
        ],
      },
      { k: "h", text: "A balloon rising through the atmosphere" },
      {
        k: "bullets",
        items: [
          "On the ground, the upthrust of the air on the balloon is greater than the weight of the balloon, so the resultant force on it acts upwards, and it accelerates.",
          "The balloon expands as it rises, until it reaches its full volume.",
          "Above that point, the volume of the balloon is fixed while the air gets less dense, so the upthrust on the balloon falls (**U = ρ~air~ × V × g**).",
          "When the upthrust on the balloon < the weight of the balloon, the resultant force on it acts downwards, so the balloon slows down.",
          "The balloon stops rising when its velocity has fallen to zero at the maximum height.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "Indicative content: *upthrust greater than weight*; *the resultant force is upward*; *velocity increases / the balloon accelerates (upwards)*; *after the balloon reaches maximum volume, upthrust decreases as height increases (density of surrounding air decreases)*; *until upthrust is less than weight so there is a resultant force downwards*; *velocity decreases to zero / the balloon decelerates to rest*.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "Many responses confused ==decreasing acceleration== with ==decreasing velocity==: while the upthrust still exceeds the weight, the balloon ==still speeds up==, just more and more slowly. Answers that described only the approach to terminal velocity did not finish the story the question asked for.",
      },
      { k: "h", text: "A sphere sinking into colder, deeper water" },
      {
        k: "bullets",
        items: [
          "Start: a sphere sinking through seawater at terminal velocity, so the weight of the sphere = the upthrust on it + the drag on it (**W = U + D**).",
          "Deeper water is colder, and the viscosity of water increases as its temperature falls, so the viscosity of the water around the sphere is greater.",
          "So the drag on the sphere at any given speed is larger: a larger η gives a larger D at the same v.",
          "Deeper water is also denser, so the upthrust on the sphere is larger: a larger ρ gives a larger U.",
          "The weight of the sphere does not change.",
          "At the old terminal velocity, the upthrust plus the drag on the sphere is now greater than the weight of the sphere, so the resultant force on the sphere acts upwards.",
          "The sphere slows down until the forces balance again, at a lower speed: the terminal velocity of the sphere is lower in the deeper water.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "*Mass* written where the mark scheme wants the *weight*; the v in **D = 6πηrv** read as a volume (examiner reports name this twice); “the densities used were incorrect”; terminal velocity quoted from a set-piece formula when the question says “without calculation” — one sentence comparing the viscosities scores.",
      },
    ],
  },
  {
    spec: "26",
    statement: "CORE PRACTICAL 2: Use a falling-ball method to determine the viscosity of a liquid",
    title: "Core Practical 2 — falling-ball viscometer",
    blocks: [
      {
        k: "figure",
        kind: "ph-falling-ball",
        caption: "The falling-ball method for measuring the viscosity of a liquid.",
      },
      { k: "h", text: "The principle" },
      {
        k: "bullets",
        items: [
          "A small ball is released into a tall tube of liquid and falls until it reaches terminal velocity.",
          "At terminal velocity, the weight of the ball = the upthrust on it + the drag on it (**W = U + D**).",
          "The drag is given by Stokes' law (**D = 6πηrv**), so the viscosity follows from **η = (W − U) ÷ (6πrv)**.",
          "Each quantity on the right is measured in the experiment.",
          "The method assumes the ball has reached ==terminal velocity before the timing starts== and that Stokes' law applies during the timed fall: both are needed for **W = U + D** and **D = 6πηrv** to hold at the same time.",
          "The upthrust comes from the ==displaced liquid==, so use the density of the liquid, not the density of the ball.",
        ],
      },
      { k: "h", text: "The measurements" },
      {
        k: "bullets",
        items: [
          "The mass of the ball, to find its weight (**W = mg**).",
          "The diameter of the ball, with a micrometer, to find the radius and the volume (**V = (4/3)πr³**).",
          "The density of the liquid, to find the upthrust (**U = ρVg**).",
          "The time to fall between two fixed marks, to find the terminal velocity (**v = s/t**).",
          "The temperature of the liquid, because the viscosity depends on it.",
          "When a question asks for ==one other measurement==, the mass of the ball is the expected answer (its weight is accepted); the diameter, the density of the ball and the temperature of the liquid are all rejected as extras.",
        ],
      },
      { k: "h", text: "The method" },
      {
        k: "bullets",
        items: [
          "Fill a tall measuring cylinder with the liquid and wrap two or more rubber bands around the cylinder to act as markers.",
          "The top marker sits far enough below the surface that the ball has already reached terminal velocity when the timing begins.",
          "Measure the distance between the markers with a metre rule, and the time between them with a stopwatch.",
          "Repeat the timing and use the mean.",
          "Alternative: time different distances and take the gradient of a distance-time graph.",
          "A data logger or motion sensor can record the fall automatically: on a displacement-time graph, the terminal velocity = ==the gradient of the straight section==, not a single point.",
        ],
      },
      { k: "h", text: "Design choices" },
      {
        k: "bullets",
        items: [
          "The tube is wide and the ball is small, so the flow around the ball stays laminar and the ball never falls near the walls: the condition for Stokes' law.",
          "The top marker sits well below the surface, so the speed has stopped changing before the timing begins: the condition for **W = U + D**.",
          "The fall is timed over a long distance, which reduces the percentage uncertainty in the velocity.",
        ],
      },
      { k: "h", text: "The free-body diagram of the falling ball" },
      {
        k: "bullets",
        items: [
          "Draw the weight of the ball downwards, the upthrust of the liquid on it upwards and the drag of the liquid on it upwards, all starting from the centre of the ball.",
          "The arrow for the weight is equal in length to the arrows for the upthrust and the drag combined.",
          "Label the forces clearly: W or mg for the weight, U for the upthrust.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Upwards arrow labelled upthrust or U, and downward arrow labelled weight or W or mg; both arrows start from the dot*; *length of weight arrow ≈ length of drag arrow + length of upthrust arrow*.",
      },
      { k: "h", text: "Errors and validity" },
      {
        k: "bullets",
        items: [
          "A larger sphere has a greater terminal velocity, so the time between the markers is shorter; the stopwatch uncertainty stays the same, so the percentage uncertainty is greater.",
          "Timing that begins too early gives a speed still rising: the drag on the ball is then smaller than W − U and the computed viscosity comes out ==too large==.",
          "A measured viscosity lower than the accepted value can come from: the liquid being warmer than stated, the diameter measured too small, the time measured too short, or the marker distance measured too large.",
          "Keep the temperature of the liquid constant during the measurement, because the viscosity of a liquid depends on its temperature.",
        ],
      },
      {
        k: "note",
        label: "Not accepted",
        text: "“The flow around the sphere was turbulent”, “the densities used were incorrect”, “the temperature of the room”.",
      },
    ],
  },
];

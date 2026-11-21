# WPH11 Unit 1 — Topic 2 (Materials)

## Foundations addendum, part 2 — statements 25–32 — DRAFT 1 for review

**What this file is (read this first — this part is not notes content).** Part 1 of this addendum (tracked at `foundations-addendum-wph11-t02.md`) taught the ropes for density and upthrust before the scenarios, at the owner's direction. The owner then asked for the same treatment for the rest of Topic 2: statements 25–32. The same gap exists there in a milder form — each section opens on definitions and an equation band and then runs scenario chains and exam technique, but the ropes those chains assume (where the drag physically comes from, why stress and strain are divided out at all, why the CP3 rig is built the way it is, where the half in ½FΔx can be derived from) are compressed or missing. This part 2 supplies that layer statement by statement, in the same three moves that made part 1 work: where the quantity comes from and who owns it; the central balance or derivation worked step by step with the numbers computed; and the exact wordings the mark schemes print, carried only when they are grounded in the tracked corpus.

**Where it slots.** Each statement gets a foundations layer inserted after its opening definitions/equation band and before its first approved headed group — the same pattern as spec 24 in part 1. No approved block moves, no approved bullet is reworded; where an approved bullet already states a fact, the foundations layer teaches the reasoning behind it instead of repeating it.

**Evidence trail.** No new digests were opened for this part. Wordings quoted as printed are grounded in the digests already tracked: the Stokes' law conditions pair and the "applies at all viscosities" rejection (digest-A.md line 13, digest-C.md lines 90 and 287, digest-B.md line 247); the at-the-elastic-limit multiple choice and its four rejections (digest-C.md line 30); the hysteresis loop = energy causing heating (digest-B.md line 286); the per-unit-volume derivation chain stress × strain = (F/A) × (Δx/x) = FΔx/V and the area × volume equivalence (digest-C.md line 159); the "proportional, not equal" examiner warning for the stress-strain area (digest-C.md lines 86 and 301); the F²/2k substitution chain ½FΔx → Δx = F/k → Eel = F²/(2k) → Eel ∝ F² (digest-C.md line 232); the CP3 vernier-resolution mark scheme (digest-B.md line 189); the CP3 non-origin line and the use-the-changes instruction (digest-B.md line 186); the micrometer orientations-and-mean and the gradient × l/A route (digest-D.md line 42); the large-Young-modulus multiple choice and its rejections (digest-A.md line 17); ΔF = kΔx as the printed substitution (digest-D.md line 332). Physics chains without a printed-wording claim (the drag-origin picture, the region walk, the unloading-line geometry, the rig rationale, the spring-combination energies, the terminal-velocity formula) are standard derivations stated as physics, never attributed to a mark scheme.

---

## Statement 25 — where the drag comes from, the terminal-velocity formula derived, the map

Slotting: after the D = 6πηrv equation band, before **When Stokes' law applies**.

- The layers of a fluid slide past each other, and the viscosity of the fluid measures how strongly the layers resist that sliding: the viscosity belongs to the fluid, not to the object moving through it.
- The fluid touching the surface of the sphere is dragged along with the sphere, and each layer beyond it is dragged along a little less, so the sphere is always dragging the fluid's layers with it: that pull back on the sphere is the viscous drag.
- In Stokes' law the drag is proportional to each factor separately: double the viscosity and the drag doubles, double the radius and the drag doubles, double the speed and the drag doubles.
- Terminal-velocity derivation, step by step: start from the balance W = U + D; write each side with its formula (weight = ρ_sphere × (4/3)πr³ × g, upthrust = ρ_fluid × (4/3)πr³ × g, drag = 6πηrv); subtract the upthrust from the weight; divide both sides by 6πηr and cancel one r.
- **v_term = 2r²g × (ρ_sphere − ρ_fluid) ÷ (9η)** — not printed on the data sheet; derive it, and the derivation earns the marks.
- Worked numbers: a steel sphere (ρ ≈ 7800 kg m⁻³) of radius 1.0 mm in a liquid of density 900 kg m⁻³ and viscosity 0.20 Pa s gives v_term ≈ 0.075 m s⁻¹.
- The map in words (recap of the chains the section already teaches): a larger sphere falls faster (weight and upthrust grow as r³, drag only as r, so the balance is met at a higher speed and the terminal velocity is proportional to the square of the radius); a denser sphere falls faster; a denser fluid slows the fall; a warmer liquid speeds it up; a sphere sinking into colder, deeper water slows down, because that water is both denser and more viscous.

## Statement 26 — the two assumptions behind the viscometer

Slotting: after **The principle**, before **The measurements**.

- The method assumes two things, and every design choice protects one of them: first, that Stokes' law applies during the timed fall; second, that the ball has reached terminal velocity before the timing starts.
- Only at terminal velocity does the balance W = U + D hold, so only there can the drag be replaced by W − U and the viscosity follow from η = (W − U) ÷ (6πrv).
- If the timing began too early, the ball would still be accelerating: the drag on it would be smaller than W − U and its speed smaller than the terminal velocity, so the computed viscosity would come out too large.
- A wide tube and a small ball keep the flow laminar (the Stokes' law condition); a top marker well below the surface gives the speed time to stop changing (the terminal-velocity condition).

## Statement 27 — what Hooke's law says, and where k = EA/x comes from

Slotting: layer A after the opening bullet group, before **Stiffness from a graph**; layer B inside **A wire's stiffness from its material**, between the k = EA/x band and the approved bullets.

Layer A:
- The law itself is the proportionality: within the limit of proportionality, the extension is directly proportional to the force. Double the force, double the extension.
- The stiffness k is the constant of proportionality: how many newtons are needed per metre of extension, hence N m⁻¹.
- The force is the cause and the extension is the response.
- When the sample starts unloaded, the change in force = the force and the change in length = the extension, so F = kΔx applies directly.
- When the sample already carries a load, the law connects the changes: k = ΔF ÷ Δx. This is why the specification prints ΔF = kΔx, and why the substitution mark is awarded for *use of ΔF = kΔx* with the changes used when the graph line does not start at the origin (digest-B.md line 186, digest-D.md line 332).
- Ownership note: stiffness belongs to the object (material + dimensions); force belongs to the loader; extension is the response.

Layer B (derivation of k = EA/x): E = σ/ε with σ = F/A and ε = Δx/x; substitute to E = Fx ÷ (AΔx); rearrange to F = (EA/x) × Δx and compare with F = kΔx, so k = EA/x. Scaling read off the formula: longer wire, smaller k; thicker wire, larger k; doubling the diameter quadruples k because the area is proportional to the diameter squared.

## Statement 28 — why stress and strain exist

Slotting: after the σ/ε/E equation band, before the approved bullet group.

- A raw force cannot describe a material: the same steel snaps under 10 kN in a thin wire and carries 100 kN in a thick cable, so the force is divided by the area it acts over — that quotient is the stress.
- A raw extension cannot describe a material either: 2 mm is huge for a 10 cm wire and tiny for a 10 m wire, so the extension is divided by the original length — that quotient is the strain.
- Stress and strain strip the sample's size out of the measurement, so their ratio belongs to the material alone: that ratio is the Young modulus.
- Worked strain: steel (E = 200 GPa) at 100 MPa strains by 5.0 × 10⁻⁴ = 0.05%. Young moduli are huge because strains are tiny.
- The multiple choice description of a large Young modulus is *the ratio of tensile stress to tensile strain is large* — not the breaking stress, not the density, not the elastic limit (digest-A.md line 17).

## Statement 29 — reading the graph region by region, the unloading line

Slotting: after the named-points bullet group, before **Areas under a force-extension graph**.

- Region 1, origin to the limit of proportionality: straight line through the origin, Hooke's law obeyed, deformation elastic, gradient = the stiffness.
- Region 2, limit of proportionality to the elastic limit: the line curves away (force no longer proportional to extension) but the deformation is still elastic — unload here and the sample still returns to its original length.
- Region 3, beyond the elastic limit: plastic, so the sample never fully returns.
- The multiple choice trap: a sample *at* its elastic limit is elastically deformed; the options claiming plastically deformed, maximum extension, or snapping are each rejected (digest-C.md line 30).
- Unloaded from within the elastic region, the line retraces the loading line: all the work done comes back.
- Unloaded from beyond the elastic limit, the unloading line runs parallel to the original loading line but lower and meets the extension axis at a positive value: that intercept = the permanent extension. (Stated as physics; no printed-wording claim.)
- The area between the loading and unloading lines = the energy that does not come back: it has gone into the permanent deformation and warms the sample (for a rubber band, the mark scheme calls it the energy causing heating — digest-B.md line 286).

## Statement 30 — why stress-strain axes compare materials, the per-unit-volume derivation

Slotting: after the opening bullet group, before **Using the breaking stress**.

- A force-extension graph describes one sample; a stress-strain graph describes the material — the same steel gives the same stress-strain graph whichever sample is tested.
- So compare questions are set on stress-strain axes: initial gradient compares stiffness, height at fracture compares strength, area under the graph compares the energy absorbed per unit volume.
- The printed derivation of the per-unit-volume fact: area = stress × strain = (F/A) × (Δx/x) = FΔx ÷ (A × x), and A × x = the volume, so the area = energy ÷ volume, in J m⁻³ (digest-C.md line 159).
- The energy stored by a real sample = the area under its stress-strain graph multiplied by the volume; the area alone is only proportional to the energy, and the examiner report rejects calling them equal (digest-C.md lines 86 and 301).

## Statement 31 — why the CP3 rig is built this way

Slotting: after the "Not accepted" note on measuring the extension, before **The analysis**.

- The unloaded reference wire cancels everything that is not the load: frame movement and temperature changes move both wires together, so the vernier reads only the difference — the extension caused by the load alone.
- The small initial load straightens the wire, so kinks and slack are not measured as extension.
- Masses added and removed in equal steps: if the readings come back on unloading, the wire stayed inside its elastic limit and the gradient is a valid Young modulus.
- The vernier scale (resolution 0.1 mm) beats a metre rule for the extension readings, so the percentage uncertainty is smaller (digest-B.md line 189) — and the extensions here are a few millimetres, exactly when resolution matters.
- The diameter is squared inside the area: a 1% error in the diameter becomes about a 2% error in the area, which divides every stress — hence several positions and orientations, then the mean (digest-D.md line 42).
- Measurement map table: diameter → A = πd²/4 (micrometer); original length → x in ε = Δx/x and the × x in E = gradient × x ÷ A (metre rule); added masses → F = mg (balance); marker readings → Δx (vernier).

## Statement 32 — the printed substitution route, the energy audit, the spring combinations

Slotting: after the opening bullet group, before **Area under the graph**.

- The substitution chain the mark scheme prints: energy = ½FΔx; on the straight section F = kΔx so Δx = F/k; substitute to ΔEel = F²/(2k), and since k is constant the stored energy is proportional to F² (digest-C.md line 232).
- Unloaded within the elastic region, the unloading line retraces the loading line: all the stored energy comes back.
- Unloaded beyond the elastic limit, the unloading line sits lower: the area between the lines = the energy gone into the permanent deformation.
- Two identical springs in series under the same force: combined stiffness k/2, energy = F² ÷ k = twice one spring, at twice the extension.
- Two identical springs in parallel sharing the same force: combined stiffness 2k, energy = F² ÷ 4k = half one spring, at half the extension.

---

## Integration notes

1. **Register contract, same as part 1:** one mark-point per bullet; =, ×, <, > inside sentences; no arrows; named equations first in eq bands with the unpacking sentence in the note; rejections in "Not accepted" notes; no session tags in the notes content (this trail carries them); native Fmt markup only.
2. **No-duplication rule applied:** where an approved bullet already states a fact (the ductile/brittle read in 30, the at-the-elastic-limit physics in 29, the unit map in 28, the low-viscosity rejection in 25), the foundations layer teaches the reasoning or the derivation behind it instead of repeating it. Two near-recaps are deliberate, following part 1's precedent of recapping the balance before deriving from it.
3. **Proportional-symbol rule:** the site content spells out "proportional to" in words (zero uses of ∝ across the content files), so this part does too.
4. **Numbers verified by computation before writing:** 2 × (1.0 × 10⁻³)² × 9.81 × (7800 − 900) ÷ (9 × 0.20) = 0.0752 ≈ 0.075 m s⁻¹; 100 × 10⁶ ÷ 200 × 10⁹ = 5.0 × 10⁻⁴ = 0.05%; F²/(2 · k/2) = F²/k (series, double) and F²/(2 · 2k) = F²/4k (parallel, half); 1% diameter error → 2% area error (A ∝ d²).
5. **Heading uniqueness:** all new h texts checked against the full site (topic 1 and topic 2): "Where the drag comes from", "The terminal velocity formula, derived", "The two assumptions behind the method", "What Hooke's law says", "Why stress and strain exist", "Reading the graph region by region", "The unloading line and the energy left behind", "Why stress-strain graphs compare materials", "Why the rig is built this way", "The substitution route the mark scheme prints", "Where the strain energy goes, and the spring combinations" — no collisions.
6. **Reader cost:** `minutes` for the topic scaled 60 → 70 (eight statements each gain a short reading layer).

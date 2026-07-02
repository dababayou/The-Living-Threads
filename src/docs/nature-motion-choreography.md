# Nature Motion Choreography

Status: 🔒 Blueprint

This document defines the cinematic and emotional motion language for the Nature section. It serves as the definitive reference for the upcoming GSAP/Lenis implementation. No code, React, or technical implementation is discussed here—only creative intent.

---

## Beat 1: Arrival from Hero
- **Purpose:** Transition the user from the abstract, airy heights of the Hero into the grounded, tactile earth.
- **Trigger:** Scrolling past the threshold of the Hero section.
- **Movement:** The Hero's Scroll Indicator gently fades out. As the user descends, the massive Nature Atmosphere canvas begins to slowly materialize from the bottom edge, swallowing the airy background.
- **Pacing:** Extremely slow and inevitable, like settling dust.
- **Emotional Effect:** A feeling of gravity. Landing softly into a new, heavier environment.
- **Transition into next beat:** The atmosphere fully occupies the viewport, serving as the canvas for the first narrative thought.

## Beat 2: Atmosphere
- **Purpose:** Establish the environmental canvas before introducing text.
- **Trigger:** Scrolling continuously through the top of the Nature section.
- **Movement:** The background environmental texture scales up *microscopically* as the user scrolls. It breathes gently.
- **Pacing:** Sub-perceptual. The user should feel the movement more than they see it.
- **Emotional Effect:** The environment feels alive, vast, and silent.
- **Transition into next beat:** The atmospheric texture slows its scaling, naturally leading the eye toward the first emerging typography.

## Beat 3: Narrative Reveal
- **Purpose:** Introduce the philosophical anchor ("Before the thread, there is the earth").
- **Trigger:** The narrative block entering the center of the viewport.
- **Movement:** The typography does not slide, snap, or fade theatrically. It slowly *resolves* from the background atmosphere, increasing in opacity as if stepping out of the fog. 
- **Pacing:** Deliberate and unhurried. 
- **Emotional Effect:** Reverent discovery. The text feels like a whispered observation.
- **Transition into next beat:** The typography remains anchored while the user scrolls down, gradually blurring or fading into the background to yield the stage to the raw materials.

## Beat 4: Material Discovery
- **Purpose:** Reveal the physical extraction of color and fiber.
- **Trigger:** Each material block (image + caption + text) crossing the lower third of the viewport.
- **Movement:** 
  - **Large Imagery:** Emerges first. Unveiled softly from the bottom up, behaving like erosion or natural exposure.
  - **Captions:** Bloom slowly near the edges of the images only *after* the image is fully established.
  - **Paragraphs:** Materialize last, fading in softly beside the imagery.
- **Pacing:** Sequenced. The user must *see* the texture, *observe* the caption, and then *read* the explanation. 
- **Emotional Effect:** Grounded curiosity. The user feels like they are physically uncovering the roots and leaves.
- **Transition into next beat:** As one material block drifts upward, the next begins its emergence, creating an overlapping rhythm.

## Beat 5: Progressive Density
- **Purpose:** Visually communicate the gathering of materials.
- **Trigger:** Scrolling deeper into the final material blocks.
- **Movement:** The parallax effect thickens. Elements begin to slightly overlap in z-space. The motion doesn't become faster, but the composition becomes richer and visually heavier. 
- **Pacing:** Continuous and steady.
- **Emotional Effect:** Accumulation. The harvest is complete. 
- **Transition into next beat:** The meandering layouts pull inward, centering perfectly for the final threshold.

## Beat 6: Transition into Craft
- **Purpose:** Prepare the user for human intervention.
- **Trigger:** Reaching the final dense, architectural block ("Threshold of Craft").
- **Movement:** The organic, fading reveals are replaced by a slightly more structured appearance. The vertical intersection lines slowly draw themselves downward. The block solidifies firmly in place.
- **Pacing:** Grounded and resolute.
- **Emotional Effect:** Anticipation. Nature has provided; now the humans arrive.
- **Transition into next beat:** The screen is locked into perfect symmetry, waiting for the Craft section to begin.

---

## Motion Principles
Movement must feel **organic, slow, inevitable, and continuous**.
- **Allowed:** Diffusion, settling, erosion, breathing, growing.
- **Forbidden:** Snapping, bouncing, overshooting, spinning, stretching, or surprise mechanics.
Nothing should feel driven by machinery or digital physics. Motion must behave like wind, light, water, and time.

## Motion Ownership

Motion belongs to the section,
never to individual components.

Child components expose structure.

Parent sections orchestrate timing.

No reusable UI component should contain narrative animation.

Every section owns its own cinematic language.

## Motion Density

Hero introduces motion.

Nature reduces it.

Motion becomes slower,
rarer,
and more spatial.

The section should feel quieter even though it contains more visual material.

More content does not mean more animation.

## Motion Completion

Once an element has completed its reveal,
it becomes part of the landscape.

It should not repeatedly animate.

It should quietly exist.

Only the environment continues breathing.

The story moves forward,
never backwards.

## Parallax Strategy
- **Foreground (Captions & Text):** Moves at the native scroll speed. Grounded and readable.
- **Midground (Images):** Moves slightly slower than the scroll, creating a subtle drag that gives the images physical weight.
- **Background (Atmosphere):** Moves incredibly slowly, remaining anchored in the viewport longer to maintain environmental continuity.
*Reasoning:* This mimics physical depth of field, making the layout feel like a 3D landscape rather than a flat digital canvas.

## Reading Rhythm
Motion intentionally slows scrolling. Because the text only resolves *after* the imagery is established, the user is subconsciously forced to pause, observe the texture, and wait for the narrative to yield its meaning. Reading is never interrupted by motion; rather, motion clears the path for reading.

## Stillness

Movement is only one part of the experience.

Stillness is equally important.

After every reveal,
allow the interface to rest.

Nothing should constantly animate simply because it can.

Quiet moments allow observation.

Observation creates meaning.

## ScrollTrigger Philosophy

Scroll drives discovery,
not spectacle.

Triggers should activate only when attention naturally arrives.

Animations should never surprise the user.

Scrolling reveals.

It never performs.

## Attention Flow
The eye must follow this sequence exactly:
1. **Environment:** Feel the atmosphere.
2. **Subject:** See the raw material.
3. **Annotation:** Observe the field note (caption).
4. **Text:** Read the philosophical context.
The user should never be forced to read before they have observed the space.

## Exit Conditions
Immediately before entering the *Craft* section, the user should feel:
- Weighted and grounded.
- Focused.
- Prepared for structure, rhythm, and human geometry.

## Success Criteria
This document succeeds if another engineer can implement the complete animation using GSAP/Lenis by simply translating these emotional and cinematic descriptions into code, without needing to invent new motion ideas, timings, or concepts.

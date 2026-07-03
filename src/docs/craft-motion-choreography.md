# Craft Motion Choreography

Status: 🔒 Blueprint

This document defines the cinematic and emotional motion language for the Craft section. It translates the Story Freeze and Layout Brief into movement, without discussing implementation details such as React, GSAP, CSS, or code.

---

## Beat 1: The First Touch

### Purpose
To introduce the first deliberate human action. Nature has been completely still. Craft begins with intention.

### Trigger
The user scrolls beyond the final threshold of Nature.

### Movement
A single hand slowly enters the visual composition, fading in steadily from the bottom as if stepping into the light. Not dramatically. Almost quietly. The first movement should feel like permission rather than interruption. The primary focal point emerges before any supporting typography resolves.

### Emotional Effect
The user realizes that the story has shifted from nature to human knowledge.

### Transition into Beat 2
As the first touch is established, the user scrolls downward, and the introductory image anchors slightly in the background while the first gesture sequence naturally slides up to overlap it, connecting the introduction directly to the physical labor.

---

## Beat 2: Establishing Rhythm

### Purpose
Introduce repetition.

### Trigger
The first action sequence entering the viewport.

### Movement
Hands perform deliberate gestures. Pull. Pause. Wrap. Pause. Lift. Pause. Nothing loops mechanically. Everything breathes. 
The visual blocks (imagery representing pulling or twisting) emerge first, holding the user's attention. The accompanying text is intentionally delayed, forcing the user to observe the physical gesture before reading the explanation.

### Emotional Effect
The user begins to feel the cadence of craftsmanship.

### Transition into Beat 3
The first set of gestures remains partially visible as the subsequent material transformations begin to overlap from below, creating a continuous workspace rather than disjointed slides.

---

## Beat 3: Material Transformation

### Purpose
Show that materials gradually change state.

### Trigger
Each material block crossing the lower third of the viewport.

### Movement
Material appears first. Hands follow. Thread slowly organizes itself. Typography resolves last. 
Motion strictly dictates the reading rhythm: the image emerges steadily, and only after the gesture is fully comprehended does the annotation bloom, followed finally by the paragraph fading in.

### Emotional Effect
The user understands transformation through observation rather than narration.

### Transition into Beat 4
As the threads are organized, the tools that shaped them seamlessly enter the frame, maintaining the momentum of the scroll.

---

## Beat 4: Tool Collaboration

### Purpose
Demonstrate that tools extend human hands.

### Trigger
Workshop detail blocks entering the viewport.

### Movement
Tools never animate independently. Only human interaction gives them life. When a hand moves, the nearby tool subtly follows. Never the opposite. The visual emergence of a tool is always anchored by the appearance of the human gesture operating it. 

### Emotional Effect
Tools feel respectful. Never dominant.

### Transition into Beat 5
The individual tool and gesture blocks begin to stack closer together visually, preparing the user for the peak density of the work.

---

## Beat 5: Rhythm Becomes Memory

### Purpose
Transition from individual actions into accumulated knowledge.

### Trigger
Later sequences and the dense alternating grid block.

### Movement
Gestures become increasingly predictable. Not repetitive enough to become mechanical, but familiar enough to become comforting. Spacing between movements decreases slightly, creating visual confidence. Motion density increases here—more elements (wide crops, tight squares, annotations) overlap and resolve in quicker succession, simulating the peak flow state of craftsmanship before gradually slowing down into calm.

### Emotional Effect
The user stops watching individual gestures and starts feeling the rhythm itself.

### Transition into Beat 6
The rapid sequence of varied crops slows dramatically. The busy workspace funnels into a single, centered, structured composition.

---

## Beat 6: Preparing Meaning

### Purpose
End craftsmanship before symbolism begins.

### Trigger
Final viewport of the Craft section.

### Movement
All motion gradually settles. The final thread remains. The stacked, bundled materials drop gently into place, anchoring the composition perfectly in the center. Hands disappear. The completed preparation quietly remains on screen. Nothing celebrates completion. Everything simply waits.

### Emotional Effect & Exit Condition
The user feels a profound sense of calm stability. The frantic energy of creation has ceased, leaving behind a perfectly organized artifact. The user naturally asks: "What does all of this mean?" That question belongs to the next chapter.

---

# Motion Principles

Motion follows human physiology.

Allowed:
- pulling
- wrapping
- twisting
- tightening
- relaxing
- waiting
- placing
- breathing

Forbidden:
- bouncing
- snapping
- elastic motion
- overshoot
- spinning
- exaggerated scaling
- digital-looking transitions

Every movement must feel physically possible.

---

# Motion Hierarchy & Sequence

Priority:
1. **Human Intention:** Sets the pace.
2. **Gesture:** Hands appear and interact.
3. **Material:** Reacts to the gesture.
4. **Tools:** Follow the material and the hands.
5. **Typography:** Explains the result only after the sequence completes.

The eye must always follow this hierarchy.

---

# Reading Rhythm

Motion intentionally delays reading until observation has happened. 
- Elements do not appear simultaneously. 
- Visuals resolve fully before text begins its fade-in. 
- The user is held in a state of visual processing by the delayed emergence of typography. 

---

# Cinematic Depth Strategy

- **Foreground (Annotations & Text):** Crisp, readable, moving exactly at the speed of the scroll, feeling closest to the user's eye.
- **Midground (Subject / Gestures):** Moves slightly slower than the scroll, creating a tactile drag that implies the physical weight of the labor.
- **Background (Workspace / Shadows):** Almost static, grounding the workspace and allowing the midground actions to slide over it smoothly.

---

# Temporal Language

The pacing should resemble experienced craftsmanship. Nothing is rushed. Nothing hesitates. Every gesture appears practiced through decades of repetition.

---

# Visual Rhythm

Movement should resemble:
heartbeat ↓ breath ↓ heartbeat ↓ breath
rather than:
tick tick tick tick

Human rhythm is slightly imperfect. That imperfection creates warmth.

---

# Transition into Meaning

As the section concludes:
- motion decreases
- composition becomes increasingly ordered
- gestures disappear
- materials remain

The story shifts from "how" to "why" without requiring a visual shock.

---

# Success Criteria

This choreography succeeds if:
- users feel the rhythm before noticing animation
- motion never distracts from craftsmanship
- repetition becomes calming
- tools always feel secondary to hands
- the transition into Meaning feels inevitable
- another engineer can implement the entire section cleanly, knowing exactly when each element triggers, how it moves relative to others, and the sequence of reveals, without inventing new motion concepts.
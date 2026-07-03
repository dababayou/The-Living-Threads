# Living Heritage — Motion Choreography

Status: FROZEN

---

# Chapter Motion Philosophy

Living Heritage introduces life without introducing energy.

Motion should never attract attention to itself.

Instead,

motion quietly reveals the invisible relationships that already exist within the layout.

Every animation should feel like a human response,

never like a UI interaction.

---

# Motion Identity

Verb:

Respond.

Nothing moves in isolation.

Every movement feels caused by another presence.

Images invite text.

One composition quietly welcomes the next.

Motion expresses continuity,

not transition.

---

# Motion Vocabulary

Allowed

- arriving
- waiting
- responding
- sharing
- following
- continuing
- settling

Forbidden

- bouncing
- snapping
- spinning
- elastic motion
- overshoot
- dramatic scaling
- theatrical reveals

Motion should always feel emotionally inevitable.

---

# Motion Density

Overall density is low.

However,

small motions are distributed throughout the chapter.

The visitor should continuously sense life,

without consciously noticing animation.

---

# Scroll Strategy

Use non-scrub ScrollTrigger for all reveals.

Do not use scrub animations.

Do not introduce parallax.

Relationships are emotional,

not spatial.

---

# Reading Tempo

Every reveal should encourage observation before reading.

Images settle first.

Typography responds afterwards.

The visitor should always see before interpreting.

---

# Narrative Frame One

## Presence

### Motion Goal

Allow the visitor to quietly meet another person.

No dramatic entrance.

The image simply becomes present.

### Sequence

Image

↓

brief pause

↓

text

### Motion Language

Image

- opacity
- y: 12 → 0

Text

- opacity
- y: 8 → 0

Both movements should feel almost imperceptible.

---

# Transition

Presence → Connection

The next composition should begin appearing before the previous emotional moment fully disappears.

No hard reset.

No visual interruption.

The visitor should feel that another person quietly enters the same environment.

---

# Narrative Frame Two

## Connection

### Motion Goal

Relationships become visible.

Motion should reveal interaction,

not hierarchy.

### Sequence

Primary image

↓

secondary image or supporting visual

↓

text

Each reveal should feel like one person acknowledging another.

Never like staggered UI elements.

### Motion Language

Small vertical settling.

Soft opacity transitions.

Longer durations than Craft.

Shorter than Meaning.

---

# Transition

Connection → Continuation

The chapter gently shifts from presence into shared activity.

Motion should become slightly more continuous,

without becoming energetic.

The visitor should barely notice the emotional acceleration.

---

# Narrative Frame Three

## Continuation

### Motion Goal

Reveal that continuity exists through ordinary repetition.

Animations should overlap slightly.

Not to create speed,

but to express coexistence.

### Sequence

First gesture

↓

second gesture

↓

supporting image

↓

reflection

Each movement quietly responds to the previous one.

### Motion Language

Soft overlapping fades.

Small vertical settling.

Minimal delays.

Natural cadence.

---

# Transition

Continuation → Invitation

Movement gradually slows.

Spacing increases.

The chapter begins breathing more deeply.

Activity dissolves naturally into stillness.

---

# Narrative Frame Four

## Invitation

### Motion Goal

Leave emotional space.

The final composition should feel as though life continues after animation ends.

### Sequence

Portrait

↓

pause

↓

reflection

↓

complete stillness

### Motion Language

Longest duration of the chapter.

Almost invisible movement.

The final resting state becomes the composition itself.

---

# Chapter Ending

Nothing fades away.

Nothing exits.

Everything simply remains.

The visitor scrolls onward,

not because the chapter finishes,

but because life quietly continues beyond it.

Hope begins emotionally before it appears visually.

---

# Timing Philosophy

Favor longer durations over larger movement.

Distance should remain small.

Time should carry the emotional weight.

Motion is measured through patience,

not displacement.

---

# Easing

Use only the project's approved easing tokens.

Favor:

- EASE.default
- EASE.inOut

Never introduce expressive easing.

---

# Accessibility

Respect prefers-reduced-motion.

Reduced-motion users should immediately receive the final composition.

No content may depend on animation for comprehension.

---

# Motion Ownership

All GSAP timelines remain inside LivingHeritage.tsx.

Child components contain:

- no GSAP
- no ScrollTrigger
- no timeline logic

Children expose only refs.

The parent owns every animation sequence.

This chapter fully follows the Motion Ownership Rule.

---

# Implementation Notes

Use independent timelines for each narrative frame.

Avoid one monolithic timeline.

Each frame should be readable in isolation,

while still contributing to the continuous rhythm of the chapter.

Clean up every animation using:

- gsap.context()
- ctx.revert()

Never use animation to compensate for spacing,

layout,

or visual hierarchy.

Motion reinforces relationships.

It never creates them.

---

# Success Criteria

The visitor should never think:

"That animation was beautiful."

Instead,

they should quietly feel:

"These people seem alive."

The motion has succeeded when it becomes invisible.
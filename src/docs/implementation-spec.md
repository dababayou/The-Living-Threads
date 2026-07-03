# ==========================================================================
# IMPLEMENTATION SPECIFICATION
# ==========================================================================

Version: 1.0

Project:
The Living Threads

Purpose:
This document defines the technical implementation rules for the project.

Unlike the Creative Direction Bible, this document does not explain why
design decisions exist.

Instead, it explains how those decisions must be implemented.

Whenever conflicts occur:

design.md defines intent.

implementation-spec.md defines execution.

If implementation contradicts the Creative Direction Bible,

implementation must be revised.

This document is considered the single source of truth for engineering,
component architecture, interaction behaviour, accessibility,
performance, and project organization.

# ==========================================================================
# Chapter 01 — Project Scope
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Define the technical boundaries of the project.

Requirements

• Static frontend application only.

• No backend.

• No authentication.

• No user accounts.

• No LocalStorage.

• No SessionStorage.

• No cookies for application state.

• No external database.

• No CMS integration.

• No server-side rendering.

• No user-generated content.

• No runtime content editing.

Recommendations

Treat every visitor as a first-time visitor.

The experience should be fully functional without any stored state.

Anti-patterns

Persisting progress.

Saving preferences.

Building infrastructure for future features.

Acceptance Criteria

The complete website can be deployed to any static hosting provider
without requiring additional services.

# ==========================================================================
# Chapter 02 — Technology Stack
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Define every approved technology used in the project.

Approved Stack

React
Purpose:
Component architecture.

Vite
Purpose:
Development server and production bundling.

TypeScript
Purpose:
Type safety and maintainability.

Tailwind CSS
Purpose:
Styling system.

GSAP
Purpose:
Narrative animation.

Lenis
Purpose:
Smooth scrolling.

Intersection Observer
Purpose:
Viewport detection.

SVGR
Purpose:
SVG as React components.

Not Approved

Bootstrap

Material UI

Ant Design

jQuery

Framer Motion

Redux

Any CSS framework other than Tailwind.

Recommendations

Prefer browser-native APIs whenever possible.

Avoid introducing dependencies that duplicate existing capabilities.

Acceptance Criteria

Every dependency included in package.json has a clearly defined purpose.

Unused libraries are removed.

# ==========================================================================
# Chapter 03 — Engineering Principles
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Define the engineering philosophy that governs every implementation
decision.

Principles

One component.
One responsibility.

One section.
One narrative chapter.

One animation.
One purpose.

One viewport.
One primary idea.

Content never lives inside UI components.

Sections never import other sections.

Animations never own application logic.

Components remain reusable.

Hooks remain composable.

Utilities remain pure.

Prefer composition over inheritance.

Prefer readability over cleverness.

Prefer explicitness over abstraction.

Prefer deletion over unnecessary addition.

Recommendations

Optimize for maintainability before optimization.

Code should be understandable without external explanation.

Anti-patterns

God components.

Massive utility files.

Anonymous magic values.

Nested conditional rendering.

Duplicated logic.

Deep prop drilling.

Acceptance Criteria

A new developer should understand any component within five minutes.

# ==========================================================================
# Chapter 04 — Repository Structure
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Define the canonical project structure.

No alternative folder organization is permitted unless explicitly
approved.

Repository

src/

├── app/
│   ├── App.tsx
│   ├── providers/
│   └── router/
│
├── assets/
│   ├── images/
│   ├── illustrations/
│   ├── icons/
│   ├── textures/
│   └── fonts/
│
├── components/
│
├── sections/
│
├── animations/
│
├── hooks/
│
├── content/
│
├── styles/
│
├── types/
│
├── utils/
│
└── main.tsx

Requirements

Every directory has exactly one responsibility.

No feature may introduce a new top-level directory without explicit
approval.

Recommendations

Prefer shallow directory hierarchies.

Avoid excessive nesting.

Acceptance Criteria

A new contributor can identify where any file belongs within one minute.

# ==========================================================================
# Chapter 05 — Folder Responsibilities
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Define the responsibility of every project directory.

Rules

app/

Application bootstrap only.

Never contains UI.

components/

Reusable UI elements.

Must remain independent of narrative order.

Sections may import components.

Components must never import sections.

sections/

Narrative chapters.

Each section corresponds to exactly one chapter of the visitor journey.

Sections are responsible for layout composition.

animations/

Reusable animation definitions.

Animations never contain business logic.

Animations should be composable.

content/

Static textual content.

No UI logic.

No styling.

No JSX.

Content should be importable by any section.

hooks/

Reusable application hooks.

Hooks must not render UI.

utils/

Pure helper functions.

No side effects.

styles/

Global styling only.

No component-specific styling.

types/

Shared TypeScript definitions.

Never contain runtime logic.

Requirements

Every file belongs to one folder only.

No duplicated responsibility.

Anti-patterns

Putting copy inside React components.

Creating utility functions inside sections.

Defining animations inside JSX files.

Acceptance Criteria

Every contributor can explain the responsibility of each directory
without ambiguity.

# ==========================================================================
# Chapter 06 — Dependency Rules
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Prevent circular dependencies and uncontrolled architecture growth.

Allowed

Section

↓

Component

↓

Utility

↓

Browser API

Allowed

Section

↓

Content

Allowed

Section

↓

Animation

Allowed

Component

↓

Utility

Forbidden

Section

↓

Section

Component

↓

Section

Utility

↓

Component

Animation

↓

React State

Content

↓

JSX

Content

↓

DOM

Requirements

Dependency direction must remain unidirectional.

Anti-patterns

Circular imports.

Hidden dependencies.

Implicit coupling.

Acceptance Criteria

No dependency graph contains cycles.

# ==========================================================================
# Chapter 07 — Naming Convention
# ==========================================================================

Priority:
★★★★☆
Strong Recommendation

Purpose

Ensure naming consistency across the project.

Components

PascalCase

Example

SectionTitle.tsx

Quote.tsx

ImageReveal.tsx

Hooks

camelCase

Example

useScrollProgress.ts

useReducedMotion.ts

Utilities

camelCase

Example

clamp.ts

lerp.ts

debounce.ts

Content

camelCase

Example

heroContent.ts

craftContent.ts

hopeContent.ts

Assets

kebab-case

Example

hero-image.webp

natural-indigo.webp

loom-closeup.webp

CSS Variables

kebab-case

Example

--color-earth

--space-xl

--radius-sm

Requirements

Naming must describe responsibility.

Avoid abbreviations unless universally understood.

Acceptance Criteria

A file name communicates its purpose without opening the file.

# ==========================================================================
# Chapter 08 — Component Philosophy
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Define how UI components should be designed and maintained.

Requirements

Each component has exactly one responsibility.

Components should be composable.

Components should remain stateless whenever possible.

Components must not own narrative flow.

Components must not contain static copy.

Components must not perform unrelated calculations.

Recommendations

Prefer several small components over one large component.

Extract repeated patterns after the second occurrence.

Optimize readability before reducing file count.

Anti-patterns

Components exceeding one responsibility.

Deep conditional rendering.

Multiple unrelated visual states.

Components tightly coupled to one page.

Acceptance Criteria

Removing one component should not require changes to unrelated
components.

# ==========================================================================
# Chapter 09 — Section Philosophy
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Define the architectural role of narrative sections.

Requirements

Each section represents one chapter of the visitor journey.

Each section owns one primary narrative idea.

Sections compose components.

Sections do not implement reusable UI.

Sections remain independent.

Sections do not import other sections.

Recommendations

Keep sections visually self-contained.

Organize files according to narrative sequence.

Anti-patterns

Reusable logic inside sections.

Copy duplicated across sections.

Cross-section dependencies.

Acceptance Criteria

Every section can be removed without breaking another section.

# ==========================================================================
# Chapter 10 — State Management
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Prevent unnecessary application state.

Requirements

Prefer local component state.

Avoid global state.

Do not introduce state without a clear requirement.

Derived values should not be stored.

Recommendations

Calculate whenever calculation is inexpensive.

Lift state only when required.

Prefer immutable updates.

Anti-patterns

Redux.

MobX.

Context used as global storage.

Duplicated state.

Stored derived values.

Acceptance Criteria

Every state variable has a clearly documented purpose.

# ==========================================================================
# Chapter 11 — Content Management
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Separate narrative content from presentation.

Requirements

All narrative copy lives inside /content.

Components import content.

Content contains no styling.

Content contains no JSX.

Content remains framework-independent.

Recommendations

Group content by narrative chapter.

Keep sentences editable.

Prefer structured objects over plain strings.

Anti-patterns

Inline copy.

Hardcoded paragraphs.

Duplicated sentences.

Acceptance Criteria

Editors can update narrative copy without touching UI code.

# ==========================================================================
# Chapter 12 — Asset Management
# ==========================================================================

Priority:
★★★★★
Mandatory

Purpose

Ensure predictable organization of visual assets.

Requirements

Every asset belongs to one category.

Images use WebP whenever possible.

SVG remains editable.

Icons remain vector.

Illustrations remain separated from photography.

Recommendations

Optimize assets before importing.

Avoid duplicate images.

Use descriptive filenames.

Anti-patterns

Random filenames.

Mixed illustration and photography.

Unused assets.

Acceptance Criteria

Any asset can be located within one minute.

# ==========================================================================
# Chapter 13 — Error Philosophy
# ==========================================================================

Priority:
★★★★☆
Strong Recommendation

Purpose

Define how unexpected situations should be handled.

Requirements

Never silently ignore errors.

Prefer graceful degradation.

Avoid application crashes.

Provide meaningful developer messages.

Recommendations

Fail safely.

Log intentionally during development.

Remove unnecessary console output before release.

Anti-patterns

Empty catch blocks.

Silent failures.

Console spam.

Acceptance Criteria

Unexpected failures do not interrupt the visitor experience.

# ==========================================================================
# Chapter 14 — Design Tokens
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Establish a single source of truth for every reusable visual value.

All colors,
spacing,
typography,
radius,
elevation,
and timing values must originate from design tokens.

Hardcoded visual values are prohibited.

Requirements

• Every reusable visual value is defined once.

• Components never invent new values.

• Tokens remain globally accessible.

• Tokens use semantic naming.

Recommendations

Prefer semantic names over visual names.

Good

--color-primary

Bad

--blue

Implementation Example

Good

padding:
var(--space-xl)

Bad

padding:
46px

Common Mistakes

Using arbitrary spacing.

Hardcoding colors.

Creating duplicate tokens.

Using RGB values directly inside components.

AI Notes

Whenever a visual value is required,
first search for an existing token.

Create a new token only when no existing token satisfies the requirement.

Acceptance Criteria

Removing all hardcoded values does not visually change the project.

# ==========================================================================
# Chapter 15 — Color System
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define every color permitted throughout the project.

Requirements

Colors originate from natural dye references documented in design.md.

Approved Roles

Primary

Secondary

Surface

Background

Text

Accent

Interactive

Disabled

Recommendations

Never use color as decoration.

Every color communicates hierarchy.

Implementation Example

Good

Background

Warm Cotton

Text

Earth Brown

Accent

Soft Gold

Bad

Bright Blue CTA

Purple Gradient

Neon Green Highlight

Common Mistakes

Using saturated colors.

Using gradients.

Introducing additional accent colors.

AI Notes

Never generate new colors automatically.

Use only approved semantic tokens.

Acceptance Criteria

Every visible color maps to an approved design token.

# ==========================================================================
# Chapter 16 — Typography System
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Ensure consistent editorial rhythm.

Requirements

One display serif family.

One sans-serif family.

One monospace family for development only.

No additional font families.

Recommendations

Typography creates hierarchy before color.

Prefer whitespace over font weight.

Limit font weight variations.

Implementation Example

Display Serif

Headlines

Sans Serif

Body

Caption

Navigation

Common Mistakes

Using too many font sizes.

Mixing multiple serif families.

Center-aligning long paragraphs.

AI Notes

Text hierarchy should remain understandable in grayscale.

Acceptance Criteria

Removing color should not reduce readability.

# ==========================================================================
# Chapter 17 — Spacing System
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define spatial rhythm throughout the project.

Requirements

Spacing follows a consistent scale.

Whitespace is intentional.

Spacing communicates hierarchy before decoration.

Qualitative Rules

Whitespace is considered content.

Larger narrative transitions require larger spatial separation.

Components should never appear visually crowded.

Quantitative Rules

Base spacing unit

4px

Recommended spacing scale

4

8

12

16

24

32

48

64

96

128

160

Default section spacing

Desktop

160–240px

Tablet

128–180px

Mobile

96–144px

Implementation Example

Hero

↓

192px

↓

Nature

↓

176px

↓

Craft

Common Mistakes

Random spacing values.

Mixing unrelated spacing scales.

Overlapping sections.

AI Notes

Always use spacing tokens.

Never introduce arbitrary values.

Acceptance Criteria

Visual rhythm remains consistent throughout scrolling.

# ==========================================================================
# Chapter 18 — Grid System
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define page alignment.

Requirements

All layout follows one grid.

Qualitative Rules

Grid should disappear visually.

Alignment creates calmness.

Quantitative Rules

Desktop

12 columns

Tablet

8 columns

Mobile

4 columns

Maximum content width

1280px

Reading width

640–720px

Implementation Example

Hero text

↓

Reading width

Photography

↓

Grid aligned

Caption

↓

Reading width

Common Mistakes

Floating elements without alignment.

Different grids per section.

AI Notes

All layout decisions originate from the same grid system.

Acceptance Criteria

No element appears visually detached from the layout.

# ==========================================================================
# Chapter 19 — Container System
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define reusable layout containers.

Requirements

Use one container system.

Containers define width,
not appearance.

Quantitative Rules

Full

100%

Wide

1280px

Content

960px

Reading

720px

Narrow

560px

Implementation Example

Hero

Wide

↓

Editorial paragraph

Reading

↓

Quote

Narrow

Common Mistakes

Creating custom widths.

Centering everything.

Using pixel widths inside sections.

AI Notes

Choose the smallest container capable of supporting the content.

Acceptance Criteria

Container choice communicates hierarchy.

# ==========================================================================
# Chapter 20 — Image System
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define photography implementation.

Requirements

Photography remains documentary.

Never decorative.

Qualitative Rules

People before objects.

Hands before products.

Process before results.

Natural lighting preferred.

Quantitative Rules

Aspect ratio

16:9

4:5

1:1

Preferred formats

WebP

SVG

Maximum image size

250 KB

Hero image

≤400 KB

Implementation Example

Good

Close-up hands weaving.

Bad

Centered isolated textile.

Common Mistakes

Stock photography.

Over-editing.

Heavy color grading.

Decorative image galleries.

AI Notes

Whenever choosing between a person and an object,

prefer the person.

Acceptance Criteria

Every image contributes to the narrative.

# ==========================================================================
# Chapter 21 — Icon System
# ==========================================================================

Priority
★★★★☆
Strong Recommendation

Purpose

Prevent icon inconsistency.

Requirements

Icons remain minimal.

Outline style preferred.

Icons support meaning.

Icons never replace text.

Quantitative Rules

Default size

20px

24px

Stroke

2px

Maximum icon families

One

Implementation Example

Arrow

Progress

Close

Menu

Common Mistakes

Mixing icon packs.

Filled and outline icons together.

Decorative icons.

AI Notes

If an icon does not improve comprehension,

remove it.

Acceptance Criteria

Icons remain visually invisible until needed.

# ==========================================================================
# Chapter 25 — Interaction Philosophy
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define the role of interaction throughout the project.

Requirements

Every interaction has a narrative purpose.

Every interaction increases understanding.

Interactions never exist solely for entertainment.

Qualitative Rules

Hover reveals.

Click explains.

Scroll discovers.

Motion guides.

Interaction should feel calm.

Interaction should never compete with the story.

Implementation Example

Good

Hovering an image reveals information about the weaving process.

Bad

Hovering an image causes unnecessary rotation.

Common Mistakes

Decorative hover effects.

Interactions without information gain.

Repeated animations.

AI Notes

Before creating any interaction, ask:

"What new understanding does this create?"

If the answer is none,

remove the interaction.

Acceptance Criteria

Every interaction contributes to storytelling.

# ==========================================================================
# Chapter 26 — Scroll Behaviour
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define scrolling as the primary storytelling mechanism.

Requirements

Scrolling advances the narrative.

Scrolling never feels rushed.

Scrolling remains continuous.

Qualitative Rules

Visitors should feel guided,

never controlled.

Scrolling replaces page navigation.

Scrolling should resemble turning pages,

not jumping between screens.

Quantitative Rules

Target reading speed

Self-paced

Section transition duration

0.6–1.2 s

Maximum simultaneous animations

2

Implementation Example

Good

As the visitor scrolls,

new content gradually replaces previous content.

Bad

Entire sections appear instantly.

Common Mistakes

Scroll hijacking.

Horizontal scrolling without purpose.

Fast parallax.

AI Notes

Scrolling must always preserve reading comfort.

Acceptance Criteria

Visitors understand the narrative without stopping to interpret the interface.

# ==========================================================================
# Chapter 27 — Motion Language
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define how motion communicates meaning.

Requirements

Motion is subtle.

Motion is deliberate.

Motion is slow enough to observe.

Qualitative Rules

Motion should resemble breathing,

not performance.

Objects should settle naturally.

Acceleration should remain gentle.

Quantitative Rules

Default duration

400–900 ms

Large narrative transition

800–1400 ms

Default easing

ease-out

Preferred transform

Opacity

Translate

Scale

Forbidden transform

Continuous rotation.

Bounce.

Elastic effects.

Implementation Example

Good

Image softly fades upward while entering.

Bad

Image spins into view.

Common Mistakes

Overlapping animations.

Competing movements.

Animated everything.

AI Notes

If motion attracts more attention than content,

reduce the motion.

Acceptance Criteria

Motion feels invisible after prolonged viewing.

# ==========================================================================
# Chapter 28 — Reveal System
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Standardize how information becomes visible.

Requirements

Information appears progressively.

Never reveal everything simultaneously.

Qualitative Rules

Reveal creates curiosity.

Curiosity creates attention.

Attention creates understanding.

Implementation Example

Good

Headline

↓

Image

↓

Supporting text

↓

Quote

Bad

Everything visible immediately.

Common Mistakes

Large content dumps.

Multiple reveals at once.

Hidden content requiring excessive interaction.

AI Notes

Each reveal should answer one question

while creating the next.

Acceptance Criteria

Visitors remain curious throughout the narrative.

# ==========================================================================
# Chapter 35 — Overall Narrative
# ==========================================================================

Priority
★★★★★
Mandatory

Purpose

Define the complete visitor journey.

Requirements

The website follows a fixed narrative order.

Narrative sequence may not be changed.

Narrative Order

Hero

↓

Nature

↓

Craft

↓

Meaning

↓

Living Heritage

↓

Hope

Qualitative Rules

Each section answers one question.

Each section creates the next question.

Curiosity should continuously increase.

The emotional peak occurs near the end of the experience.

Implementation Example

Hero

"What is this?"

↓

Nature

"Where does it begin?"

↓

Craft

"How is it created?"

↓

Meaning

"Why does it matter?"

↓

Living Heritage

"Who continues it today?"

↓

Hope

"What can I do next?"

Common Mistakes

Changing section order.

Repeating information.

Ending too abruptly.

AI Notes

Never reorder narrative chapters.

Never merge two narrative chapters into one.

Acceptance Criteria

Visitors naturally continue scrolling without needing navigation.

# ==========================================================================
# Chapter 36 — Hero Narrative Blueprint
# ==========================================================================

Priority
★★★★★

Purpose

Define the narrative responsibility of the Hero chapter.

Narrative Role

The Hero introduces the journey.

It does not introduce the culture.

Narrative Goal

Create curiosity strong enough to encourage the first scroll.

Primary Question

"What is this experience?"

Expected Emotion

Curiosity

Beginning of quiet anticipation.

Narrative Inputs

None.

The visitor arrives with no prior context.

Narrative Outputs

Visitors understand that this is not a conventional cultural website.

Visitors become willing to continue.

Story Progression

Unknown

↓

Curiosity

↓

Journey Begins

Transition Condition

The first scroll represents a conscious decision to continue the story.

AI Notes

Do not answer questions too early.

The Hero exists to create curiosity,

not satisfaction.

Acceptance Criteria

Visitors choose to scroll because they want to know more,

not because they are searching for navigation.

# ==========================================================================
# Chapter 37 — Nature Narrative Blueprint
# ==========================================================================

Purpose

Introduce origin.

Narrative Goal

Everything meaningful begins before craftsmanship.

Primary Question

"Where does weaving begin?"

Expected Emotion

Wonder.

Narrative Inputs

Curiosity.

Narrative Outputs

Understanding that nature is the first artisan.

Story Progression

Curiosity

↓

Wonder

↓

Respect for materials

Transition Condition

Visitors realize that weaving starts before the loom appears.

AI Notes

Do not introduce artisans yet.

Nature should feel complete on its own.

# ==========================================================================
# PART 09 — DEVELOPMENT WORKFLOW
# ==========================================================================

Purpose

Define the standard workflow for implementing every feature.

The workflow ensures consistency between human developers and AI assistants.

---

## Phase 1 — Understand

Before writing code:

- Read the relevant section in design.md.
- Read the corresponding blueprint in implementation-spec.md.
- Identify all applicable design constraints.
- Do not write code during this phase.

Output

A clear implementation plan.

---

## Phase 2 — Plan

Describe the implementation before coding.

The plan should include:

- Files to create
- Files to modify
- Components involved
- Animations involved
- Responsive considerations
- Accessibility considerations

If uncertainty exists,

stop and ask.

---

## Phase 3 — Build

Implement only the requested feature.

Requirements

- Follow the project architecture.
- Reuse existing components.
- Reuse design tokens.
- Avoid unnecessary abstractions.
- Avoid unrelated refactoring.

---

## Phase 4 — Self Review

Before considering the task complete, verify:

Architecture

✓

Visual consistency

✓

Narrative consistency

✓

Accessibility

✓

Responsive behavior

✓

Performance

✓

No console errors

✓

No TypeScript errors

✓

---

## Phase 5 — Report

Summarize the completed work.

Include:

Files created

Files modified

Known limitations

Suggestions (optional)

---

Golden Rules

One prompt.

One deliverable.

Never continue to the next section unless requested.

When uncertain,

ask instead of assuming.

# ==========================================================================
# PART 10 — DEFINITION OF DONE
# ==========================================================================

A task is considered complete only if all criteria below are satisfied.

## Functional

- Works as intended.
- No runtime errors.
- No TypeScript errors.

---

## Design

- Matches the Creative Direction Bible.
- Uses approved colors.
- Uses approved typography.
- Uses approved spacing.

---

## Narrative

- Supports the intended emotional journey.
- Preserves narrative order.
- Does not reveal information prematurely.

---

## Interaction

- Motion has a clear purpose.
- Hover reveals information.
- Click deepens understanding.
- Scroll advances the story.

---

## Accessibility

- Keyboard accessible.
- Sufficient color contrast.
- Semantic HTML.
- Images include alt text.
- Motion respects prefers-reduced-motion.

---

## Performance

- No unnecessary re-renders.
- Lazy load large media.
- Images optimized.
- Lighthouse Performance target ≥95.

---

## Competition

- Original assets only.
- No backend.
- No LocalStorage.
- No SessionStorage.
- Responsive on desktop and mobile.

---

A feature is not "done" because it works.

It is done when it satisfies every requirement above.

### Motion Ownership Rule

Every animated section owns exactly one GSAP timeline.

The parent section is the sole orchestrator of motion.

Child components must never create their own independent timelines.

Instead, child components expose only the DOM references required for animation.

The parent section is responsible for:

- creating the timeline
- sequencing animations
- synchronizing motion between layers
- cleaning up timelines on unmount

This architecture guarantees that every section has a single source of truth for motion, making debugging, maintenance, and future iteration significantly easier.

### Lenis + ScrollTrigger Synchronization

During the infrastructure phase, Lenis may run using its native requestAnimationFrame loop.

Once ScrollTrigger is introduced, Lenis must synchronize with GSAP's ticker to ensure both systems advance on the same animation frame.

This avoids subtle frame desynchronization during scroll-driven animations.

The synchronization strategy should be implemented only when ScrollTrigger becomes part of the project.

### The 80/20 Motion Rule

At least 80% of the perceived quality should come from composition, typography, spacing, imagery, and storytelling.

Motion should contribute the remaining 20%.

If removing all animations makes the page feel unfinished, the layout needs improvement.

If removing all animations still leaves a beautiful editorial composition, the motion is serving its intended role.

### Ref Exposure Rule

Animated child components should expose only the references required by the parent timeline.

They should not contain GSAP imports, timeline creation, or animation sequencing.

Their responsibility is presentation, not orchestration.

### Section Implementation Rule

Every implementation sprint translates frozen design documents into code.

Developers must not reinterpret the story, layout, or editorial direction during implementation.

If implementation reveals a design problem, update the corresponding design document first, then continue implementation.

Implementation follows design. It never redesigns it.

## Translation Principle

Creative decisions are made during documentation.

Implementation does not invent.

Implementation translates.

Story Freeze defines emotion.

Layout Brief defines space.

Surface Language defines appearance.

Motion Choreography defines behavior.

Implementation only converts these documents into code.

If implementation requires new creative decisions,
the documentation is incomplete and must be updated before coding continues.

# Nature Freeze

Status: 🔒 Frozen

The Nature section is considered complete.

The following aspects are frozen:

- Story
- Layout
- Composition
- Motion
- Surface Language
- Motion Choreography

Only the following changes remain allowed:

- Accessibility improvements
- Performance optimizations
- Browser compatibility fixes
- Bug fixes

No further creative modifications are allowed.

Future sections must adapt to Nature.

Nature must not adapt to future sections.

## Editorial Escalation Rule

Each section must introduce one new dominant visual language.

Hero introduced philosophy.

Nature introduced atmosphere.

Craft introduces human gesture.

Future sections must contribute a new visual language instead of repeating previous compositions.

Every chapter should be immediately recognizable from a single screenshot.
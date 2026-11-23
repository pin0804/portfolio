---
name: Portfolio QA / Test Engineer
description: A quiet gallery wall where each work hangs alone with an honest museum label.
colors:
  wall: "#ecebf3"
  wall-deep: "#e2e0ec"
  frame: "#fbfaff"
  ink: "#2b2236"
  soft: "#5f5470"
  rose: "#d98fa6"
  rose-ink: "#a84f6c"
  hairline: "#d9d6e3"
  line-strong: "#c9c4d6"
typography:
  display:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(3rem, 5.8vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "clamp(2.25rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Gloock, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.2
  lede:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 6.6vw, 96px)"
  column-gap: "clamp(48px, 8vw, 120px)"
  piece-gap: "clamp(32px, 3.4vw, 48px)"
  section-y: "clamp(80px, 14vh, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.wall}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "48px"
  link-text:
    textColor: "{colors.ink}"
  link-text-hover:
    textColor: "{colors.rose-ink}"
  wall-step:
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "44px"
  wall-step-hover:
    backgroundColor: "{colors.frame}"
  frame:
    backgroundColor: "{colors.frame}"
    padding: "clamp(14px, 1.8vw, 26px)"
  museum-label:
    textColor: "{colors.soft}"
    typography: "{typography.label}"
    width: "140px"
---

# Design System: Portfolio QA / Test Engineer

## Overview

**Creative North Star: "The Quiet Gallery Wall"**

The site is a pale lilac-grey wall in an empty gallery. Each work hangs alone on a near-white frame, lit by a soft long shadow, with a small museum label beside it: a title set in Gloock and two lines of plain text. The work is shown, not claimed; nothing on the wall argues for itself.

Density is low on purpose. Rooms are separated by a single hairline and very large vertical breathing room, headings sit in a left column and stay put while the reading column scrolls past them. Colour is almost monochrome plum-on-lilac; dusty rose appears only where attention is being asked for. Motion is slow and exponential, happens once on arrival, and otherwise only answers the visitor walking the wall.

The owner rejected busy, crowded directions; the system is simple, elegant and sweet without decorative pastel styling. The default "hero over a grid of equal project cards" is the thing this world replaces.

**Key Characteristics:**
- One work per wall; never a grid of equal cards.
- Near-white frames with long, soft plum-tinted shadows on a lilac wall.
- Museum labels: Gloock title, two short lines of Hanken Grotesk.
- Rose is a mark, never a fill.
- Slow ease-out (`cubic-bezier(.16,1,.3,1)`), one orchestrated arrival, static under reduced motion.

## Colors

A near-monochrome plum and lilac palette with one dusty-rose voice for attention.

### Primary
- **Plum Ink** (ink): all headings, body text, the primary pill button's fill, and the skip link. The darkest value on the wall.

### Secondary
- **Dusty Rose** (rose): marks of attention only: the active/accent nav underline, link hover underline, the dashed placeholder underline, text selection. Never text on the wall (2.1:1) and never a surface fill.
- **Deep Rose** (rose-ink): focus outline, link and nav hover text, and the hollow ring bullets of the findings list. Its contrast on the wall is 4.44:1, which falls just short of AA for small text, so hover text in it is a known defect. Don't extend it to resting text.

### Neutral
- **Lilac Wall** (wall): the page background and text on the plum button.
- **Shaded Wall** (wall-deep): the background of a work's notes room, and the second stripe of empty placeholder frames.
- **Frame White** (frame): the mat of every framed work and plate, and the hover fill of the wall steppers.
- **Muted Plum** (soft): secondary text: lede, museum label body, definitions, timeline dates, the counter, the footer. 5.9:1 on the wall.
- **Hairline** (hairline): the single 1px rule between rooms and between timeline rows.
- **Stepper Line** (line-strong): the 1px ring of the circular wall steppers and the scrollbar thumb.

### Named Rules
**The Rose Is A Mark Rule.** Rose (either value) underlines, rings, outlines or selects; it never fills a surface or sets a paragraph.

**The One Wall Rule.** Surfaces come from the wall, the shaded wall and the frame only. A new section changes room by hairline or by switching to the shaded wall, never by adding a new colour.

## Typography

**Display Font:** Gloock (with Georgia, serif)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)

**Character:** A high-contrast, slightly sharp serif used only at a single weight for names and titles, paired with a calm, open grotesk that does all the reading. The serif is the gallery's lettering on the wall; the grotesk is the label text.

### Hierarchy
- **Display** (400, clamp(3rem → 5.25rem), 1, -0.02em): the greeting in the first viewport and the closing "Mari ngobrol." line. Balanced wrapping.
- **Headline** (400, clamp(2.25rem → 3.25rem), 1.05, -0.015em): room titles in the left column, sticky at 40px from the top on wide screens.
- **Title** (400, 1.3125–1.375rem, 1.2): museum label titles and in-room subheads. The name mark in the header is the same face at 1.5rem.
- **Lede** (400, 1.1875rem; up to 1.375rem for a room's opening paragraph, 1.55): one-sentence role under the greeting and the opening of each room, 36–44ch.
- **Body** (400, 1.0625rem, 1.65): everything else; definitions capped at 60ch. Emphasis is weight 600, never colour.
- **Label** (400, 0.875rem, 1.5): museum label body, counter, footer. Numbers use tabular figures.

### Named Rules
**The Single Weight Serif Rule.** Gloock is set at 400 only and only for names, titles and headings. Never for body, buttons or labels' body text.

**The No Kicker Rule.** Headings stand alone; no eyebrow or small uppercase line above them. The label's plain text sits below its title.

## Layout

Two columns on wide screens: a text column up to 520px on the left and a free right column, separated by a column gap of clamp(48px → 120px), with side gutters of clamp(20px → 96px). The first viewport fills the screen minus the header: the greeting and actions on the left, the wall beginning on the right and running off the right edge so the next frame peeks in.

The wall is a horizontal scroll-snap track (snap to start) with pieces spaced clamp(32px → 48px). Each piece is a frame of clamp(240px → 430px) with a 140px label beside it, bottom-aligned. Below the track sit two circular steppers with a "1 / 3" counter.

Rooms follow the same two-column grid: a sticky headline left, a reading column up to 680px right, vertical padding clamp(80px → 160px), separated by a top hairline. The close is centred, with more vertical air (clamp(100px → 200px)).

At 900px and below everything collapses to one column; the wall goes full-bleed to the right, frames become min(72vw, 420px) with the label beneath, and only the current piece's label is visible. At 560px the header wraps and two-column definition rows stack.

## Elevation & Depth

Depth comes from frames hanging off the wall, nothing else. Surfaces are flat; only framed works and plates cast shadows, which are long, soft and tinted with the plum ink, never grey or black. The current piece on the wall lifts 8px and its shadow lengthens; the others rest and dim their image to 55%.

### Shadow Vocabulary
- **Frame at rest** (`0 12px 30px -20px rgba(43,34,54,.3), 0 1px 3px rgba(43,34,54,.06)`): every framed work on the wall.
- **Frame lifted** (`0 36px 60px -30px rgba(43,34,54,.42), 0 2px 6px rgba(43,34,54,.06)`): the current piece only.
- **Plate** (`0 30px 60px -36px rgba(43,34,54,.45)`): a framed screenshot inside a notes room.
- **Button hover** (`0 14px 24px -14px rgba(43,34,54,.7)`): the plum pill lifting 2px on hover.

### Named Rules
**The Hung Not Floating Rule.** Only things that hang on the wall get a shadow. Text, rooms, steppers and controls stay flat.

## Shapes

Two shape families. Hung objects (frames, plates) are square-cornered rectangles with a white mat, the image cropped 16:10 from the top. Controls are fully round: pill buttons (999px) and circular steppers (50%). Rules are 1px hairlines. The findings list uses small hollow rings (9px, 1.5px stroke) in deep rose instead of bullets. Focus outlines are 2px with a 4px offset and a 2px corner.

## Components

### Buttons
- **Shape:** fully round pill (999px), 48px tall, 26px side padding.
- **Primary:** plum ink fill, lilac wall text, weight 600. Used for "Lihat karya", "Buka demo" and the email.
- **Hover / Focus:** lifts 2px with a soft plum shadow over 0.4s on the slow ease; returns flat on press. Focus is the global deep-rose outline.
- **Text link (secondary):** weight 600, a 1px ink underline drawn as an inset shadow; on hover the text turns deep rose and the underline becomes a 2px rose line. Always paired beside a pill, never as a second pill.

### Navigation
- Name mark in Gloock 1.5rem at left; Karya, Tentang, CV, Kontak at right in weight 500, no underline. Hover turns text deep rose. The one destination being pointed to (Kontak) carries a 2px rose underline. Wraps under the mark at 560px.

### Frame (signature)
- **Mat:** frame white, padding clamp(14px → 26px), square corners, the resting frame shadow.
- **Image:** 16:10, cropped from the top, not draggable.
- **States:** current piece lifts 8px with the lifted shadow over 0.9s; resting pieces dim the image to 55% and soften the label title to muted plum.
- **Empty:** a placeholder frame shows a marked placeholder line in the mat until the owner hangs a real image.

### Museum Label (signature)
- 140px wide beside the frame (beneath it on small screens), bottom-aligned. Title in Gloock 1.3125rem ink; one or two lines of label text in muted plum; an optional "Baca catatan" link in ink weight 600.

### Wall Steppers
- 44px circles with a 1px stepper-line ring, transparent fill, an inline stroked chevron (18px, 1.6 stroke). Hover fills with frame white and darkens the ring to ink. Disabled at either end at 35% opacity. Arrow keys, drag and native horizontal scroll drive the same track.

### Placeholder Mark
- Any text awaiting the owner's content carries a dashed 2px rose underline. The owner deletes the class to remove it. This is an editing convention, not decoration.

## Do's and Don'ts

### Do:
- **Do** hang one work per wall: a frame plus a museum label, with the next frame only peeking.
- **Do** keep shadows plum-tinted (rgba(43,34,54,…)) and long with a negative spread.
- **Do** use the slow ease (`cubic-bezier(.16,1,.3,1)`) at 0.3–0.9s for state changes and keep the arrival to one moment (intro rises 14px, first frame hangs from 26px above).
- **Do** make everything static under `prefers-reduced-motion: reduce`.
- **Do** separate rooms with a single 1px hairline and large vertical space.

### Don't:
- **Don't** lay out work as a grid of equal project cards.
- **Don't** use rose as a fill or for resting text.
- **Don't** add shadows to anything that doesn't hang on the wall.
- **Don't** set Gloock at any weight other than 400 or use it for body text.
- **Don't** add skill-percentage bars, badges or self-promoting decoration.

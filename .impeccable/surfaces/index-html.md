---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: portfolio home (index.html)

Mode: Experience. Audience: recruiters (fast scan), tech leads (how she works), freelance clients. Action: open a work, download CV, contact. Content: all personal content placeholder and visibly marked; Helpdesk PBJ is a real personal build project (not QA work). Constraint: static HTML/CSS/JS, owner edits HTML directly.

## Direction contract

THESIS: A quiet gallery wall: one work hung per wall with generous empty space and an honest museum label. Refuses the category default of a hero over a grid of equal project cards.

OWN-WORLD: Pale lilac-grey wall (#ecebf3), plum ink (#2b2236), muted plum secondary (#6a5f78), dusty rose (#d98fa6) only for marks of attention (active link, placeholder underline, focus), near-white frames (#fbfaff) with soft long shadows. Gloock display, Hanken Grotesk text. Pill primary button in plum. Labels set like museum wall cards: title in Gloock, two lines of plain text.

STORY: Visitor meets her by name and role in one line, sees that the work is shown, not claimed, walks the wall piece by piece, reads each label, opens a piece's notes, then downloads the CV or writes to her.

FIRST VIEWPORT: Left 40%: greeting "Halo, saya [Nama]." at ~84px, one-sentence role, primary "Lihat karya" pill + "Unduh CV" text link. Right: the wall begins, first framed work (Helpdesk PBJ screenshot) ~470px wide with its label beside it, the next frame peeking at the right edge. Nav top: name mark left, Karya/Tentang/CV/Kontak right.

FORM: Dinding Galeri, grounded #1 of the safer round (user-picked). seed:8689bc0699b0f927. Signature interaction: walking the wall, a horizontal scroll-snap track driven by drag, wheel, arrow keys and prev/next controls; the centred frame lifts and its label sharpens while the others rest. Motion grammar: slow exponential ease-out, one orchestrated arrival, reduced-motion makes it static.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

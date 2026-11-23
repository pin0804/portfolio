# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS/vanilla JS (no build step) so the owner can edit content directly; hosted as a static site on Vercel, the same account used for the Helpdesk PBJ demo.

## Users

A mix of three audiences, served by one site:
- **Recruiters / HR** scanning quickly for role fit: experience, skills, CV, contact.
- **Tech leads / hiring managers** judging how she works: testing approach, case studies, quality of evidence.
- **Freelance clients** looking for QA/testing help on their project.

## Product Purpose

Personal portfolio of a woman working in IT with experience as a QA / Test Engineer. Success: a visitor understands what she does and how well she does it within one visit, then opens her CV, a case study, or contacts her.

## Positioning

A QA engineer's portfolio: the work shown is about finding, preventing, and proving quality (test design, bug reports, automation, verification), not about visual output. The site should feel professional and confident without self-promotion ("tidak pamer").

## Capabilities and Constraints

- Single static site, interactive, mobile-friendly.
- Content the owner will edit herself; editing must not require a build tool.
- All personal content is placeholder for now and must be visibly marked for revision.

## Brand Commitments

- Owner's explicit wishes: simple, professional, not show-offy; interactive UI; open to a "photo exhibition / gallery" feel.
- After seeing the first round (Inspection Tag, Contact Sheet, Darkroom), she rejected them as too busy: wants **simple, elegant, sweet ("elegan manis"), airy, not crowded**.
- Owner is a woman in IT; she mentioned this as context for tone. Not a request for stereotyped "feminine" styling.

## Evidence on Hand

- **Helpdesk PBJ** (real, built 2026-11): a **personal build project** (she built the app), not a QA engagement; present it as "something I built", not as QA work. Laravel 13 + Filament 4 helpdesk for Pemerintah Kota Serang procurement. Live demo https://pbj-helpdesk.vercel.app, 115 automated feature tests, documentation (PRD, technical design, deployment runbook, ADRs). Bugs found and fixed through testing: public tracking rejecting every ticket number, attachment download always 500, permanent delete always failing, inverted dashboard delta colors, notifications column type mismatch.
- Everything else (name, photo, bio, work history, other projects, skills, certifications, CV, contact links) is **not yet provided**. Use clearly marked placeholders; never fabricate employers, metrics, testimonials, or certifications.

## Product Principles

1. Evidence over claims: show the work and its results instead of adjectives.
2. Quiet confidence: professional and calm, no bragging, no skill-percentage bars.
3. Fast to scan for recruiters, deep enough for tech leads.
4. Easy for the owner to update without tooling.
5. The craft is the proof: a QA engineer's site must itself be accessible, fast, and bug-free.

## Accessibility & Inclusion

WCAG 2.1 AA: contrast, keyboard navigation, reduced-motion support for any interactive/animated gallery behavior.

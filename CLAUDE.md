# CLAUDE.md, EmiliaPsacharopoulos.github.io

@.claude/writing-style.md
@.claude/content-philosophy.md
@.claude/content-reviewer.md (**only invoke when explicitly asked for a content review**)

---

## Self-Updating Instructions

If I give you an instruction that contradicts or refines something in this file or any imported
file, **update the relevant file immediately** before continuing with the task. Do not just follow
the new instruction in the moment; encode it so future sessions inherit it. If the instruction
affects writing style, update `.claude/writing-style.md`. If it affects brand or content
philosophy, update `.claude/content-philosophy.md`. If it affects coding or UX, update this file.

---

## Coding Standards

- **Reuse existing CSS, variables, and utility classes** before writing new styles. Never redefine
  something that already exists elsewhere; check first.
- Store experience/project metadata (dates, company, role, location, etc.) in **one place**
  (e.g. a JavaScript data file or Jekyll data YAML) and reference it everywhere. Never hardcode
  the same value in multiple places.
- Use Jekyll includes for shared UI; never copy-paste markup across pages.
- Prefer **clean URLs without `.html` extensions** (e.g. `/about` not `/about.html`).
- **Tags on projects and experiences must be hard or soft skills only**, e.g. `Python`,
  `Leadership`, `Embedded Systems`. Never use course codes, dates, organizations, platforms,
  proper nouns that are not skills, or locations as tags.

---

## UX Constraints

- **Light color palette only**: do not build or modify toward a dark theme.
- **Two accent colors maximum**: typography and whitespace carry most visual weight.
- **Animation is sparse and purposeful**: hover reveals, subtle transitions, small chart
  animations only. No large scroll effects or attention-grabbing motion.
- **Skimmability is the top UX requirement.** A reader should scan the full page and understand
  who Emilia is without reading a single paragraph.
- Clicking into a project or experience should use a modal or subpage; keep the main view clean.

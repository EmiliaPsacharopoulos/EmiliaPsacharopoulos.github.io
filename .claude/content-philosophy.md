# content-philosophy.md — EmiliaPsacharopoulos.github.io

Load this file when making design, layout, or content-structure decisions.

---

## Personal Brand

**Identity statement:**
NYC-based software engineer motivated by building systems that model and solve complex problems
at scale. Work spans from full-stack product ownership at early-stage startups to optimization
modeling and autonomous systems. Naturally curious — drawn to understanding how and why things
work, not just making them work. Prioritizes being straightforward, low-friction, and easy to
work with.

**Tagline (site hero):** Software Engineer · Full Stack, Optimization Modeling, and Autonomous Systems

**Aesthetic label:** Computational Minimalism / Analytical Creative Engineer — a hybrid between
researcher, engineer, and creative technologist.

---

## Content in YAML, Structure in HTML

All meaningful text content — names, taglines, bios, descriptions, bullet points, paragraphs,
URLs — belongs in `_data/` YAML files, never hardcoded in HTML pages or templates.

YAML files contain **data only**: plain strings, lists of strings, and structured objects.
No HTML tags of any kind belong in YAML — not `<ul>`, `<li>`, `<p>`, `<img>`, `<div>`,
`<span>`, or `<iframe>`. Inline markup (`<a href>`, `<i>`) is the only exception, since
links and emphasis are part of the content itself, not structure.

HTML files and includes define structure and formatting only — they loop over YAML data and
wrap it in the appropriate tags.

Exceptions: very short, stable UI strings (e.g. "Hi, I'm Emilia. Here are a few things about me
outside of work.") may live in HTML when they are purely presentational and unlikely to change.

---

## Content Philosophy

- Content is **primarily for the author** first; secondarily for recruiters and collaborators.
- Long-form content is preserved and always accessible, but **never floods the main view**.
- The homepage must be **highly skimmable** — a reader should grasp the full picture without
  reading a single paragraph.
- Clicking a project or experience keeps the main page **clean and uncluttered** — prefer modals
  or dedicated subpages so detail is separable from the overview.
- Short-form (bulleted) view is the **default** for experiences and projects; long-form is opt-in.

---

## Visual Identity

- Technical and mathematical visuals (grids, geometry, generative patterns) are welcome as
  background texture or decoration — they reinforce the optimization modeling and autonomous systems brand pillar.
- The site should feel like it belongs to an engineer who thinks visually, not a designer who
  codes. Precision and restraint over decoration.

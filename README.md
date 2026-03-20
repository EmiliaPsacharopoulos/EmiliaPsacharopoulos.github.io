# Emilia Psacharopoulos — Personal Website

Source code for [emiliapsacharopoulos.com](https://emiliapsacharopoulos.com).

## Design

The visual design and layout are my original work. If you reuse or adapt any part of the design, please give appropriate credit.

## Repo Structure

```
_data/
  projects.yml        # all project entries (title, description, tags, modal HTML)
  experience.yml      # all work experience entries
  education.yml       # education activity entries
  skills.yml          # skills section bands and tags
  courses.yml         # education coursework categories and entries
  about.yml           # about page personal interest entries
assets/
  css/style.css       # all styles
  js/site.js          # modal system, URL routing, cursor, nav
_layouts/
  default.html        # base HTML layout
_includes/
  navbar.html         # site navigation
  footer.html         # site footer
index.html            # homepage; loops over _data/ at build time to render cards and modals
about.html            # about page
```

Edit content in `_data/` only — never directly in site pages.

## Running Locally

This site requires Ruby. The correct version is managed with [asdf](https://asdf-vm.com/):

```bash
asdf set -u ruby 3.2.2
```

Then serve locally with:

```bash
jekyll serve
```

The site will be available at `http://localhost:4000`.

## Deployment

Hosted on **GitHub Pages**. Pushing to `main` triggers an automatic build and deploy.

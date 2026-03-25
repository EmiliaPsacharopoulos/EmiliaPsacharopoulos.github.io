# Emilia Psacharopoulos, Personal Website

Source code for [emiliapsacharopoulos.github.io](https://emiliapsacharopoulos.github.io).

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
  personal.yml        # name, tagline, bio, resume URL, social links
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

Edit content in `_data/` only; never directly in site pages.

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

Hosted on **GitHub Pages**. Pushing to `main` triggers an automatic build and deploy. The Jekyll build can take up to an hour to propagate; until it completes, `view-source:https://emiliapsacharopoulos.github.io/` may show a stale version with empty content elements. Once the build finishes, all content is fully rendered as static HTML and readable by chatbots like ChatGPT.

## SEO

- **Sitemap**: auto-generated at `/sitemap.xml` by the `jekyll-sitemap` plugin on every push.
- **Indexing**: submit `https://emiliapsacharopoulos.github.io/sitemap.xml` to [Google Search Console](https://search.google.com/search-console) once to get the site indexed. Google recrawls automatically after that.
- **Structured data**: a JSON-LD `Person` schema is rendered in `<head>` via `default.html`.
- **Meta tags**: title, description, Open Graph, and canonical URL are set in `default.html` and pull from `_config.yml` (`site.url`). The homepage description lives in `default.html`; per-page overrides use the `description` frontmatter field.
- **Google site verification**: if re-verifying Search Console ownership, add the verification `<meta>` tag to `default.html` inside `<head>`.

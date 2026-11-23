# pablodlpa.github.io

Personal academic website of Pablo de la Peña Aguilera, built with [Astro](https://astro.build)
and deployed to GitHub Pages by GitHub Actions.

## Run it locally

Requires Node.js 22 or newer.

```sh
npm install
npm run dev       # live-reloading site at http://localhost:4321 (search is disabled here)
npm run build     # production build into dist/, plus the Pagefind search index
npm run preview   # serve dist/ exactly as GitHub Pages will, search included
```

## Where to edit

| What | File |
|------|------|
| Page text | `src/pages/*.astro` (one file per page) |
| Publications list | `src/data/publications.ts` (one entry per paper) |
| Photos | `src/assets/images/` (resized and converted to WebP at build time) |
| CV and other downloads | `public/files/` |
| Colours, fonts, shared styles | `src/styles/global.css` (tokens at the top, light and dark) |
| Navigation, header, footer | `src/layouts/Base.astro` |

## Features

- Site-wide search (press `/` or `Ctrl/⌘ K`) powered by [Pagefind](https://pagefind.app), built at deploy time, no server needed.
- Publications filters: pick authors, years or journals (each option shows how many papers match), see them as removable chips, clear all, and sort. Filtered views have shareable URLs. Authors are read from `src/data/publications.ts`; co-authors hidden behind "et al." are not listed.
- SEO: `sitemap.xml`, `robots.txt`, page descriptions, social preview image and Person structured data (ORCID and ResearchGate links) are generated at build time. Builds for any host other than `pablodlpa.github.io` (fork previews) are marked `noindex`.
- Contact form. Set the repository variable `PUBLIC_FORM_ENDPOINT` (Settings → Secrets and variables → Actions → Variables)
  to a form endpoint such as Formspree (`https://formspree.io/f/<id>`) or your own worker on a custom domain.
  Without it, the form opens the visitor's email app with the message pre-filled.
- Light and dark themes, optimised responsive images, keyboard-accessible navigation and galleries.
- Old URLs (`research.html`, `publications.html`, …) keep working.

## Deploy

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The workflow reads the Pages base path, so a fork deploys correctly to `https://<user>.github.io/pablodlpa.github.io/`.

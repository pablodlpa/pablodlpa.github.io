import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are set by the GitHub Pages workflow, so the same code
// deploys to https://pablodlpa.github.io/ and to a fork's project page
// (https://<user>.github.io/pablodlpa.github.io/) for previews.
export default defineConfig({
  site: process.env.SITE_URL || 'https://pablodlpa.github.io',
  base: process.env.BASE_PATH || '/',
  // Emit research.html, publications.html… so the old Quarto URLs keep working.
  build: { format: 'file' },
  // Keep newlines between inline tags as spaces (avoids "combining<strong>fieldwork").
  compressHTML: false,
});

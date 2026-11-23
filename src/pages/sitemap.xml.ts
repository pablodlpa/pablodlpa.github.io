import type { APIRoute } from 'astro';

// Every page in src/pages except the 404, at its published URL.
const pages = Object.keys(import.meta.glob('./*.astro'))
  .map((f) => f.slice(2, -'.astro'.length))
  .filter((name) => name !== '404')
  .map((name) => (name === 'index' ? '' : `${name}.html`));

export const GET: APIRoute = ({ site }) => {
  const base = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, "")}/`, site);
  const urls = pages.map((p) => `  <url><loc>${new URL(p, base)}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};

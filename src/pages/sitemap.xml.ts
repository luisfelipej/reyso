import type { APIRoute } from 'astro';
import { site, nav } from '../data/site';

/**
 * Sitemap hecho a mano para no sumar una dependencia más.
 * Si el sitio crece, conviene cambiarlo por @astrojs/sitemap.
 */
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = nav
    .map(
      (item) => `  <url>
    <loc>${new URL(item.href, site.url).href.replace(/(.+)\/$/, '$1')}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${item.href === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

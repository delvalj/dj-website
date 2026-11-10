// robots.txt: dice a los buscadores que pueden leer toda la web y dónde está el mapa de páginas.
// Se genera aquí (y no como archivo fijo) para que use el dominio de src/config/site.ts.
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site)}\n`);

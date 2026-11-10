// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config/site.ts";

export default defineConfig({
  site: site.url, // el dominio se cambia en un solo sitio: src/config/site.ts
  integrations: [sitemap()], // genera /sitemap-index.xml (el mapa de páginas para Google)
  // El CSS va dentro del HTML (son pocos KB): la página se pinta sin esperar a descargar archivos .css.
  build: { inlineStylesheets: "always" },
});

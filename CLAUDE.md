# KAS:ST — web oficial del DJ

## Proyecto
Web de una sola página (en inglés, sin tienda) para el DJ KAS:ST. La mayor parte del tráfico llega desde
stories de Instagram en el móvil: diseñar primero para móvil y mantener la página ligera.
El propietario es principiante: explicar las decisiones en lenguaje sencillo (en español).
Plan completo y razonamiento: `docs/plan.md`.

- Dominio: `kasst.art` (**por confirmar**; viene de la firma del artista).

## Stack
- Astro (sitio estático) + CSS propio. Nada de frameworks de UI ni Tailwind.
- Requiere Node >= 22.22 y npm >= 9.6.5 (exigido por Astro 7).
- Alojamiento: Netlify, con despliegue automático desde GitHub `delvalj/dj-website` (rama main, repo privado).
- CMS: Sveltia CMS (compatible con Decap) en /admin; edita `src/content/shows.yaml`.

## Diseño
- Fondo #000, un único verde neón (variable `--green` = #02F233, medido en el boceto). Sin otros colores.
- Títulos: Archivo expandida y Black, en mayúsculas. Lista/UI: monoespaciada (Space Mono), mayúsculas, con espacio entre letras.
- Sin bordes redondeados. Referencia: content/design/home-mockup.png.
- Fotos y vídeo: duotono negro→verde→verde pálido + grano, hecho en CSS (grayscale + mix-blend-mode, ruido SVG feTurbulence).
  Nunca integrar el efecto en los archivos de imagen.

## Dónde se cambia cada cosa
- Redes, emails, portada (image|video), newsletter: `src/config/site.ts`.
- Shows: `src/content/shows.yaml` (esquema validado en `src/content.config.ts`).
- Logo: componente `Logo`. Original en `content/design/logokast.png` (PNG 354×347, negro sobre transparente,
  símbolo arriba + texto KAS:ST abajo), copiado a `src/assets/logo.png`. La cabecera usa solo el texto, recortado
  en `src/assets/logo-wordmark.png` y teñido de verde con CSS `mask` + `currentColor`. Si se añade
  `src/assets/logo.svg` (con fill="currentColor"), tiene prioridad: es lo ideal, el PNG es de baja resolución.
- Redes: URLs en `src/config/site.ts` (`social`); iconos de Simple Icons en `SocialIcons` (footer, menú móvil y
  portada abajo a la izquierda). Resident Advisor no está en Simple Icons: monograma "RA" en texto.
  Enlaces en pestaña nueva con `rel="noopener noreferrer"` y `aria-label`.
- Fotos originales: `content/photos/` (hero.jpg, about.jpg). Si falta hero.jpg se muestra un marcador. Vídeos: `public/media/`.

## Acceso a /admin (login del artista)
Sveltia CMS con backend GitHub; Netlify hace de intermediario OAuth. NO usar Netlify Identity ni Git Gateway
(Git Gateway está obsoleto en Netlify y Sveltia no lo soporta).
- Cuentas necesarias: GitHub del propietario (dueño del repo), Netlify (gratis, conectada al repo) y GitHub del
  artista (gratis), invitado como *collaborator* con permiso de escritura.
- Configuración única: OAuth App en GitHub con callback `https://api.netlify.com/auth/done`; su Client ID/Secret
  en Netlify → OAuth / Authentication providers → GitHub. En `public/admin/config.yml` NO poner `base_url`.
- Uso: `kasst.art/admin` → "Sign in with GitHub" → editar → Publish → Netlify republica en 1–2 min.

## Netlify Forms (destino temporal del newsletter)
Verificado el 2026-10-18: desde el 14/04/2026 los envíos son gratis e ilimitados en los planes por créditos,
incluido Free. Pero el plan Free tiene un tope fijo de 300 créditos/mes: si se agotan (p. ej. por tráfico) se
pausan todas las webs de la cuenta y no se reciben formularios. Vigilar el consumo en el panel de Netlify.

## Reglas
- Enlaces y datos provisionales marcados con `// TODO` o `placeholder: true`.
- Ocultar los shows pasados; el primer show futuro se resalta. Regeneración diaria programada.
- Newsletter: proveedor intercambiable (`newsletter.provider`); casilla de consentimiento obligatoria; enlace a /privacy.
- Accesibilidad: contraste suficiente, ventana accesible con teclado, respetar prefers-reduced-motion.
- Construir por fases (`docs/plan.md` §8): parar al final de cada una para revisión y hacer un commit por fase.

## Contactos
- Bookings: katarina@lovelive.agency
- Management: dave@milkhoneyla.com, seb@milkhoneyla.com
- Instagram: https://instagram.com/KASST_LIVE

## Comandos
- `npm run dev` (local, http://localhost:4321), `npm run build` (comprueba los datos), `npm run preview`.

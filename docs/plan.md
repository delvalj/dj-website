# Plan: web del DJ KAS:ST

## Contexto
KAS:ST necesita una web de una sola marca visual (negro + verde neón) en inglés, sin tienda, pensada sobre todo para quien llega desde stories de Instagram en el móvil. El repo está vacío salvo el boceto (`content/design/home-mockup.png`). Este plan fija el diseño, la tecnología y cómo se actualizará el contenido antes de escribir código. Al aprobarlo, el primer paso será crear `CLAUDE.md` (borrador al final).

---

## 1. Qué hay en el boceto (análisis)

Formato: escritorio, unos 960 px de ancho. Solo se ve la home: cabecera, portada y NEXT SHOWS.

**Cabecera (fondo negro, unos 50 px de alto)**
- Izquierda: `HOME` y `SHOWS`. Derecha: `ABOUT` y `CONTACT`. Texto pequeño, en mayúsculas, negrita y verde.
- En el centro, el logotipo "KAS:ST" en verde, con letras anchas. La "A" no tiene barra horizontal (es un triángulo) y los dos puntos son cuadrados. Es un logotipo dibujado a medida, no una fuente: habrá que sustituirlo por el SVG cuando exista.

**Portada (hero)**
- Foto a todo el ancho, de unos 550 px de alto en el boceto. Muestra al DJ de espaldas en la cabina, con los brazos en alto, frente a un público enorme al aire libre.
- Duotono: las sombras son casi negras, los tonos medios verdes y las luces verde muy pálido, casi blanco. El contraste es alto, con grano visible por toda la imagen y aspecto de visión nocturna o fotocopia.
- Abajo a la derecha, superpuesto a la foto: botón `JOIN THE NEWSLETTER`, rectangular, relleno verde, texto negro en monoespaciada, sin bordes redondeados.

**NEXT SHOWS**
- Columna izquierda (alrededor de 1/3): el título `NEXT / SHOWS` en dos líneas, verde, muy ancho y muy pesado. Abajo del todo, alineada con el final de la lista, una etiqueta pequeña en mono: `2026 / TOUR DATES`.
- Columna derecha (alrededor de 2/3): una lista de 10 filas con 4 columnas: fecha (`OCTOBER 16`), sala (`NITSA CLUB`), ciudad (`BARCELONA, ES`) y `TICKETS`, alineado a la derecha.
- Primera fila: fondo verde sólido y texto negro (el próximo show). Resto de filas: texto verde sobre negro, separadas por líneas finas verde oscuro.
- Tipografía monoespaciada, en mayúsculas y con algo de espacio entre letras.

**Lo que el boceto no incluye** (lo diseñaré yo, siguiendo el mismo estilo): la versión móvil, las secciones ABOUT y CONTACT, los iconos sociales, el pie de página, la ventana del newsletter y el aspecto de "sold out" o "no hay fechas".

**Color:** verde neón de aproximadamente `#00E83A`. Lo ajustaré midiéndolo en el boceto y lo guardaré como variable para poder cambiarlo en un solo sitio.

**Tipografías propuestas** (gratuitas, Google Fonts, alojadas en la propia web):
- Títulos: **Archivo**, en su versión expandida y Black. Es muy parecida a la del boceto. Si el diseñador usó otra fuente concreta, conviene saber cuál.
- Lista y textos pequeños: **Space Mono** o **DM Mono**.

---

## 2. Contenido y archivos que faltan

| Falta | Detalle | ¿Bloquea empezar? |
|---|---|---|
| **Foto de portada** | `content/photos/` está vacía. Hace falta `hero.jpg` en color normal y buena resolución (mínimo 2400 px de ancho). Mejor si tiene una zona con aire para encuadrarla en vertical en el móvil. | No: uso un marcador temporal |
| Foto para ABOUT | Retrato o foto en directo, en vertical. | No |
| Fechas reales | Fecha, sala, ciudad, país y enlace de entradas de cada show. | No: datos de ejemplo |
| Enlaces sociales | Spotify, Apple Music, YouTube, Facebook, SoundCloud y Resident Advisor. Instagram ya está. | No |
| Logo SVG | Más adelante. | No |
| Favicon / icono de app | Puede salir del logo. Mientras tanto, "K:" en verde. | No |
| Imagen para compartir (Open Graph, 1200×630) | Es la vista previa que aparece al compartir el enlace en WhatsApp o Instagram. Puede ser la foto de portada con el efecto. | No |
| Vídeo de portada (futuro) | 8–10 s, sin audio, MP4 H.264 de menos de 4 MB. Mejor dos versiones: horizontal (1920×1080) y vertical (1080×1920) para móvil. También una imagen fija ("poster"). | No |
| Proveedor de newsletter | Ver sección 5. | No |
| **Política de privacidad** | Es obligatoria si recogemos emails (RGPD). Hay que saber quién es el responsable de los datos: nombre o empresa y email. | Sí, antes de activar el newsletter |
| Dominio | Por ejemplo `kasst.com` o `kasstmusic.com`. ¿Ya existe? | Solo para publicar |
| Quién actualiza los shows | ¿El artista, el management o la agencia? ¿Tienen cuenta de GitHub? | Afecta al CMS |

---

## 3. Estructura de la web

**Una sola página con secciones**, más una página legal aparte. Así es más rápida en el móvil: quien llega desde una story lo ve todo deslizando, sin esperar a que carguen otras páginas. El menú lleva a cada sección (`#shows`, `#about`, `#contact`).

1. **Header:** logo en el centro y enlaces de menú. En el móvil: logo y un botón "MENU" que abre una pantalla completa negra con los enlaces grandes y los iconos sociales.
2. **Hero:** foto (o vídeo en el futuro) con duotono y grano, más el botón `JOIN THE NEWSLETTER`. En el móvil ocupa casi toda la pantalla en vertical y el botón va abajo a lo ancho.
3. **Next Shows:** igual que el boceto. El próximo show aparece resaltado en verde. En el móvil cada show ocupa dos líneas: "fecha · TICKETS" y debajo "sala — ciudad". Los shows que ya han pasado desaparecen solos. Si no hay fechas, aparece el texto "New dates soon".
4. **About:** foto con el mismo duotono y la bio. Título grande `ABOUT` con la misma tipografía.
5. **Contact:** bloques `BOOKINGS` (katarina@lovelive.agency) y `MANAGEMENT` (dave@ y seb@milkhoneyla.com). Son enlaces `mailto:`, así que al tocarlos se abre el correo.
6. **Footer:** los 7 iconos sociales, © año y un enlace a Privacy.
7. **Ventana del newsletter:** se abre con el botón. Tiene nombre, email, la casilla "I agree to receive emails… (Privacy Policy)" que es obligatoria, el botón de enviar y los mensajes de éxito o error. Se cierra con la X, con Esc o tocando fuera.
8. **`/privacy`:** política de privacidad, con texto provisional hasta tener los datos reales.

---

## 4. Tecnología y por qué

**Astro** (generador de webs estáticas) y **CSS propio**, sin frameworks pesados.
- Astro "fabrica" la web en forma de archivos HTML normales. El móvil recibe páginas ya hechas, sin apenas JavaScript, así que **carga rapidísimo**. Esto importa mucho porque el navegador interno de Instagram es lento.
- Permite trocear la web en **componentes** (Header, Hero, ShowsList…). Cada pieza vive en su archivo y los cambios son localizados.
- Lee la lista de shows desde un archivo de datos y **comprueba que esté bien escrito**: si falta una fecha o un enlace está mal, avisa antes de publicar.
- Optimiza las fotos automáticamente: tamaños adecuados para móvil y formatos modernos (WebP/AVIF).
- Alternativa descartada: HTML a mano. Es más simple al principio, pero no valida los datos, no optimiza imágenes y encaja peor con el CMS.

**Alojamiento: Netlify (plan gratuito)**, conectado al repo de GitHub (`delvalj/dj-website`). Cada cambio guardado en GitHub (por ti o por el CMS) publica la web sola en 1–2 minutos. Además da HTTPS gratis y formularios incluidos, que servirían de solución temporal para el newsletter.

**Efecto verde (duotono + grano) hecho con CSS:**
- La foto original se pone en blanco y negro con contraste alto (`filter: grayscale contrast`). Encima van capas de color con modos de fusión (`mix-blend-mode`): una tiñe las sombras de negro y otra las luces de verde pálido.
- El grano es una textura de ruido generada con SVG (`feTurbulence`) puesta encima con poca opacidad. No es una imagen que haya que descargar.
- Uso CSS en lugar de filtros SVG porque funciona bien en Safari de iPhone (que es también el navegador interno de Instagram en iOS) y también sobre **vídeo**. Así el mismo efecto sirve cuando llegue el vídeo.
- Cambiar la foto = sustituir `content/photos/hero.jpg` por otra con el mismo nombre. No hay que editar nada más.

**Portada preparada para vídeo:** un componente `HeroMedia` lee la configuración: `hero: { type: "image", src }` o `{ type: "video", src, srcMobile, poster }`. Pasar a vídeo = subir los archivos y cambiar `"image"` por `"video"` en la configuración. El vídeo se reproducirá `muted autoplay loop playsinline`. Se mostrará la foto fija si el usuario tiene activado "reducir movimiento" o "ahorro de datos".

**Logo preparado para SVG:** un componente `Logo` que hoy muestra el texto "KAS:ST" con la tipografía ancha. Cuando exista `logo.svg`, se pone en `src/assets/` y el componente lo usa automáticamente. Se pinta con el mismo verde (`currentColor`).

**Toda la información editable en un solo archivo:** `src/config/site.ts` contiene el nombre, la portada, los emails de contacto, las URLs de las 7 redes (las provisionales marcadas con `// TODO`), el color y la configuración del newsletter. Los iconos son SVG de **Simple Icons** (libres, incluye Resident Advisor). Los SVG van dentro de la página, sin librerías externas.

---

## 5. Newsletter: opciones para conectarlo

El formulario quedará preparado con un **"adaptador"**: un ajuste en `site.ts` (`newsletter.provider`) decide adónde se envían los datos. Cambiar de servicio = rellenar 1–2 valores, sin tocar el diseño.

| Servicio | Para qué destaca | Coste orientativo* |
|---|---|---|
| **Laylo** | Hecho para artistas: avisos de shows y lanzamientos, se conecta con Instagram (DM) y SMS. Muy usado por DJs. | Plan gratuito limitado; los de pago desde unos 20–30 $/mes |
| **Mailchimp** | El más conocido y fácil. | Plan gratuito pequeño; luego de pago |
| **Brevo** | Empresa europea (buena para RGPD) y doble confirmación sencilla. | Gratis con límite de envíos diarios |
| **MailerLite** | Sencillo, plantillas bonitas y buen plan gratuito. | Gratis hasta unos 1.000 suscriptores |
| **Kit (ConvertKit)** | Pensado para creadores, con automatizaciones. | Plan gratuito generoso |
| *Temporal:* **Netlify Forms** | Guarda las altas en el panel de Netlify y luego se exportan a CSV. No envía emails. | Gratis e ilimitado en el plan Free por créditos (desde abril de 2026; verificado el 2026-10-18). Ojo: si se agotan los 300 créditos/mes del plan, la web se pausa y no recibe envíos |

*Los precios cambian: hay que comprobarlos al elegir.

**Recomendación:** **Laylo** si el objetivo principal es avisar de fechas y entradas a los fans de Instagram. **Brevo** o **MailerLite** si se quiere un newsletter clásico. Hasta decidir, usar **Netlify Forms** para no perder ninguna alta. En cualquier caso: doble confirmación (double opt-in), casilla de consentimiento obligatoria y enlace a la política de privacidad.

---

## 6. Shows: archivo simple vs CMS

| | **A. Archivo `shows.yaml` editado a mano** | **B. CMS por Git (Sveltia/Decap CMS) en `/admin`** | **C. CMS externo (Sanity, Contentful…)** |
|---|---|---|---|
| Cómo se edita | Se abre el archivo en GitHub y se escribe | Formulario web: "Add show", rellenar campos y Publish | Panel web de otra empresa |
| Facilidad para el artista | Media: hay que respetar el formato, y un espacio de más rompe el archivo | **Alta**: campos de fecha con calendario, nada de código | Alta |
| Coste / complejidad | Cero | Gratis, sin base de datos; un poco de configuración | Cuenta externa, avisos de publicación, más piezas |
| Dónde viven los datos | En el repo | **En el mismo archivo del repo** | En sus servidores |
| Riesgo | Errores de formato (Astro los detecta antes de publicar) | Bajo | Que el servicio cambie de precio o cierre |

**Recomendación: A + B juntas.** Los shows viven en `src/content/shows.yaml` (opción A) y además se instala **Sveltia CMS**, compatible con Decap, en `tuweb.com/admin`. Es un panel con formulario que **edita ese mismo archivo**. El artista usa el formulario; tú o yo podemos editar el archivo directamente si hace falta. Nada depende de servicios externos y, si el CMS fallara algún día, el archivo sigue ahí. Requisito: quien edite necesita una cuenta gratuita de GitHub con acceso al repo. Si eso no encaja con el artista, la alternativa es la C.

Campos de cada show: `date`, `venue`, `city`, `country`, `ticketUrl`, `soldOut` (sí/no) y `placeholder` (sí/no).

**Datos de ejemplo:** unas 8 fechas con sala `PLACEHOLDER VENUE`, `placeholder: true` y un comentario `# DATOS DE EJEMPLO – BORRAR` en el archivo. Mientras alguna fecha tenga `placeholder: true`, la web muestra una etiqueta discreta "SAMPLE DATA" para que no se publique por error.

**Shows pasados:** se ocultan al generar la web. Para que desaparezcan aunque nadie toque nada, se programa una regeneración diaria automática (una tarea programada de GitHub, gratis, que avisa a Netlify).

---

## 7. Estructura de archivos prevista

```
content/              ← tú dejas aquí los archivos originales
  design/home-mockup.png
  photos/hero.jpg, about.jpg
  videos/             ← (mover aquí desde design/videos)
src/
  config/site.ts      ← redes, contactos, portada, newsletter, color
  content/shows.yaml  ← lista de shows (la edita el CMS)
  components/  Header, Logo, Hero, HeroMedia, Duotone, NewsletterModal,
               ShowsList, About, Contact, SocialIcons, Footer
  pages/index.astro, privacy.astro
  styles/global.css   ← variables de color, tipografías, espaciados
public/admin/         ← panel del CMS
public/media/         ← vídeos de portada (cuando existan)
CLAUDE.md
```

---

## 8. Fases de construcción (tras aprobar)
1. Crear `CLAUDE.md` (borrador abajo) y arrancar Astro.
2. Estilos base: colores, tipografías y cabecera con logo provisional.
3. Hero con duotono, grano y estructura imagen/vídeo, más el botón del newsletter.
4. NEXT SHOWS con datos de ejemplo y validación.
5. About, Contact, footer con iconos y página de privacidad.
6. Ventana del newsletter (con Netlify Forms como destino temporal).
7. CMS en `/admin`, Netlify y regeneración diaria.
8. Revisión en móvil.

## 9. Verificación
- `npm run dev` y revisar en el navegador a 375 px (iPhone), 768 px y 1440 px de ancho. Comparar el escritorio con el boceto.
- Probar el duotono en Safari de iOS y en Chrome de Android, y abrir el enlace desde el navegador interno de Instagram (pegándolo en un DM).
- `npm run build`: debe fallar si `shows.yaml` tiene un error de formato (lo probaremos a propósito).
- Lighthouse (en Chrome DevTools) en modo móvil: objetivo de 90 o más en rendimiento y accesibilidad.
- Newsletter: abrir y cerrar con teclado, que no se pueda enviar sin la casilla y que el envío aparezca en Netlify Forms.
- CMS: añadir un show desde `/admin` y comprobar que aparece publicado en unos 2 minutos.

---

## 10. Borrador de `CLAUDE.md` (se creará al aprobar)

```markdown
# KAS:ST — web oficial del DJ

## Proyecto
Web de una sola página (en inglés, sin tienda) para el DJ KAS:ST. La mayor parte del tráfico llega desde
stories de Instagram en el móvil: diseñar primero para móvil y mantener la página ligera.
El propietario es principiante: explicar las decisiones en lenguaje sencillo (en español).

## Stack
- Astro (sitio estático) + CSS propio. Nada de frameworks de UI ni Tailwind.
- Alojamiento: Netlify, con despliegue automático desde GitHub `delvalj/dj-website` (rama main).
- CMS: Sveltia CMS (compatible con Decap) en /admin; edita `src/content/shows.yaml`.

## Diseño
- Fondo #000, un único verde neón (variable `--green`, ~#00E83A). Sin otros colores.
- Títulos: Archivo expandida y Black, en mayúsculas. Lista/UI: monoespaciada (Space Mono), mayúsculas, con espacio entre letras.
- Sin bordes redondeados. Referencia: content/design/home-mockup.png.
- Fotos y vídeo: duotono negro→verde→verde pálido + grano, hecho en CSS (grayscale + mix-blend-mode, ruido SVG feTurbulence).
  Nunca integrar el efecto en los archivos de imagen.

## Dónde se cambia cada cosa
- Redes, emails, portada (image|video), newsletter: `src/config/site.ts`.
- Shows: `src/content/shows.yaml` (esquema validado en `src/content.config.ts`).
- Logo: componente `Logo`; texto "KAS:ST" provisional → usar `src/assets/logo.svg` cuando exista.
- Fotos originales: `content/photos/` (hero.jpg, about.jpg). Vídeos: `public/media/`.

## Reglas
- Enlaces y datos provisionales marcados con `// TODO` o `placeholder: true`.
- Ocultar los shows pasados; el primer show futuro se resalta. Regeneración diaria programada.
- Newsletter: proveedor intercambiable (`newsletter.provider`); casilla de consentimiento obligatoria; enlace a /privacy.
- Accesibilidad: contraste suficiente, ventana accesible con teclado, respetar prefers-reduced-motion.

## Contactos
- Bookings: katarina@lovelive.agency
- Management: dave@milkhoneyla.com, seb@milkhoneyla.com
- Instagram: https://instagram.com/KASST_LIVE

## Comandos
- `npm run dev` (local), `npm run build` (comprueba los datos), `npm run preview`.
```

---

## 11. Ajustes aprobados por el propietario
- El dominio probablemente sea `kasst.art` (viene de la firma del artista). Anotarlo en `CLAUDE.md` como "por confirmar".
- Explicar cómo iniciará sesión el artista en `/admin` y qué cuentas hacen falta (el repo es privado: habrá que invitarlo como colaborador en GitHub).
- Verificar el límite gratuito actual de Netlify Forms antes de contar con él.
- Todavía no existe `content/photos/hero.jpg`: usar un marcador temporal (degradado oscuro o foto de prueba) y dejar claro dónde se pone la foto real.
- Construir por fases y parar al terminar cada una para que el propietario la revise en el navegador. Hacer un commit al final de cada fase.
- Empezar solo con las fases 1 a 3 y explicar cómo verlas en local.

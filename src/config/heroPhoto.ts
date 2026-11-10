// Foto de portada: content/photos/hero.jpg (también vale .png o .webp). undefined si todavía no existe.
import type { ImageMetadata } from "astro";

const photos = import.meta.glob<ImageMetadata>("/content/photos/hero.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export const heroPhoto = Object.values(photos)[0];
// Ruta del archivo desde la raíz del proyecto ("/content/photos/hero.png"), para leerlo al fabricar /og.jpg.
export const heroPhotoPath = Object.keys(photos)[0];

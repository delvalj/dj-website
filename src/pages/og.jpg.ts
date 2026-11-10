// Imagen que aparece al compartir el enlace (WhatsApp, Instagram, X...): 1200×630, el tamaño recomendado.
// Se fabrica sola al construir la web: logo verde a la izquierda y, a la derecha, la foto de portada con el
// tono verde de la web. Si se cambia la foto o el logo, la imagen se actualiza. Sin foto, solo el logo.
import type { APIRoute } from "astro";
import sharp from "sharp";
import logoSvg from "../assets/logo.svg?raw";
import { heroPhotoPath } from "../config/heroPhoto";

const W = 1200;
const H = 630;
const GREEN = "#02f233"; // el mismo verde que --green en global.css
const PHOTO_W = 504; // 4:5 al alto de la imagen, como la portada en móvil

export const GET: APIRoute = async () => {
  const layers: sharp.OverlayOptions[] = [];
  let logoArea = W;

  if (heroPhotoPath) {
    // Duotono como el de Duotone.astro: blanco y negro con contraste y, encima, verde al 60 %
    const grey = await sharp(`.${heroPhotoPath}`)
      .resize(PHOTO_W, H, { fit: "cover" })
      .greyscale()
      .linear(1.35, -45)
      .toColourspace("srgb")
      .png()
      .toBuffer();
    const tint = await sharp(grey).tint(GREEN).ensureAlpha(0.6).png().toBuffer();
    const photo = await sharp(grey).composite([{ input: tint }]).png().toBuffer();
    layers.push({ input: photo, left: W - PHOTO_W, top: 0 });
    logoArea = W - PHOTO_W;
  }

  const logoW = 480;
  const logo = await sharp(Buffer.from(logoSvg.replace("currentColor", GREEN)), { density: 600 })
    .resize({ width: logoW })
    .toBuffer({ resolveWithObject: true });
  layers.push({
    input: logo.data,
    left: Math.round((logoArea - logoW) / 2),
    top: Math.round((H - logo.info.height) / 2),
  });

  const image = await sharp({ create: { width: W, height: H, channels: 3, background: "#000" } })
    .composite(layers)
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(image), { headers: { "Content-Type": "image/jpeg" } });
};

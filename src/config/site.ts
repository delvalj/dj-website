// Toda la información editable de la web en un solo sitio.
// Los valores provisionales llevan "// TODO".

type Hero =
  // Foto: se toma de content/photos/hero.jpg (también vale .png o .webp).
  // position = qué parte de la foto se mantiene al recortarla en móvil ("50% 30%" = centro, algo arriba).
  | { type: "image"; position: string }
  // Vídeo: archivos en public/media/. srcMobile (vertical) es opcional; poster es la imagen fija.
  | { type: "video"; src: string; srcMobile?: string; poster: string; position: string };

// Para pasar a vídeo, sube los archivos a public/media/ y cambia la portada por:
// { type: "video", src: "/media/hero.mp4", srcMobile: "/media/hero-mobile.mp4", poster: "/media/hero-poster.jpg", position: "50% 50%" }
const hero: Hero = { type: "image", position: "50% 50%" };

export const site = {
  name: "KAS:ST",
  url: "https://kasst.art", // TODO: dominio por confirmar

  hero,

  contact: {
    bookings: ["katarina@lovelive.agency"],
    management: ["dave@milkhoneyla.com", "seb@milkhoneyla.com"],
  },

  social: {
    instagram: "https://instagram.com/KASST_LIVE",
    spotify: "https://open.spotify.com/", // TODO: poner el perfil real (ahora: página principal)
    appleMusic: "https://music.apple.com/", // TODO: poner el perfil real (ahora: página principal)
    youtube: "https://www.youtube.com/", // TODO: poner el perfil real (ahora: página principal)
    facebook: "https://www.facebook.com/", // TODO: poner el perfil real (ahora: página principal)
    soundcloud: "https://soundcloud.com/", // TODO: poner el perfil real (ahora: página principal)
    residentAdvisor: "https://ra.co/", // TODO: poner el perfil real (ahora: página principal)
  },

  // Responsable de los datos personales (aparece en /privacy). Obligatorio antes de activar el newsletter.
  privacy: {
    controller: "[CONTROLLER NAME OR COMPANY]", // TODO: nombre o empresa responsable
    email: "[PRIVACY CONTACT EMAIL]", // TODO: email para ejercer derechos RGPD
    updated: "2026-10-18", // fecha de la última revisión del texto
  },

  // Adónde se envían las altas. "netlify" = Netlify Forms (temporal).
  newsletter: { provider: "netlify" },
} as const;

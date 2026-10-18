// Toda la información editable de la web en un solo sitio.
// Los valores provisionales llevan "// TODO".

export const site = {
  name: "KAS:ST",
  url: "https://kasst.art", // TODO: dominio por confirmar

  // Portada. Para pasar a vídeo, sube los archivos a public/media/ y cambia a:
  // hero: { type: "video", src: "/media/hero.mp4", srcMobile: "/media/hero-mobile.mp4", poster: "/media/hero-poster.jpg" },
  hero: { type: "image", src: "content/photos/hero.jpg" },

  contact: {
    bookings: ["katarina@lovelive.agency"],
    management: ["dave@milkhoneyla.com", "seb@milkhoneyla.com"],
  },

  social: {
    instagram: "https://instagram.com/KASST_LIVE",
    spotify: "https://open.spotify.com/", // TODO: enlace real
    appleMusic: "https://music.apple.com/", // TODO: enlace real
    youtube: "https://www.youtube.com/", // TODO: enlace real
    facebook: "https://www.facebook.com/", // TODO: enlace real
    soundcloud: "https://soundcloud.com/", // TODO: enlace real
    residentAdvisor: "https://ra.co/", // TODO: enlace real
  },

  // Adónde se envían las altas. "netlify" = Netlify Forms (temporal).
  newsletter: { provider: "netlify" },
} as const;

// Comprueba que la lista de shows (src/content/shows.yaml) esté bien escrita.
// Si a un show le falta un dato o un enlace está mal, `npm run build` falla y avisa de qué show es,
// así nunca se publica una lista rota.
import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";
import { parse } from "yaml";

const shows = defineCollection({
  loader: file("src/content/shows.yaml", {
    // El archivo tiene la forma { shows: [...] } (la que usa el CMS). Astro necesita un id por show:
    // se lo damos con su posición en la lista, para que nadie tenga que escribirlo a mano.
    parser: (text) => {
      const data = parse(text) ?? {};
      return (data.shows ?? []).map((show: Record<string, unknown>, i: number) => ({ id: `show-${i + 1}`, ...show }));
    },
  }),
  schema: z.object({
    date: z.coerce.date(),
    venue: z.string().trim().min(1),
    city: z.string().trim().min(1),
    country: z
      .string()
      .trim()
      .regex(/^[A-Za-z]{2}$/, "Usa el código de país de 2 letras, p. ej. ES"),
    ticketUrl: z.url().optional(),
    soldOut: z.boolean().default(false),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { shows };

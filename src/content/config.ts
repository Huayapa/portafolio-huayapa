import { defineCollection, z } from "astro:content";

// CONFIGURACION DE LOS PROYECTOS
export const categorySchema = z.union([
  z.literal("JS"),
  z.literal("PHP"),
  z.literal("HTML"),
  z.literal("CSS"),
  z.literal("TS"),
  z.literal("MySql"),
  z.literal("Angular"),
  z.literal("Astro")
])

export const proyectDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string().nullable(),
  descript: z.string(),
  isresponsive: z.boolean(),
  categorys: z.array(categorySchema),
  linkPage: z.string().nullable(),  
  linkGitHub: z.string().nullable()
})

const proyects = defineCollection({
  schema: proyectDataSchema
});

// CONFIGURACION DE MIS HABILIDADES
// export const categoryHability = z.union([
//   z.literal("FrontEnd"),
//   z.literal("BackEnd"),
//   z.literal("Otros"),
// ])

export const habilityDataSchema = z.object({
  name: z.string(),
  category: z.string(),
  positionItem: z.number().nullable(),
  coordX: z.number(),
  coordY: z.number(),
})

const habilidades = defineCollection({
  schema: habilityDataSchema
});

export const collections = { proyects, habilidades };

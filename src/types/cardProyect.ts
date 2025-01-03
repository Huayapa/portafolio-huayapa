export type Category = "JS" | "PHP" | "HTML" | "CSS" | "TS" | "MySql" | "Angular" | "Astro";
export interface proyectData {
  id: number,
  name: string,
  image: string,
  descript: string,
  categorys: Array<Category>,
  linkPage: string | null,
  linkGitHub: string | null
}

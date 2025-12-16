export type Category = "JS" | "PHP" | "HTML" | "CSS" | "TS" | "MySql" | "Angular" | "Astro" | "NodeJS" | "TailwindCSS" | "Laravel";
export interface proyectData {
  id: number,
  name: string,
  image: string,
  descript: string,
  isresponsive: boolean,
  categorys: Array<Category>,
  linkPage: string | null,
  linkGitHub: string | null
}

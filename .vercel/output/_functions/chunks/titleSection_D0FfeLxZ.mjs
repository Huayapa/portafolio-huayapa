import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderTransition, b as createAstro } from './astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */
/* empty css                              */

const $$Astro = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  const { nameTitle, addLine, typeTarget } = Astro2.props;
  return renderTemplate`${typeTarget == "h1" && renderTemplate`${maybeRenderHead()}<h1${addAttribute("style-" + addLine, "class")} data-astro-cid-x77kxwfk${addAttribute(renderTransition($$result, "a2vqc2q2", "", "titulo1"), "data-astro-transition-scope")}>${nameTitle}</h1>`}${typeTarget == "h2" && renderTemplate`<h2${addAttribute("style-" + addLine, "class")} data-astro-cid-x77kxwfk>${nameTitle}</h2>`}${typeTarget == "h3" && renderTemplate`<h3${addAttribute("style-" + addLine, "class")} data-astro-cid-x77kxwfk>${nameTitle}</h3>`}`;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/otros/titleSection.astro", "self");

export { $$TitleSection as $ };

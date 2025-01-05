import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { hrefBtn, nameBtn, styleBtn, _blank, formBtn } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(hrefBtn, "href")}${addAttribute(["color-" + styleBtn, [{
    "sectionStyle": formBtn == "Section",
    "cardStyle": formBtn == "Card"
  }]], "class:list")}${addAttribute(_blank === "true" ? "_blank" : "_self", "target")} data-astro-cid-wryx757c> ${nameBtn} </a> `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/otros/buttonLink.astro", void 0);

export { $$ButtonLink as $ };

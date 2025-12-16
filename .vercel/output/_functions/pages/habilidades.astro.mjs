import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, e as renderComponent, a as addAttribute, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                       */
import { g as getCollection } from '../chunks/_astro_content_B9yFEKyz.mjs';
import { $ as $$TitleSection } from '../chunks/titleSection_BCjopA19.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dxpr2Ps-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ListContain = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ListContain;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-q3lfziuf> ${name} </li> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/otros/listContain.astro", void 0);

const $$HabilidadesBlandas = createComponent(($$result, $$props, $$slots) => {
  const habilidadesBlandas = ["Compromiso", "Resoluci\xF3n de problemas", "Trabajo en equipo", "Gesti\xF3n y control del tiempo", "Adaptaci\xF3n a los cambios"];
  return renderTemplate`${maybeRenderHead()}<section class="section-habilidades-blandas" data-astro-cid-vwzzkov6> <h2 data-astro-cid-vwzzkov6>Habilidades Blandas</h2> <ul data-astro-cid-vwzzkov6> ${habilidadesBlandas.map((habilidad) => renderTemplate`${renderComponent($$result, "ListContain", $$ListContain, { "name": habilidad, "data-astro-cid-vwzzkov6": true })}`)} </ul> </section> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/habilidades/habilidadesBlandas.astro", void 0);

const $$HabilidadesLayout = createComponent(async ($$result, $$props, $$slots) => {
  const habilidadesApps = await getCollection("habilidades");
  const categorias = ["FrontEnd", "BackEnd", "Otros"];
  return renderTemplate`${maybeRenderHead()}<section class="grid-habilidades" data-astro-cid-hpmoghwm> ${categorias.map((category) => renderTemplate`<article class="box-hability"${addAttribute("categoria-" + category, "aria-label")} data-astro-cid-hpmoghwm> <h2 data-astro-cid-hpmoghwm>${category}</h2> <section class="hability-icons" data-astro-cid-hpmoghwm> ${habilidadesApps.filter((icon) => icon.data.category === category).map((data) => renderTemplate`<div data-astro-cid-hpmoghwm> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(data.body)}` })} <h3 data-astro-cid-hpmoghwm>${data.data.name}</h3> </div>`)} </section> </article>`)} </section> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/habilidades/habilidadesLayout.astro", void 0);

const $$Habilidades = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Habilidades", "data-astro-cid-ujbaylej": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-habilidades" data-astro-cid-ujbaylej> <article class="inicio-informacion" data-astro-cid-ujbaylej> <section class="section-title" data-astro-cid-ujbaylej> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "nameTitle": "Habilidades", "addLine": "underline", "typeTarget": "h1", "data-astro-cid-ujbaylej": true })} </section> ${renderComponent($$result2, "HabilidadesLayout", $$HabilidadesLayout, { "data-astro-cid-ujbaylej": true })} ${renderComponent($$result2, "HabilidadesBlandas", $$HabilidadesBlandas, { "data-astro-cid-ujbaylej": true })} </article> </main> ` })} `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/habilidades.astro", void 0);

const $$file = "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/habilidades.astro";
const $$url = "/habilidades";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Habilidades,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

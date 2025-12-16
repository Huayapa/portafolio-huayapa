import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../chunks/astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C2N_QpNT.mjs';
import { $ as $$ButtonLink } from '../chunks/buttonLink_BfR9aTpu.mjs';
import { $ as $$TitleSection } from '../chunks/titleSection_BCjopA19.mjs';
/* empty css                                   */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$SobremiInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="content-info" data-astro-cid-tunre4sm> ${renderComponent($$result, "TitleSection", $$TitleSection, { "nameTitle": "Sobre Mi", "addLine": "underline", "typeTarget": "h1", "data-astro-cid-tunre4sm": true })} <article data-astro-cid-tunre4sm> <p data-astro-cid-tunre4sm>
Mi nombre es Josue Huayapa, Estudio la carrera <strong data-astro-cid-tunre4sm>“informática y desarrollo web”</strong> y disfruto crear sitios web, brindando una buena experiencia en el usuario
</p> <p data-astro-cid-tunre4sm>
Empecé a programar desde que tenia 17 años, <strong data-astro-cid-tunre4sm>aprendiendo de forma autodidacta</strong> y actualmente <strong data-astro-cid-tunre4sm>he terminado mi carrera</strong> para integrarme mas en en este mundo de la programación.
</p> <p data-astro-cid-tunre4sm>
Soy alguien <strong data-astro-cid-tunre4sm>responsable y comprometido</strong>, que me gusta <strong data-astro-cid-tunre4sm>contribuir de manera beneficiosa a mi equipo</strong>.
</p> </article> <div data-astro-cid-tunre4sm> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "nameBtn": "Contactame", "hrefBtn": "contactame", "styleBtn": "blue", "_blank": "false", "formBtn": "Section", "data-astro-cid-tunre4sm": true })} </div> </section> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/sobremi/sobremiInfo.astro", void 0);

const $$SobremiGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="content-info-keys-grid" data-astro-cid-b2tnthvy> <div id="box1" data-astro-cid-b2tnthvy> <h3 data-astro-cid-b2tnthvy>Experiencia</h3> <p data-astro-cid-b2tnthvy>Desarrollador web</p> </div> <div id="box2" data-astro-cid-b2tnthvy> <h3 data-astro-cid-b2tnthvy>Naci en</h3> <svg width="109" height="67" viewBox="0 0 109 67" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-b2tnthvy> <rect y="0.412537" width="109" height="66.2195" fill="#D91023" data-astro-cid-b2tnthvy></rect> <rect x="37.2417" y="0.412537" width="33.6083" height="66.2195" fill="white" data-astro-cid-b2tnthvy></rect> </svg> <p data-astro-cid-b2tnthvy>Lima / Perú</p> </div> <div id="box3" data-astro-cid-b2tnthvy> <p data-astro-cid-b2tnthvy>Mi motivación actual es poder <strong data-astro-cid-b2tnthvy>crecer y aumentar mis conocimientos</strong> en la programación para <strong data-astro-cid-b2tnthvy>desarrollar y mejorar mis habilidades</strong>.</p> </div> <div id="box4" data-astro-cid-b2tnthvy> <h3 data-astro-cid-b2tnthvy>Trabajo Destacado:</h3> <p class="text-secondary-color" data-astro-cid-b2tnthvy>Desarrollador Web - GlobalCorpInternational E&M</p> <p class="text-secondary-color" data-astro-cid-b2tnthvy>Desarrollador Web - TRES MEDIA E.I.R.L.</p> </div> <div id="box5" data-astro-cid-b2tnthvy> <h3 data-astro-cid-b2tnthvy>Educación:</h3> <ul class="text-secondary-color" data-astro-cid-b2tnthvy> <li data-astro-cid-b2tnthvy>Informatica y Desarrollo de Aplicaciones Web - SENATI</li> <li data-astro-cid-b2tnthvy>Aprendizaje Autodidacta</li> </ul> </div> </section> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/sobremi/sobremiGrid.astro", void 0);

const $$Sobremi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre mi", "data-astro-cid-mky65pgn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-sobremi" data-astro-cid-mky65pgn> <article class="inicio-informacion" data-astro-cid-mky65pgn> ${renderComponent($$result2, "SobremiInfo", $$SobremiInfo, { "data-astro-cid-mky65pgn": true })} ${renderComponent($$result2, "SobremiGrid", $$SobremiGrid, { "data-astro-cid-mky65pgn": true })} </article> </main> ` })} `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/sobremi.astro", void 0);

const $$file = "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/sobremi.astro";
const $$url = "/sobremi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sobremi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

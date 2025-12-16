import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_w-Q76edc.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dxpr2Ps-.mjs';
import { $ as $$ButtonLink } from '../chunks/buttonLink_BfR9aTpu.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "500Error", "data-astro-cid-5v2qf5k4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-500" data-astro-cid-5v2qf5k4> <article class="inicio-content" data-astro-cid-5v2qf5k4> <section class="error-info" data-astro-cid-5v2qf5k4> <h2 data-astro-cid-5v2qf5k4>500</h2> <h1 data-astro-cid-5v2qf5k4>Ocurrio un problema inesperado</h1> <p data-astro-cid-5v2qf5k4>Parece que te haz perdido, Puedes volver a mi pagina principal</p> ${renderComponent($$result2, "ButtonLink", $$ButtonLink, { "hrefBtn": "/", "nameBtn": "Inicio", "styleBtn": "purple", "_blank": "false", "formBtn": "Section", "data-astro-cid-5v2qf5k4": true })} </section> <picture class="error-img" data-astro-cid-5v2qf5k4> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/404/pcCatError.svg", "alt": "Imagen de error 500", "width": "600", "height": "400", "loading": "eager", "decoding": "async", "format": "svg", "data-astro-cid-5v2qf5k4": true })} <!-- <img src="./images/404/pcCatError.svg" alt=""> --> </picture> </article> </main> ` })} `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/500.astro", void 0);

const $$file = "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$500,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

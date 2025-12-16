import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_w-Q76edc.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dxpr2Ps-.mjs';
import { $ as $$ButtonLink } from '../chunks/buttonLink_BfR9aTpu.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404Error", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-404" data-astro-cid-zetdm5md> <article class="inicio-content" data-astro-cid-zetdm5md> <section class="error-info" data-astro-cid-zetdm5md> <h2 data-astro-cid-zetdm5md>404</h2> <h1 data-astro-cid-zetdm5md>Error, Pagina no encontrada</h1> <p data-astro-cid-zetdm5md>Parece que te haz perdido, Puedes volver a mi pagina principal</p> ${renderComponent($$result2, "ButtonLink", $$ButtonLink, { "hrefBtn": "/", "nameBtn": "Inicio", "styleBtn": "purple", "_blank": "false", "formBtn": "Section", "data-astro-cid-zetdm5md": true })} </section> <picture class="error-img" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/404/pcCatError.svg", "alt": "Imagen de error 404", "width": "600", "height": "400", "loading": "eager", "decoding": "async", "format": "svg", "data-astro-cid-zetdm5md": true })} <!-- <img src="./images/404/pcCatError.svg" alt=""> --> </picture> </article> </main> ` })} `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/404.astro", void 0);

const $$file = "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

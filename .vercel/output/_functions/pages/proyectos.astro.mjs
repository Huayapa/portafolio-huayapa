import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, e as renderComponent } from '../chunks/astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import { $ as $$TitleSection } from '../chunks/titleSection_BCjopA19.mjs';
import { $ as $$ButtonLink } from '../chunks/buttonLink_BfR9aTpu.mjs';
import 'clsx';
/* empty css                                     */
import { c as getImage, $ as $$Image } from '../chunks/_astro_assets_w-Q76edc.mjs';
import { g as getCollection } from '../chunks/_astro_content_B9yFEKyz.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dxpr2Ps-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$CategoryLenguageBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CategoryLenguageBox;
  const { categoria } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("style-lenguage color" + categoria, "class")} data-astro-cid-emhjufey> <p data-astro-cid-emhjufey> ${categoria} </p> </div> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/otros/categoryLenguageBox.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProyectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProyectCard;
  const { dataCard } = Astro2.props;
  const { id, name, image = "imageDefault.jpg", descript, isresponsive, linkPage, categorys, linkGitHub } = dataCard;
  const imagecard = await getImage({
    src: `/images/proyects/${image}`,
    format: "jpg",
    width: 280,
    height: 360
  });
  return renderTemplate`<!-- 
AQUI SE MOSTRARA LAS CARTAS DE CADA PROYECTO REALIZADO Y MOSTRAR LAS OPCIONES DE CATEGORIAS
-->${maybeRenderHead()}<article class="content-proyect"${addAttribute(id, "data-id")} data-astro-cid-kmf3omt5> <picture data-astro-cid-kmf3omt5> ${renderComponent($$result, "Image", $$Image, { "src": imagecard.src, "onerror": 'this.src="/images/default/imageDefault.jpg"', "loading": "eager", "decoding": "async", "format": "jpg", "alt": name, "height": 360, "width": 280, "style": "aspect-ratio: 2/3; opacity: 0.7;", "data-astro-cid-kmf3omt5": true })} ${isresponsive && renderTemplate`<svg fill="#000000" width="40px" height="40px" viewBox="0 0 24 24" data-astro-cid-kmf3omt5> <title>Esta pagina es responsiva</title> <path d="M17,6 L17,4.5 C17,3.67157288 16.3284271,3 15.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,6 L17,6 L17,6 Z M13.4998169,7 L3,7 L3,16.5 C3,17.3284271 3.67157288,18 4.5,18 L13,18 L13,8.5 C13,7.93719704 13.1859724,7.41783027 13.4998169,7 L13.4998169,7 Z M15.5,7 C14.6715729,7 14,7.67157288 14,8.5 L14,19.5 C14,20.3284271 14.6715729,21 15.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,8.5 C21,7.67157288 20.3284271,7 19.5,7 L15.5,7 L15.5,7 Z M18,6 L19.5,6 C20.8807119,6 22,7.11928813 22,8.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L15.5,22 C14.1192881,22 13,20.8807119 13,19.5 L13,19 L4.5,19 C3.11928813,19 2,17.8807119 2,16.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L15.5,2 C16.8807119,2 18,3.11928813 18,4.5 L18,6 Z M4,4 L5,4 L5,5 L4,5 L4,4 Z M6,4 L7,4 L7,5 L6,5 L6,4 Z M8,4 L9,4 L9,5 L8,5 L8,4 Z M16.5,20 C16.2238576,20 16,19.7761424 16,19.5 C16,19.2238576 16.2238576,19 16.5,19 L18.5,19 C18.7761424,19 19,19.2238576 19,19.5 C19,19.7761424 18.7761424,20 18.5,20 L16.5,20 Z" data-astro-cid-kmf3omt5></path> </svg>`} </picture> <section class="content-info" data-astro-cid-kmf3omt5> <h3 data-astro-cid-kmf3omt5>${name}</h3> <p data-astro-cid-kmf3omt5>${descript}</p> <div class="categorias" data-astro-cid-kmf3omt5> ${categorys.map((category) => renderTemplate`${renderComponent($$result, "CategoryLenguageBox", $$CategoryLenguageBox, { "categoria": category, "data-astro-cid-kmf3omt5": true })}`)} </div> <article class="btns_content" data-astro-cid-kmf3omt5> ${linkGitHub != null && renderTemplate`<a${addAttribute(linkGitHub, "href")} target="_blank" aria-label="Direccionamiento a el codigo de el proyecto por GitHub" data-astro-cid-kmf3omt5><svg viewBox="0 0 256 250" width="35" height="35" fill="#ffffff" preserveAspectRatio="xMidYMid" data-astro-cid-kmf3omt5><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" data-astro-cid-kmf3omt5></path></svg></a>`} ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "hrefBtn": linkPage ? linkPage : "#", "_blank": "true", "nameBtn": "Visitar", "styleBtn": "purple", "formBtn": "Card", "data-astro-cid-kmf3omt5": true })} </article> </section> </article> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/proyectos/proyectCard.astro", void 0);

const $$Astro = createAstro();
const $$ProyectList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProyectList;
  const proyectos = await getCollection("proyects");
  const { nameList, MinlimitCards, MaxlimitCards } = Astro2.props;
  const filterProyects = proyectos.filter((proyecto) => proyecto.data.id < Number(MaxlimitCards) + 1 && proyecto.data.id > Number(MinlimitCards));
  return renderTemplate`${maybeRenderHead()}<article class="proyectListContent" data-astro-cid-shyujqok> ${renderComponent($$result, "TitleSection", $$TitleSection, { "nameTitle": nameList, "addLine": "underline", "typeTarget": "h2", "data-astro-cid-shyujqok": true })} <section class="listsproyects" data-astro-cid-shyujqok> ${filterProyects.length === 0 && renderTemplate`<div class="isNull" data-astro-cid-shyujqok> <h3 data-astro-cid-shyujqok>Actualmente no hay mas proyectos.</h3> </div>`} ${filterProyects.map((proyect) => {
    const dataInterface = {
      id: proyect.data.id,
      name: proyect.data.name,
      descript: proyect.data.descript,
      isresponsive: proyect.data.isresponsive,
      image: proyect.data.image ?? "imageDefault.jpg",
      categorys: proyect.data.categorys,
      linkPage: proyect.data.linkPage,
      linkGitHub: proyect.data.linkGitHub
    };
    return renderTemplate`${renderComponent($$result, "ProyectCard", $$ProyectCard, { "dataCard": dataInterface, "data-astro-cid-shyujqok": true })}`;
  })} </section> </article> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/proyectos/proyectList.astro", void 0);

const $$MisProyectos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="misProyectos" data-astro-cid-bjhoidrb> ${renderComponent($$result, "ProyectList", $$ProyectList, { "nameList": "Proyectos Destacados", "MinlimitCards": "0", "MaxlimitCards": "3", "data-astro-cid-bjhoidrb": true })} <!-- <div>
		<article>
			<ul>asdsa	</ul>
		</article>
	</div> --> ${renderComponent($$result, "ProyectList", $$ProyectList, { "nameList": "Todos los proyectos", "MinlimitCards": "3", "MaxlimitCards": "7", "data-astro-cid-bjhoidrb": true })} </section> `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/proyectos/misProyectos.astro", void 0);

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "proyectos", "data-astro-cid-arbd3op2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-proyectos" data-astro-cid-arbd3op2> <article class="proyectos" data-astro-cid-arbd3op2> <section class="title-section" data-astro-cid-arbd3op2> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "nameTitle": "Proyectos", "addLine": "underline", "typeTarget": "h1", "data-astro-cid-arbd3op2": true })} </section> ${renderComponent($$result2, "MisProyectos", $$MisProyectos, { "data-astro-cid-arbd3op2": true })} </article> </main> ` })} `;
}, "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/proyectos.astro", void 0);

const $$file = "D:/Dev/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

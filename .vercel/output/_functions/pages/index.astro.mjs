import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, a as addAttribute, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cx87ql0I.mjs';
import { $ as $$ButtonLink } from '../chunks/buttonLink_Vf9FbSk1.mjs';
import { $ as $$TitleSection } from '../chunks/titleSection_3jzKRyTg.mjs';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_CIfTr1_T.mjs';
export { renderers } from '../renderers.mjs';

const $$InicioInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="content-info" data-astro-cid-7eantzt3> <h2 data-astro-cid-7eantzt3>Josue Huayapa</h2> ${renderComponent($$result, "TitleSection", $$TitleSection, { "nameTitle": "Desarrollador Web", "addLine": "none", "typeTarget": "h1", "data-astro-cid-7eantzt3": true })} <p data-astro-cid-7eantzt3>
Conocimiento del frontEnd dando buena experiencia de usuario. 
    Si quieres contactarme estare encantado de trabajar con ustedes.
</p> <div data-astro-cid-7eantzt3> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "hrefBtn": "contactame", "nameBtn": "Contactame", "styleBtn": "blue", "_blank": "false", "formBtn": "Section", "data-astro-cid-7eantzt3": true })} ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "hrefBtn": "./public/CV/INFORMEDEPR\xC1CTICA-3-huayapa.pdf", "nameBtn": "Visualizar CV", "styleBtn": "purple", "_blank": "true", "formBtn": "Section", "data-astro-cid-7eantzt3": true })} </div> <a href="proyectos" class="enlace" data-astro-cid-7eantzt3>Puedes visitar mis proyectos aqui</a> </section> `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/inicio/InicioInfo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$InicioView = createComponent(async ($$result, $$props, $$slots) => {
  const mostrarSVG = await getCollection("habilidades");
  const rutaImg = "";
  return renderTemplate(_a || (_a = __template(["", '<svg class="content-view" width="732" height="790" viewBox="0 0 732 790" fill="none" data-astro-cid-jdl3tm7b> <!-- Imagen Perfil --> <rect class="perfil" x="414.729" y="1.40434" width="401.689" height="668" rx="200.845" transform="rotate(38.2248 414.729 1.40434)" fill="url(#pattern0_64_303)" stroke="#3E0CC1" stroke-width="2" data-astro-cid-jdl3tm7b></rect> <!-- Secciones donde se mostraran los lenguajes o habilidades --> <rect class="section-icons" x="602.567" y="457" width="81.7995" height="359.705" rx="40.8998" transform="rotate(38.2248 602.567 457)" fill="#FCFBFF" data-astro-cid-jdl3tm7b></rect> <rect class="section-icons" x="273.567" y="1" width="81.7995" height="359.705" rx="40.8998" transform="rotate(38.2248 273.567 1)" fill="white" data-astro-cid-jdl3tm7b></rect> <!-- Lenguajes o habilidades que se mostraran (AQUI VAN LOS SVG DE ESTOS) --> ', ' <!-- <g clip-path="url(#habilidad2)"></g> --> <g clip-path="url(#habilidad3)" data-astro-cid-jdl3tm7b></g> <g clip-path="url(#habilidad4)" data-astro-cid-jdl3tm7b></g> <g clip-path="url(#habilidad5)" data-astro-cid-jdl3tm7b></g> <g clip-path="url(#habilidad6)" data-astro-cid-jdl3tm7b></g> <g clip-path="url(#habilidad7)" data-astro-cid-jdl3tm7b></g> <g clip-path="url(#habilidad8)" data-astro-cid-jdl3tm7b></g> <g clip-path="url(#habilidad9)" data-astro-cid-jdl3tm7b></g> <g clip-path="url(#habilidad10)" data-astro-cid-jdl3tm7b></g> <!-- FUNCIONES --> <defs data-astro-cid-jdl3tm7b> <pattern id="pattern0_64_303" patternContentUnits="objectBoundingBox" width="1" height="1" data-astro-cid-jdl3tm7b> <use xlink:href="#image0_64_303" transform="matrix(0.00105447 -0.000515662 0.000957819 0.000711048 -0.245281 0.3066495)" data-astro-cid-jdl3tm7b></use> </pattern> <!-- xlink:href={urlPerfil} --> <image id="image0_64_303" width="650" height="1000" ', "", ' data-astro-cid-jdl3tm7b></image> <!-- MOSTRAR UBICACION DE CADA LENGUAJE o HABILIDAD --> <clipPath id="habilidad1" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="255" y="45" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad2" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="218" y="93" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad3" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="178" y="148" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad4" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="133" y="200" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad5" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="93" y="255" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad6" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="587" y="495" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad7" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="547" y="549" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad8" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="507" y="604" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad9" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="462" y="656" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> <clipPath id="habilidad10" data-astro-cid-jdl3tm7b><rect class="boxIcon" x="422" y="711" width="40" height="40" rx="5" data-astro-cid-jdl3tm7b></rect></clipPath> </defs> </svg> <script>\n  document.addEventListener("astro:page-load", () => {\n    // Agregar imagen alterna si no tiene o no funciona la imagen\n    const $imageSvg = document.getElementById("image0_64_303");\n    let image = new Image();\n    image.src = $imageSvg?.dataset.imagesrc ?? "";\n    if(!image.complete) {\n      $imageSvg?.setAttribute("xlink:href", "images/default/imageDefault.jpg")\n    }\n    // A\xF1adir el tama\xF1o y la posicion de cada icono\n    let $svgicons = document.querySelectorAll(".content-view svg");\n    $svgicons?.forEach(svg => {\n      if(svg) {\n        svg.setAttribute("width", "40")\n        svg.setAttribute("height", "40")\n        let coordX = svg.parentElement?.dataset.coordx ;\n        let coordY = svg.parentElement?.dataset.coordy ;\n        if(coordX != undefined && coordY != undefined) {\n          svg.setAttribute("x", coordX)\n          svg.setAttribute("y", coordY)\n        }\n        }\n    })\n  })\n<\/script> '])), maybeRenderHead(), mostrarSVG.map((lenguaje) => renderTemplate`<g${addAttribute("url(#habilidad" + lenguaje.data.category + ")", "clip-path")} class="icon"${addAttribute(lenguaje.data.coordX, "data-coordX")}${addAttribute(lenguaje.data.coordY, "data-coordY")} data-astro-cid-jdl3tm7b> ${lenguaje.data.positionItem !== null && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(lenguaje.body)}` })}`} </g>`), addAttribute(rutaImg, "xlink:href"), addAttribute(rutaImg, "data-imagesrc"));
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/inicio/InicioView.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-inicio" data-astro-cid-j7pv25f6> <article class="inicio-presentacion" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "InicioInfo", $$InicioInfo, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "InicioView", $$InicioView, { "data-astro-cid-j7pv25f6": true })} </article> </main> ` })} `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/index.astro", void 0);

const $$file = "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

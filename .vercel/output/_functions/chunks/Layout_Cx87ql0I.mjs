import { c as createComponent, r as renderTemplate, a as addAttribute, j as renderScript, b as createAstro, m as maybeRenderHead, e as renderComponent, d as renderTransition, k as renderHead, l as renderSlot } from './astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeaderBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderBtn;
  const { hrefName, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(hrefName, "href")} class="enlace_btn" data-astro-cid-6fj5cmnp> ${name} </a> ${renderScript($$result, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/header/HeaderBtn.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/header/HeaderBtn.astro", void 0);

const $$HeaderLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="logo" aria-label="Logo principal que te diriguira a la pagina del Inicio" data-astro-cid-erltjlkt> <svg width="165" height="46" viewBox="0 0 165 46" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-erltjlkt> <path d="M8.75141 2.488H13.5514V19H8.75141V2.488ZM18.0154 12.64H14.5594V8.8H18.0154V2.488H22.8154V19H18.0154V12.64ZM32.6511 19.192C30.9711 19.192 29.6751 19.056 28.7631 18.784C27.8511 18.512 27.1791 18.072 26.7471 17.464C26.3471 16.904 26.0991 16.192 26.0031 15.328C25.9071 14.464 25.8591 13.176 25.8591 11.464V2.488H30.6591V12.424C30.6591 13.016 30.6751 13.584 30.7071 14.128C30.7391 14.56 30.8111 14.872 30.9231 15.064C31.0351 15.256 31.2271 15.376 31.4991 15.424C31.7391 15.488 32.1231 15.52 32.6511 15.52H33.2031C33.3311 15.52 33.4751 15.504 33.6351 15.472V19.168C33.5231 19.184 33.3631 19.192 33.1551 19.192H32.6511ZM34.6431 2.488H39.4431V11.464C39.4431 13.032 39.4111 14.216 39.3471 15.016C39.2831 15.816 39.1071 16.488 38.8191 17.032C38.4991 17.656 38.0111 18.136 37.3551 18.472C36.6991 18.808 35.7951 19.024 34.6431 19.12V2.488ZM46.2454 2.488H46.6534L48.5494 9.064L45.7894 19H40.9894L46.2454 2.488ZM51.6454 16.072H47.6374L48.6454 12.376H50.5654L47.7334 2.488H52.1254L57.3814 19H52.4854L51.6454 16.072ZM60.9145 13.552L60.6985 13.072L60.0745 11.848L59.4745 10.576C59.4105 10.464 59.3305 10.296 59.2345 10.072L58.2505 8.032L55.6105 2.488H60.5065L65.7145 13.576V19H60.9145V13.552ZM64.0105 7.6L66.2425 2.488H71.0425L69.1705 6.376L68.3785 8.008L66.8665 11.152L66.2665 12.4L64.0105 7.6ZM74.5345 2.488H74.9425L76.8385 9.064L74.0785 19H69.2785L74.5345 2.488ZM79.9345 16.072H75.9265L76.9345 12.376H78.8545L76.0225 2.488H80.4145L85.6705 19H80.7745L79.9345 16.072ZM87.267 2.488H92.067V19H87.267V2.488ZM93.075 10.192H93.651C94.163 10.192 94.539 10.176 94.779 10.144C95.035 10.096 95.235 10 95.379 9.856C95.523 9.728 95.611 9.544 95.643 9.304C95.691 9.048 95.715 8.672 95.715 8.176C95.715 7.68 95.691 7.312 95.643 7.072C95.611 6.816 95.523 6.616 95.379 6.472C95.235 6.344 95.035 6.264 94.779 6.232C94.523 6.184 94.147 6.16 93.651 6.16H93.075V2.488H95.067C96.251 2.488 97.211 2.608 97.947 2.848C98.699 3.072 99.267 3.424 99.651 3.904C100.019 4.352 100.267 4.92 100.395 5.608C100.523 6.28 100.587 7.136 100.587 8.176C100.587 9.168 100.523 9.992 100.395 10.648C100.283 11.304 100.051 11.856 99.699 12.304C99.299 12.816 98.723 13.208 97.971 13.48C97.235 13.736 96.267 13.864 95.067 13.864H93.075V10.192ZM105.636 2.488H106.044L107.94 9.064L105.18 19H100.38L105.636 2.488ZM111.036 16.072H107.028L108.036 12.376H109.956L107.124 2.488H111.516L116.772 19H111.876L111.036 16.072Z" fill="white" data-astro-cid-erltjlkt></path> <path d="M9 19H137V20H9V19Z" fill="white" data-astro-cid-erltjlkt></path> <path d="M74.0075 36.968L65.1275 33.344L65.7035 30.56L76.1675 26.888L75.5675 29.696L68.5835 32L74.5595 34.328L74.0075 36.968ZM122.401 39.32L133.585 20.168H136.993L125.761 39.32H122.401ZM134.908 36.968L135.508 34.136L142.492 31.832L136.516 29.528L137.068 26.888L145.948 30.536L145.372 33.32L134.908 36.968Z" fill="white" data-astro-cid-erltjlkt></path> <path d="M77.2925 38L80.8205 21.488H86.4845C88.1965 21.488 89.5405 21.6 90.5165 21.824C91.4925 22.032 92.1805 22.4 92.5805 22.928C92.9805 23.456 93.1805 24.208 93.1805 25.184C93.1805 25.76 93.1165 26.44 92.9885 27.224C92.8765 27.992 92.7165 28.88 92.5085 29.888C92.2205 31.232 91.9485 32.384 91.6925 33.344C91.4525 34.288 91.1485 35.064 90.7805 35.672C90.4285 36.28 89.9645 36.76 89.3885 37.112C88.8285 37.448 88.1005 37.68 87.2045 37.808C86.3085 37.936 85.1725 38 83.7965 38H77.2925ZM82.1645 34.856H83.7245C84.4125 34.856 84.9725 34.84 85.4045 34.808C85.8525 34.76 86.2125 34.656 86.4845 34.496C86.7725 34.32 87.0125 34.056 87.2045 33.704C87.3965 33.336 87.5725 32.84 87.7325 32.216C87.9085 31.576 88.1005 30.752 88.3085 29.744C88.5005 28.88 88.6445 28.152 88.7405 27.56C88.8525 26.968 88.9085 26.48 88.9085 26.096C88.9085 25.744 88.8525 25.472 88.7405 25.28C88.6445 25.072 88.4765 24.928 88.2365 24.848C87.9965 24.752 87.6845 24.696 87.3005 24.68C86.9165 24.648 86.4445 24.632 85.8845 24.632H84.3485L82.1645 34.856ZM93.8628 38L97.3908 21.488H109.199L108.527 24.632H100.895L100.151 28.136H106.607L105.959 31.208H99.5028L98.7108 34.856H106.343L105.671 38H93.8628ZM112.111 38L110.479 21.488H114.679L115.663 33.416H115.855L121.927 21.488H126.223L117.559 38H112.111Z" fill="#23A9B8" data-astro-cid-erltjlkt></path> </svg> </a> `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/header/HeaderLogo.astro", void 0);

const $$HeaderRedes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-redes" aria-label="Enlaces relacionados a redes de Josue Huayapa" data-astro-cid-qktvise6> <a href="https://github.com/Huayapa" rel="nofollow" target="_blank" aria-label="cuenta de github" data-astro-cid-qktvise6> <svg viewBox="0 0 256 250" width="30" height="30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-astro-cid-qktvise6><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" data-astro-cid-qktvise6></path></svg> </a> <a href="https://pe.linkedin.com/in/josue-huayapa-630a19316" rel="nofollow" target="_blank" aria-label="cuenta de linkeding" data-astro-cid-qktvise6> <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" data-astro-cid-qktvise6><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#ffffff" data-astro-cid-qktvise6></path></svg> </a> </section> `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/header/HeaderRedes.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const rutas = [
    { name: "Inicio", ruta: "/" },
    { name: "Sobre mi", ruta: "/sobremi" },
    { name: "Proyectos", ruta: "/proyectos" },
    { name: "Habilidades", ruta: "/habilidades" },
    { name: "Contactame", ruta: "/contactame" }
  ];
  return renderTemplate(_a || (_a = __template(["", "<header data-astro-cid-pwmmw5ba> <!-- LOGO PRINCIPAL --> ", ' <!-- BARRA DE NAVEGACION --> <nav id="menu-navigation" data-astro-cid-pwmmw5ba', "> ", ' </nav> <!-- SECCION DE MIS REDES Y EL BOTON DEL MENU MOBILE --> <article class="section-left" data-astro-cid-pwmmw5ba> ', ' <button id="btn-menu" data-astro-cid-pwmmw5ba> <svg width="40" height="40" viewBox="0 0 100 100" data-astro-cid-pwmmw5ba> <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" data-astro-cid-pwmmw5ba></path> <path class="line line2" d="M 20,50 H 80" data-astro-cid-pwmmw5ba></path> <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" data-astro-cid-pwmmw5ba></path> </svg> </button> </article> </header> <script>\n    // DESPLEGAR Y OCULTAR EL MENU DE NAVEGACION MOBILE\n    document.addEventListener("astro:page-load", () => {\n      let $btnMenu = document.getElementById("btn-menu"),\n        $navMenu = document.getElementById("menu-navigation");\n      $btnMenu?.addEventListener("click", () => {\n        $btnMenu?.classList.toggle("activebtn");\n        $navMenu?.classList.toggle("activebtn");\n      });\n    })\n\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "HeaderLogo", $$HeaderLogo, { "data-astro-cid-pwmmw5ba": true }), addAttribute(renderTransition($$result, "6hbdejkg", "", "hero"), "data-astro-transition-scope"), rutas.map(({ name, ruta }) => renderTemplate`${renderComponent($$result, "HeaderBtn", $$HeaderBtn, { "hrefName": ruta, "name": name, "data-astro-cid-pwmmw5ba": true })}`), renderComponent($$result, "HeaderRedes", $$HeaderRedes, { "data-astro-cid-pwmmw5ba": true }));
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/header/Header.astro", "self");

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const correo = {
    name: "contactohuayapa@gmail.com",
    url: "mailto:contactohuayapa@gmail.com"
  };
  const ubicacion = "Lima - Per\xFA";
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-tnm6jnzf> <section class="box box1" data-astro-cid-tnm6jnzf> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin" data-astro-cid-tnm6jnzf><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-tnm6jnzf></path><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" data-astro-cid-tnm6jnzf></path></svg> <p data-astro-cid-tnm6jnzf>Ubicación: ${ubicacion}</p> </section> <section class="box box2" data-astro-cid-tnm6jnzf> <strong data-astro-cid-tnm6jnzf>@Josue huayapa - desarrollador web</strong> <div data-astro-cid-tnm6jnzf>Encantado de trabajar con ustedes
</div></section> <section class="box box3" data-astro-cid-tnm6jnzf> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail" data-astro-cid-tnm6jnzf><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-tnm6jnzf></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" data-astro-cid-tnm6jnzf></path><path d="M3 7l9 6l9 -6" data-astro-cid-tnm6jnzf></path></svg> <a${addAttribute(correo.url, "href")} data-astro-cid-tnm6jnzf>
Correo Electronico: <br data-astro-cid-tnm6jnzf> <span class="url-design" data-astro-cid-tnm6jnzf>${correo.name}</span> </a> </section> </footer> `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/footer/footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description" content="Bienvenido a mi portafolio :D."><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <div class="fondo-dark"></div> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
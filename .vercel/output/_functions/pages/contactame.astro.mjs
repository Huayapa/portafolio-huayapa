import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, j as renderScript, b as createAstro, e as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_BOWVjJjY.mjs';
import 'kleur/colors';
import { i as isValidPhone, a as isValidEmail } from '../chunks/validators_8VL1N_m_.mjs';
import 'clsx';
/* empty css                                      */
import { $ as $$TitleSection } from '../chunks/titleSection_3jzKRyTg.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cx87ql0I.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Modal;
  const { title, descript, isSuccess = "false" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute("modal-message", "class")}${addAttribute(isSuccess, "data-isSuccess")} data-astro-cid-2zd6jnmd> <article data-astro-cid-2zd6jnmd> <div class="section-img" data-astro-cid-2zd6jnmd> <canvas id="dotlottie-canvas" style="width: 5rem; height:5rem;" data-astro-cid-2zd6jnmd></canvas> </div> <div class="section-info" data-astro-cid-2zd6jnmd> <h3 data-astro-cid-2zd6jnmd>${title}</h3> <p data-astro-cid-2zd6jnmd>${descript}</p> </div> </article> <button onclick="this.parentElement.close()" data-astro-cid-2zd6jnmd>X</button> </dialog> ${renderScript($$result, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/otros/modal.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/otros/modal.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactoForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactoForm;
  const domain = "https://portafolio-huayapa.vercel.app";
  let isMessage = null;
  const errors = { nameFull: "", tel: "", email: "", message: "" };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const nameFull = data.get("nameComplete");
      const tel = data.get("telPhone");
      const email = data.get("email");
      const message = data.get("message");
      let fecha = (/* @__PURE__ */ new Date()).toLocaleDateString("es-MX", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour12: true,
        hour: "numeric",
        minute: "numeric"
      });
      if (typeof nameFull !== "string" || nameFull.length < 1) {
        errors.nameFull += "Por favor, ingrese tu nombre completo.";
      }
      if (typeof nameFull !== "string" || nameFull.length > 50) {
        errors.nameFull += "El numero de caracteres fue execedido (50).";
      }
      if (typeof tel !== "string" || tel.length < 10 || !isValidPhone(tel)) {
        errors.tel += "Numero telefonico no reconocido.";
      }
      if (typeof email !== "string" || !isValidEmail(email)) {
        errors.email += "Correo no valido.";
      }
      if (typeof message !== "string" || message.length < 1) {
        errors.message += "Ingrese un mensaje.";
      }
      if (typeof message !== "string" || message.length > 300) {
        errors.message += "Limite de 300 caracteres exedidos";
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
        try {
          const rest = await fetch(`${domain}/api/sendEmail.json`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              //DATOS QUE SE ENVIARAN
              name: nameFull,
              phone: tel,
              email,
              descript: message,
              date: fecha
            })
          });
          const data2 = await rest.json();
          isMessage = data2;
        } catch (error) {
          isMessage = error;
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        isMessage = error;
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="content_form" data-astro-cid-krm7utza> <h2 data-astro-cid-krm7utza>Trabajemos Juntos</h2> <form method="post" id="form-contact" data-astro-cid-krm7utza> <label data-astro-cid-krm7utza>Nombre Completo
<input type="text" name="nameComplete" maxlength="50" data-astro-cid-krm7utza> ${errors.nameFull && renderTemplate`<span data-astro-cid-krm7utza>${errors.nameFull}</span>`} </label> <div class="form-column-content" data-astro-cid-krm7utza> <label data-astro-cid-krm7utza>Numero Telefonico
<input type="tel" name="telPhone" placeholder="+00-000000000" maxlength="15" data-astro-cid-krm7utza> ${errors.tel && renderTemplate`<span data-astro-cid-krm7utza>${errors.tel}</span>`} </label> <label data-astro-cid-krm7utza>Correo Electronico
<input type="text" name="email" maxlength="40" data-astro-cid-krm7utza> ${errors.email && renderTemplate`<span data-astro-cid-krm7utza>${errors.email}</span>`} </label> </div> <label data-astro-cid-krm7utza>Mensaje
<textarea name="message" maxlength="300" data-astro-cid-krm7utza></textarea> ${errors.message && renderTemplate`<span data-astro-cid-krm7utza>${errors.message}</span>`} </label> <div class="align-item" data-astro-cid-krm7utza> <button data-astro-cid-krm7utza>Enviar Mensaje</button> </div> </form> </section> ${isMessage?.success === true && renderTemplate`${renderComponent($$result, "Modal", $$Modal, { "title": "Enviado correctamente", "descript": isMessage.message, "isSuccess": "true", "data-astro-cid-krm7utza": true })}`} ${isMessage?.success === false && renderTemplate`${renderComponent($$result, "Modal", $$Modal, { "title": "Ocurrio un problema", "descript": isMessage.message, "isSuccess": "false", "data-astro-cid-krm7utza": true })}`} `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/contacto/contactoForm.astro", void 0);

const $$Astro = createAstro();
const $$ContactoContentInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactoContentInfo;
  const { svgViewInfo, titleContent, contentText, activeLink, hrefLink } = Astro2.props;
  return renderTemplate`${activeLink != void 0 || activeLink == "true" ? renderTemplate`${maybeRenderHead()}<section data-astro-cid-75os32ct><a${addAttribute(hrefLink, "href")} target="_blank" data-astro-cid-75os32ct><div class="box-svg" data-astro-cid-75os32ct>${renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(svgViewInfo)}` })}`}</div><div class="content-info" data-astro-cid-75os32ct><h3 data-astro-cid-75os32ct>${titleContent}</h3><strong data-astro-cid-75os32ct>${contentText}</strong></div></a></section>` : renderTemplate`<section data-astro-cid-75os32ct><div class="box-svg" data-astro-cid-75os32ct>${renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(svgViewInfo)}` })}`}</div><div class="content-info" data-astro-cid-75os32ct><h3 data-astro-cid-75os32ct>${titleContent}</h3><strong data-astro-cid-75os32ct>${contentText}</strong></div></section>`}`;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/contacto/contactoContentInfo.astro", void 0);

const $$ContactoList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="content_contact" data-astro-cid-nyjmgcpy> ${renderComponent($$result, "TitleSection", $$TitleSection, { "nameTitle": "Contactame", "addLine": "underline", "typeTarget": "h1", "data-astro-cid-nyjmgcpy": true })} <article class="ContentformContact" data-astro-cid-nyjmgcpy> ${renderComponent($$result, "ContactoContentInfo", $$ContactoContentInfo, { "svgViewInfo": `<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M11.6296 37.6842L12.3489 38.0398C15.3464 39.8173 18.7033 40.6468 22.0603 40.6468C32.6109 40.6468 41.2431 32.1146 41.2431 21.6862C41.2431 16.7091 39.2049 11.8504 35.6082 8.29527C32.0114 4.7401 27.2155 2.72562 22.0603 2.72562C11.5098 2.72562 2.87736 11.2579 2.99733 21.8048C2.99733 25.3598 4.07636 28.7966 5.87469 31.759L6.35422 32.4701L4.43609 39.4619L11.6296 37.6842Z" fill="#00E676"/>
      <path d="M37.6463 6.3992C33.5699 2.25164 27.935 0 22.1801 0C9.95122 0 0.119969 9.83578 0.239766 21.8046C0.239766 25.5968 1.3188 29.2705 3.1173 32.5885L0 43.8464L11.6296 40.8838C14.8667 42.6615 18.4633 43.491 22.0603 43.491C34.1694 43.491 44.0007 33.6551 44.0007 21.6864C44.0007 15.8796 41.7225 10.4283 37.6463 6.3992ZM22.1801 39.8175C18.943 39.8175 15.7059 38.9881 12.9484 37.329L12.2291 36.9734L5.27536 38.7509L7.07369 31.9963L6.59416 31.2852C1.3188 22.8715 3.83659 11.7319 12.4688 6.51761C21.1011 1.30352 32.2511 3.79215 37.5265 12.3244C42.8017 20.8567 40.2839 31.8776 31.6518 37.0918C28.8941 38.8693 25.5372 39.8173 22.1801 39.8173V39.8175ZM32.7307 26.6637L31.4119 26.0711C31.4119 26.0711 29.4938 25.2416 28.2948 24.649C28.1748 24.649 28.055 24.5304 27.935 24.5304C27.5753 24.5304 27.3355 24.649 27.0958 24.7676C27.0958 24.7676 26.976 24.886 25.2974 26.7821C25.1775 27.0191 24.9377 27.1376 24.6979 27.1376H24.578C24.4582 27.1376 24.2184 27.0191 24.0984 26.9007L23.4989 26.6637C22.1801 26.0711 20.9813 25.36 20.0221 24.412C19.7823 24.175 19.4226 23.938 19.1828 23.7011C18.3435 22.8715 17.5043 21.9234 16.9049 20.8569L16.785 20.6199C16.6652 20.5013 16.6652 20.3829 16.5452 20.1459C16.5452 19.9089 16.5452 19.6719 16.6652 19.5533C16.6652 19.5533 17.1447 18.9608 17.5043 18.6054C17.7442 18.3682 17.864 18.0128 18.1038 17.7758C18.3435 17.4203 18.4635 16.9463 18.3435 16.5907C18.2237 15.9982 16.785 12.7986 16.4254 12.0876C16.1855 11.732 15.9459 11.6136 15.5861 11.495H14.2673C14.0274 11.495 13.7878 11.6136 13.5479 11.6136L13.4279 11.732C13.1881 11.8506 12.9484 12.0876 12.7086 12.206C12.4688 12.4432 12.3489 12.68 12.1091 12.9171C11.2698 13.9837 10.7903 15.2872 10.7903 16.5907C10.7903 17.5387 11.0301 18.4868 11.3898 19.3163L11.5098 19.6719C12.5888 21.9234 14.0274 23.938 15.9459 25.7155L16.4254 26.1895C16.785 26.5451 17.1447 26.7821 17.3845 27.1375C19.9023 29.2707 22.7796 30.8112 26.0167 31.6408C26.3765 31.7592 26.856 31.7592 27.2157 31.8777H28.4145C29.014 31.8777 29.7333 31.6408 30.2131 31.4038C30.5726 31.1668 30.8124 31.1668 31.0521 30.9298L31.2921 30.6926C31.5318 30.4556 31.7716 30.3372 32.0114 30.1002C32.2511 29.8633 32.4909 29.6263 32.6109 29.3891C32.8506 28.9151 32.9704 28.3226 33.0904 27.7302V26.9007C33.0904 26.9007 32.9704 26.7821 32.7307 26.6637Z" fill="white"/>
      </svg>`, ",": true, "titleContent": "Telefono", "contentText": "+51 903 545 459", "activeLink": "true", "hrefLink": "https://wa.me/51903545459", "data-astro-cid-nyjmgcpy": true })} ${renderComponent($$result, "ContactoContentInfo", $$ContactoContentInfo, { "svgViewInfo": `<svg width="44" height="44" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
    <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#ffffff"/>
    </svg>`, ",": true, "titleContent": "Linkedin", "contentText": "Josue Huayapa", "activeLink": "true", "hrefLink": "https://pe.linkedin.com/in/josue-huayapa-630a19316", "data-astro-cid-nyjmgcpy": true })} ${renderComponent($$result, "ContactoContentInfo", $$ContactoContentInfo, { "svgViewInfo": `<svg width="44" height="44" viewBox="0 49.4 512 399.42">
      <g fill="none" fill-rule="evenodd">
        <g fill-rule="nonzero">
          <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"/>
          <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"/>
          <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"/>
        </g>
        <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"/>
        <path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"/>
      </g>
    </svg>`, ",": true, "titleContent": "Correo", "contentText": "contactohuayapa@gmail.com", "activeLink": "true", "hrefLink": "mailto:contactohuayapa@gmail.com", "data-astro-cid-nyjmgcpy": true })} ${renderComponent($$result, "ContactoContentInfo", $$ContactoContentInfo, { "svgViewInfo": `<svg width="40" height="40" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
    </svg>`, ",": true, "titleContent": "Ubicaci\xF3n", "contentText": "Lima / Per\xFA", "data-astro-cid-nyjmgcpy": true })} ${renderComponent($$result, "ContactoContentInfo", $$ContactoContentInfo, { "svgViewInfo": `<svg viewBox="0 0 256 250" width="44" height="44" fill="#fff" preserveAspectRatio="xMidYMid">
        <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
    </svg>`, ",": true, "titleContent": "GitHub", "contentText": "huayapa", "activeLink": "true", "hrefLink": "https://github.com/Huayapa", "data-astro-cid-nyjmgcpy": true })} </article> </section> `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/contacto/contactoList.astro", void 0);

const $$Contactame = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "data-astro-cid-e7jrv5jk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-contactame" data-astro-cid-e7jrv5jk> <article class="inicio-formasDeContacto" data-astro-cid-e7jrv5jk> ${renderComponent($$result2, "ContactoList", $$ContactoList, { "data-astro-cid-e7jrv5jk": true })} ${renderComponent($$result2, "ContactoForm", $$ContactoForm, { "data-astro-cid-e7jrv5jk": true })} </article> </main> ` })} `;
}, "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/contactame.astro", void 0);

const $$file = "D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/contactame.astro";
const $$url = "/contactame";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contactame,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

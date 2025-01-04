import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CFsRMJrS.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_Bd4Pemvs.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contactame/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contactame","isIndex":false,"type":"page","pattern":"^\\/contactame\\/?$","segments":[[{"content":"contactame","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contactame.astro","pathname":"/contactame","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"habilidades/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/habilidades","isIndex":false,"type":"page","pattern":"^\\/habilidades\\/?$","segments":[[{"content":"habilidades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/habilidades.astro","pathname":"/habilidades","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"proyectos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/proyectos","isIndex":false,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"service/validators","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/validators","isIndex":false,"type":"endpoint","pattern":"^\\/service\\/validators\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"validators","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/validators.ts","pathname":"/service/validators","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"sobremi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sobremi","isIndex":false,"type":"page","pattern":"^\\/sobremi\\/?$","segments":[[{"content":"sobremi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobremi.astro","pathname":"/sobremi","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/service/api/sendemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/service\\/api\\/sendEmail\\.json\\/?$","segments":[[{"content":"service","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/service/api/sendEmail.json.ts","pathname":"/service/api/sendEmail.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/otros/titleSection.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/contacto/contactoList.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/contactame.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contactame@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/inicio/InicioInfo.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/proyectos/proyectList.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/proyectos/misProyectos.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/proyectos.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/proyectos@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/sobremi/sobremiInfo.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/sobremi.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/sobremi@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/habilidades.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/habilidades@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/habilidades/habilidadesLayout.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/inicio/InicioView.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/header/Header.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/service/validators@_@ts":"pages/service/validators.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/service/api/sendEmail.json@_@ts":"pages/service/api/sendemail.json.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/sobremi@_@astro":"pages/sobremi.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/habilidades@_@astro":"pages/habilidades.astro.mjs","\u0000@astro-page:src/pages/contactame@_@astro":"pages/contactame.astro.mjs","\u0000@astro-page:src/pages/proyectos@_@astro":"pages/proyectos.astro.mjs","D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_rbWhSN62.mjs","D:\\ProyectosGenerales\\ProyectosPersonales\\portafolio-huayapa\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","D:\\ProyectosGenerales\\ProyectosPersonales\\portafolio-huayapa\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_ChWpzLYi.mjs","\u0000@astrojs-manifest":"manifest_BEP5VXHU.mjs","D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/inicio/InicioView.astro?astro&type=script&index=0&lang.ts":"_astro/InicioView.astro_astro_type_script_index_0_lang.Bi7-jDZj.js","D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/otros/modal.astro?astro&type=script&index=0&lang.ts":"_astro/modal.astro_astro_type_script_index_0_lang.A5v1dG59.js","D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/header/HeaderBtn.astro?astro&type=script&index=0&lang.ts":"_astro/HeaderBtn.astro_astro_type_script_index_0_lang.Dn0mBTi9.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/inicio/InicioView.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const t=document.getElementById(\"image0_64_303\");let i=new Image;i.src=t?.dataset.imagesrc??\"\",i.complete||t?.setAttribute(\"xlink:href\",\"images/default/imageDefault.jpg\"),document.querySelectorAll(\".content-view svg\")?.forEach(e=>{if(e){e.setAttribute(\"width\",\"40\"),e.setAttribute(\"height\",\"40\");let a=e.parentElement?.dataset.coordx,o=e.parentElement?.dataset.coordy;a!=null&&o!=null&&(e.setAttribute(\"x\",a),e.setAttribute(\"y\",o))}})});"],["D:/ProyectosGenerales/ProyectosPersonales/portafolio-huayapa/src/components/header/HeaderBtn.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll(\".enlace_btn\").forEach(e=>{e.addEventListener(\"click\",a=>{window.location.pathname===e.pathname&&a?.preventDefault()}),window.location.pathname===e.pathname&&e.classList.add(\"activePage\")})});"]],"assets":["/_astro/contactame.Bq5AdyIU.css","/_astro/contactame.BYL_ICxx.css","/_astro/proyectos.BGEkGtXV.css","/favicon.png","/favicon.svg","/animation/error.json","/animation/success.json","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/_astro/modal.astro_astro_type_script_index_0_lang.A5v1dG59.js","/images/404/pcCatError.svg","/images/default/imageDefault.jpg","/images/proyects/proyectGlobalCorp.jpg","/images/proyects/sistemaDeVentas.jpg","/404.html","/contactame/index.html","/habilidades/index.html","/proyectos/index.html","/service/validators","/sobremi/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ZqTFnri3d3yi+SkMvz6eIyZ96bSyKu7bad1CR936jro="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

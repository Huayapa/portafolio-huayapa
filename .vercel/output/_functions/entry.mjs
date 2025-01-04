import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_AydaMPAs.mjs';
import { manifest } from './manifest_BEP5VXHU.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/contactame.astro.mjs');
const _page3 = () => import('./pages/habilidades.astro.mjs');
const _page4 = () => import('./pages/proyectos.astro.mjs');
const _page5 = () => import('./pages/service/api/sendemail.json.astro.mjs');
const _page6 = () => import('./pages/service/validators.astro.mjs');
const _page7 = () => import('./pages/sobremi.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/contactame.astro", _page2],
    ["src/pages/habilidades.astro", _page3],
    ["src/pages/proyectos.astro", _page4],
    ["src/pages/service/api/sendEmail.json.ts", _page5],
    ["src/pages/service/validators.ts", _page6],
    ["src/pages/sobremi.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7060b245-3063-4684-aff3-80bbe2da76d3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_AydaMPAs.mjs';
import { manifest } from './manifest_Dlj-PX7w.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page3 = () => import('./pages/contactame.astro.mjs');
const _page4 = () => import('./pages/habilidades.astro.mjs');
const _page5 = () => import('./pages/proyectos.astro.mjs');
const _page6 = () => import('./pages/service/validators.astro.mjs');
const _page7 = () => import('./pages/sobremi.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/sendEmail.json.ts", _page2],
    ["src/pages/contactame.astro", _page3],
    ["src/pages/habilidades.astro", _page4],
    ["src/pages/proyectos.astro", _page5],
    ["src/pages/service/validators.ts", _page6],
    ["src/pages/sobremi.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "87d3b439-3f98-4eb0-b6c0-aa6bd7fb9991",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_mc08LfnU.mjs';
import { manifest } from './manifest_BjTguw3J.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///Users/giangnn/demo-astro/.amplify-hosting/static/",
    "server": "file:///Users/giangnn/demo-astro/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };

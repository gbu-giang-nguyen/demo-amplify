import { e as createComponent, m as maybeRenderHead, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CGVBY5v_.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$List = createComponent(async ($$result, $$props, $$slots) => {
  let data = await new Promise((resolve, reject) => {
    fetch("https://test-giangnn.microcms.io/api/v1/news", {
      headers: {
        "X-MICROCMS-API-KEY": "87bTidxPI6zUfgFk5gEKsUGUNdRq81SjewSP"
      }
    }).then((res) => res.json()).then((d) => {
      resolve(d);
    });
  });
  return renderTemplate`${maybeRenderHead()}<div> ${data.contents.map((item) => renderTemplate`<p>${item.title}</p>`)} </div>`;
}, "/Users/giangnn/demo-astro/src/components/List.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(
    "https://uselessfacts.jsph.pl/api/v2/facts/random"
  );
  const data = await response.json();
  return renderTemplate`${maybeRenderHead()}<h2>Random fact: ${data.text}</h2> <br> <br> ${renderComponent($$result, "List", $$List, {})}`;
}, "/Users/giangnn/demo-astro/src/pages/index.astro", void 0);

const $$file = "/Users/giangnn/demo-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

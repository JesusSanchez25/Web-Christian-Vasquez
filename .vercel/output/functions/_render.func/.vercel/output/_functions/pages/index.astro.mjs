import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead, s as spreadAttributes, g as renderComponent, u as unescapeHTML, F as Fragment, h as defineStyleVars } from '../chunks/astro/server_dAJTAjD4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { getIconData, iconToSVG } from '@iconify/utils';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.		com" crossorigin><link href="https://fonts.googleapis.com/css2?		family=Inika:wght@400;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/magol/Web Christian Astro Final/src/layouts/Layout.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1726041079,"icons":{"close":{"body":"<path fill=\"#fff\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>","width":24,"height":24},"menu":{"body":"<path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1\" clip-rule=\"evenodd\"/>","width":20,"height":20}}}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/magol/Web Christian Astro Final/node_modules/astro-icon/components/Icon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<main data-astro-cid-hpnw4vwy> <header id="header" data-astro-cid-hpnw4vwy> <div class="main-header" data-astro-cid-hpnw4vwy> <div class="flex-container" data-astro-cid-hpnw4vwy> <img src="public/WhatsApp Image 2024-07-01 at 22.30.59 (1).jpeg" alt="Foto Perfil" data-astro-cid-hpnw4vwy> <h3 data-astro-cid-hpnw4vwy>CHRISTIAN <br data-astro-cid-hpnw4vwy>R\xCDOS</h3> </div> <div class="flex-container" id="navs-container" data-astro-cid-hpnw4vwy> <h3 data-astro-cid-hpnw4vwy>INICIO</h3> <h3 data-astro-cid-hpnw4vwy>ESPECIALIDADES</h3> <h3 data-astro-cid-hpnw4vwy>PROYECTOS</h3> <h3 data-astro-cid-hpnw4vwy>CONTACTO</h3> <h3 data-astro-cid-hpnw4vwy>SOBRE MI</h3> </div> <div id="burger-menu-container" data-astro-cid-hpnw4vwy> ', " ", ` </div> </div> <div id="extended-header" data-astro-cid-hpnw4vwy> <h3 data-astro-cid-hpnw4vwy>INICIO</h3> <h3 data-astro-cid-hpnw4vwy>ESPECIALIDADES</h3> <h3 data-astro-cid-hpnw4vwy>PROYECTOS</h3> <h3 data-astro-cid-hpnw4vwy>CONTACTO</h3> <h3 data-astro-cid-hpnw4vwy>SOBRE MI</h3> </div> </header> </main>  <script>
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const toggleButton = document.getElementById('burger-menu-container');
  const iconBars = toggleButton.querySelector('.menu');
  const iconX = toggleButton.querySelector('.close');
  const extendedHeader = document.getElementById('extended-header');

  toggleButton.addEventListener('click', () => {
    requestAnimationFrame(() => {
      header.classList.toggle('open');
      extendedHeader.classList.toggle('open');
      iconBars.classList.toggle('active');
      iconX.classList.toggle('active');
    });
  });
});
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "menu", "class": "icon menu active", "data-astro-cid-hpnw4vwy": true }), renderComponent($$result, "Icon", $$Icon, { "name": "close", "class": "icon close", "data-astro-cid-hpnw4vwy": true }));
}, "C:/Users/magol/Web Christian Astro Final/src/components/header.astro", void 0);

const $$Astro = createAstro();
const $$Especialidad = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Especialidad;
  const { imagen, titulo, body } = Astro2.props;
  const $$definedVars = defineStyleVars([{ backgroundImage: `url(${imagen})` }]);
  return renderTemplate`${maybeRenderHead()}<div class="especialidad-container" data-astro-cid-ps3ze6w4${addAttribute($$definedVars, "style")}> <div class="image-container" data-astro-cid-ps3ze6w4${addAttribute($$definedVars, "style")}> <h1 data-astro-cid-ps3ze6w4${addAttribute($$definedVars, "style")}>${titulo}</h1> </div> <div class="text-container" data-astro-cid-ps3ze6w4${addAttribute($$definedVars, "style")}> <p data-astro-cid-ps3ze6w4${addAttribute($$definedVars, "style")}>${body}</p> <p data-astro-cid-ps3ze6w4${addAttribute($$definedVars, "style")}>Saber más</p> </div> </div> `;
}, "C:/Users/magol/Web Christian Astro Final/src/components/especialidad.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@400;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Inika:wght@400;700&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet">${renderComponent($$result, "Layout", $$Layout, { "title": "Christian Rios", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<section class="seccion-hero" data-astro-cid-j7pv25f6><img src="../public/piano-hero.jpeg" class="hero-image" alt="piano" data-astro-cid-j7pv25f6><div class="hero-text" data-astro-cid-j7pv25f6><h1 class="hero-main-text" data-astro-cid-j7pv25f6>Jesús RÍOS <br data-astro-cid-j7pv25f6>PRODUCTOR MUSICAL</h1><h3 class="hero-secondary-text" data-astro-cid-j7pv25f6>En búsqueda de experiencia laboral y de expandir mis conocimientos, siéntete libre de ponerte en contacto conmigo si te interesa. </h3></div></section><section class="seccion-especialidades" data-astro-cid-j7pv25f6><h1 class="main-tittle" data-astro-cid-j7pv25f6>Especialidades</h1><div class="especialidades-container" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Especialidad", $$Especialidad, { "imagen": "public/piano-hero.jpeg", "titulo": "Productor musical", "body": "Lor", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Especialidad", $$Especialidad, { "imagen": "public/img-compositor.jpg", "titulo": "Compositor", "body": "prueba", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Especialidad", $$Especialidad, { "imagen": "public/img-profesor-musica.jpg", "titulo": "Profesor de m\xFAsica", "body": "prueba", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Especialidad", $$Especialidad, { "imagen": "public/img-interprete-piano.jpg", "titulo": "Int\xE9rprete de piano", "body": "prueba", "data-astro-cid-j7pv25f6": true })}</div></section>` })}`;
}, "C:/Users/magol/Web Christian Astro Final/src/pages/index.astro", void 0);

const $$file = "C:/Users/magol/Web Christian Astro Final/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

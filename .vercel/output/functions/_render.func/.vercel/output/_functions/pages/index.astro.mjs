import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_RhBL2oNY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.		com" crossorigin><link href="https://fonts.googleapis.com/css2?		family=Inika:wght@400;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/magol/Web Christian Astro Final/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Especialidad = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Especialidad;
  const { imagen, titulo, body } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="especialidad-container" data-astro-cid-ps3ze6w4> <div class="image-container"', " data-astro-cid-ps3ze6w4> <h1 data-astro-cid-ps3ze6w4>", '</h1> </div> <div class="text-container" data-astro-cid-ps3ze6w4> <p data-astro-cid-ps3ze6w4>', "</p> <p data-astro-cid-ps3ze6w4>Saber m\xE1s</p> </div> </div>  <script>\n  document.addEventListener('DOMContentLoaded', () => {\n    // Seleccionar el elemento que contiene la clase 'image-container'\n    const imageContainers = document.querySelectorAll('.image-container');\n    \n    // Iterar sobre cada uno de los elementos y aplicar el estilo de fondo\n    imageContainers.forEach(container => {\n      // Obtener el valor del atributo data-imagen\n      const imagen = container.getAttribute('data-imagen');\n      \n      // Aplicar el estilo de background-image\n      container.style.backgroundImage = `url(${imagen})`;\n    });\n  });\n<\/script>"], ["", '<div class="especialidad-container" data-astro-cid-ps3ze6w4> <div class="image-container"', " data-astro-cid-ps3ze6w4> <h1 data-astro-cid-ps3ze6w4>", '</h1> </div> <div class="text-container" data-astro-cid-ps3ze6w4> <p data-astro-cid-ps3ze6w4>', "</p> <p data-astro-cid-ps3ze6w4>Saber m\xE1s</p> </div> </div>  <script>\n  document.addEventListener('DOMContentLoaded', () => {\n    // Seleccionar el elemento que contiene la clase 'image-container'\n    const imageContainers = document.querySelectorAll('.image-container');\n    \n    // Iterar sobre cada uno de los elementos y aplicar el estilo de fondo\n    imageContainers.forEach(container => {\n      // Obtener el valor del atributo data-imagen\n      const imagen = container.getAttribute('data-imagen');\n      \n      // Aplicar el estilo de background-image\n      container.style.backgroundImage = \\`url(\\${imagen})\\`;\n    });\n  });\n<\/script>"])), maybeRenderHead(), addAttribute(imagen, "data-imagen"), titulo, body);
}, "C:/Users/magol/Web Christian Astro Final/src/components/especialidad.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@400;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Inika:wght@400;700&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet">${renderComponent($$result, "Layout", $$Layout, { "title": "Christian Rios", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="seccion-hero" data-astro-cid-j7pv25f6><img src="/piano-hero.jpeg" class="hero-image" alt="piano" data-astro-cid-j7pv25f6><div class="hero-text" data-astro-cid-j7pv25f6><h1 class="hero-main-text" data-astro-cid-j7pv25f6>CHRISTIAN RÍOS <br data-astro-cid-j7pv25f6>PRODUCTOR MUSICAL</h1><h3 class="hero-secondary-text" data-astro-cid-j7pv25f6>En búsqueda de experiencia laboral y de expandir mis conocimientos, siéntete libre de ponerte en contacto conmigo si te interesa. </h3></div></section><section class="seccion-especialidades" data-astro-cid-j7pv25f6><h1 class="main-tittle" data-astro-cid-j7pv25f6>Especialidades</h1><div class="especialidades-container" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Especialidad", $$Especialidad, { "imagen": "img-productor-musical.jpg", "titulo": "Productor musical", "body": "Soy productor especializado en la creaci\xF3n de m\xFAsica original y de alta calidad, con un enfoque en pop y Lofi-Hip Hop, buscando ofrecer producciones profesionales adaptadas a las necesidades de cada proyecto...", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Especialidad", $$Especialidad, { "imagen": "img-compositor.jpg", "titulo": "Compositor", "body": "Me especializo en la composici\xF3n y arreglos musicales para una amplia variedad de g\xE9neros, desde m\xFAsica cl\xE1sica hasta bandas sonoras, creando partituras profesionales en proyectos personalizados seg\xFAn las necesidades del cliente, asegurando un resultado creativo y de alta calidad.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Especialidad", $$Especialidad, { "imagen": "img-profesor-musica.jpg", "titulo": "Profesor de m\xFAsica", "body": "Como profesor de piano y lenguaje musical, ofrezco una formaci\xF3n integral que combina t\xE9cnica, teor\xEDa y expresi\xF3n personal. Cuentocon  mis 11 a\xF1os de estudio y con clases adaptadas a cada estudiante, desde principiantes hasta nivel intermedio.  Mi objetivo es fomentar el amor por la m\xFAsica en un ambiente positivo y estimulante.", "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Especialidad", $$Especialidad, { "imagen": "img-interprete-piano.jpg", "titulo": "Int\xE9rprete de piano", "body": "Pianista con m\xE1s de diez a\xF1os de experiencia y gran  formaci\xF3n acad\xE9mica. Mi repertorio abarca desde obras cl\xE1sicas hasta piezas contempor\xE1neas. Ofrezco mis servicios para eventos como bodas, conciertos y celebraciones especiales", "data-astro-cid-j7pv25f6": true })}</div></section>` })}`;
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

import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Cst2rsJz.mjs';
import { g as decodeKey } from './chunks/astro/server_RhBL2oNY.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

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
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
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
    isIndex: rawRouteData.isIndex
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
    middleware(_, next) {
      return next();
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/magol/Web%20Christian%20Astro%20Final/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html,body{margin:0;padding:0;box-sizing:border-box;font-family:system-ui,sans-serif;background:linear-gradient(270deg,#dadada,#fff,#dadada)}h3{margin:0;font-family:Inika,serif;font-weight:400;font-style:normal;color:#fff;font-size:clamp(1.2rem,2.2vw,1.4rem)}p{margin:0;font-family:Inika;font-style:normal;font-weight:700;font-size:clamp(.8rem,2vw,1rem);color:#000}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.main-tittle{text-align:center;font-family:Inika;font-style:normal;font-size:40px;font-weight:700;letter-spacing:-0 1rem;color:#fff;-webkit-text-stroke:3px #8b4513;text-shadow:2px 2px #8b4513}.especialidad-container[data-astro-cid-ps3ze6w4]{display:flex;flex-direction:column;width:47%;background-color:#f0f8ff;border-radius:20px;box-shadow:3px 3px 8px #bebebe;.image-container{width:100%;box-sizing:border-box;padding:1rem;display:flex;align-items:center;background-size:cover;background-position:center;border-radius:20px 20px 0 0;h1{margin:0;font-family:Lexend,sans-serif;font-weight:500;color:#fff;text-shadow:2px 0 black,-2px 0 black,0 2px black,0 -2px black,1px 1px black,-1px -1px black,1px -1px black,-1px 1px black}}.text-container{height:100%;display:flex;flex-direction:column;padding:1rem;box-sizing:border-box;background-color:red;p{font-size:.85rem}p:nth-of-type(2){margin-top:auto;padding-top:1rem;cursor:pointer}}}@media (max-width: 700px){.especialidad-container[data-astro-cid-ps3ze6w4]{width:100%;.text-container{p{font-size:.7rem}}}}.seccion-hero[data-astro-cid-j7pv25f6]{position:relative;height:100svh;width:100svw;.hero-image{position:absolute;height:100%;width:100%;object-fit:cover;z-index:1;object-position:30% 0px}.hero-text{position:relative;width:max(450px,30vw);z-index:2;padding-top:30vh;padding-left:15vh;.hero-main-text{font-family:Zilla Slab Highlight;color:#fff;margin:0;font-size:2.2rem}.hero-secondary-text{margin-top:20px}}}@media (max-width: 900px){.seccion-hero[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;.hero-text{width:min(80vw,500px);padding-left:0vh;.hero-main-text{font-size:clamp(2.1rem,5.4vw,2.6rem);text-align:center}.hero-main-text br{display:block}}}}.seccion-especialidades[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;width:100svw;height:500px;h1{margin:0;margin-top:6rem}.especialidades-container{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;padding-inline:min(15vh,12vw);padding-block:3rem;box-sizing:border-box;gap:2rem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/magol/Web Christian Astro Final/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/magol/Web Christian Astro Final/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Dn59dk_J.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/img-compositor.jpg","/img-interprete-piano.jpg","/img-productor-musical.jpg","/img-profesor-musica.jpg","/piano-hero.jpeg","/WhatsApp Image 2024-07-01 at 22.30.58 (1).jpeg","/WhatsApp Image 2024-07-01 at 22.30.58 (2).jpeg","/WhatsApp Image 2024-07-01 at 22.30.58.jpeg","/WhatsApp Image 2024-07-01 at 22.30.59 (1).jpeg","/WhatsApp Image 2024-07-01 at 22.30.59.jpeg","/WhatsApp Image 2024-07-01 at 22.31.00 (1).jpeg","/WhatsApp Image 2024-07-01 at 22.31.00.jpeg","/WhatsApp Image 2024-07-01 at 22.31.01.jpeg","/WhatsApp Image 2024-07-01 at 22.32.13.jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (1).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (2).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (3).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (4).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (5).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (6).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14.jpeg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"8hUnOX5iztOjWupNsoZMRje+tgzTKW9QClkHWl5GBrs=","experimentalEnvGetSecretEnabled":false});

export { manifest };

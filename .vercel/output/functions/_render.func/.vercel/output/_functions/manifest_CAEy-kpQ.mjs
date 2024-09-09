import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_l7YYxw0a.mjs';
import { d as decodeKey } from './chunks/astro/server_3XojiP7m.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/magol/Web%20Christian%20Astro%20Final/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html,body{margin:0;padding:0;box-sizing:border-box;font-family:system-ui,sans-serif;background:linear-gradient(270deg,#dadada,#fff,#dadada)}h3{margin:0;font-family:Inika,serif;font-weight:400;font-style:normal;color:#fff;font-size:clamp(1rem,2vw,1.15rem)}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}header[data-astro-cid-hpnw4vwy]{position:absolute;z-index:10;max-width:100vw;max-height:10vh;display:flex;background:#813232;box-shadow:0 4px 12px #00000040;transition:max-height .8s ease-out;flex-wrap:wrap;padding-block:.5rem;overflow:hidden}header[data-astro-cid-hpnw4vwy].open{max-height:100vh}.main-header[data-astro-cid-hpnw4vwy]{height:10vh;width:100%;padding-inline:clamp(1rem,2vw,3rem);display:flex;align-items:center}.flex-container[data-astro-cid-hpnw4vwy]{max-height:10vh;display:flex;align-items:center;gap:20px}.flex-container[data-astro-cid-hpnw4vwy] img[data-astro-cid-hpnw4vwy]{height:8vh;aspect-ratio:1 / 1;object-fit:cover;border-radius:50%}#navs-container[data-astro-cid-hpnw4vwy]{display:flex;margin-left:auto}#burger-menu-container[data-astro-cid-hpnw4vwy]{display:none;margin-left:auto;cursor:pointer}.icon[data-astro-cid-hpnw4vwy]{font-size:2.7rem}.icon[data-astro-cid-hpnw4vwy].menu,.icon[data-astro-cid-hpnw4vwy].close{display:none}.icon[data-astro-cid-hpnw4vwy].active{display:block}#extended-header[data-astro-cid-hpnw4vwy]{display:flex;opacity:0;transition:opacity .3s ease-out,visibility .3s ease-out;width:100vw;flex-direction:column;justify-content:center;align-items:center;gap:20px;padding-block:1rem;visibility:hidden}#extended-header[data-astro-cid-hpnw4vwy].open{opacity:1;visibility:visible}#extended-header[data-astro-cid-hpnw4vwy] h3[data-astro-cid-hpnw4vwy]{text-align:center;width:max-content}@media (max-width: 900px){#navs-container[data-astro-cid-hpnw4vwy]{display:none}.flex-container[data-astro-cid-hpnw4vwy] h3[data-astro-cid-hpnw4vwy]{font-size:clamp(26px,5.4vw,40px)}.flex-container[data-astro-cid-hpnw4vwy] h3[data-astro-cid-hpnw4vwy] br[data-astro-cid-hpnw4vwy]{display:none}#burger-menu-container[data-astro-cid-hpnw4vwy]{display:block}}.hero-container[data-astro-cid-j7pv25f6]{position:relative;height:100svh;width:100svw;.hero-image{position:absolute;height:100%;width:100%;object-fit:cover;z-index:1;object-position:30% 0px}.hero-text{position:relative;width:max(450px,30vw);z-index:2;padding-top:30vh;padding-left:10vh;.hero-main-text{font-family:Zilla Slab Highlight;color:#fff;margin:0;font-size:clamp(26px,4vw,40px)}.hero-secondary-text{margin-top:20px}}}@media (max-width: 900px){.hero-container[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;.hero-text{width:min(80vw,500px);padding-left:0vh;.hero-main-text{font-size:clamp(26px,5.4vw,40px)}.hero-main-text br{display:block}}}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/magol/Web Christian Astro Final/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/magol/Web Christian Astro Final/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_CAEy-kpQ.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/piano-hero.jpeg","/WhatsApp Image 2024-07-01 at 22.30.58 (1).jpeg","/WhatsApp Image 2024-07-01 at 22.30.58 (2).jpeg","/WhatsApp Image 2024-07-01 at 22.30.58.jpeg","/WhatsApp Image 2024-07-01 at 22.30.59 (1).jpeg","/WhatsApp Image 2024-07-01 at 22.30.59.jpeg","/WhatsApp Image 2024-07-01 at 22.31.00 (1).jpeg","/WhatsApp Image 2024-07-01 at 22.31.00.jpeg","/WhatsApp Image 2024-07-01 at 22.31.01.jpeg","/WhatsApp Image 2024-07-01 at 22.32.13.jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (1).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (2).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (3).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (4).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (5).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14 (6).jpeg","/WhatsApp Image 2024-07-01 at 22.32.14.jpeg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"FjBI/lxe0B5zpLks1hdGvjg0hqZebgzcTQEUDfz0hfE=","experimentalEnvGetSecretEnabled":false});

export { manifest };

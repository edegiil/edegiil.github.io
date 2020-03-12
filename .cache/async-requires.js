// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-devlog-js": () => import("./../src/templates/devlog.js" /* webpackChunkName: "component---src-templates-devlog-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-404-index-js": () => import("./../src/pages/404/index.js" /* webpackChunkName: "component---src-pages-404-index-js" */),
  "component---src-pages-about-index-js": () => import("./../src/pages/About/index.js" /* webpackChunkName: "component---src-pages-about-index-js" */),
  "component---src-pages-contact-index-js": () => import("./../src/pages/Contact/index.js" /* webpackChunkName: "component---src-pages-contact-index-js" */),
  "component---src-pages-devlog-index-js": () => import("./../src/pages/Devlog/index.js" /* webpackChunkName: "component---src-pages-devlog-index-js" */),
  "component---src-pages-projects-index-js": () => import("./../src/pages/Projects/index.js" /* webpackChunkName: "component---src-pages-projects-index-js" */)
}


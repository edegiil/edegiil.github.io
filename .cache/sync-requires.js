const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-devlog-js": hot(preferDefault(require("/Users/wingtree/dev/wingtree.github.io/src/templates/devlog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/wingtree/dev/wingtree.github.io/src/pages/index.js"))),
  "component---src-pages-404-index-js": hot(preferDefault(require("/Users/wingtree/dev/wingtree.github.io/src/pages/404/index.js"))),
  "component---src-pages-about-index-js": hot(preferDefault(require("/Users/wingtree/dev/wingtree.github.io/src/pages/About/index.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/Users/wingtree/dev/wingtree.github.io/src/pages/Contact/index.js"))),
  "component---src-pages-devlog-index-js": hot(preferDefault(require("/Users/wingtree/dev/wingtree.github.io/src/pages/Devlog/index.js"))),
  "component---src-pages-projects-index-js": hot(preferDefault(require("/Users/wingtree/dev/wingtree.github.io/src/pages/Projects/index.js")))
}


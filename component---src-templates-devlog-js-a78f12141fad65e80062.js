(self.webpackChunkedegiil_github_io=self.webpackChunkedegiil_github_io||[]).push([[297],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var r=n(9489),o=n(7067);function i(t,n,l){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),l=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),o=n(319),i=n(9713),l=n(7316);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=n(7294),s=n(4983).mdx,p=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=l(e,["scope","children"]),c=p(t),d=a.useMemo((function(){if(!n)return null;var e=u({React:a,mdx:s},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,t]);return a.createElement(d,u({},i))}},6883:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(5444),i=n(9),l=n(6725),c=n(7932),u=i.ZP.div.withConfig({displayName:"devlog__Background",componentId:"sc-1nfxsr-0"})(["display:flex;min-height:100vh;width:100vw;padding:81px 0;flex-direction:column;align-items:center;"]),a=i.ZP.section.withConfig({displayName:"devlog__ContentBox",componentId:"sc-1nfxsr-1"})(["display:flex;flex-direction:column;align-items:flex-start;width:900px;@media ","{width:500px;}@media ","{width:350px;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile})),s=i.ZP.div.withConfig({displayName:"devlog__NavGroup",componentId:"sc-1nfxsr-2"})(["display:flex;flex-direction:row;align-items:center;margin-bottom:16px;"]),p=i.ZP.div.withConfig({displayName:"devlog__NavText",componentId:"sc-1nfxsr-3"})([""]),d=i.ZP.img.withConfig({displayName:"devlog__Icon",componentId:"sc-1nfxsr-4"})(["width:30px;height:30px;"]),f=i.ZP.div.withConfig({displayName:"devlog__TitleGroup",componentId:"sc-1nfxsr-5"})(["display:flex;flex-direction:row;align-items:baseline;margin-bottom:16px;@media ","{width:500px;flex-direction:column;}@media ","{width:350px;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile})),x=i.ZP.h2.withConfig({displayName:"devlog__Title",componentId:"sc-1nfxsr-6"})(["margin:0;"]),M=i.ZP.div.withConfig({displayName:"devlog__Category",componentId:"sc-1nfxsr-7"})(["margin:0;font-weight:100;"]),m=i.ZP.h3.withConfig({displayName:"devlog__Subtitle",componentId:"sc-1nfxsr-8"})(["margin:0;margin-bottom:8px;font-weight:100;"]),g=i.ZP.div.withConfig({displayName:"devlog__DateCreated",componentId:"sc-1nfxsr-9"})(["font-weight:100;"]),y=i.ZP.main.withConfig({displayName:"devlog__Content",componentId:"sc-1nfxsr-10"})(["width:900px;@media ","{width:500px;}@media ","{width:350px;}img{max-width:100%;max-height:400px;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile}));t.default=function(e){var t=e.data.mdx,n=t.body,i=t.frontmatter,I=i.category,h=i.title,D=i.summary,w=i.date_created,j=i.date_updated;return r.createElement(u,null,r.createElement(a,null,r.createElement(o.Link,{to:"/devlog",replace:!0},r.createElement(s,null,r.createElement(d,{src:c.Z}),r.createElement(p,null,"돌아가기"))),r.createElement(f,null,r.createElement(x,null,h),r.createElement(M,null,I)),r.createElement(m,null,D),r.createElement(g,null,"작성일자 : "+w),j&&r.createElement(g,null,"최종수정 : "+j),r.createElement(y,null,r.createElement(l.MDXRenderer,null,n))))}},7932:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4wNjA0IDcuOTM5NTVDMTkuMzQxNiA4LjIyMDg0IDE5LjQ5OTYgOC42MDIzIDE5LjQ5OTYgOS4wMDAwNUMxOS40OTk2IDkuMzk3NzkgMTkuMzQxNiA5Ljc3OTI1IDE5LjA2MDQgMTAuMDYwNUwxNC4xMjA5IDE1TDE5LjA2MDQgMTkuOTM5NUMxOS4zMzM3IDIwLjIyMjQgMTkuNDg0OSAyMC42MDE0IDE5LjQ4MTQgMjAuOTk0NkMxOS40NzggMjEuMzg3OSAxOS4zMjAzIDIxLjc2NDIgMTkuMDQyMiAyMi4wNDIzQzE4Ljc2NCAyMi4zMjA0IDE4LjM4NzggMjIuNDc4MSAxNy45OTQ1IDIyLjQ4MTZDMTcuNjAxMiAyMi40ODUgMTcuMjIyMyAyMi4zMzM4IDE2LjkzOTQgMjIuMDYwNUwxMC45Mzk0IDE2LjA2MDVDMTAuNjU4MiAxNS43NzkzIDEwLjUwMDIgMTUuMzk3OCAxMC41MDAyIDE1QzEwLjUwMDIgMTQuNjAyMyAxMC42NTgyIDE0LjIyMDggMTAuOTM5NCAxMy45Mzk1TDE2LjkzOTQgNy45Mzk1NUMxNy4yMjA3IDcuNjU4MzQgMTcuNjAyMiA3LjUwMDM3IDE3Ljk5OTkgNy41MDAzN0MxOC4zOTc3IDcuNTAwMzcgMTguNzc5MSA3LjY1ODM0IDE5LjA2MDQgNy45Mzk1NVoiIGZpbGw9IiM4QThBOEEiLz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-templates-devlog-js-a78f12141fad65e80062.js.map
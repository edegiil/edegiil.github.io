(self.webpackChunkedegiil_github_io=self.webpackChunkedegiil_github_io||[]).push([[769],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var i=n(7228);e.exports=function(e){if(Array.isArray(e))return i(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var i=n(9489),r=n(7067);function M(t,n,o){return r()?(e.exports=M=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=M=function(e,t,n){var r=[null];r.push.apply(r,t);var M=new(Function.bind.apply(e,r));return n&&i(M,n.prototype),M},e.exports.default=e.exports,e.exports.__esModule=!0),M.apply(null,arguments)}e.exports=M,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var i=n(3646),r=n(6860),M=n(379),o=n(8206);e.exports=function(e){return i(e)||r(e)||M(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var i=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,n){var i=n(3395);e.exports={MDXRenderer:i}},3395:function(e,t,n){var i=n(9100),r=n(319),M=n(9713),o=n(7316);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=n(7294),a=n(4983).mdx,N=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,M=o(e,["scope","children"]),u=N(t),j=g.useMemo((function(){if(!n)return null;var e=c({React:g,mdx:a},u),t=Object.keys(e),M=t.map((function(t){return e[t]}));return i(Function,["_fn"].concat(r(t),[""+n])).apply(void 0,[{}].concat(r(M)))}),[n,t]);return g.createElement(j,c({},M))}},3476:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i=n(7294),r=n(9);var M=function(){var e=(new Date).getFullYear();return"@"+(2020===e?"2020":"2020 - "+e)+" edegil"},o=r.ZP.footer.withConfig({displayName:"footer__FooterWrapper",componentId:"rvb7y4-0"})(["position:absolute;z-index:10;left:0;bottom:0;width:100vw;height:40px;display:flex;align-items:center;justify-content:center;@media ","{flex-direction:column;height:60px;}"],(function(e){return e.theme.mobile})),u=r.ZP.div.withConfig({displayName:"footer__Statement",componentId:"rvb7y4-1"})(["font-size:",";font-weight:100;color:",";@media ","{}@media ","{font-size:",";}"],(function(e){return e.theme.TINY_SIZE}),(function(e){return e.theme.DARK_COLOR}),(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile}),(function(e){return e.theme.MICRO_SIZE})),c=r.ZP.span.withConfig({displayName:"footer__Highlight",componentId:"rvb7y4-2"})(["color:hsl(263,68%,51%);"]),g=r.ZP.div.withConfig({displayName:"footer__Line",componentId:"rvb7y4-3"})(["width:50px;height:0.5px;background-color:",";margin:0 16px;@media ","{display:none;}"],(function(e){return e.theme.DARK_COLOR}),(function(e){return e.theme.mobile})),a=r.ZP.div.withConfig({displayName:"footer__LinkWrapper",componentId:"rvb7y4-4"})(["display:grid;"]),N=r.ZP.button.withConfig({displayName:"footer__Link",componentId:"rvb7y4-5"})(["background-image:url(",");background-size:cover;width:16px;height:16px;@media ","{width:14px;height:14px;}"],(function(e){return e.icon}),(function(e){return e.theme.mobile}));var j=function(){var e;return i.createElement(o,null,i.createElement(u,null,M(),". All Rights Reserved. powered by",i.createElement(c,null," Gatsby")),i.createElement(g,null),i.createElement(a,null,i.createElement(N,{onClick:(e="https://github.com/edegiil",function(){window.open(e)}),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgBjVILdYNAELxbBDQSqINKKBhIHDRR0FZBqYOgINRBaoBcHcRBkZAKADpD9u5dCPnMe/fYPWbn9mfNCM+AiMxhLnBS3llr933f77uu+3TONTHfRoEzBH7AfDPXsVahQxBgcJIkO7zyZO4AM2rbNqOI8IIvM5g/4K5gN8pt9Bgt4R0cR65mayxeT+H8akBV1/XKZ+XTjJHneYHPEAzBTLyS4s8bU8GKB28gdiFIKdQNxbW5ATYwcucSNe4wHtEUNDPPSyX6NzP3I3AlUhuW6FakcgYBToYC30FNZMOpXAnmxDbe59itru4OfgVF3NkX2FvO3PcEFM791RzXO6QPzqOA5GCXOEuQthD5mnicQktz2qeSD4gqFawHJjeygl/GExnvhG5lMZTtCbjMcH5YjpZ0CSW5FxeNjcK6ni0UV3hqSv960ryQYWJMNgAAAABJRU5ErkJggg=="})))}},3623:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=n(7294),r=n(9),M=n(5444),o=n(6725),u=n(9528),c=n(3476),g=n(3751),a=n(7932),N=n(5437),j=r.ZP.main.withConfig({displayName:"project__Main",componentId:"sc-1nddhbz-0"})(["display:grid;row-gap:36px;box-sizing:border-box;min-height:100vh;width:800px;padding:128px 0 50px;flex-direction:column;align-items:center;align-content:start;@media ","{width:80%;row-gap:24px;}@media ","{width:90%;row-gap:16px;padding-bottom:60px;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile})),I=(0,r.ZP)(M.Link).withConfig({displayName:"project__NavGroup",componentId:"sc-1nddhbz-1"})(["display:flex;flex-direction:row;align-items:center;width:fit-content;"]),l=r.ZP.div.withConfig({displayName:"project__NavText",componentId:"sc-1nddhbz-2"})([""]),A=r.ZP.img.withConfig({displayName:"project__NavIcon",componentId:"sc-1nddhbz-3"})(["width:30px;height:30px;"]),D=r.ZP.section.withConfig({displayName:"project__TitleGroup",componentId:"sc-1nddhbz-4"})(["display:flex;flex-direction:column;justify-content:center;width:800px;height:250px;@media ","{width:100%;}@media ","{width:100%;}&::after{content:'';background-color:",";background-image:url(",");background-size:cover;background-position:center;background-repeat:no-repeat;filter:brightness(0.5);overflow:hidden;width:100vw;height:250px;z-index:-1;left:0;position:absolute;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile}),(function(e){return e.theme.DARK_COLOR}),(function(e){return e.backgroundImage})),d=r.ZP.div.withConfig({displayName:"project__Upside",componentId:"sc-1nddhbz-5"})(["margin-bottom:32px;"]),p=r.ZP.div.withConfig({displayName:"project__Title",componentId:"sc-1nddhbz-6"})(["display:flex;align-items:center;margin:0;margin-right:8px;"]),x=r.ZP.h2.withConfig({displayName:"project__TitleText",componentId:"sc-1nddhbz-7"})(["margin:0;@media ","{font-size:","}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.BIG_SIZE})),s=r.ZP.a.withConfig({displayName:"project__TitleLink",componentId:"sc-1nddhbz-8"})(["height:20px;margin-left:16px;"]),y=r.ZP.img.withConfig({displayName:"project__LinkIcon",componentId:"sc-1nddhbz-9"})(["width:20px;height:20px;"]),m=r.ZP.div.withConfig({displayName:"project__Downside",componentId:"sc-1nddhbz-10"})([""]),z=r.ZP.div.withConfig({displayName:"project__Subtitle",componentId:"sc-1nddhbz-11"})(["margin:0;font-weight:100;font-size:",";@media ","{font-size:","}"],(function(e){return e.theme.BIG_SIZE}),(function(e){return e.theme.tablet}),(function(e){return e.theme.NORMAL_SIZE})),f=r.ZP.div.withConfig({displayName:"project__InfoText",componentId:"sc-1nddhbz-12"})(["margin:0;line-height:1.25rem;"]),L=r.ZP.section.withConfig({displayName:"project__Content",componentId:"sc-1nddhbz-13"})(["width:800px;img{max-width:100%;max-height:1200px;}@media ","{width:100%;}@media ","{width:100%;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile}));var T=function(e){var t=e.data.mdx,n=t.body,r=t.frontmatter,M=r.title,T=r.summary,h=r.time,O=r.platform,w=r.link,E=r.repository,b=r.thumbnail;return i.createElement(u.Z,{withHeader:!0},i.createElement(g.Z,{title:"프로젝트 "+M+" | edegiil.github.io",description:T,image:b}),i.createElement(j,null,i.createElement(I,{to:"/project",replace:!0},i.createElement(A,{src:a.Z,alt:"goback"}),i.createElement(l,null,"돌아가기")),i.createElement(D,{backgroundImage:b},i.createElement(d,null,i.createElement(p,null,i.createElement(x,null,M),E&&i.createElement(s,{target:"_blank",rel:"noreferrer noopener",href:E},i.createElement(y,{src:N.Z})),w&&i.createElement(s,{target:"_blank",rel:"noreferrer noopener",href:w},i.createElement(y,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNi44NzUgMTIuNUgxNS42MjVDMTUuNDU5MiAxMi41IDE1LjMwMDMgMTIuNTY1OCAxNS4xODMxIDEyLjY4MzFDMTUuMDY1OCAxMi44MDAzIDE1IDEyLjk1OTIgMTUgMTMuMTI1VjE3LjVIMi41VjVIOC4xMjVDOC4yOTA3NiA1IDguNDQ5NzMgNC45MzQxNSA4LjU2Njk0IDQuODE2OTRDOC42ODQxNSA0LjY5OTczIDguNzUgNC41NDA3NiA4Ljc1IDQuMzc1VjMuMTI1QzguNzUgMi45NTkyNCA4LjY4NDE1IDIuODAwMjcgOC41NjY5NCAyLjY4MzA2QzguNDQ5NzMgMi41NjU4NSA4LjI5MDc2IDIuNSA4LjEyNSAyLjVIMS44NzVDMS4zNzc3MiAyLjUgMC45MDA4MDUgMi42OTc1NCAwLjU0OTE3NSAzLjA0OTE3QzAuMTk3NTQ0IDMuNDAwODEgMCAzLjg3NzcyIDAgNC4zNzVMMCAxOC4xMjVDMCAxOC42MjIzIDAuMTk3NTQ0IDE5LjA5OTIgMC41NDkxNzUgMTkuNDUwOEMwLjkwMDgwNSAxOS44MDI1IDEuMzc3NzIgMjAgMS44NzUgMjBIMTUuNjI1QzE2LjEyMjMgMjAgMTYuNTk5MiAxOS44MDI1IDE2Ljk1MDggMTkuNDUwOEMxNy4zMDI1IDE5LjA5OTIgMTcuNSAxOC42MjIzIDE3LjUgMTguMTI1VjEzLjEyNUMxNy41IDEyLjk1OTIgMTcuNDM0MiAxMi44MDAzIDE3LjMxNjkgMTIuNjgzMUMxNy4xOTk3IDEyLjU2NTggMTcuMDQwOCAxMi41IDE2Ljg3NSAxMi41Wk0xOS4wNjI1IDBIMTQuMDYyNUMxMy4yMjc3IDAgMTIuODEwNSAxLjAxMjExIDEzLjM5ODQgMS42MDE1NkwxNC43OTQxIDIuOTk3MjdMNS4yNzM0NCAxMi41MTQ1QzUuMTg2MDQgMTIuNjAxNiA1LjExNjY5IDEyLjcwNSA1LjA2OTM3IDEyLjgxOUM1LjAyMjA2IDEyLjkzMyA0Ljk5NzcgMTMuMDU1MSA0Ljk5NzcgMTMuMTc4NUM0Ljk5NzcgMTMuMzAxOSA1LjAyMjA2IDEzLjQyNDEgNS4wNjkzNyAxMy41MzhDNS4xMTY2OSAxMy42NTIgNS4xODYwNCAxMy43NTU1IDUuMjczNDQgMTMuODQyNkw2LjE1ODk4IDE0LjcyNjZDNi4yNDYwOCAxNC44MTQgNi4zNDk1NyAxNC44ODMzIDYuNDYzNTMgMTQuOTMwNkM2LjU3NzQ4IDE0Ljk3NzkgNi42OTk2NiAxNS4wMDIzIDYuODIzMDUgMTUuMDAyM0M2Ljk0NjQzIDE1LjAwMjMgNy4wNjg2MSAxNC45Nzc5IDcuMTgyNTYgMTQuOTMwNkM3LjI5NjUyIDE0Ljg4MzMgNy40MDAwMSAxNC44MTQgNy40ODcxMSAxNC43MjY2TDE3LjAwMzEgNS4yMDc4MUwxOC4zOTg0IDYuNjAxNTZDMTguOTg0NCA3LjE4NzUgMjAgNi43NzczNCAyMCA1LjkzNzVWMC45Mzc1QzIwIDAuNjg4ODYgMTkuOTAxMiAwLjQ1MDQwMyAxOS43MjU0IDAuMjc0NTg3QzE5LjU0OTYgMC4wOTg3NzIgMTkuMzExMSAwIDE5LjA2MjUgMFYwWiIgZmlsbD0iI0QwRDBEMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="}))),i.createElement(z,null,T)),i.createElement(m,null,i.createElement(f,null,h),i.createElement(f,null,O))),i.createElement(L,null,i.createElement(o.MDXRenderer,null,n))),i.createElement(c.Z,null))}},7932:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4wNjA0IDcuOTM5NTVDMTkuMzQxNiA4LjIyMDg0IDE5LjQ5OTYgOC42MDIzIDE5LjQ5OTYgOS4wMDAwNUMxOS40OTk2IDkuMzk3NzkgMTkuMzQxNiA5Ljc3OTI1IDE5LjA2MDQgMTAuMDYwNUwxNC4xMjA5IDE1TDE5LjA2MDQgMTkuOTM5NUMxOS4zMzM3IDIwLjIyMjQgMTkuNDg0OSAyMC42MDE0IDE5LjQ4MTQgMjAuOTk0NkMxOS40NzggMjEuMzg3OSAxOS4zMjAzIDIxLjc2NDIgMTkuMDQyMiAyMi4wNDIzQzE4Ljc2NCAyMi4zMjA0IDE4LjM4NzggMjIuNDc4MSAxNy45OTQ1IDIyLjQ4MTZDMTcuNjAxMiAyMi40ODUgMTcuMjIyMyAyMi4zMzM4IDE2LjkzOTQgMjIuMDYwNUwxMC45Mzk0IDE2LjA2MDVDMTAuNjU4MiAxNS43NzkzIDEwLjUwMDIgMTUuMzk3OCAxMC41MDAyIDE1QzEwLjUwMDIgMTQuNjAyMyAxMC42NTgyIDE0LjIyMDggMTAuOTM5NCAxMy45Mzk1TDE2LjkzOTQgNy45Mzk1NUMxNy4yMjA3IDcuNjU4MzQgMTcuNjAyMiA3LjUwMDM3IDE3Ljk5OTkgNy41MDAzN0MxOC4zOTc3IDcuNTAwMzcgMTguNzc5MSA3LjY1ODM0IDE5LjA2MDQgNy45Mzk1NVoiIGZpbGw9IiM4QThBOEEiLz4KPC9zdmc+Cg=="},5437:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIgLjVjLTYuNjMgMC0xMiA1LjI4LTEyIDExLjc5MiAwIDUuMjExIDMuNDM4IDkuNjMgOC4yMDUgMTEuMTg4LjYuMTExLjgyLS4yNTQuODItLjU2NyAwLS4yOC0uMDEtMS4wMjItLjAxNS0yLjAwNS0zLjMzOC43MTEtNC4wNDItMS41ODItNC4wNDItMS41ODItLjU0Ni0xLjM2MS0xLjMzNS0xLjcyNS0xLjMzNS0xLjcyNS0xLjA4Ny0uNzMxLjA4NC0uNzE2LjA4NC0uNzE2IDEuMjA1LjA4MiAxLjgzOCAxLjIxNSAxLjgzOCAxLjIxNSAxLjA3IDEuODAzIDIuODA5IDEuMjgyIDMuNDk1Ljk4MS4xMDgtLjc2My40MTctMS4yODIuNzYtMS41NzctMi42NjUtLjI5NS01LjQ2Ni0xLjMwOS01LjQ2Ni01LjgyNyAwLTEuMjg3LjQ2NS0yLjMzOSAxLjIzNS0zLjE2NC0uMTM1LS4yOTgtLjU0LTEuNDk3LjEwNS0zLjEyMSAwIDAgMS4wMDUtLjMxNiAzLjMgMS4yMDkuOTYtLjI2MiAxLjk4LS4zOTIgMy0uMzk4IDEuMDIuMDA2IDIuMDQuMTM2IDMgLjM5OCAyLjI4LTEuNTI1IDMuMjg1LTEuMjA5IDMuMjg1LTEuMjA5LjY0NSAxLjYyNC4yNCAyLjgyMy4xMiAzLjEyMS43NjUuODI1IDEuMjMgMS44NzcgMS4yMyAzLjE2NCAwIDQuNTMtMi44MDUgNS41MjctNS40NzUgNS44MTcuNDIuMzU0LjgxIDEuMDc3LjgxIDIuMTgyIDAgMS41NzgtLjAxNSAyLjg0Ni0uMDE1IDMuMjI5IDAgLjMwOS4yMS42NzguODI1LjU2IDQuODAxLTEuNTQ4IDguMjM2LTUuOTcgOC4yMzYtMTEuMTczIDAtNi41MTItNS4zNzMtMTEuNzkyLTEyLTExLjc5MnoiIGZpbGw9IiNDMkMyQzIiLz48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-templates-project-js-e2af3f742d6f1a47a162.js.map
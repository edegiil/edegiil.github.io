(self.webpackChunkedegiil_github_io=self.webpackChunkedegiil_github_io||[]).push([[769],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var M=0,n=new Array(t);M<t;M++)n[M]=e[M];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,M){var n=M(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,M){var n=M(9489),i=M(7067);function u(t,M,r){return i()?(e.exports=u=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=u=function(e,t,M){var i=[null];i.push.apply(i,t);var u=new(Function.bind.apply(e,i));return M&&n(u,M.prototype),u},e.exports.default=e.exports,e.exports.__esModule=!0),u.apply(null,arguments)}e.exports=u,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,M){var n=M(3646),i=M(6860),u=M(379),r=M(8206);e.exports=function(e){return n(e)||i(e)||u(e)||r()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,M){var n=M(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var M=Object.prototype.toString.call(e).slice(8,-1);return"Object"===M&&e.constructor&&(M=e.constructor.name),"Map"===M||"Set"===M?Array.from(e):"Arguments"===M||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,M){var n=M(3395);e.exports={MDXRenderer:n}},3395:function(e,t,M){var n=M(9100),i=M(319),u=M(9713),r=M(7316);function o(e,t){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),M.push.apply(M,n)}return M}function N(e){for(var t=1;t<arguments.length;t++){var M=null!=arguments[t]?arguments[t]:{};t%2?o(Object(M),!0).forEach((function(t){u(e,t,M[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):o(Object(M)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(M,t))}))}return e}var c=M(7294),D=M(4983).mdx,I=M(9480).useMDXScope;e.exports=function(e){var t=e.scope,M=e.children,u=r(e,["scope","children"]),o=I(t),j=c.useMemo((function(){if(!M)return null;var e=N({React:c,mdx:D},o),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(i(t),[""+M])).apply(void 0,[{}].concat(i(u)))}),[M,t]);return c.createElement(j,N({},u))}},4959:function(e,t,M){"use strict";M.r(t),M.d(t,{default:function(){return T}});var n=M(7294),i=M(9),u=M(5444),r=M(6725),o=M(7932),N=M(3982),c=i.ZP.div.withConfig({displayName:"project__Background",componentId:"sc-1nddhbz-0"})(["display:flex;height:100vh;width:100vw;padding:81px 0;flex-direction:column;align-items:center;"]),D=i.ZP.section.withConfig({displayName:"project__ContentBox",componentId:"sc-1nddhbz-1"})(["display:flex;flex-direction:column;align-items:flex-start;width:900px;padding-bottom:24px;@media ","{width:500px;}@media ","{width:350px;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile})),I=i.ZP.div.withConfig({displayName:"project__NavGroup",componentId:"sc-1nddhbz-2"})(["display:flex;flex-direction:row;align-items:center;margin-bottom:16px;"]),j=i.ZP.div.withConfig({displayName:"project__NavText",componentId:"sc-1nddhbz-3"})([""]),g=i.ZP.img.withConfig({displayName:"project__Icon",componentId:"sc-1nddhbz-4"})(["width:30px;height:30px;"]),x=i.ZP.div.withConfig({displayName:"project__TitleGroup",componentId:"sc-1nddhbz-5"})(["display:flex;align-items:center;width:900px;margin-bottom:24px;@media ","{width:500px;}@media ","{width:350px;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile})),a=i.ZP.h2.withConfig({displayName:"project__Title",componentId:"sc-1nddhbz-6"})(["margin:0;margin-right:8px;font-weight:400;@media ","{font-size:","}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.BIG_SIZE})),y=i.ZP.img.withConfig({displayName:"project__ProjectLink",componentId:"sc-1nddhbz-7"})(["cursor:pointer;width:30px;height:30px;margin-left:8px;"]),l=i.ZP.div.withConfig({displayName:"project__InfoGroup",componentId:"sc-1nddhbz-8"})(["width:900px;margin-bottom:8px;@media ","{width:500px;}@media ","{width:350px;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile})),A=i.ZP.h3.withConfig({displayName:"project__Subtitle",componentId:"sc-1nddhbz-9"})(["margin:0;font-weight:100;@media ","{font-size:","}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.NORMAL_SIZE})),p=i.ZP.div.withConfig({displayName:"project__InfoText",componentId:"sc-1nddhbz-10"})(["margin:0;"]),d=i.ZP.main.withConfig({displayName:"project__ContentWrapper",componentId:"sc-1nddhbz-11"})(["width:900px;@media ","{width:500px;}@media ","{width:350px;}img{max-width:100%;max-height:1200px;}"],(function(e){return e.theme.tablet}),(function(e){return e.theme.mobile}));var T=function(e){var t=e.data.mdx,M=t.body,i=t.frontmatter,T=i.title,z=i.summary,L=i.time,s=i.platform,E=i.link,m=i.repository,O=(0,n.useCallback)((function(){window.open(E)}),[E]),f=(0,n.useCallback)((function(){window.open(m)}),[m]);return n.createElement(c,null,n.createElement(D,null,n.createElement(u.Link,{to:"/project",replace:!0},n.createElement(I,null,n.createElement(g,{src:o.Z}),n.createElement(j,null,"돌아가기"))),n.createElement(x,null,n.createElement(a,null,T),E&&n.createElement(y,{src:N.Z,onClick:O}),m&&n.createElement(y,{src:"data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIgLjVjLTYuNjMgMC0xMiA1LjI4LTEyIDExLjc5MiAwIDUuMjExIDMuNDM4IDkuNjMgOC4yMDUgMTEuMTg4LjYuMTExLjgyLS4yNTQuODItLjU2NyAwLS4yOC0uMDEtMS4wMjItLjAxNS0yLjAwNS0zLjMzOC43MTEtNC4wNDItMS41ODItNC4wNDItMS41ODItLjU0Ni0xLjM2MS0xLjMzNS0xLjcyNS0xLjMzNS0xLjcyNS0xLjA4Ny0uNzMxLjA4NC0uNzE2LjA4NC0uNzE2IDEuMjA1LjA4MiAxLjgzOCAxLjIxNSAxLjgzOCAxLjIxNSAxLjA3IDEuODAzIDIuODA5IDEuMjgyIDMuNDk1Ljk4MS4xMDgtLjc2My40MTctMS4yODIuNzYtMS41NzctMi42NjUtLjI5NS01LjQ2Ni0xLjMwOS01LjQ2Ni01LjgyNyAwLTEuMjg3LjQ2NS0yLjMzOSAxLjIzNS0zLjE2NC0uMTM1LS4yOTgtLjU0LTEuNDk3LjEwNS0zLjEyMSAwIDAgMS4wMDUtLjMxNiAzLjMgMS4yMDkuOTYtLjI2MiAxLjk4LS4zOTIgMy0uMzk4IDEuMDIuMDA2IDIuMDQuMTM2IDMgLjM5OCAyLjI4LTEuNTI1IDMuMjg1LTEuMjA5IDMuMjg1LTEuMjA5LjY0NSAxLjYyNC4yNCAyLjgyMy4xMiAzLjEyMS43NjUuODI1IDEuMjMgMS44NzcgMS4yMyAzLjE2NCAwIDQuNTMtMi44MDUgNS41MjctNS40NzUgNS44MTcuNDIuMzU0LjgxIDEuMDc3LjgxIDIuMTgyIDAgMS41NzgtLjAxNSAyLjg0Ni0uMDE1IDMuMjI5IDAgLjMwOS4yMS42NzguODI1LjU2IDQuODAxLTEuNTQ4IDguMjM2LTUuOTcgOC4yMzYtMTEuMTczIDAtNi41MTItNS4zNzMtMTEuNzkyLTEyLTExLjc5MnoiIGZpbGw9IiM4QThBOEEiLz48L3N2Zz4=",onClick:f})),n.createElement(l,null,n.createElement(A,null,z),n.createElement(p,null,s+" | "+L)),n.createElement(d,null,n.createElement(r.MDXRenderer,null,M))))}},7932:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS4wNjA0IDcuOTM5NTVDMTkuMzQxNiA4LjIyMDg0IDE5LjQ5OTYgOC42MDIzIDE5LjQ5OTYgOS4wMDAwNUMxOS40OTk2IDkuMzk3NzkgMTkuMzQxNiA5Ljc3OTI1IDE5LjA2MDQgMTAuMDYwNUwxNC4xMjA5IDE1TDE5LjA2MDQgMTkuOTM5NUMxOS4zMzM3IDIwLjIyMjQgMTkuNDg0OSAyMC42MDE0IDE5LjQ4MTQgMjAuOTk0NkMxOS40NzggMjEuMzg3OSAxOS4zMjAzIDIxLjc2NDIgMTkuMDQyMiAyMi4wNDIzQzE4Ljc2NCAyMi4zMjA0IDE4LjM4NzggMjIuNDc4MSAxNy45OTQ1IDIyLjQ4MTZDMTcuNjAxMiAyMi40ODUgMTcuMjIyMyAyMi4zMzM4IDE2LjkzOTQgMjIuMDYwNUwxMC45Mzk0IDE2LjA2MDVDMTAuNjU4MiAxNS43NzkzIDEwLjUwMDIgMTUuMzk3OCAxMC41MDAyIDE1QzEwLjUwMDIgMTQuNjAyMyAxMC42NTgyIDE0LjIyMDggMTAuOTM5NCAxMy45Mzk1TDE2LjkzOTQgNy45Mzk1NUMxNy4yMjA3IDcuNjU4MzQgMTcuNjAyMiA3LjUwMDM3IDE3Ljk5OTkgNy41MDAzN0MxOC4zOTc3IDcuNTAwMzcgMTguNzc5MSA3LjY1ODM0IDE5LjA2MDQgNy45Mzk1NVoiIGZpbGw9IiM4QThBOEEiLz4KPC9zdmc+Cg=="},3982:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDNDMTAuNzM0NyAzIDEwLjQ4MDQgMy4xMDUzNiAxMC4yOTI5IDMuMjkyODlDMTAuMTA1MyAzLjQ4MDQzIDkuOTk5OTYgMy43MzQ3OCA5Ljk5OTk2IDRDOS45OTk5NiA0LjI2NTIyIDEwLjEwNTMgNC41MTk1NyAxMC4yOTI5IDQuNzA3MTFDMTAuNDgwNCA0Ljg5NDY0IDEwLjczNDcgNSAxMSA1SDEzLjU4Nkw3LjI5Mjk2IDExLjI5M0M3LjE5NzQ1IDExLjM4NTIgNy4xMjEyNyAxMS40OTU2IDcuMDY4ODYgMTEuNjE3NkM3LjAxNjQ1IDExLjczOTYgNi45ODg4NiAxMS44NzA4IDYuOTg3NzEgMTIuMDAzNkM2Ljk4NjU1IDEyLjEzNjQgNy4wMTE4NiAxMi4yNjgxIDcuMDYyMTQgMTIuMzkxQzcuMTEyNDIgMTIuNTEzOSA3LjE4NjY3IDEyLjYyNTUgNy4yODA1NiAxMi43MTk0QzcuMzc0NDYgMTIuODEzMyA3LjQ4NjExIDEyLjg4NzUgNy42MDkwMSAxMi45Mzc4QzcuNzMxOSAxMi45ODgxIDcuODYzNTggMTMuMDEzNCA3Ljk5NjM2IDEzLjAxMjNDOC4xMjkxNCAxMy4wMTExIDguMjYwMzYgMTIuOTgzNSA4LjM4MjM2IDEyLjkzMTFDOC41MDQzNyAxMi44Nzg3IDguNjE0NzEgMTIuODAyNSA4LjcwNjk2IDEyLjcwN0wxNSA2LjQxNFY5QzE1IDkuMjY1MjIgMTUuMTA1MyA5LjUxOTU3IDE1LjI5MjkgOS43MDcxMUMxNS40ODA0IDkuODk0NjQgMTUuNzM0NyAxMCAxNiAxMEMxNi4yNjUyIDEwIDE2LjUxOTUgOS44OTQ2NCAxNi43MDcxIDkuNzA3MTFDMTYuODk0NiA5LjUxOTU3IDE3IDkuMjY1MjIgMTcgOVY0QzE3IDMuNzM0NzggMTYuODk0NiAzLjQ4MDQzIDE2LjcwNzEgMy4yOTI4OUMxNi41MTk1IDMuMTA1MzYgMTYuMjY1MiAzIDE2IDNIMTFaIiBmaWxsPSIjNDI0MjQyIi8+CjxwYXRoIGQ9Ik01IDVDNC40Njk1NyA1IDMuOTYwODYgNS4yMTA3MSAzLjU4NTc5IDUuNTg1NzlDMy4yMTA3MSA1Ljk2MDg2IDMgNi40Njk1NyAzIDdWMTVDMyAxNS41MzA0IDMuMjEwNzEgMTYuMDM5MSAzLjU4NTc5IDE2LjQxNDJDMy45NjA4NiAxNi43ODkzIDQuNDY5NTcgMTcgNSAxN0gxM0MxMy41MzA0IDE3IDE0LjAzOTEgMTYuNzg5MyAxNC40MTQyIDE2LjQxNDJDMTQuNzg5MyAxNi4wMzkxIDE1IDE1LjUzMDQgMTUgMTVWMTJDMTUgMTEuNzM0OCAxNC44OTQ2IDExLjQ4MDQgMTQuNzA3MSAxMS4yOTI5QzE0LjUxOTYgMTEuMTA1NCAxNC4yNjUyIDExIDE0IDExQzEzLjczNDggMTEgMTMuNDgwNCAxMS4xMDU0IDEzLjI5MjkgMTEuMjkyOUMxMy4xMDU0IDExLjQ4MDQgMTMgMTEuNzM0OCAxMyAxMlYxNUg1VjdIOEM4LjI2NTIyIDcgOC41MTk1NyA2Ljg5NDY0IDguNzA3MTEgNi43MDcxMUM4Ljg5NDY0IDYuNTE5NTcgOSA2LjI2NTIyIDkgNkM5IDUuNzM0NzggOC44OTQ2NCA1LjQ4MDQzIDguNzA3MTEgNS4yOTI4OUM4LjUxOTU3IDUuMTA1MzYgOC4yNjUyMiA1IDggNUg1WiIgZmlsbD0iIzQyNDI0MiIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-templates-project-js-f9be0846e405fb7c5d8a.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3XHS":function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),a=n.n(i),o=n("vOnD"),l=o.c.div.withConfig({displayName:"aboutElement__Container",componentId:"vdk4yq-0"})(["display:flex;flex-direction:column;cursor:pointer;"]),c=o.c.h4.withConfig({displayName:"aboutElement__Title",componentId:"vdk4yq-1"})(["font-weight:400;margin:0;"]),M=o.c.div.withConfig({displayName:"aboutElement__DescriptionGroup",componentId:"vdk4yq-2"})(["display:flex;flex-direction:column;"]),d=o.c.div.withConfig({displayName:"aboutElement__Description",componentId:"vdk4yq-3"})(["display:grid;grid-auto-flow:column;justify-content:start;column-gap:12px;"]),r=o.c.p.withConfig({displayName:"aboutElement__DescriptionText",componentId:"vdk4yq-4"})(["font-size:",";font-weight:100;margin:0;"],(function(t){return t.theme.SMALL_SIZE}));var u=function(t){var e=t.data,n=t.openModal,i=e.title,o=e.descriptions;return a.a.createElement(l,{onClick:n},a.a.createElement(c,null,i),a.a.createElement(M,null,o.map((function(t,e){return a.a.createElement(d,{key:String(e)},a.a.createElement(r,null,t.main),a.a.createElement(r,null,t.time))}))))},m=n("QKHs"),g=n.n(m),s=o.c.div.withConfig({displayName:"aboutModal__Background",componentId:"sc-1j9toqk-0"})(["width:100vw;height:100vh;position:fixed;display:flex;align-items:center;justify-content:center;z-index:100;background-color:hsla(0,0%,0%,0.8);top:0;"]),p=o.c.div.withConfig({displayName:"aboutModal__Modal",componentId:"sc-1j9toqk-1"})(["width:370px;padding:20px 24px;display:flex;flex-direction:column;align-items:center;background-color:",";border-radius:5px;@media ","{width:300px;padding:20px 22px;}"],(function(t){return t.theme.BRIGHT_COLOR}),(function(t){return t.theme.mobile})),N=o.c.h3.withConfig({displayName:"aboutModal__Title",componentId:"sc-1j9toqk-2"})(["width:100%;margin:0;color:",";margin-bottom:8px;"],(function(t){return t.theme.DARK_COLOR})),D=o.c.div.withConfig({displayName:"aboutModal__SubtitleGroup",componentId:"sc-1j9toqk-3"})(["display:flex;align-items:center;width:100%;margin-bottom:16px;"]),x=o.c.div.withConfig({displayName:"aboutModal__Subtitle",componentId:"sc-1j9toqk-4"})(["color:",";font-weight:400;"],(function(t){return t.theme.DARK_COLOR})),I=o.c.button.withConfig({displayName:"aboutModal__Link",componentId:"sc-1j9toqk-5"})(["margin-left:12px;"]),E=o.c.img.withConfig({displayName:"aboutModal__Icon",componentId:"sc-1j9toqk-6"})(["width:20px;height:20px;"]),j=o.c.p.withConfig({displayName:"aboutModal__Content",componentId:"sc-1j9toqk-7"})(["width:100%;color:",";margin:0;margin-bottom:16px;font-weight:400;white-space:pre-line;"],(function(t){return t.theme.DARK_COLOR})),y=o.c.button.withConfig({displayName:"aboutModal__CloseButton",componentId:"sc-1j9toqk-8"})(["font-size:",";"],(function(t){return t.theme.NORMAL_SIZE}));var T=function(t){var e=t.closeModal,n=t.data,o=n.title,l=n.subtitle,c=n.link,M=n.detail,d=Object(i.useCallback)((function(){window.open(c)}),[c]);return a.a.createElement(s,null,a.a.createElement(p,null,a.a.createElement(N,null,o),a.a.createElement(D,null,a.a.createElement(x,null,l),c&&a.a.createElement(I,{onClick:d},a.a.createElement(E,{src:g.a}))),M&&a.a.createElement(j,null,M),a.a.createElement(y,{onClick:e},"닫기")))},A={about:{educations:[{title:"영동고등학교",descriptions:[{main:"이공계열",time:"2012.3 ~ 2015.2"}],detail:" 경북 영천시에 소재한 고등학교\n          이공계열\n        "},{title:"경북대학교",descriptions:[{main:"전자공학 학사",time:"2015.3 ~ 2022. 2(예정)"}],detail:"경북대학교 전자공학부\n        전자공학부이지만... 하드웨어보다는 소프트웨어가 더 좋더라"}],careers:[{title:"개발 동아리 MIRO",descriptions:[{main:"회원",time:"2018.3 ~ 2018.7"},{main:"운영진",time:"2018.8 ~ 2018.12"}],detail:" 웹개발과 앱개발을 처음 배운 곳\n          Express와 VanillaJS, jQuery를 배움\n        "},{title:"스타트업 (주)아일토스",descriptions:[{main:"개발자",time:"2018.8 ~ 2020.1"}],detail:" 본격적으로 웹개발과 앱개발에 입문\n          React를 이용하여 웹개발하는 방법,\n          React Native를 이용하여 앱개발하는 방법,\n          ExpressJS를 이용하여 API 서버를 개발하는 방법,\n          AWS, MongoDB, Google Firebase를 사용해서 서비스를 제작하는 방법을 배움"},{title:"스타트업 (주)씨드업",descriptions:[{main:"개발자",time:"2020.5 ~ 2021. 3"}],detail:" 개발이 취미로 느껴지기 시작했던 직장\n          \n          혼자 프로젝트를 설계하고 개발을 하면서 주도적으로 공식문서를 찾아서 따라해가면서 기술을 습둑하며 개발함\n          이전 직장에서는 그냥 개발을 위한 개발을 했다면, 그때의 경험을 바탕으로 왜 그렇게 되는가에 대해서 고민하며 개발함\n          코드를 어떻게 하면 예쁘게 짤 수 있을까?\n          어떻게 하면 성능이 빨라질까? 와 같은 내용들은 고민하기 시작했다\n        ",link:"https://ceedup.com"},{title:"개발 동아리 피스메인",descriptions:[{main:"회장",time:"2020.7 ~ "}],detail:' 대구의 스타트업계에 부족한 개발자를 키워보겠다고 시작한 동아리\n          너무 바로 기술적으로 들어가니 사람들이 흥미를 못 붙였다\n          중요한건 "얼마나 다양한 컨텐츠가 있느냐?"와 "참가자들이 정말 성장에 대한 갈망이 있는가?" 인것 같음\n        '}],interests:[{title:"MARVEL",descriptions:[{main:"MARVEL Cinematic Universe"}],detail:"어벤져스! 어셈블 (오열)"},{title:"LotR",descriptions:[{main:"The Lord of the Rings"}],detail:"Death! Death! Forth Eorlingas! (오열)"},{title:"STARWARS",descriptions:[{main:"Space Opera"}],detail:"위잉 위잉 윙 웅 위잉 윙 위잉"},{title:"데이터 과학",descriptions:[{main:"Data Science"}]},{title:"가상현실 게임",descriptions:[{main:"Brain-Computer Interface Game"}]}],tech_stacks:[{title:"Javascript, Typescript",descriptions:[{main:"자바스크립트",time:"2018.3"},{main:"타입스크립트",time:"2021.2"}],detail:" 웹부터, Express를 이용한 서버, React Native를 이용한 앱, Electron을 이용한 데스크탑 앱, Tensorflow.js를 이용한 머신러닝까지\n          못하는게 없는 언어. 타입스크립트를 쓰니까 예상치 못한 에러를 잡는데 도움이 되었다\n        "},{title:"React & React Native",descriptions:[{main:"웹 & 모바일 프론트엔드 프레임워크",time:"2018.8"}],detail:" 스타트업에 있으면서 크로스플랫폼으로 많은 시간을 아낄 수 있었습니다!\n          - 박OO, 스타트업 개발자\n        "},{title:"Sass",descriptions:[{main:"스타일시트",time:"2019.4"}],detail:" CSS보다는 편하고, 잘만쓰면 스타일 재사용도 엄청나게 가능할텐데...\n        "},{title:"Google Cloud Platform",descriptions:[{main:"클라우드 플랫폼",time:"2019.1"}],detail:" 아마존보다 나은 건 문서가 너무 잘 되어있다.\n\n          - Firestore\n          - Firebase Auth\n          - Firebase Hosting\n          - Google Analytics\n          - Cloud Storage\n          - ioT Core\n          - App Engine\n          - Cloud Functions\n        "},{title:"Express JS",descriptions:[{main:"웹서버 프레임워크",time:"2019.2"}],detail:" React로 SPA를 개발하면서 이걸로 웹 서버 개발보다는 API 개발을 주로 했음.\n        "},{title:"Flutter",descriptions:[{main:"모바일 프론트엔드 프레임워크",time:"2020.4"}],detail:" 구글에서 나왔고 너무나도 뜨거운 새로운 라이브러리라 해봤는데, React Native에 비해 빌드한 apk의 용량이 너무함\n          이제 웹도 정식으로 출시 되었다고 하니 한 번 다시 건드려봐야겠다\n        "},{title:"Styled Component",descriptions:[{main:"CSS-in-JS",time:"2021.1"}],detail:" 항상 CSS를 만지다 보면 JS의 값에 따라 바뀌어야 하는 스타일을 정해줘야 했는데, 클래스로 관리를 했었다.\n          요즘은 CSS-in-JS가 뜨고 있다고 해서 사용해봤는데, 처음엔 조금 불편했지만, 컴포넌트화만 잘하면 참 편리할 것 같다는 생각이 든다.\n        "}]}},f=o.c.div.withConfig({displayName:"about__Background",componentId:"sc-1nsczft-0"})(["display:flex;min-height:100vh;width:100vw;padding:81px 0;flex-direction:column;align-items:center;"]),w=o.c.div.withConfig({displayName:"about__TitleGroup",componentId:"sc-1nsczft-1"})(["display:flex;flex-direction:column;width:900px;@media ","{width:100%;padding:0 5%;}@media ","{padding:0 5%;}"],(function(t){return t.theme.tablet}),(function(t){return t.theme.mobile})),z=o.c.h2.withConfig({displayName:"about__Title",componentId:"sc-1nsczft-2"})(["font-weight:100;margin-top:0;"]),h=o.c.div.withConfig({displayName:"about__SubTitle",componentId:"sc-1nsczft-3"})(["font-weight:100;"]),O=o.c.main.withConfig({displayName:"about__Contents",componentId:"sc-1nsczft-4"})(["display:flex;flex-wrap:wrap;justify-content:space-between;width:900px;box-sizing:border-box;padding:24px 0;@media ","{width:100%;padding:24px 5%;}@media ","{padding:24px 5%;}"],(function(t){return t.theme.tablet}),(function(t){return t.theme.mobile})),S=o.c.div.withConfig({displayName:"about__ContentBox",componentId:"sc-1nsczft-5"})(["display:grid;row-gap:16px;align-content:start;width:45%;min-width:230px;margin-bottom:32px;@media ","{width:45%;}@media ","{width:100%;}"],(function(t){return t.theme.tablet}),(function(t){return t.theme.mobile})),C=o.c.h3.withConfig({displayName:"about__ContentBoxTitle",componentId:"sc-1nsczft-6"})(["font-weight:normal;margin:0;"]);e.default=function(t){var e=Object(i.useState)(!1),n=e[0],o=e[1],l=Object(i.useState)({}),c=l[0],M=l[1],d=Object(i.useCallback)((function(){o(!1)}),[]),r=Object(i.useCallback)((function(t){return function(){var e=t.title,n=t.descriptions,i=t.link,a=t.detail,l=n[n.length-1],c=l.main+" "+(l.time||"");o(!0),M({title:e,subtitle:c,link:i,detail:a})}}),[]);return a.a.createElement(f,null,n&&a.a.createElement(T,{closeModal:d,data:c}),a.a.createElement(w,null,a.a.createElement(z,null,"소개"),a.a.createElement(h,null,"1996년 생. 대구광역시 출생. 스타트업 개발자")),a.a.createElement(O,null,a.a.createElement(S,null,a.a.createElement(C,null,"교육"),A.about.educations.map((function(t,e){return a.a.createElement(u,{key:String(e),data:t,openModal:r(t)})}))),a.a.createElement(S,null,a.a.createElement(C,null,"활동"),A.about.careers.map((function(t,e){return a.a.createElement(u,{key:String(e),data:t,openModal:r(t)})}))),a.a.createElement(S,null,a.a.createElement(C,null,"관심분야"),A.about.interests.map((function(t,e){return a.a.createElement(u,{key:String(e),data:t,openModal:r(t)})}))),a.a.createElement(S,null,a.a.createElement(C,null,"기술스택"),A.about.tech_stacks.map((function(t,e){return a.a.createElement(u,{key:String(e),data:t,openModal:r(t)})})))))}},QKHs:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMSAzQzEwLjczNDcgMyAxMC40ODA0IDMuMTA1MzYgMTAuMjkyOSAzLjI5Mjg5QzEwLjEwNTMgMy40ODA0MyA5Ljk5OTk2IDMuNzM0NzggOS45OTk5NiA0QzkuOTk5OTYgNC4yNjUyMiAxMC4xMDUzIDQuNTE5NTcgMTAuMjkyOSA0LjcwNzExQzEwLjQ4MDQgNC44OTQ2NCAxMC43MzQ3IDUgMTEgNUgxMy41ODZMNy4yOTI5NiAxMS4yOTNDNy4xOTc0NSAxMS4zODUyIDcuMTIxMjcgMTEuNDk1NiA3LjA2ODg2IDExLjYxNzZDNy4wMTY0NSAxMS43Mzk2IDYuOTg4ODYgMTEuODcwOCA2Ljk4NzcxIDEyLjAwMzZDNi45ODY1NSAxMi4xMzY0IDcuMDExODYgMTIuMjY4MSA3LjA2MjE0IDEyLjM5MUM3LjExMjQyIDEyLjUxMzkgNy4xODY2NyAxMi42MjU1IDcuMjgwNTYgMTIuNzE5NEM3LjM3NDQ2IDEyLjgxMzMgNy40ODYxMSAxMi44ODc1IDcuNjA5MDEgMTIuOTM3OEM3LjczMTkgMTIuOTg4MSA3Ljg2MzU4IDEzLjAxMzQgNy45OTYzNiAxMy4wMTIzQzguMTI5MTQgMTMuMDExMSA4LjI2MDM2IDEyLjk4MzUgOC4zODIzNiAxMi45MzExQzguNTA0MzcgMTIuODc4NyA4LjYxNDcxIDEyLjgwMjUgOC43MDY5NiAxMi43MDdMMTUgNi40MTRWOUMxNSA5LjI2NTIyIDE1LjEwNTMgOS41MTk1NyAxNS4yOTI5IDkuNzA3MTFDMTUuNDgwNCA5Ljg5NDY0IDE1LjczNDcgMTAgMTYgMTBDMTYuMjY1MiAxMCAxNi41MTk1IDkuODk0NjQgMTYuNzA3MSA5LjcwNzExQzE2Ljg5NDYgOS41MTk1NyAxNyA5LjI2NTIyIDE3IDlWNEMxNyAzLjczNDc4IDE2Ljg5NDYgMy40ODA0MyAxNi43MDcxIDMuMjkyODlDMTYuNTE5NSAzLjEwNTM2IDE2LjI2NTIgMyAxNiAzSDExWiIgZmlsbD0iIzQyNDI0MiIvPg0KPHBhdGggZD0iTTUgNUM0LjQ2OTU3IDUgMy45NjA4NiA1LjIxMDcxIDMuNTg1NzkgNS41ODU3OUMzLjIxMDcxIDUuOTYwODYgMyA2LjQ2OTU3IDMgN1YxNUMzIDE1LjUzMDQgMy4yMTA3MSAxNi4wMzkxIDMuNTg1NzkgMTYuNDE0MkMzLjk2MDg2IDE2Ljc4OTMgNC40Njk1NyAxNyA1IDE3SDEzQzEzLjUzMDQgMTcgMTQuMDM5MSAxNi43ODkzIDE0LjQxNDIgMTYuNDE0MkMxNC43ODkzIDE2LjAzOTEgMTUgMTUuNTMwNCAxNSAxNVYxMkMxNSAxMS43MzQ4IDE0Ljg5NDYgMTEuNDgwNCAxNC43MDcxIDExLjI5MjlDMTQuNTE5NiAxMS4xMDU0IDE0LjI2NTIgMTEgMTQgMTFDMTMuNzM0OCAxMSAxMy40ODA0IDExLjEwNTQgMTMuMjkyOSAxMS4yOTI5QzEzLjEwNTQgMTEuNDgwNCAxMyAxMS43MzQ4IDEzIDEyVjE1SDVWN0g4QzguMjY1MjIgNyA4LjUxOTU3IDYuODk0NjQgOC43MDcxMSA2LjcwNzExQzguODk0NjQgNi41MTk1NyA5IDYuMjY1MjIgOSA2QzkgNS43MzQ3OCA4Ljg5NDY0IDUuNDgwNDMgOC43MDcxMSA1LjI5Mjg5QzguNTE5NTcgNS4xMDUzNiA4LjI2NTIyIDUgOCA1SDVaIiBmaWxsPSIjNDI0MjQyIi8+DQo8L3N2Zz4NCg=="}}]);
//# sourceMappingURL=component---src-pages-about-js-fc1fb72e410b77e2aded.js.map
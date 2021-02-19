const contents = {
  about: {
    educations: [
      {
        title: '영동고등학교',
        descriptions: [
          {
            main: '이공계열',
            time: '2012.3 ~ 2015.2',
          },
        ],
        detail:
        ` 경북 영천시에 소재한 고등학교.

          이공계열.
        `,
      },
      {
        title: '경북대학교',
        descriptions: [
          {
            main: '전자공학 학사',
            time: '2015.3 ~',
          },
        ],
        detail: `경북대학교 전자공학부.
        전자공학부이지만... 하드웨어보다는 소프트웨어가 더 좋더라`,
      },
    ],
    careers: [
      {
        title: '개발 동아리 MIRO',
        descriptions: [
          {
            main: '회원',
            time: '2018.3 ~ 2018.7',
          },
          {
            main: '운영진',
            time: '2018.8 ~ 2018.12',
          },
        ],
        detail:
        ` 웹개발과 앱개발을 처음 배운 곳.
          Express와 VanillaJS, jQuery를 배움.
        `,
      },
      {
        title: '스타트업 (주)아일토스',
        descriptions: [
          {
            main: '개발자',
            time: '2018.8 ~ 2020.1',
          },
        ],
        detail:
        ` 본격적으로 웹개발과 앱개발에 입문.
          React를 이용하여 웹개발하는 방법,
          React Native를 이용하여 앱개발하는 방법,
          ExpressJS를 이용하여 API 서버를 개발하는 방법,
          AWS, MongoDB, Google Firebase를 사용해서 서비스를 제작하는 방법을 배움.`,
      },
      {
        title: '스타트업 (주)씨드업',
        descriptions: [
          {
            main: '개발자',
            time: '2020.5 ~ ',
          },
        ],
        detail:
        ` 개발이 취미로 느껴지기 시작했던 직장.
          
          혼자 프로젝트를 설계하고 개발을 하면서 주도적으로 공식문서를 찾아서 따라해가면서 기술을 습둑하는 방법을 알게됨.
          이전 직장에서 쌓은 기본기를 바탕으로 실력이 대폭 상향하게 됨.
          코드를 어떻게 하면 예쁘게 짤 수 있을까?
          함수로 다 분리를 하면 될까? => 함수형 프로그래밍을 공부함.
          어떻게 하면 성능이 빨라질까? 와 같은 내용들은 고민하기 시작함.
        `,
        link: 'https://ceedup.com',
      },
      {
        title: '개발 동아리 피스메인',
        descriptions: [
          {
            main: '회장',
            time: '2020.7 ~ ',
          },
        ],
        detail:
        ` 대구의 스타트업계에 부족한 개발자를 키워보겠다고 시작한 동아리.
          너무 바로 기술적으로 들어간 느낌이라 사람들이 흥미를 잘 못 붙임.
        `,
      },
    ],
    interests: [
      {
        title: 'MARVEL',
        descriptions: [
          {
            main: 'MARVEL Cinematic Universe',
          },
        ],
        detail: `어벤져스! 어셈블 (오열)`,
      },
      {
        title: 'LotR',
        descriptions: [
          {
            main: 'The Lord of the Rings',
          },
        ],
        detail: `Death! Death! Forth Eorlingas! (오열)`,
      },
      {
        title: 'STARWARS',
        descriptions: [
          {
            main: 'Space Opera',
          },
        ],
        detail: `위잉 위잉 윙 웅 위잉 윙 위잉`,
      },
      {
        title: '데이터 과학',
        descriptions: [
          {
            main: 'Data Science',
          },
        ],
      },
      {
        title: '가상현실 게임',
        descriptions: [
          {
            main: 'Brain-Computer Interface Game',
          },
        ],
      },
    ],
    tech_stacks: [
      {
        title: 'Javascript, Typescript',
        descriptions: [
          {
            main: '자바스크립트',
            time: '2018.3',
          },
          {
            main: '타입스크립트',
            time: '2021.2',
          },
        ],
        detail:
        ` 웹부터, Express를 이용한 서버, React Native를 이용한 앱, Electron을 이용한 데스크탑 앱, Tensorflow.js를 이용한 머신러닝까지
          못하는게 없는 언어. 타입스크립트를 쓰니까 예상치 못한 에러를 잡는데 도움이 되었다.
        `,
      },
      {
        title: 'React & React Native',
        descriptions: [
          {
            main: '웹 & 모바일 프론트엔드 프레임워크',
            time: '2018.8',
          },
        ],
        detail:
        ` 스타트업에 있으면서 크로스플랫폼으로 많은 시간을 아낄 수 있었습니다!
          - 박OO, 스타트업 개발자
        `,
      },
      {
        title: 'Sass',
        descriptions: [
          {
            main: '스타일시트',
            time: '2019.4',
          },
        ],
        detail:
        ` CSS보다는 편하고, 잘만쓰면 스타일 재사용도 엄청나게 가능할텐데...
        `,
      },
      {
        title: 'Google Cloud Platform',
        descriptions: [
          {
            main: '클라우드 플랫폼',
            time: '2019.1',
          },
        ],
        detail:
        ` 아마존보다 나은 건 문서가 너무 잘 되어있다.

          - Firestore
          - Firebase Auth
          - Firebase Hosting
          - Google Analytics
          - Cloud Storage
          - ioT Core
          - App Engine
          - Cloud Functions
        `,
      },
      {
        title: 'Express JS',
        descriptions: [
          {
            main: '웹서버 프레임워크',
            time: '2019.2',
          },
        ],
        detail:
        ` React로 SPA를 개발하면서 이걸로 웹 서버 개발보다는 API 개발을 주로 했음.
        `,
      },
      {
        title: 'Flutter',
        descriptions: [
          {
            main: '모바일 프론트엔드 프레임워크',
            time: '2020.4',
          },
        ],
        detail:
        ` 구글에서 나왔고 너무나도 뜨거운 새로운 라이브러리라 해봤는데, React Native에 비해 빌드한 apk의 용량이 너무함.
        `,
      },
    ],
  },
};

export default contents;

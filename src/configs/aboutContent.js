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
        ` 경북 영천시에 소재한 고등학교
          이공계열
        `,
      },
      {
        title: '경북대학교',
        descriptions: [
          {
            main: '전자공학 학사',
            time: '2015.3 ~ 2022. 2(예정)',
          },
        ],
        detail: `경북대학교 전자공학부
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
        ` 웹개발과 앱개발을 처음 배운 곳
          Express와 VanillaJS, jQuery를 배움
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
        ` 본격적으로 웹개발과 앱개발에 입문
          React를 이용하여 웹개발하는 방법,
          React Native를 이용하여 앱개발하는 방법,
          ExpressJS를 이용하여 API 서버를 개발하는 방법,
          AWS, MongoDB, Google Firebase를 사용해서 서비스를 제작하는 방법을 배움`,
      },
      {
        title: '스타트업 (주)씨드업',
        descriptions: [
          {
            main: '개발자',
            time: '2020.5 ~ 2021. 3',
          },
        ],
        detail:
        ` 개발이 취미로 느껴지기 시작했던 직장
          
          혼자 프로젝트를 설계하고 개발을 하면서 주도적으로 공식문서를 찾아서 따라해가면서 기술을 습둑하며 개발함
          이전 직장에서는 그냥 개발을 위한 개발을 했다면, 그때의 경험을 바탕으로 왜 그렇게 되는가에 대해서 고민하며 개발함
          코드를 어떻게 하면 예쁘게 짤 수 있을까?
          어떻게 하면 성능이 빨라질까? 와 같은 내용들은 고민하기 시작했다
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
        ` 대구의 스타트업계에 부족한 개발자를 키워보겠다고 시작한 동아리
          중요한건 "얼마나 다양한 컨텐츠가 있느냐?"와 "참가자들이 정말 성장에 대한 갈망이 있는가?" 인것 같다
          나중에 비영리 단체로 대구지역의 개발자 커뮤니티와 교육단체로 발전시켜나가고 싶다
        `,
        link: 'https://github.com/peacemain-club',
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
          못하는게 없는 언어. 타입스크립트를 쓰니까 예상치 못한 에러를 잡는데 도움이 되었다
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
        ` 구글에서 나왔고 너무나도 뜨거운 새로운 라이브러리라 해봤는데, React Native에 비해 빌드한 apk의 용량이 너무함
          이제 웹도 정식으로 출시 되었다고 하니 한 번 다시 건드려봐야겠다
        `,
      },
      {
        title: 'Styled Component',
        descriptions: [
          {
            main: 'CSS-in-JS',
            time: '2021.1',
          },
        ],
        detail:
        ` 항상 CSS를 만지다 보면 JS의 값에 따라 바뀌어야 하는 스타일을 정해줘야 했는데, 클래스로 관리를 했었다.
          요즘은 CSS-in-JS가 뜨고 있다고 해서 사용해봤는데, 처음엔 조금 불편했지만, 컴포넌트화만 잘하면 참 편리할 것 같다는 생각이 든다.
        `,
      },
    ],
  },
};

export default contents;

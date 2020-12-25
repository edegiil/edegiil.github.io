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
        detail: `
          경북 영천시에 소재한 고등학교.

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
        detail: `
          경북대학교 전자공학부
        `,
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
        detail: `
          웹개발과 앱개발을 처음 배운 곳.
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
        detail: `
          본격적으로 웹개발과 앱개발에 입문.
          
          React를 이용하여 웹개발하는 방법,
          React Native를 이용하여 앱개발하는 방법,
          ExpressJS를 이용하여 API 서버를 개발하는 방법,
          AWS, MongoDB, Google Firebase를 사용해서 서비스를 제작하는 방법을 배움.
        `,
      },
      {
        title: '스타트업 (주)씨드업',
        descriptions: [
          {
            main: '개발자',
            time: '2020.5 ~ ',
          },
        ],
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
      },
      {
        title: 'LotR',
        descriptions: [
          {
            main: 'The Lord of the Rings',
          },
        ],
      },
      {
        title: 'STARWARS',
        descriptions: [
          {
            main: 'Space Opera',
          },
        ],
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
        title: 'Javascript',
        descriptions: [
          {
            main: '주력언어',
            time: '2018.3',
          },
        ],
      },
      {
        title: 'React & React Native',
        descriptions: [
          {
            main: '웹 & 모바일 프론트엔드 프레임워크',
            time: '2018.8',
          },
        ],
      },
      {
        title: 'Sass',
        descriptions: [
          {
            main: '스타일시트',
            time: '2019.4',
          },
        ],
      },
      {
        title: 'Google Firebase',
        descriptions: [
          {
            main: '클라우드 플랫폼',
            time: '2019.1',
          },
        ],
      },
      {
        title: 'Express JS',
        descriptions: [
          {
            main: '웹서버 프레임워크',
            time: '2019.2',
          },
        ],
      },
      {
        title: 'Flutter',
        descriptions: [
          {
            main: '모바일 프론트엔드 프레임워크',
            time: '2020.4',
          },
        ],
      },
    ],
  },
  project: [
    {
      index: '01',
      title: '플레이픽',
      subtitle: '코디 결정장애 해소를 위한 플랫폼',
      platform: 'Android, iOS APP',
      time: '2018.8 ~ 2019.3',
      stacks: ['React Native', 'ExpressJS', 'Firebase'],
      image: `https://firebasestorage.googleapis.com/v0/b/wingtree-cloud.appspot.com/o/devlog%2Fplaypick.jpg?alt=media&token=474bde5e-08c9-4441-ba12-d874b31ed2a8`,
    },
    {
      index: '02',
      title: 'M-TREE 카페 홈페이지',
      subtitle: '대구 창업카페 M-TREE',
      platform: 'WEB',
      time: '2019.2 ~ 2019.3',
      stacks: ['React', 'Firebase'],
      image: 'https://firebasestorage.googleapis.com/v0/b/wingtree-cloud.appspot.com/o/devlog%2Fm-tree.png?alt=media&token=418d4931-1204-49df-b7ca-f84c3e720c98',
    },
    {
      index: '03',
      title: '비지리스',
      subtitle: '정부창업지원사업 큐레이션 서비스',
      platform: 'WEB, APP',
      time: '2019.4 ~ 2019.7',
      stacks: ['React', 'React Native', 'Firebase'],
      image: 'https://firebasestorage.googleapis.com/v0/b/wingtree-cloud.appspot.com/o/devlog%2Fbusyless.jpg?alt=media&token=3605f6cf-293f-418a-ae9b-bb5d21fc41e2',
    },
    {
      index: '04',
      title: 'HERITAGE MONITOR',
      subtitle: '문화재 종합관리 솔루션',
      platform: 'WEB',
      time: '2020.5 ~ 2021.2',
      stacks: ['React', 'Google Cloud Platform', 'Naver Cloud Platform', 'ExpressJS'],
      image: '',
    },
  ],
};

export default contents;

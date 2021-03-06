---
id: "P20200501"
path: "/project/heritagemonitor"
title: "헤리티지 모니터"
type: "project"
summary: "문화재 통합 관리 솔루션"
thumbnail: ""
time: "2020.5 ~ 2021.3"
platform: "WEB"
tech: "React,Google Cloud Platform,Naver Cloud Platform,MySQL,Express"
link: "https://ceedup.com"
repository: ""
status: "CLOSED"
---
![피스메인](https://drive.google.com/uc?export=download&id=1inGQ6pY8Vfr7C-qASERsmlhdNFejblKr)

### 프로젝트에 대한 이야기
AioT 디바이스 기반 문화재 통합 관리 솔루션

두번째로 입사한 스타트업에서 진행한 프로젝트.

첫번째 스타트업에서 겪은 중압감을 해소하고 나서 입사했기에, 다시 개발을 해본다는 설렘이 있었다.

여기서는 내가 웹서비스에서 유일한 개발자이자 최선임자여서 개발 스택 선정부터 서비스 설계, 프론트엔드, 백엔드 개발 및 테스트까지 모두 내가 담당해야헸다. 그래서 이 시점 부터는 내가 그래도 어디가서 개발자라고 나 자신을 소개할 수 있었다.(주니어 이긴 하지만...)

뭔가 새롭게 시작하는 느낌으로 스스로의 개발적인 내용을 정리하고 갈 필요성을 느꼈다.

개발 문화적으로 신경을 쓴 부분은 코드를 좀 잘 쓰려고 노력했다. 누가 봐도 이해가 될 수 있게, 예쁜 코드를 써보려고 노력했다. 개발자는 나 혼자 뿐이지만, 다음에 누군가 봐도 유지보수하기 편하도록. 그리고 TDD도 적용하고자 했다. 확실히 테스트를 하는데 상당한 시간이 소요되어서
이 과정을 자동화한다면 좋을 것 같았다.

그리고 늘 하려고 했지만 못했던 코드 리뷰나 Pull Request도 제대로 해보려고 했다. 그리고 Git 커밋 메시지도 정해서 좀 체계적으로 개발을 할 수 있도록 체계를 정리했다. 이때 함수형 프로그래밍에 대해서 알게 되었고 그런 패러다임을 적용하려고 노력하게 되었다.

이제 서비스를 개발해야했는데, 이미 정의되어있던 서비스 요구사항을 읽어보고 내가 가지고 있는 기술 스택을 총동원해서 자바스크립트 베이스로 모든 스택을 결정했다
* 프론트엔드는 SPA ReactJS : 서비스 자체가 웹 어플리케이션의 형태라 굳이 NextJS나 Gatsby 처럼 정적 페이지로 만들 필요성을 느끼지 못했다. TDD를 하려고 마음먹어서 적용을 하려고 했는데, 프론트엔드는 눈으로 직접 보고 테스트 할 수 있어서 테스트 할 필요성을 느끼지 못했다.
* 백엔드는 ExpressJS 기반의 API 서버와 Google Cloud Platform : 실시간으로 데이터를 확인할 수 있도록 해야하는 게 있어서 그 부분은 Firestore의 실시간 기능을 사용하기로 했다. TDD는 여기에 적용하려고 했는데, 백엔드는 하나하나 POSTMAN으로 테스트하고 있을 시간이 없어서, jest와 supertest를 사용해서 API 개발을 TDD 방식으로 진행해봤다. 확실히 코드 리팩토링할 때 편했다.

모두 자바스크립트 베이스로 해서 혼자 개발하는 특성상 생산성이 괜찮았던 것 같다.

디자인도 따로 디자이너 없이 직접해야해서 공공 납품을 목적으로 하는 서비스의 특성상 정부 가이드라인도 다운받아서 참고해서 디자인했다.

이렇게 생각하고 개발을 하는 중에 경영팀으로 부터 SaaS 인증을 받아야 한다는 이야기를 들었다. 찾아보니, SaaS 인증은 GCP나 AWS, Azure와 같은 해외사업자에는 인증을 내주지 않아서 개발을 하려면 국내 사업자의 클라우드 플랫폼을 사용해야했다.

GCP로 이미 상당한 부분이 개발이 된 상태라 GCP를 대체할 수 있는 클라우드 플랫폼을 찾아봤다. 삼성 SDS, KT, 카카오, 네이버 클라우드 플랫폼 등 여러가지 선택지가 있었지만 가장 믿을만 하고 가장 제품이 많은 네이버 클라우드 플랫폼을 선택했다.

개발 환경 자체는 그대로고 플랫폼만 변경하면되었기 때문에 큰 문제는 없었다. 다만 네이버 클라우드 플랫폼에는 NoSQL 데이터베이스는 Redis 밖에 없었고, Redis는 많은 양의 데이터를 길게 계속 가지고 있기에는 적합하지 않아서 어쩔 수 없이 MySQL을 적용하게 되었다.

다른 분야와의 협업을 한적이 이제까지 없었는데, 서비스가 AioT 디바이스와 통신을 해서 받아와야 했다. 저전력 디바이스라 MQTT 통신을 해야 했는데, 클라우드 플랫폼에 ioT Core라는 제품이 있어서 따로 구현하지 않고 비교적 쉽게 통신을 할 수 있었다. MQTT로 클라우드로 넘어오는 
순간 부터는 이제 인터넷 위에 올라와서 마음대로 할 수 있었다.

### 개발한 내용은?
* 서비스 설계
* 클라우드 설계
* 데이터베이스 설계 (MySQL)
* 웹디자인
* 프론트엔드 개발
* 백엔드 개발 (API, 소켓)
* 테스트 코드 작성

### 사용한 기술 스택
* ReactJS : 프론트엔드 개발. 3대 라이브러리 중 유일하게 할 줄 아는 거라...
* ExpressJS : 백엔드 API, 실시간 소켓, ioT 트리거 개발을 해야하는데, API는 가벼운 비즈니스 로직만 서버리스 플랫폼에 올려도 되어서 선택. ioT 트리거도 마친가지. 
* MySQL : 원래 할 줄알던 Google Firestore로 개발하려고 했는데, 공공기관 납품용인지라 구글 클라우드 사용이 불가능했다. 그래서 인증을 받은 클라우드 중 가장 기능이 다양한 네이버 클라우드 플랫폼을 선택하게 되었는데, 쉽게 구축할 수 있는게 관계형 데이터베이스 밖에 없어서 MySQL을 ORM인 Sequelize를 공부해서 적용했다.
* Naver Cloud Platform : 원래 구글 클라우드 플랫폼을 주력으로 쓰고, 계속 그것만 쓰고 싶었지만... 공공기관용 클라우드 인증을 받은 국내 사업자만 사용해야 해서 네이버 클라우드 플랫폼을 선택했다. 예상외로 기능이 다양했지만, 문서가 조금 많이 빈약했다.
* Jest, Supertest : API 테스트를 위해 사용. GCP 문서에는 mocha를 사용하던데, 뭔가 Jest에 꽂혀서 Jest를 사용했다.
* Socket.io : 플랫폼에 구애받지 않도록 Socket.io를 선택

![Stacks](https://user-images.githubusercontent.com/35324795/114304151-9f551c00-9b0c-11eb-8b6e-dc6c5c754edc.png)

### 프로젝트하면서 겪은 이슈와 해결방법
펌웨어 개발자들과 협업을 하면서 발생한 문제 중 가장 크리티컬한 문제가 있었는데,

디바이스에서 찍은 사진의 용량이 커서 한번에 보낼 수가 없었다. 그래서 Stack의 개념을 사용해서 DB에 하나하나 차곡차곡 쌓은뒤에 이미지의 마지막이라는 플래그를 수신 받으면 하나로 합쳐서 스토리지에 저장하는 방식을 선택했다.

그렇지만 이 방식으로 한 결과 배열의 0 ~ 2 번째 위치에서 순서가 뒤바뀌는 경우나 누락되는 경우가 발생했다.

문제점이 뭔지 몰랐고, 한 두번이 아니라 거의 10%의 확률로 저런일이 발생했다. 디바이스의 촬영 기능이 먹통이 될 수도 있었다.

순서가 뒤바뀌는 경우를 해결하기 위해서 받아오는 데이터에 인덱스를 붙여서 받아봤는데, 순서가 뒤바뀌진 않게 되었다. 하지만 누락되는 경우가 발생했다. 이유를 모르겠어서 서비스를 구성하는 기술에 대해서 하나하나 생각해봤다.

1. 서비스는 저전력 프로세서 - MQTT - ioT Core - HTTP - Cloud Functions(서버리스) - DB - 스토리지 이렇게 구성된다. 이 중에 문제가 있을 것이다.
2. 스토리지에는 제대로 잘 작동하고 잘 저장이 된다. 더 나아가 보니 ioT Core는 받는대로 바로 Cloud Functions가 트리거된다.
3. Cloud Functions의 로그를 뜯어봤는데, 최초 실행 시 실행시간이 이후 실행 시의 실행 시간보다 몇배가 컸다.

문제는 서버리스 플랫폼인 것 같았다. 서버리스는 선점된 서버가 없이 요청이 들어올 때 자원을 잡고 실행되는 구조라 최초 실행 시에는 다소 시간이 소요된다. 이것을 간과하고 구성을 해서 최초 실행이 될 때 누락되는 문제가 발생했던 것 같다.
DB도 이 문제가 발생할 때 쓴 Firestore는 1 write/sec의 한계가 있었는데, 다음 요청과 겹쳐지며 누락이 발생하는 것 같았다.

DB를 MySQL로 바꾸며 실시간 소켓을 Socket.io로 구현하는 김에 그 서버에서 이미지를 하나로 모으는 API 까지 돌리게 되었다. 그리고 이미지 데이터의 크기는 수십 KB 단위라 그렇게 크지 않아 DB가 아닌 서버의 로컬 메모리를 사용해서 하는 것으로 변경하니
제대로 잘 작동했다.

또 다른 문제가 있었는데, 실시간 소켓을 구현하는 중에 DB의 데이터가 변경되면 그 내용을 보내줘야 했는데, MySQL에는 Firestore에 있던 것과 같은 트리거 기능이 없었다. 그래서 어떻게 바뀌는 걸 알아내서 소켓에서 보내줄까에 대한 고민이 많았다.

해결책으로 어차피 계속 사용하는 서버, 1초 마다 계속 DB의 값을 불러오도록 했다. 이렇게 구현하는게 맞는지는 모르겠지만 MySQL에서의 트리거 기능을 도저히 찾을 수 없었다.

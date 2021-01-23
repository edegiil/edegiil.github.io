---
path: "project/heritagemonitor"
title: "05__헤리티지 모니터"
type: "project"
summary: "문화재 통합 관리 솔루션"
thumbnail: "https://drive.google.com/uc?id=1gAQvAehJwoIgBiuPrwrCueh1vT4YSuNB"
time: "2020.5 ~ 2021.2"
platform: "WEB"
tech: "React,Google Cloud Platform,Naver Cloud Platform,MySQL,Express"
link: "https://heritage-monitor.ceedup.com"
---

### 프로젝트에 대한 이야기
문화재 통합 관리 솔루션

### 개발한 내용은?
* 서비스 설계
* 클라우드 설계
* 데이터베이스 설계 (MySQL)
* 웹디자인
* 프론트엔드 개발
* 백엔드 개발 (API, 소켓)

### 사용한 기술 스택
* ReactJS : 프론트엔드 개발. 3대 라이브러리 중 유일하게 할 줄 아는 거라...
* ExpressJS : 백엔드 API, 실시간 소켓, ioT 트리거 개발을 해야하는데, API는 가벼운 비즈니스 로직만 서버리스 플랫폼에 올려도 되어서 선택.ioT 트리거도 마친가지. 실시간 소켓은 Web Socket으로 하는데, 프론트엔드에서도 받기 편하게 하기 위해 Socket.io를 사용해서 선택
* MySQL : 원래 할 줄알던 Google Firestore로 개발하려고 했는데, 공공기관 납품용인지라 구글 클라우드 사용이 불가능했다. 그래서 인증을 받은 클라우드 중 가장 기능이 다양한 네이버 클라우드 플랫폼을 선택하게 되었는데, 쉽게 구축할 수 있는게 관계형 데이터베이스 밖에 없어서 MySQL을 ORM인 Sequelize를 공부해서 적용했다.
* Naver Cloud Platform : 원래 구글 클라우드 플랫폼을 주력으로 쓰고, 계속 그것만 쓰고 싶었지만... 공공기관용 클라우드 인증을 받은 국내 사업자만 사용해야 해서 네이버 클라우드 플랫폼을 선택했다. 예상외로 기능이 다양했지만, 문서가 조금 많이 빈약했다.

### 프로젝트하면서 겪은 문제와 해결방법

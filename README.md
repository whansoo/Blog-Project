# 🦄Blog-Project🦄

![version](<https://img.shields.io/badge/version-0.1.0-red>)   ![react](<https://img.shields.io/badge/react-16.13.1-yellow>)   ![mobx](<https://img.shields.io/badge/mobx-5.15.5-blueviolet>)  ![documentation](<https://img.shields.io/badge/documentation-yes-ff69b4>)

> 귀염뽀짝한 에어팟 케이스들은 다 여기있다!
>
> 에어팟 악세사리 쇼핑몰 **Happy New Ear** 입니다.



## 📺[Demo Video](https://www.youtube.com/) 



## 📚Wiki

##### ✔️Develop Period : 2022.10.05 ~ 2022.11.05

##### ✔️Developer

## 🔨기술 스택
<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-Saga-999999?style=for-the-badge&logo=Redux-Saga&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/Koa-33333D?style=for-the-badge&logo=Koa&logoColor=white">
</div>

## 📌프로젝트 정리
#### **1. 2022.10.05 - 프로젝트 생성 및 서버 구현 완료**   

- Node.js 사용 : Node.js는 자바스크립트 런타임 환경으로서 서버를 구현 할 수 있다. 그 덕에 이 자바스크립트 언어 한가지로 프론트엔드, 백엔드 모두 개발 할 수 있다.
- Koa 사용 : Node.js 환경에서 웹 서버를 구축할 때는 보통 Express, Hapi, Koa 등의 웹 프레임워크를 사용하는데 나는 koa를 선택 했다. 그 이유는 Express는 미들웨어, 라우팅, 템플릿, 파일 호스팅 등과 같은 다양한 기능이 자체적으로 내장되어 있는 반면, Koa는 미들웨어 기능만 갖추고 있으며 나머지는 다른 라이브러리를 적용하여 사용한다. 즉, Koa는 우리가 필요한 기능들만 붙여서 서버를 만들 수 있기 때문에 Express보다 훨씬 가볍다. 그리고  Koa는 async/await 문법을 정식으로 지원하기 때문에 비동기 작업을 더 편하게 관리할 수 있다.
- ESLint와 Prettier 적용 : ESLint는 문법 검사 도구이고, Prettier는 코드 스타일 자동 정리 도구이다.ESLint는 코드를 작성할 때 실수를 하면 에러 혹은 경고 메시지를 VS Code 에디터에서 바로 확인할 수 있게 해준다. Prettier는 가독성을 위하여 들여쓰기를 해주거나 세미클론등 자동으로 코드 정리를 해준다.
- nodemon 사용 : 서버 코드를 변경할 때마다 nodemon이라는 도구를 사용하면 서버를 자동으로 재시작해 준다.
- MongoDB 사용 : 서버를 개발할 때 데이터베이스를 사용하면 웹 서비스에서 사용되는 데이터를 저장하고, 효율적으로 조회하거나 수정할 수 있다. 기존에는 MySQL, OracleDB 같은 관계형 데이터베이스를 자주 사용했는데 분명 한계가 존재하고 이 때문에 나는 MongoDB를 선택 했다.
- esm 사용 : esm을 사용하면 import/export 문법을 사용 할 수 있다.이 문법을 사용하면 VS Code에서 자동 완성을 통해 모듈을 자동으로 쉽게 불러올 수 있고 코드도 더욱 깔끔해진다. 

#### **2. 2022.10.06 - MongoDB를 이용한 REST API 구현**   

- MongoDB 초기설정 : mongoose와 dotenv 설치 dotenv는 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발 도구이다. mongoose를 사용하여 MongoDB에 접속할 때, 서버에 주소나 계정 및 비밀번호가 필요할 경우도 있다. 이렇게 민감하거나 환경별로 달라질 수 있는 값은 코드 안에 직접 작성하지 않고, 환경변수로 설정하는 것이 좋다.
- mongoose로 서버와 DB 연결 : 연결할 때는 mongoose의 connect 함수를 사용한다.
- mongoose 스키마와 모델 적용 : 스키마는 컬렉션에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체이고. 이와 달리 모델은 스키마를 사용하여 만드는 인스턴스로, 데이터베이스에서 실제 작업을 처리할 수 있는 함수들을 지니고 있는 객체이다.
- MongDB Compass설치 : MongoDB를 위한 GUI 프로그램으로, 데이터베이스를 쉽게 조회하고 수정할 수 있다.
- REST API 구현 : Postman을 설치하여 CRUD가 제대로 동작되는지 확인 할 수 있다. async/await 문법으로 데이터베이스 저장 요청을 완료할 때까지 await를 사용하여 대기할 수 있다.또한, await를 사용할 때는 try/catch 문으로 오류를 처리해야 한다.
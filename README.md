<img src="https://user-images.githubusercontent.com/98297436/194762961-ae1d98eb-c8c4-4b4e-b535-0c6a325ce8c6.png" width="400" height="400"/>

# 🦄테코몽 (TECOMOG)🦄

![version](<https://img.shields.io/badge/version-0.1.0-red>)   ![react](<https://img.shields.io/badge/react-16.13.1-yellow>)   ![mobx](<https://img.shields.io/badge/mobx-5.15.5-blueviolet>)  ![documentation](<https://img.shields.io/badge/documentation-yes-ff69b4>)

>안녕하세요 **TECOMOG BLOG** 입니다.
>**TECOMOG**이라는 이름은 TECH, COMMUNICATION, BLOG의 합성어로 기존 기술블로그 방식에서 커뮤니케이션을 접목 시켜 새롭게 만든 BLOG입니다.
> 



## 📺[Demo Video](https://www.youtube.com/) 



## 📆 프로젝트 기간

##### ✔️Develop Period : 2022.10.05 ~ 2022.11.15

##### ✔️Developer : whansoo

##### ✔️기능 구현 목표 : 로그인/회원가입, 글쓰기/조회, 댓글, 마이페이지(비밀번호 찾기,프로필 사진등록), 댓글수, 추천수 필터적용

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

## 📚REST API Wiki
[▶ 테크몽 REST API 바로가기](https://github.com/whansoo/Blog-Project/wiki/%ED%85%8C%ED%81%AC%EB%AA%BD-REST-API)
## 📌프로젝트 개발 일지
#### **1. 2022.10.04 - 프로젝트 생성 및 서버 구현 완료**   

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
- Request Body 검증 : 글을 작성 할 때는 title, body, tags값을 모두 전달 받아야 한다.그리고 클라이언트가 값을 빼먹었을 때는 400 오류가 발생해야 한다. 이를 수월하게 해주기 위해 joi라는 라이브러리를 설치한다.joi를 사용하여 ctx.request.body를 검증하고 검증하고 나서 검증 실패인 경우 에러 처리를 해준다. 


#### **3. 2022.10.07 - 페이지네이션 구현**  

- 작성된 글들은 역순으로 적용 : sort함수를 사용하고 파라미터 안에는 1이나 -1로 설정하여 오름차순, 내림차순으로 정렬한다. 현재 내림차순으로 하고싶으니 -1로 설정한다.
- 보이는 개수 제한 : limit()함수를 사용하고, 파라미터에는 제한할 숫자를 넣으면 된다.10개를 제한 하고 싶으니 10으로 설정한다.
- 페이지 기능 구현 : skip함수에 파라미터로 10을 넣어 주면, 처음 10개를 제외하고 그다음 데이터를 불러온다. 그래서 skip함수의 파라미터에는 (page - 1) * 10을 넣어주면 10씩 증가할 때마다 1페이지씩 넘어간다.page값은 query에서 받아온다.이 값이 없으면 page값을 1로 간주한다.
- 마지막 페이지 번호 구현 :  Last-Page라는 커스텀 HTTP 헤더를 설정하고, 이 값이 제대로 나타나는지 Postman을 이용하여 확인 한다.
- 내용 길이 제한 : body의 길이가 200자 이상이면 뒤에 '…' 을 붙이고 문자열을 자르는 기능을 구현.find()를 통해 조회한 데이터는 mongoose 문서 인스턴스의 형태이므로 데이터를 바로 변형할 수 없다. 그 대신 toJSON() 함수를 실행하여 JSON 형태로 변환해야 한다.
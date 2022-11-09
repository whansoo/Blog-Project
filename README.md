![테크몽](https://user-images.githubusercontent.com/98297436/195282182-3e444093-7c03-4191-8625-ce201113d410.gif)

# 🦄테코몽 (TECOMOG)

![version](<https://img.shields.io/badge/version-0.1.0-red>)   ![react](<https://img.shields.io/badge/react-16.13.1-yellow>)   ![mobx](<https://img.shields.io/badge/mobx-5.15.5-blueviolet>)  ![documentation](<https://img.shields.io/badge/documentation-yes-ff69b4>)

>안녕하세요 **TECOMOG BLOG** 입니다.
>**TECOMOG**이라는 이름은 TECH, COMMUNICATION, BLOG의 합성어로 기존 기술블로그 방식에서 커뮤니케이션을 접목 시켜 새롭게 만든 BLOG입니다.

>프로젝트 주소 : http://whanblog.herokuapp.com/



## 📺[Demo Video](https://www.youtube.com/) 



## 📆 프로젝트 기간

##### ✔️Develop Period : 2022.10.05 ~ 2022.11.15

##### ✔️Developer : whansoo

##### ✔️기능 구현 목표 : 로그인/회원가입, 글쓰기/조회, 글 수정/삭제, 글 목록, 페이지네이션, Tag/Username 필터

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
[▶ 테코몽 REST API 바로가기](https://github.com/whansoo/Blog-Project/wiki/%ED%85%8C%EC%BD%94%EB%AA%BD-REST-API)
## 와이어 프레임
https://www.figma.com/file/VdFqvp1yaHNDdWvI2fotJX/blog%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1
## 📌프로젝트 개발 일지
### ✔️Back End
<details>
    <summary>1. 2022.10.04 - 프로젝트 생성 및 서버 구현 완료</summary></br>
   
- Node.js 사용 : Node.js는 자바스크립트 런타임 환경으로서 서버를 구현 할 수 있다. 그 덕에 이 자바스크립트 언어 한가지로 프론트엔드, 백엔드 모두 개발 할 수 있다.
- Koa 사용 : Node.js 환경에서 웹 서버를 구축할 때는 보통 Express, Hapi, Koa 등의 웹 프레임워크를 사용하는데 나는 koa를 선택 했다. 그 이유는 Express는 미들웨어, 라우팅, 템플릿, 파일 호스팅 등과 같은 다양한 기능이 자체적으로 내장되어 있는 반면, Koa는 미들웨어 기능만 갖추고 있으며 나머지는 다른 라이브러리를 적용하여 사용한다. 즉, Koa는 우리가 필요한 기능들만 붙여서 서버를 만들 수 있기 때문에 Express보다 훨씬 가볍다. 그리고  Koa는 async/await 문법을 정식으로 지원하기 때문에 비동기 작업을 더 편하게 관리할 수 있다.
- ESLint와 Prettier 적용 : ESLint는 문법 검사 도구이고, Prettier는 코드 스타일 자동 정리 도구이다.ESLint는 코드를 작성할 때 실수를 하면 에러 혹은 경고 메시지를 VS Code 에디터에서 바로 확인할 수 있게 해준다. Prettier는 가독성을 위하여 들여쓰기를 해주거나 세미클론등 자동으로 코드 정리를 해준다.
- nodemon 사용 : 서버 코드를 변경할 때마다 nodemon이라는 도구를 사용하면 서버를 자동으로 재시작해 준다.
- MongoDB 사용 : 서버를 개발할 때 데이터베이스를 사용하면 웹 서비스에서 사용되는 데이터를 저장하고, 효율적으로 조회하거나 수정할 수 있다. 기존에는 MySQL, OracleDB 같은 관계형 데이터베이스를 자주 사용했는데 분명 한계가 존재하고 이 때문에 나는 MongoDB를 선택 했다.
- esm 사용 : esm을 사용하면 import/export 문법을 사용 할 수 있다.이 문법을 사용하면 VS Code에서 자동 완성을 통해 모듈을 자동으로 쉽게 불러올 수 있고 코드도 더욱 깔끔해진다. 
 </details>

<details>
    <summary>2. 2022.10.06 - MongoDB를 이용한 REST API 구현</summary></br>
    
- MongoDB 초기설정 : mongoose와 dotenv 설치 dotenv는 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발 도구이다. mongoose를 사용하여 MongoDB에 접속할 때, 서버에 주소나 계정 및 비밀번호가 필요할 경우도 있다. 이렇게 민감하거나 환경별로 달라질 수 있는 값은 코드 안에 직접 작성하지 않고, 환경변수로 설정하는 것이 좋다.
- mongoose로 서버와 DB 연결 : 연결할 때는 mongoose의 connect 함수를 사용한다.
- mongoose 스키마와 모델 적용 : 스키마는 컬렉션에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체이고. 이와 달리 모델은 스키마를 사용하여 만드는 인스턴스로, 데이터베이스에서 실제 작업을 처리할 수 있는 함수들을 지니고 있는 객체이다.
- MongDB Compass설치 : MongoDB를 위한 GUI 프로그램으로, 데이터베이스를 쉽게 조회하고 수정할 수 있다.
- REST API 구현 : Postman을 설치하여 CRUD가 제대로 동작되는지 확인 할 수 있다. async/await 문법으로 데이터베이스 저장 요청을 완료할 때까지 await를 사용하여 대기할 수 있다.또한, await를 사용할 때는 try/catch 문으로 오류를 처리해야 한다.
- Request Body 검증 : 글을 작성 할 때는 title, body, tags값을 모두 전달 받아야 한다.그리고 클라이언트가 값을 빼먹었을 때는 400 오류가 발생해야 한다. 이를 수월하게 해주기 위해 joi라는 라이브러리를 설치한다.joi를 사용하여 ctx.request.body를 검증하고 검증하고 나서 검증 실패인 경우 에러 처리를 해준다. 
</details>

<details>
    <summary>3. 2022.10.07 - 페이지네이션 구현</summary></br>
    
- 작성된 글들은 역순으로 적용 : sort함수를 사용하고 파라미터 안에는 1이나 -1로 설정하여 오름차순, 내림차순으로 정렬한다. 현재 내림차순으로 하고싶으니 -1로 설정한다.
- 보이는 개수 제한 : limit()함수를 사용하고, 파라미터에는 제한할 숫자를 넣으면 된다.10개를 제한 하고 싶으니 10으로 설정한다.
- 페이지 기능 구현 : skip함수에 파라미터로 10을 넣어 주면, 처음 10개를 제외하고 그다음 데이터를 불러온다. 그래서 skip함수의 파라미터에는 (page - 1) * 10을 넣어주면 10씩 증가할 때마다 1페이지씩 넘어간다.page값은 query에서 받아온다.이 값이 없으면 page값을 1로 간주한다.
- 마지막 페이지 번호 구현 :  Last-Page라는 커스텀 HTTP 헤더를 설정하고, 이 값이 제대로 나타나는지 Postman을 이용하여 확인 한다.
- 내용 길이 제한 : body의 길이가 200자 이상이면 뒤에 '…' 을 붙이고 문자열을 자르는 기능을 구현.find()를 통해 조회한 데이터는 mongoose 문서 인스턴스의 형태이므로 데이터를 바로 변형할 수 없다. 그 대신 toJSON() 함수를 실행하여 JSON 형태로 변환해야 한다.
</details>

<details>
    <summary>4. 2022.10.08 ~ 2022.10.12 - JWT 회원인증 구현</summary></br>
    
- JWT : JWT는 데이터가 JSON으로 이루어져 있는 토큰을 의미한다. 두 개체가 서로 안전하게 정보를 주고받을 수 있도록 정의된 기술이다.
- 토큰 기반 인증 시스템 사용 : 토큰은 로그인 이후 서버가 만들어 주는 문자열 이다. 해당 문자열 안에는 사용자의 로그인 정보가 들어 있고, 해당 정보가 서버에서 발급 되었음을 증명하는 서명이 있다. 서버에서 만들어 준 토큰은 서명이 있기 때문에 무결성이 보장 된다. 토큰 기반 인증 시스템의 장점은 서버에서 사용자 로그인 정보를 기억하기 위해 사용하는 리소스가 적다는 것이고 사용자 쪽에서 로그인 상태를 지닌 토큰을 가지고 있으므로 서버의 확장성이 매우 높다.
- 토큰 기반 인증 시스템 사용한 이유 : 인증 시스템을 구현하기 간편하고 사용자들의 인증 상태를 관리 하기도 쉽기 때문이다.
- user스키마/모델 구현 : 비밀번호를 데이터베이스에 저장할 때 그냥 텍스트로 저장하면 보안상 위험하여 bcrypt라는 라이브러리를 사용하여 저장한다.
- 회원가입 구현 : findByUsername 스태틱 메서드를 사용하여 기존에 해당 username이 존재하는지 확인. setPassword인스턴스 함수를 사용하여 비밀번호를 설정.
- hashedPassword 지우기 : JSON으로 변환한 후 delete를 통해 필드를 지움.
- 로그인 구현 : username, password값이 제대로 입력 되지 않으면 에러로 처리하고 findByUsername을 통해 사용자를 찾는다 만약 사용자 데이터가 없으면 에러로 처리한다. 계정이 있다면 checkPassword를 통해 비밀번호를 검사하고 성공 했을 때는 계정을 응답 한다.
- 비밀키 설정 : 우선 JWT토큰을 만들기 위해 jsonwebtoken이라는 모듈을 설치한다. .env 파일을 열어서 JWT토큰을 만들 때 사용할 비밀키를 입력 해야 한다. 이 비밀키는 JWT토큰의 서명을 만드는 과정에서 사용된다.
- 토큰 발급 하기 : 회원가입과 로그인에 성공했을 때 토큰을 사용자에게 전달 해야 한다. 두 가지의 방법이 있는데  첫번째 방법은 localStorage 혹은 sessionStorage에 담아서 사용하고 두번째 방법은 브라우저의 쿠키에 담아서 사용하는 방법이다.localStorage 혹은 sessionStorage에 토큰을 담으면 사용하기가 매우 편리하고 구현하기도 쉽다. 하지만 만약 누군가가 페이지에 악성 스크립트를 삽입한다면 쉽게 토큰을 탈취할 수 있다.
쿠키에 담아도 같은 문제가 발생할 수 있지만, httpOnly라는 속성을 활성화하면 자바스크립트를 통해 쿠키를 조회할 수 없으므로 악성 스크립트로부터 안전 하다. 그 대신 CSRF(Cross Site Request Forgery)라는 공격에 취약해질 수 있다.여기서는 사용자 토큰을 쿠키에 담아서 사용한다.
- 토큰 검증하기 : if ,try catch구문을 통해 사용자의 토큰을 확인한 후 검증하는 작업을 한다.
- 로그아웃 구현 : 쿠키를 지운다.
</details>

<details>
    <summary>5. 2022.10.13 - posts API에 회원 인증 시스템 구현</summary></br>

- post 스키마 수정 : post스키마 안에 id와 username을 넣어 수정해준다.
- 로그인 한 후 API 사용 가능 : checkLoggedIn이라는 미들웨어를 만들어서 로그인을 해야만 블로그 글쓰기, 수정, 삭제가 가능 하도록 구현한다. 그리고 라우터에 사용한다.
- 글 작성시 사용자 정보 넣기 : 로그인된 사용자만 글을 작성할 수 있게 했으니, 글 작성 할때 사용자 정보를 넣어서 데이터 베이스에 저장 한다.
- 글 수정 및 삭제 권한 확인 : findById로 id가 포함된 포스트를 찾은 후 ctx.state에 담는다. 포스트가 존재하지 않을 때 404(Not Found)에러를 보낸다. checkOwnPost 미들웨어는 id로 찾은 포스트가 로그인 중인 사용자가 작성한 포스트인지 확인 해 준다. 만약 사용자의 포스트가 아니라면 403에러를 보낸다.
- username/tags로 필터링 하기 : 특정 사용자가 작성한 포스트만 조회하거나 특정 태그가 있는 포스트만 조회 가능.
</details>

### ✔️Front End
<details>
    <summary>1. 2022.10.14 - frontend 시작 작업 설정 완료</summary></br>

- frontend 시작 : react 프로젝트 생성, 자동 import 기능을 할 수 있게 jsconfig.json 파일을 생성
- 라우터 적용 : react-router-dom 라이브러리 설치, index.js에 BrowserRouter로 App을 감싼다.그리고 App.js에서 Route를 이용하여 각 라우트의 경로를 지정한다.
- 스타일 설정 : styled-components 설치한다. styled-components는 컴포넌트 기반으로 CSS를 작성할 수 있게 도와주는 라이브러리이다. 장점은 Scss라이브러리 설치 없이 Scss 문법을 사용할 수 있다.자유로운 CSS 커스텀 컴포넌트를 만들 수 있다.컴포넌트의 props를 참조할 수 있으며, props의 값에 따라 스타일을 다르게 코딩 할 수 있다.
- 리덕스 적용 : redux 라이브러리 설치 한다. redux는 상태관리를 하는 라이브러리 이고 장점은 1.state를 쉽게 관리할 수 있다. 2. 웹사이트의 상태를 어디서 관리할지 고민하지 않아도 된다. 3. 어떤 액션이 취해졌고, 어떤 데이터가 어떻게 변경되었는지 쉽게 알 수 있다. 이런 것들을 떠나서 리덕스를 배워보니 편하고 취향에 맞아서 계속 사용 하게 되는 것 같다.
- redux-saga : redux saga를 통해서 api비동기 처리를 하여 서버와 데이터를 주고 받는다
특별히 덕스 구조를 활용해서 각각의 파일에서 saga들을 생성하여 하나의 rootSaga()함수로 묶어서 사용한다.
Saga에서 중요하게 생각 하는 것은 비동기 상태를 요청,성공,실패 3단계로 좀더 세밀하게 나눈다는 것이다.
리덕스 사가는 사이드 이펙트를 다루는 함수 또한 제공 하고 있다.
takeLatest()함수는 스토어에 들어오는 액션 중에서 특정 액션에 반응하여 기능을 담당한다
call()이팩터는 인자로 받은 함수를 실행한다.
put()함수는 액션을 스토어로 디스패치한다.
컴포넌트 -> 요청 액션을  dispatch하여 스토어에게 비동기 요청 전달 -> 사가는 액션을 감시 하고 있다가 요청 액션을 발견하면
특적함수 실행 -> 이 함수는 비동기 로직을 제어하는 제너레이터 ->  call()함수로  API호출 후 결과를 받는다 -> put()함수로 받은 데이터를 저장하는 액션 발생
-> 리듀서는 액션을 받아 스토어 갱신

- 리덕스 사가 장점 : 리덕스 사가 장점은 1.비동기 작업을 할 때 기존 요청을 취소 처리 할 수 있다. 2.특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행 할 수 있다. 3. 웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리 할 수 있다. 4.API 요청이 실패했을 때 재요청하는 작업을 할 수 있다.
</details>

<details>
    <summary>2. 2022.10.15 ~ 2022.10.20 - 로그인/회원가입 구현</summary></br>

- styled-components 적용 : styled-components 라이브러리를 사용하여 리액트 컴포넌트를 쉽게 만들 수 있으며 Javascript 코드 내에서 일반 CSS로 구성 요소의 스타일을 지정할 수 있다.
- 로그인/회원가입 UI 구현 : 화면에 보이는 것들은 모두 components디렉터리에 작성한다. 여기서는 로그인/회원가입을 구현 할 것이므로 components안에 auth폴더를 만들고 js파일을 만들어 코드를 작성한다.
공통으로 사용 할 것들은 common이라는 디렉터리 안에 코드를 작성한다. components안에서 작성한 코드들은 pagse디렉터리안 page.js라는 파일을 만들어서 import로 불러와 하나의 페이지를 만든다.
- pages 구현 : componentes안에 header, post, posts, footer등을 작성 한 것들은 pages안에서 필요 한 것들만 불러와 하나의 페이지를 만든다.
- 리덕스로 로그인/회원가입 상태 관리 : modules디렉터리 안에 액션타입, 액션생성함수, 리듀서를 작성한다. 모듈 작성 후에 src 디렉터리에 containers 디렉터리를 만든 후 다양한 컨테이너 컴포넌트들을 종류별로 분류하여 만든다. 컨테이너 컴포넌트에서는 useDispatch와 useSelector 함수를 사용하여 컴포넌트를 리덕스와 연동시킨다. 위 컴포넌트에서는 onChange 함수와 onSubmit 함수를 구현하여 필요한 액션을 디스패치하도록 구현해 주었다. 또한, useEffect를 사용하여 맨 처음 렌더링 후 initializeForm 액션 생성 함수를 호출했다. 이 작업을 하지 않으면, 로그인 페이지에서 값을 입력한 뒤 다른 페이지로 이동했다가 다시 돌아왔을 때 값이 유지된 상태로 보이게 된다.
- API 연동 : axios를 사용하여 API를 연동한다. 그리고 리덕스에서 비동기 작업을 쉽게 관리하기 위해 redux-saga와 이전에 만들어서 사용했던 createRequestSaga 유틸 함수를 이용한다.
- 프록시 설정 : 현재 백엔드 서버는 4000 포트, 리액트 개발 서버는 3000 포트로 열려 있기 때문에 별도의 설정 없이 API를 호출하려고 하면 오류가 발생한다. 이 오류를 CORS오류라고 부르는데 네트워크 요청을 할 때 주소가 다른 경우에 발생한다. 이 오류를 해결하려면 다른 주소에서도 API를 호출할 수 있도록 서버 쪽 코드를 수정해야 한다. 여기서는 프록시라는 기능을 사용하여 해결 할 것이다.
- API함수 작성 : 회원 인증에 필요한 API를 사용하기 쉽도록 함수화하여 파일로 작성.
- 회원가입/로그인 에러 처리 : username, password, passwordConfirm 중 하나라도 비어 있을 때, password와 passwordConfirm 값이 일치하지 않을 때, username이 중복될 때 에러가 나타나도록 한다.
- 로그인 유지 :  localStorage를 사용하여 로그인 유지를 한다.
- 로그아웃 기능 : 로그아웃 API를 호출하고, localStorage 안의 값을 없애 주면 된다.
</details>

<details>
    <summary>3. 2022.10.18 ~ 2022.10.21 - 글쓰기 구현/글 읽기</summary></br>

- 글을 작성하는 에디터는 Quill이라는 라이브러리를 사용하여 구현한다.
- Editor컴포넌트를 만들고 제목과 내용을 입력 할 수 있게 코드를 작성한다.
- WriteButtons 컴포넌트는 포스트 작성 및 취소를 할 수 있는 컴포넌트이다. 이 컴포넌트에 두 개의 버튼을 만들고 onPublish, onCancel이라는 props를 받아 와서 사용하도록 한다.
- 글쓰기도 리덕스로 상태관리를 해준다. 모듈디렉터리 안에 write라는 파일을 만들고 액션 타입, 액션 생성함수, 초기화 , 리듀서를 작성한다. 다 작성한 후에 루트 리듀서에도 추가 한다.
- EditorContainer 컴포넌트에서는 title 값과 body 값을 리덕스 스토어에서 불러와 Editor 컴포넌트에 전달해 주었다.onChangeField 함수는 useCallback으로 감싸 주었는데, 이는 Editor 컴포넌트에서 사용할 useEffect에서 onChangeField를 사용할 것이기 때문이다.
- 글쓰기 API 연동: 리덕스 액션과 사가를 사용하여 함수를 호출한다. WriteButtonsContainer 컴포넌트에서는 포스트 등록 버튼을 누르면 현재 리덕스 스토어 안에 들어 있는 값을 사용하여 새 포스트를 작성한다. 그리고 history 객체를 사용하여, 취소 버튼을 누르면 브라우저에서 뒤로 가기를 하도록 만들었다.
</details>

<details>
    <summary>4. 2022.10.22 ~ 2022.10.24 - 글목록 구현</summary></br>

- PostList라는 컴포넌트를 만든다. 이 컴포넌트에서는 포스트들을 배열로 받아 와서 렌더링해 주고, 사용자가 로그인 중이라면 페이지 상단 우측에 글쓰기 아이콘이 보이도록 해준다.
- 작성된 글이 10개가 넘으면 페이지 네이션 구현으로 인하여 다음페이지 버튼이 활성화 되고 그 버튼을 누르면 다음 페이지로 넘어간다.
- 글 목록에는 제목, 내용, 태그, 작성자, 작성 날짜가 보여지고 내용은 200글자 제한을 걸어놔서 내용이 다 보이진 않는다.
- 글 목록 위에는 태그 필터를 걸어놔서 관심있는 태그를 클릭 하였을 때 그 태그를 한 글만 보여준다.
- 글 목록을 보면 작성자도 나와있는데 그 작성자를 클릭 하면 그 작성자가 글을 쓴 내용을 모두 볼 수 있다.
- 글을 작성된 목록은 최신 순으로 정렬이 되어 보여준다. 맨 마지막에 작성된 글이 맨 처음에 보여지는 것 이다.
</details>

<details>
    <summary>5. 2022.10.31 - 글 수정/삭제</summary></br>

- 내가 쓴 글은 수정이나 삭제가 가능하다.
- 다른 user가 쓴 글을 수정/삭제가 불가능 하고 보는 것만 가능하다.
</details>
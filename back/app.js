const express = require("express");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const app = express();
const cors = require("cors"); // npm i cors : cors문제 해결
const passportConfig = require("./passport");

// npm i -D nodemon@2
// react의 hot loader와 같은 라이브러리

// npx sequelize db:create
// 서버 실행시 db도 연결됨
db.sequelize
  .sync() //
  .then(() => {
    console.log("db 연결 성공!!");
  })
  .catch(console.error);

passportConfig();
// use : middleware 연결
// 브라우저(:3000) - 프론트서버(:3000) - 백엔드서버(:3065)와 같은 구조에서
// 브라우저 -> 백엔드 포트번호가 다른 것끼리 소통불가(브라우저가 막음)
// but 프론트서버 -> 벡엔드서버, 에서 는 소통이 가능함
// proxy방식: 브라우저 -> 프론트 서버 -> 백엔드서버 이렇게 소통하는 방식
// 미들웨어를 사용한 cors해결방법 : npm i cors
// but cors()는 모든 주소에 대한 접근허용을 나타내는데,
// 이렇게 하면 보안에 취약하므로, 주소를 추가적으로 적어줘야함.
app.use(
  cors({
    // '*' : 모든 주소
    // true : 접근해온 주소가 자동으로 허용처리됨
    origin: true,
    credentials: false,
  })
);
// 프론트에서 받은 데이터를 req.body로 넣어주는 역할
// 그렇기 때문에 프론트와 서버가 통신하는
// get, post와 같은 함수 위에 위치해야 정산적인 통신이 가능
app.use(express.json()); // 프론트에서 보내온 json파일을 req.body로
app.use(express.urlencoded({ extended: true })); // form submit했을 때 데이터를 req.body로

// GET은 서버로부터 정보를 조회하기 위해 설계된 메소드
// GET은 요청을 전송할 때 필요한 데이터를 Body에 담지 않고, 쿼리스트링을 통해 전송
// POST는 리소스를 생성/변경하기 위해 설계된 메소드
// 데이터를 HTTP 메세지의 Body에 담아서 전송
app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/", (req, res) => {
  res.send("hello api");
});

app.get("/posts", (req, res) => {
  // 데이터는 json으로 표현
  res.json([
    {
      id: 1,
      content: "hello1",
    },
    {
      id: 2,
      content: "hello2",
    },
    {
      id: 3,
      content: "hello3",
    },
  ]);
});

// router 분리
// '/post' : 분리한 router들의 공통된 주소를 뽑아준 것
app.use("/post", postRouter);
// '/user' : 분리한 router들의 공통된 주소를 뽑아준 것
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행중");
});

// app.get - 가져오기, 데이터 전송 x
// app.post - 생성하기, 데이터 전송 o
// app.put - 전체 수정하기, 데이터 전송 o
// app.delete - 제거하기, 데이터 전송 x
// app.patch - 부분 수정하기, 데이터 전송 o
// app.options - 찔러보기(서버에게 지금 데이터 요청해도 됨? 하고 물어보는 것)
// app.gead - 헤더만 가져오기(헤더/바디)

// // HTTP는 웹상에서 클라이언트와 서버 간에 요청/응답으로 데이터를 주고 받을 수 있는 프로토콜
// // node가 http라는 모듈을 제공
// // http를 이용하여 코딩을 하여 돌리면
// // http가 서버역할을 해주는 것이지 노드 자체가 서버가 아님
// const http = require("http");
// // req: request 요청, 브라우저나 프론트 서버로부터 온 요청
// // res: response 응답
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   res.write("hello node1\n");
//   res.write("hello node2\n");
//   res.write("hello node3\n");
//   res.write("hello node4\n");
//   res.end("Hello node5");
// });
// server.listen(3065, () => {
//   console.log("서버 실행 중");
// });

// npm i mysql2 - 외부 mysql과 연동하기 위한 드라이버
// npm i sequelize - js를 sql로 바꿔줌
// npm i sequelize-cli

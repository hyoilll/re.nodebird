const express = require("express");

const app = express();

// GET은 서버로부터 정보를 조회하기 위해 설계된 메소드
// GET은 요청을 전송할 때 필요한 데이터를 Body에 담지 않고, 쿼리스트링을 통해 전송
// POST는 리소스를 생성/변경하기 위해 설계된 메소드
// 데이터를 HTTP 메세지의 Body에 담아서 전송
app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/api", (req, res) => {
  res.send("hello api");
});

app.get("/api/posts", (req, res) => {
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

app.post("/api/post", (req, res) => {
  res.json({ id: 1, content: "hello1" });
});

app.delete("/api/posts", (req, res) => {
  res.json({ id: 1 });
});

app.listen(3065, () => {
  console.log("서버 실행중");
});

// app.get - 가져오기
// app.post - 생성하기
// app.put - 전체 수정하기
// app.delete - 제거하기
// app.patch - 부분 수정하기
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

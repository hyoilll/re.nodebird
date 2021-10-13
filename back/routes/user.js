const express = require("express");
const { User } = require("../models");
const bcrypt = require("bcrypt"); // npm i bcrypt : 비밀번호 암호화 라이브러리

const router = express.Router();

// '/' : 호출하는 곳에서 '/user'를 보내줬기에 '/user'라고 인식됨
router.post("/", async (req, res, next) => {
  // req는 사용자로부터 서버로의 요청
  // res는 서버로부터 사용자로의 대답
  // req(requestion) : front서버 redux-saga의 singupAPI 함수로부터
  // axios.post 함수를 사용하여 data를 넘겨받음
  // post는 body에 데이터를 담아 전송하기 때문에 req.body가 됨

  try {
    // db에 이미 같은 정보가 저장되어 있는지 확인하는 단계
    // findOne : find 메서드에서 조회할때 가장 첫번째 배열 데이터 한개만 조회하고 싶을때 사용
    // 데이터가 이미 존재한다면 해당 데이터다 반환되고,
    // 데이터가 없다면 Null이 반환됨
    const exUser = await User.findOne({
      // where : 조건
      where: {
        // 같은 이메일이 저장되어 있는지
        email: req.body.email,
      },
    });
    // 예외처리
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다.");
    }
    // bcrypt.hash(해쉬화할 데이터, 해쉬화 단계)
    // 해쉬화 단계 : 보통 10~13을 사용하는데 높을수록 보안은 좋지만,
    // 그만큼 서버를 느리게 할 수 도있음.
    const hashedPassword = await bcrypt.hash(req.body.pw, 12);
    // create : table안에 데이터를 넣는 것
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.log(error);
    next(error); // status(500)
  }
});

module.exports = router;

// status : 간단하게 상태코드와 데이터를 보낼 수 있은 함수//
// 200 : 성공
// 300 : 리 다이렉트
// 400 : 클라이언트 에러
// 500 : 서버 에러

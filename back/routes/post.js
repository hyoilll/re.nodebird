const express = require("express");

const router = express.Router();

// '/' : 호출하는 곳에서 '/post'를 보내줬기에 '/post'라고 인식됨
router.post("/", (req, res) => {
  res.json({ id: 1, content: "hello1" });
});

// '/' : 호출하는 곳에서 '/post'를 보내줬기에 '/post'라고 인식됨
router.delete("/", (req, res) => {
  res.json({ id: 1 });
});

module.exports = router;

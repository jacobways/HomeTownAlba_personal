const express = require("express");
const companyRouter = express.Router();

// 사업자 회원가입 요청
companyRouter.post("/", (req, res) => {
  res.end();
});

module.exports = companyRouter;

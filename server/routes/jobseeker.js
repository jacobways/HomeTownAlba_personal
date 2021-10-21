const { JobSeeker } = require("../models");
const express = require("express");
const jobSeekerRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { jobSeekrAuth } = require("../middleware/jobSeekerAuth");
const saltRounds = 10;

// 구직자 회원가입 요청

jobSeekerRouter.get("/test", (req, res) => {
  res.send("test 성공");
});

jobSeekerRouter.get("/auth", jobSeekrAuth, (req, res) => {
  res.status(200).json({
    userId: req.jobSeekerUser.userId,
    isAuth: true,
    name: req.jobSeekerUser.name,
    age: req.jobSeekerUser.age,
    gender: req.jobSeekerUser.age,
    question: req.jobSeekerUser.question,
    image: req.jobSeekerUser.image,
  });
});

jobSeekerRouter.post("/", async (req, res) => {
  let jobSeekrInfo = await JobSeeker.findOne({
    where: { userId: req.body.userId },
  });
  if (!jobSeekrInfo) {
    // 비밀번호 암호화
    let hashPassword;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return err;
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        if (err) return err;
        hashPassword = hash;
        // console.log(hashPassword); 암호화된 비밀번호
        let registerInfo = {
          userId: req.body.userId,
          password: hashPassword,
          name: req.body.name,
          age: req.body.age,
          gender: req.body.age,
          question: req.body.question,
          image: req.body.image,
        };
        JobSeeker.create(registerInfo);
        return res.status(200).json({
          registersuccess: true,
          message: "회원가입에 성공하셨습니다.",
        });
      });
    });
  } else {
    return res.status(400).json({ message: "회원가입에 실패하셨습니다." });
  }
});

// 구직자 로그인요청

jobSeekerRouter.post("/login", async (req, res) => {
  // console.log(req.cookies);
  // 1.username으로 먼저 찾기
  let jobSeekrInfo1 = await JobSeeker.findOne({
    where: { userId: req.body.userId },
  });

  if (!jobSeekrInfo1) {
    return res
      .status(404)
      .json({ message: "요청하신 구직자를 찾을수 없습니다." });
  } else {
    //   2. 있는 경우 password까지 같은것 찾기
    // console.log(jobSeekrInfo1.dataValues.password);
    // res.send("로그인 테스트");

    bcrypt.compare(
      req.body.password,
      jobSeekrInfo1.dataValues.password,
      function (err) {
        // 비밀번호가 틀린 경우
        if (err)
          return res.status(400).json({ message: "로그인에 실패하였습니다." });
        // 비밀번호 맞는 경우 토큰 생성
        let uuid = jobSeekrInfo1.dataValues.id;

        const token = jwt.sign(uuid, process.env.ACCESS_SECRET);
        return res
          .status(200)
          .cookie("token", token, {
            expires: new Date(Date.now() + 900000),
            domain: "localhost",
            path: "/",
            secure: false,
            httpOnly: true,
          })
          .json({
            data: { token },
            loginSuccess: true,
            message: "로그인에 성공하셨습니다.",
          });
      }
    );
  }
});

jobSeekerRouter.post("/logout", jobSeekrAuth, (req, res) => {
  console.log(req.cookies);
  // auth 미들웨어 추가
  // auth에서 받아온 req.jobseeker.id = uuid
  // uuid로 찾은 후 token을 삭제
  // console.log("로그인한 유저정보", req.jobSeekerUser);
  // console.log("토큰", req.token);
  // console.log(req.cookies);
  return res
    .status(200)
    .json({ loginSuccess: false, message: "로그아웃에 성공하셨습니다." });
});

jobSeekerRouter.get("/:id", async (req, res) => {
  // auth로 id 가져와서 처리하면 됨
  // id 가져와서 찾고, 보내주면됨

  res.send("특정 구직자 불러오기");
});
jobSeekerRouter.delete("/:id", async (req, res) => {
  // auth로 id 가져와서 처리하면 됨
  // id 가져와서 찾고, 삭제

  res.send("특정 구직자 정보 삭제하기");
});
jobSeekerRouter.patch("/", (req, res) => {
  // auth로 id 가져와서 처리하면 됨
  // id 가져와서 찾고, req.body에 있는 내용으로 업데이트
  res.send("업데이트");
});

module.exports = jobSeekerRouter;

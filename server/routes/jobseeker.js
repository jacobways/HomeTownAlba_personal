const { JobSeeker } = require("../models");
const express = require("express");
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../middleware/validationCheck");

const jobSeekerRouter = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

jobSeekerRouter.get("/", isLoggedIn, (req, res) => {
  // console.log("test", req.isAuthenticated());
  // console.log(req.user);
  return res.status(200).json({
    loginSuccess: req.isAuthenticated(),
    message: "특정 구직자 불러오기",
  });
});

// 구직자 회원가입 요청

jobSeekerRouter.get("/test", (req, res) => {
  res.send("test 성공");
});

jobSeekerRouter.post("/", isNotLoggedIn, async (req, res) => {
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
          gender: req.body.gender,
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
    return res.status(400).json({
      message: "이미 존재하는 아이디이므로, 회원가입에 실패하셨습니다.",
    });
  }
});

// 구직자 로그인요청

jobSeekerRouter.post("/login", isNotLoggedIn, (req, res, next) => {
  // passport 구현하기

  passport.authenticate("local", (authError, jobSeekr) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!jobSeekr) {
      return res.status(403).json({ message: "가입되지 않은 회원입니다." });
    }
    return req.login(jobSeekr, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // console.log(req.session.passport.user);
      let jobSeekrId = req.session.passport.user;

      return res.status(200).json({
        loginSuccess: true,
        jobSeekrId: jobSeekrId,
        message: "로그인에 성공하셨습니다.",
      });
    });
  })(req, res, next);

  // console.log(req.cookies);
  // 1.username으로 먼저 찾기
  // let jobSeekrInfo1 = await JobSeeker.findOne({
  //   where: { userId: req.body.userId },
  // });

  // if (!jobSeekrInfo1) {
  //   return res
  //     .status(404)
  //     .json({ message: "요청하신 구직자를 찾을수 없습니다." });
  // } else {
  //   //   2. 있는 경우 password까지 같은것 찾기
  //   // console.log(jobSeekrInfo1.dataValues.password);
  //   // res.send("로그인 테스트");

  //   bcrypt.compare(
  //     req.body.password,
  //     jobSeekrInfo1.dataValues.password,
  //     function (err) {
  //       // 비밀번호가 틀린 경우
  //       if (err)
  //         return res.status(400).json({ message: "로그인에 실패하였습니다." });
  //       // 비밀번호 맞는 경우 토큰 생성
  //       let uuid = jobSeekrInfo1.dataValues.id;

  //       const token = jwt.sign(uuid, process.env.ACCESS_SECRET);
  //       return res
  //         .status(200)
  //         .cookie("token", token, {
  //           expires: new Date(Date.now() + 900000),
  //           domain: "localhost",
  //           path: "/",
  //           secure: false,
  //           httpOnly: true,
  //         })
  //         .json({
  //           data: { token },
  //           loginSuccess: true,
  //           message: "로그인에 성공하셨습니다.",
  //         });
  //     }
  //   );
  // }
});

jobSeekerRouter.post("/logout", isLoggedIn, (req, res) => {
  console.log("구글", req.user);
  // auth 미들웨어 추가
  // auth에서 받아온 req.jobseeker.id = uuid
  // uuid로 찾은 후 token을 삭제
  // console.log("로그인한 유저정보", req.jobSeekerUser);
  // console.log("토큰", req.token);
  // console.log(req.cookies);
  req.logout();
  req.session.destroy();
  res
    .status(200)
    .json({ loginSuccess: false, message: "로그아웃에 성공하셨습니다." });
});

jobSeekerRouter.delete("/", isLoggedIn, (req, res) => {
  // auth로 id 가져와서 처리하면 됨 -> url 수정 (/:id -> /)
  // id 가져와서 찾고, 삭제
  console.log(req.user.dataValues.id);
  const jobSeekerId = req.user.dataValues.id; //mysql에서 생성해주는 id
  // id가 없는 경우는 미들웨어에 의해 걸림
  JobSeeker.destroy({ where: { id: jobSeekerId } }).then((data) => {
    if (!data) {
      res.status(404).json({ message: "일치하는 구직정보가 없습니다" });
    } else {
      res.status(202).json({ message: "구직정보가 삭제 되었습니다" });
    }
  });
});

// 비밀번호 변경은 따로 구현
jobSeekerRouter.patch("/password", isLoggedIn, async (req, res) => {
  const { password, question } = req.body;

  const jobSeekerId = req.user.dataValues.id; //mysql에서 생성해주는 id

  const passwordJobSeeker = await JobSeeker.findOne({
    where: { id: jobSeekerId },
  });
  // 질문한 내용이 맞으면, password를 복호화해서 저장

  if (question === passwordJobSeeker.question) {
    // 질문의 답을 올바르게 입력한 경우
    let hashPassword;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return err;
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) return err;
        hashPassword = hash;

        JobSeeker.update(
          { password: hashPassword },
          { where: { id: jobSeekerId } }
        )
          .then((data) => {
            res
              .status(200)
              .json({ message: "입력하신 비밀번호로 수정되었습니다." });
          })
          .catch((err) => {
            console.log(err);
            res.status(500);
          });
      });
    });
  } else {
    res
      .status(403)
      .json({ message: "질문의 답을 올바르게 입력하지 않았습니다." });
  }
});

// 기본 정보 수정 API
jobSeekerRouter.patch("/", isLoggedIn, async (req, res) => {
  // auth로 id 가져와서 처리하면 됨
  // id 가져와서 찾고, req.body에 있는 내용으로 업데이트
  const { name, age, gender, image } = req.body;

  // password 수정

  const jobSeekerId = req.user.dataValues.id; //mysql에서 생성해주는 id
  const updateJobSeeker = await JobSeeker.findOne({
    where: { id: jobSeekerId },
  });

  if (!updateJobSeeker) {
    res.status(404).json({ message: "구직 정보가 없습니다" });
  } else {
    JobSeeker.update(
      { name, age, gender, image },
      { where: { id: jobSeekerId } }
    )
      .then((data) => {
        res
          .status(200)
          .json({ message: "입력하신 정보로 구직자의 정보가 수정되었습니다." });
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
  }
});

module.exports = jobSeekerRouter;

const express = require("express");
const companyRouter = express.Router();
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../middleware/validationCheck");
const jwt = require("jsonwebtoken");
const { Company } = require("../models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

companyRouter.get("/", isLoggedIn, (req, res) => {
  // console.log("test", req.isAuthenticated());
  // console.log(req.user);
  return res.status(200).json({
    loginSuccess: req.isAuthenticated(),
    user: req.user,
    message: "특정 사업자 불러오기",
  });
});

// 사업자 회원가입시 체크를 위한 id 불러오기
companyRouter.get("/getall", async (req, res) => {
  let companyId = await Company.findAll({ attributes: ["userId"] });
  if (companyId) {
    return res.status(200).json({
      userId: companyId,
      message: "중복된 아이디 확인을 위한 유저 아이디 정보입니다",
    });
  }
});

// 구직자 회원가입 요청

companyRouter.get("/test", (req, res) => {
  res.json({ message: "test 성공" });
});

companyRouter.post("/", isNotLoggedIn, async (req, res) => {
  let companyInfo = await Company.findOne({
    where: { userId: req.body.userId },
  });
  if (!companyInfo) {
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
          type: "company", // passport 분기 처리를 위해 추가한부분
          companyName: req.body.companyName,
          location: req.body.location,
          businessNumber: req.body.businessNumber,
          question: req.body.question,
          logo: req.body.logo,
        };
        Company.create(registerInfo);
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

companyRouter.post("/login", isNotLoggedIn, (req, res, next) => {
  // passport 구현하기

  passport.authenticate("company-local", (authError, Company) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!Company) {
      return res.status(403).json({ message: "가입되지 않은 사업자입니다." });
    }
    return req.login(Company, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // console.log(req.session.passport.user);
      let CompanyId = req.session.passport.user;

      return res.status(200).json({
        loginSuccess: true,
        CompanyId: CompanyId,
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

companyRouter.post("/logout", isLoggedIn, (req, res) => {
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

companyRouter.delete("/", isLoggedIn, (req, res) => {
  // auth로 id 가져와서 처리하면 됨 -> url 수정 (/:id -> /)
  // id 가져와서 찾고, 삭제
  console.log(req.user.dataValues.id);
  const CompanyId = req.user.dataValues.id; //mysql에서 생성해주는 id
  // id가 없는 경우는 미들웨어에 의해 걸림
  Company.destroy({ where: { id: CompanyId } }).then((data) => {
    if (!data) {
      res.status(404).json({ message: "일치하는 사업자 정보가 없습니다" });
    } else {
      res.status(202).json({ meesage: "사업자 정보가 삭제 되었습니다" });
    }
  });
});

// 비밀번호 변경은 따로 구현
companyRouter.patch("/password", isLoggedIn, async (req, res) => {
  const { password, question } = req.body;

  const CompanyId = req.user.dataValues.id; //mysql에서 생성해주는 id

  const passwordCarrer = await Company.findOne({
    where: { id: CompanyId },
  });
  // 질문한 내용이 맞으면, password를 복호화해서 저장

  if (question === passwordCarrer.question) {
    // 질문의 답을 올바르게 입력한 경우
    let hashPassword;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return err;
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) return err;
        hashPassword = hash;

        Company.update({ password: hashPassword }, { where: { id: CompanyId } })
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
companyRouter.patch("/", isLoggedIn, async (req, res) => {
  // auth로 id 가져와서 처리하면 됨
  // id 가져와서 찾고, req.body에 있는 내용으로 업데이트
  const { companyName, location, businessNumber, logo } = req.body;

  // password 수정

  const companyId = req.user.dataValues.id; //mysql에서 생성해주는 id
  const updateCompany = await Company.findOne({
    where: { id: companyId },
  });

  if (!updateCompany) {
    res.status(404).json({ message: "사업자 정보가 없습니다" });
  } else {
    Company.update(
      { companyName, location, businessNumber, logo },
      { where: { id: companyId } }
    )
      .then((data) => {
        res
          .status(200)
          .json({ message: "입력하신 정보로 사업자의 정보가 수정되었습니다." });
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
  }
});

// 명현님 작성 코드

companyRouter.post("/kakaoCompanyLogin", async (req, res) => {
  let companiesInfo = await Company.findOne({
    where: { userId: req.body.userId },
  });
  if (companiesInfo === null) {
    res.status(404).json({ message: "회원가입 하세요." });
  } else {
    const payload = {
      id: companiesInfo.id,
      userId: companiesInfo.userId,
      question: companiesInfo.question,
      name: companiesInfo.name,
      location: companiesInfo.location,
      businessNumber: companiesInfo.businessNumber,
      createdAt: companiesInfo.createdAt,
      updatedAt: companiesInfo.updatedAt,
    };
    const token = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "2h",
    });

    res
      .status(200)
      .cookie("token", token, {
        domain: "localhost",
        path: "/",
        sameSite: "none",
        secure: true,
        httpOnly: true,
      })
      .json({ data: { token }, message: "로그인에 성공하셨습니다." });
  }
  console.log(req.body);
});

companyRouter.post("/kakaoCompanyRegister", async (req, res) => {
  let companiesInfo = await Company.findOne({
    where: { userId: req.body.userId },
  });
  if (companiesInfo === null) {
    Company.create({
      password: req.body.password,
      userId: req.body.userId,
      question: req.body.question,
      companyName: req.body.name,
      location: req.body.location,
      businessNumber: req.body.businessNumber,
    });

    res.status(200).json({ message: "회원가입에 성공하셨습니다." });
  } else {
    res.status(404).json({ message: "중복된 아이디가 있습니다." });
  }
  console.log(req.body);
});

module.exports = companyRouter;

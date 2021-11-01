const passport = require("passport");
const local = require("./localStrategy");
// const goggle = require("./goggleStrategy");
const { JobSeeker, Company } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log("type확인 user정보", user);
    // user.type -> 회원가입할때 넣는 field로 수정필요

    // user의 특정 field로 분기 처리 -> user.~id이면 type : jobSeeker
    // user의 특정 field로 분기 처리 -> user.~id이면 type : Company
    // user의 특정 field로 분기 처리 -> user.~id이면 type : Goggle
    if (user.type === "company") {
      done(null, { type: "company", id: user.id });
    } else {
      done(null, { type: "jobseeker", id: user.id }); // 세션의 jobseeker 고유 id 만 저장
    }
  });

  passport.deserializeUser(({ type, id }, done) => {
    // console.log(type, id);
    // if(type === 'google)
    // if(type === 'jobseeker)
    // if(type === 'Company)
    console.log("저장한 type", type); //이 type으로 local-company,local-jobseeker,google인지 구분
    if (type === "company") {
      Company.findOne({ where: { id } })
        .then((user) => {
          // console.log("kk", user);
          done(null, user);
        })
        .catch((err) => done(err));
    } else {
      if (id < 100) {
        JobSeeker.findOne({ where: { id } })
          .then((user) => {
            // console.log("kk", user);
            done(null, user);
          })
          .catch((err) => done(err));
      } else {
        // console.log("구글로그인", id);
        JobSeeker.findOne({ where: { userId: id } })
          .then((user) => {
            // console.log("구글로그인", user);
            done(null, user);
          })
          .catch((err) => done(err));
      }
    }
  });

  local();
// goggle();
};
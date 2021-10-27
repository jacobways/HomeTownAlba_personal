const passport = require("passport");
const local = require("./localStrategy");
const goggle = require("./goggleStrategy");
const { JobSeeker } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    // console.log(user);
    done(null, user.id); // 세션의 jobseeker 고유 id 만 저장
  });

  passport.deserializeUser((id, done) => {
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
  });

  local();
// goggle();
};
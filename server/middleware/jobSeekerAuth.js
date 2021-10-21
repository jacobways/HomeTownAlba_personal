const { JobSeeker } = require("../models");
const jwt = require("jsonwebtoken");

let jobSeekrAuth = async (req, res, next) => {
  // console.log(req.headers);
  let token = req.cookies.token;

  jwt.verify(token, process.env.ACCESS_SECRET, function (err, decoded) {
    //   decoded : jobSeeker의 uuid
    let authUserInfo = JobSeeker.findOne({ where: { id: decoded } });

    if (!authUserInfo) {
      // 인증 안된 경우
      return res
        .status(400)
        .json({ isAuth: false, messsage: "인증 되지 않은 유저입니다." });
    } else {
      req.jobSeekerUser = authUserInfo;
      req.token = token;
      next();
    }
  });
};
module.exports = { jobSeekrAuth };

exports.isLoggedIn = (req, res, next) => {
  // 로그인이 되어있으면 passport 라이브러리에 의해 req.user에 유저 정보가 담겨있음
  // req.isAuthenticated()가 true면 로그인 한 상태

  if (req.isAuthenticated()) {
    // console.log("로그인 유저 정보", req.user);
    console.log(req.isAuthenticated());

    next();
  } else {
    res.status(403).send("로그인 필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  console.log(req.isAuthenticated());

  if (!req.isAuthenticated()) {
    // console.log("로그아웃 유저정보", req.user);

    next();
  } else {
    res.status(403).send("로그인 된 상태이므로 접근 거부");
  }
};

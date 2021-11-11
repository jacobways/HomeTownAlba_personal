const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    // console.log(req.user);
    req.session.save(function (err) {
      res.redirect("https://www.hometownalba.com");
    });
    // console.log(req.session.passport);
    // res.status(200).json({
    //   googleId: req.session.passport.user,
    // });
  }
);

authRouter.get("/kakao", passport.authenticate("kakao"));

authRouter.get(
  "/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/failed" }),
  (req, res) => {
    res.redirect("https://www.hometownalba.com");
  }
);

module.exports = authRouter;

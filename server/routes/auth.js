const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get("/failed", (req, res) => res.send("로그인 실패"));

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    // console.log(req.user);
    req.session.save(function (err) {
      res.redirect("http://localhost:3000");
    });
    // console.log(req.session.passport);
    // res.status(200).json({
    //   googleId: req.session.passport.user,
    // });
  }
);

module.exports = authRouter;

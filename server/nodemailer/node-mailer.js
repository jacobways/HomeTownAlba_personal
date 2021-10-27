const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const emailRouter = express.Router();
const path = require("path");
const ejs = require("ejs");
var appDir = path.dirname(require.main.filename);

emailRouter.post("/", async (req, res) => {
  console.log("이메일정보", req.body.email);
  let authEmail = req.body.email;
  let authNum = Math.random().toString().substr(2, 6);
  let emailTemplete;
  ejs.renderFile(
    appDir + "/template/authMail.ejs",
    { authCode: authNum },
    function (err, data) {
      if (err) {
        console.log(err);
      }
      emailTemplete = data;
    }
  );
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmlail.com",
    port: 587,
    secure: false,
    auth: {
      user: "donghj100@gmail.com", //env 파일로 변경해야함
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  let mailOptions = await transporter.sendMail({
    from: "donghj100@gmail.com",
    to: authEmail, //2번쨰 인자로 받은 email 넣기
    subject: "HomeTownAlba 인증 이메일입니다.",
    html: emailTemplete,
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
    console.log("Finish sending email : " + info.response);
    res.send(authNum);
    transporter.close();
  });
});
module.exports = emailRouter;

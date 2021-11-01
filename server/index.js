require("dotenv").config();

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const { sequelize } = require("./models");
const passportConfig = require("./passport");
const multer = require("multer");
const cookieParser = require("cookie-parser");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);
app.use(passport.initialize());
app.use(passport.session()); //id를 알아내고 그 id를 des로 넘겨줌

passportConfig();

// 멀터 테스트

const storage = multer.diskStorage({
  destination: "./public/img/",
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

// app.get("/upload",(req,res)=>{
//   res.sendFile(path.join(__dirname,"multipart.html"))
// })
// upload 객체를 라우터에 장착
app.post("/upload", upload.single("image"), (req, res) => {
  console.log("저장한 이미지", req.file);
  res.json({
    fileName: req.file.filename,
  });
});
// 멀터 테스트

const jobSeekerRouter = require("./routes/jobseeker");
const companyRouter = require("./routes/company");
const jobRouter = require("./routes/job");
const careerRouter = require("./routes/career.js");
const applicantRouter = require("./routes/applicant");
const authRouter = require("./routes/auth.js");
const mailRouter = require("./nodemailer/node-mailer.js");
const path = require("path");

app.use("/jobseeker", jobSeekerRouter);
app.use("/company", companyRouter);
app.use("/job", jobRouter);
app.use("/career", careerRouter);
app.use("/applicant", applicantRouter);
app.use("/auth", authRouter);
app.use("/mail", mailRouter);

const port = 5000;

app.get("/", (req, res) => {
  // console.log("로그인했니", req.user);
  // console.log("로그인했니?", req.sessionID);
  // console.log(req.session);
  console.log(req.isAuthenticated());
  console.log(req.user);
  res.status(200).json({
    user: req.user,
    message: "test 성공1",
  });
});

app.listen(port, () => {
  console.log("yaho1");
});

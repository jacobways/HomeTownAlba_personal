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

const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database connection Success");
  })
  .catch(err => {
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
  limits: { fileSize: 10000000 },
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

// multer s3를 위한 설정
try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성합니다.");
  fs.mkdirSync("uploads");
}
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});
// AWS에서 s3로 저장하는 권한 얻는 코드

const uploadS3 = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "hometownalbaimage", //s3에서 설정한 BucketName으로 넣어야함
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

//-------------소켓io test
const { createServer } = require("http");
const { Server } = require("socket.io");
const expressServer = createServer(app);
const io = new Server(expressServer, { cors: { origin: "*" } });

io.on("connection", socket => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
    console.log("name과 message", name, message);
  });
});

// 라우터 예시
app.post("/uploads3", uploadS3.single("image"), (req, res, next) => {
  console.log("저장한 이미지", req.file);
  res.json({
    fileName: req.file.location,
  });
});

app.listen(port, () => {
  console.log("yaho1");
});

// //소켓io test
// // port를 동일하게 하면??
// const server = require("http").createServer(app);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     credentials: true,
//   },
// });

// io.on("connection", socket => {
//   // 클라이언트에서 emit으로 보낸 데이터 받기는 on
//   socket.on("chatting", ({ name, message }) => {
//     //socket.emit으로 클라이언트에서 보낸 메세지를 보낼때는 emit
//     // db에 저장을 한 후에 보내야 저장이 됨
//     // chat model field name message
//     const time = new Date().toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "numeric",
//       hour12: true,
//     });
//     io.emit("chatting", { name, message, time });
//   });
// });
// server.listen(5050, function () {
//   console.log("listening on port 5050");
// });
// //소켓io test

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
// s3에 올리기 위한 multer s3 설정
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
// s3에 올리기 위한 multer s3 설정
const multer = require("multer");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const hpp = require("hpp");
const redis = require("redis");

app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());

  app.use(
    cors({

      origin: ["https://hometownalba.com","https://www.hometownalba.com"],
      credentials: true,
      methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
    })
  );
} else {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
      methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
    })
  );
}
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database connection Success");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOPtion = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
};
if (process.env.NODE_ENV === "production") {
  sessionOPtion.proxy = true;
  sessionOPtion.cookie.secure = true;
  sessionOPtion.domain = process.env.NODE_ENV === "production" && ".hometownalba.com";
}

app.use(session(sessionOPtion));

app.use(passport.initialize());
app.use(passport.session()); //id를 알아내고 그 id를 des로 넘겨줌

passportConfig();
//app.set("port", process.env.PORT || 5000);
// 멀터 테스트

// localhost multer test
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

app.post("/upload", upload.single("image"), (req, res) => {
  console.log("저장한 이미지", req.file);
  res.json({
    fileName: req.file,
  });
});
// 멀터 테스트
// localhost multer test

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

// 라우터 예시
app.post("/uploads3", uploadS3.single("image"), (req, res, next) => {
  console.log("저장한 이미지", req.file);
  res.json({
    fileName: req.file.location.replace(/\/original\//, "/thumb/"),
  });
  //original 폴더가 있으면 리사이징된 thumb로 교체 -> 업로드 끝나면 다시 original로 업데이트됨
});
// 프론트엔드
// uploadS3를 미들웨어로 장착하면 ok
// option : Array()
// multer s3를 위한 설정

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

app.get("/", (req, res) => {
  console.log(req.isAuthenticated());
  console.log(req.user);
  res.status(200).json({
    user: req.user,
    message: "test 성공1",
  });
});


module.exports = app;

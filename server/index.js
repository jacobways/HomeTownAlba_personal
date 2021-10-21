const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(cookieParser());

const jobSeekerRouter = require("./routes/jobseeker");
const companyRouter = require("./routes/company");

app.use("/jobseeker", jobSeekerRouter);
app.use("/company", companyRouter);

const port = 5000;

app.get("/test", (req, res) => {
  res.send("test 성공");
});

app.listen(port, () => {
  console.log("yaho1");
});

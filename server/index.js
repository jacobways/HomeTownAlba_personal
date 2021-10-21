require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000
const fs = require("fs");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const jobRouter = require('./routes/job')
const careerRouter = require("./routes/career.js")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"]
  })
)

app.use('/job', jobRouter)
app.use("/career", careerRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

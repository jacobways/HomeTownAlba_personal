const { Applicant } = require('../../models')
require("dotenv").config();

module.exports = (req, res) => {

  const { jobId, jobSeekerId } = req.body;

  if(!jobId && !jobSeekerId){
    res.status(400).send("정보가 불충분합니다.")
  } else{
    Applicant.create({jobId, jobSeekerId})
    .then((date) => {
      res.status(201).send("지원이 완료되었습니다.")
    })
    .catch((err)=> {
      console.log(err);
      res.status(500).send("서버 오류")
    })
  }
}
const { Applicant } = require('../../models')
require("dotenv").config();

module.exports = async (req, res) => {

  const { jobId, jobSeekerId } = req.body;

  if(!jobId && !jobSeekerId){
    res.status(400).send("정보가 불충분합니다.")
  } else{
    let applicantInfo = await Applicant.findOne({where:{jobId, jobSeekerId}})

    if (applicantInfo) {
      res.status(400).send("이미 지원하셨습니다.")
    } else {
      Applicant.create({jobId, jobSeekerId})
      .then((data) => {
        res.status(201).json({message: "지원이 완료되었습니다", id: data.dataValues.id})
      })
      .catch((err)=> {
        console.log(err);
        res.status(500).send("서버 오류")
      })
    }
  }
}
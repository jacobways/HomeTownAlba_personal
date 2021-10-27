const { Applicant } = require('../../models')
require("dotenv").config();

// jobId와 JobSeeker로 해당 지원자 지원여부 파악하기
module.exports = (req, res) => {

  const {jobId, jobSeekerId} = req.query

  if(!jobId || !jobSeekerId){
    res.status(400).send("일자리 또는 지원자 정보가 없습니다.")
  }else{

    Applicant.findOne({where:{jobId, jobSeekerId}})
    .then((data)=>{
      res.status(200).json({message: 'ok', data: data})
    })
    .catch((err)=>{
      console.log(err)
      res.sendStatus(500)
    })
  }
}
const { Applicant } = require('../../models')
require("dotenv").config();

// 지원자가 지원 요청을 취소하는 컨트롤러
module.exports = (req, res) => {
  const {jobId, jobSeekerId} = req.query
  
  if(!jobId || !jobSeekerId){
    res.status(400).send("일자리 또는 지원자 정보가 없습니다.")
  }else{
    Applicant.destroy({
      where:{jobId, jobSeekerId}
    })
    .then((data) => {
      if(!data){
        res.status(404).send("일치하는 지원자가 없습니다")
      }else{
        res.status(202).send("지원 요청을 취소했습니다")
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
  }
}
const { Applicant } = require('../../models')
require("dotenv").config();

// 지원자가 지원 요청을 취소, 사업자가 지원 거절, 탈퇴 시 해당 정보 삭제하기
module.exports = (req, res) => {
  const {jobId, jobSeekerId} = req.query

  if(!jobId && !jobSeekerId) {  // jobId와 jobSeekerId가 둘 다 없는 경우
    res.status(400).send("일자리와 지원자 정보가 없습니다")
  } else if (!!jobId && !!jobSeekerId) {   // jobId와 jobSeekerId가 둘 다 있는 경우, 해당 applicant 1명 삭제
    Applicant.destroy({
      where:{jobId, jobSeekerId}
    })
    .then((data) => {
      if(!data){
        res.status(404).send("일치하는 지원자가 없습니다")
      }else{
        res.status(202).send("지원 요청을 취소 또는 거절 했습니다")
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
  } else if (jobId) {  // jobId에 해당하는 모든 applicant 삭제 : Company가 job 삭제 시 해당 applicant 모두 삭제
    Applicant.destroy({
      where: {jobId}
    })
    .then((data) => {
      if(!data) {
        res.status(404).send("일치하는 지원자가 없습니다")
      } else {
        res.status(202).send("해당 일자리의 지원자를 모두 삭제했습니다")
      }
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
  } else if (jobSeekerId) {  // jobSeeker에 해당하는 모든 applicant 삭제 : JobSeeker 회원 탈퇴 시 해당 applicant 모두 삭제
    Applicant.destroy({
      where:{jobSeekerId}
    })
    .then((data) => {
      if(!data){
        res.status(404).send("일치하는 지원자가 없습니다")
      }else{
        res.status(202).send("해당 일자리의 지원자를 모두 삭제했습니다")
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
  } 
}
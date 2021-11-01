const { Career } = require('../../models')
require("dotenv").config();

// jobSeeker 회원 탈퇴 시 : 해당 경력 모두 삭제
module.exports = (req, res) => {
  const {jobSeekerId} = req.query
  
  if(!jobSeekerId){
    res.status(400).send("구직자 정보가 없습니다")
  }else{
    Career.destroy({
      where:{jobSeekerId}
    })
    .then((data) => {
      if(!data){
        res.status(404).send("일치하는 구직자 정보가 없습니다")
      }else{
        res.status(202).send("해당 구직자의 모든 경력이 삭제 되었습니다")
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
  }
}
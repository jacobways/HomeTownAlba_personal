const { Applicant } = require('../../models')
require("dotenv").config();

module.exports = (req, res) => {
  const {id} = req.params
  
  if(!id){
    res.status(400).send("지원자 정보가 없습니다")
  }else{
    Applicant.destroy({
      where:{id}
    })
    .then((data) => {
      if(!data){
        res.status(404).send("일치하는 지원자가 없습니다")
      }else{
        res.status(202).send("지원 요청을 거절하였습니다.")
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
  }
}
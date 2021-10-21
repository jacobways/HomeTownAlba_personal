const { Career } = require('../../models')
require("dotenv").config();

module.exports = (req, res) => {
  const {id} = req.params
  
  if(!id){
    res.status(400).send("경력 이력이 없습니다")
  }else{
    Career.destroy({
      where:{id}
    })
    .then((data) => {
      if(!data){
        res.status(404).send("일치하는 경력 사항이 없습니다")
      }else{
        res.status(202).send("선택한 경력이 삭제 되었습니다")
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
  }
}
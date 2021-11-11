const { Career } = require('../../models')
require("dotenv").config();

module.exports = (req, res) => {

  const {jobSeekerId, company, period, position } = req.body;

  if(!jobSeekerId && !company && !period && !position){
    res.status(400).send("정보를 모두 입력하세요")
  } else{
    Career.create({jobSeekerId, company, period, position})
    .then((data) => {
      res.status(201).json({message: "경력이 생성 되었습니다", id: data.dataValues.id})
    })
    .catch((err)=> {
      console.log(err);
      res.status(500).send("서버 오류")
    })
  }
}
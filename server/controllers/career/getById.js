const { Career } = require('../../models')
require("dotenv").config();

module.exports = async (req, res) => {
  const {id} = req.query;
  console.log(req.query)

  if(!id){
    res.status(400).send("id 정보가 없습니다.")
  } else{
    const careerInfo = await Career.findOne({ where : {id}})
    if(!careerInfo){
      res.status(404).send("구직자의 경력이 없습니다")
    }else{
      res.status(200).json({message:"ok",data:careerInfo});
    }
  }
}
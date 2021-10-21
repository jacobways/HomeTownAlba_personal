const { Career } = require('../../models')
require("dotenv").config();

module.exports = async (req, res) => {
  const {jobSeekerId} = req.params;
  console.log(req.params)

  if(!jobSeekerId){
    res.status(400).send("구직자 정보가 필요합니다")
  } else{
    const jobSeekerInfo = await Career.findAll({ where : {jobSeekerId}})
    if(!jobSeekerInfo){
      res.status(404).send("구직자의 경력이 없습니다")
    }else{
      res.status(200).json({message:"ok",data:jobSeekerInfo});
    }
  }
}
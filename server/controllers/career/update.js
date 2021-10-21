const { Career } = require('../../models')
require("dotenv").config();

module.exports = async (req, res) => {
  const {id, jobSeekerId, company, period, position} = req.body;

  if(!id) {
    res.status(400).send("요청하신 정보가 없습니다");
  } else {
    const findData = await Career.findOne({where:{id}});
    if(!findData) {
      res.status(404).send("경력 이력이 없습니다");
    } else {
      Career.update({
        jobSeekerId, company, period, position
      },
      {where: {id}}
      )
      .then(data => {
        res.status(200).send("해당 경력이 수정되었습니다")
      })
      .catch(err => {
        console.log(err);
        res.status(500);
      })
    }
  }
}
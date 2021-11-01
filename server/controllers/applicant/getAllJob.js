const { Op } = require("sequelize");
const { Applicant } = require('../../models')
const { Job } = require('../../models')
require("dotenv").config();

// jobId로 jobSeekerId를 찾고, 그에 해당하는 jobSeeker 테이블의 정보들을 불러오기
module.exports = async (req, res) => {

  const { jobSeekerId } = req.params

  // Applicant 테이블에서 query params의 jobSeekerId에 해당하는 JobId를 모두 찾기
  // 쿼리문 예시 : SELECT jobId AS id FROM Applicant WHERE jobSeekerId=1
  Applicant.findAll(
    {where: {jobSeekerId}, attributes: [['jobId', 'id']]},  
  )
  .then((data)=>{

    // Job 테이블에서 data(job의 id들)에 해당하는 모든 데이터를 전송하기
    // 쿼리문 예시 : SELECT * FROM Job WHERE id=1 or id=2 or id=3
    return Job.findAll({
      where: {
        [Op.or]: data.map(el=>el.dataValues)   // Job의 id 객체가 배열 형태로 들어감 [{id:1}, {id:2}]
      }
    })
  })
  .then((data)=> {
    res.status(200).json({message: 'ok', data: data.map(el=>el.dataValues)})
  })
  .catch((err)=> {
    console.log(err)
    sendStatus(500)
  })
}
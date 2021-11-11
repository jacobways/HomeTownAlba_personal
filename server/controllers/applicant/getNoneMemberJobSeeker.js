const { Op } = require("sequelize");
const { Applicant } = require('../../models')
const { JobSeeker } = require('../../models')
require("dotenv").config();

// Applicant에서 waiting/accepted 인 지원자에 대해 jobId로 jobSeekerId를 찾고, 그에 해당하는 jobSeeker 테이블의 정보들을 불러오기
module.exports = async (req, res) => {

  const { jobId } = req.params

  let applyStatus = await Applicant.findAll(
    {where: {jobId, [Op.or]: [{status: 'waiting'}, {status: 'accepted'}]}, attributes: ['status']},  
  )
  
  // Applicant 테이블에서 query params의 jobId에 해당하는 JobSeekerId를 모두 찾기
  // 쿼리문 예시 : SELECT jobSeekerId AS id FROM Applicant WHERE jobId=1 & status = waiting or accepted
  Applicant.findAll(
    {where: {jobId, [Op.or]: [{status: 'waiting'}, {status: 'accepted'}]}, attributes: [['jobSeekerId', 'id']]},  
  )
  .then((data)=>{

    // JobSeeker 테이블에서 data(jobSeeker의 id들)에 해당하는 모든 데이터를 전송하기
    // 쿼리문 예시 : SELECT * FROM JobSeeker WHERE id=1 or id=2 or id=3
    return JobSeeker.findAll({
      where: {
        [Op.or]: data.map(el=>el.dataValues)   // JobSeeker의 id 객체가 배열 형태로 들어감 [{id:1}, {id:2}]
      }
      ,attributes: { exclude: ['password'] }
    })
  })
  .then((data)=> {
    res.status(200).json(
      {message: 'ok', 
      data: data.map(el=>el.dataValues), 
      applyStatus: applyStatus.map(el=>el.dataValues)
    })
  })
  .catch((err)=> {
    console.log(err)
    sendStatus(500)
  })
}
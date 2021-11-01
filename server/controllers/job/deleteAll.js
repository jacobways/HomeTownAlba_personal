const { Job } = require('../../models')
const { Op } = require("sequelize");
const { Applicant } = require('../../models')

// company 회원 탈퇴 시 : companyId 값에 따라 job과 applicant를 모두 삭제
module.exports = (req, res) => {

  const {companyId} = req.query

  if(!companyId) {
    res.status(400).send('company 정보가 없습니다.')
  } else {  
    // company에 해당하는 Job의 applicant를 찾아서 모두 삭제하기
    Job.findAll(
      {where:{companyId}, attributes: [['id', 'jobId']]}
    )
    .then((data)=>{
      if(data.length===0) {
        res.status(404).send('일치하는 일자리 목록이 없습니다')
      } else {
        return Applicant.destroy({
          where: {
            [Op.or]: data.map(el=>el.dataValues)
          }
        })
      }
    })
    .then((data)=>{
      return Job.destroy({where:{companyId}})  // 일자리를 모두 삭제하기
    })
    .then((data)=> {
      if(!data) {
        res.status(404).send('일치하는 일자리 목록이 없습니다')
      } else {
        res.status(202).send('해당 사업자의 모든 일자리를 삭제했습니다')
      }
    })
    .catch((err)=> {
      console.log(err)
      res.sendStatus(500)
    })
  }
}
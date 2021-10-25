const { Job } = require('../../models')

// companyId를 통해 해당 company가 등록한 job을 모두 불러오는 컨트롤러
module.exports = async (req, res) => {

  Job.findAll()
  .then((data)=>{
    let info = data.map(job=>job.dataValues)
    res.status(200).json({message:'ok', data:info})
  })
  .catch((err)=>{
    console.log(err)
    res.sendStatus(500)
  })
}
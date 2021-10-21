const { Job } = require('../../models')

// companyId를 통해 해당 company가 등록한 job을 모두 불러오는 컨트롤러
module.exports = async (req, res) => {

  const { companyId } = req.params
  
  // companyId가 없을 때에는 fail
  if(!companyId) {
    res.status(400).send('사업자의 id 정보가 없습니다.')
  } else {
    const jobInfo = await Job.findAll({where: {companyId}})

    // companyId에 해당하는 정보가 없는 경우
    if(!jobInfo) {
      res.status(404).send('등록된 일자리 모집 정보가 없습니다')
    } else {// 정보 있으면 정보 알려주기
      res.status(200).json({message:'ok', data:jobInfo})
    }
  }
}
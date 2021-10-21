const { Job } = require('../../models')

// id 값에 따라 job 목록 1개 삭제하는 메소드
module.exports = (req, res) => {

  const {id} = req.params

  if(!id) {
    res.status(400).send('해당 일자리의 id 정보가 없습니다.')
  } else {
    Job.destroy(
      {where: {id}}
    )
    .then((data)=> {
      if(!data) {
        res.status(404).send('일치하는 일자리 목록이 없습니다')
      } else {
        res.status(202).send('deleted')
      }
    })
    .catch((err)=> {
      console.log(err)
      res.sendStatus(500)
    })
  }
}
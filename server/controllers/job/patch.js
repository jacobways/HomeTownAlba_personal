const { Job } = require('../../models')
const calculateTime = require('./calculateTime')
const calculateMonthlyWage = require('./calculateMonthlyWage')

// companyId를 통해 해당 company가 등록한 job을 모두 불러오는 컨트롤러
module.exports = async (req, res) => {

  const { id, companyId, title, location, day, startTime, endTime, position, hourlyWage} = req.body

  if(!id) {
    res.status(400).send('일자리의 id 정보가 없습니다.')
  } else {

    let jobData = await Job.findOne(({where:id}))

    if(!jobData) {
      res.status(404).send("해당 일자리 정보가 없습니다");
    } else {

      let dayParse = JSON.parse(day)  
      let time = calculateTime(startTime, endTime)
      let monthlyWage = calculateMonthlyWage(parseInt(hourlyWage), parseInt(time), dayParse.length)

      Job.update({
        companyId, 
        title, 
        location, 
        day, 
        startTime, 
        endTime, 
        time, 
        position, 
        hourlyWage, 
        monthlyWage},
        {where: {id}})
      .then((data)=> {
        res.status(201).send('Created')
      })
      .catch((err)=> {
        console.log(err)
        res.sendStatus(500)
      })
    }
  }
}
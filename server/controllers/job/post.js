const { Job } = require('../../models')
const calculateTime = require('./calculateTime')
const calculateMonthlyWage = require('./calculateMonthlyWage')

// companyId를 통해 해당 company가 등록한 job을 모두 불러오는 컨트롤러
module.exports = (req, res) => {

  const { companyId, title, location, day, startTime, endTime, position, hourlyWage} = req.body

  if(!companyId && !title && !location && !day && !startTime && !endTime && !position && !hourlyWage) {
    res.status(400).send('데이터가 불충분합니다.')
  } else {

    // day 배열은 이미 JSON 타입으로 들어오기 때문에 바로 DB에 전달 가능

    let dayParse = JSON.parse(day)  // JSON 타입을 배열 타입으로 바꿔주기
    let time = calculateTime(startTime, endTime)
    let monthlyWage = calculateMonthlyWage(parseInt(hourlyWage), parseInt(time), dayParse.length)

    Job.create({
      companyId, 
      title, 
      location, 
      day, 
      startTime, 
      endTime, 
      time, 
      position, 
      hourlyWage, 
      monthlyWage})
    .then((data)=> {
      res.status(200).send('Updated')
    })
    .catch((err)=> {
      console.log(err)
      res.sendStatus(500)
    })
  }
}
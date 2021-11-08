const { Job } = require("../../models");
const calculateTime = require("./calculateTime");
const calculateMonthlyWage = require("./calculateMonthlyWage");

module.exports = (req, res) => {
  // 배열들로 들어옴 -> 워크넷 API로 받은 데이터들을 넣기
  // req.body = []
  console.log(req.body);
  const jobInfoArray = req.body;
  jobInfoArray.map(async (info) => {
    let {
      //   companyId,
      companyName,
      //   location,
      //   day,
      //   startTime,
      //   endTime,
      //   position,
      //   hourlyWage,
    } = info;
    // let time = calculateTime(startTime, endTime);
    // let monthlyWage = calculateMonthlyWage(
    //   parseInt(hourlyWage),
    //   parseInt(time),
    //   day.length
    // );

    // let dayJSON = JSON.stringify(day);
    let jobInfo = await Job.findOne({ where: { companyName } });
    if (!jobInfo) {
      Job.create({
        //   companyId,
        companyName,
        //   location,
        //   day: dayJSON,
        //   startTime,
        //   endTime,
        //   time,
        //   position,
        //   hourlyWage,
        //   monthlyWage,
      })
        .then((data) => {})
        .catch((err) => {
          console.log(err);
          res.json({ message: "초기값 생성 실패" });
        });
    }
  });
};

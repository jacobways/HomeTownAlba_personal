const { Job } = require("../../models");
const calculateTime = require("./calculateTime");
const calculateMonthlyWage = require("./calculateMonthlyWage");

// companyId를 통해 해당 company가 등록한 job을 모두 불러오는 컨트롤러
module.exports = (req, res) => {
  const {
    companyId,
    companyName,
    location,
    day,
    startTime,
    endTime,
    position,
    hourlyWage,
  } = req.body;

  if (
    !companyId &&
    !companyName &&
    !location &&
    !day &&
    !startTime &&
    !endTime &&
    !position &&
    !hourlyWage
  ) {
    res.status(400).send("데이터가 불충분합니다.");
  } else {
    // day는 postman에서 JSON으로 오지만, 클라이언트에서 보내면 배열 타입으로 옴

    let time = calculateTime(startTime, endTime);
    let monthlyWage = calculateMonthlyWage(
      parseInt(hourlyWage),
      parseInt(time),
      day.length
    );

    let dayJSON = JSON.stringify(day);

    Job.create({
      companyId,
      companyName,
      location,
      day: dayJSON,
      startTime,
      endTime,
      time,
      position,
      hourlyWage,
      monthlyWage,
    })
      .then((data) => {
        res.status(200).send("Updated");
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
};

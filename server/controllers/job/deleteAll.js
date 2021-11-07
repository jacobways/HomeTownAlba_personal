const { Job } = require('../../models')
const { Op } = require("sequelize");
const { Applicant } = require('../../models')

// company 회원 탈퇴 시 : companyId 값에 따라 job과 applicant를 모두 삭제
module.exports = async (req, res) => {

  const {companyId} = req.query

  if(!companyId) {
    res.status(400).send('company 정보가 없습니다.')
  } else {  
    // company에 해당하는 Job의 applicant를 찾아서 모두 삭제하기
    Job.findAll(
      {where:{companyId}, attributes: [['id', 'jobId']]}
    )
    .then(async (data)=>{
      if(data.length===0) {
        res.status(404).send('일치하는 일자리 목록이 없습니다')
      } else {

        // 지원자에게 메일 보내기
        for (let i=0; i<data.length; i++) {

          let jobId = data[i].dataValues.jobId
          let jobInfo = await Job.findOne({where:{id:jobId}})

          // Job에 지원한 JobSeeker에게 이메일 보내기
          Applicant.findAll(
            {where: {jobId}, attributes: [['jobSeekerId', 'id']]},  
          )
          .then((data)=>{
            return JobSeeker.findAll({
              where: {
                [Op.or]: data.map(el=>el.dataValues)   // JobSeeker의 id 객체가 배열 형태로 들어감 [{id:1}, {id:2}]
              }, 
              attributes: ['email']
            })
          })
          .then((data)=>{
            for (let i=0; i<data.length; i++) {
    
              // 지원결과 이메일 전송
              let transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmlail.com",
                port: 587,
                secure: false,
                auth: {
                  user: "donghj100@gmail.com", //env 파일로 변경해야함
                  pass: process.env.GOOGLE_APP_PASSWORD,
                },
              });
      
              let emailTemplete = `
              <h2>아래 일자리가 삭제되어 지원이 자동으로 취소되었습니다</h2>
              <br></br>
              <span>회사명 : ${jobInfo.dataValues.companyName}</span>
              <br></br>
              <sapn>주소 : ${jobInfo.dataValues.location}</span>
              <br></br>
              <sapn>포지션 : ${jobInfo.dataValues.position}</span>
              `
      
              let mailOptions = {
                from: "donghj100@gmail.com",
                to: data[i].dataValues.email,
                subject: `[HomeTownAlba] ${jobInfo.dataValues.companyName}에 대한 자동 지원 취소`,
                html: emailTemplete,
              };
      
              // email 전송
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log(info);
                console.log("send mail success!");
              });
            }
          })
        }

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
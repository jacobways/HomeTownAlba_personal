const { Applicant } = require('../../models')
const { JobSeeker } = require('../../models')
const { Job } = require('../../models')
const { Op } = require("sequelize");
require("dotenv").config();
const nodemailer = require("nodemailer");

// 지원자가 지원 요청을 취소, 사업자가 지원 거절, 탈퇴 시 해당 정보 삭제하기
module.exports = async (req, res) => {
  const {jobId, jobSeekerId} = req.query

  if(!jobId && !jobSeekerId) {  // jobId와 jobSeekerId가 둘 다 없는 경우
    res.status(400).send("일자리와 지원자 정보가 없습니다")
  } else if (!!jobId && !!jobSeekerId) {   // jobId와 jobSeekerId가 둘 다 있는 경우, 해당 applicant 1명 삭제
    Applicant.destroy({
      where:{jobId, jobSeekerId}
    })
    .then((data) => {
      if(!data){
        res.status(404).send("일치하는 지원자가 없습니다")
      }else{
        res.status(202).send("지원 요청을 취소 또는 거절 했습니다")
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
  } else if (jobId) {  // jobId에 해당하는 모든 applicant 삭제 : Company가 job 삭제 시 해당 applicant 모두 삭제

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
    .then((data)=>{

      // 지원자 삭제하기

      Applicant.destroy({
        where: {jobId}
      })
      .then((data) => {
        if(!data) {
          res.status(404).send("일치하는 지원자가 없습니다")
        } else {
          res.status(202).send("해당 일자리의 지원자를 모두 삭제했습니다")
        }
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(500)
      })
    })
  } else if (jobSeekerId) {  // jobSeeker에 해당하는 모든 applicant 삭제 : JobSeeker 회원 탈퇴 시 해당 applicant 모두 삭제
    Applicant.destroy({
      where:{jobSeekerId}
    })
    .then((data) => {
      if(!data){
        res.status(404).send("일치하는 지원자가 없습니다")
      }else{
        res.status(202).send("해당 일자리의 지원자를 모두 삭제했습니다")
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
  } 
}
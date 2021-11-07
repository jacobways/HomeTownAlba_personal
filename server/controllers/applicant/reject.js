const { Applicant } = require('../../models')
const { JobSeeker } = require('../../models')
const { Job } = require('../../models')
require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {

  const { jobId, jobSeekerId } = req.body;

  const jobSeekerInfo = await JobSeeker.findOne({where:{id:jobSeekerId}})

  const jobInfo = await Job.findOne({where:{id:jobId}})

  if(!jobId && !jobSeekerId){
    res.status(400).send("정보가 불충분합니다.")
  } else{
    let applicantInfo = await Applicant.findOne({where:{jobId, jobSeekerId}})

    if (!applicantInfo) {
      res.status(400).send("해당 지원자가 없습니다")
    } else {
      Applicant.update({status: "rejected"}, {where: {jobId, jobSeekerId}})
      .then((date) => {

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
        <h2>아래 사업장으로부터 지원이 거절되었습니다.</h2>
        <br></br>
        <span>회사명 : ${jobInfo.dataValues.companyName}</span>
        <br></br>
        <sapn>주소 : ${jobInfo.dataValues.location}</span>
        <br></br>
        <sapn>포지션 : ${jobInfo.dataValues.position}</span>
        `

        let mailOptions = {
          from: "donghj100@gmail.com",
          to: jobSeekerInfo.dataValues.email,
          subject: `[HomeTownAlba] ${jobInfo.dataValues.companyName}의 지원 거절`,
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

        res.status(201).send("지원을 거절했습니다")
      })
      .catch((err)=> {
        console.log(err);
        res.status(500).send("서버 오류")
      })
    }
  }
}
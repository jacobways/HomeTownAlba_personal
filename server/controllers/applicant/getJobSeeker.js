const { JobSeeker } = require('../../models')
require("dotenv").config();

module.exports = async (req, res) => {

  const id = req.query.jobSeekerId

  JobSeeker.findOne({where:{id}, attributes: { exclude: ['password'] }})
  .then((data)=> {
    res.status(200).json({message: 'ok', data: data.dataValues})
  })

}
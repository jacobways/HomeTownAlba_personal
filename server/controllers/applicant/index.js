const { post } = require("../../routes/jobseeker");

module.exports = {
  post: require('./post.js'),
  delete: require('./delete.js'),
  deleteByInfo: require('./deleteByInfo.js'),
  getJobSeeker: require('./getJobSeeker.js'),
  getAllJobSeeker: require('./getAllJobSeeker.js'),
  get: require('./get.js')
}
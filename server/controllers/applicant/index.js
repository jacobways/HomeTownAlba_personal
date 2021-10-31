const { post } = require("../../routes/jobseeker");

module.exports = {
  post: require('./post.js'),
  delete: require('./delete.js'),
  getJobSeeker: require('./getJobSeeker.js'),
  getAllJobSeeker: require('./getAllJobSeeker.js'),
  getAllJob: require('./getAllJob.js'),
  get: require('./get.js')
}
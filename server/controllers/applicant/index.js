const { post } = require("../../routes/jobseeker");

module.exports = {
  post: require('./post.js'),
  delete: require('./delete.js'),
  getJobSeeker: require('./getJobSeeker.js'),
  getAllJobSeeker: require('./getAllJobSeeker.js'),
  getAllWaitingJob: require('./getAllWaitingJob.js'),
  getAllJobResult: require('./getAllJobResult.js'),
  get: require('./get.js'),
  reject: require('./reject'),
  accept: require('./accept')
}
const { post } = require("../../routes/jobseeker");

module.exports = {
  post: require('./post.js'),
  delete: require('./delete.js'),
  deleteById: require('./deleteById'),
  getJobSeeker: require('./getJobSeeker.js'),
  getAllJobSeeker: require('./getAllJobSeeker.js'),
  getNoneMemberJobSeeker: require('./getNoneMemberJobSeeker'),
  getAllWaitingJob: require('./getAllWaitingJob.js'),
  getAllJobResult: require('./getAllJobResult.js'),
  get: require('./get.js'),
  reject: require('./reject'),
  accept: require('./accept')
}
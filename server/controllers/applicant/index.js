const { post } = require("../../routes/jobseeker");

module.exports = {
  post: require('./post.js'),
  delete: require('./delete.js'),
  get: require('./get.js'),
  getAll: require('./getAll.js')
}
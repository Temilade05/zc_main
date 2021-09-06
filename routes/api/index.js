module.exports = [
  require('./workspace'),
  require('./plugin'),
  require('../../middlewares/getDevice'),
  require('../../middlewares/getUser'),
  require('../../middlewares/getSession'),
  require('./user'),
  require('../../middlewares/routeAccess')
]

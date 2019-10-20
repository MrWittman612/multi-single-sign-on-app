/* eslint-disable node/no-unpublished-require */
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  module.exports = require('./production_keys');
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./dev_keys');
}

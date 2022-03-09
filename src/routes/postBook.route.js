const postBook = require('../handlers/postBook.handler');
const { routeOptions } = require('../config/config');

module.exports = {
  method: 'POST',
  path: '/books',
  options: routeOptions,
  handler: postBook,
};

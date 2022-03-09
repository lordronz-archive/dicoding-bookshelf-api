const getBook = require('../handlers/getBook.handler');
const { routeOptions } = require('../config/config');

module.exports = {
  method: 'GET',
  path: '/books/{bookId}',
  options: routeOptions,
  handler: getBook,
};

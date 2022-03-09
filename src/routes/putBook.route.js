const putBook = require('../handlers/putBook.handler');
const { routeOptions } = require('../config/config');

module.exports = {
  method: 'PUT',
  path: '/books/{bookId}',
  options: routeOptions,
  handler: putBook,
};

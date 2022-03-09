const deleteBook = require('../handlers/deleteBook.handler');
const { routeOptions } = require('../config/config');

module.exports = {
  method: 'DELETE',
  path: '/books/{bookId}',
  options: routeOptions,
  handler: deleteBook,
};

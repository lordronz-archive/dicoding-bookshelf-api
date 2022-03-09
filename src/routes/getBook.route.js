const getBook = require('../handlers/getBook.handler');

module.exports = {
  method: 'GET',
  path: '/books/{bookId}',
  handler: getBook,
};

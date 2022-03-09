const putBook = require('../handlers/putBook.handler');

module.exports = {
  method: 'PUT',
  path: '/books/{bookId}',
  handler: putBook,
};

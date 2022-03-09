const deleteBook = require('../handlers/deleteBook.handler');

module.exports = {
  method: 'DELETE',
  path: '/books/{bookId}',
  handler: deleteBook,
};

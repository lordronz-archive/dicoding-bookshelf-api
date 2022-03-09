const postBook = require('../handlers/postBook.handler');

module.exports = {
  method: 'POST',
  path: '/books',
  handler: postBook,
};

const getBooks = require('../handlers/getBooks.handler');

module.exports = {
  method: 'GET',
  path: '/books',
  config: {
    cors: true,
    security: true,
  },
  handler: getBooks,
};

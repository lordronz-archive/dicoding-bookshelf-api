const getBooks = require('../handlers/getBooks.handler');

module.exports = {
  method: 'GET',
  path: '/books',
  handler: getBooks,
};

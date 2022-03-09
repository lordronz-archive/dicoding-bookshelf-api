const getBooks = require('../handlers/getBooks.handler');
const { routeOptions } = require('../config/config');

module.exports = {
  method: 'GET',
  path: '/books',
  options: routeOptions,
  handler: getBooks,
};

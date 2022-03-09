const getBooks = require('./getBooks.route');
const getBook = require('./getBook.route');
const postBook = require('./postBook.route');
const putBook = require('./putBook.route');
const deleteBook = require('./deleteBook.route');

module.exports = [getBooks, getBook, postBook, putBook, deleteBook];

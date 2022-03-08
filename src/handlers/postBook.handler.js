const { nanoid } = require('nanoid');
const books = require('../books');
const { validatePost } = require('../helper/validate');

module.exports = (request, h) => {
  const validationResult = validatePost(request.payload);
  if (!validationResult[0]) {
    return h.response({
      status: validationResult[1],
      message: validationResult[3],
    }).code(validationResult[2]);
  }
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const newBook = {
    id: nanoid(16),
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished: pageCount === readPage,
    reading,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  books.push(newBook);
  const response = {
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: newBook.id,
    },
  };
  return h.response(response).code(201);
};

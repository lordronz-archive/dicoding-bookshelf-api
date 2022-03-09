const { nanoid } = require('nanoid/async');
const books = require('../books');
const { validatePost } = require('../helper/validate');

module.exports = async (request, h) => {
  const [success, status, code, message] = validatePost(request.payload);
  if (!success) {
    return h
      .response({
        status,
        message,
      })
      .code(code);
  }
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const newBook = {
    id: await nanoid(16),
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

  return h
    .response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: newBook.id,
      },
    })
    .code(201);
};

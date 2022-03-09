const books = require('../books');
const { validatePut } = require('../helper/validate');

module.exports = (request, h) => {
  const validationResult = validatePut(request.payload);
  if (!validationResult[0]) {
    return h
      .response({
        status: validationResult[1],
        message: validationResult[3],
      })
      .code(validationResult[2]);
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

  const { bookId } = request.params;

  const bookIndex = books.findIndex((el) => el.id === bookId);

  if (bookIndex === -1) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
      })
      .code(404);
  }

  books[bookIndex] = {
    ...books[bookIndex],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished: pageCount === readPage,
    reading,
    updatedAt: new Date().toISOString(),
  };
  return {
    status: 'success',
    message: 'Buku berhasil diperbarui',
  };
};

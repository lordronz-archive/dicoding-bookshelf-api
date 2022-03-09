const books = require('../books');

module.exports = (request, h) => {
  const { bookId } = request.params;

  const book = books.find((b) => b.id === bookId);
  if (!book) {
    return h
      .response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      })
      .code(404);
  }

  return {
    status: 'success',
    data: {
      book,
    },
  };
};

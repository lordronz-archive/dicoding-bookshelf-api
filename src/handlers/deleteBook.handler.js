const books = require('../books');

module.exports = (request, h) => {
  const { bookId } = request.params;

  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex === -1) {
    return h
      .response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      })
      .code(404);
  }

  books[bookIndex] = books[books.length - 1];
  books.pop();

  return {
    status: 'success',
    message: 'Buku berhasil dihapus',
  };
};

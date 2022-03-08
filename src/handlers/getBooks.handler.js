const books = require('../books');

module.exports = (req) => {
  let cleanBooks = books;
  let { name, reading, finished } = req.query;
  if (name !== undefined) {
    name = name.toLowerCase();
    cleanBooks = cleanBooks.filter((book) => book.name.toLowerCase().includes(name));
  }
  if (reading !== undefined) {
    reading = reading !== '0';
    cleanBooks = cleanBooks.filter(
      (book) => book.reading === reading,
    );
  }
  if (finished !== undefined) {
    finished = finished !== '0';
    cleanBooks = cleanBooks.filter(
      (book) => book.finished === finished,
    );
  }
  cleanBooks = cleanBooks.map(
    (book) => ({ id: book.id, name: book.name, publisher: book.publisher }),
  );
  return {
    status: 'success',
    data: {
      books: cleanBooks,
    },
  };
};

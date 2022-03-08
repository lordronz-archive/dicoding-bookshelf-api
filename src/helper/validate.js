const validatePost = (payload) => {
  try {
    const {
      name, year, author, summary, publisher, pageCount, readPage, reading,
    } = payload;
    if (!name) {
      return [false, 'fail', 400, 'Gagal menambahkan buku. Mohon isi nama buku'];
    }
    if (readPage > pageCount) {
      return [false, 'fail', 400, 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'];
    }
    if (typeof (name) !== 'string' || typeof (year) !== 'number' || typeof (author) !== 'string' || typeof (summary) !== 'string' || typeof (publisher) !== 'string' || typeof (pageCount) !== 'number' || typeof (readPage) !== 'number' || typeof (reading) !== 'boolean') {
      throw Error();
    }
    return [true];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return [false, 'error', 500, 'Buku gagal ditambahkan'];
  }
};

const validatePut = (payload) => {
  try {
    const {
      name, year, author, summary, publisher, pageCount, readPage, reading,
    } = payload;
    if (!name) {
      return [false, 'fail', 400, 'Gagal memperbarui buku. Mohon isi nama buku'];
    }
    if (readPage > pageCount) {
      return [false, 'fail', 400, 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'];
    }
    if (typeof (name) !== 'string' || typeof (year) !== 'number' || typeof (author) !== 'string' || typeof (summary) !== 'string' || typeof (publisher) !== 'string' || typeof (pageCount) !== 'number' || typeof (readPage) !== 'number' || typeof (reading) !== 'boolean') {
      throw Error();
    }
    return [true];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return [false, 'error', 500, 'Buku gagal diperbarui'];
  }
};

module.exports = {
  validatePost,
  validatePut,
};

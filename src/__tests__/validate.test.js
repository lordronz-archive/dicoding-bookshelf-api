const { validatePost, validatePut } = require('../helper/validate');

describe('validate post payload test', () => {
  test('empty post', () => {
    const res = validatePost({});
    expect(res).toEqual([
      false,
      'fail',
      400,
      'Gagal menambahkan buku. Mohon isi nama buku',
    ]);
  });

  test('correct post', () => {
    const res = validatePost({
      name: 'bookname',
      year: 1696,
      author: 'lordronz',
      summary: 'summary moment',
      publisher: 'bruh',
      pageCount: 69,
      readPage: 12,
      reading: true,
    });
    expect(res).toEqual([true]);
  });

  test('read page more than page count', () => {
    const res = validatePost({
      name: 'bookname',
      year: 1696,
      author: 'lordronz',
      summary: 'summary moment',
      publisher: 'bruh',
      pageCount: 69,
      readPage: 169,
      reading: true,
    });
    expect(res).toEqual([
      false,
      'fail',
      400,
      'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    ]);
  });

  test('wrong data type', () => {
    try {
      const res = validatePost({
        name: 'bookname',
        year: 1696,
        author: 'lordronz',
        summary: 'summary moment',
        publisher: 'bruh',
        pageCount: 69,
        readPage: 68,
        reading: 'true',
      });
      expect(res).toEqual([false, 'error', 500, 'Buku gagal ditambahkan']);
    } catch (e) {
      expect(e.message).toBe('Payload type error');
    }
  });
});

describe('validate put payload test', () => {
  test('empty post', () => {
    const res = validatePut({});
    expect(res).toEqual([
      false,
      'fail',
      400,
      'Gagal memperbarui buku. Mohon isi nama buku',
    ]);
  });

  test('correct post', () => {
    const res = validatePut({
      name: 'bookname',
      year: 1696,
      author: 'lordronz',
      summary: 'summary moment',
      publisher: 'bruh',
      pageCount: 69,
      readPage: 12,
      reading: true,
    });
    expect(res).toEqual([true]);
  });

  test('read page more than page count', () => {
    const res = validatePut({
      name: 'bookname',
      year: 1696,
      author: 'lordronz',
      summary: 'summary moment',
      publisher: 'bruh',
      pageCount: 69,
      readPage: 169,
      reading: true,
    });
    expect(res).toEqual([
      false,
      'fail',
      400,
      'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    ]);
  });

  test('wrong data type', () => {
    try {
      const res = validatePut({
        name: 'bookname',
        year: 1696,
        author: 'lordronz',
        summary: 'summary moment',
        publisher: 'bruh',
        pageCount: 69,
        readPage: 68,
        reading: 'true',
      });
      expect(res).toEqual([false, 'error', 500, 'Buku gagal diperbarui']);
    } catch (e) {
      expect(e.message).toBe('Payload type error');
    }
  });
});

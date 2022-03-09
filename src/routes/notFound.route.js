const { routeOptions } = require('../config/config');

module.exports = {
  method: '*',
  path: '/{any*}',
  options: routeOptions,
  handler: (_request, h) =>
    h
      .response({
        status: 'fail',
        message: 'Rute tidak ditemukan',
      })
      .code(404),
};

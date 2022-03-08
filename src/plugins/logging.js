const hapiPino = require('hapi-pino');

module.exports = {
  plugin: hapiPino,
  options: {
    logPayload: true,
    prettyPrint: process.env.NODE_ENV !== 'production',
    level: 'debug',
  },
};

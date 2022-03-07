const pino = require('hapi-pino');

module.exports = {
  plugin: pino,
  options: {
    logPayload: true,
    prettyPrint: true,
    level: 'debug',
  },
};

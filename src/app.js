const Hapi = require('@hapi/hapi');
const Blankie = require('blankie');
const Scooter = require('@hapi/scooter');
const logging = require('./plugins/logging');
const logger = require('./config/logger');

const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  debug: false,
  routes: {
    cors: true,
  },
});

const init = async () => {
  try {
    await server.register([
      logging,
      Scooter,
      {
        plugin: Blankie,
        options: {},
      },
    ]);

    await server.start();

    server.log(['subsystem'], 'hello world')
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
};

module.exports = { init, server };

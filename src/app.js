const Hapi = require('@hapi/hapi');
const Blankie = require('blankie');
const Scooter = require('@hapi/scooter');
const logging = require('./plugins/logging');
const logger = require('./config/logger');
const routes = require('./routes');
const { serverConfig } = require('./config/config');

const server = Hapi.server(serverConfig);

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

    server.route(routes);

    await server.start();

    server.log(['subsystem'], 'hello world');
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
};

module.exports = { init, server };

const { init, server } = require('./app');
const { sigintHandler, unexpectedErrorHandler } = require('./helper/handlers');
const logger = require('./config/logger');

init().then(() => {
  logger.info('Server started successfully, listening for requests...');
});

process.on('uncaughtException', unexpectedErrorHandler(server));
process.on('unhandledRejection', unexpectedErrorHandler(server));
process.on('SIGINT', sigintHandler(server));

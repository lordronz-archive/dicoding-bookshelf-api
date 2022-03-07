const gracefulStop = (server) => () => {
  server
    .stop()
    .then((err) => {
      console.info('hapi server stopped');
      process.exit(err ? 1 : 0);
    })
    .catch((e) => {
      console.error(e);
    });
};

const unexpectedErrorHandler = (server) => (error) => {
  console.error(error);
  gracefulStop(server)();
  process.exit(1);
};

const sigintHandler = (server) => () => {
  console.info('Stopping hapi server');
  gracefulStop(server)();
};

module.exports = { unexpectedErrorHandler, sigintHandler };

module.exports = {
  serverConfig: {
    port: 5000,
    host: 'localhost',
    debug: false,
    routes: {
      cors: true,
      security: true,
    },
  },
  routeOptions: {
    cors: true,
    security: true,
  },
};

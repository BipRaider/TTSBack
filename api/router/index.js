'use strict';

module.exports = server => {
  server.use('/user', require('./user.router'));
  server.use('/api-docs', require('./swagger.router'));
};

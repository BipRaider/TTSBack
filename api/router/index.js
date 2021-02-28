'use strict';

module.exports = server => {
   server.use('/', require('./bike.router'));
   server.use('/api-docs', require('./swagger.router'));
};

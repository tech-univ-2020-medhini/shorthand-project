const redirectHandler = require('../handlers/redirect');
const routes = [{path: '/{id}', method: 'GET', handler: redirectHandler}];

module.exports = routes;
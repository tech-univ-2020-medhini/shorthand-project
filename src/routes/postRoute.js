const postRouteHandler = require('../handlers/postRoute');
const routes = [{path: '/route', method: 'POST', handler: postRouteHandler}];

module.exports = routes;
const shortURL = require('./getURL');
const postRoute = require('./postRoute');

const routes = [...shortURL, ...postRoute];
module.exports = routes;
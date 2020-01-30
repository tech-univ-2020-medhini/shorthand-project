const shortURL = require('./shortURL');
const postRoute = require('./postRoute');

const routes = [...shortURL, ...postRoute];
module.exports = routes;
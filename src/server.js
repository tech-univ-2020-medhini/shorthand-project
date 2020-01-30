const Hapi = require('@hapi/hapi');
const routes = require('./routes/index');

const buildServer = async () => {
	// eslint-disable-next-line new-cap
	const server = Hapi.Server({
		host: 'localhost',
		port: 8080,
	});
	server.route(routes);
	return server;
};

module.exports = buildServer;
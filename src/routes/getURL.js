const redirectHandler = require('../handlers/getURL');
const {postRouteSchema,redirectSchema} = require('../schemas/schemas');
const routes = [{path: '/{id}', method: 'GET',  config: {
	handler: redirectHandler,
	validate: {
		params: redirectSchema,
	},  
},
}];

module.exports = routes;
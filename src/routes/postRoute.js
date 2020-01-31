const {postRouteSchema, redirectSchema} = require('../schemas/schemas');
const postRouteHandler = require('../handlers/postRoute');
const routes = [{path: '/route', method: 'POST',  config: {
	handler: postRouteHandler,
	validate: {
		payload: postRouteSchema,
	},
},
}];

module.exports = routes;
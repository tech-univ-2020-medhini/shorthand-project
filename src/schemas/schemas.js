const Joi = require('@hapi/joi');

const redirectSchema = Joi.object({
	id: Joi.string().required(),
});

const postRouteSchema = Joi.object({
	url: Joi.string().required(),
});

module.exports = {redirectSchema, postRouteSchema};
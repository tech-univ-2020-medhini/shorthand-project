const redirect = async(request, h) => {
	return h.response('').code(200);
};

module.exports = redirect;
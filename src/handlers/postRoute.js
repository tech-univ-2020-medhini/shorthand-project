const postRoute = async(request, h) => {
	console.log('In handler');
	return h.response('').code(200);
};

module.exports = postRoute;
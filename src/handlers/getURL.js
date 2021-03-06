const dbOperations = require('../helpers/dbOperations');

const redirect = async(request, h) => {
	try{
		const id = request.params.id;
		const [url,code] = await dbOperations.getURL(id);
		if(!url){
			return h.response('Not Found').code(404);
		}
		if(!code){
			return h.response('GONE').code(410);
		}
		return h.redirect(url).code(301);
	} catch(err){
		return h.response(err.message).code(500);
	}
};

module.exports = redirect;
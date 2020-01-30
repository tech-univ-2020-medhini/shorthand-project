const dbOperations = require('../helpers/dbOperations');

const postRoute = async(request, h) => {
	try{
		const url = request.payload.url;
		const id = await dbOperations.generateId(url);
		return h.response(`ShortURL created localhost:8080/${id}. Valid for 30 minutes`).code(200);
	} catch(err){
		return h.response(err.message).code(500);
	}
	
};

module.exports = postRoute;
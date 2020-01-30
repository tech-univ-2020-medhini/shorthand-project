const db = require('../../models/index');
const shortid = require('shortid');

const getURL = async(id) => {
	const response = await db.routes.findOne({
		where: {
			id: id,
		}
	});
	
	if(!response){
		return [null,null];
	}
	if(Date.now()-response.dataValues.time>1800000){
		
		return [response.dataValues.url,false];
	}
	return [response.dataValues.url,true];
};

const generateId = async(url) => {
	const id = shortid.generate();
	const time = Date.now();
	await db.routes.create({url: url, id: id, time: time});
	return id;
};

module.exports = {getURL, generateId};
const db = require('../../models/index');
const shortid = require('shortid');

const getURL = async(id) => {
	const response = await db.routes.findOne({
		where: {
			id: id,
		}
	});
	console.log(response, id);
	return response.dataValues.url;
};

const generateId = async(url) => {
	const id = shortid.generate();
	const time = Date.now();
	await db.routes.create({url: url, id: id, time: time.toString});
	return id;
};

module.exports = {getURL, generateId};
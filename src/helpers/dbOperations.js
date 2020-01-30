const db = require('../../models/index');
const shortid = require('shortid');

const getURL = async(id) => {
	const response = await db.routes.findOne({
		where: {
			id: id,
		}
	});
	return response.url;
};

const generateId = async(url) => {
	const id = shortid.generate();
	await db.routes.create({url: url, id: id, time: Date(Date.now())});
	return id;
};

module.exports = {getURL, generateId};
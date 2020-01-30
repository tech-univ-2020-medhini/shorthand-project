const buildServer = require('../src/server');
const db = require('../models/index');

describe('The server ', () => {
	let server;

	beforeEach(async () => {
		server = await buildServer();
		await server.initialize();
		return server;
	});

	afterEach(async () => {
		await server.stop();
	});

	it('Should should return the correct status code when get is called with the right url', async (done) =>{
		const injectOptions = {
			method: 'GET',
			url: '/RMO7rRDN',
		};
		
		const response = await server.inject(injectOptions);
		console.log(response);
		expect(response.statusCode).toEqual(200);
		done();
	});
	xit('Should should return the correct status code when get is called with the right url', async (done) =>{
		const injectOptions = {
			method: 'POST',
			url: '/route',
			payload: {
				url: 'github.com',
			},
		};
		const response = await server.inject(injectOptions);
		expect(response.statusCode).toEqual(200);
		done();
	});
});

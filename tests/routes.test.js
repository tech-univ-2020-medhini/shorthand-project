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
		const mockDb = jest.spyOn(db.routes, 'findOne');
		mockDb.mockResolvedValue({dataValues: {url:'google.com'}});
		const response = await server.inject(injectOptions);
		//console.log(response);
		expect(response.statusCode).toEqual(301);
		done();
	});
	it('Should should return 500 when db fails', async (done) =>{
		const injectOptions = {
			method: 'GET',
			url: '/RMO7rRDN',
		};
		const mockDb = jest.spyOn(db.routes, 'findOne');
		mockDb.mockRejectedValue(new Error('Error'));
		const response = await server.inject(injectOptions);
		//console.log(response);
		expect(response.statusCode).toEqual(500);
		done();
	});
	it('Should should return the correct status code when a route is posted', async (done) =>{
		const injectOptions = {
			method: 'POST',
			url: '/route',
			payload: {
				url: 'github.com',
			},
		};
		const mockDb = jest.spyOn(db.routes, 'create');
		mockDb.mockResolvedValue(true);
		const response = await server.inject(injectOptions);
		expect(response.statusCode).toEqual(200);
		done();
	});
	it('Should should return the correct status code when db fails', async (done) =>{
		const injectOptions = {
			method: 'POST',
			url: '/route',
			payload: {
				url: 'github.com',
			},
		};
		const mockDb = jest.spyOn(db.routes, 'create');
		mockDb.mockRejectedValue(new Error('Error'));
		const response = await server.inject(injectOptions);
		expect(response.statusCode).toEqual(500);
		done();
	});
});

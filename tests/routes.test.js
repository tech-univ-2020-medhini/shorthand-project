const buildServer = require('../src/server');
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
			url: '/2162440f-cbcb-4f92-b470-59b6e7a7ded8',
		};
		const response = await server.inject(injectOptions);
		expect(response.statusCode).toEqual(200);
		done();
	});
	it('Should should return the correct status code when get is called with the right url', async (done) =>{
		const injectOptions = {
			method: 'POST',
			url: '/route',
			payload: {
				'url': 'github',
			},
		};
		const response = await server.inject(injectOptions);
		expect(response.statusCode).toEqual(200);
		done();
	});
});

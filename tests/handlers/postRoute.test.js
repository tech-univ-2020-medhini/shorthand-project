const postRoute = require('../../src/handlers/postRoute');
const dbOperation = require('../../src/helpers/dbOperations');

describe('The post route handler ', () => {
	it ('Should respond with 200 and the shorthand url if the db succeeds', async() => {
		const mockReq = {
			payload: {
				url: 'google.com',
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const mockDb = jest.spyOn(dbOperation, 'generateId');
		mockDb.mockResolvedValue(1);
		await postRoute(mockReq, mockH);
		expect(mockDb).toHaveBeenCalledWith(mockReq.payload.url);
		expect(mockH.response).toHaveBeenCalledWith('ShortURL created localhost:8080/1. Valid for 30 minutes');
		expect(mockCode).toHaveBeenCalledWith(200);
	});
	it ('Should respond with 500 Internal server error if the db fails', async() => {
		const mockReq = {
			payload: {
				url: 'google.com',
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const mockDb = jest.spyOn(dbOperation, 'generateId');
		mockDb.mockRejectedValue(new Error('Internal server error'));
		await postRoute(mockReq, mockH);
		expect(mockDb).toHaveBeenCalledWith(mockReq.payload.url);
		expect(mockH.response).toHaveBeenCalledWith('Internal server error');
		expect(mockCode).toHaveBeenCalledWith(500);
	});
});
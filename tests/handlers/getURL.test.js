const redirect = require('../../src/handlers/getURL');
const dbOperation = require('../../src/helpers/dbOperations');

describe('The redirect handler', () => {
	it ('Should redirect to the stored url if it exists and is within 30 min', async() => {
		const mockReq = {
			params: {
				id: '1',
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			redirect: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const mockDb = jest.spyOn(dbOperation, 'getURL');
		mockDb.mockResolvedValue(['google.com',true]);
		await redirect(mockReq,mockH);
		expect(mockDb).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockH.redirect).toHaveBeenCalledWith('google.com');
		expect(mockCode).toHaveBeenCalledWith(301);
		mockDb.mockRestore();

	});
	it ('Should return 404 NOT FOUND if the url is not registered', async() => {
		const mockReq = {
			params: {
				id: '1',
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const mockDb = jest.spyOn(dbOperation, 'getURL');
		mockDb.mockResolvedValue([null,false]);
		await redirect(mockReq,mockH);
		expect(mockDb).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockH.response).toHaveBeenCalledWith('Not Found');
		expect(mockCode).toHaveBeenCalledWith(404);
		mockDb.mockRestore();
	});
	it ('Should return 410 GONE if the url is requested after 30 min', async() => {
		const mockReq = {
			params: {
				id: '1',
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {code: mockCode};
			}),
		};
		const mockDb = jest.spyOn(dbOperation, 'getURL');
		mockDb.mockResolvedValue(['google.com',false]);
		await redirect(mockReq,mockH);
		expect(mockDb).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockH.response).toHaveBeenCalledWith('GONE');
		expect(mockCode).toHaveBeenCalledWith(410);
		mockDb.mockRestore();
	});
	it ('Should return 500 internal server error if the db operation fails', async() => {
		const mockReq = {
			params: {
				id: '1',
			},
		};
		const mockCode = jest.fn();
		const mockH = {
			response: jest.fn(()=>{
				return {
					code: mockCode};
			}),
		};
		const mockDb = jest.spyOn(dbOperation, 'getURL');
		mockDb.mockRejectedValue(new Error('Internal server error'));
		await redirect(mockReq,mockH);
		expect(mockDb).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockH.response).toHaveBeenCalledWith('Internal server error');
		expect(mockCode).toHaveBeenCalledWith(500);
		mockDb.mockRestore();
	});
});
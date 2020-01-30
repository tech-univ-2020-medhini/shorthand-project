const {getURL, generateId} = require('../../src/helpers/dbOperations');
const db  = require('../../models/index');

describe('The generate id function', () => {
	it ('Should return a unique id whena URL is passed', async() => {
		const mockDb = jest.spyOn(db.routes, 'create');
		mockDb.mockResolvedValue(true);
		const result = await generateId('google.com');
		expect(typeof result).toBe('string');
		expect(mockDb).toHaveBeenCalled();
	});
});
const {getURL, generateId} = require('../../src/helpers/dbOperations');
const db  = require('../../models/index');
describe('The db operations', () => {
	describe('The generate id function', () => {
		it ('Should return a unique id when a URL is passed', async() => {
			const mockDb = jest.spyOn(db.routes, 'create');
			mockDb.mockResolvedValue(true);
			const result = await generateId('google.com');
			expect(typeof result).toBe('string');
			expect(mockDb).toHaveBeenCalled();
		});
	});
	describe('The get url function',() => {
		it('Should return the url when corresponding id is passed', async() => {
			const mockDb = jest.spyOn(db.routes, 'findOne');
			mockDb.mockResolvedValue({url:'google.com'});
			const result = await getURL(123);
			expect(typeof result).toBe('string');
			expect(mockDb).toHaveBeenCalled();
		});
	});
});

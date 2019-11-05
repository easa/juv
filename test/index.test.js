const app = require('../index')

test('should be a module', () => {
	expect(typeof app).toBe('object')
	expect(typeof app.requestModel).toBe('object')
	expect(typeof app.responseModel).toBe('object')
	expect(typeof app.validationFunction).toBe('function')
})

/* eslint-disable no-undef */
const app = require('../../app/middleware/')

test('should be a module', () => {
	expect(typeof app).toBe('function')
})

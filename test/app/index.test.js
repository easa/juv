/* eslint-disable no-undef */
var app = require('../../app/')
test('should be a module', () => {
	expect(typeof app).toBe('object')
})
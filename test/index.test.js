/* eslint-disable no-undef */
const app = require('../')

test('should be a function', () => {
	expect(typeof app).toBe('function')
})
test('should return a custom middleware', () => {
	var theApplication = app({ reqModel: {}, resModel: {} })
	expect(typeof theApplication).toBe('function')
})
test('should return a  default middleware', () => {
	var theApplication = app()
	expect(typeof theApplication).toBe('function')
})

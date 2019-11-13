/* eslint-disable no-undef */
const app = require('../')

test('should be a function', () => {
	expect(typeof app).toBe('function')
})
test('should return a  default middleware', () => {
	expect(typeof app()).toBe('function')
	expect(typeof app({})).toBe('function')
})
test('should return a custom middleware', () => {
	let theApplication = app({ reqModel: {} })
	expect(typeof theApplication).toBe('function')
	theApplication = app({ reqModel: {}, resModel: {} })
	expect(typeof theApplication).toBe('function')
})
/* eslint-disable no-undef */
const app = require('../../app/validate/compareFunction')

test('should be a function', () => {
	expect(typeof app).toBe('function')
})
test('should return empty string', () => {
	let result = app('email', e => e.length > 5, 'easa@github.com')
	expect(result).toBe('')
})
test('should return error message string', () => {
	let result = app('email', e => e.length > 5, 'easa')
	expect(typeof result).toBe('string')
})

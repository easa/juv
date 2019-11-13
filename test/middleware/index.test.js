/* eslint-disable no-undef */
const app = require('../../app/middleware')

test('should return a function', () => {
	expect(typeof app).toBe('function')
})

test('should append the models', () => {
})
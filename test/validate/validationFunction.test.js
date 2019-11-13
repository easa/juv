/* eslint-disable no-undef */
const app = require('../../app/validate/validationFunction')
const comarefunction = require('../../app/validate/compareFunction')
jest.mock('../../app/validate/compareFunction')
test('should be a function', () => {
	expect(typeof app).toBe('function')
})
test('should call compare function once', () => {
	var requestMock = { model: { email: e => e.length > 5 } }
	requestMock.validate = app
	requestMock.validate({ email: 'easa@github.com' })
	expect(comarefunction.mock.calls.length).toBe(1)
	comarefunction.mockRestore()
})
test('should call compare function 2', () => {
	var requestMock = { model: { name: n => n.length > 3, email: e => e.length > 5 } }
	requestMock.validate = app
	requestMock.validate({ name: 'easa', email: 'easa@github.com' })
	expect(comarefunction.mock.calls.length).toBe(2)
	comarefunction.mockRestore()
})
test('should call compare function 1 - on nested', () => {
	var requestMock = { model: { name: n => n.length > 3 } }
	requestMock.validate = app
	requestMock.validate({ name: 'easa', child: { name: '' } })
	expect(comarefunction).toHaveBeenCalledTimes(1)
})
test('should call compare function 2 - on nested', () => {
	var requestMock = { model: { name: n => n.length > 3, child: { name: n => n.length > 3 } } }
	requestMock.validate = app
	requestMock.validate({ name: 'easa', child: { properties: { name: '' } } })
	expect(comarefunction).toHaveBeenCalledTimes(2)
})

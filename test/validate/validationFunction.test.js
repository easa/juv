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
test('should call compare function twice', () => {
	var requestMock = { model: { name: n => n.length > 3, email: e => e.length > 5 } }
	requestMock.validate = app
	requestMock.validate({ name: 'easa', email: 'easa@github.com' })
	expect(comarefunction.mock.calls.length).toBe(2)
	comarefunction.mockRestore()
})
test('should call compare function once - on nested model', () => {
	var requestMock = { model: { name: n => n.length > 3 } }
	requestMock.validate = app
	requestMock.validate({ name: 'easa', child: { name: '' } })
	expect(comarefunction).toHaveBeenCalledTimes(1)
	comarefunction.mockRestore()
})
test('should call compare function twice - on nested model', () => {
	var requestMock = { model: { name: n => n.length > 3, child: { properties: { name: n => n.length > 3 } } } }
	requestMock.validate = app
	requestMock.validate({ pa1: 'easa', child: { pa11: 'halo' } })
	expect(comarefunction).toHaveBeenCalledTimes(2)
	comarefunction.mockRestore()
})

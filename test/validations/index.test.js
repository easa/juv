/* eslint-disable no-undef */
const app = require('../../validations')
const comarefunction = require('../../validations/compareFunction')
jest.mock('../../validations/compareFunction')
test('should be a function', () => {
	expect(typeof app).toBe('function')
})
test('should call compare function once', () => {
	let modelMock = { email: e => e.length > 5 } 
	var result = app(modelMock, { email: 'easa@github.com' })
	expect(result).toBe('')
	expect(comarefunction.mock.calls.length).toBe(1)
	comarefunction.mockRestore()
})
test('should call compare function twice', () => {
	app( { name: n => n.length > 3, email: e => e.length > 5 } 
		, { name: 'easa', email: 'easa@github.com' })
	expect(comarefunction.mock.calls.length).toBe(2)
	comarefunction.mockRestore()
})
test('should call compare function once - on nested model', () => {
	let result = app({ name: n => n.length > 3 } , { name: 'easa', child: { name: '' } })
	expect(comarefunction).toHaveBeenCalledTimes(1)
	expect(result).toBe('')
	comarefunction.mockRestore()
})
test('should call compare function twice - on nested model', () => {
	let modelMock =  { name: n => n.length > 3, child: { properties: { name: n => n.length > 3 } } }
	let result = app(modelMock, { pa1: 'easa', child: { pa11: 'halo' } })
	expect(comarefunction).toHaveBeenCalledTimes(0)
	expect(result).toBe('name is not provided|name is not provided|')
	comarefunction.mockRestore()
})
test('should error', () => {
	let modelMock = { name: n => n.length > 3, child: { properties: { name: n => n.length > 3 } } }
	let result = app(modelMock, { pa1: { pa11: 'halo' } })
	expect(result).toBe('name is not provided|child is not provided|')
	result = app(modelMock, '{ pa1: { pa11: "" } }')
	expect(result).toBe('parameters are not valid : { pa1: { pa11: "" } }')
	// FIXME: write better tests
})

/* eslint-disable no-undef */
const sendfunction = require('../../../app/model/proto/sendModel')

test('should be a function', () => {
	expect(typeof sendfunction).toBe('function')
})
test('should call mock functions', () => {
	// make mock res function for now : FIXME: use jest express request test suite!
	var mockResponseObject = {
		status: function () { return this },
		json: function () { return this },
		send: function () { return this },
		end: function () { return this },
		sendModel: sendfunction
	}

	expect(typeof mockResponseObject).toBe('object')
	expect(typeof mockResponseObject.status).toBe('function')
	expect(mockResponseObject.sendModel()).toBe(true)
})


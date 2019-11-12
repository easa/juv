/* eslint-disable no-undef */
const sendfunction = require('../../../../../app/model/prototype/response/send')

test('should be a module', () => {
	expect(typeof sendfunction).toBe('function')
	var sampleapp = function () { }
	var sampleproto = function () {	
		this.send = sendfunction
	}
	var mockResponseObject = new sampleapp()
	mockResponseObject.prototype = new sampleproto()
	expect(typeof mockResponseObject).toBe('object')
	mockResponseObject.status = code => code
	expect(typeof mockResponseObject.status).toBe('function')
	//  mockResponseObject.prototype.send = sendfunction
	//	expect(typeof mockResponseObject.send).toBe('function')
	expect(typeof mockResponseObject.send()).toBe('undefined')
})

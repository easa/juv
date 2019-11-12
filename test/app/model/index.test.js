/* eslint-disable no-undef */
const app = require('../../../app/model')

test('should be a module', () => {
	expect(typeof app).toBe('object')
	expect(typeof app.reqModel).toBe('object')
	expect(typeof app.resModel).toBe('object')
	expect(typeof app.reqModel.error).toBe('undefined')
})

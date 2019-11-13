/* eslint-disable no-undef */
const {reqModel, resModel} = require('../../app/model')

jest.mock('../../app/model')

test('should be a module', () => {
	expect(typeof reqModel).toBe('object')	
	expect(typeof resModel).toBe('object')
})

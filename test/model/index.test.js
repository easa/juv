/* eslint-disable no-undef */
const {reqModel, resModel} = require('../../model')

jest.mock('../../model')

test('should be a module', () => {
	expect(typeof reqModel).toBe('object')	
	expect(typeof resModel).toBe('object')
})

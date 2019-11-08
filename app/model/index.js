module.exports = {
	reqModel: {
		// TODO: variables value could be regular expression function like : 
		// value => value.match(/regexPattern/g)
		// Or object with property like isRequired and type
		name: {},
		pass: {},
		email: {}
	},
	resModel: {
		ok: undefined,
		error: undefined,
		message: '',
		result: {}
	}
}
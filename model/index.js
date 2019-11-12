const { reqProto, resProto } = require('./proto')
module.exports = {
	reqModel: reqProto({
		// TODO: variables value could be regular expression function like : 
		// value => value.match(/regexPattern/g)
		// Or object with property like isRequired and type
		name: {},
		pass: {},
		email: {}
	}),
	resModel: resProto({
		ok: undefined,
		error: undefined,
		message: '',
		result: {}
	})
}
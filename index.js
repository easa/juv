const middlwareFunction = require('./app/middleware')
const defaultModel = require('./app/model')

const index = (model) => {
	const options = {}
	switch (typeof model) {
	case 'object':
		options.model = model
		break
	default:
		options.model = defaultModel
	}

	return middlwareFunction(options)
}

module.exports = function (opt) {
	let local = {}
	if (!opt) opt = {}
	local.reqModel = opt.reqModel || defaultModel.reqModel
	local.resModel = opt.resModel || defaultModel.resModel
	return index(local)
}
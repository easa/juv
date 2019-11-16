const middlwareFunction = require('./app/middleware')
const defaultModel = require('./app/model')

module.exports = function (opt) {
	if (!opt) opt = {}
	if (opt.reqModel || opt.resModel) {
		if (!opt.reqModel)
			opt.reqModel = defaultModel.reqModel
		if (!opt.resModel)
			opt.resModel = defaultModel.resModel
	} else opt = Object.assign({}, {
		reqModel: opt,
		resModel: defaultModel.resModel
	})
	return middlwareFunction(opt)
}
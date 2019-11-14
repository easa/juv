const middlwareFunction = require('./app/middleware')
const defaultModel = require('./app/model')

module.exports = function (opt) {
	if (!opt) opt = {}
	opt.reqModel = opt.reqModel || defaultModel.reqModel
	opt.resModel = opt.resModel || defaultModel.resModel
	return middlwareFunction(opt)
}
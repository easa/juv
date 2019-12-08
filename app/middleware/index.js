const validate = require('../validate/validationFunction')
let reqModel, resModel

module.exports = function (opt) {
	if (typeof opt !== 'object')
		opt = {}

	if (typeof opt.reqModel === 'object' && typeof opt.resModel === 'object') {
		reqModel = opt.reqModel
		resModel = opt.resModel
	}
	else if (typeof opt.resModel !== 'object')
		reqModel = (typeof opt.reqModel === 'object') ? opt.reqModel : opt
	else {
		resModel = opt.resModel
		reqModel = {}
	}

	return app
}

function app(req, res, next) {
	let paramObject = {}
	if (req.body) Object.assign(paramObject, req.body)
	if (req.params) Object.assign(paramObject, req.params)
	req.model = Object.assign({}, reqModel)
	res.model = Object.assign({}, resModel)
	let err = validate(req.model, paramObject)
	req.error = (!err || (typeof err === 'string' && err == '')) ? false : err
	next()
}

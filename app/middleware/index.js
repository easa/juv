const validate = require('../validate/validationFunction')
let reqModel, resModel

module.exports = function (opt) {
	reqModel = opt.reqModel
	resModel = opt.resModel
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

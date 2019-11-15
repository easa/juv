const validate = require('../validate/validationFunction')
let reqModel, resModel

module.exports = function (opt) {
	reqModel = opt.reqModel
	resModel = opt.resModel
	return app
	// otherwise? (r, s, n) => { n() }
}

function app(req, res, next) {
	let paramObject = {}
	if (req.body)
		Object.assign(paramObject, req.body)
	if (req.params)
		Object.assign(paramObject, req.param)

	let err = validate(paramObject)

	req.error = (!err || (typeof err === 'string' && err == ''))
		? false
		: err

	// TODO: append send to model of resonse

	req.model = Object.assign({}, reqModel)
	res.model = Object.assign({}, resModel)
	
	next()
}

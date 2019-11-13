let reqModel, resModel
module.exports = function (opt) {
	reqModel = opt.reqModel
	resModel = opt.resModel
	return (opt.reqModel)
		? app
		: (r, s, n) => { n() }
}

function app(req, res, next) {
	// 1. validate
	let input = {}
	if (req.body)
		Object.assign(input, req.body)
	if (req.param)
		Object.assign(input, req.param)
	// TODO: ValidityState()
	// 2. append error to model of request 

	// 3. append model to resonse

	// TODO: it's for version 2 actually : append send to model of resonse 

	req.model = Object.assign({}, reqModel)
	res.model = Object.assign({}, resModel)

	req.model.error = true

	next()
}
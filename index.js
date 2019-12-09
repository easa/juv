const validate = require('./validations/validationFunction')
const defaultModel = {
	req: {},
	res: {}
}

let reqModel, resModel

/**
 * validate req.params via the model you define
 * pass your model as parameter (viewModel)
 * @copyright easa
 * @example
 *					var juv = require('juv')
 * 					juv(model)
 * 
 * @param {object} viewModel the model of expected params
 * also could contain the reqModel and resModel also could be the reqModel itself
 * {models} or { reqModel:{models}, resModel:{responseVase} }
 */
module.exports = function (viewModel) {
	
	if (typeof viewModel !== 'object')
		viewModel = {}

	if (typeof viewModel.reqModel === 'object' && typeof viewModel.resModel === 'object') {
		reqModel = viewModel.reqModel
		resModel = viewModel.resModel
	}
	else if (typeof viewModel.resModel !== 'object') {
		reqModel = (typeof viewModel.reqModel === 'object') ? viewModel.reqModel : viewModel
		resModel = defaultModel.res
	}
	else {
		reqModel = defaultModel.req
		resModel = viewModel.resModel
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

const validate = require('./validations/')
let _viewModel = {}
/**
 * validate req.params via the model you define
 * pass your model as parameter (viewModel)
 * @example
 * 		router = express()
 * 		router(juv(model))
 * @param {object} viewModel the model of expected params
 * also could contain the reqModel and resModel also could be the reqModel itself
 * @example
 * {
 * 	name : n => {
 * 		return (n.match(/^easa$/)) 
 * 			? true
 * 			: 'The name should be "easa"!'
 * 	},
 * 	pass : /^[0-9]{6,12}$/
 * } 
 * @returns {function} the middleware function to pass to express
 * @copyright easa
*/
module.exports = function (viewModel) {

	if (typeof viewModel === 'object')
		_viewModel =	viewModel

	return app
}

function app(req, res, next) {
	let paramObject = {}
	if (req.body) Object.assign(paramObject, req.body)
	if (req.params) Object.assign(paramObject, req.params)
	req.model = Object.assign({}, _viewModel)
	let err = validate(req.model, paramObject)
	req.error = (!err || (typeof err === 'string' && err == '')) ? false : err
	next()
}

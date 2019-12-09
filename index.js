const validate = require('./validations/')

/**
 * validate req.params via the model you define
 * pass your model as parameter (viewModel)
 * @example
 * 		router = express()
 * 		router(juv(model))
 * 
 * @example
 * cosnt veiwModel = {
 * 	name : n => {
 * 		return (n.match(/^easa$/)) 
 * 			? true
 * 			: 'The name should be "easa"!'
 * 	},
 * 	pass : /^[0-9]{6,12}$/
 * } 
 * @param {object} viewModel the model of expected params
 * also could contain the reqModel and resModel also could be the reqModel itself
 * @returns {function} the middleware function to pass to express
 * @copyright easa
*/
module.exports = function (viewModel) {
	const model = (typeof viewModel === 'object') ? viewModel : {}
	return (req, res, next) => {
		req.model = model
		
		let paramObject = {}
		if (req.body) Object.assign(paramObject, req.body)
		if (req.params) Object.assign(paramObject, req.params)

		let err = validate(req.model, paramObject)

		req.error = (err && typeof err === 'string' && err !== '') ? err : undefined

		next()
	}
}
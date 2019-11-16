const compare = require('./compareFunction')
/**
 * check each input object fields and append the error messages of them 
 * if they don't match the equivalent field in model!
 * this is a property that attaches to request!
 * @param {object} inputParam the request parameters
 */
module.exports = function (req, inputParam) {
	if (typeof req.model !== 'object') console.log('TODO: should handle this situation in middleware/index')
	if (typeof inputParam !== 'object') return req.error = `parameters are not valid : ${inputParam}`
	var validationResult = val(req.model, inputParam)
	if (validationResult.code === 401)
		return req.error = 'parameters are not in a valid orientation!'
	return req.error = validationResult.message
}

function val(model, param) {
	let errorMessage = '', theCode = 0
	Object.keys(model).forEach(mName => {
		if (!param[mName]) return errorMessage += `${mName} is not provided|`
		if (typeof model[mName].properties === 'object') {
			// TODO: pass the validation to the model!
			let tempResult = val(model[mName].properties, param[mName])
			if (tempResult.code === 401)
				theCode = 401
			else
				errorMessage += tempResult.message
		} else {
			errorMessage += compare(mName, model[mName], param[mName]) || ''
		}
	})
	if (theCode === 401)
		return { code: 401 }
	return { message: errorMessage }
}
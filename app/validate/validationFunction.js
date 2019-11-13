const compare = require('./compareFunction')
/**
 * check each input object fields and append the error messages of them 
 * if they don't match the equivalent field in model!
 * this is a property that attaches to request!
 * @param {object} inputParam the request parameters
 */
function validate(inputParam) {
	// request is the "this"
	var result = val(this.model, inputParam)
	if (result.code === 401) {
		this.isValid = false
		this.error = 'parameters are not in a valid orientation!'
		return 'parameters are not in a valid orientation!'
	}
	this.error = result.message 
	return result.message 
}

module.exports = validate

function val(model, param) {
	if (typeof model !== 'object') return { message: 'Type of model is not valid, read more on github.com/easa/juv' }
	if (typeof param !== 'object') return { code: 401 }
	let errorMessage = '', theCode = 0
	Object.keys(model).forEach(mName => {
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
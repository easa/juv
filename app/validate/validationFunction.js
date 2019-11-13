const compare = require('./compareFunction')
/**
 * check each input object fields and append the error messages of them 
 * if they don't match the equivalent field in model!
 * this is a property that attaches to request!
 * @param {object} inputParam the request parameters
 */
function validate(inputParam) {
	val(this.model, inputParam)
}

module.exports = validate

function val(model, param) {
	let errorMessage = ''
	Object.keys(model).forEach(mName => {
		if (typeof model[mName].properties === 'object') {
			// TODO: pass the validation to the model!
			errorMessage += val(model[mName].properties, param[mName])
		} else {
			console.log(` the name is : ${mName}`)
			errorMessage += compare(mName, model[mName], param[mName])
		}
	})
	return errorMessage
}
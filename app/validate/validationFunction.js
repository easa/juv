const compare = require('./compareFunction')
/**
 * check each input object fields and append the error messages of them 
 * if they don't match the equivalent field in model
 * @param {object} inputParam the request parameters
 */
function validate(inputParam) {
	let errorMessage = ''
	Object.keys(this.model).forEach(mName => {
		if (typeof this.model[mName].properties === 'object') {
			let innerModel = this.model[mName].properties
			innerModel.validate = validate
			errorMessage += innerModel.validate(inputParam[mName].properties)
		} else
			errorMessage += compare(mName, this.model[mName], inputParam[mName])
	})
	return errorMessage
}

module.exports = validate

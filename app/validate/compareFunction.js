/* eslint-disable indent */
/**
 * returns error message if the parameters don't match the model
 * @param {string} indexName the name of indexed parameter
 * @param {*} modelItem the model item {function, object, string}
 * @param {string} paramItem the indexed input parameter 
 */
module.exports = (indexName, modelItem, paramItem) => {
	let message = ''
	switch (typeof modelItem) {
		case 'object':
			message = ''
			if (modelItem.isRequired && !paramItem) {
				// FIXME: use user custom message
				message += `${(message ? ', ' : '')} _${indexName}_ is not provided!`
			}
			if (paramItem && modelItem.regex && !modelItem.regex.test(paramItem)) {
				message += `${(message ? ', ' : '')} on _${indexName}_ : ${modelItem.message}`
			}
			return message
		case 'function':
			try {
				return modelItem(paramItem) ? '' : `violation on ${indexName}`
			} catch (e) {
				console.log(`on validation juv on ${indexName} error is : ${e}`)
				message += `violation on ${indexName}`
			}
		default:
			throw new Error('the model should be object or function')
	}
}

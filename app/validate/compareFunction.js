const assignProperResult = {
	'Object': objectCompare,
	'RegExp': regexCompare,
	'function': functionCompare
}

/**
 * returns error message if the parameters don't match the model
 * @param {string} indexName the name of indexed parameter
 * @param {*} modelItem the model item {function, object, string}
 * @param {string} paramItem the indexed input parameter 
 */
module.exports = (indexName, modelItem, paramItem) => {
	if (!paramItem)
		return message += `the '${indexName}' is not provided!`
	if (!(indexName && modelItem))
		throw new Error('Module problem on JUV')
	let message = ''
	if (typeof modelItem === 'object')
		return assignProperResult[modelItem.constructor.name]
	throw new Error('the model should be function, object or regex')
}

function objectCompare(indexName, modelItem, paramItem) {
	let message = ''
	if (modelItem.isRequired && !paramItem) {
		// FIXME: use user custom message
		message += `${(message ? ', ' : '')} _${indexName}_ is not provided!`
	}
	if (paramItem && modelItem.regex && !modelItem.regex.test(paramItem)) {
		message += `${(message ? ', ' : '')} on _${indexName}_ : ${modelItem.message}`
	}
	return message
}
function regexCompare(indexName, modelItem, paramItem) {
	return paramItem.match(modelItem) ? '' : `violation on ${indexName}`
}
function functionCompare(indexName, modelItem, paramItem) {
	return modelItem(paramItem) ? '' : `violation on ${indexName}`
}

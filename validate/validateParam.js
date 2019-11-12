function validate(object) {
	const _model = this.model()
	let message = ''
	// regex cover all kind of validation other things 
	// like check for being number is not quite clean
	Object.keys(_model).forEach(i => {
		message += (typeof _model[i].properties === 'object')
			? this.validate(object[i].properties)
			: message += getCompairResult(i, _model[i], object[i])
	})
	return message
		? { error: 'error', message: message, code: '400' }
		: { ok: 'ok' }
}

function getCompairResult(name, item, object) {
	let message = ''
	if (item.isRequired && !object) {
		message += `${(message ? ', ' : '')} _${name}_ is not provided!`
	}
	if (object && item.regex && !item.regex.test(object)) {
		message += `${(message ? ', ' : '')} on _${name}_ : ${item.message}`
	}
	return message
}
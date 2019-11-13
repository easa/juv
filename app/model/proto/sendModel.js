module.exports = function (code, model) {
	this.status(code).json(model).send().end()
	return true
}
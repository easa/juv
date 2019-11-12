module.exports = (code, model) => {
	this.status(code).json(model).send().end()
}
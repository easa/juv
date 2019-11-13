const requestVase = function(){}
module.exports = function (paramObject) {
	const model = new requestVase()
	Object.assign(model, paramObject)
	model.error = undefined
	return model
}
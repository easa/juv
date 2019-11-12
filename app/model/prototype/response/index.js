const send = require('./send')
const responseVase = function () { }
module.exports = function (paramObject) {
	const model = new responseVase()
	Object.assign(model, paramObject)
	model.prototype.send = send
	return model
}
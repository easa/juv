const send = require('./sendModel')

module.exports = function (paramObject) {
	paramObject.send = send
	return paramObject
}
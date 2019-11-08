const { reqModel, resModel } = require('../model/')

module.exports = function (req, res, next) {
	req.model = Object.assign({}, reqModel)
	res.model = Object.assign({}, resModel)
	next()
}
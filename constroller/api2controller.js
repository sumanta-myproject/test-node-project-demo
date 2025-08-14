function postApi(req, res) {
	res.json({
		status: 'ok',
		message: 'hello world!!',

	})
}

module.exports = {
	postApi
}
function getApi(req, res) {
	// res.send("hello world")
	res.json({
		status: 'ok',
		message: 'hello world!!',
		data: {
			name: "Sumanta"
		}
	})
}


function deleteAPi(req, res) {
	res.status(220).json({
		status: 'ok',
		message: 'hello world!!',
	})
}

module.exports = {
	getApi,
	deleteAPi
}
const express = require("express")
require('dotenv').config()
const { getApi, deleteAPi } = require('./constroller/apicontroler')
const app = express()
const port = process.env.PORT;


app.get("/", getApi)
app.delete("/", deleteAPi)

app.listen(port, () => {
	console.log("Server started at post : " + port)
})
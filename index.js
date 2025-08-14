const express = require("express")
require('dotenv').config()
const { getApi, deleteAPi } = require('./constroller/apicontroler')
const { postApi } = require('./constroller/api2controller')


const app = express()

const port = process.env.PORT;



app.get("/", getApi)
app.post("/", postApi)
app.delete("/", deleteAPi)

app.listen(port, () => {
	console.log("Server started at post : " + port)
})
const express = require("express")
const router = require("./router")


const app = express()

app.use(express.json())
app.use(router)

app.listen(9000, console.log(9000))
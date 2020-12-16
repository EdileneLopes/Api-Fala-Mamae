const express = require('express')
const app = express()
const db = require("./config/database") 
const bodyParser = require('body-parser')

db.connect()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))  

const index = require("../src/routes/index")
const ajudadoras = require("../src/routes/ajudadora-routes")
const maes = require("../src/routes/mae-routes")
const agenda = require("../src/routes/agenda-routes")


app.use("/", index)
app.use("/", ajudadoras)
app.use("/", maes) 
app.use("/", agenda)

module.exports = app 
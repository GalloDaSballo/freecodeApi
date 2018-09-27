/**
 * Code for running the server
 */

const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express()

const port = 8000

app.use(bodyParser.urlencoded({ extended: true }));
//Else url encoded form data is undefined, it requires body-parser

require('./app/routes')(app, {}) //We export a functiomn in routes/index so we call it
app.listen(port, () => {
  console.log("live at ", port)
})

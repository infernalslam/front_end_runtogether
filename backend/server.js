var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  // res.Header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // res.Header('Access-Control-Allow-Credentials', true)
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('port', (process.env.PORT || 5000))
// connet mongoose
mongoose.connect('mongodb://localhost:27017/DB_run')
// require server
var Disable = require('./Disable/Disable.route.js')
app.use('/api/Disable', Disable)
var Runner = require('./Runner/Runner.route.js')
app.use('/api/Runner', Runner)
var Match = require('./Match/Match.route.js')
app.use('/api/Match', Match)
// ////////////////////////////////
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})

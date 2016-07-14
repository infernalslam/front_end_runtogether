var modelName = 'Runner'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schema = new Schema({
  gender: String,
  name: String,
  surname: String,
  age: Number,
  tel: String,
  distance_runner: String,
  description: String,
  date: String,
  type: String,
  match: String
})
module.exports = mongoose.model(modelName, schema)

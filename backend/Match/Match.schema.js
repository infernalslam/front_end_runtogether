var modelName = 'Match'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schema = new Schema({
  disable_id: String,
  runner_id: String
})
module.exports = mongoose.model(modelName, schema)

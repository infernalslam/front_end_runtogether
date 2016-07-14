var express = require('express')
var router = express.Router()
var Model = require('./Match.schema.js')

router.get('/', function (req, res, next) {
  Model.find({}).exec(function (err, results) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(results)
    }
  })
})

router.post('/', function (req, res, next) {
  console.log(req.body)
  var obj = new Model(req.body)
  obj.save(function (err, obj) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(obj)
    }
  })
})

module.exports = router

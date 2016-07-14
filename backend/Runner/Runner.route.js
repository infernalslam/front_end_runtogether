var express = require('express')
var router = express.Router()
var Model = require('./Runner.schema.js')

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
// router.delete('/:id', function (req, res, next) {
//   console.log(req.body)
//   Model.findById(req.params.id, function (err, data) {
//     data.remove(function (err) {
//       if (!err) {
//         console.log('remove')
//       } else {
//         console.log(err)
//       }
//     })
//   })
// })
// query disabled
// router.get('/querydis', function (req, res, next) {
//   Model.find({type: 'disable'}).exec(function (err, results) {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.send(results)
//     }
//   })
// })
// // query ruuner
// router.get('/queryrun', function (req, res, next) {
//   Model.find({type: 'runner'}).exec(function (err, results) {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.send(results)
//     }
//   })
// })
module.exports = router

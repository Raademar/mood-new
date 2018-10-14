const express = require('express')
const uuid = require('uuid/v4')
const router = express.Router()

const uniqueId = uuid()

router.use(function (req, res, next){
  const now = new Date()
  console.log('Time: ', now)
  next()
})

router.get('/', function(req, res){
  res.render('index')
})

module.exports = router
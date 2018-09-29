const express = require('express')
const uuid = require('uuid/v4')
const router = express.Router()

const uniqueId = uuid()

router.use(function (req, res, next){
  const now = new Date()
  console.log('Time: ', now)
  console.log('Inside the homepage callback function')
  console.log(req.sessionID)
  next()
})

router.get('/', function(req, res){
  res.sendFile(__dirname, './public/index.html')
})

module.exports = router
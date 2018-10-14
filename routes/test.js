const express = require('express')
const uuid = require('uuid/v4')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()



router.get('/', function(req, res){
    res.render('test', {
      title: 'Hey',
      message: 'lol'
    })
})


module.exports = router
const express = require('express')
const uuid = require('uuid/v4')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()
const indexRoute = require('./index')


router.get('/', function(req, res){
  res.render('login')
})

// Login Process
router.post('/', 
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: 'login' }),
)


module.exports = router
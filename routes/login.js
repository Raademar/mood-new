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
  passport.authenticate('local'), 
    function(req, res) {
      console.log(`${req.user.email} logged in`)
      res.redirect('/')
    }
)


module.exports = router
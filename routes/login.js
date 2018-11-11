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
router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      res.send(err)
    }
    if (!user) {
      res.status(401).send(info)
      return next()
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.status(200).send(info)
    });
  })(req, res, next)
})


module.exports = router
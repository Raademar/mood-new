const express = require('express')
const uuid = require('uuid/v4')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()

const options = {
  root: 'public'
}

router.get('/', function(req, res){
  res.sendFile('/login.html', options)
})

router.post('/', (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
    if(info) {
      return res.send(info.message)
     }
     if(err) {
       return next(err)
     }
     if(!user) {
       return res.redirect('/login')
     }
    req.login(user, (err) => {
      if(err) {
        return next(err)
      }
      return res.redirect('/authrequired'+req.user)
    })
  })(req, res, next)
})


module.exports = router
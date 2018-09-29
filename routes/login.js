const express = require('express')
const uuid = require('uuid/v4')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()

const options = {
  root: 'public'
}

router.get('/', function(req, res){
  console.log('Inside GET /login callback function')
  console.log(req.sessionID)
  res.send(`You got the login page!\n`)
})

router.post('/', (req, res, next) => {
  console.log('Inside POST /login callback function')
  passport.authenticate('local', (err, user, info) => {
    console.log('inside the passport.authentication() callback')
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
    console.log(`req.user: ${JSON.stringify(req.user)}`)
    req.login(user, (err) => {
      console.log('Inside req.login() callback')
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
      console.log(`req.user: ${JSON.stringify(req.user)}`)
      return res.send('You were authenticated & logged in!\n')
    })
  })(req, res, next)
})


module.exports = router
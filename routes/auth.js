const express = require('express')
const uuid = require('uuid/v4')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const router = express.Router()

const options = {
  root: 'public'
}

router.get('/', function(req, res){
  if(req.isAuthenticated()) {
    res.send(200)
  } else {
    res.redirect('/')
  }
})


module.exports = router
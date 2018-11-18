const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const mongoose = require('mongoose')
const router = express.Router()


const curDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
let User = require('./../db/models/users')

// Register form
router.get('/', function(req, res){
  res.render('register')
})

// Post to register function
router.post('/', async function(req, res){

  const email = req.body.email
  const password = req.body.password

  try {
  
    req.checkBody('email', 'Email is required')
      .notEmpty()
    req.checkBody('email', 'Email is not valid')
      .isEmail()
      .normalizeEmail()
    req.checkBody('password', 'Password is required')
      .notEmpty()
    req.checkBody('password', 'Password need to be at least 8 characters long.')
      .isLength({ min: 8 })
    req.checkBody('password2', 'Passwords do not match')
      .equals(req.body.password)
    
    let errors = req.validationErrors()
    console.log(errors)
    if(Object.keys(errors).length !== 0) {
      console.log('bajs')
      res.send(errors)
      return
    }
    //a simple if/else to check if email already exists in db
    User.findOne({ email: req.body.email }, async function(err, user) {
      //if a user was found, that means the user's email matches the entered email
      if (user) {
        let errors = {}
        let err = {
          msg: 'A user with that email has already registered. Please use a different email..'
        }
        if(err) {
          errors = {...err}
        }
        if(Object.keys(errors).length !== 0) {
          console.log(errors, 'tjofräs')
          res.send(errors)
        }
      } else {
          // If no user with the given email was found, continue execution.
          let successMessage = {
          successmsg: 'Registration was successfull!'
          }
          let user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: email,
            password: password,
            date: curDate,
          })
          await bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(user.password, salt, function(err, hash){
              if(err) {
                console.log(err)
              }
              user.password = hash
              user.save(function(err){
                if (err) {
                  console.log(err)
                  return
                } else {
                  res.send(successMessage)
                  console.log(`User ${user.email} registered and saved to database.`)
                }
              })
            })
          })
        }
    })
  } catch (err) {
      console.log(err)
    }
})

module.exports = router
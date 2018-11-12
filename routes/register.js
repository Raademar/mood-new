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

  const email = req.body.email;
  const password = req.body.password;
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
    let successMessage = {
      msg: 'Registration was successfull!'
    }
    if(errors) {
      errors.forEach(error => {
        console.log(error)
      })
      res.send(errors)
    } else {
      
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
              req.flash('success', 'You are now registered and can log')
              res.send(successMessage)
              console.log(`User ${user.email} registered and saved to database.`)
            }
          })
        })
      })
    }
  } catch (err) {
      console.log(err)
  }
})

module.exports = router
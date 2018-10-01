const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const router = express.Router()


const options = {
  root: 'public'
}
const curDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
let User = require('./../db/models/users')

// Register form
router.get('/', function(req, res){
  res.sendFile('/register.html', options)
})

// Post to register function
router.post('/', function(req, res){

  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'Email is not valid').isEmail()
  req.checkBody('password', 'Password is required').notEmpty()
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password)

  let errors = req.validationErrors()

  if(done) {
    console.log('went wrong here')
    res.sendFile('/register.html', options,  {
      errors:errors
    })
    return done(err)
  } else {
    let user = new User({
      email: email,
      password: password,
      password2: password2,
      date: curDate,
    })

    bcrypt.genSalt(10, function(err, salt){
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
            console.log('User registered and saved to database.')
            res.redirect('/')
          }
        })
      })
    })
  }
    
})

module.exports = router
const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const passport = require('passport');
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
router.post('/', async function(req, res){

  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('email', 'Email is required').notEmpty()
  req.checkBody('email', 'Email is not valid').isEmail()
  req.checkBody('password', 'Password is required').notEmpty()
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password)

  let errors = req.validationErrors()
  let msg
  if(errors) {
    ({ msg } = errors[0])
    console.log(msg)
    res.status(500).send(errors)
  } else {
    let user = new User({
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
            res.status(500).send(error)
            return
          } else {
            res.status(200).send({"message": "User saved okey"})
            console.log(`User ${user.email} registered and saved to database.`)
          }
        })
      })
    })
  }
})

module.exports = router
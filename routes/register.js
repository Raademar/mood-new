const express = require('express')
const bodyParser = require('body-parser')
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
  let user = new User({
  email: req.body.email,
  password: req.body.password,
  date: curDate,
})
  user.save()
  .then(response => {
    console.log(`User ${user.email} saved to database.`)
  })
  .catch(error => {
    console.log(error, 'not working.. this far')
    res.status(400).send('unable to save user to database.')
  })

    res.redirect('/')
})

module.exports = router
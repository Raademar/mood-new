const express = require('express')
const router = express.Router()

const options = {
  root: 'public'
}

router.get('/', function(req, res){
  if(req.isAuthenticated()) {
    console.log(`${req.user.email} visited the profile page.`)
    res.sendFile('/profile.html', options)
  }else {
    res.redirect('/login.html')
  }
})

module.exports = router
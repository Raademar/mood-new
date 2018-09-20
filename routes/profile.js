const express = require('express')
const router = express.Router()

const options = {
  root: 'public'
}

router.get('/', function(req, res){
  res.sendFile('/profile.html', options)
})

module.exports = router
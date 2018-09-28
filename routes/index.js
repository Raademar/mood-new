const express = require('express')
const router = express.Router()


router.use(function (req, res, next){
  const now = new Date()
  console.log('Time: ', now)
  next()
})

router.get('/', function(req, res){
  res.sendFile(__dirname, './public/index.html')
})

module.exports = router
const express = require('express')
const router = express.Router()
let Mood = require('../db/models/moods')

const options = {
  root: 'public'
}

router.get('/', function(req, res){
  Mood.find({}, function(err, moods){
    if (err){
      console.log(err)
    } else {
      res.send({
        title: 'Moods',
        moods: moods
      })
    }
  })
})

module.exports = router



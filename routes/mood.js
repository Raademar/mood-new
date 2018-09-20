const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const options = {
  root: 'public'
}
const curDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
let Mood = require('./../db/models/moods')

router.post('/', function(req, res){
  let mood = new Mood({
  mood: req.body.mood,
  note: req.body.note,
  date: curDate,
})
  mood.save(function(err){
    if(err) {
      console.log(err)
    } else {
      console.log('Mood saved')
    }
  })
  return res.send(mood)
})

module.exports = router
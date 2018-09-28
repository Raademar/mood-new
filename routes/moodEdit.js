const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const options = {
  root: 'public'
}
const curDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
let Mood = require('./../db/models/moods')

router.get('/', function(req, res){
  let mood = new Mood({
  mood: req.body.mood,
  note: req.body.note,
  date: req.body.date
})
  mood.save()
  .then(response => {
    console.log('mood saved to database.')
  })
  .catch(error => {
    console.log('not working.. this far')
    res.status(400).send('unable to save to database.')
  })

    res.redirect('/')
})

module.exports = router
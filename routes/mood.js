const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const options = {
  root: 'public'
}
const curDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
let Mood = require('./../db/models/moods')
let user = require('./../db/models/users')

router.post('/', function(req, res){
  let mood = new Mood({
    author: req.user._id,  
    mood: req.body.mood,
    note: req.body.note,
    date: curDate,
})
  mood.save()
  .then(response => {
    req.user._moods.push(mood)
    console.log(response)
    req.user._mood.push(response)
    console.log('item saved to database!')
  })
  .catch(error => {
    console.log(error, 'not working.. this far')
    res.status(400).send('unable to save to database.')
  })

    res.redirect('/')
})

module.exports = router
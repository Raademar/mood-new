const express = require('express')
let Mood = require('./../db/models/moods')
const router = express.Router()

const options = {
  root: 'public'
}

async function listUserMoods(user) {
  const moods = await Mood
    .find({ author : user._id })
    .populate('author', 'email')
    .select('mood note author')
  if(!moods) {
    console.log('No Moods registered.')
  }
  return moods
}

router.get('/', async function(req, res){
  if(req.isAuthenticated()) {
    try {
      const moods = await listUserMoods(req.user)
      console.log(moods)
      res.send(moods)
    } catch(err) { 
        console.log(err)
    }
    res.sendFile('/profile.html', options)
  }else {
    res.redirect('/login')
  }
})

module.exports = router

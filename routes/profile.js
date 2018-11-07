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
    .select('mood author')
  console.log(moods)
  if(!moods) {
    console.log('No Moods registered.')
  }
}

router.get('/', function(req, res){
  if(req.isAuthenticated()) {
    try {
      listUserMoods(req.user)
    } catch(err) { 
        console.log(err)
    }
    res.sendFile('/profile.html', options)
  }else {
    res.redirect('/login.html')
  }
})

module.exports = router

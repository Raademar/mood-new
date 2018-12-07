const express = require('express')
let Mood = require('./../db/models/moods')
const router = express.Router()

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
      let moods = await listUserMoods(req.user)
        // Iterate over each mood.mood and sum it up to averageMood.
        // .then(moods.map())
      console.log(moods)
      res.render('profile', {
        moods: moods
      })
    } catch(err) { 
        console.log(err)
    }
  } else {
    res.redirect('/login')
  }
})

module.exports = router

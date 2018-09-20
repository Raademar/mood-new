const mongoose = require('mongoose')

// Mood Schema
let moodSchema = mongoose.Schema({
  mood:{
    type: Number,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  }
})

let Mood = module.exports = mongoose.model('Mood', moodSchema)
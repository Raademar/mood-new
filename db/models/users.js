const mongoose = require('mongoose')

// User Schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  password2: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: false
  }
})



const User = module.exports = mongoose.model('Users', UserSchema)
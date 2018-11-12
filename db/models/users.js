const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// User Schema
const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function(v) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(false);
        }, 5);
      });
    }
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: false
  },
  _moods: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Mood'
    }
  ]
})



const User = module.exports = mongoose.model('Users', UserSchema)
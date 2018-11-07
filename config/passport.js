const LocalStrategy = require('passport-local').Strategy
const User = require('../db/models/users')
const bcrypt = require('bcryptjs')

module.exports = function(passport){
  // Local Strategy
  passport.use(new LocalStrategy({
    usernameField: 'email'},
    function(email, password, done) {
    // Match email
    let query = { email : email }
    User.findOne(query, function(err, user){
      if(err) { 
        return done(err) 
      }
      if(!user) {
        console.log('user not found')
        return done(null, false, {message: 'Wrong username or password.'})
      }

    // Match Password
    bcrypt.compare(password, user.password, function(err, isMatch){
      if(err) throw err
      if(isMatch){
        return done(null, user)
      } else {
        return done(null, false, {message: 'Wrong username or password.'}) 
      }
    })
  })
  }))

  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user)
  })
  })
}
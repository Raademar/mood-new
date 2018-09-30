const express = require('express')
const path = require('path')
const _ = require('lodash')
const bodyParser = require('body-parser')
const session = require('express-session')
const uuid = require('uuid/v4')
const FileStore = require('session-file-store')(session)
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const users = [
  {id: '2f24vvg', email: 'test@test.com', password: 'password'}
]

// Config passport to use local strategy
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    console.log('Inside local strategy callback')
    // here is where you make a call to the database
    // to find the user based on their username or email address
    // for now, we'll just pretend we found that it was users[0]
    const user = users[0] 
    if(email === user.email && password === user.password) {
      console.log('Local strategy returned true')
      return done(null, user)
    }
  }
))

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here')
  done(null, user.id);
});


// Set up DB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mood-new', (err, res) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log('connected');
  }
})
const db = mongoose.connection;

// Check for connection
db.once('open', function(){
  console.log('connected to mongoDB')
})

// Check for db errors
db.on('error', function(err){
  console.log(err)
})


// Init app
const app = express()
app.use(express.static('public'))

//Express session middleware
app.use(session({
  genid: (req) => {
    console.log('Inside session middleware genid function')
    console.log(`Request object sessionID from client: ${req.sessionID}`)
    return uuid() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// set up routes & models
const indexRoute = require('./routes/index')
const profileRoute = require('./routes/profile')
const moodRoute = require('./routes/mood')
const moodRouteEdit = require('./routes/moodEdit')
const apiRoute = require('./routes/api')
const loginRoute = require('./routes/login')

app.use('/', indexRoute)
app.use('/profile', profileRoute)
app.use('/mood/add', moodRoute)
app.use('/mood/edit/:id', moodRouteEdit)
app.use('/api', apiRoute)
app.use('/login', loginRoute)


// Run server
app.listen(3000, () => console.log('listening on port 3000'))
const express = require('express')
const path = require('path')
const _ = require('lodash')
const bodyParser = require('body-parser')
const session = require('express-session')
const expressValidator = require('express-validator')
const uuid = require('uuid/v4')
const FileStore = require('session-file-store')(session)
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy


// Set up DB connection
const mongoose = require('mongoose')
mongoose.connect(process.env.MLABURI, (err, res) => {
  if(err) {
    console.log(err)
  }
  else {
    console.log('connected')
  }
})
const db = mongoose.connection

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
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(expressValidator())
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Express session middleware
app.use(session({
  genid: (req) => {
    return uuid() // use UUIDs for session IDs
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// Express Messages Middleware
app.use(require('connect-flash')())
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res)
  next()
})

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next()
})


// set up routes & models
const indexRoute = require('./routes/index')
const profileRoute = require('./routes/profile')
const moodRoute = require('./routes/mood')
const moodRouteEdit = require('./routes/moodEdit')
const apiRoute = require('./routes/api')
const loginRoute = require('./routes/login')
const logoutRoute = require('./routes/logout')
const registerRoute = require('./routes/register')
const authRoute = require('./routes/auth')
const testRoute = require('./routes/test')

app.use('/', indexRoute)
app.use('/profile', profileRoute)
app.use('/mood/add', moodRoute)
app.use('/mood/edit/:id', moodRouteEdit)
app.use('/api', apiRoute)
app.use('/login', loginRoute)
app.use('/logout', logoutRoute)
app.use('/register', registerRoute)
app.use('/authrequired', authRoute)
app.use('/test', testRoute)



// Run server
app.listen(3000, () => console.log('listening on port 3000'))
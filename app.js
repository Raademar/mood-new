const express = require('express')
const path = require('path')
const _ = require('lodash')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const errorHandler = require('errorhandler')



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
  secret: 'hanip',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root
    
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']'
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    }
  }
}))

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// set up routes & models

//require('./config/passport')
const indexRoute = require('./routes/index')
const profileRoute = require('./routes/profile')
const moodRoute = require('./routes/mood')
const moodRouteEdit = require('./routes/moodEdit')
const apiRoute = require('./routes/api')

app.use('/', indexRoute)
app.use('/profile', profileRoute)
app.use('/mood/add', moodRoute)
app.use('/mood/edit/:id', moodRouteEdit)
app.use('/api', apiRoute)


// Run server
app.listen(3000, () => console.log('listening on port 3000'))
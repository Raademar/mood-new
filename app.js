const express = require('express');
const path = require('path');
const _ = require('lodash');
const bodyParser = require('body-parser')


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
const app = express();
app.use(express.static('public'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// set up routes
const indexRoute = require('./routes/index')
const profileRoute = require('./routes/profile')
const moodRoute = require('./routes/mood')
const apiRoute = require('./routes/api')

app.use('/', indexRoute)
app.use('/profile', profileRoute)
app.use('/mood/add', moodRoute)
app.use('/api', apiRoute)


// Run server
app.listen(3000, () => console.log('listening on port 3000'));
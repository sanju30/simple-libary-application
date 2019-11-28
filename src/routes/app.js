//importing modules

var express = require('express'); // json

var mongoose = require('mongoose'); //DB

var bodyparser = require('body-parser');
//body-parser extract the entire body portion of an incoming request.

var cors = require('cors'); // TWO CONNECT (4000 , 9000 ) WHICH   IS RUNNING IN TWO PORTS.

var path = require('path');

var app = express();

const route = require('./route');

mongoose.connect('mongodb://localhost:27017/BOOKS');
//connect to mongoDB

mongoose.connection.on('connected', () => {
  console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.off('error', err => {
  if (err) {
    console.log('Error in db connection: ' + err);
  }
});

const port = 9000; //port no

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);
// ANYTHING THAT STARTS FROM /API IT MOVES TO ROUTES FILE

app.listen(port, () => {
  console.log('Server started at port ' + port);
});

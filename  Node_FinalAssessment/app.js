// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express'); 
var router = express.Router();

// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/myfirstappdb');

// Create Express application
var app = module.exports = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes = require('./routes/routes')
app.use('/', routes);

// Use environment defined port or 3000
var port = 8888;

// Start the server
app.listen(port);
console.log('Server starts on port ' + port);

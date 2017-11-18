var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var popper = require('popper');
var passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
// var LocalStrategy = require('passport-local'),Strategy;
// var mongo = require('mongodb');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/loginapp');
// var db = mongoose.connection;

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/quote_controller.js');

app.use('/', routes);

app.listen(port, function() {
  console.log("App listening on port: " + port);
});
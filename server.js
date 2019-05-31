var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var sassMiddleware = require('node-sass-middleware');
var methodOverride = require('method-override');

// authentication
var session = require('express-session');
var passport = require('passport');


// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var plantsRouter = require('./routes/');
var greenhousesRouter = require('./routes/greenhouses');

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/public')));
app.use('/', express.static(path.join(__dirname + '/public')));
app.use('/', express.static(path.join(__dirname + '/public')));
app.use('./views', express.static(path.join(__dirname + '/public')));
app.use('../views/greenhouses', express.static(path.join(__dirname + '/public')));
app.use(logger('dev'));
app.use(methodOverride('_method'));

//session middleware for passport
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(passport.initialize());
app.use(passport.session());



// mount all routes with appropriate base paths
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/plants', plantsRouter);
app.use('/greenhouses', greenhousesRouter);

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var companiesRouter = require('./routes/companies');
var usersRouter = require('./routes/users');

// mongoose.connect("mongodb://heroku_vhv528hp:fmk3hidgse53759k2n4gfqgohc@ds151840.mlab.com:51840/heroku_vhv528hp");
mongoose.connect("mongodb://localhost/companyPMS");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('view engine', 'jade');

app.use('/', indexRouter);
app.use('/companies', companiesRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  console.log('error')
});

module.exports = app;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// 日志文件
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.debug("Time:", new Date());
// var log4js = require('log4js');
// log4js.configure({
//     appenders: [
//         { type: 'console' }, //控制台输出
//         {
//             type: 'DateFile', //文件输出
//             filename: 'logs/access.log',
//             maxLogSize: 1024,
//             backups:3,
//             pattern: '-yyyy-MM-dd.log',
//             alwaysIncludePattern: true
//
//         }
//     ],
//     replaceConsole: true
// });
// exports.logger=function(name){
//     var logger = log4js.getLogger(name);
//     logger.setLevel('INFO');
//     return logger;
// };
// app.use(log4js.connectLogger(this.logger(""), {level:'auto', format:':method :url'}));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
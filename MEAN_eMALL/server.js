process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
	mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var bodyParser = require('body-parser');


var db = mongoose(),
	app = express(),
	passport = passport();

app.use(bodyParser());
app.listen(config.port);
// app.locals.resoucePath = "/XXX";

module.exports = app;
console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);
var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);

	require('../app/models/user.server.model');
	require('../app/models/todo.server.model');
    require('../app/models/model.server.model');
    require('../app/models/buyer.server.model.js');


    return db;
};
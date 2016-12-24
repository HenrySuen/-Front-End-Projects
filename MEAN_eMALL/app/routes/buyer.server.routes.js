/**
 * Created by Henry on 2016/12/24.
 */
var buyer = require('../controllers/buyer.server.controller.js'),
    passport = require('passport');


module.exports = function(app) {

    app.post('/registerUser', buyer.signUp);

    app.post('/loginBuyer', buyer.login);

}

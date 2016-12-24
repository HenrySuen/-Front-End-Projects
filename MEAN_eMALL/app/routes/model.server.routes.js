/**
 * Created by Henry on 2016/12/24.
 */
var model = require('../../app/controllers/model.server.controller'),
    passport = require('passport');


module.exports = function(app) {
    app.get('/model',model.model, function () {
        console.log();
    });

    app.post('/saveModel', model.create);
}

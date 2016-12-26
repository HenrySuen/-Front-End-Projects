/**
 * Created by Henry on 2016/12/26.
 */


var merchandiseController = require('../controllers/merchandaise.server.controller'),
    passport = require('passport');;


module.exports = function(app) {
    app.get('/addMerchandise', merchandiseController.add);

    app.post('/doAddMerchandise', merchandiseController.doAdd);

    app.get('/allMerchandise', merchandiseController.all);

    app.get('/shoppingNow', merchandiseController.shoppingNow);


}

/**
 * Created by Henry on 2016/12/25.
 */

var shopController = require('../controllers/shop.server.controller'),
    passport = require('passport');;


module.exports = function(app) {
    app.get('/createShop', shopController.create);

    app.post('/doCreateShop', shopController.doCreate);

    app.get('/shopList', shopController.shopList);

}

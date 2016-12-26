/**
 * Created by Henry on 2016/12/24.
 */
var Shop = require('mongoose').model('Shop'),
    passport = require('passport');

var db = require("./oData");

exports.create = function(req, res) {
    // console.log("ssss")
    res.render('createShop');
};

exports.doCreate = function (req, res) {
    var shop = new Shop(req.body);
    shop.save(function (err) {
        if (err){
            var errInfo = "Error, please re-enter"
            res.render('/createShop', errInfo);
        } else {
            res.redirect('/allMerchandise');
        }
    });
};

exports.shopList = function (req, res) {
    Shop.find(function (err, data) {
        res.render('shopList', data);
    });

};
/**
 * Created by Henry on 2016/12/26.
 */
var Merchandise = require('mongoose').model('Merchandise'),
    passport = require('passport');

ObjectId = require('mongodb').ObjectID;

var db = require("./oData");

exports.add = function(req, res) {
    // console.log("ssss")
    res.render('addMerchandise');
};

exports.doAdd = function (req, res) {
    var merchandise = new Merchandise(req.body);
    merchandise.save(function (err) {
        if (err){
            var errInfo = "Error, please re-enter"
            res.render('/addMerchandise', errInfo);
        } else {
            res.redirect('/allMerchandise');
        }
    });
}

exports.all = function (req, res) {
    Merchandise.find(function (err, data) {
        res.render('allMerchandise', {
            title: "data",
            data: data
        });
    });
};

exports.shoppingNow = function(req, res) {
    Merchandise.find(function (err, data) {
        res.render('shoppingNow', {
            title: "data",
            data: data
        });
    });
};

exports.detail = function(req, res, _id) {
    Merchandise.findOne({_id: req.query._id },function (err, data) {
        console.log(data);
        res.render('detailMerchandise', {
            title: "data",
            data: data
        });
    });
};
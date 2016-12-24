/**
 * Created by Henry on 2016/12/24.
 */
var Model = require('mongoose').model('Model'),
    passport = require('passport');

var db = require("./oData");

exports.index = function(req, res) {
    db.find({
        "table": "Model",
        "where": {
            "username":"Admin"
        }
    },function(err,data){
        console.log(data);
        //还可以继续操作
        db.find({
            "table":"Model",
            "where":{
                "Intro":"User"
            }
        },function(err,data){
            console.log(data);
            //还可以继续操作
            res.render('index',data);
        });
    });
};

exports.create = function(req, res, next) {
    var model = new Model(req.body);
    console.log(req.urlParams);
    model.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(model);
        }
    });
};

exports.model = function(req, res) {
    res.render('model',{
        title: 'model',
    });
};
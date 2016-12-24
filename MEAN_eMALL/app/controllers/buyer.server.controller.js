/**
 * Created by Henry on 2016/12/24.
 */
var Buyer = require('mongoose').model('Buyer'),
    passport = require('passport');

var db = require("./oData");

exports.index = function(req, res) {
    db.find({
        "table": "Buyer",
        "where": {
            "Intro":"Admin"
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

exports.signUp = function (req, res, next) {
    var buyer = new Buyer(req.body);
    buyer.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.redirect('/signUpSucceed');
        }
    });

}

exports.login = function (req, res, next) {
    console.log(req.body.username + req.body.password)
    db.find({
            "table": "Buyer",
            "where": {
                "username": req.body.username,
                "password": req.body.password
            }
        }, function(err,data){
            if(data != null){
                res.redirect('/qqq');
            } else{
                res.redirect('/ddd');
            }
    });


}

exports.model = function(req, res) {
    res.render('model',{
        title: 'model',
    });
};
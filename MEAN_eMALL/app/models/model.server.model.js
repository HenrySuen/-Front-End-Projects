/**
 * Created by Henry on 2016/12/24.
 */
var mongoose = require('mongoose'),
    crypto = require('crypto');
// 这是一个models层的模板，直接继承 baseMODEL 写 Schema 的部分

var Schema = require('mongoose').Schema;

var MODEL = Schema({
    name: String,  //任务名称
    intro: String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
}, {collection: "Model"});

var BaseMODEL = require("./BaseMODEL");
MODEL.statics = BaseMODEL.statics;

/* global db */
module.exports = mongoose.model('Model', MODEL);

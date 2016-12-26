/**
 * Created by Henry on 2016/12/24.
 */

var mongoose = require('mongoose'),
    crypto = require('crypto');
// 这是一个models层的模板，直接继承 baseMODEL 写 Schema 的部分

var Schema = require('mongoose').Schema;


var ShopSchema = Schema({
    shopName: String,  //任务名称
    fixTel: String,
    email: String,
    address: String,
    areaCode: String,
    cellphone: String,
    type: String,   //主要营销商品
    shopkeeper: String,
    description: String,


    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
}, {collection: "Shop"});

var BaseMODEL = require("./BaseMODEL");
ShopSchema.statics = BaseMODEL.statics;

/* global db */
ShopSchema.exports = mongoose.model('Shop', ShopSchema);
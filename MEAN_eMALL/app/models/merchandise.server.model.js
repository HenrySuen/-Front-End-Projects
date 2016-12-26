/**
 * Created by Henry on 2016/12/26.
 */
/**
 * Created by Henry on 2016/12/24.
 */

var mongoose = require('mongoose'),
    crypto = require('crypto');
// 这是一个models层的模板，直接继承 baseMODEL 写 Schema 的部分

var Schema = require('mongoose').Schema;


var MerchandiseSchema = Schema({
    name: String,  //任务名称
    type: String, //商品类型
    price: String,
    sweetness: String,
    waiting: String, //制作时间
    size: String,
    discount: String,
    shopId: String,
    img: String,

    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
}, {collection: "Merchandise"});

var BaseMODEL = require("./BaseMODEL");
MerchandiseSchema.statics = BaseMODEL.statics;

/* global db */
MerchandiseSchema.exports = mongoose.model('Merchandise', MerchandiseSchema);
/**
 * Created by Henry on 2016/12/24.
 */

var Schema = require('mongoose').Schema;

var ShopSchema = Schema({
    name: String,  //任务名称
    shopkeeperId: String,
    type: String,   //主要营销商品
    fixTel: String,
    address: String,
    level: String,
    grade: String,
    reputation: String,



    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
}, {collection: "Plan"});

var BaseMODEL = require("./BaseMODEL");
ShopSchema.statics = BaseMODEL.statics;

/* global db */
module.exports = db.model('PlanMODEL', ShopSchema);
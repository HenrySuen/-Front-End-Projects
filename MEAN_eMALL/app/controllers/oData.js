/**
 * Created by Henry on 2016/12/24.
 */

// controller 的公共方法 控制数据库查询哪个表，直接引入即可
exports.find = function(inputData,callback){

    var MODEL;
    if(inputData.table == "Model"){
        MODEL = require("../models/model.server.model");
    } else if (inputData.table == "User") {
        MODEL = require("../models/user.server.model");
    }
    //else if 控制可以操作哪些表
    if(MODEL){
        MODEL.Find({
            "where":inputData.where,
            "include":inputData.include,
            "limit":inputData.limit,
            "skip":inputData.skip
        },function(err,data){
            //回调
            callback(err,data)
        });
    }
}
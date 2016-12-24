/**
 * Created by Henry on 2016/12/24.
 */
var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
// Buyer Model

var BuyerSchema = Schema({
    firstName: String,
    lastName: String,
    email: String,
    tel: String,
    address: String,
    username: {
        type: String,
        trim: true,
        unique: true
    },
    password: String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
}, {collection: "Buyer"});

var BaseMODEL = require("./BaseMODEL");
BuyerSchema.statics = BaseMODEL.statics;

/* global db */
module.exports = mongoose.model('Buyer', BuyerSchema);

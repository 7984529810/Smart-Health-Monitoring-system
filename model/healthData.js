const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    Blood : {
        type : String,
        required : true
    },
    Sugar : {
        type : String,
        required : true
    },
    Bp :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }
});
const HEALTH = mongoose.model('healthData',healthSchema)
 
module.exports = HEALTH
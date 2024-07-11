const mongoose = require('mongoose');
const { report } = require('../routes/notification');
const Schema = mongoose.Schema;

const ReportsSchema = new Schema({
    reportsName : {
        type : String,
        required : true
    },
    emailAddress : {
        type : String,
        required : true,
        unique : true
    },
    reportMessage : {
        type : String,
        required : true
    },
    reportsType : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }
});
const REPORTS = mongoose.model('reports',ReportsSchema)
 
module.exports = REPORTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    send : {
        type : String,
        required : true
    },
    receive : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }
});
const NOTIFICATION = mongoose.model('notification',notificationSchema)
 
module.exports = NOTIFICATION
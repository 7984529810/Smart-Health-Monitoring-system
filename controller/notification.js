const NOTIFICATION = require('../model/notification')

exports.NotificationCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let userData = await NOTIFICATION.create(req.body)
        res.status(201).json({
            status: "SUCCESS",
            message: "Notification created successfully",
            userData
        })
    } catch (error) {
        res.status(404).json({
            status: "FAIL",
            message: error.message
        })
    }
}

exports.AllNotification = async function(req, res, next) {
    try {
        let userFind = await NOTIFICATION.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status: "SUCCESS",
            message: "Notification Find SuccessFull",
            userFind
        })
    } catch (error) {
        res.status(404).json({  
            status: "fail",
            message:error.message
        })
    }
}

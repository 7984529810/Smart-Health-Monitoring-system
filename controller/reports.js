const REPORTS = require("../model/reports")

exports.reportsCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let userData = await REPORTS.create(req.body)
        res.status(201).json({
            status: "SUCCESS",
            message: "Reports created successfully",
            userData
        })
    } catch (error) {
        res.status(404).json({
            status: "FAIL",
            message: error.message
        })
    }
}

exports.ALLreports = async function(req, res, next) {
    try {
        let userFind = await REPORTS.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status: "SUCCESS",
            message: "Reports Find SuccessFull",
            userFind
        })
    } catch (error) {
        res.status(404).json({  
            status: "fail",
            message:error.message
        })
    }
}

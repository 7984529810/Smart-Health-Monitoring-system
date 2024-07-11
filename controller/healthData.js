const HEALTH = require('../model/healthData')
const bcrypt = require('bcrypt');

exports.HealthDataCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        req.body.password = await bcrypt.hash(req.body.password,10)
        let userData = await HEALTH.create(req.body)
        res.status(201).json({
            status: "SUCCESS",
            message: "Health Data created successfully",
            userData
        })
    } catch (error) {
        res.status(404).json({
            status: "FAIL",
            message: error.message
        })
    }
}

exports.allHealthData = async function(req, res, next) {
    try {
      let userFind = await HEALTH.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status: "success",
            message: "ALL Health Find SuccessFull",
            userFind
        })
    } catch (error) {
        res.status(404).json({  
            status: "fail",
            message:error.message
        })
    }
}

exports.HealthUpdate =  async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let data = await HEALTH.findByIdAndUpdate(req.params.id,req.body,{new : true})  
        res.status(201).json({
          status: "Success",
          message: "Health Update SuccessFull",
        
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};

exports.HealthDelete =  async function(req, res, next) {
    try {
        await HEALTH.findByIdAndDelete(req.params.id)  
        res.status(201).json({
          status: "Success",
          message: "Health Delete SuccessFull",
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};
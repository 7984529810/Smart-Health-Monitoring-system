const USER = require('../model/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.Secure =  async function(req, res, next) {
    try {
        let token = req.headers.authorization
        if(!token){
          throw new Error('please attach token..!')
        }
        var decoded = jwt.verify(token, 'SMART')
        console.log(decoded);
        req.userID = decoded.id
        let userCheck = await USER.findById(decoded.id)
        if(!userCheck){
          throw new Error('User Not token')
        }
        next()
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  };

exports.userCreate = async function(req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        let Check = await USER.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'User created successfully..!',
            Check,
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}

exports.userLogin = async function(req, res, next) {
    try {
        let userCheck = await USER.findOne({email : req.body.email})
        if(!userCheck){
            throw new Error('User not found')
        }
        let passwordV  = await bcrypt.compare(req.body.password,userCheck.password)
        if(!passwordV) {
            throw new Error('password invalid')
        }
        var token = jwt.sign({ id: userCheck._id}, 'SMART');
        res.status(201).json({
            status : 'success',
            message : 'User login successfully..!',
            userCheck,
            token
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}
// exports.UserAllData = async function(req, res, next) {
//     try {
//         let userFind = await USER.find()
//         res.status(201).json({
//             status: "success",
//             message: "User Find SuccessFull",
//             userFind
//         })
//     } catch (error) {
//         res.status(404).json({  
//             status: "fail",
//             message:error.message
//         })
//     }
// }

// exports.UserSingleData = async function(req, res) {
//     try {
//         let userFind = await USER.findById(req.params.id)  
//         res.status(201).json({
//             status : "Success",
//             message : "user SingleData Successfully",
//             userFind
//         })
//     } catch (error) {
//         res.status(404).json({
//             status : "Fail",
//             message: error.message
//         })
//     }
// }

// exports.UserDelete =  async function(req, res, next) {
//     try {
//         await USER.findByIdAndDelete(req.params.id)  
//         res.status(201).json({
//           status: "Success",
//           message: "User Delete SuccessFull",
//         })
//       } catch (error) {
//         res.status(404).json({
//           status: "Fail",
//           message: error.message
//         })
//       }
// };

exports.UserUpdate =  async function(req, res, next) {
    try {
        // req.body.password = await bcrypt.hash(req.body.password,10)
        let data = await USER.findByIdAndUpdate(req.params.id,req.body,{new : true})  
        res.status(201).json({
          status: "Success",
          message: "User Update SuccessFull",
        })
      } catch (error) {
        res.status(404).json({
          status: "Fail",
          message: error.message
        })
      }
};
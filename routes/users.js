var express = require('express');
var userController = require('../controller/user')
var router = express.Router();

/* GET users listing. */
router.post('/register',userController.userCreate)
router.post('/login',userController.userLogin)
router.patch('/:id',userController.Secure,userController.UserUpdate)
// router.get('/',userController.UserAllData)
// router.get('/:id',userController.UserSingleData)
// router.delete('/:id',userController.UserDelete)

module.exports = router;

var express = require('express');
var notificationController = require('../controller/notification')
var userController = require('../controller/user')
var router = express.Router();

/* GET users listing. */

router.post('/notification',userController.Secure,notificationController.NotificationCreate)
router.get('/',userController.Secure,notificationController.AllNotification)

module.exports = router;

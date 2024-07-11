var express = require('express');
var reportsController = require('../controller/reports')
var userController = require('../controller/user')
var router = express.Router();

/* GET users listing. */

router.post('/reports',userController.Secure,reportsController.reportsCreate)
router.get('/',userController.Secure,reportsController.ALLreports)

module.exports = router;

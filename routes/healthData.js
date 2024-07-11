var express = require('express');
var healthController = require('../controller/healthData')
var userController = require('../controller/user')
var router = express.Router();

/* GET users listing. */
router.post('/health_data',userController.Secure,healthController.HealthDataCreate)
router.get('/',userController.Secure,healthController.allHealthData)
router.patch('/:id',userController.Secure,healthController.HealthUpdate)
router.delete('/:id',userController.Secure,healthController.HealthDelete)


module.exports = router;

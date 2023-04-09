var express = require('express');
var router = express.Router();
let loginControllers = require('../controllers/loginControllers')

/* GET users listing. */
router.get('/', loginControllers.login)

module.exports = router;

var express = require('express');
var router = express.Router();
let registerControllers = require('../controllers/registerControllers')

router.get('/', registerControllers.register);

module.exports = router;
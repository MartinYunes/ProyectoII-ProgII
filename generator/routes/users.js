var express = require('express');
var router = express.Router();
let userController = require('../controllers/usersController')

router.get('/login', userController.login )

router.get('/register', userController.register)

router.get('/profile',userController.profile )

router.get('/edit-profile', userController.edit)


module.exports = router;
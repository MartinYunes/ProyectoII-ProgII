var express = require('express');
var router = express.Router();
let userController = require('../controllers/usersController')

router.get('/login', userController.login )
// router.get('/login', userController.loginPost )//

router.post('/login', userController.loginPost )


router.get('/register', userController.register)

router.post('/register', userController.registerPost)

router.get('/profile',userController.profile )

router.get('/edit-profile', userController.edit)


module.exports = router;
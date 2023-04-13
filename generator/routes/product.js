var express = require('express');
var router = express.Router();
let productController = require('../controllers/productControllers')

router.get('/', productController.detail);
router.get('/add', productController.add)
  
module.exports = router;

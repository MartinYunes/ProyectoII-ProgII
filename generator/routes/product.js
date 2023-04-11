var express = require('express');
var router = express.Router();
let productController = require('../controllers/productControllers')

router.get('/detalle', productController.detail);
router.get('/edit/id', productController.edit)
router.get('/add', productController.add)
  
module.exports = router;

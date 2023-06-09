var express = require('express');
var router = express.Router();
let productController = require('../controllers/productControllers')

router.get('/', productController.detail);
router.get('/add', productController.add);

//con post para poder capturar la info del producto agregado
router.post('/add', productController.store);

// detalle del producto
router.get('/id/:id', productController.detail);

router.get('/editar/id/:id',productController.editar);  

router.post('/editar/id/:id',productController.saveEdit);

router.post('/eliminar/id/:id',productController.eliminar);

//Armamos el metodo por el cual guardamos el comentario
router.post('/id/:id',productController.comentarios);
  
module.exports = router;

var express = require('express');
var router = express.Router();
let resultsController = require('../controllers/search-resultsControllers')

router.get('/', resultsController.searchResults);


module.exports = router;
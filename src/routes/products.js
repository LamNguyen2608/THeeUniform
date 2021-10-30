const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/:id', productController.productDetails)
router.get('/', productController.index)

module.exports = router;
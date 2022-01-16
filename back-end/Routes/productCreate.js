const { Router } = require('express');
const controller = require('../controllers/productController');
const { validateProduct } = require('../middlewares/product/validProduct');

const router = Router();

router.post('/produto', validateProduct, controller.createProduct);

module.exports = router
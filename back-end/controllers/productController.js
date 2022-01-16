const service = require('../services/productService');
const statusCode = require('../helpers/statusCode');

const createProduct = async (req, res) => {
  const product = req.body;

  const createdProduct = await service.createProduct(product);

  return res.status(statusCode.CREATED).json(createdProduct);
};

module.exports = {
  createProduct,
}

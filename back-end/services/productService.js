const { Product } = require('../models');

const createProduct = async ({ productName, description, value, image }) => {
const product = await Product.create({ productName, description, value, image });
  
  return product;
};

module.exports = {
  createProduct,
};
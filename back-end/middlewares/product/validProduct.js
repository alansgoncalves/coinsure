const code = require('../../helpers/statusCode');

const validateProduct = async (req, res, next) => {
  const { productName, description, value } = req.body;
  
  if (!productName) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Informar nome do produto' });
  }
  if (!description) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Informar descrição do produto' });
  }
  if (!value) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Informar valor do produto' });
  }
  next();
};

module.exports = {
  validateProduct,
};
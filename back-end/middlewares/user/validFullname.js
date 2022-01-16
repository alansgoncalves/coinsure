const code = require('../../helpers/statusCode');

const validateFullname = (req, res, next) => {
  const { fullName } = req.body;
  if (!fullName) {
  return res.status(code.BAD_REQUEST)
  .json({ message: '"Nome Completo" ldeve ser informado' });
  }
  next();
};

module.exports = {
  validateFullname,
};

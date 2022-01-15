const code = require('../../helpers/statusCode');

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Digite a senha' });
  }

  if (!password.length) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Campo senha não pode estar vazio' });
  } 
  next();
};

module.exports = {
  validatePassword,
};
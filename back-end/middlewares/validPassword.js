const code = require('../helpers/statusCode');

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Digite uma senha' });
  }

  if (password.length < 6) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Senha deve conter no mínimo 6 dígitos' });
  }
  next();
};

module.exports = {
  validatePassword,
};

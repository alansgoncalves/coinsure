const code = require('../../helpers/statusCode');
const { User } = require('../../models');

const validateEmail = async (req, res, next) => {
  const { email, password } = req.body;
  
  if (email === undefined) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Informar e-mail' });
  } 
  
  if (!email.length) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Campo e-mail não pode estar vazio' });
  } 
  
  // Abaixo, função que checa se dados do usuário exitem ou não no banco
  const userExists = await User.findOne({ where: { email } });
  
  if (!userExists || userExists.dataValues.password !== password) {
    return res.status(code.BAD_REQUEST)
    .json({ message: 'Dados inválidos' });
  }

  const { id } = userExists;
  req.userId = id;
  
  next();
};

const userRegistered = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await User.findOne({ where: { email } });
  if(userExists) return res.status(code.OK).json(userExists);
}

module.exports = {
  validateEmail,
  userRegistered,
};
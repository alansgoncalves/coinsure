const { User } = require('../models');
const JWT = require('../helpers/JWT');

const createUser = async ({ fullName, email, password }) => {
  console.log(fullName, email, password)
  await User.create({ fullname: fullName, email, password });

  const token = JWT({ email, password });
  
  return { token };
};

const userLogin = async ({ email, password }) => {
  await User.findOne({ where: { email } });

  const token = JWT({ email, password });
  
  return { token };
};


module.exports = {
  createUser,
  userLogin
}
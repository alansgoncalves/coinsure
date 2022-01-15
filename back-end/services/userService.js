const { User } = require('../models');
const JWT = require('../helpers/JWT');

const createUser = async ({ fullname, email, password }) => {
  await User.create({ fullname, email, password });

  const token = JWT({ email, password });
  
  return { token };
};

module.exports = {
  createUser
}
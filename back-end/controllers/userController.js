const service = require('../services/userService');
const statusCode = require('../helpers/statusCode');

const createUser = async (req, res) => {
  const user = req.body;

  const token = await service.createUser(user);

  return res.status(statusCode.CREATED).json(token);
};

const userLogin = async (req, res) => {
  const user = req.body;

  const token = await service.userLogin(user);
  return res.status(statusCode.OK).json(token);
};

module.exports = {
  createUser,
  userLogin,
}

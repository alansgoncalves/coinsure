const { Router } = require('express');
const controller = require('../controllers/userController');
const { validateEmail } = require('../middlewares/user/validEmail');
const { validateFullname } = require('../middlewares/user/validFullname');
const { validatePassword } = require('../middlewares/user/validPassword');

const router = Router();

router.post('/cadastro', validateFullname, validateEmail, validatePassword, controller.createUser);

module.exports = router
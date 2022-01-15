const { Router } = require('express');
const controller = require('../controllers/userController');
const { validateEmail } = require('../middlewares/validEmail');
const { validateFullname } = require('../middlewares/validFullname');
const { validatePassword } = require('../middlewares/validPassword');

const router = Router();

router.post('/cadastro', validateFullname, validateEmail, validatePassword, controller.createUser);

module.exports = router
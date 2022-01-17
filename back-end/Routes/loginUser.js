const { Router } = require('express');
const controller = require('../controllers/userController');
const { validateEmail, userRegistered } = require('../middlewares/login/validEmail');
const { validatePassword } = require('../middlewares/login/validPassword');

const router = Router();

router.post('/login', validatePassword, validateEmail, userRegistered, controller.userLogin);

module.exports = router
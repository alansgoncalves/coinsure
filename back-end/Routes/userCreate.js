const { Router } = require('express');
const controller = require('../controllers/userController');
const { validateEmail } = require('../middlewares/user/validEmail');
const { validateFullname } = require('../middlewares/user/validFullname');
const { validatePassword } = require('../middlewares/user/validPassword');

const router = Router();

router.post('/', validateFullname, validatePassword, validateEmail, controller.createUser);

module.exports = router
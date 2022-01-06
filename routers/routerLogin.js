const router = require('express').Router();

const login = require('../middlewares/login');
const validationEmail = require('../middlewares/validationEmail');
const validationPassword = require('../middlewares/validationPassword');

router.post('/', validationEmail, validationPassword, login);

module.exports = router;

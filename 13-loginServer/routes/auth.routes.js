const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, login, validateToken } = require('../controllers/auth.controllers');
const validation = require('../middlewares/auth.validations');
const { validJWT } = require('../middlewares/jwt.validations');

const router = Router();

//POST New User
router.post('/new',
check('name','Introduzca un nombre valido').not().isEmpty(),
check('email','Introduzca un email valido').isEmail().isLength(7),
check('password','Introduzca una contraseña valida').isStrongPassword(),
validation,
createUser);

//GET Login User
router.post('/',
check('email','Introduzca un email valido').isEmail().isLength(7),
check('password','Introduzca una contraseña valida').isStrongPassword(),
validation,
login);

//GET Revalidate Token
router.get('/renew', validJWT ,validateToken);

module.exports = router;
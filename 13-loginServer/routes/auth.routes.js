const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, login, validateToken } = require('../controllers/auth.controllers');
const validation = require('../middlewares/auth.validations');
const { validJWT } = require('../middlewares/jwt.validations');

const router = Router();

//POST New User
router.post('/new',
check('name','enter valid name').not().isEmpty(),
check('email','enter valid email').isEmail().isLength(7),
check('password','enter valid password').isStrongPassword(),
validation,
createUser);

//GET Login User
router.post('/',
check('email','enter valid email').isEmail().isLength(7),
check('password','enter valid password').isStrongPassword(),
validation,
login);

//GET Revalidate Token
router.get('/renew', validJWT ,validateToken);

module.exports = router;
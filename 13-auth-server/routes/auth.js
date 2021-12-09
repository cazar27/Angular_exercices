const { Router } = require('express');
const { createUser, login, validateToken } = require('../controllers/auth');

const router = Router();

//POST New User
router.post('/new',createUser);

//GET Login User
router.post('/',login);

//GET Revalidate Token
router.get('/renew',validateToken);

module.exports = router;
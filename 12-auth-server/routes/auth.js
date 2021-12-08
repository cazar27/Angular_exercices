const { Router } = require('express');

const router = Router();

//POST New User
router.post('/new',(req, res) => {
    return res.json( {
        "ok": true,
        "msg":"Crear usuario"
    });
});

//GET Login User
router.post('/',(req, res) => {
    return res.json( {
        "ok": true,
        "msg":"Login de usuario"
    });
});

//GET Revalidate Token
router.post('/renew',(req, res) => {
    return res.json( {
        "ok": true,
        "msg":"Revalidar token"
    });
});
    
module.exports = router;
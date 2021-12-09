const { response } = require('express');

const createUser = ( req, res = response ) => {

    const {email, name, password } = req.body;
    console.log(email);
    console.log(name);
    console.log(password);

    return res.json( {
        "ok": true,
        "msg":"Crear usuario"
    });
}

const login = ( req, res = response ) => {

    const {email, password } = req.body;
    console.log(email);
    console.log(password);

    return res.json( {
        "ok": true,
        "msg":"Login de usuario"
    });
}

const validateToken = ( req, res = response ) => {

    console.log(req.body);

    return res.json( {
        "ok": true,
        "msg":"Revalidar token"
    });
}

module.exports = {
    createUser,
    login, 
    validateToken
};
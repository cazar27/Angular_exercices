const { response } = require('express');

const createUser = ( req, res = response ) => {

    const {email, name, password } = req.body;
    
    return res.json( {
        "ok": true,
        "msg":"User name: "+ name +" created"
    });
}

const login = ( req, res = response ) => {

    const {email, password } = req.body;

    return res.json( {
        "ok": true,
        "msg":"User mail: "+ email +" loged"
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
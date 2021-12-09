const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateJWT = require('../helpers/jwt')

const createUser = async ( req, res = response ) => {

    const {email, name, password } = req.body;

    try {
        // mail validator(no duplicate)
        const usuario = await User.findOne({ email });
        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario con ese email ya existe'
            });
        }

        //create user
        const dbUser = new User( req.body );

        // hash password
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // generate JWT
        //const token = await generateJWT( dbUser.id, name );

        // Create DB user
        await dbUser.save();
        // generate success response
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name
            // ,
            // token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
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
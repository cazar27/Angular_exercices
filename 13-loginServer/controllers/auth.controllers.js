const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt')

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
        const token = await generateJWT( dbUser.id, name, dbUser.email );
        // Create DB user
        await dbUser.save();
        // generate success response
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            token,
            msg:"Registrado usuario: " + dbUser.name
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

const login = async ( req, res = response ) => {

    const {email, password } = req.body;

    try {
        // find the user by email
        const dbUser = await User.findOne( { email } );
        if( !dbUser ) {
            return res.status(400).json(
                {
                    ok: false,
                    msg: "El usuario con el que intenta acceder no existe"
                }
            )
        }

        // confirm match password
        const validPassword = bcrypt.compareSync( password, dbUser.password );
        if( !validPassword ) {
            return res.status(400).json(
                {
                    ok: false,
                    msg: "Contraseña incorrecta"
                }
            )
        }

        // generate JWT
        const token = await generateJWT( dbUser.id, dbUser.name , dbUser.email );
        // valid response
        return res.json( {
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token,
            msg:"Login usuario: " + dbUser.name
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            errr_msg: error
        });
    }
}

const validateToken = async ( req, res = response ) => {

    const { uid, name } = req;
    const token = await generateJWT( uid, name );

    return res.json( {
        ok: true,
        uid: uid,
        name: name,
        token,
        msg:"Revalidar token usuario: "+ name
    });
}

module.exports = {
    createUser,
    login, 
    validateToken
};
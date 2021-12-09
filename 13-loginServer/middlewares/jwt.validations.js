const { response } = require("express");
const jwt = require("jsonwebtoken");

const validJWT = (req, res = response, next ) => {

    // find the user by email
    
    const token = req.header('x-api-key');

    if( !token ) {
        return res.status(401).json(
            {
                ok: false,
                msg: "Token invalido, incorrect token"
            }
        )
    }

    try {
        const { uid, name } = jwt.verify( token, process.env.SECRET_JWT_SEED );
        req.uid  = uid;
        req.name = name;

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Invalid Token',
            errr_msg: error
        });
    }

    next();
}

module.exports = { validJWT }

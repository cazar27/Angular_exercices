const express = require('express');
const cors = require('cors');
require('dotenv').config();

//config of env
//console.log( process.env );

// create server app of express
const app = express();

//Public path
app.use( express.static('public') )

// CORS domain and express midelware
app.use( cors() );
app.use( express.json() )

//Rutas express
app.use( '/api/auth', require('./routes/auth.routes'));


//create listener: port
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`)
});
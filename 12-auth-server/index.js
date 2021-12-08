const express = require('express');

// create server app of express
const app = express();

// GET 
// app.get('/', (req, res) => {
//     res.json( {
//         "ok": true,
//         "msg":"Todo salio ok"
//     })
// })

//Rutas midelware express

app.use( '/api/auth', require('./routes/auth'));



//create listener: port
app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto: ${4000}`)
});
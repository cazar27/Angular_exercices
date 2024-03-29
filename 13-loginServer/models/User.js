const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = model('User', userSchema );
// {
//     "name": "Test 1",
//     "email": "test1@gmail.com",
//     "password":"Test%123"

//     "name": "Pepe Manuel",
//     "email": "test2@gmail.com",
//     "password":"12@Test2"
// }.
// {
//     "name": "Carlos",
//     "email": "carlos@gmail.com",
//     "password":"1234@Car"
// }
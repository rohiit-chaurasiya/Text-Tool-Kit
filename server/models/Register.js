const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    userName: String,
    userPassword: String
})

const RegisterModel = mongoose.model("register", RegisterSchema);
module.exports = RegisterModel;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
})

module.exports = mongoose.model('User', userSchema);
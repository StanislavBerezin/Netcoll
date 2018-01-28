const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,

    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    university:{
        type: String,
        required: true
    },
    tokens:[{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }],

    
});

//getting the methods
require('./userController/UserController')(userSchema);


module.exports = mongoose.model('User', userSchema);

//need bcrypt, mongoose,
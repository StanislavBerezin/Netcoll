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
    course: {
        type: String,
        required: false
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
    publicationCount: {
        type: Number,
        required: false
    },
    followers: {        // List of users that are following this user
        // TODO
    },
    followerCount: {
        type: Number,
        required: false
    },
    following: {        // List of users that this user is following
        // TODO
    }
    followingCount: {
        type: Number,
        required: false
    }

    
});

//getting the methods
require('./userController/UserController')(userSchema);


module.exports = mongoose.model('User', userSchema);

//need bcrypt, mongoose,
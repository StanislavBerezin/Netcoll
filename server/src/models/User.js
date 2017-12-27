const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,




    tokens:[{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]
})

//getting the methods
require('./userController/UserController')(userSchema)


module.exports = mongoose.model('UserObject', userSchema)

//need bcrypt, mongoose,
//importing models and other things that are needed
//when working with routes (responses and requests)
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const mongoose = require('mongoose')

//jwt tokens, can be a week, or 24 hours, or 3 days
function jwtOneWeek(user) {
    const oneWeek = 60 * 60 * 24 * 7

    return jwt.sign(user, config.auth.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}





module.exports = {
    //typical controller
    //can be async if await inside
    firstController(req, res) {
        res.send({
            message: 'Controller'
        })
    },

    registerUser(req, res){
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.username
        })
        user.save().then(result =>{
            console.log(result)
            console.log('saved?')
            res.send(result)
        }).catch((err)=> console.log('something happened'))
        
        
    },

    

    //this can be used to authenticate based on tokens
    //combined with another jwt token
    //x2 security
    authenticate(req, res, next) {
        var token = req.header('x-auth');

        User.findByToken(token).then((user) => {
            if (!user) {
                return Promise.reject();
            }

            req.user = user;
            req.token = token;

            next();
        }).catch((e) => {
            res.status(401).send()
        })


    }
}
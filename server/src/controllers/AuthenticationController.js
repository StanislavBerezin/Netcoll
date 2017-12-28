//importing models and other things that are needed
//when working with routes (responses and requests)
const User = require('../models/User')

const jwt = require('jsonwebtoken')
const config = require('../config/config')
const mongoose = require('mongoose')

//jwt tokens, can be a week, or 24 hours, or 3 days

function generateToken(req) {
    var token = jwt.sign({
        auth: 'magic',
        agent: req.headers['user-agent'],
        exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60 // Note: in seconds!
    }, config.auth.jwtSecret); // secret is defined in the environment variable JWT_SECRET
    return token;
}


function validateToken(req, res) {
    var token = req.headers.authorization;
    try {
        var decoded = jwt.verify(token, config.auth.jwtSecret);
    } catch (e) {
        return authFail(res);
    }
    if (!decoded || decoded.auth !== 'magic') {
        return authFail(res);
    } else {
        return privado(res, token);
    }
}



module.exports = {

    async registerUser(req, res) {

        const user = await new User({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            university: req.body.university
        })

        user.save()
            .then(() => {

                return user.generateAuthToken()

            })
            .then((token) => {
                const userJson = user.toJSON()
                res.send({
                    user: userJson,
                    additional: generateToken(req)
                })
            })
            .catch((err) => {

                res.status(400).send(err)

            })


    },


    loginUser(req, res) {


    }








    //this can be used to authenticate based on tokens
    //combined with another jwt token
    //x2 security
    /*
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
    */
}
//importing models and other things that are needed
//when working with routes (responses and requests)
const User = require('../models/User')

const jwt = require('jsonwebtoken')
const config = require('../config/config')
const mongoose = require('mongoose')
var _ = require('lodash');



//function to chose what things we want to send back to the client
function sendData(userObject, ...parameteres) {
    const userToObject = userObject.toObject()
    return _.pick(userToObject, [...parameteres])

}




module.exports = {

    async getUnits(req, res){
        const {id} = req.body
        const checkUser = User.findByToken(id)
    }


}





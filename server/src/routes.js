const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const GetController = require('./controllers/GetController')
const IsAuth = require('./policies/IsAuth')



module.exports = (app) => {


    app.post('/signup',
        AuthenticationPolicy.validateRegister,
        AuthenticationController.registerUser
    
    )
    
    app.post('/login',
        AuthenticationPolicy.validateLogin,
        AuthenticationController.loginUser
    )
}
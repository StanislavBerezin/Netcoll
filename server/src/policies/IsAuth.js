const passport = require('passport')
const GoogleAuthorize = require('../passport/google_passport')

module.exports = {


    //when its executed we know that a user wants to authenticate with google
    //so passport communicated with google
    googleAuth() {
        passport.authenticate('google', {
            scope: ['profile'],
            failureRedirect: '/somewhere'
        })
    },
    //after this is done and the user gets to the URL that is setup in GOOGLE OBJECT
    //we need to use passport.authenticate('google) again to retrieve user's google data
    //and the callback function fires that is GOOGLE object
    googleRetrieve() {
        passport.authenticate('google')
    },
    //that should be in a redirected URL


// here we IMPLEMENT the JWT_PASSPORT STRATEGY
//which can be called on routes
    jwtAuthCheck(req, res, next) {
        passport.authenticate('jwt', function (error, user) {

            //if something happens send an error
            if (error) {
                res.status(403).send({
                    message: 'you dont have an access'
                })


                //if all good then req.user is the user object from the db
            } else {

                req.user = user
                next();

            }


        })(req, res, next)
    }
//U CAN CALL THIS FUNCTION AFTER by IsAuth.jwtAuthCheck and then after u know that in that route
// u have the req.user.id, which can be stored and used in routes like "const userId = req.user.id"
//can use it to find info



}
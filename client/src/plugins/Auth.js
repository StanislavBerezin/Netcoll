
var AuthPlugin = {
    setTokens(token, extraToken) {
        localStorage.setItem('extraToken', extraToken)
        localStorage.setItem('userToken', token)
         
    },

    destroyTokens(){
        localStorage.removeItem('extraToken');
        localStorage.removeItem('userToken');
    },

    getToken: function () {
        var token = localStorage.getItem('authToken');
        var expiration = localStorage.getItem('authTokenExpiration');

        if (!token || !expiration)
            return null;

        if (Date.now() > parseInt(expiration)) {
            this.destroyToken();
            return null;
        } else {
            return token;
        }
    },

    loggedIn: function () {
        if (this.getToken())
            return true;
        else
            return false;
    }
};

export default function(Vue) {
    Vue.auth = AuthPlugin;

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: function() {
                return Vue.auth;
            }
        }
    })
}
/*
USAGE
if (this.$auth.loggedIn())
    can also be stored in data()
*/
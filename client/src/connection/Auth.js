import Api from './Api'

export default{

    registerUser(credentials){
        return Api().post('/signup', credentials)
    },
    loginUser(credentials){
        return Api().post('/login', credentials)
    }
}

//use case
//Auth.name(credentials).then etc
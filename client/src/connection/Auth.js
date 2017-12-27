import Api from './Api'

export default{

    registerUser(credentials){
        return Api().post('/signup', credentials)
    }
}

//use case
//Auth.name(credentials).then etc
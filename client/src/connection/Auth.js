import Api from './Api'

export default{
    name(nameOfWhatToSend){
        return Api.post('/route_to_send_to', nameOfWhatToSend)
    }
}

//use case
//Auth.name(credentials).then etc
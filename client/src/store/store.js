import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    //data to store
    state:{
        user:{
            token: null,
            isLogged: false,
            extraToken: null,
            username: null,
            university: null,
            email: null,
            units:[
                
            ],
            purchasedArticles:[],
            following:[],
            credit: null,

        }
    },

    //to get data
    getters:{

    },

    //to mutate data
    mutations:{
        setToken(state, token, extraToken){
            state.user.token = token
        },
        setExtra(state, extraToken){
            state.user.extraToken = extraToken
        },
        setUni(state, university){
            state.user.university = university
        },
        setUsername(state, username){
            state.user.username = username
        },
        setLog(state, log){
            state.user.isLogged = log
        }

    },

    //mutations are done through actions
    actions:{
        setToken({commit}, token){
            commit('setToken', token)
        },
         setExtra({commit}, extraToken){
            commit('setExtra', extraToken)
        },
         setUsername({commit}, username){
            commit('setUsername', username)
        },
        setUni({commit}, university){
            commit('setUni', university)
        },
        setLog({commit}, log){
            commit('setLog', log)
        }


    }



})
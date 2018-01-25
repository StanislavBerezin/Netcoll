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
            units:["CAB202", "CAB203", "CAB204", "IAB330"]
            ,
            purchasedArticles:[],
            following:[],
            credit: null,

        }
    },

    //to get data
    getters:{
        getUnits(state){
            return state.user.units
        }

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
        },



        addUnit(state, unitId){
            state.user.units.push(unitId)
        },
        removeUnit(state, unitId){
             var index = state.user.units.indexOf(unitId)
             if (index > -1) {
                state.user.units.splice(index, 1);
            }
            
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
        },

        addUnit({commit}, unitId){
            commit('addUnit', unitId)
        },
        removeUnit({commit}, unitId){
            commit('removeUnit', unitId)
        }
        


    }



})
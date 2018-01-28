import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  //data to store
  state: {
    user: {
      tokens: null,
      isLogged: false,
      extraToken: null,
      username: null,
      university: null,
      email: null,
      units: ["CAB202", "CAB203", "CAB204", "IAB330"],
      purchasedArticles: [],
      following: [],
      credit: null,

    }
  },

  //to get data
  getters: {
    getUnits(state) {
      return state.user.units
    }

  },

  //to mutate data
  mutations: {
    //when registring a user
    logUser(state, newProps) {
      Object.assign(state.user, newProps)

    },

    //adding an extra token and seetting isLogged to true
    extraToken(state, extraTok) {

      state.user.extraToken = extraTok
      if (extraTok) {
        state.user.isLogged = true
      } else {
        state.user.isLogged = false
      }
    },

    //adding unit to sidemenu
    addUnit(state, unitId) {
      state.user.units.push(unitId)
    },
    //removing unit from sidemenu
    removeUnit(state, unitId) {
      var index = state.user.units.indexOf(unitId)
      if (index > -1) {
        state.user.units.splice(index, 1);
      }

    }

  },

  //mutations are done through actions
  actions: {
    logUser({
      commit
    }, {
      tokens,
      username,
      university
    }) {
      commit('logUser', {
        tokens,
        username,
        university
      })
    },


    extraToken({
      commit
    }, extraTok) {
      commit('extraToken', extraTok)
    },


    addUnit({
      commit
    }, unitId) {
      commit('addUnit', unitId)
    },
    removeUnit({
      commit
    }, unitId) {
      commit('removeUnit', unitId)
    }



  }



})

import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v4'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inmates: [],
    user: {
      id: uuid(),
      name: 'MadCat',
      email: 'madcat.me@gmail.com',
      isDarkModeEnabled: false
    }
  },
  getters: {
    hasInmates(state) {
      return state.inmates.length > 0
    },
    isDarkModeEnabled(state) {
      return state.user.isDarkModeEnabled
    },
    getInmateById: state => id => {
      return state.inmates.find(inmate => inmate.id === id)
    }
  },
  mutations: {
    updateInmates(state, inmates) {
      state.inmates = inmates
    },
    addInmate(state, inmate) {
      inmate['id'] = uuid()
      inmate['date'] = '2019-05-06'
      inmate['moderator'] = 'MadCat'
      state.inmates.push(inmate)
    },
    updateInmate(state, inmate) {
      const id = inmate.id
      let currentInmate = state.inmates.find(inmate => inmate.id === id)

      if (currentInmate) {
        Object.assign(currentInmate, inmate)
      }
    },
    deleteInmate(state, inmateId) {
      state.inmates = state.inmates.filter(inmate => inmate.id !== inmateId)
    },
    toggleDarkMode(state) {
      state.user.isDarkModeEnabled = !state.user.isDarkModeEnabled
    }
  },
  actions: {
    getInmates({ commit, getters }) {
      if (!getters['hasInmates']) {
        commit('updateInmates', [
          {
            id: uuid(),
            date: '2019-04-28',
            name: 'Troll',
            moderator: 'MadCat',
            reason: 'Trolling',
            url: 'https://google.de'
          },
          {
            id: uuid(),
            date: '2019-04-29',
            name: 'Troll',
            moderator: 'DarkFantasy',
            reason: 'Trolling',
            url: 'https://disney.de'
          }
        ])
      }
    }
  }
})

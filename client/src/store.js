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
    }
  },
  mutations: {
    updateInmates(store, inmates) {
      store.inmates = inmates
    },
    addInmate(store, inmate) {
      inmate['id'] = uuid()
      inmate['date'] = '2019-05-06'
      inmate['moderator'] = 'MadCat'
      store.inmates.push(inmate)
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

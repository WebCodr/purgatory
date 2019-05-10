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
    },
    quotes: [
      'The one and only troll tracking tool!',
      'Be afraid, be very afraid!',
      'The asshole tracker for the 21st century!',
      'Winter is coming!',
      'All your base are belong to us!',
      "Machete don't troll.",
      'Are you not entertained! Are you not entertained! Is this not why you are here!',
      "Nuke 'em!",
      'Hail to the king, baby.',
      'I see dead people. (trolls!)',
      'Yippie kay-yay, motherfucker.',
      'He slimed me.',
      "Don't cross the streams!",
      'War. War never changes.',
      'But our princess is in another castle!',
      'The cake is a lie.',
      'Do a barrel roll!',
      'FINISH HIM!',
      'No more Mr. Nice Gaius!',
      'As of this moment, we are at war!',
      'Sometimes, you have to roll a hard six.',
      'Prepare for unforseen consequences.',
      'Do a barrel roll!',
      'A man chooses; A slave obeys!',
      'Nuclear launch detected.',
      'Hard to see big picture behind pile of corpses.',
      'Had to be me. Someone else might have gotten it wrong.',
      'The best solution to a problem is usually the easiest one ...',
      "Space. Space. I'm in space. SPAAAAAAACE!",
      "It ain't no secret I didn't get these scars falling over in church.",
      "I'm Commander Shepard, and this is my favorite store on the citadel.",
      'Once an enemy, always an enemy.',
      'Rage is a hell of an anesthetic.',
      "Flammable! Or inflammable! Forget which! Doesn't matter!",
      'You exist because we allow it and you will end because we demand it.',
      'Then... DIE!',
      'All right! This chick is TOAST!',
      "No, we're exterminators. Someone saw a cockroach up on twelve.",
      'We came, we saw, we kicked its ass!',
      "Ah, if there's a steady paycheck in it, I'll believe anything you say.",
      "That's a big Twinkie.",
      "He didn't die of old age, either. He was poisoned, stabbed, shot, hung, stretched, disembowled, drawn and quartered.",
      "Ray... we'd like to shoot the monster. Could you move, please?",
      'and have you BURNED AT THE STAKE!',
      "There's just two ways this can end, and in both of them, you die!",
      "Now you see me, now you're dead!"
    ]
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
    },
    getRandomQuote: state => () => {
      return state.quotes[Math.floor(Math.random() * state.quotes.length)]
    },
    getDarkModeStatusIcon(state) {
      if (state.user.isDarkModeEnabled) {
        return 'toggle_on'
      }

      return 'toggle_off'
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

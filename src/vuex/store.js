import Vue from 'vue'
import Vuex from 'vuex'
// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  // TODO: Set up our initial s
  count: 1,
  get: {},
  eventID: 0
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // TODO: set up our mutations
  statePage (state, page) {
    state.count = page
    console.log(page)
  },
  getStatePage (state, data) {
    state.get = data
    console.log('show data store :' + state.get)
  },
  searchEvent (state, id) {
    console.log(id)
    state.eventID = id
  }
}

export default new Vuex.Store({
  state,
  // backend,
  mutations
})

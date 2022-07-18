import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';


const store = new Vuex.Store({
  state: {
    iuser: 0
  },
  mutations: {
    setState: (state, iuser) => {
      state.iuser = iuser;
    }
  },
  plugins: [
    createPersistedState()
  ],
});

export default store;
/*import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
*/
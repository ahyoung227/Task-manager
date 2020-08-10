import Vue from "vue";
import Vuex from "vuex";
// import { vuexfireMutations, firestoreAction } from "vuexfire";
// import db from "./firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    UNSET_USER(state) {
      state.user = null;
    }
  },
  actions: {
    signIn({ commit }, user) {
      commit("SET_USER", user);
    },
    signOut({ commit }) {
      commit("UNSET_USER");
    }
  }
});

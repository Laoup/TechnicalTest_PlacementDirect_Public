import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate"
import jwt from 'jsonwebtoken'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    data: {
      assurances: null
    },
    user: {
      access_token: null,
      firstName: null,
      lastName: null,
      email: null
    },
  };
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: getDefaultState(),
  mutations: {
    SET_ASSURANCES(state, assurances) {
      state.data.assurances = assurances;
    },
    SET_ACCESS_TOKEN(state, token) {
      state.user.access_token = token;
    },
    SET_FIRST_NAME(state, firstName) {
      state.user.firstName = firstName;
    },
    SET_LAST_NAME(state, lastName) {
      state.user.lastName = lastName;
    },
    SET_EMAIL(state, email) {
      state.user.email = email;
    },
    RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    }

  },
  actions: {
    async actionGetAssurances({ commit }) {
      let response = await axios.get("http://localhost:3000/contract/all");
      commit('SET_ASSURANCES', response.data);
    },
    actionPatchUser({ commit }, form) {
      return new Promise((resolve, reject) => {
        axios.patch("http://localhost:3000/user/profile", form, {
          headers: {
            'authorization': `Bearer ${this.state.user.access_token}`
          }
        })
        .then(response => {
          commit('SET_EMAIL', form.email);
          resolve(response);
        }, error => {
          reject(error);
        })
      })
    },
    async actionLogin({ commit }, formData) {
      return new Promise((resolve, reject) => {
        axios.post("http://localhost:3000/user/login", formData)
        .then(response => {
          commit('SET_ACCESS_TOKEN', response.data.access_token);
          const infoUser = jwt.decode(response.data.access_token);
          commit('SET_FIRST_NAME', infoUser.firstName);
          commit('SET_LAST_NAME', infoUser.lastName);
          commit('SET_EMAIL', infoUser.email);
          resolve(response);
        }, error => {
          reject(error);
        })
      })
    },
    actionLogOut({ commit }) {
      commit('RESET_STATE');
    }
  },
  getters: {
    getAllAssurances: (state) => {
      return (state.data.assurances);
    },
    getToken: (state) => {
      return (state.user.access_token);
    },
    getFirstName: (state) => {
      return (state.user.firstName);
    },
    getLastName: (state) => {
      return (state.user.lastName);
    },
    getEmail: (state) => {
      return (state.user.email);
    }
  },
  modules: {
  }
})

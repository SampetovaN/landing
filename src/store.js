import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    houses: [],
    error: false,
    searchValue: ""
  },
  mutations: {
    SET_HOUSES_TO_STATE(state, houses) {
      state.houses = houses;
    },
    SET_ERROR_TO_STATE(state) {
      state.error = true;
    },
    SET_SEARCH_VALUE(state, value) {
      state.searchValue = value;
    }
  },
  actions: {
    GET_HOUSES_FROM_API({ commit }) {
      return axios("https://603e38c548171b0017b2ecf7.mockapi.io/homes", {
        method: "GET"
      })
        .then(houses => {
          commit("SET_HOUSES_TO_STATE", houses.data);
          return houses;
        })
        .catch(error => {
          commit("SET_ERROR_TO_STATE");
          return error;
        });
    },
    GET_SEARCH_VALUE({ commit }, value) {
      commit("SET_SEARCH_VALUE", value);
    }
  },
  getters: {
    HOUSES(state) {
      return state.houses;
    },
    ERROR(state) {
      return state.error;
    },
    SEARCH_VALUE(state) {
      return state.searchValue;
    }
  }
});

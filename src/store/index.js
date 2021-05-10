import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://0.0.0.0/api";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "true";

export default createStore({
  state: {
    user: null,
    medications: null,
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
    },

    clearUserData() {
      localStorage.removeItem("user");
      location.reload();
    },

    setUserMedication(state, data) {
      state.medications = data;
    },

    addUserMedication(state, data) {
      state.medications.unshift(data);
    },

    deleteUserMedication(state, med) {
      var index = state.medications.findIndex((c) => c.id == med.id);
      state.medications.splice(index, 1);
    },
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post("/register", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },

    login({ commit }, credentials) {
      return axios.post("/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },

    logout({ commit }, credentials) {
      return axios.post("/logout", credentials).then(({ data }) => {
        console.log(data);
        commit("clearUserData");
      });
    },

    medication({ commit }, credentials) {
      return axios.get("/medication", credentials).then(({ data }) => {
        commit("setUserMedication", data);
      });
    },

    addMedication({ commit }, credentials) {
      return axios.post("/medication", credentials).then(({ data }) => {
        console.log(data);
        commit("addUserMedication", data);
      });
    },
    deleteMedication({ commit }, credentials) {
      return axios
        .delete("/medication/" + credentials.id, credentials)
        .then(({ data }) => {
          console.log(data);
          commit("deleteUserMedication", data);
        });
    },
  },
  getters: {
    getName: (state) => state.user.user,
    isLogged: (state) => !!state.user,
    allMedications: (state) => state.medications,
  },

  modules: {},
});

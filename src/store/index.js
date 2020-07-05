import Vue from "vue";
import Vuex, { mapActions } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
    homes: []
  },
  mutations: {
    addLocation(state, payload) {
      const location = {
        city: payload.city,
        id: payload.id,
        name: payload.name,
        street: payload.street,
        type: payload.type,
        zip: payload.zip
      };

      state[payload.type].push(location);
    },
    removeLocation(state, payload) {
      state[payload.type] = state[payload.type].filter(
        location => location.id !== payload.id
      );
    }
  },
  actions: {
    addLocation(context, payload) {
      context.commit("addLocation", payload);
    },
    removeLocation(context, payload) {
      context.commit("removeLocation", payload);
    }
  },
  modules: {
    ...mapActions(["addLocation", "removeLocation"])
  }
});

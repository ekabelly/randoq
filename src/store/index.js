import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: null
  },
  mutations: {
    questions(state, questions) {
      state.questions = questions;
    }
  },
  actions: {
    async questions(context) {
      const res = await Axios.get(
        "https://randoq-app.firebaseio.com/questions.json"
      );
      const questions = res.data.filter(q => !!q);
      context.commit("questions", questions);
      return questions;
    }
  },
  getters: {
    questions: state => state.questions
  },
  modules: {}
});

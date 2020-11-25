import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    i18n: null,
    questions: null,
    userLang: null
  },
  mutations: {
    i18n(state, i18n) {
      state.i18n = i18n;
    },
    questions(state, questions) {
      state.questions = questions;
    },
    userLang(state, userLang) {
      state.userLang = userLang;
    },
    appLang(state, locale) {
      state.i18n.locale = locale;
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
    questions: state => state.questions,
    userLang: state => state.userLang || "en",
    i18n: state => state.i18n
  },
  modules: {}
});

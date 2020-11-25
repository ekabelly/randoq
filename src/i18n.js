import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "./store";
import enJson from "./locales/en.json";
import heJson from "./locales/he-il.json";

Vue.use(VueI18n);

const { userLang } = store.getters;

const localeJson = {
  en: enJson,
  "he-il": heJson
};

export default new VueI18n({
  locale: userLang,
  fallbackLocale: "en",
  messages: localeJson
});

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

Vue.config.productionTip = false;
store.commit("userLang", navigator.language.toLowerCase());
store.commit("i18n", i18n);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

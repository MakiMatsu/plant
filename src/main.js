import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

var Tabulator = require("tabulator-tables");

new Vue({
  router,
  store,
  Tabulator,
  render: h => h(App)
}).$mount("#app");

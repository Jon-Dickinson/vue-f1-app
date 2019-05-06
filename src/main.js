import "./css/normalize-8.0.1.css";
import "./css/cssr-restart.css";
import "./css/cssr-typography.css";
// custom classes
import "./css/custom.css";
// css reactions to be able to override custom styles and remain primary
import "./css/cssr-framework.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

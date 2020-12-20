import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api/apis";
import axios from "axios";
import VueAxios from "vue-axios";
/* sweet alert */
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);

const alertT = Vue.prototype.$swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  showCloseButton: true,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Vue.prototype.$swal.stopTimer);
    toast.addEventListener("mouseleave", Vue.prototype.$swal.resumeTimer);
  },
});

const alertM = Vue.prototype.$swal.mixin({
  toast: false,
  position: "center",
  showConfirmButton: true,
  showCloseButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Vue.prototype.$swal.stopTimer);
    toast.addEventListener("mouseleave", Vue.prototype.$swal.resumeTimer);
  },
});

// all(建議放套件Css下層)
import "../src/assets/all.scss";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$alertT = alertT;
Vue.prototype.$alertM = alertM;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

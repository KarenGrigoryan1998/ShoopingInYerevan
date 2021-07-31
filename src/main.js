import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Vuelidate from "vuelidate";
import { router } from "./router/routes";
import vuetify from "./plugins/vuetify";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Axios from "axios";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import VueSimpleAlert from "vue-simple-alert";
import Fragment from "vue-fragment";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VuePhoneNumberInput);
Vue.use(Fragment.Plugin);
Vue.use(VueSimpleAlert);

// sending token with all Axios request if needed ('Axios' replacing with 'this.$http')
Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

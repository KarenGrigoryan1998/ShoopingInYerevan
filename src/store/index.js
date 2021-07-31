import Vue from "vue";
import Vuex from "vuex";
// load Vuex
Vue.use(Vuex);
// load modules
import auth from "./modules/auth";
import products from "./modules/products";
import cart from "./modules/cart";

// create store for Vuex
export default new Vuex.Store({
  modules: {
    auth,
    cart,
    products
  }
});

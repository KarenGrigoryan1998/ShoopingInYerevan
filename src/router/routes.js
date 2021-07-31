import VueRouter from "vue-router";
import Vue from "vue";
import Auth from "../components/Auth/index";
// import store from "../store";
import Home from "../components/Home";
import Products from "../components/Products/index";
import ProductDetails from "../components/Products/ProductDetails";
import Cart from "../components/Cart";
import Faq from "../components/Faq";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      authComponent: Auth
    },
    exact: true,
    meta: {
      auth: true
    }
  },
  {
    path: "/products",
    name: "products",
    components: {
      default: Products,
      authComponent: Auth
    },
    exact: true,
    meta: {
      auth: true
    }
  },
  {
    path: "/products/:id",
    name: "products-details",
    components: {
      default: ProductDetails,
      authComponent: Auth
    },
    exact: true,
    meta: {
      auth: true
    }
  },
  {
    path: "/cart",
    name: "cart",
    components: {
      default: Cart,
      authComponent: Auth
    },
    exact: true,
    meta: {
      auth: true
    }
  },
  {
    path: "/faq",
    name: "faq",
    components: {
      default: Faq,
      authComponent: Auth
    },
    exact: true
  }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.auth)) {
//     if (store.getters["auth/isAuthenticated"]) {
//       next();
//       return true;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

import axios from "axios";

export const actions = {
  getAllProducts: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit("GET_ALL_PRODUCTS_REQUEST");
      const url = "";
      axios
        .get(url)
        .then(res => {
          if (res && res.status === 200) {
            commit("GET_ALL_PRODUCTS_SUCCESS", res.data);
            resolve(res);
          }
        })
        .catch(err => {
          commit("GET_ALL_PRODUCTS_ERROR");
          reject(err);
        });
    });
  },
  getProductById: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      commit("GET_ALL_PRODUCTS_REQUEST");
      const url = "";
      axios
        .get(url, id)
        .then(res => {
          if (res && res.status === 200) {
            commit("GET_ALL_PRODUCTS_SUCCESS", res.data);
            resolve(res);
          }
        })
        .catch(err => {
          commit("GET_ALL_PRODUCTS_ERROR");
          reject(err);
        });
    });
  },
  addToCart: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      commit("ADD_TO_CART_REQUEST");
      const url = "";
      axios
        .post(url, { data: id })
        .then(res => {
          if (res && res.status === 200) {
            commit("ADD_TO_CART_SUCCESS", res.id);
            resolve(res);
          }
        })
        .catch(err => {
          commit("ADD_TO_CART_ERROR");
          reject(err);
        });
    });
  },
  removeFromCart: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      commit("REMOVE_FROM_CART_REQUEST");
      const url = "";
      axios
        .post(url, { data: id })
        .then(res => {
          if (res && res.status === 200) {
            commit("REMOVE_FROM_CART_SUCCESS", res.id);
            resolve(res);
          }
        })
        .catch(err => {
          commit("REMOVE_FROM_CART_ERROR");
          reject(err);
        });
    });
  },
  addToFavorite: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      commit("ADD_TO_FAVORITE_REQUEST");
      const url = "";
      axios
        .get(url, { data: id })
        .then(res => {
          if (res && res.status === 200) {
            commit("ADD_TO_FAVORITE_SUCCESS", res.id);
            resolve(res);
          }
        })
        .catch(err => {
          commit("ADD_TO_FAVORITE_ERROR");
          reject(err);
        });
    });
  },
  removeFromFavorite: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      commit("REMOVE_FROM_FAVORITE_REQUEST");
      const url = "";
      axios
        .get(url, { data: id })
        .then(res => {
          if (res && res.status === 200) {
            commit("REMOVE_FROM_FAVORITE_SUCCESS", res.id);
            resolve(res);
          }
        })
        .catch(err => {
          commit("REMOVE_FROM_FAVORITE_ERROR");
          reject(err);
        });
    });
  }
};

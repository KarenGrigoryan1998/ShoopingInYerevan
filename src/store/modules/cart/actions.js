import axios from "axios";

export const actions = {
  getUserCart: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      commit("GET_USER_CART_REQUEST");
      const url = "";
      axios
        .get(url, id)
        .then(res => {
          if (res && res.status === 200) {
            commit("GET_USER_CART_SUCCESS", res.data);
            resolve(res);
          }
        })
        .catch(err => {
          commit("GET_USER_CART_ERROR");
          reject(err);
        });
    });
  },
  deleteCartItemById: ({ commit }, id) => {
    commit("DELETE_CART_ITEM_SUCCESS", id);
    // return new Promise((resolve, reject) => {
    //   commit("GET_CART_ITEM_REQUEST");
    //   const url = "";
    //   axios
    //     .delete(url, id)
    //     .then(res => {
    //       if (res && res.status === 200) {
    //         commit("DELETE_CART_ITEM_SUCCESS");
    //         resolve(res);
    //       }
    //     })
    //     .catch(err => {
    //       commit("DELETE_CART_ITEM_ERROR");
    //       reject(err);
    //     });
    // });
  }
};

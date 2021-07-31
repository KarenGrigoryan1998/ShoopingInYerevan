export const mutations = {
  GET_USER_CART_REQUEST: state => (state.userCartStatus = "loading"),
  GET_USER_CART_SUCCESS: (state, payload) => {
    state.userCart = payload;
    state.userCartStatus = "success";
  },
  GET_USER_CART_ERROR: state => (state.userCartStatus = "error"),

  DELETE_CART_ITEM_REQUEST: state => (state.userCartStatus = "loading"),
  DELETE_CART_ITEM_SUCCESS: (state, id) => {
    state.userCart = state.userCart.filter(item => {
      return item.id !== id;
    });
    state.userCartStatus = "success";
  },
  DELETE_CART_ITEM_ERROR: state => (state.userCartStatus = "error")
};

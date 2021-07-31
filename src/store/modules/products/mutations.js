export const mutations = {
  GET_ALL_PRODUCTS_REQUEST: state => (state.productsGetStatus = "loading"),
  GET_ALL_PRODUCTS_SUCCESS: (state, payload) => {
    state.products = payload;
    state.productsGetStatus = "success";
  },
  GET_ALL_PRODUCTS_ERROR: state => (state.productsGetStatus = "error"),

  GET_PRODUCT_BY_ID_REQUEST: state => (state.productByIdStatus = "loading"),
  GET_PRODUCT_BY_ID_SUCCESS: (state, payload) => {
    state.product = payload;
    state.productByIdStatus = "success";
  },
  GET_PRODUCT_BY_ID_ERROR: state => (state.productByIdStatus = "error"),

  ADD_TO_CART_SUCCESS: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
    state.productAddToCartStatus = "success";
  },
  ADD_TO_CART_ERROR: state => (state.productAddToCartStatus = "error"),

  REMOVE_FROM_CART_REQUEST: state =>
    (state.productRemoveFromCartStatus = "loading"),
  REMOVE_FROM_CART_SUCCESS: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
    state.productRemoveFromCartStatus = "success";
  },
  REMOVE_FROM_CART_ERROR: state =>
    (state.productRemoveFromCartStatus = "error"),

  ADD_TO_FAVORITE_REQUEST: state =>
    (state.productAddToFavoriteStatus = "loading"),
  ADD_TO_FAVORITE_SUCCESS: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
    state.productAddToFavoriteStatus = "success";
  },
  ADD_TO_FAVORITE_ERROR: state => (state.productAddToFavoriteStatus = "error"),

  REMOVE_FROM_FAVORITE_REQUEST: state =>
    (state.productRemoveFromFavoriteStatus = "loading"),
  REMOVE_FROM_FAVORITE_SUCCESS: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
    state.productRemoveFromFavoriteStatus = "success";
  },
  REMOVE_FROM_FAVORITE_ERROR: state =>
    (state.productRemoveFromFavoriteStatus = "error")
};

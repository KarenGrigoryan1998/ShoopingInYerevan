export const getters = {
  // productsAddedToCart: state => {
  //   return state.products.forEach(item => {
  //     return item.isAddedToCart;
  //   });
  // },
  // productsAddedToWishList: state => {
  //   return state.products.filter(item => {
  //     return item.isFavorite;
  //   });
  // }
  shoppingCartPayForTotal: state => {
    return state.userCart
      .map(item => item.price * item.quantity)
      .reduce((total, amount) => total + amount, 0);
  }
};

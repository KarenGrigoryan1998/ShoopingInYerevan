export const getters = {
  productsAddedToCart: state => {
    return state.products.forEach(item => {
      return item.isAddedToCart;
    });
  },
  productsAddedToWishList: state => {
    return state.products.filter(item => {
      return item.isFavorite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id === id);
  },
  getProductsAll: state => {
    return state.products;
  },
  getProductsForMen: state => {
    return state.products.filter(item => {
      return item.category === "men";
    });
  },
  getProductsForWomen: state => {
    return state.products.filter(item => {
      return item.category === "women";
    });
  },
  getProductsForKids: state => {
    return state.products.filter(item => {
      return item.category === "kids";
    });
  },
  getProductsAccessories: state => {
    return state.products.filter(item => {
      return item.category === "accessories";
    });
  },
  getProductsByPrice: state => {
    return function(range) {
      return state.products.filter(
        item => item.price >= range[0] && item.price <= range[1]
      );
    };
  },
  getProductsBySearch: state => {
    return function(keyword) {
      const search = keyword.trim().toLowerCase();
      if (!search.length) return state.products;
      return state.products.filter(
        item => item.title.toLowerCase().indexOf(search) > -1
      );
    };
  }
};

export const state = {
  userCart: [
    {
      id: 1,
      title: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imgSrc: "slide1.jpg",
      category: "men",
      price: 2000,
      isAddedToCart: false,
      isFavorite: false,
      quantity: 1
    },
    {
      id: 2,
      title: "Product 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imgSrc: "slide1.jpg",
      category: "women",
      price: 6000,
      isAddedToCart: false,
      isFavorite: false,
      quantity: 2
    },
    {
      id: 3,
      title: "Product 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      imgSrc: "slide1.jpg",
      category: "kids",
      price: 5000,
      isAddedToCart: false,
      isFavorite: false,
      quantity: 2
    }
  ],
  totalCartPrice: 0,
  userCartStatus: ""
};

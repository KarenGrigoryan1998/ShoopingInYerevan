<template>
  <v-row class="shop-products-content">
    <FilterContent
      :filterDrawer="filterDrawer"
      @change-navigation-drawer="changeNavigationDrawer"
      @handle-all-products="handleAllProducts"
      @handle-filter-women="handleFilterWomen"
      @handle-filter-men="handleFilterMen"
      @handle-filter-kids="handleFilterKids"
      @handle-filter-accessories="handleFilterAccessories"
      @handle-filter-price="handleFilterPrice($event)"
      @handle-filter-search="handleFilterSearch($event)"
    />
    <v-col class="col-12 text-center" v-if="loading">
      <v-progress-circular
        indeterminate
        color="baseColor"
      ></v-progress-circular>
    </v-col>
    <v-col class="col-12 text-center" v-else-if="products.length === 0">
      <h6>Տվյալներ չեն գտնվել։</h6>
    </v-col>
    <v-col
      v-else
      class="col-auto col-lg-3 col-md-4 col-sm-6 col-12 flex-grow-1"
      v-for="(product, index) in products"
      :key="index"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
          v-if="products.length !== 0"
        >
          <v-img src="../../assets/images/homeSlides/slide2.jpg">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                <v-btn
                  outlined
                  class="white--text mx-auto"
                  color="secondBaseColor accent-4"
                  v-if="hover"
                  :to="{ path: `/products/${product.id}` }"
                >
                  Դիտել
                </v-btn>
              </div>
            </v-expand-transition>
          </v-img>

          <v-card-text style="position: relative;">
            <h5
              class="text-center font-weight-light black--text mb-2 shopProductName"
            >
              {{ product.title }}
            </h5>
            <p class="text-center shopProductPrice mb-0">
              {{ product.price }}֏
            </p>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import FilterContent from "./filterContent";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductsContent",
  components: {
    FilterContent
  },
  data() {
    return {
      products: this.getProductsAll,
      loading: false,
      filterDrawer: false
    };
  },
  computed: {
    ...mapGetters("products", [
      "getProductsAll",
      "getProductsForWomen",
      "getProductsForMen",
      "getProductsForKids",
      "getProductsAccessories",
      "getProductsByPrice",
      "getProductsBySearch"
    ])
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.handleAllProducts();
      this.loading = false;
    }, 0);
    // this.getAllProducts()
    //   .then(() => {
    //     console.log("products get success");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  methods: {
    ...mapActions("products", [
      "getAllProducts",
      "addToCart",
      "removeFromCart",
      "addToFavorite",
      "removeFromFavorite"
    ]),
    changeNavigationDrawer() {
      this.filterDrawer = !this.filterDrawer;
    },
    handleAllProducts: function() {
      this.loading = true;
      this.products = this.getProductsAll;
      this.filterDrawer = false;
      this.loading = false;
    },
    handleFilterWomen: function() {
      this.loading = true;
      this.products = this.getProductsForWomen;
      this.filterDrawer = false;
      this.loading = false;
    },
    handleFilterMen: function() {
      this.loading = true;
      this.products = this.getProductsForMen;
      this.filterDrawer = false;
      this.loading = false;
    },
    handleFilterKids: function() {
      this.loading = true;
      this.products = this.getProductsForKids;
      this.filterDrawer = false;
      this.loading = false;
    },
    handleFilterAccessories: function() {
      this.loading = true;
      this.products = this.getProductsAccessories;
      this.filterDrawer = false;
      this.loading = false;
    },
    handleFilterPrice: function(e) {
      this.loading = true;
      this.products = this.getProductsByPrice(e);
      this.filterDrawer = false;
      this.loading = false;
    },
    handleFilterSearch: function(e) {
      this.loading = true;
      this.products = this.getProductsBySearch(e);
      this.filterDrawer = false;
      this.loading = false;
    }
    // setProductQuantity: data => {
    //   this.loading = true;
    //   setTimeout(() => {
    //     this.products = this.getProductsAccessories;
    //     this.loading = false;
    //   }, 1000);
    // }
  }
};
</script>

<style lang="scss" scoped>
.shop-products-content {
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    a {
      text-transform: unset;
      text-decoration: none;
      &:hover {
        transition: all 0.2s;
        color: white !important;
        background-color: #2d3753;
      }
    }
  }
  h6 {
    text-shadow: 1px 1px 5px black;
    letter-spacing: 1.5px;
  }
  .shop-favorite-heart {
    font-size: 40px !important;
  }
  .v-image {
    height: 250px;
  }
  .v-card {
    text-decoration: none !important;
    &:hover {
      transition: 0.2s;
    }
    h5 {
      margin-bottom: 0 !important;
    }
  }
}
</style>

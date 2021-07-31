<template>
  <v-container class="home-feature-products">
    <v-row class="d-flex justify-space-around">
      <v-col class="col-12">
        <h2 class="text-center">Feature Products</h2>
      </v-col>
      <v-col
        class="col-auto col-lg-3 col-md-4 col-sm-12 col-12"
        v-for="(product, index) in featureProducts"
        :key="index"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 16 : 2"
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img :aspect-ratio="16 / 14" :src="product.src">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <span class="featureProductPrice" style="color: #e65540">
                    ֏5000
                  </span>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
              <p
                class="text-center font-weight-light black--text featureProductName"
              >
                {{ product.title }}
              </p>
              <v-card-actions class="p-0">
                <v-btn
                  outlined
                  class="white--text mx-auto"
                  color="secondBaseColor accent-4"
                  :to="{ path: `/products/${product.id}` }"
                >
                  Դիտել
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FeaturedProductsContent",
  data() {
    return {
      isWished: false,
      featureProducts: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          title: "product"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          title: "product 1"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          title: "product 2"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          title: "product 3"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          title: "product 4"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          title: "product 5"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          title: "product 6"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
          title: "product 7"
        }
      ]
    };
  },
  methods: {
    addWishList: function() {
      this.isWished = !this.isWished;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
a {
  text-transform: unset;
  text-decoration: none !important;
  &:hover {
    transition: all 0.2s;
    color: white !important;
    background-color: #2d3753;
  }
}
</style>

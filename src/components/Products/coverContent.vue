<template>
  <v-row class="shop-slide-show">
    <v-carousel cycle hide-delimiters :show-arrows="false" height="200">
      <v-carousel-item
        reverse-transition="fade-transition"
        transition="fade-transition"
        v-for="(slide, i) in slideShow.items"
        :key="i"
        :src="require('../../assets/images/homeSlides/' + slide.src)"
      >
      </v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script>
export default {
  name: "CoverContent",
  data: function() {
    return {
      slideShow: {
        items: [
          {
            src: "slide1.jpg"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.shop-slide-show {
  .v-carousel {
    height: 200px !important;
  }
  @media all and (max-width: 600px) {
  }
}
</style>

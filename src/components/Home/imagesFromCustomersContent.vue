<template>
  <v-container>
    <h1 class="text-center">ՆԿԱՐՆԵՐ ՀԱՃԱԽՈՐԴՆԵՐԻՑ</h1>
    <v-row class="py-5 mx-auto">
      <v-card
        v-for="(images, index) in customerImages"
        :key="index"
        class="col-lg-2 col-md-4 col-sm-6 col-12 p-0 rounded-0 mx-auto"
      >
        <v-img
          :src="require('../../assets/images/homeSlides/' + images.src)"
          class="white--text p-0"
          height="250px"
        >
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ImagesFromCustomers",
  data() {
    return {
      customerImages: [
        {
          src: "slide1.jpg"
        },
        {
          src: "slide2.jpg"
        },
        {
          src: "slide2.jpg"
        },
        {
          src: "slide2.jpg"
        },
        {
          src: "slide2.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@media all and (max-width: 600px) {
  h1 {
    font-size: 22px !important;
  }
}
</style>

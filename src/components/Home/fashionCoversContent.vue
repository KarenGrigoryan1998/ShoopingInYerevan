<template>
  <v-row class="fashion-covers">
    <v-col
      class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
      v-for="(cover, index) in fashionCovers"
      :key="index"
    >
      <v-img
        :src="require('../../assets/images/homeSlides/' + cover.src)"
        class="white--text align-center"
        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9)"
        height="500"
      >
        <h1 class="text-center font-size">{{ cover.title }}</h1>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FashionCoversContent",
  data() {
    return {
      fashionCovers: [
        {
          title: "ՄԻՇՏ ՆՈՐԱՁև",
          src: "slide1.jpg"
        },
        {
          title: "ԴԱՐՁԻՐ ՈՃԱՅԻՆ",
          src: "slide2.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.fashion-covers {
  padding: 35px 0;
  background-color: #f2f2f2;
  h1 {
    font-size: 60px;
    font-weight: bold;
    transform: rotate(45deg);
  }

  .v-image {
    &:hover {
      .v-image__image {
        transform: scale(1.1) !important;
        transition: all 0.5s;
      }
    }
  }
  @media all and (max-width: 600px) {
    .v-image {
      height: 350px !important;
    }
    h1 {
      font-size: 40px;
    }
  }
}
</style>

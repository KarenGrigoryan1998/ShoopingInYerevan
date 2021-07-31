<template class="home-slider-show">
  <v-row>
    <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item
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
  name: "SlideShowContent",
  data: function() {
    return {
      slideShow: {
        items: [
          {
            src: "slide1.jpg"
          },
          {
            src: "slide2.jpg"
          }
        ]
      }
    };
  }
};
</script>

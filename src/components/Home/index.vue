<template>
  <fragment>
    <SlideShowContent />
    <v-container>
      <FeaturedProductsContent />
    </v-container>
    <FashionCoversContent />
    <ImagesFromCustomersContent />
    <ServiceInfoContent />
  </fragment>
</template>

<script>
import SlideShowContent from "./slideShowContent";
import FashionCoversContent from "./fashionCoversContent";
import FeaturedProductsContent from "./featuredProductsContent";
import ImagesFromCustomersContent from "./imagesFromCustomersContent";
import ServiceInfoContent from "./serviceInfoContent";

export default {
  name: "Home",
  components: {
    SlideShowContent,
    FeaturedProductsContent,
    FashionCoversContent,
    ImagesFromCustomersContent,
    ServiceInfoContent
  }
};
</script>

<style lang="scss" scoped></style>

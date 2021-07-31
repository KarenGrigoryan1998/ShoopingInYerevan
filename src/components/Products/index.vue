<template>
  <fragment>
    <CoverContent />
    <v-container class="shop-content">
      <v-row class="mt-lg-10">
        <v-col class="col-lg-12 col-12">
          <ProductsContent />
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import CoverContent from "./coverContent";
import ProductsContent from "./productsContent";

export default {
  name: "Shop",
  components: {
    CoverContent,
    ProductsContent
  }
};
</script>

<style lang="scss" scoped></style>

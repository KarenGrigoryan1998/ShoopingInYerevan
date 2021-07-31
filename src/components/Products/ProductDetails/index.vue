<template>
  <v-container class="product-details">
    <div class="row">
      <div class="col-md-5 col-sm-5 col-xs-12">
        <v-carousel>
          <v-carousel-item src="https://picsum.photos/550?random">
          </v-carousel-item>
          <v-carousel-item src="https://picsum.photos/550?random">
          </v-carousel-item>
          <v-carousel-item src="https://picsum.photos/550?random">
          </v-carousel-item>
          <v-carousel-item src="https://picsum.photos/550?random">
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="col-md-7 col-sm-7 col-xs-12">
        <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
        <div class="pl-6">
          <p class="display-1 mb-0">Ապրանքի Անվանում</p>
          <v-card-actions class="pa-0">
            <p class="headline font-weight-bold pt-3">
              5500 AMD
              <del class="subtitle-1 font-weight-bold">8000 AMD</del>
            </p>
            <v-spacer></v-spacer>
            <v-rating
              v-model="rating"
              class=""
              background-color="warning lighten-3"
              color="warning"
              dense
            ></v-rating>
          </v-card-actions>
          <p class="subtitle-1 font-weight-thin">
            Նկարագրություն
          </p>
          <p class="title mb-0">Չափս</p>
          <v-radio-group row class="mt-0">
            <v-radio label="XS" value="XS"></v-radio>
            <v-radio label="S" value="s"></v-radio>
            <v-radio label="M" value="m"></v-radio>
            <v-radio label="L" value="l"></v-radio>
            <v-radio label="XL" value="xl"></v-radio>
          </v-radio-group>
          <p class="title mb-0">Գույն</p>
          <v-btn-toggle
            active-class="active-color"
            class="pick-color"
            mandatory
          >
            <v-btn color="red"> </v-btn>
            <v-btn color="black"> </v-btn>
            <v-btn color="blue"> </v-btn>
            <v-btn color="green"> </v-btn>
          </v-btn-toggle>
          <p class="title my-1">Քանակ</p>
          <v-text-field
            outlined
            style="width:60px"
            :value="1"
            :min="1"
            dense
            type="number"
          ></v-text-field>
          <v-btn class="secondBaseColor white--text font-weight-bold" dense>
            <v-icon left>mdi-cart</v-icon> Ավելացնել
          </v-btn>
          <v-btn class="orange ml-4 font-weight-bold white--text wish-btn"
            ><v-icon left>mdi-heart</v-icon> Ավելացնել
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      rating: 4.5,
      breadcrums: [
        {
          text: "Գլխավոր",
          disabled: false,
          href: "#"
        },
        {
          text: "Տեսականի",
          disabled: false,
          href: "/products"
        },
        {
          text: "Անվանում",
          disabled: true,
          href: "/home"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.product-details {
  .v-radio {
    .v-icon {
      color: black !important;
    }
  }
  .pick-color {
    button {
      margin-left: 5px;
      height: 35px !important;
      width: 30px !important;
      border-radius: 0 !important;
    }
  }
  .active-color {
    outline: 2px solid black;
  }
}
</style>

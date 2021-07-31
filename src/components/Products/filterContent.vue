<template>
  <v-row class="filter-content position-relative">
    <v-btn
      @click="handleChangeNavDrawer"
      :class="[{ 'active-filter-drawer': filterDrawer }]"
      id="filter-modal-btn"
    >
      <v-icon size="28">fa fa-filter</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="filterDrawer" floating fixed app>
      <v-card>
        <v-list>
          <v-subheader>ԿԱՏԵԳՈՐԻԱ</v-subheader>
          <v-divider></v-divider>
          <v-btn-toggle
            mandatory
            class="d-flex flex-column"
            active-class="active-filter-btn"
          >
            <v-btn
              small
              readonly
              class="black--text"
              @click="$emit('handle-all-products')"
            >
              <v-icon left class="ml-5">mdi-store</v-icon>
              Բոլորը
            </v-btn>
            <v-btn
              small
              class="black--text"
              @click="$emit('handle-filter-women')"
            >
              <v-icon left class="ml-5">fa fa-female</v-icon>
              Կանացի
            </v-btn>
            <v-btn
              small
              class="black--text"
              @click="$emit('handle-filter-men')"
            >
              <v-icon left class="ml-5">fa fa-male</v-icon>
              Տղամարդու
            </v-btn>
            <v-btn
              small
              class="black--text"
              @click="$emit('handle-filter-kids')"
            >
              <v-icon left class="ml-5">fa fa-child</v-icon>
              Մանկական
            </v-btn>
            <v-btn
              small
              class="black--text"
              @click="$emit('handle-filter-accessories')"
            >
              <v-icon left class="ml-5">fa fa-camera-retro</v-icon>
              Աքսեսուարներ
            </v-btn>
          </v-btn-toggle>

          <v-subheader>ԱՐԺԵՔ(դրամ)</v-subheader>
          <v-divider class="mt-0"></v-divider>
          <v-list-item class="mt-16 px-5">
            <v-range-slider
              track-color="gray"
              thumb-color="baseColor"
              color="baseColor"
              v-model="sliderPrice"
              thumb-label="always"
              :min="min"
              :max="max"
              thumb-size="40"
            ></v-range-slider>
          </v-list-item>
          <v-list-item class="mt-0 filter-btn">
            <v-btn
              small
              color="orange"
              @click="$emit('handle-filter-price', sliderPrice)"
            >
              FILTER
            </v-btn>
          </v-list-item>
          <v-subheader>ԱՆՎԱՆՈՒՄ</v-subheader>
          <v-divider></v-divider>
          <v-list-item>
            <v-text-field
              color="black"
              v-model="searchInputValue"
              placeholder="Անվանումը"
            ></v-text-field>
          </v-list-item>
          <v-list-item class="mt-0 filter-btn">
            <v-btn
              @click="$emit('handle-filter-search', searchInputValue)"
              small
              color="orange"
            >
              SEARCH
              <v-icon right size="15">fa fa-search</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </v-row>
</template>

<script>
export default {
  name: "FilterContent",
  props: {
    filterDrawer: Boolean
  },
  data: () => ({
    searchInputValue: "",
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" }
    ],
    min: 0,
    max: 30000,
    sliderPrice: [0, 30000]
  }),
  methods: {
    handleChangeNavDrawer() {
      this.$emit("change-navigation-drawer");
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-content {
  .v-navigation-drawer {
    z-index: 999;
    min-width: 250px !important;
    button {
      margin: 5px 0;
      outline: none !important;
      border: none !important;
      display: flex;
      justify-content: start;
    }
  }
  .active-filter-btn {
    color: #e65540 !important;
    font-weight: bold;
    i {
      color: #e65540 !important;
    }
  }
  #filter-modal-btn {
    z-index: 1000;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-image: linear-gradient(
      to left bottom,
      #e65540,
      #f67233,
      #ff9224,
      #ffb20e,
      #ffd300
    );
  }
  .v-card {
    box-shadow: unset !important;
    width: 100%;
    .v-subheader {
      font-size: 18px;
      color: #333333;
      text-align: center;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .filter-btn {
      margin-top: -15px !important;
      button {
        font-weight: bold !important;
        &:focus {
          outline: unset !important;
        }
      }
    }
  }
  .active-filter-drawer {
    color: white !important;
    background-image: linear-gradient(
      to right top,
      #e65540,
      #f67233,
      #ff9224,
      #ffb20e,
      #ffd300
    ) !important;
  }
  .v-divider {
    margin: 0 !important;
  }
  @media all and (max-width: 600px) {
    .v-navigation-drawer {
      height: 500px !important;
    }
  }
}
</style>

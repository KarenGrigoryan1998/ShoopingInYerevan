<template>
  <v-btn fab color="white--text" @click="$vuetify.goTo(0, options)">
    <v-icon>fa fa-arrow-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ToTopButton",
  data() {
    return {
      options: {
        duration: 400,
        easing: "linear"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  outline: unset !important;
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 99999;
  background-image: radial-gradient(
    circle,
    #e65540,
    #f67233,
    #ff9224,
    #ffb20e,
    #ffd300
  );
}
</style>

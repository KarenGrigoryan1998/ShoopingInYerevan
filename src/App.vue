<template>
  <v-app>
    <NavBar />
    <v-main app class="mb-0">
      <router-view></router-view>
      <router-view name="authComponent"></router-view>
    </v-main>
    <v-footer class="p-0">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>
<style lang="scss">
@import "assets/style/style";
</style>

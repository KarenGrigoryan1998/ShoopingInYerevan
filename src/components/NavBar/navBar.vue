<template>
  <v-container>
    <v-navigation-drawer
      class="hidden-md-and-up none"
      v-model="drawer"
      temporary
      app
      id="nav-bar-navigation-drawer"
    >
      <v-list>
        <v-list-item-group active-class="active-drawer-btn">
          <v-list-item v-for="navItem in menuItems" :key="navItem.title">
            <v-list-item-icon>
              <v-icon>{{ navItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ navItem.title }}</v-list-item-title>
          </v-list-item>
          <v-btn
            outlined
            color="baseColor"
            class="signIn-button"
            @click="SignIn"
          >
            Մուտք
          </v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar gray lighten-4 fixed app style="z-index: 99">
      <v-app-bar-nav-icon
        class="ml-5 hidden-md-and-up"
        @click="drawer = true"
        :class="[{ 'active-burger': drawer }]"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>ShoppingInYerevan<span>.</span> </v-toolbar-title>
      <v-layout justify-center>
        <v-btn
          outlined
          exact-active-class="active-btn"
          depressed
          class="hidden-sm-and-down baseColor--text text-decoration-none mx-2"
          id="nav-bar-buttons"
          v-for="menuItem in menuItems"
          :key="menuItem.title"
          :to="menuItem.link"
        >
          {{ menuItem.title }}</v-btn
        >
      </v-layout>
      <v-btn outlined color="baseColor" class="signIn-button" @click="SignIn">
        Մուտք
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
import EventBus from "@/eventBus";

export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      activeBtn: 1,
      menuItems: [
        { title: "Գլխավոր", link: "/", icon: "fa fa-home" },
        { title: "Տեսականի", link: "/products", icon: "fa fa-shopping-bag" },
        { title: "Պայմաններ", link: "/4", icon: "mdi-help-box" },
        { title: "Հաճախ տրվող հարցեր", link: "/faq", icon: "fa fa-tag" },
        { title: "Հետադարձ Կապ", link: "/5", icon: "fa fa-phone" }
      ]
    };
  },
  methods: {
    SignIn: function() {
      EventBus.$emit("sign-in-button-clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
#nav-bar-buttons {
  font-size: 15px;
  color: black !important;
  text-transform: none !important;
  border: unset;
  background: white;
  border-radius: 20px;
}
.v-app-bar__nav-icon {
  .v-btn__content {
    .v-icon {
      font-size: 50px;
    }
  }
}
</style>

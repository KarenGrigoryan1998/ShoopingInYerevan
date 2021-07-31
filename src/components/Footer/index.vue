<template>
  <v-card class="flex text-center rounded-0">
    <v-card-text>
      <p>
        <strong>Հասցե :</strong> Դավիթաշեն 3-րդ թաղ.
        <span class="mx-2">|</span> <strong>Հեռ. :</strong> +374 99 163658
        <span class="mx-2">|</span>
        <strong>Email :</strong> shoppingInYerevan@gmail.com
      </p>
    </v-card-text>
    <v-card-text class="social-network">
      <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4" dark icon>
        <a :href="icon.link" class="text-decoration-none">
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </a>
      </v-btn>
    </v-card-text>
    <v-card-text class="py-2 white--text text-center footer-rules">
      <p>
        © 2020 <strong class="white--text">ShoppingInYerevan. </strong> Բոլոր
        իրավունքները պաշտպանված են.
      </p>
      <ToTopButton />
    </v-card-text>
  </v-card>
</template>

<script>
import ToTopButton from "../ToTopButton/";
export default {
  name: "Footer",
  components: {
    ToTopButton
  },
  data: () => ({
    icons: [
      { icon: "mdi-facebook", link: "/facebook.com" },
      { icon: "mdi-twitter", link: "/twetter" },
      { icon: "mdi-linkedin", link: "/linkedin" },
      { icon: "mdi-instagram", link: "Instagram" }
    ]
  })
};
</script>

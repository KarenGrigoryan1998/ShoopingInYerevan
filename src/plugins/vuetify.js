import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "font-awesome/css/font-awesome.min.css";
Vue.use(Vuetify);

export default new Vuetify({
  iconfont: "md",
  options: {
    customProperties: true
  },
  theme: {
    themes: {
      light: {
        baseColor: "#e65540",
        secondBaseColor: "#2D3753",
        thirdBaseColor: "#141926",
        createRecipeBaseColor: "#072831",
        baseInputBackground: "#DEE1E2",
        grayBackground: "#8FA9B0",
        activeBaseColor: "#ADFF2F",
        actwiveBaseColor: "#ADFwF2F"
      }
    }
  }
});

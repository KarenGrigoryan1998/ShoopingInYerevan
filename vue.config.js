const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  },

  publicPath: process.env.NODE_ENV === "development" ? "/" : "/"
};

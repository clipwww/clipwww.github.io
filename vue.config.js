const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";

// ref. https://cli.vuejs.org/config/#vue-config-js
module.exports = {
  lintOnSave: true,

  css: {
    loaderOptions: {
      // 預先載入的全域共用scss
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_transition.scss";
          @import "@/assets/scss/_mixin.scss";
          @import "@/assets/scss/_animation.scss";
        `
        // ref. https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
      },
    }
  },


  configureWebpack: {
    output: {
      filename: "[name].[hash].js"
    },
    optimization: {
      minimizer: [
        ...isDev ? [] : [
          new TerserPlugin({
            terserOptions: {
              keep_classnames: true,
              compress: {
                drop_console: true,
              },
            }
          })
        ]
      ]
    },
  }
};

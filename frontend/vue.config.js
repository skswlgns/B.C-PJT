module.exports = {
  configureWebpack: {
    // other webpack options to merge in ...
  },
  // devServer Options don't belong into `configureWebpack`
  devServer: { host: "0.0.0.0", hot: true, disableHostCheck: true },
  // css: { 
  //   loaderOptions: { 
  //     scss: { 
  //       prependData: 
  //     ` @import "@/assets/scss/_variables.scss"; 
  //       @import "@/assets/scss/_bootstrap_global.scss"; `, 
  //     }, 
  //   }, 
  // }, 
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          indentedSyntax: true
        },
        prependData: 
        ` @import "@/assets/scss/_variables.scss"; 
        @import "@/assets/scss/_bootstrap_global.scss"; `, 
      },
    },
  },
  assetsDir: '@/assets/',
}


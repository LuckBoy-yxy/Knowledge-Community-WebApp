const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(resolve('./src/assets/icons'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/assets/styles/variables.scss';"
      }
    }
  }
}

// const { defineConfig } = require('@vue/cli-service')

// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     const svgRule = config.module.rule('svg')
//     svgRule.uses.clear()
//     svgRule
//       .test(/\.svg$/)
//       .include.add(resolve('./src/assets/icons'))
//       .end()
//       .use('svg-sprite-loader')
//       .loader('svg-sprite-loader')
//       .options({
//         symbolId: 'icon-[name]'
//       })
//     config.module
//       .rule('images')
//       .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
//       .exclude.add(resolve('./src/assets/icons'))
//   }
// })

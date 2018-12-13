const path = require('path')
// const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const isEnvDevelopment = process.env.NODE_ENV === 'development'
const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = {
  // baseUrl: '//ui.nmtree.com/step/',
  assetsDir: 'static',
  css: {
    // modules: true,
    loaderOptions: {
      css: {
        localIdentName: '_[hash:8]'
        // camelCase: 'only'
      },
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "css/variables.scss";`
      }
    }
  },
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.output
      .filename(isEnvProduction
        ? 'static/js/[name].[chunkhash:8].js'
        : isEnvDevelopment && 'static/js/bundle.js')
      .chunkFilename(isEnvProduction
        ? 'static/js/[name].[chunkhash:8].chunk.js'
        : isEnvDevelopment && 'static/js/[name].chunk.js')
      .library('SealUI')
      .libraryTarget('umd')
      .umdNamedDefine(true)
      .end()
    config.resolve
      .alias
      .set('css', path.resolve(__dirname, './src/assets/scss'))
      .end()
    isEnvProduction &&
    config.externals({
      'vue': 'Vue',
      'vuex': 'Vuex',
      'axios': 'axios',
      'vue-router': 'VueRouter'
    }).end()
    isEnvProduction &&
    config.optimization
      .minimize(true)
      .minimizer([
        new TerserPlugin({
          terserOptions: {
            compress: {
              // turn off flags with small gains to speed up minification
              arrows: false,
              collapse_vars: false, // 0.3kb
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,

              // a few flags with noticable gains/speed ratio
              // numbers based on out of the box vendor bundle
              booleans: true, // 0.7kb
              if_return: true, // 0.4kb
              sequences: true, // 0.7kb
              unused: true, // 2.3kb

              // required features to drop conditional branches
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            output: {
              ecma: 5,
              comments: /^\**!|@preserve|@license|@cc_on/,
              ascii_only: true
            },
            mangle: {
              safari10: true
            }
          },
          parallel: true,
          cache: true,
          sourceMap: false
        })
      ])
      .end()
    config
      .plugin('banner')
      .use(require('webpack/lib/BannerPlugin'), ['hash:[hash]\nchunkhash:[chunkhash]\nfilebase:[filebase]\n query:[query]\nfile:[file]'])
      .end()
  },
  devServer: {
    port: 10020
    // proxy: 'http://localhost:4000'
  }
}

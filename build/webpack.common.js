const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin') // stats: 'errors-only'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const { VueLoaderPlugin } = require('vue-loader')
const rules = require('./webpack.rules.js')
require('dotenv').config({ path: `.env.${process.env.envMode}` })
const envVar = Object.entries(process.env).reduce((preRes, [key, value], index) => {
  if (key == 'NODE_ENV' || key == 'BASE_URL' || /^VUE_APP_/.test(key)) {
    preRes[key] = value
  }
  return preRes
}, {})

const cdn = {
  dev: {
    css: [],
    js: []
  },
  prod: {
    css: [],
    js: ['https://lib.baomitu.com/vue/3.2.36/vue.runtime.global.prod.js', 'https://lib.baomitu.com/vue-router/4.1.5/vue-router.global.prod.min.js']
  }
}
module.exports = function (isProdMode) {
  return {
    stats: 'errors-only',
    entry: path.resolve(__dirname, '../src/main.js'),
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json', '.mjs'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
        api: path.resolve(__dirname, '../src/api'),
        utils: path.resolve(__dirname, '../src/utils'),
        assets: path.resolve(__dirname, '../src/assets')
      }
    },
    performance: {
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      hints: 'warning'
    },
    externals: isProdMode
      ? {
          vue: 'Vue',
          'vue-router': 'VueRouter'
        }
      : {},
    module: {
      rules: rules(isProdMode)
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin({
        clearConsole: true
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
        title: '',
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true
        },
        files: isProdMode ? cdn.prod : cdn.dev
      }),
      // 业务中使用：url: `https://aaa/bbb/${process.env.全局变量}`,
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          ...envVar
        }),
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
      }),
      new VueLoaderPlugin(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      ComponentsPlugin({
        resolvers: [ElementPlusResolver()]
      })
      // new ModuleFederationPlugin({
      //   name: 'app_tms',
      //   filename: 'remoteEntry.js',
      //   remotes: {
      //     app_wms: 'app_wms@http://localhost:8010/remoteEntry.js'
      //   },
      //   exposes: {}
      //   // shared: {
      //   //   vue: {
      //   //     singleton: true
      //   //   }
      //   // }
      // })
    ]
  }
}

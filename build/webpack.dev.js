const path = require('path')
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')
const webpackDev = {
  mode: 'development',
  // devtool: 'eval-cheap-module-source-map',
  // devtool: 'cheap-module-source-map',
  devtool: 'eval-cheap-module-source-map',
  module: {},
  plugins: [],
  optimization: {
    // webpack5 热更新必配
    runtimeChunk: 'single'
  },
  devServer: {
    // open: false,
    host: '0.0.0.0',
    port: 8008,
    https: false,
    hot: true,
    historyApiFallback: true,
    allowedHosts: 'all', // 允许不同局域网下，前后端跨域联调 (Invalid Host header )
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
    // proxy: {
    //   '/api': {
    //     // target: 'http://106.75.249.35:8011',
    //     // target: 'https://dev-api.jzcang.cn',
    //     target: 'http://192.168.6.128:7999',
    //     pathRewrite: { '^/api': '' }
    //   }
    // }
  }
}
module.exports = merge(webpackCommon(false), webpackDev)

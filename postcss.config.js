let postcssPresetEnv = require('postcss-preset-env')
let postcssPxtorem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: 'last 5 version'
    })
    // postcssPxtorem({
    //   rootValue: 100,
    //   propList: ['*'],
    //   minPixelValue: 1,
    //   unitPrecision: 6,
    //   exclude: /node_modules/i, // 忽略node_modules目录下的文件
    //   selectorBlackList: ['el', 'el-*', 'nav-*', 'nav'],
    //   replace: true,
    //   mediaQuery: false
    // })
  ]
}

// module.exports = {
//   plugins: {
//     autoprefixer: {
//       overrideBrowserslist: ['Android 5.0', 'iOS 7.1', 'Chrome > 40', 'ff > 31', 'ie >= 11']
//     }
//   }
// }

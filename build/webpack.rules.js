const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = function (isProdMode) {
  return [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true // 配置了cacheDirectory:true，会将资源存放在浏览器cache的cache storage中，再次访问直接加载缓存中的资源
          // presets: ['@babel/preset-env'] 移到babel.config.js中配置
        }
      },
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        // 原本打包过后是css-in-js。使用MiniCssExtractPlugin后,可以将css单独以文件的形式打包出来
        // 在生产模式下的plugins选项中，还需要配置提取到哪个路径
        // 但是MiniCssExtractPlugin不支持热更新，所以开发环境下，仍然使用style-loader
        !isProdMode
          ? 'style-loader'
          : {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        !isProdMode
          ? 'style-loader'
          : {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    },
    {
      test: /\.(scss|sass)$/,
      use: [
        !isProdMode
          ? 'style-loader'
          : {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(eot|svg|ttf|woff|)$/,
      type: 'asset/resource', // 拷贝到输出目录 相当于file-loader
      generator: {
        // 输出文件位置以及文件名
        filename: 'fonts/[hash:8].[name][ext]'
      }
    },
    {
      test: /\.(png|jpg|svg|gif|webp)$/,
      type: 'asset',
      generator: {
        // [ext]前面自带"."
        filename: 'assets/[hash:8].[name][ext]'
      },
      parser: {
        dataUrlCondition: {
          // 100kb内，base64内联
          maxSize: 100 * 1024
        }
      }
    },
    {
      test: /\.ico$/,
      type: 'asset/inline' //编成base64内联, url-loader
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
}

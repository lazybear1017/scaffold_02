const productionConfig = require('./webpack.prod.conf.js') // 引入生产环境配置文件
const developmentConfig = require('./webpack.dev.conf.js') // 引入开发环境配置文件
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将 css 单独打包成文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

console.log('   当前环境为：', process.env.NODE_ENV)

const generateConfig = env => {
  const eslintLoader = [
    {
      loader: 'eslint-loader'
    }
  ]
  const scriptLoader = [
    {
      loader: 'babel-loader'
    }
  ]
  const cssLoader = [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'less-loader'
  ]
  const cssExtractLoader = [
    {
      loader: MiniCssExtractPlugin.loader
    },
    'css-loader',
    'postcss-loader', // 使用 postcss 为 css 加上浏览器前缀
    'less-loader' // 使用 sass-loader 将 scss 转为 css
  ]
  const fontLoader = [
    {
      loader: 'url-loader',
      options: {
        name: '[name]-[hash:5].min.[ext]',
        limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
        publicPath: 'fonts/',
        outputPath: 'fonts/'
      }
    }
  ]
  const imageLoader = [
    {
      loader: 'url-loader',
      options: {
        name: '[name]-[hash:5].min.[ext]',
        limit: 10000, // size <= 10KB
        outputPath: 'images/'
      }
    }
  ]
  const styleLoader =
      env === 'production'
        ? cssExtractLoader // 生产环境下压缩 css 代码
        : cssLoader // 开发环境：页内样式嵌入

  return {
    entry: {
      index: './src/index.js'
    },
    output: {
      publicPath: env === 'development' ? '/' : './',
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name]-[hash:5].bundle.js',
      chunkFilename: '[name]-[hash:5].chunk.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /(node_modules)/, enforce: 'pre', use: eslintLoader },
        { test: /\.js$/, exclude: /(node_modules)/, use: scriptLoader },
        { test: /\.(le|c)ss$/, use: styleLoader },
        { test: /\.(eot|woff2?|ttf|svg)$/, use: fontLoader },
        { test: /\.(png|jpg|jpeg|gif)$/, use: imageLoader }
      ]
    },
    plugins: [
      // 开发环境和生产环境二者均需要的插件
      new HtmlWebpackPlugin({
        title: 'webpack4 实战',
        filename: 'index.html',
        template: path.resolve(__dirname, '..', './public/index.html'),
        // chunks: ['app'],
        minify: {
          collapseWhitespace: true
        }
      }),
      new CleanWebpackPlugin(),
      new ProgressBarPlugin({
        format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:current/:total) modules ' + ' (:elapsed seconds)',
        clear: true // 打包完成时清楚进度条
      })

    ]
  }
}

module.exports = () => {
  const config = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig
  return merge(generateConfig(process.env.NODE_ENV), config)
}

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
  return {
    entry: {
      index: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
      publicPath: env === 'development' ? '/' : './', // js 引用的路径或者 CDN 地址
      filename: 'js/[name]-entry-[hash:8].js', // 代码打包后的文件名  'index_entry_-ce3a6217.js'
      chunkFilename: 'js/[name]-[hash:8].chunk.js' // splitChunk打包文件名
    },
    module: {
      rules: [
        // eslint-loader
        {
          test: /\.(jsx?)$/,
          enforce: 'pre',
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'eslint-loader',
              options: {
                emitError: false,
                emitWarning: true,
                formatter: 'eslint/lib/cli-engine/formatters/codeframe'
              }
            }
          ]
        },
        // babel-loader
        {
          test: /\.(jsx?)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        // url-loader 图片
        {
          test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'images/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        // url-loader 音视频
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'media/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        // url-loader 字体
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'fonts/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(le|c)ss$/,
          use: env === 'production' ? [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'postcss-loader',
            'less-loader'
          ] : [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
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

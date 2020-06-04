const webpack = require('webpack')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { getIp } = require('./getIp')

module.exports = {
  mode: 'development',
  devtool: 'source-map', // 调试源码
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    contentBase: path.join(__dirname, '../dist/'),
    overlay: true,
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    publicPath: '',
    disableHostCheck: true,
    clientLogLevel: 'warning',
    compress: true,
    quiet: true,
    inline: true,
    proxy: [
      {
        context: [
          '/tenant/**',
          '/api/**',
          '/notify/**',
          '/frontend/**'
        ],
        target: 'http://newprod.dev.cn/'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          '你的应用程序运行在: http://localhost:8080/'
        ],
        notes: [
          `你也能够使用下面地址访问: \n\n${getIp().ipv4Ip && `    http://${getIp().ipv4Ip}:8080/\n`}${getIp().host && `    http://${getIp().host}:8080/\n`}    http://127.0.0.1:8080/\n`
        ]
      },
      onErrors: function () { /* omitted long function */ }
    })
  ]
}

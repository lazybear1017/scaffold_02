const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将 css 单独打包成文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩 css

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
      minSize: 614400,
      maxSize: 1024000,
      cacheGroups: {
        styles: {
          name: 'style',
          test: /\.(le|c)ss$/,
          chunks: 'all',
          enforce: true
        },
        lodash: {
          name: 'lodash', // 单独将 lodash 拆包
          priority: 15,
          test: /[\\/]node_modules[\\/]lodash[\\/]/
        }
      }
    },
    sideEffects: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css',
      chunkFilename: 'css/[id]-[hash:8].css'
    }),
    // 压缩 css
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g, // 一个正则表达式，指示应优化/最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
      cssProcessor: require('cssnano'), // 用于优化\最小化 CSS 的 CSS处理器，默认为 cssnano
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, // 传递给 cssProcessor 的选项，默认为{}
      canPrint: true // 一个布尔值，指示插件是否可以将消息打印到控制台，默认为 true
    })
  ]
}

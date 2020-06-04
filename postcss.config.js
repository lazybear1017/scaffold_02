module.exports = {
  plugins: [
    require('postcss-import')(), // 处理css的@import 只支持本地的 import 处理,不支持http 等远程的URL链接的处理
    require('autoprefixer')() // 添加前缀，兼容不同浏览器

  ]
}

module.exports = {
  publicPath:process.env.NODE_ENV === 'production'?'./':'/',  // 根目录（防止打包后出错）
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        // @ 默认是 src，设置别名后，就不用'./'了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}

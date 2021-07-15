module.exports = {
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
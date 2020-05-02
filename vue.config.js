// 项目的代理跨域配置文件

module.exports = {
  devServer: {
    proxy: {
      // key: value
      //      key - 前缀
      //      value - 是跟 http-proxy-middleware 相同的一个配置对象

      '/flr': {
        // 目标地址，只写主机
        target: ' https://m.hua.com',
        changeOrigin: true,
        pathRewrite: {
          '^/flr': ''
        }
      }
    }
  }
}

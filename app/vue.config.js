const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 關閉eslint
  lintOnSave: false,
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('@assets', resolve('src/assets'))
  //     .set('@components', resolve('src/components'))
  //     .set('@examComponents', resolve('src/components/exam'))
  // }
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: { '^/api': '' },
      },
    },
  },
}
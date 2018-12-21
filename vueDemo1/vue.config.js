module.exports = {
    //基本路径
    baseUrl: './',
    assetsDir: 'assets',
    //端口配置参数
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {
        }
      },
}
const url = 'http://127.0.0.1:9999'
module.exports = {
    // 配置转发代理
    devServer: {
        proxy: {
            '/oauth': {
                target: url,
                ws: true,
                pathRewrite: {
                '^/oauth': '/oauth'
                }
            }
        }
    }
}

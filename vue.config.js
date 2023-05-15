const path = require('path')


function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave:false,
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

    },
    devServer:{
        port: 80,
        open: true,
        proxy:{
            '/bilibili':{
                target: 'http://localhost:7001',
                //pathRewrite:{'^/api':''},路径重写
            }
        }
    },
}

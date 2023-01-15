
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    publicPath: '/dashboard/',
    assetsDir: './dashboard/',
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        devServer: {
            headers: { 'Access-Control-Allow-Origin': '*' },
            host: '24.199.97.221',
            port: 8080,
            public: '24.199.97.221:8080'
        }
    }
}

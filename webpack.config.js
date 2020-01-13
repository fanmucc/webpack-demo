const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',       // 打包模式， 生产模式: production， 开发模式: development
    entry: path.resolve(__dirname, './src/main.js'),        // 打包的入口文件
    output: {
        filename: '[name].[hash:8].js',       // 打包后的js文件
        path: path.resolve(__dirname, './build')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
    ]
}